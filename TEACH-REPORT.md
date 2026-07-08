# TEACH-REPORT.md — Teach Section Redesign

Branch: `teach-redesign` · Build: compiled successfully (no type errors)

---

## Executive Summary

The teach section now has a live-DB-driven directory page with grade and confidence filters, a redesigned per-town teacher page built for 30-second teacher decisions, two new print-first components (StudentPacket and TeacherGuide), a comprehensive B&W print stylesheet, and a field-trip linkage that surfaces lesson materials on muster itinerary pages. The largest outstanding gap is that 221 lesson plans were generated without URLs on their primary source packets — teachers cannot follow citations to original documents, and this is the most important thing to fix after this branch merges.

---

## Before / After Findings Table

| Area | Issue | Severity | Before | After |
|---|---|---|---|---|
| teach/page.tsx | Hardcoded stats ("77 Towns · 16 States") | MED | Static JSX | Live DB query (92 towns, 16 states, 221 plans) |
| teach/page.tsx | No town-level browsing or filtering | HIGH | State list only | Filterable town grid (grade band + confidence) |
| teacher/page.tsx | No "30-second decision" layout | HIGH | Buried meta, no at-a-glance row | Hero → at-a-glance band → sources → downloads → graph links → connected towns |
| teacher/page.tsx | Download buttons linked but no clarity | MED | One "Print Full Packet" CTA | Three labeled downloads: Student Packet / Teacher Guide / Quiz |
| PrimarySourcePackets | No URLs on any of 29 packets | HIGH | 0 of 29 have URLs | Flagged in report; no URL check possible; added to review queue |
| Standards codes | 46 truncated codes missing CCSS prefix | MED | "RH.9-10.1" in DB | Flagged; TeacherGuide marks truncated codes with △ |
| Standards codes | State-level codes unverifiable | MED | Inline strings | TeacherGuide marks PENDING codes with note |
| Student packet | No dedicated component | HIGH | None | StudentPacket.tsx — cover, sources, analysis prompts, writing page |
| Teacher guide | No answer key component | HIGH | None | TeacherGuide.tsx — answer key, discussion notes, differentiation, standards, rubric |
| Print CSS | Basic @media print only | MED | Generic body/h rules | Full teacher packet print block: B&W, 12pt min, facsimile contrast, page breaks |
| Muster linkage | No field-trip materials on muster pages | MED | Not implemented | FieldTripModule.tsx — MusterStop→Place→Town→LessonPlan, no schema change |
| Confidence labels | Color-only in existing code | HIGH (a11y) | CSS color only | Icons (✓ ◎ △ ?) carry meaning; labels work in B&W |
| needsReview field | LessonPlan model lacks needsReview | MED | Not present | Recommended schema migration; issues logged here instead |

---

## Source Verification Numbers

| Metric | Count |
|---|---|
| LessonPlans audited | 221 |
| PrimarySourcePackets audited | 29 |
| Packets with URLs | 0 (all 29 have no URL) |
| Sources (Source table) with URLs | 736 of 1,226 |
| Sources linked to PrimarySourcePackets | 0 (no sourceId set on any packet) |
| Standards codes examined | 269 unique |
| Standards codes classified VERIFIED (CCSS + C3) | 223 |
| Standards codes classified TRUNCATED_PREFIX | 46 |
| Standards codes classified PENDING | 0 |
| Plans with potential inline quotes (see note) | 221 — ALL plans flagged |
| Quotes removed | 0 — quote detection was too broad (see note) |

**Note on quote detection:** The audit script flagged all 221 plans for "inline quotes" but inspection reveals these are instructional language ("Ask students to…", "Read the opening of…") not transcribed historical quotes. No historical text was fabricated or paraphrased. The lesson content uses indirect references ("the Declaration of Independence") rather than direct quotation. No quotes were removed. Manual review is recommended for any direct transcriptions added in future.

---

## Review Queue — Items Entering needsReview Status

Since LessonPlan has no `needsReview` field (see schema note), these are logged for manual review:

| Item | Why Flagged | Count |
|---|---|---|
| PrimarySourcePackets with no URL | Teacher cannot verify source; student cannot look it up | 29 packets across 9 MA towns |
| Truncated CCSS codes (missing `CCSS.ELA-LITERACY.` prefix) | Likely real codes but will fail lookup by code | 46 codes across 61 plans, primarily NJ towns |
| Template-generated lessons | Flagged with "Template-Generated · Needs Review" badge on teacher page | All 92 towns (content source = generated) |
| State standards codes | Cannot confirm against state curriculum framework | "Massachusetts History & Social Science: USI.T4" and similar |

**Priority action:** Add URLs to the 29 PrimarySourcePackets. These are real documents (Depositions of the Lexington Militia, Amos Barrett's Account, etc.) — all have known archival homes. Suggested sources: American Antiquarian Society, Founders Online, NPS Digital Collections.

---

## Standards Verification List

### VERIFIED (CCSS.ELA-LITERACY.RH series)
All `CCSS.ELA-LITERACY.RH.6-8.*` and `CCSS.ELA-LITERACY.RH.9-10.*` and `CCSS.ELA-LITERACY.RH.11-12.*` codes — verified patterns against published CCSS framework. Also all `CCSS.ELA-LITERACY.WHST.*` codes.

### VERIFIED (C3 Framework)
All `D2.His.*`, `D2.Civ.*`, `D2.Geo.*`, `D2.Eco.*` codes — verified patterns against published C3 Framework for Social Studies.

### VERIFIED (AP)
`AP US History Period 3` — real designation.

### TRUNCATED — Needs Prefix Added (46 codes)
Codes like `RH.9-10.1`, `WHST.6-8.1`, `RST.6-8.7` etc. are real CCSS codes with the `CCSS.ELA-LITERACY.` prefix stripped. These appear primarily in NJ town lesson plans (Hackensack, Trenton, Princeton, Elizabeth, Monmouth). Add the full prefix to make them machine-readable. The TeacherGuide component displays a △ warning and "Aligned to history standards — verification pending" note for these.

### STATE STANDARDS — Pending
- `Massachusetts History & Social Science: USI.T4 (The American Revolution)` — plausible but needs verification against current MA Curriculum Framework.
- `Massachusetts History & Social Science: USI.T4, AP US History Period 3` — same.

---

## Three Packets to Show a Teacher First

1. **Lexington, MA** — Has the Depositions of the Lexington Militia and the Lieutenant John Barker Diary as source packets. The Observe/Interpret/Corroborate prompts are strongest here because the two sources directly contradict each other on who fired first. Perfect for a lesson on perspective and corroboration. Grades 6–8. (Note: URLs still missing — teacher needs to find sources independently until URLs are added.)

2. **Trenton, NJ** — 5 lesson plans, the most of any town. Covers the Delaware crossing, Hessian forces, and slavery in Revolutionary New Jersey. The multi-plan structure lets a teacher pick the right entry point for their curriculum. The "Template-Generated" badge is accurate — this material needs an editorial pass before high-stakes use.

3. **Concord, MA** — Has the Amos Barrett Account and the Reverend William Emerson Diary. Two eyewitnesses at the North Bridge who noticed different things. Straightforward for an 8th-grade comparative analysis assignment. Grades 6–8.

---

## What's Still Needed (The Honest List)

1. **URLs on all 29 PrimarySourcePackets** — the single most important gap. Until these are added, the source verification claims in the packet are unverifiable by the teacher and by us.

2. **needsReview boolean on LessonPlan** — add to schema so individual plans can be flagged without unpublishing. Suggested: `needsReview Boolean @default(false)` + `needsReviewReason String? @db.Text`.

3. **CCSS prefix fix for 46 truncated codes** — a one-time DB update script. The codes are real, just missing `CCSS.ELA-LITERACY.` prefix.

4. **Transcriptions in PrimarySourcePackets** — the StudentPacket component shows a two-column facsimile/transcription layout. Right now 0 packets have a `transcription` field (the model doesn't have one — it would need to be added or stored in the `teacherNarrative` field). Until transcriptions are present, the component renders a placeholder.

5. **TeacherGuide answer keys** — the component generates default answer-key text based on source type. Town-specific, curator-written answer keys would make these materials significantly more useful.

6. **`/teach/[state-slug]` routes** — the main teach page links to `/teach/massachusetts` etc. but no state-level index pages exist (the original code referenced them; they still need to be built or the links should go directly to the town grid filtered by state).

7. **Print route for quiz only** — the download row has a "Quiz PDF" button pointing to `?mode=quiz` but the print route only handles `mode=teacher` vs student. The quiz-only mode needs to be added to `print/page.tsx`.

8. **Muster field-trip module testing** — the FieldTripModule renders if any muster stop's Place links to a town with lesson plans. This needs a real muster with historical site stops to verify in the browser.

9. **Anthropic API enrichment** — the MORNING-REPORT.md notes API credits are exhausted. 15 draft lessons are template-generated and need AI enrichment before they should be shown to teachers. The "Template-Generated · Needs Review" badge is currently shown for all 92 towns since `meta.contentSource` is set to "generated" for all of them.

---

## Schema Recommendations (no migrations in this branch)

```prisma
// Recommended additions to LessonPlan model:
needsReview        Boolean  @default(false)
needsReviewReason  String?  @db.Text

// Recommended additions to PrimarySourcePacket model:
transcription      String?  @db.Text  // Period spelling preserved
facsimileUrl       String?            // High-res image URL
glossary           Json?              // [{term, definition}]
```

---

*Generated by teach-redesign branch · July 7, 2026*
*Branch: teach-redesign | Commits: 7 | Files changed: 15*
