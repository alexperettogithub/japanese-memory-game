import Link from 'next/link';

export default function LegalNoticePage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <span className="card-label">Legal notice</span>
        <h1>Legal Notice</h1>
        <p>Mandatory business information for Japanese Memory Game and Zero Softworks.</p>
      </section>
      <section className="legal-card">
        <h2>Service Operator</h2>
        <p>Japanese Memory Game is operated by Zero Softworks di Peretto Alex, an Italian sole proprietorship.</p>
        <dl className="legal-details">
          <div><dt>Trade name</dt><dd>Zero Softworks di Peretto Alex</dd></div>
          <div><dt>European VAT number</dt><dd>IT04514000241</dd></div>
          <div><dt>Customer support, invoices, bugs, malfunctions</dt><dd><a href="mailto:info@zerosoftoworks.com">info@zerosoftoworks.com</a></dd></div>
          <div><dt>Telephone</dt><dd><a href="tel:+390424017669">+39 0424 017669</a></dd></div>
          <div><dt>Company register reference</dt><dd><a href="https://www.ufficiocamerale.it/3082/zero-softworks-di-peretto-alex" target="_blank" rel="noopener noreferrer">Ufficio Camerale public record</a></dd></div>
        </dl>
        <p>Invoices are issued on request. To request an invoice, contact customer support and provide the billing information required by Italian tax rules.</p>
        <p>The public web app is available at <a href="https://www.japanesememorygame.com">https://www.japanesememorygame.com</a>.</p>
      </section>
      <section className="legal-card">
        <h2>Legal Documents</h2>
        <ul className="legal-list">
          <li><Link href="/terms">Terms of Service and Conditions of Sale</Link></li>
          <li><Link href="/privacy">Privacy Policy</Link></li>
          <li><Link href="/cookies">Cookie and Storage Policy</Link></li>
          <li><Link href="/refunds">Refunds and Withdrawal</Link></li>
        </ul>
      </section>
    </main>
  );
}
