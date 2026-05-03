# Japanese Memory Game

Japanese Memory Game is a lightweight web game for studying Japanese hiragana, katakana, and kanji through simple memory cards.

The project exists to help people around the world study Japanese in a way that is fun, effective, accessible, and light. It is built as free software so that anyone can inspect it, run it, share it, modify it, fork it, and learn from it.

## Status

This is an early public version. The production app is currently stable as a lightweight static site. The `staging` branch is used for the Next.js migration, authentication, anonymous usage limits, and the future Plus paywall.

## Features

- Browse hiragana, katakana, and kyōiku kanji memory cards.
- Browse kanji by Japanese elementary school grade.
- Switch between Explore mode for browsing and Play mode for active recall.
- In Play mode, choose Pronunciation or Meaning practice.
- In Pronunciation practice, answer kana cards with romaji and kanji cards with hiragana only.
- In Meaning practice, answer kanji cards with English meanings. Kana cards still use romaji because kana do not have standalone lexical meanings in this app.
- Cancel an active Play answer with Esc on desktop or by tapping outside on mobile.
- When another tile is selected while an unsolved Play tile is open, the first tap/click closes the current tile; a second tap/click opens the next one.
- Track an accumulating score during each play round.
- Track elapsed time during each play round.
- Persist temporary local score stats in the browser with localStorage.
- Unlock a hidden Taito kanji challenge after completing a play round.
- Shuffle the active browsing set on demand.
- Search globally across hiragana, katakana, and kanji.
- Search by Japanese characters, kana readings, romaji, kanji, grade label, or English meaning.

Repeated clicks on the already active kanji grade do not reshuffle the cards. Shuffling is an explicit action through the Shuffle button.

Score persistence is currently local-only and temporary. Future account-based progress, authentication, and paid features need a dedicated product and ethics review before implementation.

## Design Direction

The interface aims to be fresh, playful, and modern while staying lightweight and accessible. Visual inspiration may come from contemporary learning apps, but the implementation should avoid unnecessary complexity and remain easy to inspect, fork, and modify.

See [DESIGN.md](DESIGN.md).

## Development Workflow

This project is developed through a vibe coding workflow. The conceptual direction, educational goals, ethical constraints, and product vision are defined by Alex Peretto. Implementation work is assisted by AI coding tools.

This workflow is documented openly so that other people can study it, take inspiration from it, and reuse the code in full alignment with the four freedoms of Free Software.

See [VIBE-CODING.md](VIBE-CODING.md) for details.

## Licenses

This repository uses multiple licensing layers:

- Source code is licensed under the GNU General Public License v3.0 or later.
- Original educational content created specifically for this project is licensed under Creative Commons Attribution 4.0 International.
- Kanji grade data derived from Wikipedia is licensed under Creative Commons Attribution-ShareAlike 4.0 International, following Wikipedia's licensing terms.
- Trademarks, trade names, logos, mascots, visual identity, and brand assets are all rights reserved and are not licensed under the GPL or Creative Commons licenses.

The current logo and favicon are matching brand assets and are all rights reserved.

See [LICENSE](LICENSE), [CONTENT-LICENSE.md](CONTENT-LICENSE.md), [TRADEMARKS.md](TRADEMARKS.md), and [NOTICE](NOTICE).

## Run Locally

Because this is a static site, it can be opened directly in a browser. For local development, using a small static server is recommended.

```sh
npx serve .
```

On the `staging` branch, run the Next.js app with:

```sh
npm install
npm run dev
```

Required runtime variables are listed in `.env.local.example`. Do not commit real secrets.

## Deployment

The project is intended to be deployed on Vercel at:

```text
https://www.japanesememorygame.com
```

## Contributing

Contributions are welcome if they respect the project's licensing, educational purpose, and ethical direction.

See [CONTRIBUTING.md](CONTRIBUTING.md).
