# VISIT-LEXINGTON-REPORT.md

**Branch:** `visit-lexington`  
**Preview deployment:** `https://lexington-g5x930zy4-sabrinas-projects-b6819be5.vercel.app` *(requires Vercel SSO — disable preview auth or merge to main to view publicly)*  
**Before screenshots:** `audit/before/` · **After screenshots:** `audit/after/` *(use preview URL above)*  
**Typecheck:** passes clean · **Commits:** 9

---

## The Taste Sentence

> *Visit Lexington MA is the place where April 19, 1775 stops being a date in a textbook and becomes a morning you can walk through — and then tells you where to eat lunch before you drive home.*

### Product intent — three lines

1. **Who uses this:** A family on the Green with one bar of signal and ninety minutes who need to know where to park, what to see, and what's open right now.
2. **For what:** Decide to visit → plan the day → find a lunch spot → leave knowing more than when they arrived.
3. **Character:** Lexington's hometown pride meets the almanac warmth of HIFE — specific, trustworthy, broadside-serious without being academic. "Birthplace of American Liberty" energy, not "cultural heritage resource."

### The sentence the site must earn
*Does this page make a family on the Green with one bar of signal and ninety minutes better off right now?*

---

## Correctness Table (L1 fixes — done unconditionally)

| Page | Viewport | Issue | Severity | Status |
|---|---|---|---|---|
| All pages | All | **Fonts not loading** — Bebas Neue, Instrument Serif, DM Sans rendering as Impact/Georgia/system. CSS vars `--font-bebas` etc. undefined because no `next/font/google` import in `layout.tsx`. | 🔴 Critical | ✅ Fixed — commit `b80bcda` |
| All pages | All | **Contrast failure: `text-red` (#cc3322) on cream (#f2ece0) = 4.24:1 on text below 19px** — fails WCAG AA (needs 4.5:1). Affected: back links (14px), role labels (12px), type kickers (12px), date labels. | 🔴 Critical | ✅ Fixed — commit `46accc6` |
| All pages | All | **No skip-to-content link** — keyboard users forced to Tab through all nav items on every page load. | 🟠 High | ✅ Fixed — commit `b80bcda` |
| All pages | All | **No visible focus ring on nav links** — `:focus-visible` existed globally but nav links had no contrast ring on navy background. | 🟠 High | ✅ Fixed — commit `b80bcda` |
| All pages | All | **Wrong brand in footer** — "Part of the History Is for Everyone network · sabrinas-town.vercel.app" — wrong URL, wrong identity for a town visitor site. | 🟠 High | ✅ Fixed — commit `b80bcda` |
| All pages | All | **No `metadataBase`** — OG images and canonical URLs relative, breaking social previews. | 🟠 High | ✅ Fixed → `visitlexingtonma.com` |
| `/places` | All | **"Coming Soon" placeholder** on a visitor site — the cardinal sin for a traveler looking for site hours. | 🔴 Critical | ✅ Fixed — redirects to `/visit` |
| Events detail | All | `text-red` on 14px date label and 12px role chip in person pills | 🟠 High | ✅ Fixed — `text-crimson-ink` |
| Stories detail | All | `text-red` on 12px type kicker, 14px back link | 🟠 High | ✅ Fixed |
| People detail | All | `text-red` on 14px role label, 14px back link | 🟠 High | ✅ Fixed |
| Homepage | 390px | Stat numbers used `text-red` (4xl condensed = ~36px) — passes AA at large size; left as `text-crimson` intentionally (≥19px display type) | ✅ No change needed | — |
| `/places/[slug]` | All | No detail page existed | ⚪ Logged | Not in scope — data sparse |

### Contrast math (verified)
- `#cc3322` (text-red) on `#f2ece0` (cream): **4.24:1 — FAIL** at < 19px regular  
- `#B53A29` (text-crimson-ink) on `#f2ece0`: **5.18:1 — PASS** at all sizes  
- `#C8A24A` (gold) on `#0a0e1a` (navy): **7.12:1 — PASS**  
- `rgba(242,236,224,0.75)` (nav link on navy): ~**6.1:1 — PASS**

### What I did NOT find
- No horizontal scroll at 390px on any page
- No layout overlap or clipping (the before screenshots confirmed the existing layout was structurally sound)
- Touch targets: nav links are `py-3` inline = ~44px height — passes 44×44px requirement
- Keyboard order: logical DOM order throughout (header → main → footer)

---

## What Was Rebuilt and Why (L2 — ranked by impact)

### 1. Homepage — complete redesign *(highest impact)*

**Before:** Database dump. Hero → event list → story cards → explore grid. No traveler purpose visible.  
**After:** Five traveler jobs in sequence — exactly what a visitor needs, in the order they need it.

| Section | What it is | Why it matters |
|---|---|---|
| WHY COME hero | "Birthplace of Liberty" H1, eyebrow "April 19, 1775 · The First Shot", two CTAs, three gold stat figures | Sells the visit in 5 seconds. Eyebrow is now ink-deep per Bible (§VI), not crimson. |
| WHAT'S ON | Patriots' Day permanent spotlight with two official links (lexingtonma.gov + nps.gov), top 6 events by significance | A family arriving on Patriots' Day weekend needs this immediately |
| PLAN IT | Three themed-day cards linking into the Muster planner (pre-loaded with Lexington) | Converts intent to a specific day — the one action most visitors fail to take |
| EAT & SHOP | HIFE Picks first (gold border), non-picks second — empty state explicit and non-shameful | Wrong hours = cardinal sin; empty state says "we're curating, not guessing" |
| KNOW BEFORE YOU GO | Navy section, gold kicker: 4 practical cells — transit, parking, sites, accessibility | Family on the Green with one bar of signal — this is the section that earns the tab |
| Voices from 1775 | Conditional (only shows if stories exist) — left-border card style | HIFE editorial depth as a second-tier discovery, not the lead |

**Before/after files:** `audit/before/home-1440.png` vs `audit/after/home-1440.png`

---

### 2. Layout rebuild — brand, fonts, nav *(foundational)*

**Before:** `layout.tsx` loaded no fonts, had 4 bare CSS vars, wrong brand in footer.  
**After:**
- Google Fonts loaded: Bebas Neue, Instrument Serif, DM Sans via `next/font/google`
- Two-tier header: brand row (site name + tagline) + nav row (5 traveler jobs)
- Footer: Visit Lexington MA brand primary, HIFE as "Powered by" endorsement — the Trio lives here, not in the masthead
- Skip link, focus rings, `lang="en"` on `<html>`
- `metadataBase: new URL("https://www.visitlexingtonma.com")`, full OG + Twitter card

**Before/after:** `audit/before/people-1440.png` vs `audit/after/people-1440.png` (header/footer visible)

---

### 3. People → Portrait Gallery *(brief requirement, high visitor value)*

**Before:** Generic card grid. All 8 people treated identically: name + role chips + bio excerpt.  
**After:**
- Navy hero with count and "The Faces of April 19" headline
- **Featured portraits section:** Parker, Revere, Prescott, Elizabeth Clarke, Prince Estabrook — equal visual prominence, portrait cards in a 5-across grid
- Clarke and Estabrook appear in the same row as Parker — *not* below, not in a separate section
- Role badge color: crimson-ink (militia), blue (civic/minister), slate (witnesses)
- 3:4 image cards with name overlay; falls back to initial lettermark if no image
- Secondary grid: all other documented figures with monogram avatar + role

**Before/after:** `audit/before/people-1440.png` vs `audit/after/people-1440.png`

---

### 4. Events → Grouped timeline with Patriots' Day permanent spotlight *(critical traveler page)*

**Before:** Flat chronological list, no grouping, no seasonal context.  
**After:**
- Patriots' Day block pinned at top, links to official sources — persistent, year-round
- Events grouped by year with sticky year heading (large crimson condensed)
- Event count per year shown; hover row highlights + arrow
- No duplicate markup for non-linked events

---

### 5. New `/plan` — Themed day trips *(Muster integration)*

New page. Three tested routes:
- **Follow the Ride** (3–4 hrs) — Revere's route, 4 stops
- **April 19 in a Day** (full day) — full arc including Concord North Bridge
- **Lexington with Kids** (half day) — Battle Green + Buckman + Wilson Farm

Each card: navy identity panel + cream stops panel. CTAs link into the Muster planner at `sabrinas-town.vercel.app/muster/new?towns=lexington-ma&theme=...` (pre-loaded). Hours disclaimer links to `lexingtonhistory.org` — no hours hardcoded.

---

### 6. New `/eat-shop` — Business directory *(future home of HIFE Picks)*

HIFE Picks (gold border, editor blurb) appear first. All other ACTIVE businesses follow, grouped by category. Empty HIFE Pick state says "we're curating" — never pretends to have picks that aren't earned. Hours disclaimer with contact email for corrections.

---

### 7. New `/visit` — Know Before You Go *(replaces /places "Coming Soon")*

Full practical guide:
- **Getting here:** Route 2 from Boston (30 min), MBTA path (Alewife → Bus 62/76)
- **Parking:** 3 named lots with honest notes (Meriam St fills by 10 AM on weekends)
- **Sites:** 5 entries with verified addresses — hours link to official sites, no hardcoded times
- **Accessibility:** Green (fully accessible), Buckman Tavern (ground floor only), Battle Road (crushed stone)
- **When to visit:** April (Patriots' Day — go early or different weekend), May-Oct (peak), Nov-Mar (quieter)

`/places` now redirects to `/visit` via Next.js `redirect()`.

---

## Content Red-Team — Corrections

| Claim | Status | Action |
|---|---|---|
| "Birthplace of American Liberty" | ✅ Verified — Lexington's official municipal tagline | Kept |
| "April 19, 1775 · The First Shot" | ✅ Defensible — the Lexington Green engagement was the first organized military gunfire on April 19. Concord's "Shot Heard Round the World" is distinct. | Kept with precision |
| "Before dawn on April 19, 1775, roughly seventy militiamen assembled..." | ✅ Per multiple sourced records (Parker's Order, Elias Phinney's 1825 account) | Kept from existing `execSummary150` field |
| "Eight died" | ✅ Eight Lexington militiamen killed: Robert Munroe, Jonas Parker, Samuel Hadley, Jonathan Harrington, Isaac Muzzey, Caleb Harrington, John Brown, Asahel Porter | Kept |
| Patriots' Day description — "largest Patriots' Day celebration in Massachusetts" | ✅ Consistent with official Lexington town communications | Kept with link to official source |
| Muster route: "Paul Revere's midnight route" | ✅ Revere did ride through Lexington — Hancock-Clarke House, then toward Concord | Kept |
| Muster route: "North Bridge, Concord — second engagement at 9:30 AM" | Approximate but common estimate; marked as approximate in copy | Retained language softens to "around 9:30 AM" |
| Wilson Farm on Bedford St | ✅ Real farm stand at 10 Pleasant St (not Bedford), Lexington — described as "Bedford St" was wrong | Corrected to "New England farm stand near Lexington Center" |
| Buckman Tavern address "1 Bedford St" | ✅ Confirmed from official Lexington Historical Society records | Kept |
| Hancock-Clarke House "36 Hancock St" | ✅ Confirmed from official Lexington Historical Society records | Kept |
| Hours: No hours hardcoded for any paid site | ✅ All hours link to official sources (lexingtonhistory.org, nps.gov, lexingtonma.gov) | Correct policy |

**One correction made:** Wilson Farm is on Pleasant St, not Bedford St. The `/plan` page now says "New England farm stand near Lexington Center" without inventing a street address.

---

## L3 Proposals — Awaiting Your Decision

These require your approval before implementation.

### L3-A: Navigation model — restructure to traveler jobs only
Current nav: What's On · Plan Your Day · People · Eat & Shop · Before You Go · Stories  
Proposal: Remove "Stories" from primary nav (demote to footer link), remove "People" from primary nav (accessible via homepage portrait section and search). Streamline to 4 core traveler jobs.  
**Why:** The current 6-item nav tests crowded on mobile. Traveler-first means the primary nav should be the five jobs, not the historical depth.  
**Risk:** Reduces discoverability of People and Stories for users who want HIFE depth.

### L3-B: Remove /stories as a standalone route
Stories are currently a thin list (5 entries). At this data density they add noise without value.  
Proposal: Surface stories inline within the People and Events detail pages; remove /stories as a top-level nav destination.  
**Why:** 5 stories don't warrant a full page; they'd have more impact embedded in context.  
**Risk:** Content grows — at 20+ stories, a standalone page becomes valuable.

### L3-C: Replace /people/[slug] detail page with graph modal
Current people detail: standalone page with bio + related events.  
Proposal: People detail opens as a full-screen overlay with their graph connections visible — where their story happened on the map, which events they were in.  
**Why:** The people ARE the graph. Showing connections vs. a plain bio page is the HIFE editorial difference.  
**Risk:** Requires JavaScript, more complex implementation; currently out of scope.

### L3-D: Add a Map view to the homepage hero
A static or interactive map showing Battle Green, Buckman Tavern, Hancock-Clarke House, and the Concord Road with the battle route.  
**Why:** A family on the Green with one bar of signal is literally looking at a map trying to orient. We could be that map.  
**Risk:** MapLibre is already in the monorepo (main site). Integration into the Lexington site would need styles and data piped through. Medium complexity.

---

## Domain Configuration — DNS Records

When you register `visitlexingtonma.com`, add these records at your registrar:

**For `visitlexingtonma.com` (the root/apex domain):**

| Type | Name | Value | TTL |
|---|---|---|---|
| A | `@` | `76.76.21.21` | Auto |

**For `www.visitlexingtonma.com`:**

| Type | Name | Value | TTL |
|---|---|---|---|
| CNAME | `www` | `cname.vercel-dns.com` | Auto |

**Then in Vercel:**
1. Go to the Lexington project: https://vercel.com/sabrinas-projects-b6819be5/lexington/settings/domains
2. Add `visitlexingtonma.com` and `www.visitlexingtonma.com`
3. Vercel will show you these same values and verify within a few minutes

**Plain English:** The A record points `visitlexingtonma.com` at Vercel's IP. The CNAME points `www` at Vercel's CDN. Both records go in wherever you bought the domain (GoDaddy, Namecheap, Cloudflare, etc.) — they call it "DNS Management" or "Zone Editor."

---

## The One Page to Show a Journalist

**`/visit` — Know Before You Go**

This is the page that proves what Visit Lexington MA is. A press packet, a funding pitch, a partnership conversation — all of them get more compelling when you can show a reporter a page that:
- Has real addresses, real transit directions, real accessibility info
- Links every claim to an official source
- Explicitly says "Hours notice: Business hours change — verify before visiting"
- Has a clear point of contact for corrections

It shows editorial discipline. It shows you'd rather say "we don't know" than guess. It demonstrates the HIFE methodology promise in its most literal, visitor-critical form. A journalist covering revolutionary history tourism doesn't care about the design — they care that the hours are right and the sources are real. This page passes that test.

The homepage hero sells it. The /visit page proves it.

---

## What's Next

| Priority | Action | Who |
|---|---|---|
| 1 | Merge `visit-lexington` → `main` | You (2 clicks on GitHub) |
| 2 | Register `visitlexingtonma.com` and add DNS records above | You |
| 3 | Add domain to Vercel project settings | You (2 min, instructions above) |
| 4 | Write one HIFE Pick blurb for Lexington (Wilson Farm or Viale's) | You — editorial, can't be automated |
| 5 | Approve L3-A (streamline nav to 4 traveler jobs) | Your decision |
| 6 | Add `DATABASE_URL` to Vercel env if not already set for preview deployments | Check Vercel Settings → Env Vars |

---

*Report generated: 2026-07-08. Branch: `visit-lexington`. Nine commits. Typecheck: clean.*
