# Design Direction

Japanese Memory Game should feel fresh, playful, modern, and lightweight.

The visual direction is inspired by contemporary learning products: bold color, friendly shapes, fast feedback, and a sense of momentum. The interface should feel fun without becoming visually noisy or heavy.

## Product Principles

- Keep learning lightweight and low-friction.
- Make the core action obvious: choose a set, flip cards, search, repeat.
- Prefer playful clarity over dense dashboards.
- Keep architecture as simple as the current product needs allow.
- Avoid adding dependencies unless they clearly improve the learner experience or maintainability.

## Current UI Decisions

- A colorful hero introduces the project mission quickly.
- Controls are grouped in a single panel: app mode, study mode, search, grade, and shuffle.
- On mobile, secondary controls are collapsed behind a hamburger menu to keep the game area readable.
- Explore mode is for browsing and searching.
- Play mode is for active recall with typed answers, scoring, completion feedback, desktop Esc cancellation, and mobile tap-outside cancellation.
- Play mode shows an elapsed-time counter to add lightweight momentum without turning the app into a dense dashboard.
- Switching from one unsolved Play card to another is intentionally two-step: first close the active card, then open the next card.
- Play mode is split into Pronunciation practice and Meaning practice.
- Only one unsolved Play card can be open for answering at a time.
- Score stats are temporarily stored locally in the browser.
- Search is global when active, so learners can find kana or kanji directly.
- Kanji grade browsing remains available when search is empty.
- Card backs show the useful learning information first: romaji for kana, meaning and readings for kanji.
- Dense card backs use smaller, tighter type so longer readings and diphthongs remain inside the card.
- Logo and favicon design is paused for review. They are treated as all-rights-reserved brand assets.
- The top-right beta badge is intentionally styled like a playful product label to make the early-public status visible.

## Product Notes

- Naming can be revisited as the educational scope grows.
- Account support should stay lightweight and should not dominate the learning experience.
- Plus access must remain compatible with the project's free-software goals, privacy position, and ethical monetization principles.

## Architecture Note

The app is moving through a Next.js migration to support server-side auth, anonymous usage limits, Stripe Plus subscriptions, and advanced-content gating.

Advanced content is represented as a product concept, not a one-off rule. Today, kanji grade 3 and above are advanced. Future advanced features should use the same entitlement check instead of adding separate paywall logic.
