import { NextResponse } from 'next/server';
import { createSupabaseAdmin } from '@/lib/supabase-admin';
import { createSupabaseServer } from '@/lib/supabase-server';
import { assertAllowedOrigin } from '@/lib/security';

export async function POST(request: Request) {
  try {
    assertAllowedOrigin(request);
  } catch {
    return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
  }

  const supabase = await createSupabaseServer();
  const { data } = await supabase.auth.getUser();
  if (!data.user) return NextResponse.json({ error: 'Authentication required' }, { status: 401 });

  const admin = createSupabaseAdmin();
  const { error } = await admin.auth.admin.deleteUser(data.user.id);
  if (error) return NextResponse.json({ error: 'Unable to delete account' }, { status: 500 });

  await supabase.auth.signOut();
  return NextResponse.json({ ok: true });
}
