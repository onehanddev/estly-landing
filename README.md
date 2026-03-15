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

If service-role is not set, the endpoint will also try:
- `SUPABASE_SERVICE_ROLE_KEY`
- `WAITLIST_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

`WAITLIST_TABLE` is optional (defaults to `waitlist_signups`, then falls back to `waitlist`).

Suggested table:

```sql
create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text,
  created_at timestamptz default now()
);
```

## Demo Video (YouTube Embed)

Landing page video reads from:

```bash
NEXT_PUBLIC_ESTLY_DEMO_YOUTUBE_URL=<youtube-url-or-video-id>
```

Accepted formats:
- Full YouTube URL (e.g. `https://www.youtube.com/watch?v=VIDEO_ID`)
- Short URL (e.g. `https://youtu.be/VIDEO_ID`)
- Raw 11-character video ID
