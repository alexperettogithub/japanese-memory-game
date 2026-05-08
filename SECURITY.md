# Security

Security reports are welcome and should be handled responsibly.

## Reporting A Vulnerability

If you believe you have found a security issue, please contact the maintainer privately before publishing details. Include enough technical information to reproduce or understand the issue, while avoiding unnecessary exposure of user data or operational details.

The maintainer will review reports in good faith and prioritize issues that may affect authentication, account data, paid access, privacy, content integrity, or service availability.

## Security Posture

Japanese Memory Game is designed to expose only what the browser needs in order to run the app.

- Private operational credentials are not published in the source code or sent to the browser.
- Server-side operations use protected runtime configuration managed by a human operator.
- AI tools assist development but do not independently manage production credentials or decide how sensitive operational values are handled.
- Authentication, billing status, account deletion, and advanced-content access are checked server-side.
- Payment processing is delegated to Stripe; the app does not handle raw card details.
- Email sign-in is handled through Supabase Auth and transactional email infrastructure.
- Security-sensitive webhook requests are verified server-side before subscription state is updated.
- Browser requests that mutate server-side state are restricted to approved same-site origins.
- Public kanji data only exposes free content; advanced content is served through authenticated and authorized server routes.
- The hosted app uses security headers to reduce framing, content-sniffing, referrer leakage, and unnecessary browser capabilities.

## Privacy And Data Minimization

The app avoids advertising, analytics platforms, tracking pixels, and surveillance-based monetization.

Anonymous usage limits rely on technical identifiers and hashed network-derived signals. Signed-in features use account and subscription data only as needed to provide the service. See [PRIVACY.md](PRIVACY.md) for the public privacy description.

## Responsible Testing

Please do not perform tests that could disrupt the service, access another user's account, abuse payment systems, extract private data, or degrade availability.

Useful reports include clear reproduction steps, affected URLs or routes, expected behavior, actual behavior, and any relevant screenshots or request details with sensitive values removed.
