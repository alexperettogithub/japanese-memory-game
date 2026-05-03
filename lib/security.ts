import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

export function getConfiguredAppUrl() {
  const value = process.env.APP_URL || process.env.NEXT_PUBLIC_SITE_URL;
  if (!value) throw new Error('Missing environment variable: APP_URL');
  return value.replace(/\/$/, '');
}

export function getAllowedOrigins() {
  const configured = (process.env.ALLOWED_ORIGINS || getConfiguredAppUrl())
    .split(',')
    .map((origin) => origin.trim().replace(/\/$/, ''))
    .filter(Boolean);

  return new Set(configured);
}

export function assertAllowedOrigin(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin) return;
  if (!getAllowedOrigins().has(origin.replace(/\/$/, ''))) {
    throw new Error('Disallowed request origin');
  }
}

export function getClientIpFromHeaders(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return forwardedFor || request.headers.get('x-real-ip') || 'unknown';
}

export function checkRateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const current = rateLimitStore.get(key);
  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (current.count >= limit) return false;
  current.count += 1;
  return true;
}

export function rateLimitResponse() {
  return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
}

export function getRateLimitKey(request: NextRequest | Request, scope: string, subject = '') {
  return `${scope}:${getClientIpFromHeaders(request)}:${subject.toLowerCase()}`;
}
