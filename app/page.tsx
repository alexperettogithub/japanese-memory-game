import Script from 'next/script';

export default function Home() {
  return (
    <>
      <div className="beta-badge" aria-label="New beta version">New!<span>Beta version</span></div>
      <nav className="site-menu" aria-label="Account and social links">
        <input className="site-menu-state" id="site-menu-state" type="checkbox" aria-hidden="true" />
        <label className="site-menu-toggle" id="site-menu-toggle" htmlFor="site-menu-state" aria-controls="site-menu-panel" aria-label="Open menu" role="button">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className="site-menu-panel" id="site-menu-panel">
          <div className="site-menu-account">
            <span className="account-kicker">Account</span>
            <strong id="account-status">Checking session...</strong>
            <p id="account-detail">Sign in or create a free account to save your access.</p>
          </div>
          <div className="account-actions" id="account-actions">
            <a className="account-primary" id="account-signin" href="/login?mode=signin">Sign in</a>
            <a className="account-secondary" id="account-signup" href="/login?mode=signup">Sign up free</a>
            <button className="account-primary" id="account-subscribe" type="button">Subscribe</button>
            <button className="account-secondary" id="account-portal" type="button" hidden>Manage Plus</button>
            <button className="account-secondary" id="account-signout" type="button" hidden>Sign out</button>
          </div>
          <div className="social-links" aria-label="Social links coming soon">
            <button type="button" aria-label="X profile coming soon" data-social="X" data-coming-soon="true">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2h3.4l-7.5 8.6L23.6 22h-6.9l-5.4-7.1L5.1 22H1.7l8-9.2L1.2 2h7.1l4.9 6.5L18.9 2Zm-1.2 18h1.9L7.2 3.9h-2L17.7 20Z" /></svg>
            </button>
            <button type="button" aria-label="Instagram profile coming soon" data-social="Instagram" data-coming-soon="true">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3Zm0 2A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Zm5-2.7a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 17 6.6Z" /></svg>
            </button>
            <a href="https://github.com/alexperettogithub/japanese-memory-game" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 8.4 22.9c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9A4.6 4.6 0 0 1 6 7.8a4.3 4.3 0 0 1 .1-3.1s1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.3 4.3 0 0 1 .1 3.1 4.6 4.6 0 0 1 1.2 3.2c0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.2.9 2.4v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z" /></svg>
            </a>
          </div>
          <p className="social-feedback" id="social-feedback" aria-live="polite"></p>
          <section className="app-coming-soon" aria-label="Mobile apps coming soon">
            <span className="account-kicker">Mobile apps</span>
            <p>Coming soon to the App Store and Play Store.</p>
            <div className="app-store-icons" aria-hidden="true">
              <span className="app-store-icon apple-icon">
                <svg viewBox="0 0 24 24"><path d="M16.4 12.8c0-2.8 2.3-4.1 2.4-4.2-1.3-1.9-3.3-2.2-4-2.2-1.7-.2-3.3 1-4.1 1-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.2-.5 7.9 1.3 10.5.9 1.3 1.9 2.7 3.3 2.6 1.3-.1 1.8-.8 3.4-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.2-2.5 1-1.4 1.4-2.8 1.4-2.9 0 0-2.7-1-2.7-4.5ZM13.7 4.6c.7-.9 1.2-2.1 1.1-3.3-1.1 0-2.4.7-3.2 1.6-.7.8-1.3 2-1.1 3.2 1.2.1 2.5-.6 3.2-1.5Z" /></svg>
              </span>
              <span className="app-store-icon play-icon">
                <svg viewBox="0 0 24 24"><path d="M3.6 2.4c-.3.3-.5.7-.5 1.2v16.8c0 .5.2.9.5 1.2l9.5-9.6-9.5-9.6Zm10.8 8.3 2.3-2.3L5.7 2.1l8.7 8.6Zm2.3 4.9-2.3-2.3-8.7 8.6 11-6.3Zm1.6-5.9-2.6 2.3 2.6 2.3 2.1-1.2c.8-.5.8-1.7 0-2.2l-2.1-1.2Z" /></svg>
              </span>
            </div>
          </section>
        </div>
      </nav>
      <div className="time-counter" id="play-time-counter" hidden aria-label="Play time">
        <span>Time</span>
        <strong id="time-value">00:00</strong>
      </div>
      <div className="access-wall" id="access-wall" hidden role="dialog" aria-modal="true" aria-labelledby="access-wall-title">
        <div className="access-wall-card">
          <span className="card-label" id="access-wall-label">Keep learning</span>
          <h2 id="access-wall-title">Sign in to continue</h2>
          <p id="access-wall-copy">Sign in if you already have an account, or create a free account to keep playing with no limits in Explore Mode.</p>
          <div className="access-wall-actions access-wall-auth-actions" id="auth-actions">
            <a className="access-wall-primary" href="/login?mode=signin">Sign in</a>
            <a className="access-wall-secondary" href="/login?mode=signup">Sign up (free)</a>
            <button className="access-wall-secondary" id="access-wall-close" type="button">Not now</button>
          </div>
          <div className="access-wall-actions" id="plus-actions" hidden>
            <button className="access-wall-primary" id="checkout-yearly" type="button">Plus yearly · €30/year</button>
            <button className="access-wall-secondary" id="checkout-monthly" type="button">Plus monthly · €5/month</button>
          </div>
          <p className="access-wall-feedback" id="checkout-feedback" aria-live="polite"></p>
        </div>
      </div>
      <div className="page-container">
        <div className="container">
          <header className="hero">
            <img className="site-logo" src="/logo.svg" alt="Japanese Memory Game logo" />
            <h1>Japanese Memory Game</h1>
            <p className="hero-copy">Explore cards, play recall rounds, and build Japanese memory one tiny win at a time.</p>
          </header>
          <section className="controls-panel" aria-label="Game controls">
            <div className="app-mode-switch explore-selected" aria-label="App mode">
              <button className="mode-btn active" data-app-mode="explore">Explore mode</button>
              <button className="mode-btn" data-app-mode="play">Play mode</button>
            </div>
            <button className="controls-toggle" id="controls-toggle" type="button" aria-expanded="false" aria-controls="advanced-controls">
              <span aria-hidden="true">☰</span>
              Controls
            </button>
            <div className="advanced-controls" id="advanced-controls">
              <div className="navigation" aria-label="Study mode">
                <button className="nav-btn active" data-mode="hiragana">Hiragana</button>
                <button className="nav-btn" data-mode="katakana">Katakana</button>
                <button className="nav-btn" data-mode="kanji">Kanji</button>
                <button className="nav-btn shuffle-btn" id="shuffle-btn">Shuffle</button>
              </div>
              <div className="search-wrap">
                <label htmlFor="search-input">Search cards</label>
                <div className="search-box">
                  <input id="search-input" type="search" placeholder="Try ka, か, カ, 水, みず, or water" autoComplete="off" />
                  <button className="clear-search-btn" id="clear-search-btn" type="button" aria-label="Clear search">Clear</button>
                </div>
                <p className="search-hint">Search globally by Japanese, romaji, or English meaning.</p>
              </div>
              <div className="score-panel" id="score-panel" hidden>
                <div className="play-kind-switch" aria-label="Play type">
                  <button className="play-kind-btn active" data-play-kind="pronunciation" type="button">Pronunciation</button>
                  <button className="play-kind-btn" data-play-kind="meaning" type="button">Meaning</button>
                </div>
                <div>
                  <span className="score-label">Score</span>
                  <strong id="score-value">0</strong>
                </div>
                <div>
                  <span className="score-label">Solved</span>
                  <strong id="progress-value">0/0</strong>
                </div>
                <div>
                  <span className="score-label">Best</span>
                  <strong id="best-score-value">0</strong>
                </div>
                <div>
                  <span className="score-label">Total</span>
                  <strong id="total-score-value">0</strong>
                </div>
                <p id="play-instructions">Click a card, type the answer, then submit.</p>
              </div>
              <div className="grade-selection" style={{ display: 'none' }} aria-label="Kanji grade">
                <button className="grade-btn active" data-grade="1">Grade 1 (80)</button>
                <button className="grade-btn" data-grade="2">Grade 2 (160)</button>
                <button className="grade-btn" data-grade="3">Grade 3 (200)</button>
                <button className="grade-btn" data-grade="4">Grade 4 (202)</button>
                <button className="grade-btn" data-grade="5">Grade 5 (193)</button>
                <button className="grade-btn" data-grade="6">Grade 6 (191)</button>
              </div>
            </div>
          </section>
          <div className="game-container">
            <p className="results-summary" id="results-summary" aria-live="polite"></p>
            <div className="cards-grid" id="cardsGrid"></div>
            <section className="bonus-level" id="bonus-level" hidden aria-live="polite">
              <div className="bonus-copy">
                <span className="card-label">Secret level unlocked</span>
                <h2>Taito challenge</h2>
                <p>You cleared the round. Now try the legendary 84-stroke kanji.</p>
              </div>
              <div className="bonus-card">
                <span className="taito-kanji">𱁬</span>
                <label htmlFor="taito-answer">Answer in hiragana</label>
                <div className="answer-row">
                  <input id="taito-answer" type="text" inputMode="text" autoComplete="off" placeholder="たいと" />
                  <button id="taito-submit" type="button">Check</button>
                </div>
                <p className="answer-feedback" id="taito-feedback"></p>
              </div>
            </section>
          </div>
        </div>
        <footer>
          <p>Copyleft <span className="rotated">©</span> <span id="current-year">2026</span> <a href="https://www.zerosoftworks.it" target="_blank" rel="noopener noreferrer">Zero Softworks</a></p>
        </footer>
      </div>
      <Script src="/kanji-data.js" strategy="beforeInteractive" />
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
