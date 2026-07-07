# Accessibility Guide — History Is For Everyone

**Standard:** WCAG 2.2 AA  
**Branch:** All fixes on the `accessibility` branch, merged to `main`.

---

## The three rules you must never break

### 1. The ink-token rule (contrast)

Brand Crimson (`#cc3322`) and Gold (`#C8A24A`) **fail contrast at small sizes** on light backgrounds.  
Use the safe variants instead:

| Where | Use this | Token | Contrast on cream |
|---|---|---|---|
| Crimson text **below 19px** on light bg | `#B53A29` | `text-crimson-ink` | 5.5:1 ✓ |
| Gold text **below 19px** on light bg | `#8A6B24` | `text-gold-ink` | 4.8:1 ✓ |
| Any text on `bg-blue` (`#1a3a72`) | `#a8bcd8` (muted) / `#f2ece0` (body) | — | 5.8:1 / 12:1 ✓ |

Never use opacity-based text colors (e.g. `text-cream/50`) for readable text — the blended result often fails contrast. Use a solid hex instead.

### 2. The keyboard-alternative rule

Every feature reachable by mouse must be reachable by keyboard alone.  
Concrete checklist:
- **Maps:** The interactive map at `/map` is supplemented by "Browse as list" → `/towns`. Never remove that link.
- **Drag-and-drop (Muster):** @dnd-kit's `KeyboardSensor` handles keyboard reordering. Space/Enter activates drag; arrow keys move; Space/Enter drops. Do not remove the `KeyboardSensor` from `useSensors`.
- **Modals and panels:** must close on `Escape`. Trap focus inside while open or return focus to trigger on close.
- **All interactive elements:** must have a `focus-visible` ring. On light backgrounds use `ring-[#1a3a72]`; on dark backgrounds use `ring-white`.

### 3. The announced-changes rule (dynamic UI)

When state changes happen without a page reload, screen readers must be told:

```tsx
// Status that updates gradually (saving, loading):
<span role="status" aria-live="polite" aria-atomic="true">
  {isSaving ? "Saving…" : ""}
</span>

// Errors that need immediate attention:
<p role="alert" aria-live="assertive">
  {errorMessage}
</p>

// Position of a dragged item:
aria-describedby={`stop-pos-${stop.id}`}
// with: <span id={`stop-pos-${stop.id}`} className="sr-only">Stop {n}</span>
```

---

## Alt text standard

| Image type | What to write |
|---|---|
| Logo | `alt=""` on `<img>` — the wrapping `<a>` has the full name in `aria-label` |
| Historic photo | Describe what is shown: person, setting, approximate date — not "old photo" |
| Decorative SVG (squiggles, wavy rules, ghost text) | `aria-hidden="true"` on the `<svg>` |
| Maps and diagrams | Describe the subject and where to find equivalent text content |

---

## Running the automated check locally

```bash
# Start the dev server first
pnpm dev:hife

# Then in another terminal:
npx tsx scripts/a11y-check.ts
```

The script checks 9 core paths for WCAG 2.1/2.2 AA violations using axe-core.  
Exit code 1 means violations were found — the same check runs in CI.

To add to CI (GitHub Actions):

```yaml
- name: Accessibility check
  run: |
    pnpm dev:hife &
    sleep 8
    npx tsx scripts/a11y-check.ts
  env:
    A11Y_BASE_URL: http://localhost:3000
```

---

## Touch targets

All interactive elements must be at least **44×44 px**. Practical patterns:

```tsx
// Button with small icon: wrap in a sized container
<button className="w-[44px] h-[44px] flex items-center justify-center ...">
  <SmallIcon />
</button>

// Link with small text: add min-height
<a className="min-h-[44px] flex items-center px-3 ...">Label</a>
```

---

## Confidence labels (verified / oral tradition / anecdotal / unverified)

These labels must **never rely on color alone**. The text itself carries the meaning.  
If you add color coding (e.g. a green dot for verified), you must also include the text label alongside it.

---

*This file is for future collaborators. If you are making a change to an interactive component, check all four rules above before opening a PR.*
