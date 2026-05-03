import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createStripe } from '@/lib/stripe';
import { getStripeEnv } from '@/lib/env';
import { createSupabaseAdmin } from '@/lib/supabase-admin';

export async function POST(request: Request) {
  const body = await request.text();
  const signature = (await headers()).get('stripe-signature');
  if (!signature) return NextResponse.json({ error: 'Missing signature' }, { status: 400 });

  const stripe = createStripe();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, getStripeEnv().stripeWebhookSecret);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (
    event.type === 'checkout.session.completed' ||
    event.type === 'customer.subscription.created' ||
    event.type === 'customer.subscription.updated' ||
    event.type === 'customer.subscription.deleted'
  ) {
    await syncSubscription(event);
  }

  return NextResponse.json({ received: true });
}

async function syncSubscription(event: Stripe.Event) {
  const stripe = createStripe();
  const admin = createSupabaseAdmin();
  const env = getStripeEnv();

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    if (!session.subscription || !session.client_reference_id) return;
    const subscription = await stripe.subscriptions.retrieve(String(session.subscription));
    if (!hasPlusPrice(subscription, env)) return;
    await upsertSubscription(admin, subscription, session.client_reference_id);
    return;
  }

  const subscription = event.data.object as Stripe.Subscription;
  if (!hasPlusPrice(subscription, env)) return;

  let userId = subscription.metadata.user_id;
  if (!userId) {
    const { data } = await admin
      .from('subscriptions')
      .select('user_id')
      .eq('stripe_subscription_id', subscription.id)
      .maybeSingle();
    userId = data?.user_id;
  }

  if (userId) await upsertSubscription(admin, subscription, userId);
}

function hasPlusPrice(subscription: Stripe.Subscription, env: ReturnType<typeof getStripeEnv>) {
  const plusPrices = new Set([env.stripePlusMonthlyPriceId, env.stripePlusYearlyPriceId]);
  return subscription.items.data.some((item) => plusPrices.has(item.price.id));
}

async function upsertSubscription(admin: ReturnType<typeof createSupabaseAdmin>, subscription: Stripe.Subscription, userId: string) {
  const currentPeriodEnd = (subscription as { current_period_end?: number }).current_period_end;

  await admin.from('subscriptions').upsert({
    user_id: userId,
    stripe_customer_id: String(subscription.customer),
    stripe_subscription_id: subscription.id,
    stripe_price_id: subscription.items.data[0]?.price.id || null,
    status: subscription.status,
    current_period_end: currentPeriodEnd
      ? new Date(currentPeriodEnd * 1000).toISOString()
      : null,
    updated_at: new Date().toISOString(),
  }, {
    onConflict: 'stripe_subscription_id',
  });
}
