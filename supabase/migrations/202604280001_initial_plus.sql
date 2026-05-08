create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  first_name text,
  last_name text,
  role text check (role in ('student', 'teacher', 'developer', 'japanese_culture_curious')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles add column if not exists first_name text;
alter table public.profiles add column if not exists last_name text;
alter table public.profiles add column if not exists role text;

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'profiles_role_check'
  ) then
    alter table public.profiles
      add constraint profiles_role_check
      check (role in ('student', 'teacher', 'developer', 'japanese_culture_curious'));
  end if;
end $$;

create table if not exists public.anonymous_usage_events (
  id uuid primary key default gen_random_uuid(),
  anonymous_id uuid not null,
  ip_hash text not null,
  kind text not null check (kind in ('explore_card_used', 'play_attempt')),
  created_at timestamptz not null default now()
);

create index if not exists anonymous_usage_events_kind_created_at_idx
  on public.anonymous_usage_events(kind, created_at desc);

create index if not exists anonymous_usage_events_anonymous_id_idx
  on public.anonymous_usage_events(anonymous_id);

create index if not exists anonymous_usage_events_ip_hash_idx
  on public.anonymous_usage_events(ip_hash);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  stripe_customer_id text not null,
  stripe_subscription_id text not null unique,
  stripe_price_id text,
  status text not null,
  current_period_end timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists subscriptions_user_id_idx
  on public.subscriptions(user_id);

alter table public.profiles enable row level security;
alter table public.anonymous_usage_events enable row level security;
alter table public.subscriptions enable row level security;

drop policy if exists "Users can read own profile" on public.profiles;
create policy "Users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

drop policy if exists "Users can read own subscriptions" on public.subscriptions;
create policy "Users can read own subscriptions"
  on public.subscriptions for select
  using (auth.uid() = user_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, first_name, last_name, role)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'first_name',
    new.raw_user_meta_data ->> 'last_name',
    new.raw_user_meta_data ->> 'role'
  )
  on conflict (id) do update set
    email = excluded.email,
    first_name = coalesce(excluded.first_name, public.profiles.first_name),
    last_name = coalesce(excluded.last_name, public.profiles.last_name),
    role = coalesce(excluded.role, public.profiles.role),
    updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create or replace function public.record_anonymous_usage(
  p_anonymous_id uuid,
  p_ip_hash text,
  p_kind text,
  p_limit integer,
  p_since timestamptz
)
returns table(allowed boolean, auth_required boolean, used integer)
language plpgsql
security definer set search_path = public
as $$
declare
  current_used integer;
begin
  if p_kind not in ('explore_card_used', 'play_attempt') then
    raise exception 'invalid usage kind';
  end if;

  perform pg_advisory_xact_lock(hashtext(p_kind || ':' || p_anonymous_id::text));
  perform pg_advisory_xact_lock(hashtext(p_kind || ':' || p_ip_hash));

  select count(*)::integer into current_used
  from public.anonymous_usage_events
  where kind = p_kind
    and created_at >= p_since
    and (anonymous_id = p_anonymous_id or ip_hash = p_ip_hash);

  if current_used >= p_limit then
    allowed := false;
    auth_required := true;
    used := current_used;
    return next;
    return;
  end if;

  insert into public.anonymous_usage_events (anonymous_id, ip_hash, kind)
  values (p_anonymous_id, p_ip_hash, p_kind);

  allowed := true;
  auth_required := false;
  used := current_used + 1;
  return next;
end;
$$;
