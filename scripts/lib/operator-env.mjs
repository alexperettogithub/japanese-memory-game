import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

export function loadOperatorEnv(file = '.env.operator') {
  const path = resolve(process.cwd(), file);
  if (!existsSync(path)) {
    throw new Error(`Missing ${file}. Copy .env.operator.example to ${file} and fill it locally.`);
  }

  const content = readFileSync(path, 'utf8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const index = trimmed.indexOf('=');
    if (index === -1) continue;
    const key = trimmed.slice(0, index).trim();
    let value = trimmed.slice(index + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (key && process.env[key] === undefined) process.env[key] = value;
  }
}

export function requiredEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}

export function optionalEnv(name) {
  return process.env[name] || '';
}

export function redactedSummary(names) {
  return Object.fromEntries(names.map((name) => [name, Boolean(process.env[name])]));
}
