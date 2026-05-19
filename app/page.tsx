import type { Metadata } from 'next';
import Link from 'next/link';
import { LandingMenu } from './components/LandingMenu';

export const metadata: Metadata = {
  title: 'Japanese Memory Game - Learn Kana and Kanji by Playing',
  description: 'Start learning Japanese hiragana, katakana, and kanji with a fast memory game built for short, focused recall practice.',
  alternates: {
    canonical: '/',
  },
};

const steps = [
  {
    title: 'Explore first',
    text: 'Flip cards without pressure. See the character, pronunciation, and meaning until the deck starts to feel familiar.',
  },
  {
    title: 'Switch to Play mode',
    text: 'Recall from memory instead of just recognizing. Type the answer, check it, and build a real retrieval habit.',
  },
  {
    title: 'Follow the path',
    text: 'Start with Hiragana, continue with Katakana, then move into Kanji Grade 1 and Grade 2 when kana feels comfortable.',
  },
  {
    title: 'Keep your streak simple',
    text: 'Use best score, solved cards, and best time as tiny signals. One clean round beats a long unfocused session.',
  },
];

const quickWins = [
  'Try 10 Hiragana cards in Explore mode.',
  'Play one short recall round.',
  'Search a character you keep missing.',
  'Come back tomorrow and beat your best time.',
];

const characterSystems = [
  {
    name: 'Hiragana',
    sample: 'あ',
    text: 'The soft phonetic script used for native Japanese words, grammar endings, and beginner reading.',
  },
  {
    name: 'Katakana',
    sample: 'ア',
    text: 'The angular phonetic script used for loanwords, names, emphasis, and many modern terms.',
  },
  {
    name: 'Kanji',
    sample: '水',
    text: 'Meaning-rich characters used for words and concepts. One symbol can carry sound, meaning, and context.',
  },
];

const usageShots = [
  {
    src: '/app-usage-explore.svg',
    alt: 'Explore mode preview showing Japanese memory cards',
    title: 'Explore cards first',
    text: 'Tap a card and reveal pronunciation and meaning before you test yourself.',
  },
  {
    src: '/app-usage-play.svg',
    alt: 'Play mode preview showing a recall answer field and score',
    title: 'Recall actively',
    text: 'Switch to Play mode and type answers from memory, not from recognition alone.',
  },
  {
    src: '/app-usage-progress.svg',
    alt: 'Progress preview showing score, solved cards, and best time',
    title: 'Keep tiny wins visible',
    text: 'Watch solved cards, best score, and best time so practice feels concrete.',
  },
];

export default function LandingPage() {
  return (
    <main className="welcome-page landing-page">
      <div className="beta-badge" aria-label="New beta version">New!<span>Beta version</span></div>
      <LandingMenu />
      <section className="landing-hero" aria-labelledby="welcome-title">
        <div className="landing-hero-inner">
          <header className="landing-hero-copy">
            <span className="card-label">Free Japanese memory trainer</span>
            <img className="site-logo landing-logo" src="/logo.svg" alt="Japanese Memory Game logo" />
            <h1 id="welcome-title">Japanese Memory Game</h1>
            <p className="hero-copy">Explore kana and kanji cards, then switch into short recall rounds that turn recognition into memory.</p>
            <div className="hero-actions" aria-label="Primary actions">
              <Link className="hero-action-primary" href="/play">Start playing</Link>
              <Link className="hero-action-secondary" href="#how-it-works">How it works</Link>
            </div>
            <div className="landing-proof-row" aria-label="Practice highlights">
              <span>No account needed to try</span>
              <span>No ads</span>
              <span>Free software</span>
            </div>
          </header>
          <aside className="landing-preview-card" aria-label="Practice preview">
            <div className="preview-topline">
              <span>Explore mode</span>
              <strong>Hiragana</strong>
            </div>
            <div className="preview-card-stack" aria-hidden="true">
              <span>あ</span>
              <span>ア</span>
              <span>水</span>
            </div>
            <p>Flip a card, say the answer, then test recall when you are ready.</p>
          </aside>
        </div>
      </section>

      <section className="welcome-trust-strip" aria-label="Why try it">
        <div><strong>No account needed to try</strong><span>Start with anonymous Explore and Play limits.</span></div>
        <div><strong>No ads or tracking pixels</strong><span>Privacy-friendly aggregate analytics only.</span></div>
        <div><strong>Free software</strong><span>GPL code and open educational licensing.</span></div>
      </section>

      <section className="welcome-section character-section" aria-labelledby="characters-title">
        <div className="welcome-section-intro">
          <span className="card-label">Japanese writing</span>
          <h2 id="characters-title">Japanese uses characters in three different ways.</h2>
          <p>Learning Japanese is not just memorizing an alphabet. You meet two phonetic scripts plus kanji, a system of meaning-bearing characters. The app exists because that mix is easier to learn when each symbol becomes an action, not a static table.</p>
        </div>
        <div className="character-grid">
          {characterSystems.map((system) => (
            <article className="character-card" key={system.name}>
              <strong>{system.sample}</strong>
              <h3>{system.name}</h3>
              <p>{system.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="welcome-section purpose-section" aria-labelledby="purpose-title">
        <div>
          <span className="card-label">Why this app exists</span>
          <h2 id="purpose-title">Because recognition is not the same as memory.</h2>
        </div>
        <p>Most beginners see giant kana charts and kanji lists, understand them for a moment, then lose them later. Japanese Memory Game is built around retrieval practice: short rounds, immediate feedback, and repeated recall. The goal is to help learners cross the first wall without ads, dark patterns, or noisy lessons.</p>
      </section>

      <section className="welcome-section usage-section" aria-labelledby="usage-title">
        <div className="welcome-section-intro">
          <span className="card-label">Inside the app</span>
          <h2 id="usage-title">What practice looks like.</h2>
          <p>Start by browsing, then ask your memory to work. The interface stays deliberately simple so the card, answer, and next tiny win stay in focus.</p>
        </div>
        <div className="usage-shot-grid">
          {usageShots.map((shot) => (
            <figure className="usage-shot" key={shot.src}>
              <img src={shot.src} alt={shot.alt} />
              <figcaption>
                <strong>{shot.title}</strong>
                <span>{shot.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="welcome-section welcome-flow" id="how-it-works" aria-labelledby="flow-title">
        <div className="welcome-section-intro">
          <span className="card-label">How it works</span>
          <h2 id="flow-title">One loop, four moves.</h2>
          <p>The app is intentionally small. Less setup means fewer exits before the first useful memory rep.</p>
        </div>
        <div className="welcome-step-grid">
          {steps.map((step, index) => (
            <article className="welcome-step" key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="welcome-section welcome-split" aria-labelledby="first-session-title">
        <div>
          <span className="card-label">Your first session</span>
          <h2 id="first-session-title">Do this before you leave.</h2>
          <p>Most people bounce because the next action is unclear. This is the shortest useful path: get one small win, then decide whether to go deeper.</p>
        </div>
        <ol className="welcome-checklist">
          {quickWins.map((win) => <li key={win}>{win}</li>)}
        </ol>
      </section>

      <section className="welcome-section welcome-access" aria-labelledby="access-title">
        <div className="welcome-section-intro">
          <span className="card-label">Access</span>
          <h2 id="access-title">Free learning first. Plus when you want the full kanji path.</h2>
        </div>
        <div className="welcome-plan-grid">
          <article className="welcome-plan-card">
            <span className="card-label">Free</span>
            <h3>Build the foundation</h3>
            <ul>
              <li>Hiragana and Katakana</li>
              <li>Kanji Grade 1 and Grade 2</li>
              <li>Free account removes anonymous limits on free content</li>
            </ul>
            <Link className="access-wall-secondary" href="/login?mode=signup">Start free</Link>
          </article>
          <article className="welcome-plan-card featured-plan">
            <span className="card-label">Plus</span>
            <h3>Unlock advanced kanji</h3>
            <ul>
              <li>Kanji Grade 3 through Grade 6</li>
              <li>Future advanced content as it ships</li>
              <li>Supports hosting, maintenance, and free-software development</li>
            </ul>
            <Link className="access-wall-primary" href="/play?checkout=plus">Get Plus</Link>
          </article>
        </div>
      </section>

      <section className="welcome-section welcome-final-cta" aria-labelledby="final-cta-title">
        <span className="card-label">Ready</span>
        <h2 id="final-cta-title">Give it one round.</h2>
        <p>If the first three minutes feel useful, save your access with a free account. If you are already serious about kanji, Plus is there when you need the advanced grades.</p>
        <div className="welcome-actions" aria-label="Final actions">
          <Link className="access-wall-primary" href="/play">Play now</Link>
          <Link className="access-wall-secondary" href="/leaderboard">See the leaderboard</Link>
        </div>
      </section>

      <footer className="welcome-footer">
        <p>Built by <a href="https://www.zerosoftworks.it" target="_blank" rel="noopener noreferrer">Zero Softworks</a>.</p>
        <nav aria-label="Legal and project links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/free-culture">Free Culture</Link>
          <a href="https://github.com/alexperettogithub/japanese-memory-game" target="_blank" rel="noopener noreferrer">Source code</a>
        </nav>
      </footer>
    </main>
  );
}
