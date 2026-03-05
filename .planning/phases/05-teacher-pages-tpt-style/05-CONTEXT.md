# Phase 5: Teacher Pages — TPT Style — Context

**Gathered:** 2026-03-04
**Status:** Ready for planning
**Source:** /gsd:discuss-phase

<domain>
## Phase Boundary

Rebuild the teacher listing and lesson detail pages into a TPT-style layout using new components in `web/components/teacher/`. The backend already generates teacher content for all 75 towns (generative fallback). This phase is about *presentation only* — not content creation.

Routes in scope:
- `web/app/towns/[slug]/teacher/page.tsx` — lesson listing
- `web/app/towns/[slug]/teacher/[lessonSlug]/page.tsx` — lesson detail
- `web/app/towns/[slug]/teacher/print/page.tsx` — print packet

New component directory: `web/components/teacher/`

</domain>

<decisions>
## Implementation Decisions

### Empty state / null handling
- API returns content for all towns (`contentSource: "curated" | "generated"`)
- `getTeacherModule()` returning null is a network/error case — redirect to `/teach` index (not an empty-state page design)
- Do NOT surface `contentSource` label to teachers — hide whether content is curated or generated

### Lesson detail layout — TeacherProductHeader
- Big title (lesson name) + grade band + estimated duration at top
- "What you'll get" bullet list (3–4 items, generated from module data): e.g. "Lesson plan (50 min) • 3 primary sources • Quiz with answer key • Differentiation tips"
- Prominent "Print full packet" button in header, styled brand blue, opens `/teacher/print` in new tab

### Lesson detail layout — TeacherProductMeta
- Horizontal tag strip *below* the header (not a sidebar, not inline in header)
- Shows: grade level, subject, standards tags, prep time, skills
- Pill/tag style, small text, brand blue borders or muted

### Print trigger
- Keep auto-print (`window.print()` 1 second after page load) — do not change
- Teacher workflow: click 'Print full packet' → new tab → print dialog auto-appears

### Print quality
- Focus improvement: better section spacing and typography
- More generous whitespace between sections
- Proper serif heading sizes
- Clear answer lines for short-answer quiz questions (currently `h-12 border-b` — fine, just ensure spacing is generous)
- Do NOT add auto headers per printed page (not requested)
- Do NOT change heading border color to blue (not requested)

### Existing components to keep
- `QuizSection.tsx` — wire in, do not rewrite
- `TeacherHandoutCard.tsx` — keep, may use in new DownloadsBlock

### Claude's Discretion
- Exact component API (props) for TeacherProductHeader, TeacherProductMeta, PreviewSection, PrimarySourcesList, DownloadsBlock
- Whether to use a `web/components/teacher/index.ts` barrel export
- How to generate the "What you'll get" bullets from module data (derive from presence of primarySources.length, quiz.questions.length, handouts.length, lessonPlan fields)
- Exact Tailwind classes for tag strip pills

</decisions>

<specifics>
## Specific Ideas

**"What you'll get" bullets — generation logic:**
Derive dynamically from module data:
- If `lessonPlan.warmUp` exists → "Full lesson plan ({estimatedDuration})"
- If `primarySources.length > 0` → "{N} primary source{s} with analysis prompts"
- If `quiz.questions.length > 0` → "Quiz with answer key ({N} questions)"
- If `lessonPlan.differentiation` exists → "Differentiation strategies (struggling / advanced / ELL)"
- If `handouts.length > 0` → "{N} printable handout{s}"

**Tag strip content:**
Pull from `module.overview.gradeRange`, `module.standards.commonCore` (first 2), `module.overview.estimatedDuration`

**Print improvements focus:**
- Increase `mb-` on print sections (currently `mb-12` → try `mb-16`)
- Increase `space-y-` on procedure blocks
- Short-answer lines: ensure `print-answer-line` has at least `min-h-[2.5rem]` and clear `border-b`
- Cover page: increase vertical padding

</specifics>

<deferred>
## Deferred Ideas

- Creating or enriching teacher content for all 75 towns beyond generative defaults — that's a content phase (Phase 9)
- Making the listing page show multiple lessons per town (currently the API returns one module per town) — requires API changes
- Student-facing quiz mode (separate from teacher reveal mode) — future feature

</deferred>

---

*Phase: 05-teacher-pages-tpt-style*
*Context gathered: 2026-03-04 via /gsd:discuss-phase*
