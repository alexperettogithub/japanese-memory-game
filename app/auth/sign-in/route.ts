import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';
import { assertAllowedOrigin, checkRateLimit, getConfiguredAppUrl, getRateLimitKey } from '@/lib/security';

const PROFILE_ROLES = new Set(['student', 'teacher', 'developer', 'japanese_culture_curious']);

function normalizeCheckoutInterval(value: FormDataEntryValue | null) {
  const interval = String(value || '');
  return interval === 'monthly' || interval === 'yearly' ? interval : null;
}

function getAuthErrorCode(error: unknown) {
  if (!error || typeof error !== 'object') return 'unknown';
  if ('code' in error && typeof error.code === 'string') return error.code;
  if ('name' in error && typeof error.name === 'string') return error.name;
  return 'unknown';
}

function isMissingAccountSignIn(error: unknown) {
  return getAuthErrorCode(error) === 'otp_disabled';
}

function getAuthErrorStatus(error: unknown) {
  if (!error || typeof error !== 'object') return undefined;
  if ('status' in error && typeof error.status === 'number') return error.status;
  return undefined;
}

export async function POST(request: Request) {
  let destination = '/login?error=server-config';
  let intent = 'signin';

  try {
    const formData = await request.formData();
    const email = String(formData.get('email') || '').trim();
    intent = formData.get('intent') === 'signup' ? 'signup' : 'signin';
    const checkoutResume = formData.get('checkout') === 'resume';
    const checkoutInterval = normalizeCheckoutInterval(formData.get('checkoutInterval'));
    const firstName = String(formData.get('firstName') || '').trim();
    const lastName = String(formData.get('lastName') || '').trim();
    const role = String(formData.get('role') || '').trim();
    const origin = getConfiguredAppUrl();
    const buildModeQuery = (mode = intent) => {
      const params = new URLSearchParams({ mode });
      if (checkoutResume) {
        params.set('checkout', 'resume');
        if (checkoutInterval) params.set('interval', checkoutInterval);
      }
      return params.toString();
    };
    const callbackParams = new URLSearchParams({ intent });
    if (checkoutResume) {
      callbackParams.set('checkout', 'resume');
      if (checkoutInterval) callbackParams.set('interval', checkoutInterval);
    }
    const modeQuery = buildModeQuery();

    if (!email) {
      destination = `/login?${modeQuery}&error=missing-email`;
    } else if (intent === 'signup' && (!firstName || !PROFILE_ROLES.has(role))) {
      destination = `/login?${modeQuery}&error=missing-profile`;
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
            emailRedirectTo: `${origin}/auth/callback?${callbackParams.toString()}`,
            data: intent === 'signup' ? {
              first_name: firstName,
              last_name: lastName || null,
              role,
            } : undefined,
          },
        });

        if (error) {
          console.error('auth.magic_link.failed', {
            intent,
            code: getAuthErrorCode(error),
            status: getAuthErrorStatus(error),
          });
        }

        if (error && intent === 'signin' && isMissingAccountSignIn(error)) {
          destination = `/login?${buildModeQuery('signup')}&error=account-not-found`;
        } else {
          destination = error ? `/login?${modeQuery}&error=sign-in-failed` : `/login?${modeQuery}&sent=1`;
        }
      }
    }
  } catch (error) {
    console.error('auth.magic_link.exception', {
      intent,
      code: getAuthErrorCode(error),
      status: getAuthErrorStatus(error),
    });
    destination = `/login?mode=${intent}&error=server-config`;
  }

  redirect(destination);
}
