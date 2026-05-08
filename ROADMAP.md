# Roadmap

Japanese Memory Game is an early-stage free-software learning project. The roadmap is intentionally practical: improve the educational value first, keep the product lightweight, and avoid patterns that conflict with learner privacy or software freedom.

## Current Direction

- Preserve a fast and accessible learning experience on desktop and mobile.
- Keep Hiragana, Katakana, Kanji Grade 1, and Kanji Grade 2 free to use.
- Add account support without turning the app into a surveillance product.
- Offer Plus access for advanced kanji content in a way that supports the project financially.
- Keep source code available as free software under GPL-3.0-or-later.
- Keep educational licensing and attribution clear.

## Near-Term Work

- Complete the Next.js migration and promote it from staging to production after final review.
- Harden account, billing, and content-access flows.
- Improve mobile behavior and browser compatibility.
- Expand public documentation around privacy, licensing, and contribution expectations.
- Continue testing with real human learners and incorporating practical feedback.

## Educational Expansion

Potential future improvements include:

- More structured kanji practice.
- Better progress feedback for signed-in learners.
- Additional examples, readings, and contextual learning aids.
- Teacher-friendly improvements if there is real demand from educators.
- More accessibility testing and interface refinement.

## Infrastructure And Free Software Goals

The source code is free software today. The hosted production service currently depends on managed infrastructure for hosting, authentication/database, payments, and transactional email.

A longer-term goal is to make the operational stack more portable and, where practical, more self-hostable. This depends on project sustainability, maintenance capacity, security requirements, and user demand. The project will not pretend that managed infrastructure is the same thing as a fully self-hosted free-software stack.

## Human And AI-Assisted Workflow

The project uses OpenAI Codex and ChatGPT 5.5 through OpenCode by Anomaly as AI-assisted engineering tools. Human supervision remains central.

Human responsibility includes product vision, prompt design, educational direction, code review, final implementation decisions, smoke testing, feedback from real users, and release approval.

AI assistance helps accelerate implementation and review, but it does not replace human accountability for the product.
