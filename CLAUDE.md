# Sabrinas Town — Claude Code Notes

## Project layout
- `web/` — Next.js frontend (Vercel)
- `api/` — Fastify API (also on Vercel, routed via vercel.json)
- `scripts/` — enrichment scripts (run locally, not deployed)
- `prisma/` — schema lives in `web/prisma/`

## Critical import rules (web/)

**`@/lib/db` does NOT exist.** Using it breaks the Vercel build.

| What you need | Correct import |
|---|---|
| Prisma client (direct) | `import prisma from "@/lib/prisma"` |
| Data-fetching functions | `import { getFoo } from "@/lib/api"` |
| Auth helpers | `import { ... } from "@/lib/auth"` |

Prefer `@/lib/api` functions over direct Prisma calls in page components.
New data queries belong in `@/lib/api`, not inline in page files.

## Vercel deploy
Push to `main` → auto-deploy. Check https://vercel.com/sabrinachandinis-projects for build logs.
The live site is at https://sabrinas-town.vercel.app.

## Enrichment scripts (local only)
```
npx tsx scripts/enrich-content.ts --events-only   # expand event summaries
npx tsx scripts/enrich-content.ts --people-only   # expand person bios
npx tsx scripts/enrich-images.ts --people-only    # generate portraits
```
These call the Anthropic API and write directly to the database. Do not pipe through `| tail` — log to a file instead:
```
npx tsx scripts/enrich-content.ts --events-only > /tmp/enrich.log 2>&1 &
tail -f /tmp/enrich.log
```
