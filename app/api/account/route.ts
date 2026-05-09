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
  const subscription = await getActivePlusSubscription(data.user.id);
  const plus = admin || Boolean(subscription);
  return NextResponse.json({
    authenticated: true,
    plus,
    admin,
    billingPortalAvailable: Boolean(subscription?.stripe_customer_id),
    email: data.user.email || null,
  });
}
