import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <span className="card-label">Terms</span>
        <h1>Terms of Service</h1>
        <p>Terms of use and minimum conditions of sale for Japanese Memory Game.</p>
      </section>
      <section className="legal-card">
        <h2>Provider</h2>
        <p>The service is provided by Zero Softworks di Peretto Alex, European VAT number IT04514000241. Contact: <a href="mailto:info@zerosoftworks.it">info@zerosoftworks.it</a>, telephone <a href="tel:+390424017669">+39 0424 017669</a>.</p>
        <p>Further business information is available in the <Link href="/legal">Legal Notice</Link>.</p>
      </section>
      <section className="legal-card">
        <h2>Service</h2>
        <p>Japanese Memory Game is a web app for studying Japanese hiragana, katakana, and kanji through memory cards, browsing, and active recall exercises.</p>
        <p>Free content currently includes Hiragana, Katakana, Kanji Grade 1, and Kanji Grade 2. Japanese Memory Game Plus provides access to advanced kanji content, currently Kanji Grade 3 through Grade 6, and future advanced learning content when available.</p>
      </section>
      <section className="legal-card">
        <h2>Accounts</h2>
        <p>Some features require an account. Users are responsible for providing a valid email address and for keeping access to that email account secure. Accounts may be suspended or terminated where necessary to protect the service, comply with law, prevent abuse, or enforce these terms.</p>
      </section>
      <section className="legal-card">
        <h2>Prices, Subscription, and Payment</h2>
        <p>Plus is offered as an automatically renewing subscription unless cancelled before the next billing date:</p>
        <ul className="legal-list">
          <li>Monthly Plus: EUR 5 per month.</li>
          <li>Yearly Plus: EUR 30 per year.</li>
        </ul>
        <p>Prices are shown in euro. Applicable taxes and the final amount payable are shown during Stripe Checkout before payment confirmation. Payments are processed by Stripe. Japanese Memory Game does not receive or store raw payment card data.</p>
        <p>The order button and Stripe Checkout identify that the subscription involves an obligation to pay. Access normally starts immediately after successful payment and webhook confirmation.</p>
      </section>
      <section className="legal-card">
        <h2>Cancellation</h2>
        <p>Subscribers can manage or cancel Plus from the account menu through Stripe Billing Portal where available. Cancellation stops future renewals. Unless otherwise required by mandatory consumer law or stated in the <Link href="/refunds">Refunds and Withdrawal Policy</Link>, access may continue until the end of the paid billing period.</p>
      </section>
      <section className="legal-card">
        <h2>Invoices</h2>
        <p>Invoices are issued on request. To request an invoice, contact <a href="mailto:info@zerosoftworks.it">info@zerosoftworks.it</a> with the billing details required by Italian tax rules.</p>
      </section>
      <section className="legal-card">
        <h2>Right of Withdrawal</h2>
        <p>Consumers in the European Union may have a statutory withdrawal right. Because Plus is a digital service/content subscription made available immediately after purchase, users are asked before checkout to request immediate access and acknowledge the withdrawal information described in the <Link href="/refunds">Refunds and Withdrawal Policy</Link>.</p>
      </section>
      <section className="legal-card">
        <h2>Acceptable Use</h2>
        <p>Users must not misuse the service, attempt to bypass access controls, overload infrastructure, reverse engineer private service endpoints for abuse, upload malicious data, interfere with other users, or use the service unlawfully.</p>
        <p>If a user chooses to publish leaderboard results, the public nickname must not impersonate others, include unlawful or abusive content, reveal another person's personal data, or violate third-party rights. Zero Softworks may remove leaderboard entries that appear abusive, unlawful, misleading, or technically invalid.</p>
      </section>
      <section className="legal-card">
        <h2>Availability and Changes</h2>
        <p>The service is provided with reasonable care for a small independent web app. Features may change, be improved, or be temporarily unavailable for maintenance, security, technical, or legal reasons.</p>
      </section>
      <section className="legal-card">
        <h2>Liability</h2>
        <p>Nothing in these terms limits rights that cannot be excluded under mandatory Italian or European consumer law. To the extent permitted by law, Zero Softworks is not liable for indirect losses, unavailable third-party services, or misuse of the service.</p>
      </section>
      <section className="legal-card">
        <h2>Governing Law</h2>
        <p>These terms are governed by Italian law, without prejudice to mandatory consumer protections available under the law of the user's country of residence in the European Union.</p>
      </section>
    </main>
  );
}
