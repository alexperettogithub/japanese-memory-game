import Script from 'next/script';

export default function Home() {
  return (
    <>
      <div className="beta-badge" aria-label="New beta version">New!<span>Beta version</span></div>
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
            <section className="account-panel" id="account-panel" aria-label="Account status">
              <div>
                <span className="account-kicker">Account</span>
                <strong id="account-status">Checking session...</strong>
                <p id="account-detail">Sign in or create a free account to save your access.</p>
              </div>
              <div className="account-actions" id="account-actions">
                <a className="account-primary" id="account-signin" href="/login?mode=signin">Sign in</a>
                <a className="account-secondary" id="account-signup" href="/login?mode=signup">Sign up free</a>
                <button className="account-secondary" id="account-portal" type="button" hidden>Manage Plus</button>
                <button className="account-secondary" id="account-signout" type="button" hidden>Sign out</button>
              </div>
            </section>
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
