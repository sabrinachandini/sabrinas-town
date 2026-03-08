---
phase: 9
slug: stripe-pricing
status: draft
nyquist_compliant: true
wave_0_complete: false
created: 2026-03-07
---

# Phase 9 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | next build (TypeScript + server component validation) |
| **Config file** | web/next.config.js |
| **Quick run command** | `grep -n "stripe.prices.retrieve\|FALLBACK_PRICES" web/app/partner/page.tsx` |
| **Full suite command** | `cd /Users/sabrinachandini/sabrinas-town/web && npm run build 2>&1 \| tail -10` |
| **Estimated runtime** | ~60-90 seconds (next build) |

---

## Sampling Rate

- **After every task commit:** Grep for Stripe fetch presence + fallback guard
- **After every plan wave:** `npm run build` from web/
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** ~90 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 09-01-01 | 01 | 1 | STRIPE-01 | integration | `grep -n "stripe.prices.retrieve" web/app/partner/page.tsx` | ✅ | ⬜ pending |
| 09-01-02 | 01 | 1 | STRIPE-01 | build | `cd web && npm run build 2>&1 \| tail -10` | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements — Stripe SDK v20.3.1 already installed, no new packages needed.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Partner page shows live Stripe prices in production | STRIPE-01 | Requires real STRIPE_SECRET_KEY + Price IDs in environment | Visit `/partner` with env vars set; confirm prices match Stripe Dashboard |
| Checkout session uses correct Price ID | STRIPE-01 | Requires real Stripe session creation | Initiate checkout; confirm Price ID in Stripe Dashboard events |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: 2 tasks, both automated
- [x] Wave 0 covers all MISSING references (none needed)
- [x] No watch-mode flags
- [x] Feedback latency < 90s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
