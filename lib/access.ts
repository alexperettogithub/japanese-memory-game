import { createSupabaseAdmin } from './supabase-admin';
export { isAdvancedKanjiGrade } from './kanji';

export async function hasActivePlus(userId: string) {
  const admin = createSupabaseAdmin();
  const { data, error } = await admin
    .from('subscriptions')
    .select('status,current_period_end')
    .eq('user_id', userId)
    .in('status', ['active', 'trialing'])
    .maybeSingle();

  if (error) throw error;
  if (!data) return false;
  if (!data.current_period_end) return true;
  return new Date(data.current_period_end).getTime() > Date.now();
}
