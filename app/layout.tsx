import type { Metadata } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';
import '../style.css';

const umamiScriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || 'https://cloud.umami.is/script.js';
const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || '80dea4db-900d-42de-ab7d-bf19c9e91e80';

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
        {umamiScriptUrl && umamiWebsiteId ? (
          <Script
            src={umamiScriptUrl}
            strategy="afterInteractive"
            data-website-id={umamiWebsiteId}
            data-do-not-track="true"
          />
        ) : null}
        {children}
        <section className="site-storage-notice" id="site-storage-notice" aria-label="Privacy and storage notice">
          <div>
            <span className="card-label">Privacy</span>
            <p>We use essential cookies for sign-in, anonymous play limits, and security. We also use local storage for your game score and Umami for privacy-friendly aggregate analytics. No ads or tracking pixels. See our <a href="/cookies">Cookie and Storage Policy</a>.</p>
          </div>
          <button className="access-wall-primary" id="site-storage-accept" type="button">OK, continue</button>
        </section>
        <Script id="site-storage-notice-script" strategy="afterInteractive">{`
          (() => {
            const key = 'jmg_storage_notice=1';
            const notice = document.querySelector('#site-storage-notice');
            const button = document.querySelector('#site-storage-accept');
            if (!notice || !button) return;
            notice.hidden = document.cookie.split('; ').includes(key);
            button.addEventListener('click', () => {
              document.cookie = 'jmg_storage_notice=1; Max-Age=15552000; Path=/; SameSite=Lax; Secure';
              notice.hidden = true;
            });
          })();
        `}</Script>
      </body>
    </html>
  );
}
