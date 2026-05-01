# Sabrinas Town

> *History is for everyone.*

An interconnected network of the most important American Revolution towns — designed to be licensable to tourism organizations, with a first-class teacher engine and per-town branded sites.

## Monorepo layout

```
sabrinas-town/
├── packages/
│   ├── ui/          — @hife/ui       shared React components + Tailwind preset
│   ├── content/     — @hife/content  shared TypeScript types (Town, TownEvent, …)
│   └── template/    — @hife/template scaffold for new town sites (do not import directly)
├── sites/
│   ├── hife/        — hub site: rankings, map, teacher modules, org dashboard
│   └── lexington/   — Lexington, MA branded town site (port 3001)
├── prisma/
│   └── schema.prisma
└── scripts/         — local enrichment scripts (Anthropic API, DB writes)
```

## Packages

| Package | Purpose |
|---|---|
| `@hife/ui` | All shared React components. Import via `import { Heading, Container, … } from "@hife/ui"`. Also exports `@hife/ui/tailwind.preset` for use in site `tailwind.config.ts`. |
| `@hife/content` | Pure TypeScript types: `Town`, `TownEvent`, `TownPerson`, `TownStory`, `TownSource`, `TownPlace`, `TeacherModuleResponse`, `TownSignature`, `getTownSignature`. No runtime deps. |
| `@hife/template` | Next.js scaffold — **never import this package**. Copy it via `pnpm create-town`. |

## Sites

| Site | Dev port | Description |
|---|---|---|
| `sites/hife` | 3000 | Main hub: rankings, map, compare, teacher modules, org dashboard, auth |
| `sites/lexington` | 3001 | Lexington, MA — first branded town site |

Each town site has a hardcoded `SLUG` constant in `src/lib/withTown.ts` that scopes every Prisma query to a single verified `townId`, preventing cross-tenant data leaks.

## Development

```bash
pnpm install

# Run all sites
pnpm dev

# Run only the hub
pnpm dev:hife

# Run a specific site
pnpm --filter lexington dev
```

## Adding a new town site

```bash
pnpm create-town --slug concord-ma --name "Concord" --state MA
# Scaffolds sites/concord-ma/ with correct package.json, withTown.ts, and dev port
pnpm install
pnpm --filter concord-ma dev
```

Then add pages under `sites/concord-ma/src/app/` following the pattern in `sites/lexington/src/app/`.

Before the site will serve data, the town must exist in the database:

```sql
SELECT id, name FROM "Town" WHERE slug = 'concord-ma';
```

## Import rules (all sites)

`@/lib/db` does **not** exist — using it breaks Vercel builds.

| What you need | Correct import |
|---|---|
| Prisma client | `import prisma from "@/lib/prisma"` |
| Data-fetching | `import { getFoo } from "@/lib/api"` |
| Auth helpers | `import { … } from "@/lib/auth"` |

New data queries belong in `lib/api.ts`, not inline in page files.

## Database

Schema lives at `prisma/schema.prisma` (monorepo root). Each site references it via:

```json
"prisma": { "schema": "../../prisma/schema.prisma" }
```

Common commands:

```bash
pnpm db:generate   # regenerate Prisma client
pnpm db:migrate    # run migrations (dev)
pnpm db:studio     # open Prisma Studio
```

## Enrichment scripts (local only)

These call the Anthropic API and write directly to the database. Never deploy them.

```bash
npx tsx scripts/enrich-content.ts --events-only   # expand event summaries
npx tsx scripts/enrich-content.ts --people-only   # expand person bios
npx tsx scripts/enrich-images.ts --people-only    # generate portraits
```

Log to a file rather than piping to `tail`:

```bash
npx tsx scripts/enrich-content.ts --events-only > /tmp/enrich.log 2>&1 &
tail -f /tmp/enrich.log
```

## Deploy

Push to `main` → Vercel auto-deploys `sites/hife`.
Build logs: https://vercel.com/sabrinachandinis-projects

Town sites (`sites/lexington`, etc.) are deployed as separate Vercel projects, each pointing at their `sites/<slug>/` directory with `../../prisma/schema.prisma` available via the monorepo root.

## Scoring system

Towns are scored across 7 dimensions:

| Category | Weight | Description |
|---|---|---|
| Historical | 25% | Event significance, notable people |
| Preservation | 15% | NPS designation, quality |
| Accessibility | 10% | Transit, walkability, ADA |
| Interpretation | 15% | Visitor center, tours, programs |
| Interconnection | 15% | Links to other towns, routes |
| Stories | 10% | Diversity and verification of narratives |
| Sources | 10% | Tier 1/2 source coverage |

Score tiers: Exceptional (90+) · Excellent (75–89) · Notable (60–74) · Relevant (40–59) · Emerging (0–39)

## Story verification labels

Verified · Oral Tradition · Anecdotal · Unverified

---

Built with care for the stories that shaped America.
