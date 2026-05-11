import Script from 'next/script';

export default function LeaderboardPage() {
  return (
    <main className="legal-page leaderboard-page">
      <section className="legal-hero leaderboard-hero">
        <span className="card-label">Opt-in rankings</span>
        <h1>Leaderboard</h1>
        <p>Public results from players who explicitly choose to publish a score. No email addresses are shown.</p>
      </section>
      <section className="legal-card leaderboard-controls" aria-label="Leaderboard filters">
        <label>
          Mode
          <select id="leaderboard-mode" defaultValue="hiragana">
            <option value="hiragana">Hiragana</option>
            <option value="katakana">Katakana</option>
            <option value="kanji">Kanji</option>
          </select>
        </label>
        <label>
          Play type
          <select id="leaderboard-play-kind" defaultValue="pronunciation">
            <option value="pronunciation">Pronunciation</option>
            <option value="meaning">Meaning</option>
          </select>
        </label>
        <label id="leaderboard-grade-wrap" hidden>
          Grade
          <select id="leaderboard-grade" defaultValue="1">
            <option value="1">Grade 1</option>
            <option value="2">Grade 2</option>
            <option value="3">Grade 3</option>
            <option value="4">Grade 4</option>
            <option value="5">Grade 5</option>
            <option value="6">Grade 6</option>
          </select>
        </label>
      </section>
      <section className="legal-card leaderboard-card">
        <div className="leaderboard-table-wrap">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Player</th>
                <th>Score</th>
                <th>Solved</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody id="leaderboard-rows">
              <tr><td colSpan={5}>Loading leaderboard...</td></tr>
            </tbody>
          </table>
        </div>
        <p className="leaderboard-note">Publishing is optional. Players can remove their own leaderboard entries from the game screen while signed in.</p>
      </section>
      <Script id="leaderboard-script" strategy="afterInteractive">{`
        (() => {
          const mode = document.querySelector('#leaderboard-mode');
          const playKind = document.querySelector('#leaderboard-play-kind');
          const grade = document.querySelector('#leaderboard-grade');
          const gradeWrap = document.querySelector('#leaderboard-grade-wrap');
          const rows = document.querySelector('#leaderboard-rows');
          const formatTime = seconds => {
            const safe = Number.isFinite(Number(seconds)) ? Number(seconds) : 0;
            return String(Math.floor(safe / 60)).padStart(2, '0') + ':' + String(safe % 60).padStart(2, '0');
          };
          async function load() {
            gradeWrap.hidden = mode.value !== 'kanji';
            const params = new URLSearchParams({ mode: mode.value, playKind: playKind.value });
            if (mode.value === 'kanji') params.set('grade', grade.value);
            rows.innerHTML = '<tr><td colspan="5">Loading leaderboard...</td></tr>';
            try {
              const response = await fetch('/api/leaderboard?' + params.toString());
              const result = await response.json();
              const entries = Array.isArray(result.entries) ? result.entries : [];
              if (!entries.length) {
                rows.innerHTML = '<tr><td colspan="5">No published results yet.</td></tr>';
                return;
              }
              rows.replaceChildren(...entries.map((entry, index) => {
                const tr = document.createElement('tr');
                [String(index + 1), entry.display_name, String(entry.score), entry.solved + '/' + entry.total, formatTime(entry.time_seconds)].forEach(value => {
                  const td = document.createElement('td');
                  td.textContent = value;
                  tr.appendChild(td);
                });
                return tr;
              }));
            } catch {
              rows.innerHTML = '<tr><td colspan="5">Unable to load leaderboard.</td></tr>';
            }
          }
          [mode, playKind, grade].forEach(element => element.addEventListener('change', load));
          load();
        })();
      `}</Script>
    </main>
  );
}
