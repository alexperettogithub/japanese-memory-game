import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createStripe } from '@/lib/stripe';
import { createSupabaseServer } from '@/lib/supabase-server';
import { getStripeCheckoutEnv } from '@/lib/env';
import { assertAllowedOrigin, checkRateLimit, getConfiguredAppUrl, getRateLimitKey, rateLimitResponse } from '@/lib/security';

function getStripeErrorMeta(error: unknown) {
  if (!error || typeof error !== 'object') return { type: 'unknown' };
  return {
    type: 'type' in error && typeof error.type === 'string' ? error.type : 'unknown',
    code: 'code' in error && typeof error.code === 'string' ? error.code : 'unknown',
    statusCode: 'statusCode' in error && typeof error.statusCode === 'number' ? error.statusCode : undefined,
  };
}

export async function POST(request: Request) {
  try {
    assertAllowedOrigin(request);
  } catch {
    return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
  }

  const { interval, acceptedTerms, acceptedImmediateAccess } = await request.json().catch(() => ({ interval: 'monthly' }));
  if (interval !== 'monthly' && interval !== 'yearly') {
    return NextResponse.json({ error: 'Invalid interval' }, { status: 400 });
  }
  if (acceptedTerms !== true || acceptedImmediateAccess !== true) {
    return NextResponse.json({ error: 'Legal acknowledgement required' }, { status: 400 });
  }

  const supabase = await createSupabaseServer();
  const { data } = await supabase.auth.getUser();

  if (!data.user?.email) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }

  if (!checkRateLimit(getRateLimitKey(request, 'checkout', data.user.id), 10, 60 * 60 * 1000)) {
    return rateLimitResponse();
  }

  try {
    const env = getStripeCheckoutEnv();
    const price = interval === 'yearly' ? env.stripePlusYearlyPriceId : env.stripePlusMonthlyPriceId;
    const origin = getConfiguredAppUrl();
    const stripe = createStripe(env.stripeSecretKey);
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer_email: data.user.email,
      client_reference_id: data.user.id,
      line_items: [{ price, quantity: 1 }],
      subscription_data: {
        metadata: {
          user_id: data.user.id,
          product: 'japanese_memory_game_plus',
          terms_version: '2026-05-11',
          privacy_version: '2026-05-11',
          immediate_access_acknowledged: 'true',
        },
      },
      success_url: `${origin}/?checkout=success`,
      cancel_url: `${origin}/?checkout=cancelled`,
      metadata: {
        user_id: data.user.id,
        product: 'japanese_memory_game_plus',
        terms_version: '2026-05-11',
        privacy_version: '2026-05-11',
        immediate_access_acknowledged: 'true',
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('stripe.checkout.failed', getStripeErrorMeta(error));
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json({ error: 'Checkout is unavailable right now.' }, { status: 502 });
    }
    return NextResponse.json({ error: 'Checkout is unavailable right now.' }, { status: 500 });
  }
}
