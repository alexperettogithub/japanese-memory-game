import { copyFileSync, existsSync } from 'node:fs';
import { randomBytes } from 'node:crypto';

if (!existsSync('.env.operator')) {
  copyFileSync('.env.operator.example', '.env.operator');
}

const generated = {
  SUPABASE_IP_HASH_SALT: randomBytes(32).toString('base64url'),
  ANONYMOUS_USAGE_COOKIE_SECRET: randomBytes(32).toString('base64url'),
};

console.log('Created .env.operator if it did not exist.');
console.log('Generated values to paste into .env.operator:');
console.log(`SUPABASE_IP_HASH_SALT=${generated.SUPABASE_IP_HASH_SALT}`);
console.log(`ANONYMOUS_USAGE_COOKIE_SECRET=${generated.ANONYMOUS_USAGE_COOKIE_SECRET}`);
console.log('Do not commit .env.operator.');
