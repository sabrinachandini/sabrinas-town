# Roadmap: History is for Everyone — sabrinas-town

## Overview

Phases build on the existing v1.1 foundation (75 towns, API, admin, analytics, embed). Work proceeds from design/copy improvements through to feature completeness for tourism orgs.

## Phases

- [x] **Phase 1: Rename Clusters → Big Picture** - Update user-facing copy in cluster detail pages
- [x] **Phase 2: Nav Simplification + Inverse Nav** - Dark header/footer, light town subnav
- [x] **Phase 3: About Page — HIFE Brand** - Rebuilt /about with brand blue/red accents, red section markers, HIFE voice (completed 2026-03-04)
- [x] **Phase 4: Homepage Restructure (tourist-first)** - Hero rewrite for tourist CTA, featured towns section, browse-by-state strip (completed 2026-03-04)
- [ ] **Phase 5: Teacher Pages — TPT Style** - TPT-style lesson listing and detail; remove editorial/classic bifurcation
- [ ] **Phase 6: Inquiry Email** - Resend integration; partner inquiries emailed to sabrina@lexington250.com
- [ ] **Phase 7: Copy Sweep** - Remove "free" language, remove widget references, update partner/about/homepage copy
- [ ] **Phase 8: Sources Page for All Towns** - Remove EDITORIAL_SLUGS gate from sources route
- [ ] **Phase 9: Stripe Pricing** - Fetch real Stripe Price objects server-side; verified checkout/portal

## Phase Details

### Phase 5: Teacher Pages — TPT Style
**Goal**: Teacher pages feel like Teachers Pay Teachers — structured metadata, preview-first, clear downloads, primary sources listed, print-ready. All towns get the same rendering path (no editorial/classic bifurcation).
**Depends on**: Phase 4
**Requirements**: TPT-01, TPT-02, TPT-03, TPT-04, TPT-05
**Success Criteria**:
  1. `/towns/[slug]/teacher` shows a structured lesson listing for all towns (no EDITORIAL_SLUGS gate)
  2. `/towns/[slug]/teacher/[id]` renders TPT-style with TeacherProductHeader, TeacherProductMeta, PreviewSection, PrimarySourcesList, DownloadsBlock, QuizSection
  3. Print route produces clean PDF-ready output
  4. `next build` exits 0, TypeScript 0 errors

### Phase 6: Inquiry Email
**Goal**: Partner inquiry form submissions are emailed to sabrina@lexington250.com via Resend
**Depends on**: Phase 5
**Requirements**: EMAIL-01
**Success Criteria**:
  1. Submitting partner inquiry form sends email to configured address
  2. `RESEND_API_KEY` and `INQUIRY_TO_EMAIL` env vars documented in .env.example

### Phase 7: Copy Sweep
**Goal**: No "free" language or widget/embed mentions anywhere on the site; partner/about copy reframed
**Depends on**: Phase 5
**Requirements**: COPY-01
**Success Criteria**:
  1. grep for "free" in user-facing copy returns 0 results on partner/about pages
  2. No widget or embed references in partner copy

### Phase 8: Sources Page for All Towns
**Goal**: Every town has a working /sources page (no 404 for non-editorial towns)
**Depends on**: Phase 7
**Requirements**: SRC-01
**Success Criteria**:
  1. /towns/[slug]/sources returns 200 for all 75 towns
  2. Towns with no sources show placeholder with methodology link

### Phase 9: Stripe Pricing
**Goal**: Partner page shows real Stripe Price objects; checkout flow verified end-to-end
**Depends on**: Phase 7
**Requirements**: STRIPE-01
**Success Criteria**:
  1. Partner page prices fetched from Stripe (not hardcoded)
  2. Graceful fallback if STRIPE_SECRET_KEY missing
  3. Checkout creation uses correct Stripe Price IDs
