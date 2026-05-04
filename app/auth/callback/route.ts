import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const intent = url.searchParams.get('intent') === 'signup' ? 'signup' : 'signin';

  if (code) {
    const supabase = await createSupabaseServer();
    await supabase.auth.exchangeCodeForSession(code);
  }

  redirect(intent === 'signup' ? '/?welcome=signup' : '/');
}
