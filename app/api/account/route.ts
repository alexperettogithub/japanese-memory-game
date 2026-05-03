import { NextResponse } from 'next/server';
import { hasActivePlus } from '@/lib/access';
import { createSupabaseServer } from '@/lib/supabase-server';

export async function GET() {
  const supabase = await createSupabaseServer();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    return NextResponse.json({ authenticated: false, plus: false });
  }

  const plus = await hasActivePlus(data.user.id);
  return NextResponse.json({
    authenticated: true,
    plus,
    email: data.user.email || null,
  });
}
