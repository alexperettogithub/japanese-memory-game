create or replace function public.cleanup_anonymous_usage_events(
  p_retention interval default interval '90 days'
)
returns integer
language plpgsql
security definer set search_path = public
as $$
declare
  deleted_count integer;
begin
  delete from public.anonymous_usage_events
  where created_at < now() - p_retention;

  get diagnostics deleted_count = row_count;
  return deleted_count;
end;
$$;

revoke all on function public.cleanup_anonymous_usage_events(interval) from public;
revoke all on function public.cleanup_anonymous_usage_events(interval) from anon;
revoke all on function public.cleanup_anonymous_usage_events(interval) from authenticated;
grant execute on function public.cleanup_anonymous_usage_events(interval) to service_role;
