import type { Metadata } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';
import '../style.css';

export const metadata: Metadata = {
  title: 'Japanese Memory Game',
  description: 'A lightweight, free software game for studying Japanese hiragana, katakana, and kanji through simple memory cards.',
  authors: [{ name: 'Zero Softworks' }],
  metadataBase: new URL('https://www.japanesememorygame.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Japanese Memory Game',
    description: 'Study Japanese in a fun, effective, and lightweight way.',
    type: 'website',
    url: 'https://www.japanesememorygame.com/',
  },
  icons: {
    icon: '/favicon.svg',
  },
  other: {
    license: 'GPL-3.0-or-later',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <section className="cookie-banner" id="cookie-banner" hidden aria-label="Cookie notice">
          <div>
            <span className="card-label">Privacy</span>
            <p>We use essential cookies for sign-in, anonymous play limits, and security. We also use local storage for your game score. No ads, no analytics, no tracking pixels.</p>
          </div>
          <button className="access-wall-primary" id="cookie-accept" type="button">OK, continue</button>
        </section>
        <Script id="cookie-notice" strategy="afterInteractive">{`
          (() => {
            const key = 'jmg-cookie-notice-ack';
            const banner = document.querySelector('#cookie-banner');
            const button = document.querySelector('#cookie-accept');
            if (!banner || !button) return;
            try {
              banner.hidden = window.localStorage.getItem(key) === '1';
            } catch {
              banner.hidden = false;
            }
            button.addEventListener('click', () => {
              try { window.localStorage.setItem(key, '1'); } catch {}
              banner.hidden = true;
            });
          })();
        `}</Script>
      </body>
    </html>
  );
}
