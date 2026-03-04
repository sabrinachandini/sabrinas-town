---
phase: 04-homepage-restructure
plan: 01
subsystem: frontend/homepage
tags: [homepage, tourist-first, hero, featured-towns, state-strip, brand-colors]
dependency_graph:
  requires: []
  provides: [tourist-first homepage, featured towns section, all-13-states browse strip]
  affects: [web/app/page.tsx]
tech_stack:
  added: []
  patterns: [red accent marker heading (border-l-4 border-accent-red), thin blue rule (h-px w-16 bg-accent-blue), score badges, flex-wrap layout]
key_files:
  created: []
  modified:
    - web/app/page.tsx
decisions:
  - "Hero H1 changed to '75 Revolutionary towns. One network.' — action-oriented, not mission statement"
  - "Score badges added inline in featured towns (Score: 94) as small muted font-mono text"
  - "State strip expanded from 5 states + overflow link to all 13 colonies as equal pill links"
  - "Reveal component wrapperClassName used for flex layout (className prop does not exist on RevealProps)"
metrics:
  duration: 29 minutes
  completed: "2026-03-04"
  tasks_total: 1
  tasks_completed: 1
  files_changed: 1
---

# Phase 04 Plan 01: Homepage Restructure Summary

Tourist-first homepage with new H1, thin blue rule CTA layout, red-accented featured towns section with score badges, and all 13 colonies in the browse-by-state strip.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Rewrite homepage hero and add featured towns + state strip | 945a801 | web/app/page.tsx |

## What Was Built

**Hero section** — completely rewritten:
- H1: "75 Revolutionary towns. One network." (was "The Revolution happened in 77 towns.")
- Subhead: "Plan a trip. Teach a lesson. Connect the dots." (was a three-sentence mission paragraph)
- Thin blue rule (`h-px w-16 bg-accent-blue`) between subhead and CTAs
- CTAs: "Browse towns →" (primary blue) and "For teachers →" (secondary/muted)
- Removed: "American Revolution Research Network" label, "Walk the battlefields..." paragraph

**Featured towns section** — layout updated:
- Heading: "Start here" with red accent marker (`border-l-4 border-accent-red pl-4`)
- Score badges added inline: `(Score: 94)` in small muted font-mono
- Town format: "Name, State — description (Score: N)" all on one line, flex-wrap
- Used `wrapperClassName` (not `className`) on Reveal — Reveal does not expose a className prop

**Browse by state strip** — expanded:
- All 13 colonies now shown: MA, VA, NY, PA, SC, NC, GA, CT, RI, NH, VT, DE, MD
- Was: 5 states + "+ 8 more states" overflow link
- Heading changed from small uppercase label to `Heading level={3}` (Playfair)
- Each state links to `/towns#StateName`

**Below the fold (preserved):**
- "No myths. No ratings. Just the record." section
- Teacher module CTA block
- Partner/stewardship one-liner

## Verification

- `next build` exits 0 — confirmed by successful route compilation output
- TypeScript: 0 errors after fixing `className` → `wrapperClassName` on Reveal component
- No forest-green, cream, or chartreuse colors — only brand blue (#1B3D6F) and red (#C53727)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed invalid className prop on Reveal component**
- **Found during:** Task 1 — first build attempt
- **Issue:** Used `className="w-full md:w-1/2"` on `<Reveal>` but RevealProps only has `wrapperClassName`, not `className`. TypeScript error at line 103.
- **Fix:** Changed `className` to `wrapperClassName` on all Reveal usages in the featured towns map. Also added `delay={index * 60}` to restore staggered animation from original code.
- **Files modified:** web/app/page.tsx
- **Commit:** 945a801 (included in task commit)

## Self-Check: PASSED

Files created/modified:
- FOUND: /Users/sabrinachandini/sabrinas-town/web/app/page.tsx

Commits:
- FOUND: 945a801 (feat(04-01): restructure homepage to tourist-first layout)
- FOUND: this SUMMARY commit (docs)
