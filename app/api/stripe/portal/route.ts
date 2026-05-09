import { NextResponse } from 'next/server';
import { createStripe } from '@/lib/stripe';
import { createSupabaseServer } from '@/lib/supabase-server';
import { getActivePlusSubscription } from '@/lib/access';
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

  const subscription = await getActivePlusSubscription(data.user.id);
  if (!subscription?.stripe_customer_id) {
    return NextResponse.json({ error: 'No manageable Plus subscription found' }, { status: 404 });
  }

  const origin = getConfiguredAppUrl();
  const stripe = createStripe();
  let session;
  try {
    session = await stripe.billingPortal.sessions.create({
      customer: subscription.stripe_customer_id,
      return_url: `${origin}/?billing=updated`,
    });
  } catch (error) {
    console.error('billing.portal.failed', {
      code: error && typeof error === 'object' && 'code' in error ? error.code : 'unknown',
      type: error && typeof error === 'object' && 'type' in error ? error.type : 'unknown',
    });
    return NextResponse.json({ error: 'Plus settings are unavailable for this subscription.' }, { status: 502 });
  }

  return NextResponse.json({ url: session.url });
}
