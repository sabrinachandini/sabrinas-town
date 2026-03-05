---
phase: 05-teacher-pages-tpt-style
plan: "02"
subsystem: ui
tags: [nextjs, typescript, teacher, tpt-style, components]

# Dependency graph
requires:
  - phase: 05-01
    provides: TeacherProductHeader, TeacherProductMeta, PreviewSection, PrimarySourcesList, DownloadsBlock components in @/components/teacher
provides:
  - Teacher listing page with TPT-style TeacherProductHeader layout and View full lesson plan link
  - Teacher detail page with full component stack (header, meta, preview, sources, downloads, quiz)
  - Null module redirect to /teach on detail page
  - No as any casts in either teacher page
affects: [05-03, teacher-pages]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - lessonSlug sentinel pattern — detail page ignores lessonSlug param, only uses town slug for API call
    - as unknown as Type double-cast when narrowing Record<string,unknown> to typed interface

key-files:
  created: []
  modified:
    - web/app/towns/[slug]/teacher/page.tsx
    - web/app/towns/[slug]/teacher/[lessonSlug]/page.tsx

key-decisions:
  - "Listing page shows fallback message (not redirect) when module is null — content may not be available yet"
  - "Detail page redirects to /teach (not notFound()) when module is null — consistent with teacher hub"
  - "lessonSlug sentinel pattern: param ignored with comment explaining single-module-per-town API contract"
  - "lessonPlan cast via as unknown as LessonPlan (double cast) not as any — matches pattern from 05-01"

patterns-established:
  - "sentinel slug pattern: /towns/[slug]/teacher/lesson uses 'lesson' as stable sentinel, lessonSlug ignored in handler"
  - "null module handling differs by page: listing = fallback message, detail = redirect"

requirements-completed: [TPT-01, TPT-02, TPT-04, TPT-05]

# Metrics
duration: 7min
completed: 2026-03-05
---

# Phase 05 Plan 02: Teacher Pages TPT Style Summary

**Teacher listing and detail pages rebuilt with typed TPT component stack — no as any casts, full component hierarchy (header, meta, preview, sources, downloads, quiz), null-module redirect on detail page**

## Performance

- **Duration:** 7 min
- **Started:** 2026-03-05T04:58:15Z
- **Completed:** 2026-03-05T05:05:00Z
- **Tasks:** 2 (+ checkpoint awaiting human verify)
- **Files modified:** 2

## Accomplishments
- Teacher listing page now imports and renders TeacherProductHeader with "What you'll get" bullets and Print button
- "View full lesson plan" link added to listing page pointing to /towns/[slug]/teacher/lesson sentinel
- Teacher detail page renders full stack: TeacherProductHeader + TeacherProductMeta + PreviewSection + PrimarySourcesList + DownloadsBlock + QuizSection
- All as any casts eliminated from both pages; LessonBlock local helper removed (replaced by PreviewSection)
- Null module on detail page redirects to /teach; null town on listing page shows fallback message
- contentSource field is never rendered on either page
- TypeScript exits 0 errors

## Task Commits

Each task was committed atomically:

1. **Task 1: Rewrite teacher listing page** - `84fc359` (feat)
2. **Task 2: Rewrite teacher detail page** - `7dd5fa8` (feat)

## Files Created/Modified
- `web/app/towns/[slug]/teacher/page.tsx` - Rewritten: TeacherProductHeader, no as any, View full lesson plan link
- `web/app/towns/[slug]/teacher/[lessonSlug]/page.tsx` - Rewritten: full TPT component stack, redirect on null module, lessonSlug sentinel

## Decisions Made
- Listing page does NOT redirect on null module (valid state: content not available yet for some towns)
- Detail page uses `redirect("/teach")` not `notFound()` — consistent with the teacher hub as fallback destination
- `lessonPlan` cast uses `as unknown as LessonPlan` (double-cast) not bare `as any` — matches the pattern established in 05-01 for narrowing `Record<string,unknown>` to typed interfaces
- `lessonSlug` param destructured from params but immediately ignored, with a comment explaining the API contract

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Both teacher pages are fully typed and use the component library from 05-01
- Human verification still required (checkpoint not yet approved): boston-ma and savannah-ga teacher pages need visual confirmation
- After checkpoint approval, Phase 05 Plan 03 can proceed

---
*Phase: 05-teacher-pages-tpt-style*
*Completed: 2026-03-05*
