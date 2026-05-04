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
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;background:#fff7df;color:#201335;font-family:Inter,Arial,sans-serif;">
    <div style="padding:32px 16px;background:radial-gradient(circle at 20% 10%,#ffd66b 0 18%,transparent 36%),linear-gradient(135deg,#fff7df,#f2ecff);">
      <div style="max-width:560px;margin:0 auto;padding:28px;border:3px solid rgba(255,255,255,.82);border-radius:28px;background:rgba(255,255,255,.94);box-shadow:0 18px 50px rgba(32,19,53,.16);">
        <div style="display:inline-block;margin-bottom:18px;padding:8px 12px;border-radius:999px;background:#ffe9a8;color:#6b35ff;font-size:12px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;">${escapeHtml(eyebrow)}</div>
        <h1 style="margin:0 0 12px;font-size:34px;line-height:.95;letter-spacing:-.04em;font-weight:950;">${escapeHtml(title)}</h1>
        <p style="margin:0 0 24px;color:#5f5570;font-size:17px;line-height:1.55;font-weight:700;">${escapeHtml(body)}</p>
        <a href="${escapeHtml(ctaHref)}" style="display:inline-block;padding:14px 20px;border-radius:999px;background:linear-gradient(135deg,#6b35ff,#ee366e);color:#fff;text-decoration:none;font-size:15px;font-weight:950;">${escapeHtml(ctaLabel)}</a>
        <p style="margin:26px 0 0;color:#817790;font-size:13px;line-height:1.5;font-weight:700;">Japanese Memory Game by Zero Softworks</p>
      </div>
    </div>
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
