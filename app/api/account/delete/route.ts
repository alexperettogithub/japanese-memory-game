import { NextResponse } from 'next/server';
import { createSupabaseAdmin } from '@/lib/supabase-admin';
import { createSupabaseServer } from '@/lib/supabase-server';
import { assertAllowedOrigin } from '@/lib/security';
import { sendLifecycleEmail } from '@/lib/email';
import { hasActivePlus } from '@/lib/access';

export async function POST(request: Request) {
  try {
    assertAllowedOrigin(request);
  } catch {
    return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
  }

  const supabase = await createSupabaseServer();
  const { data } = await supabase.auth.getUser();
  if (!data.user) return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  const email = data.user.email;

  if (await hasActivePlus(data.user.id)) {
    return NextResponse.json({ error: 'Cancel Plus before deleting your account', subscriptionRequired: true }, { status: 409 });
  }

  const admin = createSupabaseAdmin();
  const { error } = await admin.auth.admin.deleteUser(data.user.id);
  if (error) return NextResponse.json({ error: 'Unable to delete account' }, { status: 500 });

  if (email) {
    sendLifecycleEmail('account-deleted', email).catch(() => undefined);
  }

  await supabase.auth.signOut();
  return NextResponse.json({ ok: true });
}
