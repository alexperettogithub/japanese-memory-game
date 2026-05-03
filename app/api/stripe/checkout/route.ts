import { NextResponse } from 'next/server';
import { createStripe } from '@/lib/stripe';
import { createSupabaseServer } from '@/lib/supabase-server';
import { getStripeEnv } from '@/lib/env';
import { assertAllowedOrigin, checkRateLimit, getConfiguredAppUrl, getRateLimitKey, rateLimitResponse } from '@/lib/security';

export async function POST(request: Request) {
  try {
    assertAllowedOrigin(request);
  } catch {
    return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
  }

  const { interval } = await request.json().catch(() => ({ interval: 'monthly' }));
  if (interval !== 'monthly' && interval !== 'yearly') {
    return NextResponse.json({ error: 'Invalid interval' }, { status: 400 });
  }

  const env = getStripeEnv();
  const supabase = await createSupabaseServer();
  const { data } = await supabase.auth.getUser();

  if (!data.user?.email) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }

  if (!checkRateLimit(getRateLimitKey(request, 'checkout', data.user.id), 10, 60 * 60 * 1000)) {
    return rateLimitResponse();
  }

  const price = interval === 'yearly' ? env.stripePlusYearlyPriceId : env.stripePlusMonthlyPriceId;
  const origin = getConfiguredAppUrl();
  const stripe = createStripe();
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    customer_email: data.user.email,
    client_reference_id: data.user.id,
    line_items: [{ price, quantity: 1 }],
    subscription_data: {
      metadata: {
        user_id: data.user.id,
        product: 'japanese_memory_game_plus',
      },
    },
    success_url: `${origin}/?checkout=success`,
    cancel_url: `${origin}/?checkout=cancelled`,
    metadata: {
      user_id: data.user.id,
      product: 'japanese_memory_game_plus',
    },
  });

  return NextResponse.json({ url: session.url });
}
