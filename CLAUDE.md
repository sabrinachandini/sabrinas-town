# Sabrinas Town — Claude Code Notes

## Project layout

```
sabrinas-town/
├── packages/
│   ├── ui/        — @hife/ui       shared React components + Tailwind preset
│   ├── content/   — @hife/content  shared TypeScript types only (no runtime deps)
│   └── template/  — scaffold for new town sites; copy via pnpm create-town
├── sites/
│   ├── hife/      — main hub site (rankings, map, teacher, org dashboard, auth)
│   └── lexington/ — Lexington MA branded town site (port 3001)
├── prisma/
│   └── schema.prisma   ← single source of truth for all sites
└── scripts/       — local enrichment scripts (never deployed)
```

## Critical import rules

**`@/lib/db` does NOT exist.** Using it breaks the Vercel build.

| What you need | Correct import |
|---|---|
| Prisma client (direct) | `import prisma from "@/lib/prisma"` |
| Data-fetching functions | `import { getFoo } from "@/lib/api"` |
| Auth helpers | `import { ... } from "@/lib/auth"` |

Prefer `@/lib/api` functions over direct Prisma calls in page components.
New data queries belong in `@/lib/api`, not inline in page files.
Direct Prisma is acceptable in: API routes (`app/api/`), server actions, and auth/org pages.

## Shared packages

### @hife/ui
All shared UI components. No build step — TypeScript source consumed directly via `transpilePackages`.
- Import components: `import { Heading, Container, Divider, … } from "@hife/ui"`
- Import Tailwind preset: `import preset from "@hife/ui/tailwind.preset"` in `tailwind.config.ts`

### @hife/content
Pure TypeScript types: `Town`, `TownEvent`, `TownPerson`, `TownStory`, `TownSource`,
`TownPlace`, `TeacherModuleResponse`, `LessonPlan`, `Standards`, `TownSignature`, `getTownSignature`.
No runtime dependencies — safe to import anywhere.

### @hife/template
Scaffold only — **never import this package** in application code.
Use `pnpm create-town` to copy it into a new site.

## Tenant isolation pattern

Each town site has a hardcoded `SLUG` constant in `src/lib/withTown.ts`:

```ts
const SLUG = "lexington-ma";
export async function withTown<T>(fn: (townId: string) => Promise<T>): Promise<T | null> { … }
```

`withTown()` resolves slug → townId before every Prisma query.
This prevents IDOR-style cross-tenant data leaks.
The slug has no parameter — it cannot be overridden by a URL or request.

## Adding a new town site

```bash
pnpm create-town --slug concord-ma --name "Concord" --state MA
pnpm install
pnpm --filter concord-ma dev    # auto-selected port (3002+)
```

The script copies `packages/template/`, rewrites `withTown.ts` with the hardcoded slug,
substitutes the town name into `layout.tsx` and `page.tsx`, and sets the correct dev port.

## next.config.ts requirements

Every site must have:
```ts
transpilePackages: ["@hife/ui", "@hife/content"]
```
Without this, TypeScript-source workspace packages fail to compile.

## Prisma schema path

Each site's `package.json` must include:
```json
"prisma": { "schema": "../../prisma/schema.prisma" }
```
And build/postinstall scripts reference the same path:
```
prisma generate --schema=../../prisma/schema.prisma
```

## Vercel deploy

Push to `main` → auto-deploys `sites/hife`.
Build logs: https://vercel.com/sabrinachandinis-projects
Live hub: https://sabrinas-town.vercel.app

Town sites are separate Vercel projects, each pointed at `sites/<slug>/`.

## Enrichment scripts (local only)

```bash
npx tsx scripts/enrich-content.ts --events-only   # expand event summaries
npx tsx scripts/enrich-content.ts --people-only   # expand person bios
npx tsx scripts/enrich-images.ts --people-only    # generate portraits
```

These call the Anthropic API and write directly to the database. Do not pipe through `| tail` — log to a file instead:

```bash
npx tsx scripts/enrich-content.ts --events-only > /tmp/enrich.log 2>&1 &
tail -f /tmp/enrich.log
```

## .gitignore

`**/.next/` is in the root `.gitignore` — never commit build artifacts.
