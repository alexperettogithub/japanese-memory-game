import Link from 'next/link';
import { PageNav } from '../components/PageNav';

export default function RefundsPage() {
  return (
    <main className="legal-page">
      <PageNav />
      <section className="legal-hero">
        <span className="card-label">Consumer rights</span>
        <h1>Refunds and Withdrawal</h1>
        <p>Refund, cancellation, and EU consumer withdrawal information for Japanese Memory Game Plus.</p>
      </section>
      <section className="legal-card">
        <h2>Cancellation</h2>
        <p>Plus subscriptions can be cancelled through the account menu where Stripe Billing Portal is available. Cancellation prevents future renewal. Unless mandatory law requires otherwise, cancellation does not automatically refund the current billing period and Plus access may continue until the paid period ends.</p>
      </section>
      <section className="legal-card">
        <h2>Refund Requests</h2>
        <p>Refund requests can be sent to <a href="mailto:info@zerosoftworks.it">info@zerosoftworks.it</a>. Include the account email, approximate payment date, subscription plan, and reason for the request. Refunds are assessed according to applicable mandatory consumer law, this policy, and the payment status reported by Stripe.</p>
      </section>
      <section className="legal-card">
        <h2>EU Withdrawal Right</h2>
        <p>Consumers in the European Union may have a 14-day withdrawal right for distance contracts. For digital content or digital services supplied immediately, the consumer may lose the withdrawal right after giving express consent to immediate performance and acknowledging that the right may be lost once access begins, where permitted by applicable law.</p>
        <p>Before starting Stripe Checkout, Japanese Memory Game asks users to request immediate Plus access and acknowledge this withdrawal information. If the waiver is not valid or mandatory consumer law requires a refund, statutory consumer rights remain unaffected.</p>
      </section>
      <section className="legal-card">
        <h2>Withdrawal Request</h2>
        <p>To exercise a withdrawal right where applicable, contact <a href="mailto:info@zerosoftworks.it">info@zerosoftworks.it</a> with a clear statement that you withdraw from the Plus subscription purchase. You may use the following wording:</p>
        <blockquote className="legal-quote">I hereby withdraw from my Japanese Memory Game Plus subscription purchase. Account email: [your email]. Purchase date: [date]. Name: [name].</blockquote>
      </section>
      <section className="legal-card">
        <h2>Related Terms</h2>
        <p>See also the <Link href="/terms">Terms of Service and Conditions of Sale</Link>.</p>
      </section>
    </main>
  );
}
