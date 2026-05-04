import { loadOperatorEnv } from './lib/operator-env.mjs';

loadOperatorEnv();

const token = process.env.SUPABASE_ACCESS_TOKEN;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

if (!token || !supabaseUrl) {
  throw new Error('Missing SUPABASE_ACCESS_TOKEN or NEXT_PUBLIC_SUPABASE_URL in .env.operator');
}

const ref = new URL(supabaseUrl).hostname.split('.')[0];
const appUrl = process.env.APP_URL || 'https://www.japanesememorygame.com';
const content = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Open Japanese Memory Game</title>
  </head>
  <body style="margin:0;background:#fff7df;color:#201335;font-family:Inter,Arial,sans-serif;">
    <div style="padding:32px 16px;background:radial-gradient(circle at 20% 10%,#ffd66b 0 18%,transparent 36%),linear-gradient(135deg,#fff7df,#f2ecff);">
      <div style="max-width:560px;margin:0 auto;padding:28px;border:3px solid rgba(255,255,255,.82);border-radius:28px;background:rgba(255,255,255,.94);box-shadow:0 18px 50px rgba(32,19,53,.16);">
        <div style="display:inline-block;margin-bottom:18px;padding:8px 12px;border-radius:999px;background:#ffe9a8;color:#6b35ff;font-size:12px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;">Japanese Memory Game</div>
        <h1 style="margin:0 0 12px;font-size:34px;line-height:.95;letter-spacing:-.04em;font-weight:950;">Your magic link is ready</h1>
        <p style="margin:0 0 24px;color:#5f5570;font-size:17px;line-height:1.55;font-weight:700;">Use this secure link to open your account and keep learning Japanese with no password.</p>
        <a href="{{ .ConfirmationURL }}" style="display:inline-block;padding:14px 20px;border-radius:999px;background:linear-gradient(135deg,#6b35ff,#ee366e);color:#fff;text-decoration:none;font-size:15px;font-weight:950;">Open Japanese Memory Game</a>
        <p style="margin:22px 0 0;color:#817790;font-size:13px;line-height:1.5;font-weight:700;">If the button does not work, paste this link into your browser:<br><span style="word-break:break-all;color:#6b35ff;">{{ .ConfirmationURL }}</span></p>
        <p style="margin:26px 0 0;color:#817790;font-size:13px;line-height:1.5;font-weight:700;">Japanese Memory Game by Zero Softworks<br>${appUrl}</p>
      </div>
    </div>
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
