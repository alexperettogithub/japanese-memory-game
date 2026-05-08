import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';
import { getPublicEnv } from './env';

export async function createSupabaseServer() {
  const cookieStore = await cookies();
  const env = getPublicEnv();

  return createServerClient(env.supabaseUrl, env.supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          cookieStore.set(name, value, options);
        });
      },
    },
  });
}
