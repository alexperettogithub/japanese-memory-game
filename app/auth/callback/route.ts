import { redirect } from 'next/navigation';
import { createSupabaseServer } from '@/lib/supabase-server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const intent = url.searchParams.get('intent') === 'signup' ? 'signup' : 'signin';
  const checkoutResume = url.searchParams.get('checkout') === 'resume';
  const checkoutInterval = url.searchParams.get('interval');

  if (code) {
    const supabase = await createSupabaseServer();
    await supabase.auth.exchangeCodeForSession(code);
  }

  const params = new URLSearchParams({ welcome: intent === 'signup' ? 'signup' : 'signin' });
  if (checkoutResume) {
    params.set('checkout', 'resume');
    if (checkoutInterval === 'monthly' || checkoutInterval === 'yearly') params.set('interval', checkoutInterval);
  }

  redirect(`/?${params.toString()}`);
}
