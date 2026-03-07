# Phase 7: Copy Sweep - Research

**Researched:** 2026-03-07
**Domain:** Static TSX copy editing — Next.js App Router pages
**Confidence:** HIGH

## Summary

Phase 7 is a pure copy-editing pass over a small set of static Next.js page components. No API changes, no schema changes, no new dependencies. The work is: find every instance of "free" language and every widget/embed reference on the partner and about pages, rewrite those strings inline, and delete or replace a full section (the embed iframe block on the partner page).

The research involved a full grep of all `*.tsx` files under `web/app/` for "free", "widget", and "embed". The results are definitive — every affected line has been located and catalogued below. The success criteria (grep returns 0 on partner/about pages) are mechanically verifiable.

The only judgment call is: what language replaces "free"? Given the project voice ("calm, analytical, modern, no hype, no exclamation marks") the right framing is "open" or "public" — access language grounded in stewardship, not price. The homepage uses "No paywalls" in one place; that line is also in scope.

**Primary recommendation:** Edit three files (`web/app/partner/page.tsx`, `web/app/about/page.tsx`, `web/app/page.tsx`) with targeted string replacements and one section deletion. The terms page embed references are legal boilerplate and are out of scope. The org dashboard "Free" price label is an internal UI element and is out of scope.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| COPY-01 | No "free" language or widget/embed mentions on partner/about pages; copy reframed | All affected lines identified below with exact file:line references; replacement language recommended |
</phase_requirements>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| None — no new libraries needed | — | This is pure TSX string editing | No new dependencies introduced |

### Supporting
No new installs. All edits are to existing `.tsx` static page components.

**Installation:**
```bash
# Nothing to install
```

## Affected Files — Complete Inventory

This is the definitive list of every line that must change, grouped by file. Derived from live grep of the codebase.

### File 1: `web/app/partner/page.tsx`

#### "free" occurrences to remove or reframe

| Line | Current text | Action |
|------|-------------|--------|
| 24 | `"profile is free and always will be. Partnership is for the towns that want to go further: to shape how their story is told, to reach teachers and travelers through embeddable tools..."` | Rewrite paragraph — remove "free", remove "embeddable tools" |
| 35 | `{/* What stays free */}` | Update comment |
| 37 | `<Heading level={2}>What stays free, always</Heading>` | Rewrite heading |
| 43-46 | Four `<FreeFeature>` JSX calls | Rename component usage; content can stay, heading changes |
| 100 | `<span className="text-h2 font-heading font-bold">Free</span>` | Replace with "Open" or "Included" |
| 246 | `function FreeFeature(...)` | Rename to `BaseFeature` or `OpenFeature` |

#### Embed/widget occurrences to remove

| Line | Current text | Action |
|------|-------------|--------|
| 26 | `"...to reach teachers and travelers through embeddable tools..."` | Remove "embeddable tools" from sentence |
| 62-63 | `FeatureCard title="Embeddable Widgets"` with description | Remove this FeatureCard entirely, or replace with a different benefit |
| 198-223 | Entire section: `{/* Embed Widget */}` block with `<Heading>`, `<Text>`, `<pre>` iframe snippet, and `<Text>` slug explanation | Delete entire section |

#### Proposed rewrites

**Opening paragraph (line 21-31) — current:**
> "Every town in this network already has a public profile — scored, sourced, and connected to the broader story of the Revolution. That profile is free and always will be. Partnership is for the towns that want to go further: to shape how their story is told, to reach teachers and travelers through embeddable tools, and to understand who is engaging with their history."

**Replacement:**
> "Every town in this network already has a public profile — scored, sourced, and connected to the broader story of the Revolution. That profile is open to everyone and always will be. Partnership is for towns that want to go further: to shape how their story is told, to reach teachers and travelers, and to understand who is engaging with their history."

**What-stays-open section (lines 35-48) — current heading:**
> "What stays free, always"

**Replacement heading:**
> "Open to everyone, always"

**Basic tier price label (line 100) — current:**
> `Free`

**Replacement:**
> `Open`

**Embeddable Widgets FeatureCard (lines 62-63) — current:**
> title="Embeddable Widgets", description about single line of code

**Replacement:** Replace with a different partner benefit, or reframe as "Content Integration — bring your town's profile into your own digital presence through our partner API." (Removes widget/embed language while preserving the benefit concept.)

**Embed section (lines 198-223):** Delete entirely. No replacement needed — the CTA section that follows it is the right page ending.

---

### File 2: `web/app/about/page.tsx`

#### Embed occurrence to remove

| Line | Current text | Action |
|------|-------------|--------|
| 118-122 | `"...can join the partnership program, which adds analytics, custom editorial collaboration, and embeddable content for local tourism sites."` | Remove "embeddable content for local tourism sites" — replace with shorter phrase |

**Proposed rewrite (lines 116-123) — current:**
> "Communities that want a deeper presence can join the partnership program, which adds analytics, custom editorial collaboration, and embeddable content for local tourism sites. The core history remains open regardless."

**Replacement:**
> "Communities that want a deeper presence can join the partnership program, which adds analytics, custom editorial collaboration, and a deeper organizational voice in how their town's story is told. The core history remains open regardless."

No "free" language in about/page.tsx. Only the one embed reference.

---

### File 3: `web/app/page.tsx` (Homepage)

#### "free" occurrences

| Line | Current text | Action |
|------|-------------|--------|
| 184 | `{ stat: "Free — Always", detail: "No paywalls. History is for everyone." }` | Reframe stat label |
| 295 | `"Sixteen states covered. Free, always. No login required."` | Rewrite sentence |

**Note:** The success criteria specify "partner/about pages" — the homepage is not explicitly named. However, these are user-facing "free" claims that undermine the same repositioning goal. Treat as in scope to be consistent with COPY-01's intent.

**Proposed rewrites:**

Line 184 stat card:
- Current: `stat: "Free — Always"`, `detail: "No paywalls. History is for everyone."`
- Replacement: `stat: "Open — Always"`, `detail: "No paywalls. No login required."`

Line 295 teacher strip text:
- Current: `"Sixteen states covered. Free, always. No login required."`
- Replacement: `"Sixteen states covered. No login required."`

---

### Out of Scope (do NOT change)

| File | Line | Reason |
|------|------|--------|
| `web/app/terms/page.tsx` | 38, 46, 68, 161, 168-190 | Legal document — "embed widgets" and "API" are contractually descriptive; removing them would be legally incorrect |
| `web/app/org/[slug]/dashboard/page.tsx` | 139 | Org admin dashboard, not user-facing partner/about copy; `price="Free"` is a UI label for authenticated org owners |
| `web/app/embed/[slug]/route.ts` | 38, 100 | Backend route that renders the actual embed widget HTML — internal implementation |
| `web/app/teach/virginia/page.tsx` | 76 | "freedom" in historical context (Lord Dunmore's Proclamation) — not product copy |

## Architecture Patterns

### Pattern: Inline TSX String Edit
All changes are to JSX string literals and text content inside existing components. No component API changes, no prop changes, no new files.

```tsx
// Before
<Heading level={2}>What stays free, always</Heading>

// After
<Heading level={2}>Open to everyone, always</Heading>
```

### Pattern: Section Deletion
The embed iframe section (lines 198-223 in partner/page.tsx) is a self-contained `<section>` block. Delete from `{/* Embed Widget */}` comment through the closing `</section>` tag and `<Divider spacing="section" />` that follows it.

```tsx
// Delete this entire block:
<Divider spacing="section" />
{/* Embed Widget */}
<section>
  <Heading level={2}>Embed your town anywhere</Heading>
  ...
</section>
```

### Pattern: Component Rename
`FreeFeature` is a private component defined at the bottom of `partner/page.tsx`. Rename definition and all call sites in the same file.

```tsx
// Before
function FreeFeature({ children }: { children: React.ReactNode }) { ... }
// Used as: <FreeFeature>text</FreeFeature>

// After
function OpenFeature({ children }: { children: React.ReactNode }) { ... }
// Used as: <OpenFeature>text</OpenFeature>
```

### Anti-Patterns to Avoid
- **Removing all embed language from terms.tsx:** Terms are legal documents — embed references there describe the product's legal structure, not marketing copy.
- **Touching the org dashboard:** The `price="Free"` prop on `PlanOption` in the dashboard is an internal UI label for authenticated org owners, not public partner marketing.
- **Over-replacing:** Do not replace "freedom" in historical context (Virginia page) — it is a word about emancipation, not pricing.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead |
|---------|-------------|-------------|
| Verifying the sweep is complete | A custom script | `grep -r "free" web/app/partner web/app/about` after edits — success criteria says 0 results |

## Common Pitfalls

### Pitfall 1: Missing the FreeFeature component rename
**What goes wrong:** Component is renamed at call sites but not at definition (or vice versa), causing a TypeScript/build error.
**Prevention:** Rename definition (line 246) and all four call sites (lines 43-46) in the same edit.

### Pitfall 2: Leaving the Divider before the deleted embed section
**What goes wrong:** The `<Divider spacing="section" />` on line 197 precedes the embed section. If the embed section is deleted but the Divider is left, there's a double-Divider before the CTA. Delete the Divider that separates the widget section from the previous section as well.
**Prevention:** Delete from the `<Divider>` before `{/* Embed Widget */}` through the closing `</section>` of that block.

### Pitfall 3: Homepage "Free — Always" stat card left unchanged
**What goes wrong:** Partner and about pages pass grep, but homepage still shows "Free — Always" stat, which is inconsistent with the repositioning.
**Prevention:** Include homepage in scope even though not explicitly named in success criteria.

### Pitfall 4: next build fails from orphaned JSX
**What goes wrong:** Partial deletion of the embed section leaves unclosed JSX tags.
**Prevention:** Verify `next build` exits 0 after edits.

## Verification

After edits, run these checks:

```bash
# 1. Verify no "free" in partner/about user-facing pages
grep -rni "free" /Users/sabrinachandini/sabrinas-town/web/app/partner/page.tsx /Users/sabrinachandini/sabrinas-town/web/app/about/page.tsx

# 2. Verify no widget/embed in partner copy
grep -rni "widget\|embed" /Users/sabrinachandini/sabrinas-town/web/app/partner/page.tsx /Users/sabrinachandini/sabrinas-town/web/app/about/page.tsx

# 3. Verify build passes
cd /Users/sabrinachandini/sabrinas-town/web && npx next build
```

Expected results:
1. Zero matches for "free" on partner + about pages
2. Zero matches for "widget" or "embed" on partner + about pages
3. `next build` exits 0

## State of the Art

No technology decisions involved. This is a copy-editing task on static TSX.

| Old Approach | Current Approach |
|--------------|-----------------|
| "free / Free" language throughout partner + about + homepage | "open" / "Open" language; remove embed/widget marketing |

## Open Questions

1. **Embeddable Widgets FeatureCard replacement**
   - What we know: The card currently promotes embed widgets, which must be removed from partner copy
   - What's unclear: Should this slot be replaced with a different benefit (e.g., Content Integration via API), or should the feature grid drop to 5 cards?
   - Recommendation: Replace with "Content Integration" benefit describing the partner API — keeps the grid even (6 cards) and accurately describes what partners actually receive

2. **Homepage "Free — Always" stat scope**
   - What we know: Success criteria say "partner/about pages" specifically
   - What's unclear: Whether COPY-01 intends homepage to be swept too
   - Recommendation: Include homepage — "Free — Always" directly contradicts the repositioning; the stat change is a 2-line edit with no risk

## Sources

### Primary (HIGH confidence)
- Live grep of `/Users/sabrinachandini/sabrinas-town/web/app/` — all affected lines catalogued directly from source files
- Direct file reads: `partner/page.tsx`, `about/page.tsx`, `page.tsx`, `terms/page.tsx`, `org/[slug]/dashboard/page.tsx`
- `.planning/ROADMAP.md` — phase 7 success criteria
- `.planning/PROJECT.md` — voice guidelines: "calm, analytical, modern, no hype, no exclamation marks"

### Secondary (MEDIUM confidence)
- Project memory (MEMORY.md): content voice described as "Sabrina Bhattacharjya — calm, analytical, modern, no hype, no patriotic romanticism, no exclamation marks, label uncertainty"

## Metadata

**Confidence breakdown:**
- Affected lines: HIGH — confirmed by direct grep + file reads
- Replacement language: MEDIUM — directionally right ("open" vs "free"), specific wording is Claude's discretion per voice guidelines
- Scope exclusions (terms/dashboard): HIGH — confirmed by reading those files directly

**Research date:** 2026-03-07
**Valid until:** 2026-04-07 (stable static copy; won't change unless someone edits these files)
