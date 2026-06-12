# Red-Team Audit Report — History Is For Everyone (HIFE)

**Date:** June 11, 2026  
**Branch:** `redteam-cleanup`  
**Auditor:** Claude Sonnet 4.6 (automated red-team pass)

---

## What This Site Is (Plain English)

**Stack:** Next.js 16 (React 19), TypeScript, Tailwind CSS, Prisma (database), NextAuth (logins), Stripe (payments), MapLibre (maps), Sentry (error tracking).

**Pages audited:** 75+ routes including the homepage, every town page, map, Muster road-trip planner, teacher resources (17 states), people, places, events, org dashboard, admin, partner inquiry, changelog, about, search, and embed widgets.

**To run the site locally:**
```bash
pnpm --filter hife dev
# Then open http://localhost:3000
```

---

## Section 1 — What Was Broken and What I Fixed

### 🔴 CRITICAL: Next.js Had Multiple Security Holes (FIXED)

**What it was:** You were running Next.js 16.2.4, which had 15+ published security vulnerabilities. The two worst ones:

- **SSRF via WebSocket** (CVSS 8.6 — very bad): An attacker could trick your server into making requests to internal services it shouldn't be able to reach.
- **Middleware bypass via dynamic routes** (CVSS 8.1 — very bad): An attacker could get around your authentication middleware and access protected pages without logging in.

Other issues included multiple ways to cause denial-of-service (crashing the site), cache poisoning (serving wrong content), and CSRF attacks.

**What I did:** Upgraded Next.js from 16.2.4 → **16.2.9** (the latest stable release). Also updated `eslint-config-next` to match.

**Commit:** `62eaad1`

---

### 🔴 Build Was Silently Broken (FIXED)

**What it was:** Running `pnpm build` locally produced a TypeScript error that would fail the build. The `@hife/ui` shared component package imports from `next/image` and `next/link`, but `next` wasn't listed as a dev dependency in that package — so the TypeScript checker couldn't find those types.

This worked on Vercel (which resolves packages differently) but failed locally, meaning you couldn't reliably verify your code before pushing.

**What I did:** Added `next` as a dev dependency in `packages/ui/package.json`.

**Commit:** `62eaad1`

---

### 🟠 `@hife/content` Missing from transpilePackages (FIXED)

**What it was:** `next.config.ts` only listed `@hife/ui` in `transpilePackages`, but your own `CLAUDE.md` documentation says both `@hife/ui` **and** `@hife/content` must be there. Without it, the `@hife/content` package could fail to compile on Vercel in certain configurations.

**What I did:** Added `"@hife/content"` to the `transpilePackages` array.

**Commit:** `4dc19bb`

---

### 🟠 Keyboard Users Couldn't Skip Past the Navigation (FIXED)

**What it was:** The site has a tall sticky navigation bar. Keyboard users (who navigate with Tab) and screen reader users had to Tab through every single nav link on every page before reaching the actual content. This is a basic accessibility requirement.

**What I did:** Added a "Skip to main content" link that is invisible to mouse users, but appears visually as soon as a keyboard user hits Tab. It jumps them straight to the page content.

**Commit:** `bda6cab`

---

### 🟠 Search Bar Had No Focus Indicator (FIXED)

**What it was:** The town search input on the Towns page had `outline: none` — which actively removes the visual indicator that shows keyboard users where they are on the page. This is an accessibility violation.

**What I did:** Replaced `outline: none` with a visible white outline (matching the dark background the search input sits on).

**Commit:** `bda6cab`

---

### 🟡 HSTS Security Header Missing (FIXED)

**What it was:** Your site already had several good security headers (X-Frame-Options, X-Content-Type-Options, etc.) set in `middleware.ts`. But it was missing **HSTS** (HTTP Strict Transport Security), which tells browsers to always use HTTPS when visiting your site — even if someone types `http://` by accident. Without it, the first visit to your site could theoretically be intercepted.

**What I did:** Added `Strict-Transport-Security` with a 2-year timeout, `includeSubDomains`, and `preload` (which allows you to register with browser preload lists in the future).

**Commit:** `942b1d7`

---

### 🟡 Admin Pages Were Indexable by Google (FIXED)

**What it was:** Your `/admin` pages (inquiries, events) had no `noindex` directive, meaning Google could crawl and index them. While they're protected by authentication, it's better practice not to expose admin URLs publicly.

**What I did:** Added `robots: { index: false }` to the admin layout so search engines skip these pages.

**Commit:** `174282c`

---

### 🟡 Shared Muster Links Had No Preview (FIXED)

**What it was:** When someone shares a Muster road-trip link (e.g. in a text or on social media), the link preview showed the generic site title and description. Each Muster has a name and specific places, so links should show something meaningful like "Paul's Revolutionary Trail" with a description of the stops.

**What I did:** Added a `generateMetadata` function to the Muster detail page that builds a dynamic title and description from the trip's name and historical places.

**Commit:** `174282c`

---

### 🟡 My Musters Page Was Indexable (FIXED)

**What it was:** `/my-musters` is a private page that requires login. It had no metadata and no `noindex`. Google could crawl it and show a blank/useless result.

**What I did:** Added a page title and `noindex` directive.

**Commit:** `174282c`

---

## Section 2 — What I Improved (No Broken Behavior, Just Better)

### Accessibility
- **Focus states:** The global CSS already has a `focus-visible` outline (good!). I reinforced this by fixing the one place that overrode it to `none`.
- **Skip link:** Added accessible skip-to-content navigation.
- **ARIA:** The Header, Footer, and navigation components use `aria-label` appropriately. Town tab navigation uses `<ol>` for ordered sections, which is semantically correct.
- **Alt text:** All `<img>` and `<Image>` tags I inspected have proper alt text. The decorative SVGs use `aria-hidden="true"`.
- **Semantic HTML:** Pages use proper heading order, `<main>`, `<nav>`, `<footer>`, `<header>`, `<blockquote>` — all semantically correct.

### SEO
- **Robots.txt and sitemap:** Already excellent. The sitemap is dynamic and covers all towns, people, and state pages.
- **Structured data:** Already has Organization and WebSite schema in the root layout.
- **Open Graph:** Root layout has OG tags. Most content pages generate dynamic metadata.

### Security Headers (pre-existing, good)
Your middleware already had: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, and `Permissions-Policy`. I added HSTS to complete the set.

### Cron Job Auth
The cron routes (`/api/cron/*`) check for a `CRON_SECRET` bearer token before executing — properly protected.

---

## Section 3 — Things I Found But Did NOT Fix (Need Your Decision)

### 🔴 Remaining Dependency Vulnerabilities (Build Toolchain)

After upgrading Next.js, `npm audit` still reports 6 high-severity packages. **These are all build tools, not code that runs in production.** Specifically:

- `serialize-javascript` (inside `terser-webpack-plugin`): used to minify your JS during build. Fixed in a newer version but updating it requires webpack to update, which is a bigger change.
- `flatted`, `minimatch`, `picomatch`, `fast-uri`: all linting/pattern-matching tools used during development.

**My recommendation:** These are low-risk since they only run on your build machine, not in the browser or on your server. Watch for a future Next.js patch that updates its bundler.

---

### 🟡 Markdown Rendered Without Sanitization in MarkdownBio

In `components/editorial/MarkdownBio.tsx`, text from the database is parsed as Markdown and injected as HTML via `dangerouslySetInnerHTML`. The teacher print page does the same, but uses an `escapeHtml` helper.

**Risk:** If any malicious content ever made it into the database (via the AI enrichment scripts or a compromised admin account), it could be rendered as HTML on the page. Currently the content is only written by your enrichment scripts and the AI — not by users — so the actual risk is low.

**My recommendation:** Consider adding [DOMPurify](https://github.com/cure53/DOMPurify) or similar HTML sanitization in `MarkdownBio.tsx`. It's a 5-line change but I didn't want to add a new dependency without your approval.

---

### 🟡 metadataBase Uses Vercel Preview URL

In `app/layout.tsx`, the `metadataBase` and structured data are set to `https://sabrinas-town.vercel.app`. If you ever get a custom domain (like `hife.org`), you'd need to update all of these references.

**My recommendation:** Move the base URL to an environment variable (`NEXT_PUBLIC_BASE_URL`) so you can change it in one place. Not urgent, but worth doing if a custom domain is in your plans.

---

### 🟡 "middleware" Convention Deprecated

During the build, Next.js 16.2.9 prints a warning:

> `The "middleware" file convention is deprecated. Please use "proxy" instead.`

The `middleware.ts` file works fine today but will eventually stop being supported. This is a small rename but affects your auth redirect logic, so I left it for you to review.

---

### 🟡 Prisma Major Version Update Available

Prisma 5.22 → 7.x is a major upgrade. It works fine as-is, but major upgrades require careful testing with your database schema. This is a significant task for a future sprint.

---

### 🟡 No Content Security Policy (CSP)

The site doesn't have a Content Security Policy header. CSP is an advanced defense against XSS attacks that restricts which scripts, styles, and resources can load. Implementing it on a Next.js site with inline styles, Google Fonts, MapLibre, YouTube, Sentry, and Stripe is genuinely complex — it requires careful tuning to avoid breaking things. I'd suggest this as a Phase 10 task.

---

### 🟡 Logo Images Use `<img>` Not `<Image>`

In `Header.tsx`, the logo is loaded as a plain `<img>` tag (not Next.js's `<Image>` component). This means the logo isn't being automatically optimized, cached, or lazy-loaded by Next.js. Since the logo is above-the-fold on every page, lazy loading isn't important here — but size optimization might help.

**Tradeoff:** Converting logo SVGs to `<Image>` is slightly more complex because SVGs require width/height props. A low-priority improvement.

---

## Section 4 — How to Preview and Merge

### Preview the updated site locally:
```bash
# From the repo root:
pnpm --filter hife dev
# Then open http://localhost:3000
```

### If everything looks good, merge the branch:
```bash
git checkout main
git merge redteam-cleanup
git push origin main
```

Vercel will auto-deploy from `main` as usual. The site will now be running on Next.js 16.2.9 with the security patches applied.

### If something looks wrong:
```bash
# Switch back to main (your original working version):
git checkout main
```

Your original code is safe on `main` — nothing there was changed.

---

## Summary Table

| # | Issue | Severity | Status |
|---|-------|----------|--------|
| 1 | Next.js 16.2.4 with 15+ CVEs incl. SSRF (CVSS 8.6) | 🔴 Critical | ✅ Fixed |
| 2 | Local build silently broken (TypeScript error in @hife/ui) | 🔴 Critical | ✅ Fixed |
| 3 | @hife/content missing from transpilePackages | 🟠 High | ✅ Fixed |
| 4 | No skip-to-content link (accessibility) | 🟠 High | ✅ Fixed |
| 5 | Search input `outline:none` (accessibility) | 🟠 High | ✅ Fixed |
| 6 | HSTS header missing | 🟡 Medium | ✅ Fixed |
| 7 | Admin pages indexable by Google | 🟡 Medium | ✅ Fixed |
| 8 | Shared Muster links had generic title/description | 🟡 Medium | ✅ Fixed |
| 9 | /my-musters page indexable (requires login) | 🟡 Low | ✅ Fixed |
| 10 | Remaining build-toolchain vulnerabilities | 🟡 Medium | ⏳ Needs decision |
| 11 | Markdown injected without HTML sanitization | 🟡 Medium | ⏳ Needs decision |
| 12 | metadataBase hardcoded to Vercel preview URL | 🟡 Low | ⏳ Needs decision |
| 13 | middleware.ts file convention deprecated | 🟡 Low | ⏳ Needs decision |
| 14 | Prisma major version update available | 🟡 Low | ⏳ Future sprint |
| 15 | No Content Security Policy | 🟡 Low | ⏳ Future sprint |
| 16 | Logo images using `<img>` instead of `<Image>` | ⚪ Cosmetic | ⏳ Future |
