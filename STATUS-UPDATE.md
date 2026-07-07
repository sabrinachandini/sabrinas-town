# STATUS UPDATE — 2026-07-07

## Task 1 — Deploy
Done — overnight-run (8 commits) fast-forward merged into main and pushed to origin.

## Task 2 — Apify Tasks
9 of 12 tasks triggered successfully. 3 failed due to Apify free-tier memory limit (16 384 MB cap exceeded by concurrent runs).

| Task | Run ID | Status |
|---|---|---|
| hife-lexington-historical-society | 99vDcMrH1BFiN9pKA | READY |
| hife-concord-museum | nwCDQDnsYp7MXaZF8 | READY |
| hife-paul-revere-house | UfQU3DJQi7MJv3GC4 | READY |
| hife-colonial-williamsburg | nutvqSXuzekRsK5r9 | READY |
| hife-amrev-museum | y8CxDK5qcX5a4kMkk | READY |
| hife-mass-historical-society | 8Fpm7C38xhZGTfrAF | READY |
| hife-historic-annapolis | goicZIyfXYDy2wGRO | READY |
| hife-maryland-historical-society | YKq4rS6M5PGhnhtN4 | READY |
| hife-old-barracks-museum | qhw3MLz7iw4oyJuDJ | READY |
| hife-morristown-nps-events | SKIPPED | actor-memory-limit-exceeded |
| hife-newport-historical-society | SKIPPED | actor-memory-limit-exceeded |
| hife-princeton-battlefield-society | SKIPPED | actor-memory-limit-exceeded |

NPS_API_KEY not found in .env or .env.production. scripts/discover-events.ts exists and references it.

## Task 3 — HIFE Picks
Done — 5 businesses set to isHifePick=true, status=ACTIVE, with editorial blurbs: City Tavern, Old Barracks Museum, Old South Meeting House, Franklin Fountain, Chowning's Tavern.

## Task 4 — Lesson Plans
Done — 15 draft lesson plans published (removed [DRAFT] from titles, appended source-verification note, set published=true).

## Task 5 — NPS BENN
Invalid — NPS API returned 0 results for park code BENN (Bennington Battlefield State Historic Site). Set EventSource record active=false in production DB.

## Task 6 — relatedTrails schema
Done — added `relatedTrails String[] @default([])` to Place, Event, and Person models. Pushed to production PostgreSQL via db push. Purely additive (new column with array default on existing PostgreSQL DB that already uses String[] fields).

## Task 7 — Build
Passed — `pnpm --filter hife build` completed successfully (all 34 static pages generated). Prisma connection errors during SSG are expected and non-blocking (no DATABASE_URL in build env).

## User Action Needed
- **Apify memory limit**: 3 tasks (morristown-nps-events, newport-historical-society, princeton-battlefield-society) could not be started — the free tier hit 16 384 MB memory cap. Wait for the 9 running tasks to finish, then trigger the remaining 3, or upgrade the Apify plan.
- **NPS_API_KEY**: Missing from all env files. scripts/discover-events.ts will fail until this key is added.
- **ANTHROPIC_API_KEY credits**: Exhausted — enrichment scripts will return 400 errors until credits are replenished.

## Live URL
https://sabrinas-town.vercel.app
