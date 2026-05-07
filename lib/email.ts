import { Resend } from 'resend';

type EmailKind = 'account-deleted' | 'subscription-canceled';

const BRAND_FROM = 'Japanese Memory Game <noreply@japanesememorygame.com>';

export async function sendLifecycleEmail(kind: EmailKind, to: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !to) return;

  const resend = new Resend(apiKey);
  const appUrl = process.env.APP_URL || 'https://www.japanesememorygame.com';
  const subject = kind === 'account-deleted'
    ? 'Your Japanese Memory Game account was deleted'
    : 'Your Japanese Memory Game Plus subscription was canceled';

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || BRAND_FROM,
    to,
    subject,
    html: renderBrandedEmail({
      title: kind === 'account-deleted' ? 'Your account was deleted' : 'Your Plus subscription was canceled',
      eyebrow: kind === 'account-deleted' ? 'Account deleted' : 'Subscription canceled',
      body: kind === 'account-deleted'
        ? 'Your Japanese Memory Game account has been removed. You can still use anonymous Explore mode anytime.'
        : 'Your Japanese Memory Game Plus subscription has been canceled. Your access will follow the subscription status reported by Stripe.',
      ctaHref: appUrl,
      ctaLabel: 'Open Japanese Memory Game',
    }),
  });
}

export function renderBrandedEmail({ title, eyebrow, body, ctaHref, ctaLabel }: {
  title: string;
  eyebrow: string;
  body: string;
  ctaHref: string;
  ctaLabel: string;
}) {
  const safeCtaHref = escapeHtml(ctaHref);
  const logoUrl = `${ctaHref.replace(/\/$/, '')}/logo-email.png`;
  const fontFamily = 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif';
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;background:#fff7df;color:#201335;font-family:${fontFamily};">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;background:#fff7df;background-image:linear-gradient(135deg,#fff7df 0%,#ffeaf6 42%,#eaf9ff 100%);">
      <tr>
        <td style="padding:32px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto;background:#fffaf2;border:3px solid #ffffff;border-radius:28px;box-shadow:0 24px 70px rgba(52,24,94,.18);">
            <tr>
              <td style="padding:28px;">
                <img src="${escapeHtml(logoUrl)}" width="72" height="72" alt="Japanese Memory Game" style="display:block;width:72px;height:72px;margin:0 0 18px;border-radius:18px;">
                <div style="display:inline-block;margin:0 0 18px;padding:8px 12px;border-radius:999px;background:#ffd166;color:#201335;font-family:${fontFamily};font-size:12px;font-weight:950;line-height:1;letter-spacing:.08em;text-transform:uppercase;">${escapeHtml(eyebrow)}</div>
                <h1 style="margin:0 0 14px;color:#201335;font-family:${fontFamily};font-size:42px;line-height:.92;letter-spacing:-.06em;font-weight:950;">${escapeHtml(title)}</h1>
                <p style="margin:0 0 26px;color:#6b5f7d;font-family:${fontFamily};font-size:17px;line-height:1.55;font-weight:750;">${escapeHtml(body)}</p>
                <a href="${safeCtaHref}" style="display:inline-block;padding:15px 22px;border-radius:999px;background:#7c3cff;background-image:linear-gradient(135deg,#7c3cff,#ff4fa3);color:#ffffff;font-family:${fontFamily};text-decoration:none;font-size:15px;font-weight:950;">${escapeHtml(ctaLabel)}</a>
                <p style="margin:24px 0 0;color:#6b5f7d;font-family:${fontFamily};font-size:13px;line-height:1.55;font-weight:700;">Japanese Memory Game by Zero Softworks</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
