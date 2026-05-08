import { NextResponse } from 'next/server';
import { createSupabaseServer } from '@/lib/supabase-server';
import { assertAllowedOrigin } from '@/lib/security';

export async function POST(request: Request) {
  try {
    assertAllowedOrigin(request);
  } catch {
    return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
  }

  const supabase = await createSupabaseServer();
  await supabase.auth.signOut();
  return NextResponse.json({ ok: true });
}
