create table if not exists public.leaderboard_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  display_name text not null,
  scope text not null default 'global' check (scope in ('global')),
  mode text not null check (mode in ('hiragana', 'katakana', 'kanji')),
  play_kind text not null check (play_kind in ('pronunciation', 'meaning')),
  grade integer not null default 0 check (grade between 0 and 6),
  score integer not null check (score >= 0 and score <= 10000),
  solved integer not null check (solved >= 0 and solved <= 10000),
  total integer not null check (total >= 0 and total <= 10000),
  time_seconds integer not null check (time_seconds >= 0 and time_seconds <= 86400),
  consent_version text not null,
  consented_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, scope, mode, play_kind, grade)
);

create index if not exists leaderboard_entries_public_rank_idx
  on public.leaderboard_entries(scope, mode, play_kind, grade, score desc, time_seconds asc, updated_at desc);

create index if not exists leaderboard_entries_user_id_idx
  on public.leaderboard_entries(user_id);

alter table public.leaderboard_entries enable row level security;

drop policy if exists "Users can read own leaderboard entries" on public.leaderboard_entries;
create policy "Users can read own leaderboard entries"
  on public.leaderboard_entries for select
  using (auth.uid() = user_id);

drop policy if exists "Users can delete own leaderboard entries" on public.leaderboard_entries;
create policy "Users can delete own leaderboard entries"
  on public.leaderboard_entries for delete
  using (auth.uid() = user_id);

create or replace view public.leaderboard_public as
select
  display_name,
  scope,
  mode,
  play_kind,
  grade,
  score,
  solved,
  total,
  time_seconds,
  updated_at
from public.leaderboard_entries;
