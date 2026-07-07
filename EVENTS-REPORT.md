# Event Ingestion — Build Report

## What was built

The event ingestion pipeline keeps the modern-events calendar full so Muster can weave live events into trips.

---

## Sources seeded (10 total)

### Auto-publish (5) — trusted structured feeds, events go live immediately

| Source | Type | Towns | Why auto-publish |
|--------|------|-------|-----------------|
| NPS — Minute Man NHP | NPS API | Lexington, Concord | Official federal agency API, structured JSON, verified park |
| NPS — Boston NHP | NPS API | Boston | Same |
| NPS — Independence NHP | NPS API | Philadelphia | Same |
| NPS — Colonial NHP | NPS API | Yorktown, Williamsburg | Same |
| NPS — Valley Forge NHP | NPS API | Valley Forge | Same |

### Review-first (5) — HTML event pages, each event needs one-tap approval

| Source | Town | What's needed |
|--------|------|---------------|
| Lexington Historical Society | Lexington | Check site for ICS export; if found, change type→ics and update URL |
| Concord Museum | Concord | Same |
| Paul Revere House | Boston | Same |
| Colonial Williamsburg | Williamsburg | Large calendar — may have ICS; check page source |
| Museum of the American Revolution | Philadelphia | Check for ICS or RSS feed |

The HTML sources are in the registry but the pipeline skips them automatically until their type is changed to `ics`. They're placeholders for when you (or a volunteer) find the ICS feed URL.

---

## How the daily schedule works

Every day at 7am UTC, Vercel runs `/api/cron/event-ingestion`. It:
1. Loads all active `EventSource` records from the database
2. For NPS sources: calls `developer.nps.gov/api/v1/events?parkCode=XXXX` and fetches events 90 days out
3. For ICS sources: fetches and parses the `.ics` file
4. Normalizes each event (title, date, venue, description capped at 300 chars, source URL kept)
5. Deduplicates: if an event with the same `sourceId + externalId` already exists, skips it
6. Routes by trust level: auto_publish → live immediately; review_first → lands in the review queue
7. Expires past one-time events (sets `published: false` on events whose date has passed)
8. Logs everything to the `IngestionRun` table, visible at `/admin/events/review?tab=runs`

Muster only reads `published: true` events — unpublished and expired events never appear in trips.

---

## How to add a source

1. Open `scripts/seed-event-sources.ts`
2. Add an entry to the `SOURCES` array with: name, URL, type (`nps_api` / `ics` / `html`), trustLevel, and the town slug
3. Run: `npx tsx scripts/seed-event-sources.ts` (against prod: swap DATABASE_URL first)
4. The source appears immediately in `/admin/events/review?tab=sources`

For NPS parks: add `npsParkCode` and find the park code at nps.gov/findapark. That's all — the API does the rest.

For ICS feeds: set `type: "ics"` and `url` to the `.ics` file URL. Set `trustLevel: "auto_publish"` once you've seen a few runs and trust the data.

---

## What needs your decision

1. **`NPS_API_KEY` env var** — the pipeline is wired but events won't fetch until this key is added to Vercel. Get a free key at developer.nps.gov (takes 2 minutes). Add it as `NPS_API_KEY` in the Vercel project environment variables.

2. **ICS URLs for the 5 museum sources** — the registry has their event page URLs but the pipeline can't auto-fetch HTML. When you find an ICS export link on any of these sites, update the source record: change `type` to `ics` and `url` to the ICS feed link. You can do this via a quick script or directly in the Supabase dashboard.

3. **Promoting sources to auto-publish** — after a few weeks of reviewing events from a source and finding them reliable, hit "Promote to Auto-Publish" in the review queue. That source's future events go live without review, and any events already in the queue get approved in bulk.

4. **Review queue badge** — the pending count shows at the top of `/admin/events/review`. You'll see it whenever you visit the admin area.

---

## Schema changes

Three new models added to `prisma/schema.prisma` and pushed to Supabase:
- `EventSource` — the per-town source registry
- `IngestionRun` — one record per pipeline run, with full log
- `LocalEvent` additions: `published`, `needsReview`, `sourceId`, `externalId`, `confidence`, `eventEndDate`

Existing LocalEvents defaulted to `published: true` — nothing broke in Muster.

---

## Build status

TypeScript clean. All phases compile. Vercel cron registered at `0 7 * * *`.
