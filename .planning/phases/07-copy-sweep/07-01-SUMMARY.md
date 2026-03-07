---
phase: 07-copy-sweep
plan: "01"
subsystem: frontend-copy
tags: [copy, partner, homepage, about, language]
dependency_graph:
  requires: []
  provides: [open-language-copy, no-embed-section]
  affects: [web/app/partner/page.tsx, web/app/about/page.tsx, web/app/page.tsx]
tech_stack:
  added: []
  patterns: []
key_files:
  modified:
    - web/app/partner/page.tsx
    - web/app/about/page.tsx
    - web/app/page.tsx
decisions:
  - "Replace 'free' pricing language with 'open' access philosophy throughout partner and homepage"
  - "Delete embed widget iframe section from partner page entirely — content integration replaces it"
  - "FreeFeature component renamed to OpenFeature to match new section framing"
metrics:
  duration: "10m"
  completed: "2026-03-07"
  tasks_completed: 2
  files_modified: 3
---

# Phase 07 Plan 01: Copy Sweep — Free/Embed to Open/Stewardship Summary

Swept all "free" pricing language and widget/embed references from partner, about, and homepage pages. Replaced with stewardship-grounded "open" language and deleted the embed iframe section from the partner page.

## What Was Changed

### web/app/partner/page.tsx — 8 changes

1. **Opening paragraph**: Replaced "free and always will be" and "embeddable tools" with "open to everyone and always will be" and stewardship-framing copy.

2. **Comment**: `{/* What stays free */}` → `{/* What stays open */}`

3. **Section heading**: `What stays free, always` → `Open to everyone, always`

4. **Component rename (4 call sites)**: All four `<FreeFeature>` JSX call sites renamed to `<OpenFeature>`. Content of each list item unchanged.

5. **FeatureCard**: `title="Embeddable Widgets"` replaced with `title="Content Integration"` and updated description referencing partner API instead of iframe embed code.

6. **Pricing tier label**: `<span>Free</span>` → `<span>Open</span>` in the Basic tier pricing card.

7. **Embed Widget section deleted**: Removed the `<Divider spacing="section" />` preceding the embed section, and the entire `<section>` block (`{/* Embed Widget */}` through closing `</section>`). The CTA `<Divider spacing="section" />` and `{/* CTA */}` section were preserved.

8. **Function definition rename**: `function FreeFeature(` → `function OpenFeature(`. Implementation body unchanged.

### web/app/about/page.tsx — 1 change

- **Towns/organizations paragraph**: Replaced `analytics, custom editorial collaboration, and embeddable content for local tourism sites.` with `analytics, custom editorial collaboration, and a deeper organizational voice in how their town's story is told.`

Full paragraph now reads: "Every town in the network has a researched public profile at no cost — events, people, places, stories, and sources. Communities that want a deeper presence can join the partnership program, which adds analytics, custom editorial collaboration, and a deeper organizational voice in how their town's story is told. The core history remains open regardless."

### web/app/page.tsx — 2 changes

- **Stat card**: `{ stat: "Free — Always", detail: "No paywalls. History is for everyone." }` → `{ stat: "Open — Always", detail: "No paywalls. No login required." }`

- **Teacher strip paragraph**: `Sixteen states covered. Free, always. No login required.` → `Sixteen states covered. No login required.`

## Verification Command Outputs

```
# 1. No "free" in partner/about (case-insensitive)
PASS: no 'free' in partner/about

# 2. No widget/embed in partner/about
PASS: no widget/embed in partner/about

# 3. Homepage stat card updated
184:              { stat: "Open — Always",        detail: "No paywalls. No login required." },
PASS: homepage stat updated

# 4. OpenFeature count = 5
PASS: OpenFeature has 5 occurrences (1 def + 4 calls)

# 5. Teacher strip updated
PASS: teacher strip updated (Free, always not present)

# 6. next build
✓ Compiled successfully in 62s
✓ Completed runAfterProductionCompile in 1628ms
✓ Generating static pages using 9 workers (17/17) in 2.9s
Build exits 0. No TypeScript errors. No JSX parse errors.
```

## Deviations from Plan

None — plan executed exactly as written. All 8 partner page changes, 1 about page change, and 2 homepage changes applied in the order specified. Build passed on the first attempt with no JSX or TypeScript errors from the embed section deletion.

## Commits

- `096fc25` — feat(07-01): replace free/embed language with open/stewardship copy

## Self-Check: PASSED

Files confirmed present:
- web/app/partner/page.tsx — modified, contains "Open to everyone, always" and "OpenFeature"
- web/app/about/page.tsx — modified, contains "deeper organizational voice"
- web/app/page.tsx — modified, contains "Open — Always"

Commit 096fc25 confirmed in git log.
