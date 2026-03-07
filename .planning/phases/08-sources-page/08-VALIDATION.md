---
phase: 8
slug: sources-page
status: draft
nyquist_compliant: true
wave_0_complete: false
created: 2026-03-07
---

# Phase 8 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | next build (TypeScript + JSX validation) |
| **Config file** | web/next.config.js |
| **Quick run command** | `grep -n "methodology" web/app/towns/\[slug\]/sources/page.tsx` |
| **Full suite command** | `cd /Users/sabrinachandini/sabrinas-town/web && npx next build 2>&1 \| tail -5` |
| **Estimated runtime** | ~60 seconds (next build) |

---

## Sampling Rate

- **After every task commit:** Run grep check for methodology link presence
- **After every plan wave:** Run `next build` from web/
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** ~60 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 08-01-01 | 01 | 1 | SRC-01 | integration | `grep -n "methodology" web/app/towns/[slug]/sources/page.tsx` | ✅ | ⬜ pending |
| 08-01-02 | 01 | 1 | SRC-01 | build | `cd web && npx next build 2>&1 \| tail -5` | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements — no new test files needed.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| `/towns/[slug]/sources` returns 200 for all 75 towns in production | SRC-01 | Requires production DB access with all 75 towns seeded | `curl -o /dev/null -s -w "%{http_code}" https://site.com/towns/{slug}/sources` for each slug |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: 2 tasks, both automated
- [x] Wave 0 covers all MISSING references (none needed)
- [x] No watch-mode flags
- [x] Feedback latency < 60s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
