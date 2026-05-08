# Staging

Japanese Memory Game uses a staging channel to review significant product and infrastructure changes before they reach production.

## Release Channels

- `main` represents the production release line.
- `staging` is used for the Next.js application, account flows, anonymous usage limits, Plus access, payment integration, transactional email, and production-readiness review.

The staging environment exists to protect learners from unfinished changes and to allow realistic testing before a production release.

## Public Staging URL

The staging app is available at:

```text
https://staging.japanesememorygame.com
```

Staging may contain incomplete behavior, test-mode payment flows, temporary data, or features that are still under review. It should not be treated as the canonical public product.

## Current Staging Scope

The current staging work includes:

- Next.js App Router migration.
- Supabase email magic-link authentication.
- Anonymous Explore and Play usage limits.
- Server-side access control for advanced kanji content.
- Stripe Plus subscription flows.
- Transactional account and subscription emails.
- Account deletion flow with subscription-state protection.
- Cookie and browser-storage notice.
- Security headers and same-site request hardening.

## Review Principles

Before staging changes are promoted to production, they should be reviewed for:

- Learning value and interface quality.
- Desktop and mobile usability.
- Account, sign-in, sign-out, and account-deletion behavior.
- Anonymous limits and free-content access.
- Plus checkout, billing portal, webhook, and entitlement behavior.
- Privacy, security, and data minimization.
- Licensing and public documentation accuracy.

## Production Promotion

Production promotion should happen only after human review, AI-assisted review where useful, successful smoke tests, and confirmation that production runtime configuration has been entered by a human operator in the dedicated production environment.

Staging and production configuration must remain separate. Test-mode payment or staging service values must not be used for real production learners.
