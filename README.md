## Estly Landing

Landing page for Estly beta signup.

## Local Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Waitlist Endpoint (Supabase)

`POST /api/waitlist` stores signups in Supabase via REST.

Set these environment variables:

```bash
WAITLIST_SUPABASE_URL=https://<project-ref>.supabase.co
WAITLIST_SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
WAITLIST_TABLE=waitlist_signups
```

`WAITLIST_TABLE` is optional (defaults to `waitlist_signups`).

Suggested table:

```sql
create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text,
  created_at timestamptz default now()
);
```
