import { NextResponse } from 'next/server';
import { getActivePlusSubscription, hasActivePlus, isAdminEmail } from '@/lib/access';
import { createSupabaseServer } from '@/lib/supabase-server';

export async function GET() {
  const supabase = await createSupabaseServer();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    return NextResponse.json({ authenticated: false, plus: false });
  }

  const admin = isAdminEmail(data.user.email);
  let subscription = null;
  try {
    subscription = await getActivePlusSubscription(data.user.id);
  } catch (error) {
    console.warn('account.subscription_check.failed', {
      code: error && typeof error === 'object' && 'code' in error ? error.code : 'unknown',
    });
  }
  const plus = admin || Boolean(subscription);
  return NextResponse.json({
    authenticated: true,
    plus,
    admin,
    billingPortalAvailable: Boolean(subscription?.stripe_customer_id),
    email: data.user.email || null,
  });
}
