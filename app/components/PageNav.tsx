import Link from 'next/link';
import Script from 'next/script';

export function PageNav() {
  return (
    <nav className="page-nav" aria-label="Page navigation">
      <Link href="/">Home</Link>
      <button className="page-nav-back" type="button">Back</button>
      <Script id="page-nav-back-script" strategy="afterInteractive">{`
        document.querySelectorAll('.page-nav-back').forEach(button => {
          button.addEventListener('click', () => {
            if (window.history.length > 1) {
              window.history.back();
              return;
            }
            window.location.href = '/';
          });
        });
      `}</Script>
    </nav>
  );
}
