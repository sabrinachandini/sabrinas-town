import {
  getTown,
  getTownSources,
  getTownPeople,
} from "@/lib/api";
import { recordOrgEvent } from "@/lib/analytics";
import { ComingSoon } from "@/components/town";
import NextLink from "next/link";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);
  if (!town) return { title: "Town Not Found" };
  return {
    title: `${town.name}, ${town.state} | History Is For Everyone`,
    description: town.execSummary150,
  };
}

export default async function TownOverviewPage({ params }: PageProps) {
  const { slug } = await params;

  const [town, sourcesData, peopleData] = await Promise.all([
    getTown(slug),
    getTownSources(slug),
    getTownPeople(slug),
  ]);

  if (!town) return <ComingSoon slug={slug} />;

  void recordOrgEvent(slug, "TOWN_VIEW");

  const firstParagraph = town.whyMatters.split("\n\n")[0];
  const people = peopleData?.people ?? [];
  const featuredPeople = people.slice(0, 4);
  const featuredPlaces = (town.featuredPlaces ?? []).slice(0, 4);
  const featuredEvents = [...town.events]
    .sort((a, b) => b.significanceWeight - a.significanceWeight)
    .slice(0, 6);
  const featuredStories = town.stories.slice(0, 2);

  const tabs = [
    { label: "Overview",  href: `/towns/${slug}` },
    { label: "History",   href: `/towns/${slug}/history` },
    { label: "Timeline",  href: `/towns/${slug}/timeline` },
    { label: "People",    href: `/towns/${slug}/people` },
    { label: "Places",    href: `/towns/${slug}/places` },
    { label: "Stories",   href: `/towns/${slug}/stories` },
    { label: "Teacher",   href: `/towns/${slug}/teacher` },
    { label: "Sources",   href: `/towns/${slug}/sources` },
  ];

  const lastUpdatedStr = sourcesData?.lastUpdated ?? town.lastUpdatedAt;

  const sidebarLinks = [
    { label: "Timeline",  href: `/towns/${slug}/timeline` },
    { label: "People",    href: `/towns/${slug}/people` },
    { label: "Places",    href: `/towns/${slug}/places` },
    { label: "Stories",   href: `/towns/${slug}/stories` },
    { label: "Teacher",   href: `/towns/${slug}/teacher` },
    { label: "Sources",   href: `/towns/${slug}/sources` },
  ];

  return (
    <div>
      {/* ── Navy Hero ───────────────────────────────────────────── */}
      <div className="bg-[#0a0e1a] min-h-[80vh] flex flex-col justify-between">

        {/* Top area */}
        <div className="pt-8 pb-0 px-8 md:px-16">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-ui text-[0.75rem] text-white/40">
              <li>
                <NextLink href="/" className="no-underline text-white/40 hover:text-white/70 transition-colors">
                  Home
                </NextLink>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <NextLink href="/towns" className="no-underline text-white/40 hover:text-white/70 transition-colors">
                  Towns
                </NextLink>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70">{town.name}</li>
              <li aria-hidden="true">·</li>
              <li>
                <span className="text-[#c8222a] font-ui font-medium">{town.state}</span>
              </li>
            </ol>
          </nav>

          {/* Giant town name */}
          <h1
            className="font-display text-white"
            style={{
              fontSize: "clamp(100px, 14vw, 180px)",
              lineHeight: 0.9,
            }}
          >
            {town.name}
          </h1>

          {/* Tab nav */}
          <nav aria-label="Town sections" className="mt-6">
            <ol className="flex gap-0 overflow-x-auto">
              {tabs.map((tab, i) => {
                const isActive = i === 0;
                return (
                  <li key={tab.label}>
                    <NextLink
                      href={tab.href}
                      className={`no-underline block px-4 py-3 font-ui font-medium text-[0.75rem] uppercase tracking-[0.1em] whitespace-nowrap border-b-2 transition-colors duration-150 ${
                        isActive
                          ? "text-white border-[#c8222a]"
                          : "text-white/50 border-transparent hover:text-white hover:border-white/30"
                      }`}
                    >
                      {tab.label}
                    </NextLink>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>

        {/* Bottom area: intro + quick stats */}
        <div className="grid md:grid-cols-[1fr_auto] gap-16 items-end px-8 md:px-16 pb-10 pt-8">

          {/* Left: intro text */}
          {town.execSummary150 && (
            <p className="font-editorial italic text-white/80 text-[1.1rem] leading-relaxed max-w-[500px]">
              {town.execSummary150}
            </p>
          )}

          {/* Right: quick stats row */}
          <div className="flex items-end gap-0 flex-shrink-0">
            {[
              { value: town.events.length, label: "Events" },
              { value: people.length, label: "People" },
              { value: town.stories.length, label: "Stories" },
              { value: sourcesData?.totalCount ?? 0, label: "Sources" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="px-6 text-right"
                style={{
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.15)" : "none",
                }}
              >
                <p
                  className="font-display text-white"
                  style={{ fontSize: "2.5rem", lineHeight: 1 }}
                >
                  {stat.value}
                </p>
                <p className="font-ui text-white/50 text-[0.65rem] uppercase tracking-[0.1em] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body: cream background ───────────────────────────────── */}
      <div className="bg-[#f2ece0] py-16 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px] grid md:grid-cols-[1fr_260px] gap-16 items-start">

          {/* Main article column */}
          <article className="max-w-[620px]">

            {/* First paragraph with drop cap */}
            <p className="drop-cap font-editorial text-[1.1rem] leading-[1.8] text-[#0e1428] mb-10">
              {firstParagraph}
            </p>

            {/* Featured People */}
            {featuredPeople.length > 0 && (
              <section className="mb-10">
                {/* Section divider */}
                <div className="flex items-center gap-4 my-8">
                  <div className="flex-1 h-px bg-[#0e1428]/10" />
                  <span className="font-display text-[#c8222a] text-[0.85rem] tracking-[0.15em]">PEOPLE</span>
                  <div className="flex-1 h-px bg-[#0e1428]/10" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span />
                  <NextLink
                    href={`/towns/${slug}/people`}
                    className="no-underline font-ui text-[0.7rem] uppercase tracking-[0.08em] text-[#0e1428]/50 hover:text-[#c8222a] transition-colors"
                  >
                    All People &rarr;
                  </NextLink>
                </div>
                <div>
                  {featuredPeople.map((person, i) => (
                    <NextLink
                      key={person.id}
                      href={`/towns/${slug}/people/${person.slug ?? person.id}`}
                      className={`no-underline flex items-center justify-between group py-4 ${
                        i < featuredPeople.length - 1 ? "border-b border-[#0e1428]/8" : ""
                      }`}
                    >
                      <div>
                        <p className="font-editorial text-[1.375rem] text-[#0e1428] group-hover:translate-x-1 transition-transform duration-150">
                          {person.name}
                        </p>
                        <p className="font-ui text-[0.75rem] uppercase tracking-[0.1em] text-[#0e1428]/50 mt-0.5">
                          {person.roles.join(", ")}
                        </p>
                      </div>
                      <span className="text-[#c8222a] ml-4 flex-shrink-0">&rarr;</span>
                    </NextLink>
                  ))}
                </div>
              </section>
            )}

            {/* Featured Events */}
            {featuredEvents.length > 0 && (
              <section className="mb-10">
                <div className="flex items-center gap-4 my-8">
                  <div className="flex-1 h-px bg-[#0e1428]/10" />
                  <span className="font-display text-[#c8222a] text-[0.85rem] tracking-[0.15em]">KEY EVENTS</span>
                  <div className="flex-1 h-px bg-[#0e1428]/10" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span />
                  <NextLink
                    href={`/towns/${slug}/timeline`}
                    className="no-underline font-ui text-[0.7rem] uppercase tracking-[0.08em] text-[#0e1428]/50 hover:text-[#c8222a] transition-colors"
                  >
                    Full Timeline &rarr;
                  </NextLink>
                </div>
                <div>
                  {featuredEvents.map((event, i) => (
                    <NextLink
                      key={event.id}
                      href={`/towns/${slug}/timeline/${event.slug ?? event.id}`}
                      className={`no-underline flex items-center justify-between group py-4 ${
                        i < featuredEvents.length - 1 ? "border-b border-[#0e1428]/8" : ""
                      }`}
                    >
                      <div>
                        <p className="font-editorial text-[1.1rem] text-[#0e1428] group-hover:translate-x-1 transition-transform duration-150">
                          {event.name}
                        </p>
                        {event.startDate && (
                          <p className="font-ui text-[0.75rem] text-[#0e1428]/40 uppercase">
                            {new Date(event.startDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                            })}
                          </p>
                        )}
                      </div>
                      <span className="text-[#c8222a] ml-4 flex-shrink-0">&rarr;</span>
                    </NextLink>
                  ))}
                </div>
              </section>
            )}

            {/* Featured Places */}
            {featuredPlaces.length > 0 && (
              <section className="mb-10">
                <div className="flex items-center gap-4 my-8">
                  <div className="flex-1 h-px bg-[#0e1428]/10" />
                  <span className="font-display text-[#c8222a] text-[0.85rem] tracking-[0.15em]">PLACES TO VISIT</span>
                  <div className="flex-1 h-px bg-[#0e1428]/10" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span />
                  <NextLink
                    href={`/towns/${slug}/places`}
                    className="no-underline font-ui text-[0.7rem] uppercase tracking-[0.08em] text-[#0e1428]/50 hover:text-[#c8222a] transition-colors"
                  >
                    All Places &rarr;
                  </NextLink>
                </div>
                <div>
                  {featuredPlaces.map((place, i) => (
                    <NextLink
                      key={place.id}
                      href={`/towns/${slug}/places/${place.slug ?? place.id}`}
                      className={`no-underline flex items-center justify-between group py-4 ${
                        i < featuredPlaces.length - 1 ? "border-b border-[#0e1428]/8" : ""
                      }`}
                    >
                      <p className="font-editorial text-[1.1rem] text-[#0e1428] group-hover:translate-x-1 transition-transform duration-150">
                        {place.name}
                      </p>
                      <span className="text-[#c8222a] ml-4 flex-shrink-0">&rarr;</span>
                    </NextLink>
                  ))}
                </div>
              </section>
            )}

            {/* Featured Stories */}
            {featuredStories.length > 0 && (
              <section className="mb-10">
                <div className="flex items-center gap-4 my-8">
                  <div className="flex-1 h-px bg-[#0e1428]/10" />
                  <span className="font-display text-[#c8222a] text-[0.85rem] tracking-[0.15em]">STORIES</span>
                  <div className="flex-1 h-px bg-[#0e1428]/10" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span />
                  <NextLink
                    href={`/towns/${slug}/stories`}
                    className="no-underline font-ui text-[0.7rem] uppercase tracking-[0.08em] text-[#0e1428]/50 hover:text-[#c8222a] transition-colors"
                  >
                    All Stories &rarr;
                  </NextLink>
                </div>
                <div className="space-y-6">
                  {featuredStories.map((story) => (
                    <NextLink
                      key={story.id}
                      href={`/towns/${slug}/stories/${story.id}`}
                      className="no-underline block group"
                    >
                      <p className="font-ui text-[0.7rem] uppercase tracking-[0.12em] text-[#c8222a] mb-1">
                        {story.storyType.replace(/_/g, " ")}
                      </p>
                      <p className="font-editorial text-[1.625rem] text-[#0e1428] group-hover:text-[#c8222a] transition-colors leading-tight mb-2">
                        {story.title}
                      </p>
                      <p className="font-ui text-[0.875rem] text-[#0e1428]/60 leading-relaxed">
                        {story.excerpt}
                      </p>
                    </NextLink>
                  ))}
                </div>
              </section>
            )}

            {/* Footer links */}
            <div className="pt-6 border-t border-[#0e1428]/10 flex gap-6 font-ui text-[0.8rem] text-[#0e1428]/40">
              <NextLink href={`/changelog?town=${slug}`} className="no-underline hover:text-[#0e1428]/70 transition-colors">
                View changes for this town
              </NextLink>
              <NextLink href={`/partner/inquire?town=${slug}`} className="no-underline hover:text-[#0e1428]/70 transition-colors">
                Inquire about operating this site
              </NextLink>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8 mt-0">

            {/* On This Page */}
            <div>
              <p className="font-display text-[1rem] text-[#0e1428]/40 tracking-[0.15em] uppercase mb-4">
                On This Page
              </p>
              <ul>
                {[
                  { label: "People", id: "people" },
                  { label: "Key Events", id: "events" },
                  { label: "Places", id: "places" },
                  { label: "Stories", id: "stories" },
                ].map((item, i, arr) => (
                  <li key={item.label}>
                    <a
                      href={`#${item.id}`}
                      className={`no-underline block font-ui text-[0.8rem] text-[#0e1428]/70 hover:text-[#c8222a] hover:pl-1 transition-all duration-150 py-2 ${
                        i < arr.length - 1 ? "border-b border-[#0e1428]/8" : ""
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore All Sections */}
            <div>
              <p className="font-display text-[1rem] text-[#0e1428]/40 tracking-[0.15em] uppercase mb-4">
                Explore
              </p>
              <ul>
                {sidebarLinks.map((link, i, arr) => (
                  <li key={link.label}>
                    <NextLink
                      href={link.href}
                      className={`no-underline block font-ui text-[0.8rem] text-[#0e1428]/70 hover:text-[#c8222a] hover:pl-1 transition-all duration-150 py-2 ${
                        i < arr.length - 1 ? "border-b border-[#0e1428]/8" : ""
                      }`}
                    >
                      {link.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Linked / nearby towns */}
            {town.linkedTowns && town.linkedTowns.length > 0 && (
              <div>
                <p className="font-display text-[1rem] text-[#0e1428]/40 tracking-[0.15em] uppercase mb-4">
                  Nearby Towns
                </p>
                <ul>
                  {town.linkedTowns.slice(0, 5).map((linked, i, arr) => (
                    <li key={linked.townId}>
                      <NextLink
                        href={`/towns/${linked.townSlug}`}
                        className={`no-underline block font-ui text-[0.8rem] text-[#0e1428]/70 hover:text-[#c8222a] hover:pl-1 transition-all duration-150 py-2 ${
                          i < arr.length - 1 ? "border-b border-[#0e1428]/8" : ""
                        }`}
                      >
                        {linked.townName}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pull quote */}
            {town.execSummary150 && (
              <blockquote className="border-l-[3px] border-[#c8222a] pl-4 mt-8">
                <p className="font-editorial italic text-[1rem] text-[#0e1428] leading-relaxed">
                  &ldquo;{town.execSummary150.slice(0, 120)}{town.execSummary150.length > 120 ? "\u2026" : ""}&rdquo;
                </p>
              </blockquote>
            )}

            {/* Last Updated */}
            {lastUpdatedStr && (
              <p className="font-ui text-[0.75rem] text-[#0e1428]/40">
                Last updated{" "}
                {new Date(lastUpdatedStr).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
          </aside>
        </div>
      </div>

      {/* ── Full-bleed navy banner ───────────────────────────────── */}
      <section className="bg-[#0a0e1a] py-20 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              History Happened <span className="text-[#c8222a]">Everywhere.</span>
            </p>
            <p className="font-ui font-light text-white/50 text-[0.9rem] mt-3 max-w-[420px]">
              Explore every town where the American Revolution unfolded — sourced, documented, and connected.
            </p>
          </div>
          <a
            href="/towns"
            className="no-underline border border-white text-white font-ui font-medium text-[0.85rem] uppercase tracking-[0.12em] px-8 py-3 hover:bg-[#c8222a] hover:border-[#c8222a] transition-colors whitespace-nowrap"
          >
            Browse All Towns
          </a>
        </div>
      </section>
    </div>
  );
}
