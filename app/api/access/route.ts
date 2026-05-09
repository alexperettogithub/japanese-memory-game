import { NextResponse } from 'next/server';
import { hasActivePlus, isAdvancedKanjiGrade } from '@/lib/access';
import { isValidKanjiGrade } from '@/lib/kanji';
import { createSupabaseServer } from '@/lib/supabase-server';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const feature = String(body.feature || '');
  const grade = Number(body.grade || 0);

  if (feature !== 'kanji_grade' || !isValidKanjiGrade(grade)) {
    return NextResponse.json({ error: 'Invalid feature' }, { status: 400 });
  }

  if (!isAdvancedKanjiGrade(grade)) {
    return NextResponse.json({ allowed: true, advanced: false });
  }

  const supabase = await createSupabaseServer();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    return NextResponse.json({ allowed: false, advanced: true, authRequired: true });
  }

  const plus = await hasActivePlus(data.user.id, data.user.email);
  return NextResponse.json({ allowed: plus, advanced: true, paymentRequired: !plus });
}
