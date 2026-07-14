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

---

## IX. Liberty — The Character

### Who Liberty Is

Liberty is a small, round star who has been present for a lot of history and finds it genuinely interesting, though also genuinely exhausting. Liberty is not performing enthusiasm. Liberty is not a mascot in a sports-team sense. Liberty is a quiet, self-possessed creature who shows up, pays attention, and would very much like a nap afterward. Liberty is the honest version of what it feels like to care about something difficult.

Liberty's emotional range is narrow on purpose: **contentment, gentle fatigue, soft wonder, mild bewilderment.** Liberty does not panic. Liberty does not celebrate loudly. Liberty watches the Battle of Lexington and thinks: *yes, that happened, that mattered, I was there, I am tired.* This is the register.

Liberty is not a stand-in for HIFE. Liberty is a witness. The distinction matters.

---

### The Visual Rules (Law)

These are not guidelines. Any illustration that breaks them ships nothing.

**Form**
- Perfectly round or very slightly oval body — no pointed star rays, no spiky silhouette
- Body diameter: small. Liberty does not dominate a composition; Liberty occupies a corner, a margin, a gentle aside
- Soft felt-cut edges on all outlines — think linocut or fabric, not vector-sharp. The outer contour has a slight hand-cut quality; inner details are clean
- Flat brand colors only. No gradients. No drop shadows. No glows. No dimensional shading
- One warm ink outline (`#14100a`, 2–3px equivalent) around the full body and all features. No secondary outlines, no glow strokes

**Face**
- Eyes: gently closed, or a soft half-moon lidded look. Never wide open. Never surprised. Never alarmed. The eye is a simple curved line or a very small closed oval — nothing more
- Mouth: tiny. Contented, not smiling. The resting expression. A small horizontal line that curves just barely upward at the ends, or does not curve at all. No teeth. No open mouth except in the "slightly lost" pose, where it may be a very small open circle of mild confusion
- No eyebrows that read as distressed, angry, or cartoonishly happy
- No blush marks, sweat drops, action lines, or other manga conventions
- No accessories on the face

**Limbs**
- Small, rounded stubs. No detailed hands. No fingers. No feet with toes
- Limbs are optional per pose — some poses have none and Liberty is simply a resting round body. This is fine
- If limbs hold something (a lantern, a book), the object is equally flat and brand-colored

**Color**
- Body: cream (`#f2ece0`) or gold (`#C8A24A`) — these are Liberty's primary body colors. Gold Liberty is the hero version; Cream Liberty is the everyday version
- Cheek suggestion (optional): a very soft circle of rust (`#b5431a`) at 30% opacity — one per cheek, maximum
- Outline: ink-deep (`#14100a`)
- Any held objects: one brand color each, flat

**What Liberty Is Not**
- Not wearing a tricorn hat, colonial coat, or any historical costume
- Not holding a musket, sword, or flag
- Not wide-eyed or excited
- Not angry or sad in a way that needs explaining
- Not 3D, not shaded, not gradient-filled
- Not cute in an aggressive way — Liberty does not beg for affection; Liberty simply exists

---

### The Six Canonical Poses

These are the official set. All six must exist before Liberty appears on any product or digital surface. New poses require ratification.

| Pose | Description | Primary use |
|---|---|---|
| **Resting** | Liberty sitting, limbs folded or absent, eyes closed, radiating profound okayness | Hero illustration, product anchor |
| **Floating** | Liberty drifting slightly upward, one stub-arm out, expression unchanged | Hero variants, tote, sticker |
| **Napping** | Liberty fully horizontal, tiny Z nearby (ink-deep, not a speech bubble), mouth in the resting position | "Liberty had a long day" print, loading state |
| **With Lantern** | Liberty standing, holding a small flat lantern in one stub. The lantern is gold; a tiny cream glow circle around it (soft, not gradient — a flat opacity shape) | The midnight content, "still here" moment |
| **Reading** | Liberty seated, holding a very small book flat in front. Book cover: one color, no title visible | Almanac products, story pages |
| **Slightly Lost** | Liberty mid-rotation, mouth a tiny open circle, one stub pointing in a direction that may not be right | 404 page, empty states |

---

### The Friends System

Liberty may have companions. Every companion is a proposal — Sabrina ratifies the roster before any friend appears on a product, a page, or a digital surface. A friend not ratified does not exist for production purposes.

**Proposal format for any new friend:**
1. Name
2. Form (what kind of creature or object — must be simple enough to draw in the Liberty style)
3. Personality in one sentence
4. Rationale: why does this friend belong in Liberty's world?
5. One rough sketch or description precise enough to execute

**Proposed friends awaiting ratification:**

**Vivo** — A small, weathered compass rose rendered in the Liberty style. Personality: has extremely strong opinions about which direction is north and would like to discuss it. Rationale: the navigation metaphor fits naturally with travel and history; the compass is a period-appropriate object that reads without explanation. *(Vivo: life.)*

**Percy** — A small candle, flat and round-based, with a calm flame. Personality: has been burning since approximately 1775 and is frankly fine with that. Rationale: light in dark places is the right emotional register for stories that have been overlooked; the candle is quieter and more useful than a torch. *(Percy: pursuit of happiness.)*

*Two additional friend candidates are reserved for the first merch review. Submit proposals in the format above.*

**Friends rules:**
- Friends share Liberty's visual language exactly: flat, felt-cut, brand colors, ink outline
- Friends never upstage Liberty — in any composition, Liberty is the emotional anchor
- Friends do not speak in their own voice on products; Liberty's voice is the only voice
- A friend who appears on one product is not automatically cleared for all products

---

### Liberty's Voice (Digital Use)

When Liberty appears in an empty state, a 404, or a loading moment, the copy follows Liberty's register: **quiet, honest, slightly wry, not apologetic.**

| Moment | Copy |
|---|---|
| 404 | "Liberty has been here. This page has not." |
| Empty events list | "Nothing here yet. Liberty is patient." |
| Loading | "Liberty is looking into it." |
| No search results | "Liberty searched. Liberty found nothing. This is not Liberty's fault." |
| Error state | "Something went wrong. Liberty witnessed it." |

Rules for writing new Liberty copy:
- One or two sentences maximum
- Liberty is the subject, not the user
- No exclamation marks
- No apologies ("we're sorry," "oops") — Liberty does not apologize for circumstances beyond Liberty's control
- No instructions ("please try again") unless absolutely necessary, and never with "please"

---

## X. The Merch Voice

### The Register

The merch voice is **deadpan warmth.** It knows things. It is not showing off that it knows things. It is fond of the subject without being precious about it. It does not work hard to be funny. It trusts the reader to notice.

The test: read the copy out loud in the voice of someone who has read every primary source about the Revolution and finds the whole thing genuinely interesting and also kind of a lot. That is the voice.

---

### What It Sounds Like

**Good:**
- "Liberty. A star who has seen some things and would still like a nap."
- "75 towns. One revolution. Comfortable shoes recommended."
- "The Muster Book. For notes on where you've been and where you're going, in that order."
- "History is for everyone. Pack accordingly."
- "Birthplace of American Liberty. First shot fired here. Excellent parking on Meriam Street."

**Not good:**
- "Raise a glass to the rebels!" — we are not a tavern
- "1776 and ready to party" — banned, full stop
- "Make history!" — marketing speak; means nothing
- "For the history buff in your life" — gift-shop voice; we are not a gift shop
- "You won't find this in your textbook!" — we work alongside textbooks, not against them
- Exclamation marks used for enthusiasm — never; use them only for actual imperatives

---

### Banned Phrases and Tropes

No exceptions. If a copywriter submits any of the following, it goes back:

- "1776" as a celebration rather than a year
- "Founding Fathers" as a reverential term (use names; they were people)
- "Don't tread on me" in any form
- "Liberty" as a brand word (it belongs to the towns, not the product)
- "Rebel," "revolutionary," or "patriot" as a compliment to the buyer
- Distressed typography meant to look old
- Any phrase that would also work on a product at a highway rest stop

---

### The Packaging Voice

Hang tags, packaging inserts, and backs of prints follow the same register. One or two sentences. The product earns the space; the copy doesn't justify it.

Back-of-print example:
> *The Muster Book. A pocket notebook for road-tripping through American history. Blank inside. You bring the story.*

Hang tag example (tee):
> *History is for everyone. This tee is for you.*

---

## XI. The Merch System

### The Test

Every product must pass both of these before it enters the line:

1. **The stranger test:** Would someone who has never heard of HIFE pick this up at a well-curated independent shop? If yes, it belongs. If it only makes sense to someone already in the community, it does not.

2. **The embarrassment test:** Would anyone feel embarrassed giving this as a gift to someone they respect? If yes, it does not belong.

Price point, production method, and margin are secondary to these two tests. A product that fails either test does not get a price.

---

### The Four Lines

**The Trio Line** — The mark doing the work. Clean, confident, built to last.
- Heavyweight tee: the HIFE wordmark or the "75 Towns · 1 Revolution" lockup, one color on cream or navy ground
- Heavyweight tote: same lockup, screen-printed, natural canvas
- Enamel pin: the wordmark or a single brand element, hard enamel, gold metal
- Sticker: the tagline lockup, die-cut, weatherproof

*These are the evergreen products. They do not have a season. They are the foundation of any retail relationship.*

**The Liberty Line** — The character line. Liberty leads; everything else follows.
- Sticker sheet: all six canonical poses, one per sticker, brand colors, die-cut
- Enamel pin: Resting Liberty, gold body, ink outline, soft enamel
- Tee: Floating Liberty, centered or chest-pocket scale, one color on cream
- "Liberty had a long day" print: Napping Liberty, 5×7 or 8×10, letterpress-style flat, the phrase set in Instrument Serif beneath

*The Liberty line scales with the friends roster. No friend ships on a product until ratified.*

**The Almanac Line** — For the person who takes notes and thinks about things.
- The Muster Book: Field Notes format (3.5×5.5"), 48 pages blank, cover printed with the grid and "The Muster Book" in Bebas Neue, subtitle "Trip Notes · American Revolution" in DM Sans
- "★ 75 Towns · 1 Revolution ★" print: 11×17 or 12×16, letterpress-style, navy ground, cream type, the full set of stars for all 75 towns arranged as a grid — each one labeled with the town name at 6pt

**The Lexington Capsule** — For the flagship partner and the Buckman Tavern retail tie-in.
- "Birthplace of American Liberty" tee: the Visit Lexington lockup, rust accent on cream, screen-print
- "Birthplace of American Liberty" print: same lockup, 8×10, suitable for framing, letterpress-style flat treatment

*The Lexington capsule is the template for future town capsules. Concord gets one when the site launches. Every partner town with a retail relationship eventually gets one.*

---

### What Is Banned

No exceptions:

- Distressed flag graphics in any form
- Musket shapes, cannon shapes, or any weapon silhouette
- "1776 and ready to party" or any drinking-culture reference
- Anything that reads as political in the present tense (the Revolution is historical; we do not take sides in current events)
- Souvenir-shop aesthetics: fake parchment, faux aged ink, Liberty Bell clipart
- Products that require explanation to make sense ("a HIFE person would get it" is not enough)

---

### Production: The Question

**Print-on-demand (POD)** means no inventory, no upfront cost, and per-unit margins around 25–35%. The trade-off: quality control is harder, shipping times vary, and the product feels like a POD product if you're not careful. Suitable for: prints, stickers, and tees where brand is strong enough to carry the presentation.

**Local printer + inventory** means upfront cost (typically $500–2,000 per SKU for a minimum run), higher per-unit margins (50–65%), and full quality control. The trade-off: you own the inventory; unsold stock is a real cost. Suitable for: enamel pins (must be manufactured, minimum runs of 50–100), the Muster Book (custom notebooks require print runs), and anything going into retail (Buckman Tavern will not take consignment from a POD vendor).

**The honest recommendation:** Start with POD for tees, stickers, and prints to validate demand. Use a local printer for enamel pins and the Muster Book from day one — these cannot be done well at POD quality. The Lexington capsule for Buckman should be locally printed regardless.

---

### The Buckman Tavern Angle

Buckman Tavern is a natural first retail partner: it is a historic site with foot traffic, it is in Lexington, and it sells goods related to the history HIFE documents. The pitch is consignment: HIFE supplies product at wholesale (typically 50% of retail), the tavern keeps the margin on sales, and unsold product returns.

The Lexington capsule is designed for this relationship. The Trio line is a secondary fit. The Liberty line is a harder sell in a historic site retail context — Liberty is an abstraction; tee and sticker buyers at a historic site usually want place-based product.

*The Buckman conversation happens after the capsule exists. Do not approach without product in hand.*

---

### The Three Products to Bet On First

In order of confidence:

1. **Liberty sticker sheet** — low production cost, high perceived value, shareable, tests the character before committing to larger inventory
2. **The Muster Book** — the strongest demonstration of the Field Notes standard; people who go on history road trips take notes; this is the product that converts a visitor into a repeat customer
3. **Trio heavyweight tote** — the tote is the most versatile retail object; it goes everywhere; it is the product that makes HIFE visible in the world without requiring explanation

---

*Chapters IX–XI added July 2026. Liberty established as the HIFE witness character. Friends roster pending Sabrina's ratification. Merch system requires no production decisions until the lookbook review.*
