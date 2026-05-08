export default async function LoginPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const sent = params.sent === '1';
  const error = typeof params.error === 'string' ? params.error : null;
  const mode = params.mode === 'signup' ? 'signup' : 'signin';
  const isSignUp = mode === 'signup';

  return (
    <main className="auth-page">
      <section className="auth-card">
        <span className="card-label">Japanese Memory Game Plus</span>
        <h1>{isSignUp ? 'Sign up' : 'Sign in'}</h1>
        <p>{isSignUp ? 'Create a free account to keep learning after the daily anonymous limit.' : 'Welcome back. Enter your email and we will send you a magic link.'}</p>
        <div className="auth-mode-switch" aria-label="Authentication mode">
          <a className={!isSignUp ? 'active' : ''} href="/login?mode=signin">Sign in</a>
          <a className={isSignUp ? 'active' : ''} href="/login?mode=signup">Sign up</a>
        </div>
        {sent ? (
          <div className="auth-success-card" role="status" aria-live="polite">
            <span className="card-label">Magic link sent</span>
            <h2>Check your email</h2>
            <p>We sent you a secure magic link. Open it to finish {isSignUp ? 'your sign-up' : 'signing in'}.</p>
          </div>
        ) : null}
        {error ? <p className="auth-error">{isSignUp ? "We couldn't send the sign-up link right now. Please try again in a moment." : "We couldn't send the sign-in link right now. Please try again in a moment."}</p> : null}
        <form action="/auth/sign-in" method="post" className="auth-form">
          <input type="hidden" name="intent" value={mode} />
          {isSignUp ? (
            <>
              <label htmlFor="first-name">First name</label>
              <input id="first-name" name="firstName" type="text" autoComplete="given-name" required placeholder="Yuki" />
              <label htmlFor="last-name">Last name <span>optional</span></label>
              <input id="last-name" name="lastName" type="text" autoComplete="family-name" placeholder="Tanaka" />
              <label htmlFor="role">Who are you?</label>
              <select id="role" name="role" required defaultValue="">
                <option value="" disabled>Choose one</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="developer">Developer</option>
                <option value="japanese_culture_curious">Curious about Japanese culture</option>
              </select>
            </>
          ) : null}
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
          <button type="submit">{isSignUp ? 'Sign up with email' : 'Sign in with email'}</button>
        </form>
        <p className="auth-note">{isSignUp ? 'Already have an account? Use Sign in instead.' : "Forgot your password? You don't need one here: use Sign in and we will email you a fresh magic link."}</p>
        <a href="/">Back to the game</a>
      </section>
    </main>
  );
}
