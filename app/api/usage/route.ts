import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { recordAnonymousUsage, type UsageKind } from '@/lib/usage';
import { createSupabaseServer } from '@/lib/supabase-server';
import { assertAllowedOrigin } from '@/lib/security';

const USAGE_KINDS = new Set<UsageKind>(['explore_card_used', 'play_attempt']);

export async function POST(request: NextRequest) {
  try {
    assertAllowedOrigin(request);
  } catch {
    return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
  }

  const { kind } = await request.json().catch(() => ({ kind: null }));
  if (!USAGE_KINDS.has(kind)) {
    return NextResponse.json({ error: 'Invalid usage kind' }, { status: 400 });
  }

  try {
    const supabase = await createSupabaseServer();
    const { data } = await supabase.auth.getUser();
    if (data.user) return NextResponse.json({ allowed: true, authRequired: false, authenticated: true });

    return await recordAnonymousUsage(request, kind);
  } catch (error) {
    return NextResponse.json({ error: 'Unable to record usage' }, { status: 500 });
  }
}
