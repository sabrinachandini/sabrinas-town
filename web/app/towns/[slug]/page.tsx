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
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="bg-[#1a3a72] min-h-[72vh] grid grid-cols-1 md:grid-cols-[1fr_340px] border-b-4 border-ink">

        {/* LEFT */}
        <div className="px-8 md:px-16 pt-16 pb-10 flex flex-col justify-between relative overflow-hidden">
          {/* Ghost state abbrev */}
          <div
            className="absolute right-0 top-0 font-display text-white/[0.04] leading-none select-none pointer-events-none"
            style={{ fontSize: "280px" }}
            aria-hidden="true"
          >
            {town.state.slice(0, 2).toUpperCase()}
          </div>

          <div className="relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-ui text-[9px] tracking-[0.2em] uppercase text-cream/30">
                <li>
                  <NextLink href="/" className="no-underline text-cream/30 hover:text-cream/60 transition-colors">
                    Home
                  </NextLink>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <NextLink href="/towns" className="no-underline text-cream/30 hover:text-cream/60 transition-colors">
                    Towns
                  </NextLink>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-cream/60">{town.name}</li>
              </ol>
            </nav>

            {/* Town name */}
            <h1
              className="font-display text-cream leading-[0.88] whitespace-nowrap"
              style={{ fontSize: "clamp(64px, 10vw, 144px)" }}
            >
              {town.name}
            </h1>

            {/* State tilted badge */}
            <div className="inline-block bg-yellow text-ink font-ui text-[9px] font-semibold tracking-[0.22em] uppercase px-3 py-1.5 border-2 border-ink shadow-[2px_2px_0_#14100a] -rotate-1 mt-4">
              {town.state}
            </div>

            {/* Tagline */}
            {town.execSummary150 && (
              <p className="font-editorial italic text-cream/65 text-[18px] mt-6 leading-[1.55] max-w-[480px]">
                {town.execSummary150}
              </p>
            )}
          </div>

          {/* Stats strip */}
          <div className="flex border-t border-cream/10 mt-10 pt-8 relative z-10">
            {[
              { value: town.events.length, label: "Events" },
              { value: people.length, label: "People" },
              { value: town.stories.length, label: "Stories" },
              { value: sourcesData?.totalCount ?? 0, label: "Sources" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`pr-8 mr-8 ${i > 0 ? "border-l border-cream/10 pl-8" : ""}`}
              >
                <div className="font-display text-yellow text-[36px] leading-none">{stat.value}</div>
                <div className="font-ui text-[9px] uppercase tracking-[0.2em] text-cream/35 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Abstract map panel */}
        <div className="bg-[#0a0e1a] border-l-4 border-ink relative overflow-hidden hidden md:block">
          <div className="absolute top-12 left-6 bg-yellow text-ink font-ui text-[9px] font-semibold tracking-[0.22em] uppercase px-3 py-1.5 border-2 border-ink shadow-[2px_2px_0_#14100a] -rotate-[2deg] z-10">
            {town.state}
          </div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 500" fill="none" preserveAspectRatio="xMidYMid slice">
            <path d="M80 80 Q120 160 140 240 Q150 300 170 380" stroke="rgba(58,125,191,0.3)" strokeWidth="6" fill="none" strokeLinecap="round"/>
            <circle cx="200" cy="260" r="10" fill="#c8222a" opacity="0.7"/>
            <circle cx="200" cy="260" r="20" fill="none" stroke="#c8222a" strokeWidth="1.5" opacity="0.3"/>
            <circle cx="200" cy="260" r="34" fill="none" stroke="#c8222a" strokeWidth="1" opacity="0.15"/>
            <path d="M20 260 Q120 250 200 260 Q280 268 360 250" stroke="rgba(242,230,200,0.12)" strokeWidth="3" fill="none" strokeDasharray="10 6"/>
            <path d="M300 120 L302 128 L310 128 L304 133 L306 141 L300 136 L294 141 L296 133 L290 128 L298 128 Z" fill="#e8b84b" opacity="0.55"/>
            <path d="M80 350 L81.5 355 L87 355 L82.5 358.5 L84 364 L80 360.5 L76 364 L77.5 358.5 L73 355 L78.5 355 Z" fill="rgba(242,230,200,0.35)"/>
            <g transform="translate(330,70)">
              <line x1="0" y1="-18" x2="0" y2="18" stroke="rgba(242,230,200,0.2)" strokeWidth="1.5"/>
              <line x1="-18" y1="0" x2="18" y2="0" stroke="rgba(242,230,200,0.2)" strokeWidth="1.5"/>
              <text x="4" y="-20" fill="rgba(242,230,200,0.35)" fontSize="9" fontFamily="var(--font-dm)" fontWeight="600" letterSpacing="0.1em">N</text>
            </g>
          </svg>
        </div>
      </div>

      {/* ── Tab Nav ──────────────────────────────────────────────── */}
      <nav aria-label="Town sections" className="bg-ink border-b-[3px] border-crimson sticky top-[52px] z-20 px-8 md:px-16">
        <ol className="flex gap-0 overflow-x-auto">
          {tabs.map((tab, i) => {
            const isActive = i === 0;
            return (
              <li key={tab.label}>
                <NextLink
                  href={tab.href}
                  className={`no-underline block px-5 py-3.5 font-ui font-medium text-[10px] uppercase tracking-[0.15em] whitespace-nowrap border-b-2 transition-colors duration-150 ${
                    isActive
                      ? "text-cream border-crimson"
                      : "text-cream/40 border-transparent hover:text-cream hover:border-cream/30"
                  }`}
                >
                  {tab.label}
                </NextLink>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* ── Body: cream background ───────────────────────────────── */}
      <div className="bg-cream py-16 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px] grid md:grid-cols-[1fr_260px] gap-16 items-start">

          {/* Main article column */}
          <article className="max-w-[620px]">

            {/* First paragraph with drop cap */}
            <p className="drop-cap font-editorial text-[1.1rem] leading-[1.8] text-ink mb-10">
              {firstParagraph}
            </p>

            {/* Featured People */}
            {featuredPeople.length > 0 && (
              <section className="mb-10">
                <div className="border-t-[3px] border-ink pt-8 mt-8 mb-6">
                  <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                    PEOPLE
                  </p>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span />
                  <NextLink
                    href={`/towns/${slug}/people`}
                    className="no-underline font-ui text-[0.7rem] uppercase tracking-[0.08em] text-ink/50 hover:text-crimson transition-colors"
                  >
                    All People &rarr;
                  </NextLink>
                </div>
                <div>
                  {featuredPeople.map((person) => (
                    <NextLink
                      key={person.id}
                      href={`/towns/${slug}/people/${person.slug ?? person.id}`}
                      className="no-underline flex items-center justify-between group py-4 border-b border-ink/8 hover:bg-yellow/10 hover:pl-2 transition-all duration-150"
                    >
                      <div>
                        <p className="font-editorial text-[22px] text-ink group-hover:text-crimson transition-colors">
                          {person.name}
                        </p>
                        <p className="font-ui text-[11px] uppercase tracking-[0.1em] text-crimson/60 mt-0.5">
                          {person.roles.join(", ")}
                        </p>
                      </div>
                      <span className="text-crimson ml-4 flex-shrink-0 font-display">&rarr;</span>
                    </NextLink>
                  ))}
                </div>
              </section>
            )}

            {/* Featured Events */}
            {featuredEvents.length > 0 && (
              <section className="mb-10">
                <div className="border-t-[3px] border-ink pt-8 mt-8 mb-6">
                  <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                    KEY EVENTS
                  </p>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span />
                  <NextLink
                    href={`/towns/${slug}/timeline`}
                    className="no-underline font-ui text-[0.7rem] uppercase tracking-[0.08em] text-ink/50 hover:text-crimson transition-colors"
                  >
                    Full Timeline &rarr;
                  </NextLink>
                </div>
                <div>
                  {featuredEvents.map((event) => (
                    <NextLink
                      key={event.id}
                      href={`/towns/${slug}/timeline/${event.slug ?? event.id}`}
                      className="no-underline flex items-center justify-between group py-4 border-b border-ink/8 hover:bg-yellow/10 hover:pl-2 transition-all duration-150"
                    >
                      <div>
                        <p className="font-editorial text-[22px] text-ink group-hover:text-crimson transition-colors">
                          {event.name}
                        </p>
                        {event.startDate && (
                          <p className="font-ui text-[11px] uppercase tracking-[0.1em] text-crimson/60 mt-0.5">
                            {new Date(event.startDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                            })}
                          </p>
                        )}
                      </div>
                      <span className="text-crimson ml-4 flex-shrink-0 font-display">&rarr;</span>
                    </NextLink>
                  ))}
                </div>
              </section>
            )}

            {/* Featured Places */}
            {featuredPlaces.length > 0 && (
              <section className="mb-10">
                <div className="border-t-[3px] border-ink pt-8 mt-8 mb-6">
                  <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                    PLACES TO VISIT
                  </p>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span />
                  <NextLink
                    href={`/towns/${slug}/places`}
                    className="no-underline font-ui text-[0.7rem] uppercase tracking-[0.08em] text-ink/50 hover:text-crimson transition-colors"
                  >
                    All Places &rarr;
                  </NextLink>
                </div>
                <div>
                  {featuredPlaces.map((place) => (
                    <NextLink
                      key={place.id}
                      href={`/towns/${slug}/places/${place.slug ?? place.id}`}
                      className="no-underline flex items-center justify-between group py-4 border-b border-ink/8 hover:bg-yellow/10 hover:pl-2 transition-all duration-150"
                    >
                      <p className="font-editorial text-[22px] text-ink group-hover:text-crimson transition-colors">
                        {place.name}
                      </p>
                      <span className="text-crimson ml-4 flex-shrink-0 font-display">&rarr;</span>
                    </NextLink>
                  ))}
                </div>
              </section>
            )}

            {/* Featured Stories */}
            {featuredStories.length > 0 && (
              <section className="mb-10">
                <div className="border-t-[3px] border-ink pt-8 mt-8 mb-6">
                  <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                    STORIES
                  </p>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span />
                  <NextLink
                    href={`/towns/${slug}/stories`}
                    className="no-underline font-ui text-[0.7rem] uppercase tracking-[0.08em] text-ink/50 hover:text-crimson transition-colors"
                  >
                    All Stories &rarr;
                  </NextLink>
                </div>
                <div className="space-y-4">
                  {featuredStories.map((story) => (
                    <NextLink
                      key={story.id}
                      href={`/towns/${slug}/stories/${story.id}`}
                      className="block border-[3px] border-ink p-5 mb-4 group hover:bg-[#1a3a72] hover:border-[#1a3a72] transition-colors no-underline"
                    >
                      <p className="font-ui text-[9px] uppercase tracking-[0.12em] text-crimson group-hover:text-yellow/70 mb-1">
                        {story.storyType.replace(/_/g, " ")}
                      </p>
                      <p className="font-editorial text-[22px] text-ink group-hover:text-cream transition-colors leading-tight">
                        {story.title}
                      </p>
                      <p className="font-ui text-[13px] text-ink/60 group-hover:text-cream/60 leading-relaxed mt-2">
                        {story.excerpt}
                      </p>
                    </NextLink>
                  ))}
                </div>
              </section>
            )}

            {/* Footer links */}
            <div className="pt-6 border-t border-ink/10 flex gap-6 font-ui text-[0.8rem] text-ink/40">
              <NextLink href={`/changelog?town=${slug}`} className="no-underline hover:text-ink/70 transition-colors">
                View changes for this town
              </NextLink>
              <NextLink href={`/partner/inquire?town=${slug}`} className="no-underline hover:text-ink/70 transition-colors">
                Inquire about operating this site
              </NextLink>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8 mt-0">

            {/* On This Page */}
            <div>
              <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-ink/30 mb-3">
                On This Page
              </p>
              <ul>
                {[
                  { label: "People", id: "people" },
                  { label: "Key Events", id: "events" },
                  { label: "Places", id: "places" },
                  { label: "Stories", id: "stories" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={`#${item.id}`}
                      className="no-underline flex items-center gap-2 py-2.5 border-b border-ink/8 font-ui text-[13px] text-ink hover:text-crimson transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore All Sections */}
            <div>
              <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-ink/30 mb-3">
                Explore
              </p>
              <ul>
                {sidebarLinks.map((link) => (
                  <li key={link.label}>
                    <NextLink
                      href={link.href}
                      className="no-underline flex items-center gap-2 py-2.5 border-b border-ink/8 font-ui text-[13px] text-ink hover:text-crimson transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                      {link.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Linked / nearby towns */}
            {town.linkedTowns && town.linkedTowns.length > 0 && (
              <div>
                <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-ink/30 mb-3">
                  Nearby Towns
                </p>
                <ul>
                  {town.linkedTowns.slice(0, 5).map((linked) => (
                    <li key={linked.townId}>
                      <NextLink
                        href={`/towns/${linked.townSlug}`}
                        className="no-underline flex items-center gap-2 py-2.5 border-b border-ink/8 font-ui text-[13px] text-ink hover:text-crimson transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                        {linked.townName}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pull quote */}
            {town.execSummary150 && (
              <blockquote className="border-l-[4px] border-crimson pl-4 mt-8">
                <p className="font-editorial italic text-[15px] text-ink leading-relaxed">
                  &ldquo;{town.execSummary150.slice(0, 120)}{town.execSummary150.length > 120 ? "\u2026" : ""}&rdquo;
                </p>
              </blockquote>
            )}

            {/* Last Updated */}
            {lastUpdatedStr && (
              <p className="font-ui text-[0.75rem] text-ink/40">
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

      {/* ── Bottom Banner ────────────────────────────────────────── */}
      <section className="bg-ink border-t-4 border-crimson py-20 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p
              className="font-display text-cream leading-none"
              style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
            >
              History Happened <span className="text-crimson">Everywhere.</span>
            </p>
            <p className="font-ui font-light text-cream/50 text-[0.9rem] mt-3 max-w-[420px]">
              Explore every town where the American Revolution unfolded — sourced, documented, and connected.
            </p>
          </div>
          <a
            href="/towns"
            className="no-underline border-2 border-cream text-cream font-ui font-medium text-[11px] uppercase tracking-[0.12em] px-8 py-3 hover:bg-crimson hover:border-crimson transition-colors whitespace-nowrap"
          >
            Browse All Towns
          </a>
        </div>
      </section>
    </div>
  );
}
