# Staging Setup

The production static site must remain untouched while the Next.js migration is developed on the `staging` branch.

## Branches

- `main`: current production static app.
- `staging`: Next.js migration, auth wall, Plus paywall, Supabase, Stripe, and Resend work.

## Security Rules

- Do not paste real secrets in chat.
- Do not commit `.env.operator`, `.env.local`, `.env`, or any other real secret file.
- `.env.operator` is ignored by Git and by Vercel deploy uploads.
- Rotate any secret that was pasted into chat or logs before production use.
- Use Preview env first. Do not add production secrets until the migration is ready.

## Secure Mac Bridge Workflow

Create a local operator file:

```sh
npm run operator:init
```

This creates `.env.operator` if missing and prints two generated local secrets:

- `SUPABASE_IP_HASH_SALT`
- `ANONYMOUS_USAGE_COOKIE_SECRET`

Paste those generated values into `.env.operator`. Then fill the remaining values locally. Do not commit this file.

## `.env.operator` Values

Initial setup values:

```text
SUPABASE_ACCESS_TOKEN=<temporary-management-api-token>
SUPABASE_ORGANIZATION_SLUG=mhnurmpiafhoqjyivmtn
SUPABASE_DATABASE_PASSWORD=<local-staging-db-password>
SUPABASE_PROJECT_NAME="Japanese Memory Game Staging"
SUPABASE_REGION=eu-central-1
```

Runtime values for Vercel Preview:

```text
NEXT_PUBLIC_SUPABASE_URL=<from-supabase-project-api-settings>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<from-supabase-project-api-settings>
SUPABASE_SERVICE_ROLE_KEY=<from-supabase-project-api-settings>
SUPABASE_IP_HASH_SALT=<generated-by-operator-init>
ANONYMOUS_USAGE_COOKIE_SECRET=<generated-by-operator-init>
APP_URL=https://staging.japanesememorygame.com
ALLOWED_ORIGINS=https://staging.japanesememorygame.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<stripe-publishable-key>
STRIPE_SECRET_KEY=<stripe-secret-key>
STRIPE_WEBHOOK_SECRET=<stripe-staging-webhook-signing-secret>
STRIPE_PLUS_MONTHLY_PRICE_ID=<created-by-setup-stripe>
STRIPE_PLUS_YEARLY_PRICE_ID=<created-by-setup-stripe>
RESEND_API_KEY=<resend-api-key>
RESEND_FROM_EMAIL="Japanese Memory Game <noreply@japanesememorygame.com>"
```

## Vercel Preview Env

After `.env.operator` is filled, apply Preview env values without printing secrets:

```sh
npm run setup:vercel-preview-env
```

Then redeploy Preview:

```sh
vercel deploy --yes --public
```

Production env should remain untouched until the migration is approved.

## Stable Staging Domain

Recommended staging URL:

```text
https://staging.japanesememorygame.com
```

Vercel steps:

1. Project `japanese-memory-game` -> Settings -> Domains.
2. Add `staging.japanesememorygame.com`.
3. Assign it to the latest Preview deployment or staging branch if Vercel offers that option.

DNS steps in Hostinger:

```text
Type: CNAME
Name: staging
Target: cname.vercel-dns.com
TTL: default
```

After DNS is active, set:

```text
APP_URL=https://staging.japanesememorygame.com
ALLOWED_ORIGINS=https://staging.japanesememorygame.com
```

## Supabase Project

Create the staging project after filling `SUPABASE_ACCESS_TOKEN`, `SUPABASE_ORGANIZATION_SLUG`, and `SUPABASE_DATABASE_PASSWORD`:

```sh
npm run setup:supabase-project
```

The script prints sanitized project identifiers only.

Then open Supabase Dashboard:

1. Select the staging project.
2. Go to Project Settings -> API.
3. Copy Project URL, anon key, and service role key into `.env.operator`.
4. Run `npm run setup:vercel-preview-env` again.

## Supabase Database Migration

Apply:

```text
supabase/migrations/202604280001_initial_plus.sql
```

Dashboard steps:

1. Supabase project -> SQL Editor.
2. New query.
3. Paste the full migration SQL.
4. Run.

The migration creates:

- `profiles`
- `anonymous_usage_events`
- `subscriptions`
- RLS policies
- `record_anonymous_usage` RPC for atomic anonymous quota enforcement

## Supabase Auth

Enable email magic links:

1. Supabase project -> Authentication -> Providers.
2. Enable Email provider.
3. Confirm email link / OTP settings are enabled.

Configure URLs:

1. Authentication -> URL Configuration.
2. Site URL: `https://staging.japanesememorygame.com`.
3. Redirect URLs:

```text
https://staging.japanesememorygame.com/auth/callback
https://*.vercel.app/auth/callback
```

## Resend SMTP For Supabase Auth

Resend must be configured inside Supabase Auth SMTP settings. A Resend key in Vercel alone does not send Supabase magic links.

Supabase Dashboard steps:

1. Authentication -> SMTP Settings.
2. Enable custom SMTP.
3. Host: `smtp.resend.com`.
4. Port: `465` with SSL or `587` with STARTTLS.
5. Username: `resend`.
6. Password: Resend API key.
7. Sender: `Japanese Memory Game <noreply@japanesememorygame.com>` or the verified sender.

## Stripe Plus Product

After `STRIPE_SECRET_KEY` is filled locally:

```sh
npm run setup:stripe
```

The script prints:

- Product ID
- Monthly Price ID
- Yearly Price ID

Paste price IDs into `.env.operator`:

```text
STRIPE_PLUS_MONTHLY_PRICE_ID=<monthly-price-id>
STRIPE_PLUS_YEARLY_PRICE_ID=<yearly-price-id>
```

Run:

```sh
npm run setup:vercel-preview-env
```

## Stripe Webhook

Create a staging webhook in Stripe Dashboard:

```text
https://staging.japanesememorygame.com/api/stripe/webhook
```

Events:

- `checkout.session.completed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.payment_succeeded`
- `invoice.payment_failed`

Copy the webhook signing secret into `.env.operator`:

```text
STRIPE_WEBHOOK_SECRET=<stripe-webhook-signing-secret>
```

Then run:

```sh
npm run setup:vercel-preview-env
vercel deploy --yes --public
```

## Current Auth Providers

Enabled in this migration phase:

- Email magic link via Supabase Auth.

Paused for now:

- Google OAuth.
- Apple Sign In.

## Testing Checklist

1. Open `https://staging.japanesememorygame.com`.
2. Explore 15 free tiles anonymously.
3. Confirm auth wall appears on tile 16.
4. Click `Sign up (free)`.
5. Submit your email.
6. Confirm magic link arrives.
7. Open magic link and confirm callback logs you in.
8. Confirm Explore free content has no anonymous cap after sign in.
9. Try Kanji Grade 3.
10. Confirm Plus paywall appears for signed-in non-subscriber.
11. Complete Stripe test/real checkout depending on account mode.
12. Confirm webhook updates `subscriptions`.
13. Confirm Grade 3 unlocks only after active Plus subscription.
