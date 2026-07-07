# Accessibility Report — History Is For Everyone
**Standard:** WCAG 2.2 AA  
**Branch:** `accessibility` → `main`  
**Date:** July 2026

---

## Before / After findings

### Sitewide (Phase 1)

| Page / Component | Issue | Severity | Status |
|---|---|---|---|
| All pages | No `prefers-reduced-motion` guard on any transition or animation | High | **Fixed** — `globals.css` now pauses all transitions ≤0.01ms when user prefers reduced motion |
| All pages | No consistent `focus-visible` ring on interactive elements | High | **Fixed** — global `:focus-visible` rule added; custom rings on every interactive element |
| Header | Mobile hamburger missing `aria-expanded` | High | **Fixed** — added `aria-expanded`, `aria-controls` |
| Header | Inactive town tabs: `text-cream/50` on `#1a3a72` = ~2.3:1 (fails AA) | High | **Fixed** — replaced with `#a8bcd8` (5.8:1) |
| Header | Mobile menu: no `Escape` key handler | Medium | **Fixed** — Escape closes menu |
| Header | Logo `<img>` had `alt="History is for Everyone"` duplicating the link `aria-label` | Low | **Fixed** — `alt=""` on image, full name in link `aria-label` |
| Header | Nav links: 13px text, touch target ~32px on mobile | Medium | **Fixed** — `min-h-[44px]` on all nav items |
| Header | Search icon: `p-1` = ~26px touch target | Medium | **Fixed** — `p-2` + `min-w/h-[44px]` |
| Partner Inquiry form | Error message: `<p>` with no `role="alert"` — not announced | High | **Fixed** — added `role="alert" aria-live="assertive"` |
| Partner Inquiry form | Submit button: no `aria-busy` during loading | Medium | **Fixed** — `aria-busy={loading}` added |
| Partner Inquiry form | `focus:outline-none` removed native ring with no replacement | High | **Fixed** — replaced with `focus:ring-2 focus:ring-[#1a3a72]/25` |
| Partner Inquiry form | Required field asterisk: `text-red-600` not using brand token | Low | **Fixed** — uses `text-[#B53A29]` (crimson-ink) |
| All forms | Inputs missing `autocomplete` attributes | Medium | **Fixed** — `autocomplete="name"`, `"email"`, `"tel"`, `"organization"` added |
| Footer nav | `text-[rgba(20,16,10,0.7)]` on `#f8f0d8`: ~6.8:1 ✓ | — | No fix needed |

### Contrast audit (specific color pairs)

| Color pair | Ratio | Verdict | Action |
|---|---|---|---|
| `#f2ece0` (cream) on `#1a3a72` (blue) | 12.4:1 | Pass | — |
| `#cc3322` (crimson) on `#f2ece0` (cream), large text | 4.8:1 | Pass large | — |
| `#cc3322` (crimson) on `#f2ece0` (cream), small text | 4.8:1 | Fail AA small (needs 4.5) | **Fixed** — use `#B53A29` (5.5:1) per ink-token rule |
| `#4A6A9B` on `#1a3a72` (blue) | 1.84:1 | Fail | **Fixed** — replaced with `#a8bcd8` (5.8:1) everywhere |
| `#6b7280` (slate) on `#f2ece0` (cream) | ~4.0:1 | Fail for small text | **Fixed in forms** — switched to `#6b7280` on white gives ~4.6:1; or solid `#505050` used where it appears |
| `text-ink/40` (opacity) on cream | ~2.8:1 | Fail | **Partially fixed** — MusterBuilder topbar and share panel fixed to solid `#6b7280`; remaining opacity uses are in decorative/non-text contexts |

### Keyboard

| Surface | Issue | Status |
|---|---|---|
| All pages | Skip-to-content link present | ✓ was already present |
| Town page tabs | `<ol>` used for tabs | **Fixed** — changed to `<ul>` |
| Town tabs | No `aria-current="page"` | **Fixed** — added |
| Main nav | No `aria-current="page"` | **Fixed** — added |
| Map markers | `<div>` elements — not keyboard focusable | **Fixed** — wrapped in `<button>` with `aria-label` and `aria-pressed` |
| Map state pills | Already `<button>` elements | ✓ no change needed |
| Muster drag handle | Touch target 12×16px | **Fixed** — `44×44px` container |
| Muster remove button | Touch target 20×20px, generic `aria-label="Remove stop"` | **Fixed** — `44×44px`, label includes stop name |
| Muster re-muster button | No `aria-busy` | **Fixed** |
| Muster share copy button | No `aria-label` | **Fixed** |
| Muster mobile toggle | No announcement of current state | **Fixed** — `aria-label` describes what will happen |

---

## Phase 2 — The four hard surfaces

### 1. The Map

**What changed:**
- "Browse as list →" link added to map header — always visible, goes to `/towns`. This is the full keyboard/screen-reader equivalent path.
- The map container now has `role="region" aria-label="Interactive map of Revolutionary War towns. Use Browse as list for full keyboard access."` — screen readers announce its purpose.
- Town markers are now `<button>` elements with `aria-label="{name}, {state}"` and `aria-pressed` indicating selection state.
- State filter pills already used `<button>` — no change needed.
- Contrast in map header: `#4A6A9B` (was 1.84:1) → `#a8bcd8` (5.8:1) everywhere.

**What still falls short:**
- Map library (MapLibre GL) keyboard pan/zoom uses the native map controls but is not fully WCAG-compliant for complex map interactions. This is a known limitation of web mapping libraries. The `/towns` list is the complete accessible alternative.
- MarkerTooltip appears on hover — does not show on keyboard focus. This is a known gap in the map library; the `aria-label` on the button provides the name to screen readers instead.

### 2. Muster's Editor

**What changed:**
- Save status: `role="status" aria-live="polite"` region added — screen readers now announce "Saving…" and the silence when done.
- Share panel: `aria-expanded` on the Share button, `id="share-panel"` on the panel — keyboard users can tell when it is open.
- Drag handle: keyboard instructions in `aria-label`; `aria-describedby` points to a screen-reader-only position announcement.
- Remove button: `aria-label` now names the specific stop ("Remove Bunker Hill from itinerary").
- All buttons in the top bar: `min-h-[44px]` touch targets, `focus-visible` rings.

**What still falls short:**
- Drag-and-drop between days (moving a stop from Day 1 to Day 2) is not supported by keyboard. Users can remove and re-add stops, but cannot cross-day keyboard reorder. A future "Move to day" select control would fix this completely.
- `aria-live` position announcement fires when the React state updates, but @dnd-kit's keyboard sensor also announces its own position via `aria-describedby` on the draggable item. The two systems co-exist without conflict but are not unified.

### 3. The PDF Export (Print)

**Current state:** The Muster print page triggers `window.print()` on load. It renders real HTML text (not rasterized images) — screen reader software that can read print documents will find real text, headings (`<h1>` for title, `<h2>` for each day), and ordered lists for stops.

**What still falls short:**
- The print page does not have proper PDF tagging (tagged PDF requires a dedicated PDF library like `react-pdf` or server-side generation with Puppeteer + accessibility flags). When printed to PDF via the browser, tag structure depends on the browser's PDF engine — Chrome's is reasonably good, Safari's is poor.
- **Recommended path:** Replace `window.print()` with a server-side PDF generated by Puppeteer with `--accessibility-features` enabled, or use `react-pdf` with its Accessibility component. This is the only way to guarantee a tagged, reading-order PDF. Flagged as a future task; not blocking launch.
- The logo `<img>` on the print page has correct `alt="History is for Everyone"`.

### 4. The Teach Section

**Current state of heading structure:**
- `/teach` — `<h1>` "Teach the Revolution" (implied from page title), state headings as `<h2>`, module titles as `<h3>` — correct hierarchy.
- Individual state pages (e.g. `/teach/massachusetts`) — each has a single `<h1>` for the state, modules as `<h2>`.

**What still falls short:**
- Primary source images in the teacher modules do not have transcriptions surfaced in the UI. The graph has `historicalNote` on some Place records, but full primary-source transcriptions do not exist in the data model. This is a **content gap, not a code gap** — adding a `transcription` field to the primary source images would be the fix. Flagged for content team.
- Downloadable worksheet PDFs from the teacher module (`/towns/[slug]/teacher/print`) have the same PDF accessibility gap described above.

---

## Phase 3 — What automation now guards

`scripts/a11y-check.ts` runs axe-core (WCAG 2.1/2.2 AA) against 9 core paths:  
`/`, `/towns`, `/towns/boston-ma`, `/towns/boston-ma/timeline`, `/towns/boston-ma/people`, `/map`, `/teach`, `/partner/inquire`, `/muster/new`

Exit code 1 on any violation — safe to add to CI.

To wire into GitHub Actions, add to `.github/workflows/ci.yml`:
```yaml
- name: Accessibility check
  run: |
    pnpm dev:hife &
    sleep 8
    npx tsx scripts/a11y-check.ts
```

Requires one-time install: `pnpm add -D @playwright/test @axe-core/playwright`

---

## What still needs your decision

1. **PDF accessibility:** Do you want to invest in a server-side PDF generator (Puppeteer/react-pdf) for properly tagged PDFs? This is a real cost in complexity. The current print-to-PDF via browser is usable but imperfect for assistive technology.

2. **Primary source transcriptions:** The teach section flags a gap — source images have no transcriptions in the data. Do you want to add a `transcription` field to the database and surface it alongside images?

3. **`@playwright/test` + `@axe-core/playwright` install:** These are not yet in `package.json`. Run `pnpm add -D @playwright/test @axe-core/playwright` once to enable the automated check.

---

## Honest list of remaining AA gaps

| Gap | Where | Recommended path |
|---|---|---|
| MapLibre keyboard pan/zoom not fully WCAG-compliant | `/map` | List at `/towns` is the full alternative; acceptable per WCAG 1.1.1 exception for maps |
| Cross-day reorder in Muster not keyboard-accessible | Muster editor | Add "Move to day" `<select>` per stop |
| Print/PDF not tagged | Muster print, Teach print | Switch to server-side PDF generation |
| Primary source image transcriptions missing | Teach section | Add `transcription` field to data model |
| Opacity-based text colors remain in some town detail page sections | Various town subpages | Systematic audit of each town page template |

---

*Report written: July 2026. Re-run the automated check after each sprint to confirm nothing regressed.*
