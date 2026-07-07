# Muster — Build Report

Muster is the flagship traveler product for History Is For Everyone. A visitor enters dates, a start point, and what kind of history interests them. Claude drafts a day-by-day itinerary with historic sites, live events, meals, and lodging. They can edit it by dragging stops around, remove anything that doesn't fit, and share it with a link or print it as a PDF.

---

## What was built

### Phase 1 — Core engine (pre-existing)
The generation engine at `sites/hife/lib/muster.ts` was already complete:
- **Geocoding** via Nominatim (free, no key required) converts city names to coordinates.
- **Corridor search** finds every HIFE town within 80 miles of the straight line between start and end points. Uses haversine distance.
- **Event matching** pulls live events that overlap the trip dates, including annual recurring events matched by month and day.
- **Claude generation** (`claude-sonnet-4-6`) builds the structured itinerary JSON, validates all stop IDs against known datasets so no hallucinated places sneak through, and verifies meal restaurants via the Overpass API (OpenStreetMap). If a restaurant can't be verified, a "⚠ Call ahead" tip is added rather than silently dropping it.
- **Persistence** saves Muster → MusterDay → MusterStop in Postgres (Supabase) with full cascade.

The wizard at `/muster/new`, the editor at `/muster/[id]`, the print view at `/muster/[id]/print`, and the public share page at `/muster/share/[token]` were also already in place.

### Phase 2 — Route → Muster (this session)
Every historical route in the graph can now become a Muster in one tap.

- **`MusterRouteButton`** sits in the sidebar of every route detail page (`/routes/[slug]`). Pick start and end dates, click "Muster this trip →". Claude receives the route's towns as the corridor anchors and uses a tighter 30-mile search radius (routes are geographically constrained; 80 miles would pull in irrelevant towns).
- **`createMusterFromRoute` server action** reads the route's ordered stops, sets the start/end location from the first and last town, passes `"Following the [route name] route"` as the interest, and redirects to the new muster.

### Phase 3 — Stop editing
The drag-to-reorder already worked. Two new capabilities:

- **Remove stop button** (×) on every stop. Optimistic delete: the stop disappears instantly in the UI, then the server renumbers the remaining stops. If the server call fails, the page refreshes to restore accurate state.
- **Drive time connectors** between consecutive stops. Computed client-side via haversine ÷ 45 mph. Displayed as "~12 min drive" between stop rows. Recomputes automatically when stops are reordered.

### Phase 4 — Save anonymous musters
Musters can be created without signing in.

- If a signed-in user opens an unclaimed muster, a banner appears: "Save to My Musters →". Submitting the form calls `claimMuster`, which assigns the muster to their account.
- If a signed-out user opens an unclaimed muster, a banner appears: "Sign in to save →" linking to `/login?next=/muster/[id]`.

### Phase 5 — Teacher / field-trip mode
When "School group" is selected in the wizard, a field-trip panel appears asking for grade level and number of students.

Claude receives a mandatory constraint block that overrides the default generation logic:
- School hours only: all stops fall between 8 AM and 3 PM.
- No lodging stops.
- Every site must be bus-accessible (noted in the tip field if uncertain).
- Prioritizes sites with formal school programs, ranger-led tours, hands-on exhibits.
- Frames each stop's "why" in curriculum language tied to grade-level learning objectives.
- Suggests a group-friendly lunch spot. No alcohol references anywhere.
- Caps daily driving at 2 hours. Day ends by 2:30 PM for return travel.

The three new fields (`fieldTrip`, `gradeLevel`, `busCapacity`) are in the Prisma schema. **One manual step needed: run `npx prisma db push` against Supabase to apply the columns.** The local Prisma client has been regenerated so TypeScript is happy now.

---

## Vocabulary rules (enforced throughout)
- The product is called **Muster** (capital M).
- A single itinerary is **a muster** (lowercase).
- Generating is **"Muster this trip"**.
- Regenerating is **"Re-muster"**.
- A user's saved collection is **"My Musters"**.
- Never "plan", "itinerary builder", "trip planner" in user-facing strings.

---

## What's not done yet
- **Swap alternatives modal** — show nearby alternative stops when a user wants to swap one out. Would need a new API endpoint returning similar places within ~10 miles.
- **Lesson plan / source packet view on stops** — teacher musters could surface attached lesson plans from the town's content. The data exists in the graph; it just needs to be included in `MUSTER_STOP_INCLUDE` and rendered on stop cards.
- **My Musters page** — `getUserMusters()` exists in the lib; there's no `/musters` listing page yet.
- **Muster from a person or event page** — "Plan a trip around this event" CTA on event detail pages.

---

## Safety record
- No existing pages were broken. The build passed cleanly after each phase.
- All historical facts in generated itineraries are produced by Claude from HIFE's verified entity graph. Hallucinated stop IDs are scrubbed before saving (IDs are checked against known site/event/business sets).
- The field trip prompt explicitly forbids fabricating bus access claims — uncertain cases are flagged in the tip field for the teacher to verify.
