# Phase 5: Teacher Pages — TPT Style - Research

**Researched:** 2026-03-04
**Domain:** Next.js App Router, React component composition, print CSS, TypeScript
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- API returns content for all towns (`contentSource: "curated" | "generated"`); `getTeacherModule()` returning null is a network/error case — redirect to `/teach` index (not an empty-state page design)
- Do NOT surface `contentSource` label to teachers — hide whether content is curated or generated
- TeacherProductHeader: big title + grade band + estimated duration + "What you'll get" bullet list (3–4 derived items) + prominent "Print full packet" button in header, styled brand blue, opens `/teacher/print` in new tab
- TeacherProductMeta: horizontal tag strip BELOW the header (not a sidebar, not inline in header); shows grade level, subject, standards tags, prep time, skills; pill/tag style, small text, brand blue borders or muted
- Keep auto-print (`window.print()` 1 second after page load) — do not change
- Print improvements: better section spacing and typography; more generous whitespace (mb-12 → mb-16); proper serif heading sizes; short-answer lines: ensure `print-answer-line` has at least `min-h-[2.5rem]` and clear `border-b`
- Do NOT add auto headers per printed page
- Do NOT change heading border color to blue
- `QuizSection.tsx` — wire in, do not rewrite
- `TeacherHandoutCard.tsx` — keep, may use in new DownloadsBlock

### Claude's Discretion
- Exact component API (props) for TeacherProductHeader, TeacherProductMeta, PreviewSection, PrimarySourcesList, DownloadsBlock
- Whether to use a `web/components/teacher/index.ts` barrel export
- How to generate the "What you'll get" bullets from module data (derive from presence of primarySources.length, quiz.questions.length, handouts.length, lessonPlan fields)
- Exact Tailwind classes for tag strip pills

### Deferred Ideas (OUT OF SCOPE)
- Creating or enriching teacher content for all 75 towns beyond generative defaults — that's a content phase (Phase 9)
- Making the listing page show multiple lessons per town (currently the API returns one module per town) — requires API changes
- Student-facing quiz mode (separate from teacher reveal mode) — future feature
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| TPT-01 | `/towns/[slug]/teacher` shows a structured lesson listing for all towns (no EDITORIAL_SLUGS gate) | No EDITORIAL_SLUGS gate found in teacher routes — listing page already renders for all towns; rebuild with TeacherProductHeader layout |
| TPT-02 | `/towns/[slug]/teacher/[id]` renders TPT-style with TeacherProductHeader, TeacherProductMeta, PreviewSection, PrimarySourcesList, DownloadsBlock, QuizSection | Full TeacherModuleResponse shape documented below; all fields verified |
| TPT-03 | Print route produces clean PDF-ready output | Existing print CSS classes catalogued; spacing improvements identified |
| TPT-04 | `next build` exits 0, TypeScript 0 errors | Type shapes fully verified from source; `as any` usage must be replaced with proper types |
| TPT-05 | Remove any EDITORIAL_SLUGS gate | No EDITORIAL_SLUGS found in teacher routes at all — the gate was never added here; the listing page's `as any` cast and null branch are the current gaps |
</phase_requirements>

---

## Summary

Phase 5 is a pure presentation rebuild. The backend already delivers complete teacher content for all 75 towns via a generative fallback (confirmed in `teacherService.ts`). The three teacher routes — listing, detail, and print — each currently use `module as any` casts with minimal layout structure. The task is to replace those with properly typed, TPT-style components in a new `web/components/teacher/` directory.

The key finding on EDITORIAL_SLUGS: there is no such gate in any teacher route file. The grep returned zero matches in `web/`. The listing page's current issue is not a slug gate but that it links to `/teacher/lesson` (a hardcoded literal path) rather than the actual `[lessonSlug]` dynamic segment. The detail page receives `lessonSlug` from params but ignores it entirely — both pages call `getTeacherModule(slug)` where `slug` is the town slug, and the API only returns one module per town. The fix is to redirect from the listing to `/teacher/lesson` where `lesson` is a stable sentinel slug that satisfies the `[lessonSlug]` param.

The `TeacherModuleResponse` type in `web/lib/api.ts` uses `Record<string, unknown>` for `lessonPlan`, `comparativeAssignment`, `slideOutline`, and `standards`. The backend `src/services/teacherService.ts` has the authoritative typed interfaces. Both pages will need the lessonPlan cast resolved using the backend shape as ground truth.

**Primary recommendation:** Create `web/components/teacher/` with five new components, update three pages to remove `as any`, fix the listing→detail link, and improve print spacing. All work is self-contained within the web directory.

---

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js App Router | Already installed (project uses it) | Server components, routing, metadata | Project's established framework |
| React | Already installed | Client components (QuizSection "use client") | Required for interactive quiz toggle |
| Tailwind CSS v4 | Already installed (uses `@import "tailwindcss"`) | Styling via design tokens | Project's design system |
| TypeScript | Already installed | Type safety | Project requirement (0 errors) |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `web/components/ui/Button.tsx` | Project-local | Print button (primary variant) | "Print full packet" CTA |
| `web/components/editorial/PageShell.tsx` | Project-local | Page container (max-w-[860px]) | Listing and detail page wrapper |
| `web/components/editorial/EditorialSection.tsx` | Project-local | Section with h2 + separator | PreviewSection content sections |
| `web/components/town/QuizSection.tsx` | Project-local | Interactive quiz with reveal | Wire directly — do not rewrite |
| `web/components/town/TeacherHandoutCard.tsx` | Project-local | Handout card | Used inside DownloadsBlock |
| `web/components/town/PrimarySourceCard.tsx` | Project-local | Expandable source card | Can be used inside PrimarySourcesList |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Building pill/tag styles inline | shadcn Badge | Inline Tailwind is simpler, no new deps needed |
| New `EditorialSection` wrapper | Reusing existing | Existing component works; new teacher-specific sections may not need a separator |

**No new package installation needed.** All dependencies are already installed.

---

## Architecture Patterns

### Recommended Project Structure
```
web/components/teacher/
├── TeacherProductHeader.tsx   # Title, grade band, duration, "what you'll get", print button
├── TeacherProductMeta.tsx     # Horizontal pill/tag strip
├── PreviewSection.tsx         # Lesson procedure preview (warm-up, objectives, questions)
├── PrimarySourcesList.tsx     # List of PrimarySourceCard items
├── DownloadsBlock.tsx         # Handouts listed via TeacherHandoutCard
└── index.ts                   # Barrel export

web/app/towns/[slug]/teacher/
├── page.tsx                   # REWRITE: listing page with TeacherProductHeader layout
├── [lessonSlug]/
│   └── page.tsx               # REWRITE: detail page with all new components + QuizSection
└── print/
    └── page.tsx               # UPDATE: improve print spacing/typography only
```

### Pattern 1: Server Component Page with Client Component Islands
**What:** Pages are async server components that fetch data and pass typed props down. QuizSection is the only client component (it uses `useState`). All new `teacher/` components are pure server components (no interactivity needed).
**When to use:** Always, unless a component needs browser events.
**Example:**
```typescript
// web/app/towns/[slug]/teacher/[lessonSlug]/page.tsx
import { TeacherProductHeader } from "@/components/teacher";
import { QuizSection } from "@/components/town"; // already "use client"

export default async function LessonDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const module = await getTeacherModule(slug);
  if (!module) redirect("/teach");

  return (
    <PageShell>
      <TeacherProductHeader module={module} slug={slug} />
      <TeacherProductMeta module={module} />
      <PreviewSection lessonPlan={module.lessonPlan as LessonPlan} />
      <PrimarySourcesList sources={module.primarySources} />
      <DownloadsBlock handouts={module.handouts} />
      {module.quiz?.questions?.length > 0 && (
        <QuizSection
          title={module.quiz.title}
          instructions={module.quiz.instructions}
          questions={module.quiz.questions}
        />
      )}
    </PageShell>
  );
}
```

### Pattern 2: Derive "What You'll Get" Bullets Inline in TeacherProductHeader
**What:** Pure function that inspects module fields and returns 3–5 bullet strings.
**When to use:** Inside `TeacherProductHeader` — not exported separately.
**Example:**
```typescript
function deriveWhatYouGet(module: TeacherModuleResponse): string[] {
  const bullets: string[] = [];
  if (module.lessonPlan && (module.lessonPlan as LessonPlan).warmUp) {
    bullets.push(`Full lesson plan (${module.overview.estimatedDuration})`);
  }
  if (module.primarySources.length > 0) {
    const n = module.primarySources.length;
    bullets.push(`${n} primary source${n !== 1 ? "s" : ""} with analysis prompts`);
  }
  if (module.quiz?.questions?.length > 0) {
    const n = module.quiz.questions.length;
    bullets.push(`Quiz with answer key (${n} question${n !== 1 ? "s" : ""})`);
  }
  if ((module.lessonPlan as LessonPlan)?.differentiation) {
    bullets.push("Differentiation strategies (struggling / advanced / ELL)");
  }
  if (module.handouts.length > 0) {
    const n = module.handouts.length;
    bullets.push(`${n} printable handout${n !== 1 ? "s" : ""}`);
  }
  return bullets;
}
```

### Pattern 3: LessonPlan Local Type for Casting
**What:** Define a `LessonPlan` interface locally in `web/components/teacher/` that mirrors `src/services/teacherService.ts` — this avoids importing from backend or duplicating `as any`.
**When to use:** Any component that needs to access lessonPlan sub-fields.
**Example:**
```typescript
// web/components/teacher/types.ts (or inline in each component)
export interface LessonPlan {
  objectives: string[];
  essentialQuestions: string[];
  materials: string[];
  warmUp: { duration: string; activity: string };
  directInstruction: { duration: string; content: string[] };
  guidedPractice: { duration: string; activities: string[] };
  independentPractice: { duration: string; assignment: string };
  closure: { duration: string; activity: string };
  differentiation: { struggling: string; advanced: string; ell: string };
  assessment: string;
}
```

### Pattern 4: Pill/Tag Strip for TeacherProductMeta
**What:** Horizontal flex-wrap row of small pill spans using brand blue border.
**When to use:** Directly below TeacherProductHeader in detail page.
**Example:**
```typescript
// Pill style — Claude's discretion; recommended:
<span className="inline-flex items-center px-3 py-1 rounded-full border border-accent-blue/30 text-small text-text-muted font-body">
  {tag}
</span>
```

### Anti-Patterns to Avoid
- **Using `module as any` in new components:** The `as any` cast exists in current pages. New components must use the typed `TeacherModuleResponse` from `@/lib/api` and the local `LessonPlan` interface. Do not propagate `as any`.
- **Rewriting QuizSection:** The component already works and has "use client". Wrap it, don't replace it.
- **Linking to `/teacher/lesson` (hardcoded literal):** The current listing page links to `/towns/${slug}/teacher/lesson`. This accidentally works because `lesson` satisfies the `[lessonSlug]` param and both pages call `getTeacherModule(slug)` ignoring the param. Keep this convention — use `lesson` as the stable sentinel slug in the listing page link. Do NOT try to derive a real lesson slug from module data (the API doesn't return one).
- **Adding `"use client"` to teacher components unnecessarily:** TeacherProductHeader, TeacherProductMeta, PreviewSection, PrimarySourcesList, DownloadsBlock have no interactivity — all are server components.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Interactive quiz answer reveal | Custom toggle logic | Existing `QuizSection.tsx` | Already handles show/hide, reveal-all, hide-all with useState |
| Primary source expandable card | New collapsible | Existing `PrimarySourceCard.tsx` in `web/components/town/` | Already handles expand/collapse with analysis prompts |
| Handout display card | New card component | Existing `TeacherHandoutCard.tsx` | Already styled for both screen and print |
| Page container with max-width | New wrapper | `PageShell` from `@/components/editorial` | Already sets `max-w-[860px] px-6 py-16 md:py-24` |
| Section headings with separator | New section wrapper | `EditorialSection` from `@/components/editorial` | Already has `h2 + Separator + space-y-6` pattern |
| Print button as link | Raw `<a>` tag | `Button` from `@/components/ui` with `href` + `external` props | Handles `target="_blank" rel="noopener noreferrer"` and brand styling |

**Key insight:** The project has a rich set of existing components. The new `web/components/teacher/` directory is for layout-level compositions (header + meta + section order), not primitive widgets.

---

## Common Pitfalls

### Pitfall 1: TeacherModuleResponse.lessonPlan is typed as `Record<string, unknown>`
**What goes wrong:** `web/lib/api.ts` line 298 types `lessonPlan: Record<string, unknown>`. Accessing `module.lessonPlan.warmUp` is a TypeScript error.
**Why it happens:** The API type was kept loose to avoid coupling frontend to backend shape.
**How to avoid:** Define a local `LessonPlan` interface in `web/components/teacher/types.ts` and cast: `module.lessonPlan as LessonPlan`. Do not use `as any`. The backend interface in `src/services/teacherService.ts` lines 36–66 is the authoritative shape.
**Warning signs:** TypeScript error "Property 'warmUp' does not exist on type 'Record<string, unknown>'"

### Pitfall 2: [lessonSlug] param is ignored by both pages
**What goes wrong:** Both teacher pages call `getTeacherModule(slug)` where `slug` is the town slug, not the lesson slug. If a developer assumes `lessonSlug` is meaningful and tries to pass it to the API, it will fail (the API doesn't accept a lesson slug).
**Why it happens:** The API returns exactly one module per town — there is no lesson-level ID.
**How to avoid:** Use `lesson` as the stable sentinel slug in all links from the listing page: `/towns/${slug}/teacher/lesson`. The detail page should accept any `lessonSlug` value and simply ignore it (fetch by town `slug` only). Document this in a code comment.
**Warning signs:** A link like `/towns/boston-ma/teacher/abc123` that returns 404

### Pitfall 3: standards field is `Record<string, unknown>` in the API type
**What goes wrong:** `module.standards.commonCore` is a TypeScript error; same for `c3Framework`.
**Why it happens:** `standards: Record<string, unknown>` in `web/lib/api.ts` line 329.
**How to avoid:** Define `Standards` interface locally mirroring the backend's `StandardsPlaceholder`:
```typescript
interface Standards {
  note: string;
  commonCore: string[];
  c3Framework: string[];
  stateStandards: { placeholder: string; suggestedAlignment: string };
}
```
Cast: `(module.standards as Standards).commonCore`
**Warning signs:** TypeScript error accessing any sub-field of `module.standards`

### Pitfall 4: Print page is a bare Next.js page without nav suppression
**What goes wrong:** The print page at `print/page.tsx` does not use `PageShell` and relies on CSS `nav, footer, header { display: none }` in the `@media print` block to suppress nav. This works but only when `window.print()` fires — the printed preview will still render the full nav on screen.
**Why it happens:** The print page intentionally uses a minimal layout with auto-print trigger. Nav suppression is CSS-only.
**How to avoid:** Do not change this pattern — it's working by design. The `no-print` class, `nav`, `footer`, and `header` selectors in globals.css already suppress nav in print mode.
**Warning signs:** Nav appears in the browser preview of the print page (expected — disappears on print)

### Pitfall 5: `print-answer-line` currently has no `min-height` set in CSS
**What goes wrong:** globals.css defines `.print-answer-line { border-bottom: 1pt solid #999; min-height: 1.5em; display: block; }` — only applies inside `@media print`. The screen-mode inline class `h-12 border-b border-gray-300` controls screen size. If `min-height` is not also added via the print-mode utility, lines will be too short.
**Why it happens:** The print CSS has `min-height: 1.5em` (defined) but CONTEXT.md requests upgrading to `min-h-[2.5rem]`. The inline utility `h-12` (48px screen) does not apply in print.
**How to avoid:** In print/page.tsx, change the `print-answer-line` element to include explicit CSS height in the `@media print` block OR update globals.css `.print-answer-line` to use `min-height: 2.5rem` (approx 2 lines for short-answer). The globals.css approach is cleaner and touches only one file.
**Warning signs:** Quiz answer lines too short in printed output

### Pitfall 6: `module.handouts[].content` is not rendered in current pages
**What goes wrong:** `TeacherHandoutCard` only renders `title`, `type`, `description`. The `content: string` field (Markdown content) from the API is silently ignored.
**Why it happens:** The current implementation treats handouts as a list, not as printable worksheets.
**How to avoid:** In `DownloadsBlock`, display the description. The `content` field is Markdown — if rendering it, use `dangerouslySetInnerHTML` with a pre-sanitized renderer, or just render `description` only. For this phase, displaying `title + type + description` is sufficient per CONTEXT.md (no content enrichment in scope).
**Warning signs:** Educators see card with no actual worksheet content — acceptable for now per deferred scope.

---

## Code Examples

Verified patterns from codebase source files:

### Existing Button Component (use for "Print full packet")
```typescript
// Source: web/components/ui/Button.tsx
import { Button } from "@/components/ui";

<Button
  href={`/towns/${slug}/teacher/print`}
  external
  variant="primary"
>
  Print full packet
</Button>
// Renders as: <a href="..." target="_blank" rel="noopener noreferrer" class="...border-accent-blue text-accent-blue bg-transparent hover:bg-accent-blue hover:text-white...">
```

### PageShell Usage (matches all other teacher pages)
```typescript
// Source: web/components/editorial/PageShell.tsx
// max-w-[860px] mx-auto px-6 py-16 md:py-24
import { PageShell } from "@/components/editorial";

<PageShell>
  {/* all page content */}
</PageShell>
```

### QuizSection Wire-In
```typescript
// Source: web/components/town/QuizSection.tsx
// Props: { title: string; instructions: string; questions: QuizQuestion[] }
import { QuizSection } from "@/components/town";

{module.quiz?.questions?.length > 0 && (
  <QuizSection
    title={module.quiz.title}
    instructions={module.quiz.instructions}
    questions={module.quiz.questions}
  />
)}
```

### PrimarySourceCard Wire-In (already in town/index.ts)
```typescript
// Source: web/components/town/PrimarySourceCard.tsx
// Props: { title, type, sourceInfo, url, analysisPrompts, credibilityTier, teacherNarrative? }
import { PrimarySourceCard } from "@/components/town";

{module.primarySources.map(source => (
  <PrimarySourceCard key={source.id} {...source} />
))}
```

### Tag Strip Pill (Claude's discretion — recommended pattern)
```typescript
// Tailwind v4 — uses design token classes from globals.css @theme
<div className="flex flex-wrap gap-2 mt-6">
  {tags.map(tag => (
    <span
      key={tag}
      className="inline-flex items-center px-3 py-1 rounded-full border border-accent-blue/30 text-small text-text-muted font-body"
    >
      {tag}
    </span>
  ))}
</div>
```

### Print Spacing Improvement (print page)
```typescript
// Current: className="print-section mb-12"
// Improved: className="print-section mb-16"

// Current print-answer-line in globals.css:
// min-height: 1.5em → change to min-height: 2.5rem

// Short-answer line in print/page.tsx current:
<span className="print-answer-line ml-6 mt-2 h-12 border-b border-gray-300 block" />
// Improved (add explicit min-h for screen preview readability):
<span className="print-answer-line ml-6 mt-2 min-h-[2.5rem] border-b border-gray-300 block" />
```

---

## Full TeacherModuleResponse Shape (Verified)

The authoritative backend type is in `src/services/teacherService.ts`. The frontend type in `web/lib/api.ts` uses `Record<string, unknown>` for several nested objects. Here is the complete resolved shape:

```typescript
// Fully typed shape — verified from src/services/teacherService.ts
interface TeacherModuleResolved {
  town: { id: string; name: string; state: string; slug: string };
  overview: {
    title: string;         // e.g. "The American Revolution in Boston"
    gradeRange: string;    // e.g. "5-12 (adaptable)" or "Grades 5-8"
    estimatedDuration: string; // e.g. "50 minutes" or "75 minutes"
    summary: string;       // 2-3 sentence module overview
  };
  lessonPlan: {
    objectives: string[];           // 3-5 learning objectives
    essentialQuestions: string[];   // 2-3 driving questions
    materials: string[];            // list of needed materials
    warmUp: { duration: string; activity: string };
    directInstruction: { duration: string; content: string[] };
    guidedPractice: { duration: string; activities: string[] };
    independentPractice: { duration: string; assignment: string };
    closure: { duration: string; activity: string };
    differentiation: { struggling: string; advanced: string; ell: string };
    assessment: string;
  };
  primarySources: Array<{
    id: string;
    title: string;
    type: string;
    sourceInfo: string;
    url: string | null;
    analysisPrompts: string[];
    credibilityTier: string;      // "TIER1" | "TIER2" | "TIER3"
    teacherNarrative?: string;
  }>;
  comparativeAssignment: {
    title: string;
    description: string;
    compareTowns: Array<{ townId: string; townName: string; comparisonPoints: string[] }>;
    rubric: Array<{ criteria: string; excellent: string; proficient: string; developing: string }>;
  };
  handouts: Array<{
    title: string;
    type: "worksheet" | "reading" | "graphic_organizer" | "timeline";
    description: string;
    content: string; // Markdown
  }>;
  quiz: {
    title: string;
    instructions: string;
    questions: Array<{
      id: number;
      type: "multiple_choice" | "short_answer" | "true_false";
      question: string;
      options?: string[];      // only for multiple_choice
      correctAnswer: string;
      explanation: string;
    }>;
  };
  slideOutline: {
    title: string;
    slides: Array<{ slideNumber: number; title: string; bulletPoints: string[]; speakerNotes: string; suggestedVisual: string }>;
  };
  standards: {
    note: string;
    commonCore: string[];
    c3Framework: string[];
    stateStandards: { placeholder: string; suggestedAlignment: string };
  };
  relatedTowns: Array<{
    townId: string;
    townName: string;
    connectionType: string;
    teachingConnection: string;
  }>;
  meta?: { contentSource: "curated" | "generated" };
}
```

**Fields available for tag strip (TeacherProductMeta):**
- `overview.gradeRange` — grade level tag
- `overview.estimatedDuration` — prep time tag
- `standards.commonCore` — first 2 entries as standards tags
- `standards.c3Framework` — optional additional tags

---

## Print CSS Classes (Verified from globals.css)

All defined in `web/app/globals.css` `@media print` block:

| Class | Behavior | Current Value |
|-------|----------|---------------|
| `.print-section` | Forces page break before each section | `page-break-before: always` (first-of-type: auto) |
| `.page-break-after` | Forces break after element | `page-break-after: always` |
| `.page-break-before` | Forces break before element | `page-break-before: always` |
| `.page-break-inside-avoid` | Prevents breaks inside element | `page-break-inside: avoid` |
| `.print-only` | Hidden on screen, visible in print | `display: none` screen → `display: block` print |
| `.no-print` | Visible on screen, hidden in print | `display: none !important` in print |
| `.print-answer-line` | Short-answer blank line | `border-bottom: 1pt solid #999; min-height: 1.5em` |
| `.source-citation` | Small source text | `font-size: 9pt; color: #444` |
| `.print-layout` | Removes max-width | `max-width: none; padding: 0` |
| `nav, footer, header` | Hidden in print | `display: none !important` |

**Print page size:** `@page { margin: 0.75in; size: letter }` — set globally.

**Improvement needed per CONTEXT.md:**
- `.print-answer-line`: change `min-height: 1.5em` → `min-height: 2.5rem`
- Section `mb-12` → `mb-16` on print sections
- Cover page: increase vertical padding (`mb-16` → `mb-20` or more)

---

## Architecture Patterns for Wave Structure

### Can listing and detail pages be built in parallel?

Yes. They share the `getTeacherModule()` call but are independent files.

**Recommended wave structure:**

**Wave 1 (foundation — must be first):**
- Create `web/components/teacher/types.ts` — `LessonPlan`, `Standards` interfaces
- Create `web/components/teacher/TeacherProductHeader.tsx`
- Create `web/components/teacher/TeacherProductMeta.tsx`
- Create `web/components/teacher/index.ts` barrel

**Wave 2 (can be parallel after Wave 1):**
- Create `web/components/teacher/PreviewSection.tsx` (depends on `LessonPlan` type)
- Create `web/components/teacher/PrimarySourcesList.tsx` (wraps existing `PrimarySourceCard`)
- Create `web/components/teacher/DownloadsBlock.tsx` (wraps existing `TeacherHandoutCard`)

**Wave 3 (page rewrites — depend on Wave 1+2):**
- Rewrite `web/app/towns/[slug]/teacher/page.tsx` (listing)
- Rewrite `web/app/towns/[slug]/teacher/[lessonSlug]/page.tsx` (detail)
- Update `web/app/towns/[slug]/teacher/print/page.tsx` (print improvements)

Wave 2 components can be built in parallel with each other. Wave 3 pages can be built in parallel with each other. Wave 1 must complete before Wave 2, Wave 2 before Wave 3.

**Total file count:** 5 new components + 1 types file + 1 barrel + 3 updated pages = 10 files.

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `module as any` throughout | Typed via local `LessonPlan` interface | This phase | TypeScript 0 errors |
| EditorialSection layout for teacher pages | TPT-style header with meta strip | This phase | Professional teacher UX |
| Hardcoded "View full lesson plan" link text | TeacherProductHeader with CTA button | This phase | Clearer teacher workflow |
| print-section `mb-12` spacing | `mb-16` with generous whitespace | This phase | Better PDF output |

**Not deprecated by this phase:**
- `QuizSection.tsx` — kept as-is
- `TeacherHandoutCard.tsx` — kept, reused in DownloadsBlock
- `PrimarySourceCard.tsx` — kept, reused in PrimarySourcesList
- `PageShell`, `EditorialSection` from editorial — still used in detail page

---

## Open Questions

1. **Should `comparativeAssignment` be rendered in the detail page?**
   - What we know: The API returns a `comparativeAssignment` object with a rubric. Current pages don't render it.
   - What's unclear: CONTEXT.md doesn't mention it. It's not listed in the five new components.
   - Recommendation: Skip for this phase. The five named components (TeacherProductHeader, TeacherProductMeta, PreviewSection, PrimarySourcesList, DownloadsBlock) don't include it. Add it only if explicitly requested.

2. **Should `slideOutline` be rendered anywhere?**
   - What we know: The API returns slide outlines. No current page renders it.
   - What's unclear: Not mentioned in CONTEXT.md.
   - Recommendation: Out of scope for this phase. Leave for Phase 9 or a content-focused phase.

3. **What should the listing page look like beyond TeacherProductHeader?**
   - What we know: The CONTEXT.md describes the detail page layout in detail. The listing page currently shows overview + objectives + essential questions + sources + print link.
   - What's unclear: Should the listing page use the full TPT-style TeacherProductHeader, or a simplified listing card?
   - Recommendation: Use TeacherProductHeader on the listing page (shows the module preview), with a "View full lesson plan" link → `/towns/${slug}/teacher/lesson`. This is consistent with TPT's "product listing" concept. The listing page IS effectively a single product page since the API only returns one module per town.

---

## Sources

### Primary (HIGH confidence)
- `web/app/towns/[slug]/teacher/page.tsx` — current listing page implementation, verified
- `web/app/towns/[slug]/teacher/[lessonSlug]/page.tsx` — current detail page, lessonSlug bug confirmed
- `web/app/towns/[slug]/teacher/print/page.tsx` — print page, all CSS classes confirmed
- `web/lib/api.ts` lines 290–339 — `TeacherModuleResponse` type, field types confirmed
- `src/services/teacherService.ts` lines 1–140 — authoritative backend interfaces verified
- `web/app/globals.css` lines 233–326 — all print CSS classes verified
- `web/components/editorial/PageShell.tsx`, `PageHeader.tsx`, `EditorialSection.tsx` — props verified
- `web/components/town/QuizSection.tsx` — props interface confirmed: `{ title, instructions, questions }`
- `web/components/town/TeacherHandoutCard.tsx` — props: `{ title, type, description }`
- `web/components/town/PrimarySourceCard.tsx` — props confirmed, expandable pattern
- `web/components/ui/Button.tsx` — `href + external` pattern for print button
- `web/components/ui/index.ts`, `web/components/town/index.ts`, `web/components/editorial/index.ts` — all barrel exports verified
- Grep for `EDITORIAL_SLUGS` across all web `.tsx/.ts` files — zero matches confirmed

### Secondary (MEDIUM confidence)
- `.planning/phases/05-teacher-pages-tpt-style/05-CONTEXT.md` — user decisions, treated as authoritative constraints

---

## Metadata

**Confidence breakdown:**
- TeacherModuleResponse shape: HIGH — verified from both `web/lib/api.ts` and `src/services/teacherService.ts`
- Existing components/props: HIGH — read source files directly
- Print CSS classes: HIGH — read globals.css directly
- lessonSlug linking bug: HIGH — confirmed by reading both pages; neither uses the `lessonSlug` param
- EDITORIAL_SLUGS absence: HIGH — grep returned zero matches
- Wave parallelism: HIGH — files are independent
- Tag strip Tailwind classes: MEDIUM — design token names verified but exact visual is discretionary

**Research date:** 2026-03-04
**Valid until:** 2026-04-04 (stable project — no moving dependencies)
