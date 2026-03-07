# Phase 8: Sources Page for All Towns - Research

**Researched:** 2026-03-07
**Domain:** Next.js App Router page — empty state rendering, frontend-only change
**Confidence:** HIGH

## Summary

Phase 8 goal is: every town's `/towns/[slug]/sources` route returns 200 with meaningful content (or a placeholder with a methodology link) for all 75 towns. The ROADMAP describes this as "Remove EDITORIAL_SLUGS gate from sources route," but that gate has already been removed. The current sources page handles all towns — it was written without an EDITORIAL_SLUGS gate.

The actual gap is narrower: the empty-state copy does not include a methodology link (success criteria 2 requires it), and there has been no systematic verification that all 75 towns return 200. The implementation is a small focused edit to `sources/page.tsx` plus a `next build` verification pass.

**Primary recommendation:** Edit the empty-state branch in `sources/page.tsx` to add a methodology link, verify `next build` exits 0, and manually spot-check two non-editorial town slugs.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| SRC-01 | Every town `/sources` page returns 200; towns with no sources show placeholder with methodology link | Current page already handles all towns but empty state lacks methodology link — one targeted edit to `sources/page.tsx` addresses both criteria |
</phase_requirements>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js App Router | 14+ | Page rendering, `notFound()`, `revalidate` | Already in use across the project |
| React (Server Component) | 18+ | Page is an async server component — no client code needed | Pattern used by all town subpages |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `@/lib/api` — `getTownSources`, `getTown` | project | Fetch town and source data from backend | Already imported; no change needed |
| `@/components/editorial` — `PageShell`, `PageHeader`, `SourceGroup` | project | Consistent editorial layout | Already imported; no change needed |
| `@/components/town` — `ComingSoon` | project | Shown when `getTown()` returns null (layout handles this first, so this branch is unreachable in practice) | Already imported; no functional change needed |

### Alternatives Considered
None — this is a single-file edit, no library decisions needed.

## Architecture Patterns

### How the Sources Page Works Today

```
Request: /towns/[slug]/sources
  |
  v
layout.tsx: getTown(slug) → null → notFound() [404]
            getTown(slug) → town → render children
  |
  v
sources/page.tsx: getTown(slug) + getTownSources(slug)
  |
  ├─ town === null → <ComingSoon /> (200, layout guards this first)
  |
  ├─ sourcesData.sources.length > 0 → render tier groups + methodology link
  |
  └─ sourcesData.sources.length === 0 → plain text "Sources being compiled" (no methodology link) ← GAP
```

### Backend Behavior (verified in source)

`src/services/townService.ts` `getTownSources(slug)`:
- Returns `null` only when `prisma.town.findUnique({ where: { slug } })` returns null (town not in DB)
- Returns `{ totalCount: 0, sources: [] }` when town exists but has no SourceTown records
- This means: if the town is seeded, `/towns/:slug/sources` backend returns 200 with empty sources array

`src/routes/towns.ts` `/towns/:slug/sources`:
- Returns HTTP 404 only when `getTownSources` returns null (town not found)
- Returns HTTP 200 with `{ data: { totalCount: 0, sources: [] } }` when town exists with no sources

`web/lib/api.ts` `getTownSources(slug)`:
- Returns `null` on HTTP 404
- Returns the data object on HTTP 200

### What Causes a 404 on the Frontend

Only two paths lead to a 404 response for `/towns/[slug]/sources`:
1. **Layout path** (`layout.tsx`): `getTown(slug)` returns null → Next.js `notFound()` → 404 page. This happens when the town slug is not in the database.
2. **Invalid slug**: A URL with a slug that doesn't match any seeded town row.

For all 75 seeded towns, the layout will find the town and render children. The sources child page will always render 200 (either sources or empty state).

### Recommended Project Structure (no change)

No new files. One edit to one existing file:

```
web/app/towns/[slug]/sources/
└── page.tsx          ← only file that needs editing
```

### Pattern: Empty State with Methodology Link

The success criteria requires: "Towns with no sources show placeholder with methodology link."

The current empty state (line 71-74 of `sources/page.tsx`):
```tsx
// CURRENT — no methodology link
<p className="text-text-muted font-body">
  Sources being compiled. Check back soon.
</p>
```

Target pattern (matches the has-sources branch which already has the methodology link):
```tsx
// TARGET — with methodology link, matching project voice
<div className="space-y-4">
  <p className="text-text-muted font-body">
    Sources for this town are being compiled and verified.
  </p>
  <p className="text-small text-text-muted font-body">
    For details on how we evaluate sources, see our{" "}
    <a href="/methodology" className="text-accent-blue hover:underline">
      Methodology
    </a>
    .
  </p>
</div>
```

This matches the voice guidelines (no hype, no exclamation marks) and reuses the exact methodology link pattern from the has-sources branch.

### Anti-Patterns to Avoid

- **Do not add EDITORIAL_SLUGS gate**: The page was intentionally written without one. Adding one would break the phase goal.
- **Do not call `notFound()`** in the sources page when sources are empty — the success criteria requires 200 with a placeholder.
- **Do not redirect** to `/methodology` or any other page — inline the link.
- **Do not use `EmptyState` component**: It includes a generic icon and "View Overview / See Connections" links that don't match the sources context. Inline the text pattern instead.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Methodology page link | Custom link component | Plain `<a href="/methodology">` with existing Tailwind classes | Already used on line 65 of current sources/page.tsx; consistent |
| Source grouping | Custom tier display | Existing `SourceGroup` component | Already renders correctly; handles empty tier arrays by returning null |

## Common Pitfalls

### Pitfall 1: Assuming the EDITORIAL_SLUGS Gate Still Exists
**What goes wrong:** Building a plan to "remove the gate" when it was already removed.
**Why it happens:** ROADMAP description references older state of codebase.
**How to avoid:** Always read the actual current source file before planning.
**Warning signs:** Phase description says "remove gate" but grep finds no `EDITORIAL_SLUG` in the file.

### Pitfall 2: Treating getTown Null as the Only 404 Source
**What goes wrong:** Missing that the layout independently calls `getTown` and triggers `notFound()`.
**Why it happens:** The layout wraps all town subpages — its guard runs before the page component.
**How to avoid:** Read `layout.tsx` alongside the page file.

### Pitfall 3: Breaking the Has-Sources Branch While Fixing Empty State
**What goes wrong:** Refactoring the ternary incorrectly, breaking the existing tier groups.
**Why it happens:** The ternary at line 55 (`sourcesData && sourcesData.sources.length > 0`) controls both branches.
**How to avoid:** Edit only the else branch. Leave the if branch untouched.

### Pitfall 4: Voice Drift
**What goes wrong:** Writing empty state copy that sounds like a typical tech "coming soon" message.
**Why it happens:** Default instinct to write optimistic copy.
**How to avoid:** Project voice: calm, analytical, no hype. "Sources for this town are being compiled and verified." Not "We're working hard to add sources soon!"

## Code Examples

### Current Sources Page (full file for reference)
```tsx
// Source: web/app/towns/[slug]/sources/page.tsx (current)
// Key ternary at lines 55-74:
{sourcesData && sourcesData.sources.length > 0 ? (
  <div className="space-y-8">
    <SourceGroup label="Tier 1 — Institutional and Academic" sources={tier1} />
    <SourceGroup label="Tier 2 — Reputable Secondary" sources={tier2} />
    <SourceGroup label="Tier 3 — General Reference" sources={tier3} />
    <SourceGroup label="Pending Evaluation" sources={tierTodo} />

    <Separator className="bg-border-light" />
    <p className="text-small text-text-muted font-body">
      For details on how we evaluate sources, see our{" "}
      <a href="/methodology" className="text-accent-blue hover:underline">
        Methodology
      </a>
      .
    </p>
  </div>
) : (
  // THIS IS THE ONLY EDIT NEEDED:
  <p className="text-text-muted font-body">
    Sources being compiled. Check back soon.  {/* ← add methodology link here */}
  </p>
)}
```

### Target Empty State
```tsx
// Replaces lines 71-74 in sources/page.tsx
<div className="space-y-4">
  <p className="text-text-muted font-body">
    Sources for this town are being compiled and verified.
  </p>
  <p className="text-small text-text-muted font-body">
    For details on how we evaluate sources, see our{" "}
    <a href="/methodology" className="text-accent-blue hover:underline">
      Methodology
    </a>
    .
  </p>
</div>
```

### Verification Script (spot-check)
```bash
# Verify next build exits 0 after edit
cd /Users/sabrinachandini/sabrinas-town/web && npm run build

# Optional: curl a non-editorial town's sources API to confirm 200
curl -s http://localhost:3000/towns/savannah-ga/sources | jq '.success'
# Expected: true (200)
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| EDITORIAL_SLUGS gate on sources | No gate — all towns served | Before Phase 8 (already done) | Page already works for all 75 towns |
| Empty state: plain text, no methodology link | Empty state: inline methodology link | Phase 8 (this phase) | Satisfies success criteria 2 |

**Deprecated/outdated:**
- EDITORIAL_SLUGS constant: was used in history, teacher, and sources pages in earlier builds — fully removed before Phase 8 began.

## Open Questions

1. **Are all 75 town slugs actually seeded in the production database?**
   - What we know: Seed files cover 77 towns (per MEMORY.md); `npm run seed` was run against dev DB
   - What's unclear: Whether production Supabase DB has all 75 towns seeded
   - Recommendation: The plan should include a `next build` verification (static analysis only). Runtime production verification is out of scope for this phase — the success criteria says "returns 200 for all 75 towns" which is achievable with a local build check since all routes are dynamic (no static generation blocking).

2. **Should the subtitle change for empty-sources towns?**
   - Current: `subtitle={\`${sourcesData?.totalCount ?? 0} sources organized by credibility tier.\`}` → renders "0 sources organized by credibility tier."
   - The "0 sources organized by credibility tier" subtitle looks odd when there are no sources.
   - Recommendation: The planner may optionally update the subtitle to conditionally say "Sources being compiled" when totalCount is 0. This is not required by success criteria but improves UX. Flag as at-planner-discretion.

## Validation Architecture

> `workflow.nyquist_validation` is `false` in `.planning/config.json` — skipping this section.

## Sources

### Primary (HIGH confidence)
- `/Users/sabrinachandini/sabrinas-town/web/app/towns/[slug]/sources/page.tsx` — actual current sources page, read in full
- `/Users/sabrinachandini/sabrinas-town/web/app/towns/[slug]/layout.tsx` — confirms layout handles notFound
- `/Users/sabrinachandini/sabrinas-town/src/services/townService.ts` `getTownSources` — backend behavior verified (lines 344-378)
- `/Users/sabrinachandini/sabrinas-town/src/routes/towns.ts` `/towns/:slug/sources` — HTTP 404 vs 200 conditions verified (lines 213-251)
- `/Users/sabrinachandini/sabrinas-town/web/lib/api.ts` `getTownSources` — frontend API client verified (lines 537-556)
- `/Users/sabrinachandini/sabrinas-town/web/components/editorial/SourceGroup.tsx` — component renders correctly for empty arrays (returns null)
- `/Users/sabrinachandini/sabrinas-town/web/components/town/ComingSoon.tsx` — used when town not found
- `/Users/sabrinachandini/sabrinas-town/.planning/ROADMAP.md` — Phase 8 description and success criteria
- `/Users/sabrinachandini/sabrinas-town/.planning/STATE.md` — confirmed Phase 7 complete, Phase 8 next

## Metadata

**Confidence breakdown:**
- Current page behavior: HIGH — read actual source files
- Backend behavior: HIGH — read service and route implementations
- Required edit scope: HIGH — single targeted change to one file
- Production DB state: LOW — cannot verify without DB access

**Research date:** 2026-03-07
**Valid until:** 2026-04-07 (stable codebase, no moving dependencies)
