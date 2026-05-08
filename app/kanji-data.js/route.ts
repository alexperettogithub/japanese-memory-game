import { getAllKanjiData } from '@/lib/kanji';

export async function GET() {
  const publicKanji = (await getAllKanjiData()).filter((item) => item.grade <= 2);
  const body = `window.kanjiData = ${JSON.stringify(publicKanji)};`;
  return new Response(body, {
    headers: {
      'content-type': 'application/javascript; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate',
    },
  });
}
