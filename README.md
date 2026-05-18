# Japanese Memory Game

Japanese Memory Game is a lightweight web app for studying Japanese hiragana, katakana, and kyōiku kanji through memory cards and active recall.

The project exists to make Japanese learning more playful, accessible, and transparent. Its source code is free software: people are welcome to inspect it, learn from it, run it, share it, modify it, and fork it under the terms of the license.

## Product Status

The public production app is available at:

```text
https://www.japanesememorygame.com
```

The project is moving from a lightweight static site to a Next.js application with account support, anonymous usage limits, server-side content gating, and an optional Plus subscription for advanced kanji content. This work is prepared and tested on the `staging` branch before being promoted to production.

## Learning Features

- Study hiragana, katakana, and kyōiku kanji memory cards.
- Browse kanji by Japanese elementary school grade.
- Use Explore mode for browsing and Play mode for active recall.
- Practice pronunciation with romaji for kana and hiragana for kanji.
- Practice English meanings for kanji cards.
- Search across Japanese characters, kana readings, romaji, grade labels, and English meanings.
- Shuffle the active card set on demand.
- Track the score and elapsed time for a play round.
- Keep temporary local score stats in the browser.
- Unlock a hidden Taito kanji challenge after completing a play round.

## Access Model

Japanese Memory Game is designed to remain useful without payment or tracking-based monetization.

- Hiragana, Katakana, Kanji Grade 1, and Kanji Grade 2 are free learning content.
- Anonymous visitors can try the app with limited Explore and Play usage before signing in.
- Signed-in free users can use the free content without anonymous usage caps.
- Kanji Grade 3 through Grade 6 are planned as Plus content.
- Plus is intended to support hosting, maintenance, educational expansion, and future free-software infrastructure work.

## Privacy Position

The app does not use advertising, tracking pixels, or surveillance-based monetization. It uses Umami for aggregate privacy-friendly analytics so the project can understand basic usage without advertising profiling.

Only technical data needed to operate the app is used: sign-in session cookies, anonymous usage-limit cookies, local score storage, account data for signed-in users, optional leaderboard data, payment status for subscribers, aggregate analytics, and transactional email delivery. See [PRIVACY.md](PRIVACY.md).

## Free Software And Infrastructure

The application source code is free software under GPL-3.0-or-later. Some operational services used by the hosted app are managed third-party services, currently including hosting, authentication/database, payments, and transactional email.

The long-term goal is to keep the code fully inspectable and reusable while progressively reducing infrastructure lock-in where practical. See [ROADMAP.md](ROADMAP.md).

## Human And AI-Assisted Development

Japanese Memory Game is designed, directed, and reviewed by humans. The project uses AI-assisted software development tools, including OpenAI Codex and ChatGPT 5.5 through OpenCode by Anomaly, under human supervision.

Human work includes product direction, educational goals, prompt design, final decisions, code review, smoke testing, user feedback collection, and release approval. AI assistance is used as an engineering aid, not as an autonomous maintainer.

## Licenses

This repository uses multiple licensing layers:

- Source code is licensed under the GNU General Public License v3.0 or later.
- Original educational content created specifically for this project is licensed under Creative Commons Attribution 4.0 International.
- Kanji grade data derived from Wikipedia is licensed under Creative Commons Attribution-ShareAlike 4.0 International, following Wikipedia's licensing terms.
- Trademarks, trade names, logos, mascots, visual identity, and brand assets are all rights reserved and are not licensed under the GPL or Creative Commons licenses.

See [LICENSE](LICENSE), [CONTENT-LICENSE.md](CONTENT-LICENSE.md), [TRADEMARKS.md](TRADEMARKS.md), and [NOTICE](NOTICE).

## Local Development

Install dependencies and run the development server:

```sh
npm install
npm run dev
```

Runtime configuration is supplied through the appropriate local or hosted environment.

## Contributing

Contributions are welcome when they respect the educational purpose, licensing model, privacy posture, and free-software direction of the project.

See [CONTRIBUTING.md](CONTRIBUTING.md).
