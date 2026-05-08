import { createHmac, randomUUID } from 'node:crypto';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { createSupabaseAdmin } from './supabase-admin';
import { getUsageEnv } from './env';
import { getClientIpFromHeaders } from './security';

export type UsageKind = 'explore_card_used' | 'play_attempt';

const LIMITS: Record<UsageKind, number> = {
  explore_card_used: 15,
  play_attempt: 5,
};

const COOKIE_NAME = 'jmg_anon_id';
const WINDOW_HOURS = 24;

function sign(value: string, secret: string) {
  return createHmac('sha256', secret).update(value).digest('base64url');
}

function readSignedAnonymousId(request: NextRequest, secret: string) {
  const raw = request.cookies.get(COOKIE_NAME)?.value;
  if (!raw) return null;
  const [id, signature] = raw.split('.');
  if (!id || !signature) return null;
  return sign(id, secret) === signature ? id : null;
}

function writeAnonymousCookie(response: NextResponse, anonymousId: string, secret: string) {
  response.cookies.set(COOKIE_NAME, `${anonymousId}.${sign(anonymousId, secret)}`, {
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  });
}

function hashIp(ip: string, salt: string) {
  return createHmac('sha256', salt).update(ip).digest('hex');
}

export async function recordAnonymousUsage(request: NextRequest, kind: UsageKind) {
  const env = getUsageEnv();
  const admin = createSupabaseAdmin();
  const anonymousId = readSignedAnonymousId(request, env.anonymousUsageCookieSecret) || randomUUID();
  const ipHash = hashIp(getClientIpFromHeaders(request), env.supabaseIpHashSalt);
  const since = new Date(Date.now() - WINDOW_HOURS * 60 * 60 * 1000).toISOString();
  const limit = LIMITS[kind];

  const { data, error } = await admin.rpc('record_anonymous_usage', {
    p_anonymous_id: anonymousId,
    p_ip_hash: ipHash,
    p_kind: kind,
    p_limit: limit,
    p_since: since,
  });

  if (error) throw error;

  const result = Array.isArray(data) ? data[0] : data;
  const response = NextResponse.json({
    allowed: Boolean(result?.allowed),
    authRequired: Boolean(result?.auth_required),
    used: Number(result?.used || 0),
    limit,
  });

  writeAnonymousCookie(response, anonymousId, env.anonymousUsageCookieSecret);
  return response;
}
