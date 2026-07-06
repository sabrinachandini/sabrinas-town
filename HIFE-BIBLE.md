# HIFE Design Bible

> **Amendment rule:** Change this document first. Then change the code. Any code that contradicts the Bible is a bug, not a variant.

---

## I. Character

This site exists at the intersection of a well-made 18th-century broadside and a contemporary editorial magazine. It is not a tourism portal. It is not an academic database. It is a conviction in typographic form.

**The sentence:** *History is for everyone — all of it, not the sanitized version, not the statues, but the actual people who actually showed up.*

Every layout decision should pass this test: does it feel like something a thoughtful person would have printed with care, or does it feel like a website trying to look historical?

---

## II. Brand Colors

### Primary Palette

| Name | Hex | Token | Use |
|---|---|---|---|
| **Crimson** | `#cc3322` | `--crimson`, `bg-crimson`, `text-crimson` | One accent per section. CTAs, active states, one editorial emphasis per layout. See §II-A. |
| **Blue** | `#1a3a72` | `--blue`, `bg-blue`, `text-blue` | Authority. Navigation, headers, primary content backgrounds. |
| **Cream** | `#f2ece0` | `--cream`, `bg-cream`, `text-cream` | The reading surface. Default page background and light-on-dark text. |
| **Ink** | `#0e1428` | `--ink`, `bg-ink`, `text-ink` | Body text, heavy borders, dividers. |
| **Ink-Deep** | `#14100a` | `--ink-deep` | Section-separating borders (4px). Heavier than Ink. |
| **Gold** | `#C8A24A` | `--gold`, `bg-gold`, `text-gold` | Hover accent, stat labels, secondary emphasis on dark backgrounds. Never use where crimson already appears in the same element. |

### Safe Small-Text Variants
These are darker versions of the brand accents that meet WCAG AA (4.5:1) contrast at sizes below 19px on light backgrounds.

| Name | Hex | Token | When to use |
|---|---|---|---|
| **Crimson Ink** | `#B53A29` | `--crimson-ink`, `text-crimson-ink` | Crimson text below 19px on cream/paper/ivory backgrounds |
| **Gold Ink** | `#8A6B24` | `--gold-ink`, `text-gold-ink` | Gold text below 19px on cream/paper/ivory backgrounds |

### Extended Palette (Town Accent System)

| Name | Hex | Token | Use |
|---|---|---|---|
| Yellow | `#e8b84b` | `--yellow` | Timeline year numerals on crimson column |
| Green | `#2a5c45` | `--green` | Town accent: Yorktown, Williamsburg, Saratoga |
| Rust | `#b5431a` | `--rust` | Town accent: Lexington, Salem, Morristown |
| Paper | `#f8f0d8` | `--paper` | Footer and secondary background — slightly warmer than cream |
| Sky | `#3a7dbf` | `--sky` | Map UI elements |
| Navy | `#0a0e1a` | `--navy` | Deepest dark — use for card hover states |
| Slate | `#6b7280` | `--slate` | Supporting metadata text on light backgrounds |
| Fog | `rgba(255,255,255,0.80)` | `--fog` | White text on dark where full white is too loud |
| Blue-Mid | `#4A6A9B` | — | Unregistered — use for secondary CTA section backgrounds only. Pending token registration. |

---

## II-A. The Crimson Rule

**Crimson appears in ≤10% of any layout by area.** Measure it.

Crimson earns its place in exactly these roles:
1. The primary CTA button ("Plan a Visit", "Explore the Towns")
2. The active nav indicator (border-bottom on the current tab)
3. One editorial emphasis per page — the italic *is* in the H1, a key quote word, the "Forgotten" card category
4. Error states and required-field indicators

Crimson is **not** for:
- Eyebrow pills or metadata labels (use Ink-Deep or Blue)
- Decorative squiggles and wavy rules (use low-opacity Ink-Deep)
- Section borders between content blocks (use Ink-Deep)
- Hover states on elements that already use crimson (use Gold or White instead)
- State counts in the town directory (use Blue)
- WavyRule underlines beneath every state heading (see town index)

If you find yourself reaching for crimson on a third or fourth element on the same page, stop. Ask: which one of these actually matters? Give that one crimson. Give the others ink or gold.

---

## III. Typography

Three typefaces. Each has exactly one job.

### Bebas Neue — `font-condensed`, `font-display`
The broadside voice. Used for: page heroes, section numbers (01/02/03), large declarative statements, ghost watermarks. Never used for body copy, captions, or labels.

### Instrument Serif — `font-editorial`, `font-heading`
The editorial voice. Used for: H1 through H3, pull quotes, the italic "is" in the brand name, blockquotes, story titles. The italic style (`font-style: italic`) is available and encouraged for emphasis. Never used for UI labels or navigation.

### DM Sans — `font-ui`, `font-body`, `font-sans`
The practical voice. Used for: navigation, labels, metadata, body text in UI components, kickers in all-caps tracking. Available in weights 300, 400, 500.

### Type Scale

| Level | Size | Weight | Font | Use |
|---|---|---|---|---|
| Hero | `clamp(48px, 6vw, 88px)` | Black | Instrument Serif | Page H1 |
| Display | `clamp(40px, 11vw, 136px)` | — | Bebas Neue | Section hero text |
| H2 | `clamp(36px, 4vw, 64px)` | Black | Instrument Serif | Section headings |
| H3 | `20–24px` | Black | Instrument Serif | Card titles, subsections |
| Body | `18–20px` | Light (300) | Instrument Serif italic | Pull quotes, intro paragraphs |
| Prose | `16–18px` | Regular (400) | DM Sans | Long-form body copy |
| UI label | `10–13px` | Medium (500) | DM Sans | Nav, kickers, caps labels |
| Small | `9–11px` | Semibold (600) | DM Sans | Metadata, timestamps |

### Contrast at Small Sizes
Labels below 19px must use `text-crimson-ink` (`#B53A29`) instead of `text-crimson`, and `text-gold-ink` (`#8A6B24`) instead of `text-gold`, to maintain 4.5:1 contrast ratio on cream/paper backgrounds.

---

## IV. Layout

### Max Widths
- **Narrow content:** `820px` — long-form prose, single-column editorial
- **Wide content:** `1200px` — page layout, card grids, navigation

### Spacing Scale

| Token | Value | Use |
|---|---|---|
| `--space-section` | `6rem` (96px) | Between major page sections |
| `--space-component` | `3rem` (48px) | Between components within a section |
| `--space-element` | `1.5rem` (24px) | Between elements within a component |
| `--space-tight` | `0.75rem` (12px) | Between tightly related elements |

### Section Separators
Use `border-[4px] border-[#14100a]` (4px ink-deep border) between all major page sections. This is the primary structural grid.

### Border Radius
`--radius: 0.625rem` — available but used sparingly. The design is rectilinear by nature; sharp corners are the default.

---

## V. Interaction

### Hover States
- On navy/blue backgrounds: hover → `text-gold` (amber)
- On cream/paper backgrounds: hover → `text-crimson`
- On crimson backgrounds: hover → `text-white`, no additional crimson
- Cards: ink-deep background on hover with cream text
- Links: `border-b-2` underline that appears or transitions on hover

### Focus States (keyboard navigation)
All interactive elements require a visible `focus-visible` ring:
- On dark backgrounds: `focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[bg-color]`
- On light backgrounds: `focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2`

### Micro-animation
Three patterns, used sparingly:
1. **Offset shadow lift:** Translate `-2px -2px` with shadow growth on hover (CTAs only)
2. **Underline slide:** `border-b` width animates from `0` to `100%` on card hover
3. **Text color transition:** `transition-colors duration-150` — no longer delays

---

## VI. Component Conventions

### Eyebrow Pill
The small label that sits above an H1 to name the section. Color: **Ink-Deep** background with **Cream** text. Do not use Crimson — the H1 beneath it needs to own any crimson moment.

```jsx
<span className="inline-block font-ui text-[11px] font-semibold tracking-[0.3em] uppercase text-cream bg-ink-deep px-3 py-[5px] mb-6 -rotate-1 w-fit">
  75 Towns · 1 Revolution
</span>
```

### Squiggles / Wavy Rules
Decorative — not accent moments. Color: `rgba(20,16,10,0.18)` on light backgrounds, `rgba(255,255,255,0.25)` on dark. Never crimson.

### Kicker Lines
The small all-caps label above a section heading. Color: `text-crimson` is allowed here (one crimson per section). Use `text-crimson-ink` at sizes below 19px.

### Stat Cells
Number in Instrument Serif or Bebas Neue (white on dark). Label in DM Sans caps using `text-gold` (now correctly amber).

### WavyRule (town directory)
The decorative line under each state heading. Use `rgba(20,16,10,0.18)` — not crimson. Appears too frequently in the directory for crimson to register as meaningful.

---

## VII. Accessibility

- **Minimum contrast:** 4.5:1 for text ≤18pt regular or ≤14pt bold; 3:1 for larger text and UI components
- **Touch targets:** Minimum 44×44px for all interactive elements
- **Focus:** All interactive elements must have a visible `focus-visible` state (see §V)
- **Images:** Decorative elements use `aria-hidden="true"`. Content images require meaningful alt text.
- **Reduced motion:** Animations should respect `prefers-reduced-motion` for transitions longer than 100ms

---

## VIII. What This Site Is Not

- Not a museum gift shop (no sepia filters, no parchment textures, no faux-aged effects)
- Not a government site (no sans-serif bureaucracy, no utility-first layouts)
- Not a lifestyle brand (no gradients, no glassmorphism, no hero video backgrounds)
- Not a social media feed (no infinite scroll, no engagement bait, no trending topics)

If a design choice would look at home on any of those sites, it probably doesn't belong here.

---

*Last revised: July 2026. Triggered by design audit finding gold token mapped to crimson, ink tokens absent, and no written design constitution to enforce either rule.*
