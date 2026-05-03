import { spawn } from 'node:child_process';
import { loadOperatorEnv, requiredEnv, optionalEnv, redactedSummary } from './lib/operator-env.mjs';

loadOperatorEnv();

const names = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'APP_URL',
  'ALLOWED_ORIGINS',
  'SUPABASE_SERVICE_ROLE_KEY',
  'SUPABASE_IP_HASH_SALT',
  'ANONYMOUS_USAGE_COOKIE_SECRET',
  'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY',
  'STRIPE_SECRET_KEY',
  'STRIPE_WEBHOOK_SECRET',
  'STRIPE_PLUS_MONTHLY_PRICE_ID',
  'STRIPE_PLUS_YEARLY_PRICE_ID',
  'RESEND_API_KEY',
  'RESEND_FROM_EMAIL',
];

for (const name of names) requiredEnv(name);

console.log('Applying Vercel Preview env values. Values will not be printed.');
console.log(JSON.stringify(redactedSummary(names), null, 2));

for (const name of names) {
  await addEnv(name, optionalEnv(name));
}

function addEnv(name, value) {
  return new Promise((resolve, reject) => {
    const child = spawn('vercel', ['env', 'add', name, 'preview', '--force', '--sensitive', '--yes'], {
      stdio: ['pipe', 'pipe', 'pipe'],
    });

    let stderr = '';
    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });
    child.stdout.on('data', (chunk) => {
      const text = chunk.toString();
      if (!text.includes(value)) process.stdout.write(text);
    });
    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`Failed to add ${name}: ${stderr}`));
    });
    child.stdin.end(value);
  });
}
