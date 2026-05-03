import type { Metadata } from 'next';
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
      </body>
    </html>
  );
}
