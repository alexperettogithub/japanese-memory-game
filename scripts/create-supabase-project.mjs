import { loadOperatorEnv } from './lib/operator-env.mjs';

loadOperatorEnv();

const token = process.env.SUPABASE_ACCESS_TOKEN;
let organizationId = process.env.SUPABASE_ORGANIZATION_ID;
const organizationSlug = process.env.SUPABASE_ORGANIZATION_SLUG;
const databasePassword = process.env.SUPABASE_DATABASE_PASSWORD;
const name = process.env.SUPABASE_PROJECT_NAME || 'Japanese Memory Game Staging';
const region = process.env.SUPABASE_REGION || 'eu-central-1';

if (!token) throw new Error('Missing SUPABASE_ACCESS_TOKEN');

async function supabaseApi(path, init = {}) {
  const response = await fetch(`https://api.supabase.com/v1${path}`, {
    ...init,
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json',
      ...init.headers,
    },
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return data;
}

if (!organizationId && organizationSlug) {
  const organizations = await supabaseApi('/organizations');
  const organization = organizations.find((item) => item.slug === organizationSlug || item.name === organizationSlug);
  if (!organization) throw new Error(`Unable to find Supabase organization: ${organizationSlug}`);
  organizationId = organization.id;
}

if (!organizationId) {
  const organizations = await supabaseApi('/organizations');
  console.log(JSON.stringify({
    organizations: organizations.map((item) => ({ id: item.id, name: item.name, slug: item.slug })),
  }, null, 2));
  console.error('Set SUPABASE_ORGANIZATION_ID or SUPABASE_ORGANIZATION_SLUG, then rerun this script.');
  process.exit(1);
}

if (!databasePassword) throw new Error('Missing SUPABASE_DATABASE_PASSWORD');

const project = await supabaseApi('/projects', {
  method: 'POST',
  body: JSON.stringify({
    organization_id: organizationId,
    name,
    region,
    db_pass: databasePassword,
  }),
});

console.log(JSON.stringify({
  project: {
    id: project.id,
    ref: project.ref,
    name: project.name,
    region: project.region,
  },
}, null, 2));
