import { loadOperatorEnv } from './lib/operator-env.mjs';

loadOperatorEnv();

const token = process.env.SUPABASE_ACCESS_TOKEN;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

if (!token || !supabaseUrl) {
  throw new Error('Missing SUPABASE_ACCESS_TOKEN or NEXT_PUBLIC_SUPABASE_URL in .env.operator');
}

const ref = new URL(supabaseUrl).hostname.split('.')[0];
const appUrl = process.env.APP_URL || 'https://www.japanesememorygame.com';
const logoUrl = `${appUrl.replace(/\/$/, '')}/logo.svg`;
const fontFamily = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
const content = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@650;750;850;900;950&display=swap" rel="stylesheet">
    <title>Open Japanese Memory Game</title>
  </head>
  <body style="margin:0;background:#fff7df;color:#201335;font-family:${fontFamily};">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;background:#fff7df;background-image:linear-gradient(135deg,#fff7df 0%,#ffeaf6 42%,#eaf9ff 100%);">
      <tr>
        <td style="padding:32px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto;background:#fffaf2;border:3px solid #ffffff;border-radius:28px;box-shadow:0 24px 70px rgba(52,24,94,.18);">
            <tr>
              <td style="padding:28px;">
                <img src="${logoUrl}" width="72" height="72" alt="Japanese Memory Game" style="display:block;width:72px;height:72px;margin:0 0 18px;border-radius:18px;">
                <div style="display:inline-block;margin:0 0 18px;padding:8px 12px;border-radius:999px;background:#ffd166;color:#201335;font-family:${fontFamily};font-size:12px;font-weight:950;line-height:1;letter-spacing:.08em;text-transform:uppercase;">Japanese Memory Game</div>
                <h1 style="margin:0 0 14px;color:#201335;font-family:${fontFamily};font-size:42px;line-height:.92;letter-spacing:-.06em;font-weight:950;">Your magic link is ready</h1>
                <p style="margin:0 0 26px;color:#6b5f7d;font-family:${fontFamily};font-size:17px;line-height:1.55;font-weight:750;">Use this secure link to open your account and keep learning Japanese with no password.</p>
                <a href="{{ .ConfirmationURL }}" style="display:inline-block;padding:15px 22px;border-radius:999px;background:#7c3cff;background-image:linear-gradient(135deg,#7c3cff,#ff4fa3);color:#ffffff;font-family:${fontFamily};text-decoration:none;font-size:15px;font-weight:950;">Open Japanese Memory Game</a>
                <p style="margin:22px 0 0;color:#6b5f7d;font-family:${fontFamily};font-size:13px;line-height:1.55;font-weight:700;">If the button does not work, paste this link into your browser:<br><span style="word-break:break-all;color:#7c3cff;">{{ .ConfirmationURL }}</span></p>
                <p style="margin:24px 0 0;color:#6b5f7d;font-family:${fontFamily};font-size:13px;line-height:1.55;font-weight:700;">Japanese Memory Game by Zero Softworks<br>${appUrl}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

const response = await fetch(`https://api.supabase.com/v1/projects/${ref}/config/auth`, {
  method: 'PATCH',
  headers: {
    authorization: `Bearer ${token}`,
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    mailer_subjects_magic_link: 'Open Japanese Memory Game',
    mailer_templates_magic_link_content: content,
    mailer_subjects_confirmation: 'Open Japanese Memory Game',
    mailer_templates_confirmation_content: content,
  }),
});

if (!response.ok) {
  throw new Error(`Supabase auth template update failed: ${response.status}`);
}

console.log('Supabase auth email template applied');
