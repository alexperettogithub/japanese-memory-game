import { NextResponse } from 'next/server';
import { hasActivePlus } from '@/lib/access';
import { getAllKanjiData, isAdvancedKanjiGrade, isValidKanjiGrade } from '@/lib/kanji';
import { createSupabaseServer } from '@/lib/supabase-server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const grade = Number(url.searchParams.get('grade'));

  if (!isValidKanjiGrade(grade)) {
    return NextResponse.json({ error: 'Invalid grade' }, { status: 400 });
  }

  if (isAdvancedKanjiGrade(grade)) {
    const supabase = await createSupabaseServer().catch(() => null);
    if (!supabase) {
      return NextResponse.json({ error: 'Authentication unavailable' }, { status: 503 });
    }

    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    if (!await hasActivePlus(data.user.id)) {
      return NextResponse.json({ error: 'Plus required' }, { status: 402 });
    }
  }

  const data = (await getAllKanjiData()).filter((item) => item.grade === grade);
  return NextResponse.json({ data });
}
