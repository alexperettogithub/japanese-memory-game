import { createSupabaseAdmin } from './supabase-admin';
import { getAdminEnv, getStripeEnv } from './env';
export { isAdvancedKanjiGrade } from './kanji';

export function isAdminEmail(email?: string | null) {
  if (!email) return false;
  return getAdminEnv().adminEmails.includes(email.toLowerCase());
}

export async function getActivePlusSubscription(userId: string) {
  const admin = createSupabaseAdmin();
  const stripeEnv = getStripeEnv();
  const plusPriceIds = [stripeEnv.stripePlusMonthlyPriceId, stripeEnv.stripePlusYearlyPriceId];
  const { data, error } = await admin
    .from('subscriptions')
    .select('stripe_customer_id,status,current_period_end,stripe_price_id')
    .eq('user_id', userId)
    .in('status', ['active', 'trialing'])
    .in('stripe_price_id', plusPriceIds)
    .order('updated_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;
  if (data.current_period_end && new Date(data.current_period_end).getTime() <= Date.now()) return null;
  return data;
}

export async function hasActivePlus(userId: string, email?: string | null) {
  if (isAdminEmail(email)) return true;
  return Boolean(await getActivePlusSubscription(userId));
}
