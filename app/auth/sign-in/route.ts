import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import { assertAllowedOrigin, checkRateLimit, getConfiguredAppUrl, getRateLimitKey } from '@/lib/security';

export async function POST(request: Request) {
  let destination = '/login?error=server-config';
  let intent = 'signin';

  try {
    const formData = await request.formData();
    const email = String(formData.get('email') || '').trim();
    intent = formData.get('intent') === 'signup' ? 'signup' : 'signin';
    const origin = getConfiguredAppUrl();
    const modeQuery = `mode=${intent}`;

    if (!email) {
      destination = `/login?${modeQuery}&error=missing-email`;
    } else {
      assertAllowedOrigin(request);
      if (!checkRateLimit(getRateLimitKey(request, 'auth', email), 5, 60 * 60 * 1000)) {
        destination = `/login?${modeQuery}&error=rate-limited`;
      } else {
        const supabase = await createSupabaseServer();
        const { error } = await supabase.auth.signInWithOtp({
          email,
          options: {
            shouldCreateUser: intent === 'signup',
            emailRedirectTo: `${origin}/auth/callback`,
          },
        });

        destination = error ? `/login?${modeQuery}&error=sign-in-failed` : `/login?${modeQuery}&sent=1`;
      }
    }
  } catch (error) {
    destination = `/login?mode=${intent}&error=server-config`;
  }

  redirect(destination);
}
