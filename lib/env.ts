function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function optionalCsvEnv(name: string) {
  return (process.env[name] || '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);
}

export function getPublicEnv() {
  return {
    supabaseUrl: requireEnv('NEXT_PUBLIC_SUPABASE_URL'),
    supabaseAnonKey: requireEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY'),
    stripePublishableKey: requireEnv('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY'),
  };
}

export function getSupabaseEnv() {
  return {
    supabaseUrl: requireEnv('NEXT_PUBLIC_SUPABASE_URL'),
    supabaseAnonKey: requireEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY'),
    supabaseServiceRoleKey: requireEnv('SUPABASE_SERVICE_ROLE_KEY'),
  };
}

export function getUsageEnv() {
  return {
    ...getSupabaseEnv(),
    supabaseIpHashSalt: requireEnv('SUPABASE_IP_HASH_SALT'),
    anonymousUsageCookieSecret: requireEnv('ANONYMOUS_USAGE_COOKIE_SECRET'),
  };
}

export function getStripeEnv() {
  return {
    stripeSecretKey: requireEnv('STRIPE_SECRET_KEY'),
    stripeWebhookSecret: requireEnv('STRIPE_WEBHOOK_SECRET'),
    stripePlusMonthlyPriceId: requireEnv('STRIPE_PLUS_MONTHLY_PRICE_ID'),
    stripePlusYearlyPriceId: requireEnv('STRIPE_PLUS_YEARLY_PRICE_ID'),
  };
}

export function getAdminEnv() {
  return {
    adminEmails: optionalCsvEnv('JMG_ADMIN_EMAILS').map((email) => email.toLowerCase()),
  };
}

export function getResendEnv() {
  return {
    resendApiKey: requireEnv('RESEND_API_KEY'),
    resendFromEmail: requireEnv('RESEND_FROM_EMAIL'),
  };
}

export function getServerEnv() {
  return {
    ...getUsageEnv(),
    ...getStripeEnv(),
    ...getResendEnv(),
  };
}
