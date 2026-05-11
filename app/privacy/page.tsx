import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <span className="card-label">GDPR</span>
        <h1>Privacy Policy</h1>
        <p>Information under Regulation (EU) 2016/679 for Japanese Memory Game.</p>
      </section>
      <section className="legal-card">
        <h2>Data Controller</h2>
        <p>The data controller is Zero Softworks di Peretto Alex, European VAT number IT04514000241. Contact: <a href="mailto:info@zerosoftworks.it">info@zerosoftworks.it</a>, telephone <a href="tel:+390424017669">+39 0424 017669</a>.</p>
      </section>
      <section className="legal-card">
        <h2>Data Processed</h2>
        <ul className="legal-list">
          <li>Account data, such as email address and authentication identifiers.</li>
          <li>Session and security data, including technical cookies and server-side security signals.</li>
          <li>Anonymous usage-limit data, including a technical anonymous identifier and hashed network-derived signal.</li>
          <li>Local game data stored in the browser, such as score statistics.</li>
          <li>Subscription data, such as Stripe customer, subscription, price, and status identifiers.</li>
          <li>Transactional email metadata needed to send sign-in, account, and subscription emails.</li>
          <li>Support data voluntarily sent by users by email or other contact channels.</li>
        </ul>
      </section>
      <section className="legal-card">
        <h2>Purposes and Legal Bases</h2>
        <ul className="legal-list">
          <li>Provide accounts, authentication, learning features, and Plus access: performance of a contract or pre-contractual measures.</li>
          <li>Process subscriptions and payments: performance of a contract and legal obligations.</li>
          <li>Issue invoices and keep accounting records: legal obligations under Italian and tax law.</li>
          <li>Prevent abuse, protect security, and enforce anonymous usage limits: legitimate interest and service security.</li>
          <li>Respond to support, invoice, bug, and malfunction requests: performance of a contract, legal obligations, or legitimate interest depending on the request.</li>
          <li>Send transactional emails: performance of the service and legitimate interest in account/security communications.</li>
        </ul>
        <p>The service does not use advertising networks, behavioral analytics, tracking pixels, or marketing profiling.</p>
      </section>
      <section className="legal-card">
        <h2>Processors and Third Parties</h2>
        <p>The service uses selected providers to operate the app:</p>
        <ul className="legal-list">
          <li>Vercel for hosting and delivery.</li>
          <li>Supabase for authentication and database services.</li>
          <li>Stripe for payments, subscriptions, invoices/receipts, and billing portal.</li>
          <li>Resend for transactional email delivery.</li>
        </ul>
        <p>These providers may process data outside the European Economic Area under their applicable transfer mechanisms, such as Standard Contractual Clauses, adequacy decisions, or other lawful safeguards.</p>
      </section>
      <section className="legal-card">
        <h2>Retention</h2>
        <ul className="legal-list">
          <li>Account data is kept while the account exists and for the time needed to complete deletion workflows.</li>
          <li>Subscription and payment records are kept as needed to provide Plus access, handle disputes, and comply with legal/accounting obligations.</li>
          <li>Anonymous usage events are intended to be retained only for the operational window needed to enforce fair-use limits and diagnose abuse.</li>
          <li>Support communications are kept for the time needed to resolve the request and protect legal interests.</li>
          <li>Accounting and invoice-related data is retained for the period required by Italian law.</li>
        </ul>
      </section>
      <section className="legal-card">
        <h2>User Rights</h2>
        <p>Users may request access, rectification, erasure, restriction, portability, or objection where applicable under GDPR. Users may also lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali) or another competent EU supervisory authority.</p>
        <p>Requests can be sent to <a href="mailto:info@zerosoftworks.it">info@zerosoftworks.it</a>.</p>
      </section>
      <section className="legal-card">
        <h2>Children</h2>
        <p>The service is not intended to sell subscriptions to children. Paid subscriptions must be purchased by adults or with appropriate parental/guardian involvement where required by law.</p>
      </section>
      <section className="legal-card">
        <h2>Cookies and Local Storage</h2>
        <p>See the <Link href="/cookies">Cookie and Storage Policy</Link> for technical browser storage used by the app.</p>
      </section>
    </main>
  );
}
