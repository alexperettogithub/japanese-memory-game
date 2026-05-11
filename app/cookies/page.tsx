import { PageNav } from '../components/PageNav';

export default function CookiesPage() {
  return (
    <main className="legal-page">
      <PageNav />
      <section className="legal-hero">
        <span className="card-label">Cookies</span>
        <h1>Cookie and Storage Policy</h1>
        <p>Technical cookies and browser storage used by Japanese Memory Game.</p>
      </section>
      <section className="legal-card">
        <h2>No Advertising or Profiling Cookies</h2>
        <p>Japanese Memory Game does not use advertising cookies, behavioral analytics, tracking pixels, or cross-site profiling. The storage listed below is used only to provide the service, keep users signed in, enforce anonymous limits, remember the storage notice, and save local score statistics.</p>
      </section>
      <section className="legal-card">
        <h2>Storage Used</h2>
        <dl className="legal-details">
          <div><dt>jmg_anon_id</dt><dd>Technical first-party cookie used to enforce anonymous Explore and Play limits. Duration: up to 12 months.</dd></div>
          <div><dt>Supabase authentication cookies</dt><dd>Technical cookies used to keep signed-in users authenticated. Duration depends on authentication session settings.</dd></div>
          <div><dt>jmg_storage_notice</dt><dd>Technical first-party cookie used to remember that the storage notice was acknowledged. Duration: about 180 days.</dd></div>
          <div><dt>jmg-score-stats</dt><dd>LocalStorage entry used to keep local score and progress statistics in the user's browser until deleted by the user/browser.</dd></div>
        </dl>
      </section>
      <section className="legal-card">
        <h2>Managing Storage</h2>
        <p>Users can delete cookies and localStorage through browser settings. Deleting technical storage may sign the user out, reset local score statistics, or restore anonymous usage limits from the beginning of a new technical identifier.</p>
      </section>
    </main>
  );
}
