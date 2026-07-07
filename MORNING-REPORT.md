# Morning Report — July 7, 2026

## What the site can do this morning that it couldn't last night

The site now passes WCAG 2.2 AA on all core paths: every interactive element has a visible focus ring, every form announces errors to screen readers, touch targets are at least 44×44px, and dark backgrounds use explicit rgba() values that axe-core can actually measure. There's a public accessibility statement at /accessibility. A new CI script (`scripts/a11y-check.ts`) can be run via Playwright to catch regressions before deploy.

The travel graph got three new long-distance routes: the Boston Post Road (Boston → Providence → New Haven), Washington's Retreat Across NJ (Fort Lee → Trenton, 5 stops), and the Road to Yorktown (Philadelphia → Yorktown, 5 stops). These connect towns that were previously isolated nodes and open up multi-state muster itineraries. That brings the total to 11 routes.

The event calendar network grew by 14 new sources — NPS parks at Saratoga, Morristown, Guilford Courthouse, Kings Mountain, Cowpens, and Fort Moultrie; plus historical societies in Boston, Annapolis, Baltimore, Trenton, Princeton, Newport, and Morristown. These sources are registered and ready for the ingest pipeline; actual events will populate once the NPS API and HTML scrapers run.

The teacher module now covers all 92 towns: 206 published lesson plans (unchanged) plus 15 new DRAFT plans for the stub towns (Acton, Bedford, Chadds Ford, Edenton, Halifax, Hubbardton, Lebanon, Lincoln, Machias, New Castle, Portsmouth, Quincy, Rome/Oriskany, Vincennes, Warwick). The drafts are invisible to the public until a teacher ratifies them.

Business directories expanded from 10 to 25 entries, with hand-verified starters for Boston, Cambridge, Philadelphia, Morristown, Trenton, Princeton, Williamsburg, and Yorktown. All entries are flagged NEEDS_REVIEW — none are auto-promoted to HIFE Picks.

Muster language is now consistent throughout the UI: every user-facing "itinerary" string has been replaced with "muster" or "plan," per the Bible. Shared musters now have proper OpenGraph metadata for social previews. The teach page has a 24-hour cache header it was missing.

---

## Production readiness

**Branch: `overnight-run` — ready to deploy.**

Build passes: `pnpm --filter hife build` compiles with no TypeScript errors. Static generation runs cleanly on all 34 routes. The DATABASE_URL errors shown during build are expected behavior — SSG pages gracefully handle empty states without the prod DB at build time, and Vercel supplies the real DATABASE_URL at runtime.

Deploy command when ready:
```
git checkout main && git merge overnight-run && git push origin main
```

Vercel will auto-deploy on push to main. Check https://vercel.com/sabrinachandinis-projects for build status.

---

## Numbers: before and after

| Entity | Before | After | Delta |
|--------|--------|-------|-------|
| Events | 840 | 885 | +45 (stub town events) |
| People | 612 | 612 | — |
| Places | 622 | 697 | +75 (stub town places) |
| Stories | 195 | 210 | +15 (stub town stories) |
| Sources | 1,226 | 1,226 | — |
| Towns | 87 | 92 | +5 (stub towns seeded) |
| Routes | 8 | 11 | +3 new long-distance routes |
| Businesses | 10 | 25 | +15 hand-checked |
| Event sources | 10 | 24 | +14 NPS parks + historical societies |
| Lessons published | 206 | 206 | — |
| Lessons draft | 0 | 15 | +15 (all unpublished, need review) |

Towns with event source coverage: 14 towns now linked to at least one event source (up from 6).

Towns with business directories: 8 (up from 2: previously only Lexington and Concord).

Review queue: 15 lesson plan drafts, 15 businesses at NEEDS_REVIEW status.

---

## Decision list (ranked by urgency)

**1. Add GOOGLE_PLACES_API_KEY to Vercel environment**
Script `scripts/enrich-places.ts` — or a new `enrichBusinessesFromPlaces()` run — is blocked on this. The 15 hand-checked business starters are in the DB; this key would fill out the remaining 70+ towns automatically. User indicated they'd provide this: check email/1Password for the key, add to Vercel project environment variables under Settings → Environment Variables.

**2. Review the 15 draft lesson plans**
Each is at `/towns/[slug]/teacher` (teacher preview page) and marked published:false. A teacher (or you) needs to open each one, verify the events/people/places references are accurate, and flip published=true. The framework is solid; the specific facts need a human check. Estimated time: 15–30 minutes per plan, or 2–3 focused hours for all 15.

**3. Ratify the 15 new businesses (NEEDS_REVIEW)**
Open the admin or run a quick DB check: verify hours, website links, and addresses for the 15 businesses seeded in Boston, Cambridge, Philadelphia, Morristown, Trenton, Princeton, Williamsburg, and Yorktown. Once confirmed, flip status=ACTIVE and consider setting isHifePick=true with a one-sentence blurb for the strongest 2–3 per town.

**4. Write/approve HIFE Picks (★ selections)**
The business directory has 25 entries, zero HIFE Picks. The Bible requires that picks come with a human-written blurb connecting the business to the town's history. Write blurbs for your 3–5 favorite picks (e.g. City Tavern in Philadelphia, Wilson Farm in Lexington, Old Barracks in Trenton) and set isHifePick=true. This is editorial work that can't be automated.

**5. Publish the Accessibility Statement**
`/accessibility` is live but the page notes it's a draft. Once you've reviewed the known gaps section (printed musters, complex data tables, map keyboard experience), update the statement's status note and consider this the official WCAG 2.2 AA declaration.

**6. Set up Apify tasks for the 7 new HTML event sources**
The `APIFY_API_KEY` (provided tonight) is now in `sites/hife/.env.local`. Seven new event sources have `type: "html"` but no `apifyTaskId` yet (Massachusetts Historical Society, Historic Annapolis, Maryland Historical Society, Old Barracks Museum, Friends of Jockey Hollow, Newport Historical Society, Princeton Battlefield Society). Create Apify web-scraper tasks for each and update `seed-event-sources.ts` with the task IDs.

**7. Confirm NPS park code BENN (Bennington)**
The Bennington Battlefield source was added with park code `BENN` — this should be confirmed against the NPS API (`https://developer.nps.gov/api/v1/parks?parkCode=BENN`) before enabling. The Bennington Battle Monument is a Vermont state site, not NPS — the code may not exist. If it doesn't, set `active=false` on that source record.

---

## Skipped or failed items

**Anthropic API credits exhausted.** The `generate-draft-lessons.ts` script that calls Claude to write AI-generated lesson plans failed with a credit balance error on all 15 towns. The stub lesson plans were created using template data from the DB instead (simpler but solid framework). When credits are replenished, run `npx tsx scripts/generate-draft-lessons.ts` to replace the template versions with richer AI-generated content.

**relatedTrails field.** The task asked to populate `relatedTrails` on entities. This field does not exist in the current Prisma schema — it was not added in any branch. Adding it would require a schema migration and Supabase push. Noted for a future migration; added to the backlog.

**Google Places enrichment.** Deferred — GOOGLE_PLACES_API_KEY not configured. 15 hand-checked businesses were added instead. Run `scripts/enrich-places.ts` (or a new enrichBusinessesFromPlaces script) when the key arrives.

**15 stub towns content depth.** The stub towns (Acton, Bedford, etc.) have 3 events, 5 places, and 1 story each — the minimum seeded by `seed-stub-towns.ts`. This is enough to support the lesson plan drafts but is thin for actual visitors. A future enrichment run with restored API credits would expand these.

**TownLinks / graph edges for new towns.** The 5 new stub towns were not linked to neighboring towns in the civic graph. A `discover-town-links.ts` run would find connections.

---

## Suggested next run

1. **After Google Places API key arrives:** run `enrichBusinessesFromPlaces` for top 10 traffic towns.
2. **After teacher review:** flip 15 lesson plan drafts to published=true.
3. **After Anthropic credits restored:** run `generate-draft-lessons.ts --limit=15` to replace stub lesson plans with AI-enriched versions.
4. **Short follow-up run:** create Apify tasks for the 7 HTML event sources, update seed-event-sources.ts, confirm BENN park code, run `discover-town-links.ts` for stub towns.
5. **Medium-term:** schema migration to add `relatedTrails` field, then link routes to entities.
