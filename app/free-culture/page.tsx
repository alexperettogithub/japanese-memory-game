import Link from 'next/link';

export default function FreeCulturePage() {
  return (
    <main className="legal-page free-culture-page">
      <section className="legal-hero free-culture-hero">
        <span className="card-label">Free software and free culture</span>
        <h1>Knowledge Should Travel Freely</h1>
        <p>Japanese Memory Game is small, but the principle behind it is not: learning should not be locked away when it can help people grow.</p>
      </section>
      <section className="legal-card free-culture-manifesto">
        <h2>A Small App With A Larger Debt</h2>
        <p>Zero Softworks exists because free software made it possible to learn from zero, study how real systems work, build ideas, and eventually create a business. That gift came from people who shared their work before asking anything in return.</p>
        <p>This project is one way to give something back. Even a tiny Japanese learning app can carry a clear promise: culture expands faster, kinder, and more harmoniously when people are free to study, share, adapt, translate, fork, and improve what they receive.</p>
      </section>
      <section className="legal-card">
        <h2>Why Licenses Matter</h2>
        <p>Licenses are not paperwork at the edge of a project. They decide whether knowledge can keep moving. Restrictive licensing can freeze useful work behind legal uncertainty. Free and Creative Commons licenses remove barriers so that education, software, and cultural material can become seeds for the next person.</p>
        <p>That matters especially for learning. Language is culture, memory, and connection. The tools around it should help people cross cultural borders, not create new ones.</p>
      </section>
      <section className="legal-card">
        <h2>How This Project Shares</h2>
        <ul className="legal-list">
          <li>The application source code is free software under GPL-3.0-or-later.</li>
          <li>Original educational content created for the project is shared under Creative Commons Attribution 4.0 International.</li>
          <li>Wikipedia-derived kyōiku kanji data follows Creative Commons Attribution-ShareAlike 4.0 International.</li>
          <li>Brand assets, trademarks, trade names, mascots, logos, and visual identity remain reserved so the project can keep a clear identity.</li>
        </ul>
      </section>
      <section className="legal-card">
        <h2>No Cultural Toll Booths</h2>
        <p>Plus exists to support hosting, maintenance, and future development, not to turn learning into a closed garden. The goal is to keep useful free content available, keep the code inspectable, and keep expanding what can be learned, reused, and improved.</p>
      </section>
      <section className="legal-card">
        <h2>Read The Licensing Details</h2>
        <p>The repository explains the exact licensing layers, attribution model, and trademark boundaries.</p>
        <p><a href="https://github.com/alexperettogithub/japanese-memory-game" target="_blank" rel="noopener noreferrer">View the GitHub repository</a> or return to <Link href="/">Japanese Memory Game</Link>.</p>
      </section>
    </main>
  );
}
