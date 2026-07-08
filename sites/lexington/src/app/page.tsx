export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { getTown, getPeopleCount, getBusinesses } from "@/lib/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit Lexington MA — Birthplace of American Liberty",
  description:
    "Plan your visit to Lexington, MA. Events, historic sites, restaurants, and everything you need for a day on the Green where the American Revolution began.",
};

export default async function HomePage() {
  const [town, peopleCount, businesses] = await Promise.all([
    getTown(),
    getPeopleCount(),
    getBusinesses(),
  ]);
  if (!town) notFound();

  const topEvents = town.events.slice(0, 6);
  const topStories = town.stories.slice(0, 3);
  const hifePicks = businesses.filter((b) => b.isHifePick).slice(0, 3);
  const allBusinesses = businesses.slice(0, 6);

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────
          1. WHY COME — hero that sells the visit in five seconds
      ──────────────────────────────────────────────────────────────────── */}
      <section aria-label="Welcome to Lexington" className="bg-navy text-cream relative overflow-hidden">
        {/* Watermark year */}
        <div
          aria-hidden="true"
          className="absolute right-0 bottom-0 font-condensed text-[20rem] leading-none text-cream/[0.03] select-none pointer-events-none translate-x-16 translate-y-8"
        >
          1775
        </div>

        <div className="max-w-wide mx-auto px-5 pt-14 pb-16 relative">
          {/* Eyebrow */}
          <div className="inline-block font-ui text-[11px] font-medium tracking-[0.3em] uppercase text-cream bg-crimson px-3 py-1.5 mb-6">
            April 19, 1775 · The First Shot
          </div>

          {/* H1 */}
          <h1 className="font-condensed leading-none uppercase tracking-tight text-[clamp(4rem,12vw,9rem)] mb-4">
            Birthplace<br />
            <span className="text-gold">of Liberty.</span>
          </h1>

          {/* Lede */}
          <p className="font-ui text-base md:text-lg text-cream/75 max-w-xl leading-relaxed mb-10">
            Before dawn on April&nbsp;19, 1775, roughly seventy militiamen assembled on Lexington Green
            to face a British column ten times their size. Eight died. The Revolution began here.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="/visit"
              className="inline-block bg-crimson text-cream font-ui text-sm font-medium tracking-[0.08em] uppercase px-6 py-3 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_rgba(255,255,255,0.15)] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Plan your visit →
            </a>
            <a
              href="/events"
              className="inline-block border border-cream/30 text-cream font-ui text-sm tracking-[0.08em] uppercase px-6 py-3 hover:border-gold hover:text-gold transition-colors duration-150"
            >
              What&apos;s on
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-10 border-t border-cream/10 pt-8">
            {[
              { n: town.events.length, label: "Events documented" },
              { n: peopleCount, label: "Historical figures" },
              { n: town.stories.length, label: "First-person accounts" },
            ].map(({ n, label }) => (
              <div key={label}>
                <div className="font-condensed text-5xl text-gold leading-none">{n}</div>
                <div className="font-ui text-[11px] uppercase tracking-[0.2em] text-cream/40 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          2. WHAT'S ON — events, Patriots' Day spotlight
      ──────────────────────────────────────────────────────────────────── */}
      <section aria-label="Events" className="section-border">
        <div className="max-w-wide mx-auto px-5 py-14">
          <div className="flex flex-wrap items-baseline gap-4 justify-between mb-2">
            <h2 className="font-condensed text-[clamp(2rem,5vw,3.5rem)] uppercase leading-tight">
              What&apos;s On
            </h2>
            <a href="/events" className="font-ui text-sm text-crimson-ink hover:underline">
              Full timeline →
            </a>
          </div>

          {/* Patriots' Day seasonal spotlight */}
          <div className="mb-8 p-5 border-l-4 border-crimson bg-paper">
            <div className="font-ui text-[11px] tracking-[0.25em] uppercase text-crimson-ink font-medium mb-1">
              Annual · Third Monday in April
            </div>
            <div className="font-heading text-xl font-medium text-ink mb-1">Patriots&apos; Day in Lexington</div>
            <p className="font-ui text-sm text-slate leading-relaxed">
              The largest Patriots&apos; Day celebration in Massachusetts. The Battle Green reenactment
              begins before dawn; the parade follows Massachusetts Ave to Concord. Plan to arrive by 5:30&nbsp;AM.
            </p>
            <a
              href="https://www.lexingtonma.gov/patriots-day"
              className="inline-block mt-3 font-ui text-xs text-crimson-ink hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Patriots&apos; Day information ↗
            </a>
          </div>

          {/* Event list */}
          {topEvents.length > 0 ? (
            <div className="divide-y divide-[#ddd8ce]">
              {topEvents.map((event) => (
                <a
                  key={event.id}
                  href={event.slug ? `/events/${event.slug}` : "/events"}
                  className="flex gap-5 py-5 group hover:bg-paper -mx-5 px-5 transition-colors"
                >
                  <div className="font-condensed text-crimson text-2xl w-14 shrink-0 tabular-nums pt-0.5">
                    {event.startDate ? new Date(event.startDate).getFullYear() : "—"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-ui font-medium text-ink group-hover:text-crimson transition-colors">
                      {event.name}
                    </div>
                    <p className="font-ui text-sm text-slate mt-0.5 leading-snug line-clamp-2">
                      {event.summary}
                    </p>
                  </div>
                  <div className="text-slate/40 font-condensed text-2xl self-center shrink-0 group-hover:text-crimson/50 transition-colors">
                    →
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="font-ui text-sm text-slate py-8 text-center">
              Events loading — check back soon.
            </p>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          3. PLAN IT — themed day trips via Muster
      ──────────────────────────────────────────────────────────────────── */}
      <section aria-label="Plan your Lexington day" className="section-border bg-paper">
        <div className="max-w-wide mx-auto px-5 py-14">
          <h2 className="font-condensed text-[clamp(2rem,5vw,3.5rem)] uppercase leading-tight mb-2">
            Plan Your Day
          </h2>
          <p className="font-ui text-sm text-slate mb-8 max-w-lg">
            Ninety minutes or a full afternoon — pick a route and go.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                href: "/plan?theme=follow-the-ride",
                label: "Follow the Ride",
                desc: "Paul Revere's midnight route through Lexington, stop by stop.",
                time: "3 hours",
                icon: "🐴",
              },
              {
                href: "/plan?theme=april-19",
                label: "April 19 in a Day",
                desc: "Battle Green at dawn, Buckman Tavern, Concord's North Bridge by noon.",
                time: "Full day",
                icon: "🎯",
              },
              {
                href: "/plan?theme=families",
                label: "Lexington with Kids",
                desc: "The reenactment, the gift shop, Wilson Farm for lunch. Kid-tested.",
                time: "Half day",
                icon: "👨‍👩‍👧",
              },
            ].map((day) => (
              <a
                key={day.href}
                href={day.href}
                className="group p-6 border-2 border-[#ddd8ce] hover:border-crimson bg-cream transition-colors"
              >
                <div className="text-2xl mb-3" aria-hidden="true">{day.icon}</div>
                <div className="font-heading text-lg text-ink group-hover:text-crimson transition-colors mb-1">
                  {day.label}
                </div>
                <p className="font-ui text-sm text-slate leading-snug mb-3">{day.desc}</p>
                <div className="font-ui text-[11px] tracking-[0.15em] uppercase text-gold-ink">
                  {day.time}
                </div>
              </a>
            ))}
          </div>

          <a
            href="/plan"
            className="inline-block bg-navy text-cream font-ui text-sm tracking-[0.08em] uppercase px-6 py-3 hover:bg-ink transition-colors"
          >
            Build your own muster →
          </a>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          4. EAT & SHOP — HIFE picks leading, independents forward
      ──────────────────────────────────────────────────────────────────── */}
      <section aria-label="Eat and shop in Lexington" className="section-border">
        <div className="max-w-wide mx-auto px-5 py-14">
          <div className="flex flex-wrap items-baseline gap-4 justify-between mb-8">
            <h2 className="font-condensed text-[clamp(2rem,5vw,3.5rem)] uppercase leading-tight">
              Eat &amp; Shop
            </h2>
            <a href="/eat-shop" className="font-ui text-sm text-crimson-ink hover:underline">
              Full directory →
            </a>
          </div>

          {hifePicks.length > 0 ? (
            <div className="mb-8">
              <div className="font-ui text-[11px] tracking-[0.25em] uppercase text-gold-ink font-medium mb-4">
                ★ HIFE Picks — editor-selected, independently owned
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {hifePicks.map((b) => (
                  <div key={b.id} className="p-5 border border-gold/30 bg-paper">
                    <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-gold-ink mb-1">
                      ★ HIFE Pick · {b.category.replace(/_/g, " ")}
                    </div>
                    <div className="font-heading text-base text-ink mb-1">{b.name}</div>
                    {b.blurb && (
                      <p className="font-ui text-xs text-slate leading-relaxed">{b.blurb}</p>
                    )}
                    {b.hours && (
                      <div className="font-ui text-xs text-slate/70 mt-2">{b.hours}</div>
                    )}
                    {b.website && (
                      <a
                        href={b.website}
                        className="inline-block mt-2 font-ui text-xs text-crimson-ink hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website ↗
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mb-8 p-6 border border-[#ddd8ce] bg-paper text-center">
              <div className="font-ui text-sm text-slate">
                HIFE Picks for Lexington are being curated.
              </div>
              <a href="/eat-shop" className="font-ui text-xs text-crimson-ink hover:underline mt-2 inline-block">
                See all Lexington businesses →
              </a>
            </div>
          )}

          {allBusinesses.length > 0 && hifePicks.length < allBusinesses.length && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {allBusinesses.filter((b) => !b.isHifePick).slice(0, 3).map((b) => (
                <div key={b.id} className="p-4 border border-[#ddd8ce] hover:border-slate transition-colors">
                  <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-slate mb-0.5">
                    {b.category.replace(/_/g, " ")}
                  </div>
                  <div className="font-ui text-sm font-medium text-ink">{b.name}</div>
                  {b.hours && (
                    <div className="font-ui text-xs text-slate mt-1">{b.hours}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          5. KNOW BEFORE YOU GO — practical info
      ──────────────────────────────────────────────────────────────────── */}
      <section aria-label="Know before you go" className="section-border bg-ink text-cream">
        <div className="max-w-wide mx-auto px-5 py-14">
          <h2 className="font-condensed text-[clamp(2rem,5vw,3.5rem)] uppercase leading-tight mb-8 text-gold">
            Before You Go
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Getting here",
                lines: [
                  "30 min from Boston via Rte 2",
                  "MBTA: Alewife → Bus 62 or 76",
                  "Drop-off on Massachusetts Ave",
                ],
              },
              {
                label: "Parking",
                lines: [
                  "Meriam St lot (free, near Green)",
                  "Depot Square lot off Fletcher Ave",
                  "Massachusetts Ave street parking",
                ],
              },
              {
                label: "The sites",
                lines: [
                  "Battle Green: open 24/7, free",
                  "Buckman Tavern: seasonal hours",
                  "Minute Man NHP: nps.gov/mima",
                ],
              },
              {
                label: "Accessibility",
                lines: [
                  "Battle Green: paved, flat",
                  "Taverns: limited step access",
                  "Visitor Center: fully accessible",
                ],
              },
            ].map((card) => (
              <div key={card.label}>
                <div className="font-ui text-[11px] tracking-[0.25em] uppercase text-gold font-medium mb-3">
                  {card.label}
                </div>
                <ul className="space-y-1.5">
                  {card.lines.map((line) => (
                    <li key={line} className="font-ui text-sm text-cream/70 leading-snug">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-cream/10">
            <a
              href="/visit"
              className="inline-block border border-cream/30 text-cream font-ui text-sm tracking-[0.08em] uppercase px-6 py-3 hover:border-gold hover:text-gold transition-colors"
            >
              Full visitor guide →
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          Voices from 1775 (stories) — HIFE editorial depth
      ──────────────────────────────────────────────────────────────────── */}
      {topStories.length > 0 && (
        <section aria-label="First-person accounts" className="section-border">
          <div className="max-w-wide mx-auto px-5 py-14">
            <div className="flex flex-wrap items-baseline gap-4 justify-between mb-8">
              <h2 className="font-condensed text-[clamp(2rem,5vw,3.5rem)] uppercase leading-tight">
                Voices from 1775
              </h2>
              <a href="/stories" className="font-ui text-sm text-crimson-ink hover:underline">
                All accounts →
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {topStories.map((story) => (
                <a
                  key={story.id}
                  href={story.slug ? `/stories/${story.slug}` : "/stories"}
                  className="group p-6 border-l-4 border-[#ddd8ce] hover:border-crimson bg-paper transition-colors"
                >
                  <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-crimson-ink mb-2">
                    {story.storyType === "HISTORICAL_VOICE" ? "Historical Voice" : "Modern Voice"}
                  </div>
                  <div className="font-heading text-base text-ink group-hover:text-crimson transition-colors leading-snug">
                    {story.title}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
