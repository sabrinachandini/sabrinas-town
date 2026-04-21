# Teacher Worksheet Design Research
# Visual Standards for High-Quality History Printables (TpT-Grade)

**Researched:** 2026-04-21
**Purpose:** Inform redesign of `/towns/[slug]/teacher/print/page.tsx` and associated `globals.css` worksheet styles
**Confidence:** MEDIUM — Web sources for external benchmarks; HIGH for codebase audit (direct read)

---

## 1. What the Codebase Has Today

### Font Stack (from `app/layout.tsx` + `globals.css`)
The site loads three Google Fonts as CSS custom properties:

| Variable | Font | Weights | Use in Site |
|---|---|---|---|
| `--font-instrument` | Instrument Serif | 400 normal + italic | Display headings, pull quotes, serif body |
| `--font-dm` | DM Sans | 300, 400, 500 | Body copy, UI labels, nav |
| `--font-bebas` | Bebas Neue | 400 | Large display / stamp-style headings |

### Brand Colors (from `:root` in `globals.css`)
| Token | Value | Description |
|---|---|---|
| `--navy` | `#0a0e1a` | Deepest dark |
| `--crimson` | `#c8222a` | Brand accent red |
| `--ivory` / `--cream` | `#f2ece0` | Warm off-white background |
| `--charcoal` / `--ink` | `#0e1428` | Near-black text |
| `--paper` | `#f8f0d8` | Warmer parchment-tone |
| `--blue` | `#1a3a72` | Deep colonial blue |
| `--gold` | `#c8222a` | (alias to crimson — consider real gold) |
| `--green` | `#2a5c45` | Deep forest green |
| `--rust` | `#b5431a` | Warm rust-orange |

### Current Worksheet CSS (`globals.css`, lines ~858–1406)
The worksheet layer uses **Georgia serif** for all body text, with **Arial sans-serif** for labels and UI chrome. It is entirely black-and-white (#111 / #999 / #ccc). No brand colors appear anywhere in the `ws-*` namespace.

**Current design decisions:**
- `font-family: Georgia, "Times New Roman", serif` — worksheet body
- `font-family: Arial, sans-serif` — labels, directions, fields
- Solid `#111` borders for structural boxes (student header, source box)
- `background: #111` fills for header bars (white text reversed out)
- Answer lines: `border-bottom: 1px solid #aaa`, height `1.8rem`
- Section headers: `background: #111` chip + `Arial bold uppercase` title, `border-bottom: 1.5px solid #111`
- Teacher note sidebar: `background: #f5f5f5`, `border-left: 3px solid #666`
- Essential question callout: `border-left: 3px solid #111`
- Answer key: `border: 2px dashed #888`, light gray banner `#f0f0f0`
- Max width: `800px` on screen; `max-width: none` in print
- No page margins set in CSS — relies on browser print defaults

---

## 2. TpT Worksheet Design Standards — External Research

### 2.1 Typography Norms [ASSUMED + partially CITED]

**What top TpT sellers use:**

- **Body text:** 11–12pt (approximately 0.85–0.9rem at 16px base). Worksheet body is denser than web reading — tighter than the 1.125rem site baseline. [CITED: aicoursify.com worksheet design guide]
- **Directions / instructions:** Italic, slightly smaller than body (8–9pt equivalent). Visually distinct from question text so students can scan past them. [CITED: aicoursify.com]
- **Section headers:** Sans-serif, uppercase, bold. 7–8pt. Often paired with a graphic element (number chip, rule, or filled background strip). [ASSUMED based on pattern observed in existing ws- CSS]
- **Question text:** Semi-bold or bold weight. 10–11pt. Slightly heavier than body text so it reads as the "active" element.
- **Font pairing standard:** One serif (body / headings) + one sans-serif (chrome / labels). Maximum 2–3 font families. [CITED: Lindsay Bowden TpT guide; aicoursify.com]
- **Popular body serif choices on TpT:** Georgia (legacy), Playfair Display, Libre Baskerville, Palatino [ASSUMED — training knowledge; not verified via registry in this session]
- **This project's brand serif:** Instrument Serif (Google Fonts) — already loaded. Should be used in worksheet layer for brand consistency instead of generic Georgia.

**Font sizes used in current `ws-*` CSS (exact values):**
```
cover title:         2rem   (bold)
handout/quiz title:  1.35rem (bold)
body text:           0.9rem
directions:          0.8rem  (italic, Arial)
section title:       0.85rem (bold uppercase, Arial)
field labels:        0.8rem  (Arial)
source key labels:   0.7rem  (Arial, bold)
brand/stamp labels:  0.65–0.7rem (uppercase, tracked)
```

These are reasonable and match professional practice. The main gap is **Georgia vs. Instrument Serif** — the brand font is loaded but unused in worksheets.

---

### 2.2 Color Usage Patterns [ASSUMED + partially CITED]

**What research surfaced about TpT design:**

**Minimal color is the professional standard.** Top sellers use color in 1–2 accent roles only:
- Filled header bars (section headers, student header top strip)
- Border accents (left-border callouts, source boxes)
- NOT for random highlights or decorative fills throughout body

**Current state:** The existing `ws-*` CSS already follows this discipline — everything is pure black (#111) with white text reversed. This is correct practice but misses the brand palette entirely.

**Recommended approach for this project:**
- Replace hardcoded `#111` fills with `--navy` or `--charcoal` (near identical to `#111`)
- Replace `border-left: 3px solid #666` teacher notes with `--crimson` or `--blue` for brand voice
- Replace `background: #f5f5f5` teacher note bg with a wash of `--ivory` / `--cream`
- Keep answer lines, body text, and body borders in neutral grays — color only in structural chrome

**Color palettes observed in high-quality history worksheets (external benchmark):** [ASSUMED]
- Navy + white text for header bars — authoritative, matches colonial/patriotic themes
- Burgundy/crimson accent for callout borders — warmth without loudness
- Cream/ivory page background instead of stark white — aged-paper feel appropriate for history
- Gold or amber as a third accent for small highlights (e.g., source labels)

This project's brand palette (`--navy`, `--crimson`, `--ivory`, `--paper`) is already well-suited. The worksheet layer just needs to reference these tokens.

---

### 2.3 Layout and Structure Patterns [CITED: aicoursify.com; general best-practice research]

**Page setup:**
- Letter size (8.5" × 11") — standard assumption, browser print handles this
- Margins: 0.5"–0.75" on all sides in print. Current CSS uses `padding: 0` on `.ws-page` in print — margins come from browser defaults, which is fragile.
- Recommended: Add explicit `@page { margin: 0.6in; }` rule in print media query

**Header area (student fields):**
- Standard TpT format: `Name: ___________  Date: ______  Period: ______`
- Current implementation matches this exactly. Unit title + brand name in the top bar is standard.
- One improvement seen on premium worksheets: a small logo or icon mark in the header bar alongside the brand name — adds professionalism.

**Section structure:**
- Break content into named sections with headers (not just question numbers)
- Section headers should be visually distinct — filled background, or thick rule + label
- Keep spacing between questions generous (1.5rem+ below each item)
- Current `ws-block` margin and `ws-question-item` spacing are appropriate

**Answer lines:**
- Standard: dotted or solid rule lines at consistent spacing (~1.8rem between lines)
- Current: solid 1px `#aaa` lines at 1.8rem — correct
- Premium worksheets use slightly lighter rules (`#ccc` or `#ddd`) so ink doesn't compete with student writing
- Number of lines per question: 4 for analysis questions, 3 for short answers — current code matches

**Two-column layouts:**
- Used for: differentiation grids, standards columns, multiple choice options
- Current `ws-diff-grid` (3-col) and `ws-standards-grid` (2-col) are appropriate uses
- Avoid two-column for continuous reading passages — single column reads better when printed

**Source/document analysis boxes:**
- Standard structure: labeled box with document metadata at top, body text below
- HIPPO / SOAPSTONE frameworks popular: context fields, author/speaker, occasion, purpose, audience
- Current `ws-source-box` has: Document, Source, Type, Credibility — this is minimal. Consider adding "Date" and "Author/Creator" fields which are standard in DBQ practice.
- Box header: filled dark bar with white text — matches current implementation and is standard

**Primary source image placement:**
- Centered, max-height constrained, with caption below — current `ws-source-img` does this correctly
- Add a thin border around the image (current `border: 1px solid #ccc` is right)

---

### 2.4 Lauren Cella / Gen Z History Specific Patterns [LOW confidence — direct access blocked]

Direct access to her TpT store and product previews was blocked (403). Based on available information:

- Materials are Google Slides-based (digital-first, print-friendly)
- Structure: video guide → sketch/translate section → research questions → timeline
- "Accessible and fun" aesthetic — likely lighter, more contemporary than traditional academic worksheets
- Editable Google Slide format suggests clean, unfussy layouts
- Typography probably leans contemporary sans-serif for instructions with minimal decoration
- No ornate borders or clip art — clean whitespace-heavy approach

The key insight from her product structure is the **scaffolded sections model**: each activity has a clear sequence (warm-up → core analysis → synthesis/reflection). The current `ws-*` implementation already follows this model.

---

### 2.5 DBQ / Primary Source Analysis Box Standard [CITED: National Archives, College Board DBQ specs]

Standard document analysis worksheet structure per National Archives and AP History practice:

```
┌─────────────────────────────────────────┐
│ DOCUMENT INFORMATION                     │ ← filled header bar
├─────────────────────────────────────────┤
│ Document:    [title]                     │
│ Author:      [name]                      │
│ Date:        [year]                      │
│ Source:      [archive/publication]       │
│ Type:        [letter / speech / map...]  │
├─────────────────────────────────────────┤
│ [image or excerpt block]                 │
└─────────────────────────────────────────┘
Background Context:
[teacher narrative paragraph]

ANALYSIS QUESTIONS
1. [question]
   ___________________________________
   ___________________________________
   ___________________________________
   ___________________________________
```

Current implementation is close but missing "Author" and "Date" metadata fields, which are standard for historical sourcing (HAPP/HAPP+C framework).

---

## 3. Gap Analysis: Current vs. Best Practice

| Element | Current State | Best Practice | Priority |
|---|---|---|---|
| Body font | Georgia (generic) | Instrument Serif (brand font, already loaded) | HIGH |
| Header fills | Hardcoded `#111` | Use `--navy` / `--charcoal` CSS tokens | HIGH |
| Left-border accents | `#666` gray | `--crimson` or `--blue` for brand voice | HIGH |
| Background color | Pure `#fff` | Cream/ivory wash (`--ivory: #f2ece0`) | MEDIUM |
| Print margins | Browser default | Explicit `@page { margin: 0.6in; }` | MEDIUM |
| Source box fields | Doc, Source, Type, Credibility | Add Author + Date | MEDIUM |
| Answer lines | `#aaa` solid | `#ccc` or `#ddd` — lighter so student ink stands out | LOW |
| Teacher note bg | `#f5f5f5` flat | Brand ivory wash | LOW |
| Cover page | Center-aligned, black borders | Could use a crimson or navy accent rule under title | LOW |
| Answer key banner | `#f0f0f0` gray fill | Could be `--crimson` fill with white text for clear teacher-only marking | LOW |

---

## 4. Specific Recommendations for Redesign

### 4.1 Font: Replace Georgia with Instrument Serif

```css
/* FROM: */
.ws-page {
  font-family: Georgia, "Times New Roman", serif;
}

/* TO: */
.ws-page {
  font-family: var(--font-instrument), Georgia, serif;
}
```

This creates continuity between the web experience and the printed worksheet. Instrument Serif has:
- Good print legibility at 9–12pt
- Slightly modern feel vs. stodgy Georgia
- Already loaded via Next.js font optimization — zero extra HTTP cost

### 4.2 Colors: Wire to Brand Tokens

```css
/* Student header / source box / section fills */
.ws-student-header-top,
.ws-source-box-header {
  background: var(--navy);     /* was: #111 */
}

.ws-section-header {
  border-bottom-color: var(--navy);   /* was: #111 */
}
.ws-section-num {
  background: var(--navy);    /* was: #111 */
}

/* Teacher notes — brand accent left border */
.ws-teacher-note {
  background: var(--ivory);   /* was: #f5f5f5 */
  border-left-color: var(--crimson);  /* was: #666 */
}

/* Essential question callouts */
.ws-eq-list li {
  border-left-color: var(--crimson);  /* was: #111 */
}

/* Answer key — make clearly "teacher only" */
.ws-ak-banner {
  background: var(--crimson);
  color: #fff;
  border-color: var(--crimson);
}
```

### 4.3 Print Margins

```css
@media print {
  @page {
    margin: 0.6in;
    size: letter portrait;
  }
  .ws-page { max-width: none; padding: 0; }
  /* rest of existing print rules */
}
```

### 4.4 Answer Lines: Slightly Lighter

```css
/* On screen */
.ws-answer-line {
  border-bottom: 1px solid #ccc;   /* was: #aaa */
}
/* In print */
@media print {
  .ws-answer-line { border-bottom: 0.75pt solid #bbb; }  /* was: #999 */
}
```

### 4.5 Source Box: Add Missing Metadata Fields

In `page.tsx`, extend `ws-source-box-body` to include Author and Date rows when available. This matches DBQ standard practice and the HAPP framework (Historical Context, Audience, Purpose, Point of View).

### 4.6 Page Background: Cream Instead of White

```css
.ws-page {
  background: var(--ivory);   /* #f2ece0 — warm off-white, prints as near-white on most printers */
}
```

On paper printers, `#f2ece0` prints as a very light cream — not noticeably colored but warmer than stark white. This matches the aged-paper aesthetic common in premium history TpT products and aligns with the site's brand.

---

## 5. What NOT to Change

- **Section header typography:** Arial bold uppercase small-caps style is exactly right for print labels
- **Answer line spacing (1.8rem):** Standard and appropriate for middle/high school writing
- **Content structure:** Cover → Lesson Plan → Primary Sources → Handouts → Quiz → Answer Key → Standards is the correct professional order
- **`page-break-inside: avoid` rules:** Critical — keep all of them
- **`-webkit-print-color-adjust: exact`:** Required for any filled elements — keep on all colored fills
- **Two-column differentiation and standards grids:** Correct use of multi-column print layout
- **Multiple choice bubble design:** Correct — circle with letter, 1.25rem diameter

---

## 6. Lauren Cella Design Philosophy vs. This Project

Lauren Cella's Gen Z History aesthetic is contemporary, accessible, casual-fun. This project's brand is different: "History is for everyone" — inclusive but **serious and archival**. The appropriate design register is:

> Authoritative without being stuffy. Professional enough for a veteran teacher. Approachable enough for a new teacher to trust on first use.

The black-and-white-plus-brand-accent approach (navy fills, crimson callouts, cream background) hits this register precisely. Resist the temptation to add clip art, pastel fills, or decorative borders — the current structural clarity is an asset.

---

## 7. Assumptions Log

| # | Claim | Risk if Wrong |
|---|---|---|
| A1 | Georgia → Instrument Serif is a net improvement for print legibility | Instrument Serif may render thinner than Georgia at small sizes — test print before shipping |
| A2 | `#f2ece0` (ivory) prints as near-white on standard printers | On some low-toner printers it may appear slightly yellow — could add a note in UI |
| A3 | Lauren Cella worksheets follow contemporary clean-minimal aesthetic | No direct preview access confirmed this |
| A4 | Adding Author + Date fields to source boxes is universally valued | Some teachers prefer current minimal metadata |
| A5 | `@page { margin: 0.6in }` is better than browser defaults | Some users may have set custom print margins — this would override them |

---

## Sources

- [Lauren Cella TpT Store](https://www.teacherspayteachers.com/store/lauren-cella) — attempted access, 403
- [Gen Z History Curriculum Bundle (laurencella.com)](https://laurencella.com/products/gen-z-history-curriculum-bundle) — format description only, no visual access
- [How to Design Worksheets Students Will Actually Complete (aicoursify.com)](https://www.aicoursify.com/how-to-design-worksheets-students-actually-complete) — typography sizes, spacing, color guidance
- [How to Make TpT Products in Canva (Beth Ann Averill)](https://www.bethannaverill.com/how-to-make-tpt-products-in-canva/) — font sourcing, branding templates
- [Make Worksheets in 6 Easy Steps (Lindsay Bowden)](https://lindsaybowden.com/6-steps-to-make-your-own-teacher-resources/) — required elements, copyright, page format
- [Primary Source DBQ Analysis (Timesaving Teacher Tools)](https://timesavingteachertools.com/lets-talk-primary-source-dbqs/) — analysis box structure
- [AP US History DBQ Sample (College Board)](https://apcentral.collegeboard.org/media/pdf/ap21-apc-world-history-dbq.pdf) — Document A/B labeling conventions
- Codebase direct read: `web/app/globals.css` lines 855–1406, `web/app/layout.tsx`, `web/app/towns/[slug]/teacher/print/page.tsx` — HIGH confidence, source of truth
