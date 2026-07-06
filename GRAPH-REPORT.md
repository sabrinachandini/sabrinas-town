# Civic Graph and Directories — Implementation Report
# Branch: civic-graph-and-directories
# Completed: 2026-07-06

## What This Work Did

Built the entity-level civic graph infrastructure and town directories system on top of History Is For Everyone's existing PostgreSQL + Prisma data layer. No new storage technology was introduced, no existing content was removed, no visual design changes were made.

---

## Phase 1 — Entity Graph Schema

**Added to prisma/schema.prisma and pushed to Supabase:**

| Model | Added |
|-------|-------|
| Event | `verificationStatus VerificationStatus @default(UNVERIFIED)` |
| Event | `needsReview Boolean @default(false)` |
| Place | `verificationStatus VerificationStatus @default(VERIFIED)` |
| Place | `needsReview Boolean @default(false)` |
| Person | `needsReview Boolean @default(false)` |
| Story | `needsReview Boolean @default(false)` |

Person and Story already had `verificationStatus`; this phase completed the confidence + workflow layer across all four entity types.

**How the two fields work:**
- `verificationStatus` is the **confidence label** — reflects how well-sourced the content is. Values: `VERIFIED | ORAL_TRADITION | ANECDOTAL | UNVERIFIED`. Teachers see only `VERIFIED` content in the teacher module.
- `needsReview` is the **workflow flag** — a human hasn't signed off yet. Separate from confidence. An `ORAL_TRADITION` story can be fully reviewed; an `UNVERIFIED` event may still not need review if it's a known placeholder.

**Why events default to UNVERIFIED:** Existing events were machine-generated or imported without individual source verification. They should be reviewed before being promoted to VERIFIED. Places default to VERIFIED because they are physical locations with verifiable existence.

---

## Phase 2 — Content Inventory

Ran `scripts/content-inventory.ts` against the live Supabase database.

**Global totals:**
- 840 events across 87 towns
- 612 people, 622 places, 195 stories
- 1,226 sources, 10 themes, 8 routes
- 592 TownLinks (the graph edges)
- 10 businesses (Lexington: 5, Concord: 5)

**Key findings:**
- 16 towns have zero content (empty shells in the DB — registered but not yet seeded)
- Philadelphia (51 links) and Boston (46 links) are the most connected towns
- Trenton has the most events (25); Arlington has the most people (13)
- Stories are thin: most towns have 2; the target should be 5+
- Business directory is almost entirely absent — Phase 4 infrastructure is now in place

Full table in CONTENT-INVENTORY.md.

---

## Phase 3 — Route Pages

**Created:**
- `sites/hife/app/routes/page.tsx` — list of all 8 routes
- `sites/hife/app/routes/[slug]/page.tsx` — detail page per route

**Added to `lib/api.ts`:**
- `getRouteBySlug(slug)` — fetches route + ordered stops with town data
- `getAllRoutes()` — fetches all routes for the list page and `generateStaticParams`

Route pages use the Route model's `id` field as the URL slug (e.g. `/routes/midnight-ride-route`). Each stop links to the town page. The detail page shows arrivalTime and stop notes when present.

**Routes now with pages:**
1. The Freedom Trail (3 stops)
2. From Massacre to Tea Party (3 stops)
3. Siege of Boston Sites (2 stops)
4. Washington's Cambridge (3 stops)
5. Siege Command Sites (3 stops)
6. Menotomy Battlefield Walk (3 stops)
7. Battle Road: Arlington Section (3 stops)
8. Paul Revere's Midnight Ride Route (3 stops)

---

## Phase 4 — Google Places API Integration

**Added `enrichBusinessesFromPlaces(townSlug)` to `lib/api.ts`.**

How it works:
1. Checks for `GOOGLE_PLACES_API_KEY` env var — returns immediately if missing
2. Runs 4 category-specific Text Search queries per town (restaurant, café/bakery, shopping, lodging)
3. Maps Google place `types[]` array to the `BusinessCategory` enum
4. Infers price range from `price_level`
5. Upserts each result with `source: "PLACES_API"` and `status: "NEEDS_REVIEW"` — human must promote to `ACTIVE`
6. Deduplicates slugs when the same business name exists across towns

**To activate:** Add `GOOGLE_PLACES_API_KEY=<key>` to Vercel environment variables, then call `enrichBusinessesFromPlaces("lexington-ma")` from a script or admin API route. All auto-populated businesses land in `NEEDS_REVIEW` and don't appear on the public site until a curator sets them to `ACTIVE`.

**HIFE Picks are always curated:** The `isHifePick` flag can only be set manually. Google Places data can only seed the directory; it cannot earn a Pick.

---

## Phase 5 — Eat & Shop Section

Already complete before this branch. `EatAndShop.tsx` was verified to meet spec:
- HIFE Picks shown first with blurbs, green "★ HIFE Pick" badge
- Full directory by category (Restaurants → Cafés → Shopping → Stay)
- Honest footer: "never paid for, always honest"; "hours change — call ahead"
- Wired into town page via `getBusinessesByTown(slug)`

No changes needed.

---

## Phase 6 — Saratoga DB Merge

**Problem:** Two database records existed for Saratoga, NY:
- `us-ny-saratoga` (slug: `saratoga-ny`) — legacy record, 0 content, 7 sources, 8 links
- `us-ny-saratoga-springs` (slug: `saratoga-springs-ny`) — current record, full content

The HTTP 301 redirect from `/towns/saratoga-ny` → `/towns/saratoga-springs-ny` already existed in `next.config.ts`.

**Script `scripts/merge-saratoga.ts`:**
- Migrates non-duplicate TownLinks to `us-ny-saratoga-springs`
- Migrates non-duplicate SourceTown records to `us-ny-saratoga-springs`
- Deletes all orphaned child records via raw SQL (all FK-constrained tables)
- Deletes the old `us-ny-saratoga` town record

**Result:** 4 incoming links migrated, 6 sources migrated, old record deleted. The redirect remains in place for any cached URLs.

---

## Storage Choice

**PostgreSQL + Prisma is the right choice for the civic graph.** The graph relationships — `TownLink`, `EventPerson`, `EventTown`, `SourceTown`, etc. — are already modeled as typed junction tables with weights, metadata, and confidence labels. Adding `verificationStatus` and `needsReview` to the four entity types completes the confidence layer without any new storage technology.

A dedicated property graph database (Neo4j, etc.) would require:
- Migrating 8+ existing models and all their data
- Duplicating teacher module, auth, muster, and org infrastructure
- Running two databases in production with sync logic

The existing relational model handles everything HIFE needs: multi-hop traversal via joins, typed edges with metadata, confidence filtering for teachers, audit trail via `ChangeLogEntry`, and muster trip planning. Boring wins.

---

## What's Still Needed

1. **`GOOGLE_PLACES_API_KEY`** — #1 missing input. Without it, Phase 4 infrastructure is dormant. Add to Vercel env vars for the Places enrichment to work.

2. **Event verification pass** — All 840 events are currently `UNVERIFIED`. A content review pass (human or enrichment script) should promote well-sourced events to `VERIFIED`. Teacher module already filters for VERIFIED content.

3. **16 empty towns** — Acton, Bedford, Chadds Ford, Edenton, Halifax, Hubbardton, Lebanon, Lincoln, Machias, New Castle, Portsmouth (RI), Quincy, Rome/Oriskany, Vincennes, Warwick are shells with no content. These need seeding.

4. **Story depth** — Most towns have 2 stories. The target is 5+ for a rich teacher experience.

5. **Business directory** — 10 businesses across 2 towns. Run `enrichBusinessesFromPlaces` once the API key is in place, then curate results.

6. **Route stop notes** — Most route stops have `notes: null`. These should be filled in to make route pages more useful.

---

## Build Status

All phases compile cleanly. Final build: `✓ Compiled successfully` with `32/32` static pages generated. The site is ready to deploy on the `civic-graph-and-directories` branch.
