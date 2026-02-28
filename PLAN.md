# Ship Plan — History is for Everyone

## Baseline Summary (Phase 0 ✅)

**Build:** Passes (Next.js 16, React 19, Fastify API backend, Prisma + PostgreSQL)
**Architecture:** Next.js web app fetches town data from Fastify API (`lib/api.ts`). Direct Prisma access only for auth/org/analytics. All Stripe logic proxied to Fastify.

### What exists today:
- **Routes:** Full route tree including `/clusters` (UI: "Big Picture"), `/partner` + `/partner/inquire`, `/teach` + state pages, `/methodology`, `/about`, all town sub-routes
- **Nav:** Header (5 links: Towns, Teach, Big Picture, Partner, About), Town subnav (8 items), Footer
- **Teacher pages:** Two render paths — "editorial" (13 hardcoded towns) vs "classic" (all others). Print route exists. QuizSection client component exists. Lesson detail route exists but `[id]` param is ignored.
- **Stripe:** Schema complete (`OrgSubscription`, `Organization.stripeCustomerId`). Dashboard has checkout/portal buttons that proxy to Fastify. Partner page shows hardcoded prices (Basic/Free, Plus/$99, Pro/$299).
- **Email:** NONE in web app. Inquiry form POSTs to Fastify API. No Resend/SendGrid/SMTP.
- **Clusters → Big Picture:** Already renamed in header nav, footer, and `/clusters` page H1. Cluster detail pages still use "cluster" in body text.
- **"Free" language:** Prominent on `/partner` (Basic tier "Free", "What stays free, always" section) and `/about` ("free public profile").
- **Widget/embed:** Referenced in `/partner` ("Embeddable Widgets Coming Soon"), `/terms` (Embed and API License section), schema (`embedApiKey` field). Not built.
- **Sources:** `/towns/[slug]/sources` route exists but 404s for non-editorial towns. TownSubnav shows "Sources" for ALL towns.
- **Town data:** 75 towns in DB via Fastify API. Only 13 are "editorial" (hardcoded slugs with richer rendering).

### Key gaps:
1. No email sending from web app
2. Pricing is hardcoded, not fetched from Stripe
3. Sources page 404s for ~62 towns
4. Teacher detail page ignores `[id]` param
5. "Free" and widget copy still present
6. Cluster detail pages still say "cluster" in body
7. Most towns lack Boston-level content depth

---

## Phase 1 — Rename Clusters → "Big Picture" in remaining places (Sonnet)

**Already done:** Header nav, footer, `/clusters` H1 all say "Big Picture".
**Still needed:** Cluster detail page body text uses "cluster" in user-facing copy.

### Tasks:
1. Read `/clusters/[slug]/page.tsx` — replace user-facing "cluster" with "Big Picture" or neutral phrasing in headings and descriptions
2. Read `/clusters/page.tsx` — replace any remaining "cluster" references in body text (intro paragraph says "These clusters group towns...")
3. Read town overview pages — check "Part of:" badges for "cluster" wording
4. Keep internal code names (`Cluster` model, `getClusters()`) unchanged — only UI labels change

**Files:** `web/app/clusters/page.tsx`, `web/app/clusters/[slug]/page.tsx`, any town page rendering cluster badges
**Commit:** `design: rename clusters to Big Picture`

---

## Phase 2 — Nav Simplification + Inverse Color Top/Bottom Nav (Sonnet)

**Goal:** Top header and town subnav are visually distinct via inverse colors. Reduce busyness.

### Tasks:
1. **Header** (`web/components/site/Header.tsx`):
   - Keep 5 links: Towns, Big Picture, Teach, Partner, About
   - Apply dark background with light text (inverse of current)
   - Keep active state indicator subtle (underline or border-b)

2. **Town subnav** (`web/components/town/TownSubnav.tsx`):
   - Keep light background, dark text (inverse of header)
   - Reduce visual noise: smaller text (`text-small`), increase horizontal spacing
   - Horizontal scroll on small screens
   - Only underline for active/hover
   - Active-state logic must work for detail pages (e.g., `/people/[id]` highlights "People")

3. **Footer** (`web/components/site/Footer.tsx`):
   - Match header direction (dark bg, light text) for visual bookending

**Files:** `web/components/site/Header.tsx`, `web/components/town/TownSubnav.tsx`, `web/components/site/Footer.tsx`
**Commit:** `design: calm nav + inverse header/subnav`

---

## Phase 3 — Teacher Pages: TPT-Style Template (Sonnet)

**Goal:** Teacher pages feel like Teachers Pay Teachers — structured metadata, preview-first, clear downloads, primary sources listed, print-ready.

### Tasks:

**A. Refactor teacher listing page** (`web/app/towns/[slug]/teacher/page.tsx`):
- Remove the editorial/classic bifurcation — one rendering path for all towns
- Show structured listing: each lesson as a "product" card with title, grade band, duration, "What you'll get" summary
- Each lesson links to `/towns/[slug]/teacher/[lessonId]`
- If town has no teacher modules, show "Teacher materials coming soon" placeholder

**B. Refactor lesson detail page** (`web/app/towns/[slug]/teacher/[id]/page.tsx`):
- Actually use the `[id]` param to fetch a specific lesson
- TPT-style layout:
  - `TeacherProductHeader`: Title, grade band, duration, "What you'll get" bullet list, Download/Print CTA
  - `TeacherProductMeta`: Grade level, subject, standards tags, prep time, materials, skills
  - `PreviewSection`: Styled excerpt of first content section
  - `PrimarySourcesList`: Explicit list (title, publisher, year) with links
  - `DownloadsBlock`: Print-friendly route link, "Print to PDF" instruction
  - `QuizSection`: Already exists, wire it in

**C. Create teacher components** in `web/components/teacher/`:
- `TeacherProductHeader.tsx`
- `TeacherProductMeta.tsx`
- `PreviewSection.tsx`
- `PrimarySourcesList.tsx`
- `DownloadsBlock.tsx`

**D. Print CSS improvements:**
- Consistent heading styles, page breaks, ample whitespace, clear answer lines
- Professional appearance when saved as PDF

**E. Remove `EDITORIAL_SLUGS` gate** from teacher routes — all towns get same rendering

**Files:** `web/app/towns/[slug]/teacher/page.tsx`, `web/app/towns/[slug]/teacher/[id]/page.tsx`, `web/app/towns/[slug]/teacher/print/page.tsx`, new `web/components/teacher/*.tsx`
**Commit:** `feat: teacher pages rebuilt (TPT-style, print + sources + quiz)`

---

## Phase 4 — Inquiry Forms Email sabrina@lexington250.com (Sonnet)

**Current:** Form POSTs to Fastify API. No email sent from web app.

### Tasks:
1. Install Resend SDK (`resend` package)
2. Create API route `web/app/api/partner/inquire/route.ts`:
   - Accept form POST
   - Forward to Fastify API (preserve existing DB persistence)
   - Send email via Resend to `process.env.INQUIRY_TO_EMAIL`
   - Email includes: name, email, title, organization, phone, message, town, timestamp
3. Update `InquiryForm.tsx` to POST to `/api/partner/inquire` instead of directly to Fastify
4. Add env vars to `.env.example`: `INQUIRY_TO_EMAIL`, `RESEND_API_KEY`

**Files:** New `web/app/api/partner/inquire/route.ts`, `web/app/partner/inquire/InquiryForm.tsx`, `.env.example`
**Commit:** `feat: inquiry submissions email to configured address`

---

## Phase 5 — Pricing + Stripe Must Be Correct (Sonnet)

**Current:** Partner page hardcodes Basic/Free, Plus/$99, Pro/$299.

### Tasks:
1. Install `stripe` SDK if not present
2. Create `web/lib/stripe.ts` — server-side Stripe client
3. In `/partner/page.tsx` — fetch Stripe Price objects server-side, render real amounts
4. Graceful fallback if env vars missing (show "Contact us for pricing")
5. Verify checkout creation uses correct Stripe Price ID
6. Add billing status indicator to org dashboard

**Files:** New `web/lib/stripe.ts`, `web/app/partner/page.tsx`, `web/app/org/[slug]/dashboard/page.tsx`
**Commit:** `feat: stripe pricing sourced from Stripe + verified checkout/portal`

---

## Phase 6 — "It Is Never Free" Copy Sweep + No Widget Talk (Sonnet structure, Opus copy)

### Sonnet pass (structural removal):
1. `/partner/page.tsx`: Remove "What stays free, always" section, change Basic from "Free", remove widget feature card, remove "embeddable tools" from copy
2. `/about/page.tsx`: Remove "free public profile", reframe as accessible
3. `/terms/page.tsx`: Remove widget/embed sections
4. Dashboard: Change "Free" label for BASIC tier
5. Global grep for "free" and "widget"/"embed"

### Opus pass:
Rewrite partner/about/homepage copy to frame paid stewardship clearly. Editorial tone.

**Files:** `web/app/partner/page.tsx`, `web/app/about/page.tsx`, `web/app/terms/page.tsx`, `web/app/org/[slug]/dashboard/page.tsx`
**Commit:** `copy: remove free language; remove widget mentions`

---

## Phase 7 — Link Validation (Sonnet)

### Tasks:
1. Create `web/scripts/validateExternalLinks.ts`
2. Add npm script: `"lint:links": "tsx scripts/validateExternalLinks.ts --strict"`
3. Run and fix dead links

**Files:** New `web/scripts/validateExternalLinks.ts`, `web/package.json`
**Commit:** `chore: add external link validation`

---

## Phase 8 — Every Page Must Have Sources Page (Sonnet)

### Tasks:
1. Remove `EDITORIAL_SLUGS` gate from `/towns/[slug]/sources/page.tsx`
2. If town has no sources, show placeholder with methodology link
3. Verify TownSubnav Sources link works for all towns
4. Ensure sources pages link to `/methodology`

**Files:** `web/app/towns/[slug]/sources/page.tsx`
**Commit:** `feat: enforce sources page for all towns`

---

## Phase 9 — Every Town to Boston-Level (Sonnet orchestration + Opus writing)

### Pre-work:
1. Run completeness audit for all 75 towns (people, events, places, teacher lessons, sources, stories)
2. Output gap report

### Implementation:
- Identify content creation API endpoints or create seed scripts via Prisma
- Batch by state/cluster
- Do NOT fabricate quotes — use real historical sources, mark uncertain content "needs verification"
- Validate all external links (Phase 7 script)

**Commit:** `content: raise <state/cluster> towns to Boston-level` (per batch)

---

## Execution Order

```
Phase 1 (Big Picture)  ─┐
Phase 2 (Nav)          ─┤ parallel, independent
Phase 3 (Teacher TPT)  ─┤
Phase 4 (Email)        ─┤
Phase 5 (Stripe)       ─┘
Phase 6 (Copy sweep)   → after 1-5
Phase 8 (Sources)      → after 6
Phase 7 (Link check)   → after 8
Phase 9 (Content)      → after 8, needs API investigation
Final Validation       → after all
```

## Vercel Env Vars Checklist
- `RESEND_API_KEY` — inquiry email sending
- `INQUIRY_TO_EMAIL` — default `sabrina@lexington250.com`
- `STRIPE_SECRET_KEY` — server-side price fetching
- `STRIPE_PRICE_BASIC_MONTHLY`, `STRIPE_PRICE_PLUS_MONTHLY`, `STRIPE_PRICE_PRO_MONTHLY`
- Existing: `API_URL`, `NEXTAUTH_SECRET`, `ADMIN_EMAIL`, `DATABASE_URL`, etc.
