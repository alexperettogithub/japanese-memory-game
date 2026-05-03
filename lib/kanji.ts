import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { runInNewContext } from 'node:vm';

export type KanjiCard = {
  kanji: string;
  meaning: string;
  onyomi: string;
  kunyomi: string;
  grade: number;
};

let cachedKanjiData: KanjiCard[] | null = null;

export async function getAllKanjiData() {
  if (cachedKanjiData) return cachedKanjiData;

  const source = await readFile(join(process.cwd(), 'kanji-data.js'), 'utf8');
  const sandbox = { window: {} as { kanjiData?: KanjiCard[] } };
  runInNewContext(source, sandbox, { timeout: 1000 });
  cachedKanjiData = Array.isArray(sandbox.window.kanjiData) ? sandbox.window.kanjiData : [];
  return cachedKanjiData;
}

export function isAdvancedKanjiGrade(grade: number) {
  return grade >= 3;
}

export function isValidKanjiGrade(grade: number) {
  return Number.isInteger(grade) && grade >= 1 && grade <= 6;
}
