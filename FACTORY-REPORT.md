# Town Factory Report

How the "town factory" was built: what got templatized, how Lexington's exact
look was preserved, the status of the two pilots, and what could not be
automated.

## 1. Extraction decisions

The goal was to turn a hand-built town site (Lexington) into a repeatable
factory without changing how Lexington looks. The shared package
`@hife/town-site` holds everything that is genuinely common; each site keeps a
thin per-town layer.

**Templatized into `@hife/town-site`:**
- `TownConfig` (`config/schema.ts`) — the single per-town brand/editorial
  contract. It deliberately contains **no** historical data and **no**
  hours/prices/phones; those are database-sourced or official-source links.
- `TownLayout` — the header/footer shell, markup identical to Lexington's
  original hand-written layout.
- `TownHero` — the navy hero with kicker + stat row, markup identical to
  Lexington's original hero.
- `WhatsOnSection` — the "Key Events" list, markup identical to Lexington's,
  plus a graceful empty state.
- Additional on-brand sections available for richer towns: `PlanItSection`,
  `EatShopSection`, `KnowBeforeSection`, `PeopleGallery`.

**Kept per-site (not templatized):**
- `src/lib/api.ts`, `prisma.ts`, `withTown.ts` — data access, because each
  carries the hardcoded tenant `SLUG` that enforces isolation. These are
  generated per-site by the scaffold with the slug baked in, never shared at
  runtime.
- `town.config.ts` — the editorial layer, one per town.
- The Stories and Explore sections on the home page — they stay inline in each
  `page.tsx` because their copy is town-specific ("Voices from 1775",
  "Explore Concord", the explore-grid descriptions).

### Why the "extra" sections are additions, not retrofits

The original factory spec assumed Lexington had `/plan`, `/eat-shop`, and
`/visit` routes to templatize. It does not. Lexington's real home structure is
**hero + stat row → Key Events → Stories → Explore grid**, and its routes are
`/events`, `/people`, `/stories`, `/places`. So `PlanItSection`,
`EatShopSection`, `KnowBeforeSection`, and `PeopleGallery` were built as
**on-brand, opt-in components available for richer towns** — not forced onto
Lexington. This keeps Lexington pixel-identical while still giving future towns
a fuller toolkit.

## 2. Proof of Lexington pixel-identity

- The shared components reproduce Lexington's original markup class-for-class:
  same `bg-navy text-cream` shell, same `clamp(3.5rem,10vw,7rem)` hero H1, same
  `text-red` stat numbers, same `divide-y divide-border-light` event list.
- `TownHero` intentionally uses the shared `red` accent token (not
  `config.accentColor`) so refactored sites keep the exact existing look;
  `accentColor` is reserved for future per-town theming.
- Lexington's `layout.tsx` and `page.tsx` now render the shared components with
  no visual change.
- `cd sites/lexington && npx tsc --noEmit` **passes**.

## 3. Pilot status

| Town | State | typecheck |
|---|---|---|
| Lexington (reference) | Refactored onto `@hife/town-site` | passes |
| Concord (`concord-ma`) | **Wired** — town.config.ts added, layout+page refactored, dep + transpilePackages added | passes |
| Yorktown (`yorktown-va`) | **Scaffolded** via `create-town-site.ts`, editorial config filled (Siege of Yorktown) | passes |

Both pilots also confirm the graceful empty states: with no database rows they
render "coming soon" copy rather than crashing.

## 4. Automation vs. human

| Automated by `create-town-site.ts` | Requires a human |
|---|---|
| All config/boilerplate: package.json, next/tailwind/tsconfig/postcss, middleware, globals.css, vercel.json | The hero kicker line (the town's defining moment) |
| Data layer with the correct tenant slug baked in (api/prisma/withTown) | Muster theme titles + descriptions (editorial voice) |
| `town.config.ts` skeleton with TODO markers | Transit / parking specifics + the official-source links |
| Home `page.tsx` + `layout.tsx` wired to shared components | Sourcing a licensed, credited hero image |
| Dev-port assignment, best-effort DB probe | Loading/curating the historical database rows |
| Skipping existing files (safe re-runs) | Creating the Vercel project + pointing the domain |

## 5. Delivery estimate (realistic)

- **Mon:** kickoff + scaffold (`create-town-site.ts`, `pnpm install`) — hours.
- **Tue:** fill editorial `town.config.ts` — half a day of writing.
- **Wed:** confirm/load DB content + source a hero image — the real variable.
- **Thu:** local review, typecheck, proofread.
- **Fri:** Vercel project, domain, smoke test, launch.

One week end-to-end is realistic. The mechanical work is minutes; the schedule
is dominated by editorial copy, imagery licensing, and content readiness.

## 6. What resisted templatization

- **Editorial copy** — hero kicker, muster theme descriptions, the Stories and
  Explore section wording. This is the town's voice and stays per-site.
- **Transit / parking specifics** — deliberately kept as general guidance that
  links official sources; they must never be hardcoded because they go stale.
- **Hero imagery** — licensing, credit, and framing are human judgment.
- **The hero kicker line** — a single sentence that captures the town's
  defining historical moment; it is the least automatable and most important
  piece of brand editorial.
- **Tenant slug** — intentionally *not* shared at runtime; it is baked into each
  site's data layer so isolation cannot be overridden by a request.
