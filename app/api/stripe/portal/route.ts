import { NextResponse } from 'next/server';
import { createStripe } from '@/lib/stripe';
import { createSupabaseServer } from '@/lib/supabase-server';
import { createSupabaseAdmin } from '@/lib/supabase-admin';
import { assertAllowedOrigin, getConfiguredAppUrl } from '@/lib/security';

export async function POST(request: Request) {
  try {
    assertAllowedOrigin(request);
  } catch {
    return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
  }

  const supabase = await createSupabaseServer();
  const { data } = await supabase.auth.getUser();
  if (!data.user) return NextResponse.json({ error: 'Authentication required' }, { status: 401 });

  const admin = createSupabaseAdmin();
  const { data: subscription, error } = await admin
    .from('subscriptions')
    .select('stripe_customer_id')
    .eq('user_id', data.user.id)
    .maybeSingle();

  if (error || !subscription?.stripe_customer_id) {
    return NextResponse.json({ error: 'No Stripe customer found' }, { status: 404 });
  }

  const origin = getConfiguredAppUrl();
  const stripe = createStripe();
  const session = await stripe.billingPortal.sessions.create({
    customer: subscription.stripe_customer_id,
    return_url: origin,
  });

  return NextResponse.json({ url: session.url });
}
