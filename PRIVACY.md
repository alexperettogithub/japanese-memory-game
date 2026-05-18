# Privacy

Japanese Memory Game is built as a learning app, not as a data business.

The hosted app does not use advertising networks, tracking pixels, or cross-site profiling. It uses Umami for aggregate privacy-friendly analytics. Data is used only where it is needed to provide the learning experience, operate accounts, enforce fair access limits, process subscriptions, publish optional leaderboard results, understand aggregate usage, and send transactional emails.

## Data Used By The App

The app may use the following categories of data:

- Account data: email address and optional profile information supplied during sign-up.
- Authentication data: secure session cookies used to keep a signed-in user authenticated.
- Anonymous usage data: a technical anonymous identifier and hashed network-derived signal used to enforce anonymous Explore and Play limits.
- Local game data: score and progress statistics stored in the user's browser with localStorage.
- Subscription data: Stripe customer, subscription, price, and status identifiers needed to determine Plus access.
- Transactional email data: email address and message metadata needed to send sign-in, account, and subscription-related emails.
- Optional leaderboard data: public nickname, mode, grade, play type, score, solved cards, time, consent version, and publication timestamp when a signed-in user chooses to publish a result.
- Aggregate analytics data: page views and basic usage information processed through Umami without advertising profiling.

## Cookies And Local Storage

Japanese Memory Game uses limited technical browser storage:

- `jmg_anon_id`: a technical cookie for anonymous usage limits.
- Supabase authentication cookies: session cookies for signed-in users.
- `jmg_storage_notice`: remembers whether the storage notice was accepted.
- `jmg-score-stats`: localStorage entry for local score statistics.

These are not advertising cookies and are not used for behavioral profiling.

The app loads Umami from `cloud.umami.is` for aggregate privacy-friendly analytics. Umami is not used for advertising or cross-site profiling.

## Payments

Plus subscriptions are processed by Stripe. Japanese Memory Game does not receive or store raw payment card details. The app stores only the subscription information needed to grant, update, or remove Plus access.

## Email

Transactional emails may be sent for sign-in, account, and subscription events. These emails are part of operating the service and are not marketing automation or behavioral tracking.

## Retention

Anonymous usage events are intended to be retained only for the operational window needed to enforce fair-use limits and diagnose abuse. The database includes a cleanup mechanism for old anonymous usage events.

Account and subscription data is retained while needed to operate the account, provide Plus access, satisfy legal or operational obligations, or complete account deletion workflows.

## Account Deletion

Users may request account deletion through the app. If a Plus subscription is active, the app requires the subscription to be cancelled first so billing state and account deletion remain consistent.

## Third-Party Services

The hosted app currently uses managed services for hosting, authentication/database, payments, aggregate analytics, and transactional email. These services are used to operate and improve the product; they are not added for advertising or surveillance.

The source code remains free software, and reducing infrastructure lock-in is part of the long-term roadmap.
