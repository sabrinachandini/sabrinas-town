# Town Delivery Runbook

A Monday-to-Friday guide to launching a new branded town site on the History
Is for Everyone (HIFE) network. Written for the town partner and the HIFE
operator working together. No engineering background required.

## The deal in one sentence

**The town supplies its brand, editorial voice, and local know-how. HIFE
supplies the history, the software, the hosting, and keeps every town's data
walled off from every other town's.**

## Who provides what

| The TOWN provides | HIFE handles |
|---|---|
| Brand: name, tagline, accent color, hero image | The shared component library (`@hife/town-site`) |
| Editorial config (`town.config.ts`): hero kicker line, featured event + month, "plan it" muster themes | Historical data — people, events, stories — in the shared database |
| Business picks (favorite shops/eats to feature, if used) | Tenant isolation so no town can read another town's data |
| Transit / parking **guidance** (general, plus links to official sources) | Hosting, deploys, and the `create-town-site` scaffold generator |
| A properly licensed + credited hero image | Accessibility-audited, pixel-consistent page shell |

## The golden rule

**Never hardcode hours, admission prices, transit schedules, or phone numbers.**
These change and go stale. Always link to the official source (the National
Park unit, the town visitor bureau, the transit authority). The config fields
`transitInfo`, `parkingInfo`, and `accessibilityNotes` are written as *general
guidance that points people to official sources* — keep them that way.

## Historical facts

Never invent historical facts, quotes, dates, or attributions. Historical
content lives in the shared database and is curated/verified separately. The
town's job is brand and visitor editorial, not writing history.

---

## The week

### Monday — Kickoff & scaffold
1. Confirm the essentials: town slug (e.g. `concord-ma`), display name, state,
   marketing domain, tagline, accent color, map coordinates.
2. Generate the site scaffold:
   ```bash
   npx tsx scripts/create-town-site.ts \
     --slug concord-ma --name Concord --state MA \
     --domain visitconcordma.com \
     --tagline "The Shot Heard Round the World" \
     --accent "--green" --lat 42.4604 --lng -71.3489
   ```
   (Dev port is auto-assigned from 3003; pass `--port` to override.)
3. `pnpm install` to link the new workspace.

### Tuesday — Editorial config
Fill in `sites/<slug>/src/lib/town.config.ts`. The checklist:
- [ ] `heroKicker` — the one defining-moment line (e.g. "April 19, 1775 · The North Bridge")
- [ ] `featuredEventName` + `featuredEventMonth` (1–12)
- [ ] `musterThemes` — 3 "plan it" themes (title, description, theme slug, emoji icon)
- [ ] `transitInfo` — primary mode + alternatives (link official schedules, don't hardcode times)
- [ ] `parkingInfo` — general guidance, no rates
- [ ] `accessibilityNotes` — point visitors to the official up-to-date source
- [ ] `heroImageAlt` — accessible description of the hero image
- [ ] `featuredPeopleSlugs` — optional ordering hints for the People gallery

### Wednesday — Content & imagery
1. Confirm the town's historical rows exist in the shared database (people,
   events, stories). If empty, the pages show graceful "coming soon" states —
   coordinate with HIFE to load content.
2. Drop a licensed, credited hero image into `sites/<slug>/public/`
   (see `public/README.md`).
3. If featuring businesses, collect the town's picks.

### Thursday — Review & verify
1. Typecheck: `cd sites/<slug> && npx tsc --noEmit` (must pass).
2. Run locally: `pnpm --filter <slug> dev` and click through the home page,
   events, people, stories, and places.
3. Proofread all editorial copy. Re-confirm nothing time-sensitive is hardcoded.

### Friday — Deploy
1. Create a Vercel project pointed at `sites/<slug>/` as the Root Directory.
2. Point the marketing domain at the Vercel project.
3. Smoke-test the live site. Announce.

---

## Fill-in checklist (quick reference)

```
[ ] town.config.ts: slug, name, state, fullName, tagline, domain, coordinates
[ ] town.config.ts: heroKicker, featuredEventName, featuredEventMonth
[ ] town.config.ts: musterThemes (x3), transitInfo, parkingInfo, accessibilityNotes
[ ] hero image in public/ (licensed + credited)
[ ] database rows: people / events / stories for the slug
[ ] npx tsc --noEmit passes
[ ] Vercel project created, Root Directory = sites/<slug>/
[ ] domain pointed, live smoke test done
```

Realistic pace: a motivated town + operator can go from kickoff to live in a
single week. The scaffold and shared components are minutes of work; the real
time goes into editorial copy, sourcing a good hero image, and confirming the
historical content is in place.
