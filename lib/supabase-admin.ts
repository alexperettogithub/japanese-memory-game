import { createClient } from '@supabase/supabase-js';
import { getSupabaseEnv } from './env';

export function createSupabaseAdmin() {
  const env = getSupabaseEnv();
  return createClient(env.supabaseUrl, env.supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
