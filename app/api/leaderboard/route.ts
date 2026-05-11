import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { createSupabaseAdmin } from '@/lib/supabase-admin';
import { createSupabaseServer } from '@/lib/supabase-server';
import { assertAllowedOrigin, checkRateLimit, getRateLimitKey, rateLimitResponse } from '@/lib/security';

const CONSENT_VERSION = 'leaderboard-2026-05-11';
const MODES = new Set(['hiragana', 'katakana', 'kanji']);
const PLAY_KINDS = new Set(['pronunciation', 'meaning']);

function cleanDisplayName(value: unknown) {
  return String(value || '')
    .normalize('NFKC')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 24);
}

function validDisplayName(value: string) {
  return /^[\p{L}\p{N}][\p{L}\p{N} ._-]{1,23}$/u.test(value);
}

function readPositiveInteger(value: unknown, fallback = 0) {
  const parsed = Number.parseInt(String(value), 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const mode = url.searchParams.get('mode') || 'hiragana';
  const playKind = url.searchParams.get('playKind') || 'pronunciation';
  const gradeParam = url.searchParams.get('grade');
  const grade = mode === 'kanji' ? readPositiveInteger(gradeParam, 1) : 0;

  if (!MODES.has(mode) || !PLAY_KINDS.has(playKind) || (mode === 'kanji' && (grade == null || grade < 1 || grade > 6))) {
    return NextResponse.json({ error: 'Invalid leaderboard scope' }, { status: 400 });
  }

  const admin = createSupabaseAdmin();
  let query = admin
    .from('leaderboard_entries')
    .select('display_name,mode,play_kind,grade,score,solved,total,time_seconds,updated_at')
    .eq('scope', 'global')
    .eq('mode', mode)
    .eq('play_kind', playKind)
    .order('score', { ascending: false })
    .order('time_seconds', { ascending: true })
    .order('updated_at', { ascending: false })
    .limit(25);

  query = query.eq('grade', grade);

  const { data, error } = await query;
  if (error) {
    if (error.code === '42P01') return NextResponse.json({ entries: [], setupRequired: true });
    return NextResponse.json({ error: 'Unable to load leaderboard' }, { status: 500 });
  }

  return NextResponse.json({ entries: data || [] });
}

export async function POST(request: NextRequest) {
  try {
    assertAllowedOrigin(request);
  } catch {
    return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
  }

  const supabase = await createSupabaseServer();
  const { data } = await supabase.auth.getUser();
  if (!data.user?.id) return NextResponse.json({ error: 'Authentication required' }, { status: 401 });

  if (!checkRateLimit(getRateLimitKey(request, 'leaderboard-submit', data.user.id), 12, 60 * 60 * 1000)) {
    return rateLimitResponse();
  }

  const body = await request.json().catch(() => ({}));
  if (body.publishConsent !== true || body.consentVersion !== CONSENT_VERSION) {
    return NextResponse.json({ error: 'Leaderboard publishing consent required' }, { status: 400 });
  }

  const displayName = cleanDisplayName(body.displayName);
  const mode = String(body.mode || '');
  const playKind = String(body.playKind || '');
  const grade = mode === 'kanji' ? readPositiveInteger(body.grade, 0) : 0;
  const score = readPositiveInteger(body.score);
  const solved = readPositiveInteger(body.solved);
  const total = readPositiveInteger(body.total);
  const timeSeconds = readPositiveInteger(body.timeSeconds);

  if (!validDisplayName(displayName)) {
    return NextResponse.json({ error: 'Choose a public name between 2 and 24 characters.' }, { status: 400 });
  }
  if (!MODES.has(mode) || !PLAY_KINDS.has(playKind) || (mode === 'kanji' && (!grade || grade < 1 || grade > 6))) {
    return NextResponse.json({ error: 'Invalid leaderboard scope' }, { status: 400 });
  }
  if (score < 1 || solved < 1 || total < 1 || solved > total || score < solved || timeSeconds < 1 || timeSeconds > 86400) {
    return NextResponse.json({ error: 'Invalid leaderboard result' }, { status: 400 });
  }

  const admin = createSupabaseAdmin();
  const payload = {
    user_id: data.user.id,
    display_name: displayName,
    scope: 'global',
    mode,
    play_kind: playKind,
    grade,
    score,
    solved,
    total,
    time_seconds: timeSeconds,
    consent_version: CONSENT_VERSION,
    consented_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  const { error } = await admin
    .from('leaderboard_entries')
    .upsert(payload, { onConflict: 'user_id,scope,mode,play_kind,grade' });

  if (error) {
    if (error.code === '42P01') return NextResponse.json({ error: 'Leaderboard is not ready yet.' }, { status: 503 });
    return NextResponse.json({ error: 'Unable to publish result' }, { status: 500 });
  }
  return NextResponse.json({ published: true });
}

export async function DELETE(request: NextRequest) {
  try {
    assertAllowedOrigin(request);
  } catch {
    return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
  }

  const supabase = await createSupabaseServer();
  const { data } = await supabase.auth.getUser();
  if (!data.user?.id) return NextResponse.json({ error: 'Authentication required' }, { status: 401 });

  const admin = createSupabaseAdmin();
  const { error } = await admin.from('leaderboard_entries').delete().eq('user_id', data.user.id);
  if (error) {
    if (error.code === '42P01') return NextResponse.json({ error: 'Leaderboard is not ready yet.' }, { status: 503 });
    return NextResponse.json({ error: 'Unable to remove leaderboard entries' }, { status: 500 });
  }

  return NextResponse.json({ removed: true });
}
