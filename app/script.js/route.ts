import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function GET() {
  const body = await readFile(join(process.cwd(), 'script.js'), 'utf8');
  return new Response(body, {
    headers: {
      'content-type': 'application/javascript; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate',
    },
  });
}
