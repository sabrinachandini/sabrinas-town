---
phase: 05-teacher-pages-tpt-style
plan: "03"
subsystem: frontend/teacher
tags: [typescript, css, print, spacing, type-safety]
dependency_graph:
  requires:
    - 05-01  # LessonPlan and Standards types from @/components/teacher/types
  provides:
    - improved print packet PDF output (spacing, answer lines)
    - zero as-any in print page
  affects:
    - web/app/towns/[slug]/teacher/print/page.tsx
    - web/app/globals.css
tech_stack:
  added: []
  patterns:
    - Double cast (as unknown as Type) for narrowing Record<string,unknown> to typed interface
    - Inline type inference from TeacherModuleResponse (no explicit annotations needed in map callbacks)
key_files:
  created: []
  modified:
    - web/app/towns/[slug]/teacher/print/page.tsx
    - web/app/globals.css
decisions:
  - Double cast required for module.lessonPlan and module.standards because TeacherModuleResponse types them as Record<string,unknown>; as unknown as LessonPlan/Standards satisfies TypeScript without changing runtime behavior
  - Cover section uses mb-20 (not mb-16) per CONTEXT.md — extra top padding before title improves PDF appearance
metrics:
  duration: 19 min
  completed_date: "2026-03-05"
  tasks_completed: 2
  files_modified: 2
---

# Phase 05 Plan 03: Print Page Spacing and Type Safety Summary

Removed all `as any` casts from the teacher print page and improved PDF spacing — `mb-16` section spacing, `mb-20` cover padding, and `min-height: 2.5rem` answer lines via updated CSS.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Remove as any from print page and improve section spacing | 55dd3ff | web/app/towns/[slug]/teacher/print/page.tsx |
| 2 | Update globals.css print-answer-line and run build check | 4921525 | web/app/globals.css |

## What Was Built

**Task 1 — print/page.tsx typing and spacing:**
- Added `import { LessonPlan, Standards } from "@/components/teacher/types"`
- Replaced `module as any` destructuring with typed destructuring: `const { town, overview, primarySources, handouts, quiz } = module`
- Used double cast for `lessonPlan` and `standards`: `module.lessonPlan as unknown as LessonPlan`
- Removed all 6 inline `as any` annotations on map callback params (TypeScript infers from `TeacherModuleResponse`)
- Cover section: `mb-16 page-break-after` → `mb-20 page-break-after`
- All 6 `print-section` elements: `mb-12` → `mb-16`
- Short-answer span: `h-12` → `min-h-[2.5rem]`
- PrintTrigger function preserved byte-for-byte

**Task 2 — globals.css and build verification:**
- `.print-answer-line` inside `@media print`: `min-height: 1.5em` → `min-height: 2.5rem`
- `npm run build` exits 0, all routes compile including `/towns/[slug]/teacher/print`
- TypeScript 0 errors across all teacher files

## Verification Results

```
grep -c "mb-16" print/page.tsx  → 6 (all print-section elements)
grep -c "as any" print/page.tsx → 0
.print-answer-line min-height   → 2.5rem
npm run build                   → exit 0
TypeScript errors (teacher/)    → 0
```

## Decisions Made

1. **Double cast for module fields:** `module.lessonPlan` is typed as `Record<string,unknown>` in `TeacherModuleResponse`. TypeScript rejects direct `as LessonPlan` because the types don't overlap sufficiently. Used `as unknown as LessonPlan` — consistent with Phase 05-01 pattern recorded in STATE.md decisions.

2. **Cover section mb-20:** Plan specifies "more vertical padding before the title" for cover page. Used `mb-20` per CONTEXT.md guidance (original was already `mb-16`, so changed to `mb-20`).

## Deviations from Plan

None — plan executed exactly as written.

## Self-Check: PASSED
