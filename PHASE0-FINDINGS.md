# Phase 0 Discovery Findings
# Branch: civic-graph-and-directories
# Read this at the start of the next session before touching anything.

## What already exists (do NOT rebuild these)

### Entity models — all present in prisma/schema.prisma
- Town, Event, Person, Place, Story, Source, Theme, Route, RouteStop, Business — all exist
- TownLink with 7 types: SHARED_EVENT | SHARED_PERSON | SHARED_THEME | ROUTE | COMPARISON | GEOGRAPHIC_PROXIMITY | OTHER
- Organization model exists (lines 562+) — used for partner orgs, not civic entities yet
- LocalEvent (modern calendar events, separate from historical Event)
- Muster / MusterDay / MusterStop (trip planner)
- Cluster / ClusterTown / ClusterBridge (town groupings)

### Verification system — BETTER than needs_review flag
- `VerificationStatus` enum: VERIFIED | ORAL_TRADITION | ANECDOTAL | UNVERIFIED
- Applied to: Person (default VERIFIED), Story
- NOT yet on: Event, Place, Source (these need it added — Phase 1 work)
- Source has `CredibilityTier`: TIER1 | TIER2 | TIER3 | TODO (different concept — source quality, not content confidence)
- Changelog: UpdateDelta + ChangeLogEntry track all changes with requiresHumanReview boolean

### What's MISSING from the schema (Phase 1 work needed)
1. `verificationStatus VerificationStatus` on Event model (line ~131)
2. `verificationStatus VerificationStatus` on Place model (line ~241)  
3. `needsReview Boolean @default(false)` on Event, Place, Person, Story (workflow status, separate from confidence)
4. No standalone `Organization` entity for civic graph — existing Organization is for partners/orgs with subscriptions

### Pages that exist vs. missing
- EXISTS: /towns/[slug]/* (all sub-pages), /people/[slug], /places/[slug], /events (list)
- MISSING: /routes/[slug] standalone route pages
- EXISTS: EatAndShop.tsx — already wired into town pages ✅
- EXISTS: Saratoga redirect in next.config.ts ✅
- EXISTS: Kings Mountain footnote (done in July 2026 expansion) ✅

### API functions (lib/api.ts — 2739 lines)
Key functions for graph work:
- `getTown(slug)` — includes outgoingLinks, townThemes, routeStops, changeLogEntries
- `getMapData()` — returns towns + links for the interactive map
- `compareTowns(slugA, slugB)` — sharedEvents, sharedPeople, sharedThemes, sharedRoutes
- `getPersonBySlug(personSlug)` — person with all towns, events, stories (cross-town)
- `getBusinessesByTown(slug)` — picks + byCategory directory
- `getTeacherModule(slug)` — filters stories where verificationStatus === "VERIFIED"

### Business directory — Phase 4 is mostly done
- Business model complete with all required fields (category, isHifePick, blurb, siteId, source, lastVerified, status)
- `getBusinessesByTown()` works
- EatAndShop.tsx component exists and renders on town pages
- NO Google Places API integration yet — needs GOOGLE_PLACES_API_KEY in env
- Starter data seeded for Lexington + Concord (from July 2026 expansion)

### Saratoga — Phase 6 redirect done, DB merge still needed
- next.config.ts: /towns/saratoga-ny → /towns/saratoga-springs-ny (permanent 301)
- townAccent.ts: both slugs map to green
- DB still has TWO records: us-ny-saratoga (slug: saratoga-ny) + us-ny-saratoga-springs (slug: saratoga-springs-ny)
- Manual step: merge content from us-ny-saratoga into us-ny-saratoga-springs, then delete us-ny-saratoga

## What the next session should do (in order)

### Phase 1 schema additions (small, safe):
```prisma
// Add to Event model:
verificationStatus  VerificationStatus @default(UNVERIFIED)
needsReview         Boolean @default(false)

// Add to Place model:
verificationStatus  VerificationStatus @default(VERIFIED)
needsReview         Boolean @default(false)

// Add to Person model (already has verificationStatus, just add):
needsReview         Boolean @default(false)

// Add to Story model (already has verificationStatus, just add):
needsReview         Boolean @default(false)
```
Then run: `prisma db push --schema=../../prisma/schema.prisma`

### Phase 2 — Content inventory
Run a query against the DB to count entities per town, flag gaps.
Write CONTENT-INVENTORY.md.

### Phase 3 — Route pages
Create /routes/[slug]/page.tsx using existing route data from RouteStop model.
Pattern: copy /towns/[slug]/page.tsx structure, fetch via getRouteBySlug (may need new api.ts function).

### Phase 4 — Google Places integration
Add to lib/api.ts: `enrichBusinessesFromPlaces(townSlug)` — calls Google Places API, upserts Business records with source=PLACES_API.
Requires GOOGLE_PLACES_API_KEY in .env. Build the wiring but gate behind key check.

### Phase 6 — Saratoga DB merge
Write a script: scripts/merge-saratoga.ts
- Copy all events/people/places/stories from us-ny-saratoga to us-ny-saratoga-springs
- Delete us-ny-saratoga record
- Verify the 301 redirect still works

### Phase 7 — Report
Write GRAPH-REPORT.md summarizing everything.

## Storage choice rationale (for the report)
The existing PostgreSQL + Prisma setup is the right choice for the civic graph. Reason: the graph relationships (TownLink, EventPerson, EventTown, SourceEvent, etc.) are already modeled as typed junction tables with weights and metadata — this is a relational graph, not a property graph. Adding verificationStatus and needsReview to the remaining entity types completes the confidence layer without any new storage technology. The alternative (a dedicated graph DB like Neo4j) would require migrating 8+ existing models and duplicating all the teacher/muster/auth infrastructure. Boring and reliable wins.
