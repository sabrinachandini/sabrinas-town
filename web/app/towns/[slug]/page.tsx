import {
  getTown,
  getTownSources,
  getTownPeople,
  getLocalEvents,
  getRankings,
} from "@/lib/api";
import { JsonLd } from "@/components/seo/JsonLd";
import { recordOrgEvent } from "@/lib/analytics";
import { ComingSoon, TownHero } from "@/components/town";
import NextLink from "next/link";

export const revalidate = 3600;

export async function generateStaticParams() {
  const towns = await getRankings({ limit: 500 });
  return (towns ?? []).map((t) => ({ slug: t.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);
  if (!town) return { title: "Town Not Found" };
  const title = `${town.name}, ${town.state}`;
  const description = town.execSummary150;
  const url = `https://sabrinas-town.vercel.app/towns/${slug}`;
  const images = town.imageUrl ? [{ url: town.imageUrl, width: 1200, height: 630 }] : undefined;
  return {
    title,
    description,
    openGraph: { title, description, url, images },
    twitter: { card: "summary_large_image", title, description, images: town.imageUrl ? [town.imageUrl] : undefined },
    alternates: { canonical: url },
  };
}

export default async function TownOverviewPage({ params }: PageProps) {
  const { slug } = await params;

  const [town, sourcesData, peopleData, localEvents] = await Promise.all([
    getTown(slug),
    getTownSources(slug),
    getTownPeople(slug),
    getLocalEvents(slug),
  ]);

  if (!town) return <ComingSoon slug={slug} />;

  void recordOrgEvent(slug, "TOWN_VIEW");

  // Skip any leading markdown headers to find the first real prose paragraph
  const firstParagraph = town.whyMatters
    .split("\n\n")
    .find((p) => p.trim() && !p.trim().startsWith("#")) ?? town.whyMatters.split("\n\n")[0];
  const people = peopleData?.people ?? [];
  const featuredPeople = people.slice(0, 4);
  const featuredPlaces = (town.featuredPlaces ?? []).slice(0, 4);
  const featuredEvents = [...town.events]
    .sort((a, b) => b.significanceWeight - a.significanceWeight)
    .slice(0, 6);
  const featuredStories = town.stories.slice(0, 2);

  const lastUpdatedStr = sourcesData?.lastUpdated ?? town.lastUpdatedAt;

  const sidebarLinks = [
    { label: "Timeline",  href: `/towns/${slug}/timeline` },
    { label: "People",    href: `/towns/${slug}/people` },
    { label: "Places",    href: `/towns/${slug}/places` },
    { label: "Stories",   href: `/towns/${slug}/stories` },
    { label: "Teacher",   href: `/towns/${slug}/teacher` },
    { label: "Sources",   href: `/towns/${slug}/sources` },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: town.name,
    description: town.execSummary150,
    url: `https://sabrinas-town.vercel.app/towns/${slug}`,
    ...(town.geo ? { geo: { "@type": "GeoCoordinates", latitude: town.geo.lat, longitude: town.geo.lng } } : {}),
    ...(town.imageUrl ? { image: town.imageUrl } : {}),
    touristType: "History & Culture",
    address: { "@type": "PostalAddress", addressRegion: town.state, addressCountry: "US" },
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <TownHero town={town} slug={slug} />

      {/* ── Significance strip ───────────────────────────────────── */}
      <div className="bg-[#1a3a72] border-b border-[#f2e6c8]/8 px-4 sm:px-8 md:px-16 py-2.5 sm:py-3">
        <div className="mx-auto max-w-[1200px] flex flex-wrap items-center gap-x-8 gap-y-1">
          <span className="font-ui text-[10px] uppercase tracking-[0.22em] text-cream/50">
            {town.scoreTier}
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-20 h-[2px] bg-[#f2e6c8]/10">
              <div className="h-full bg-[#cc3322]" style={{ width: `${town.compositeScore}%` }} />
            </div>
            <span className="font-ui text-[10px] text-[#f2e6c8]/30 uppercase tracking-[0.1em]">
              {town.compositeScore}/100
            </span>
          </div>
          {[
            { n: people.length, label: "People" },
            { n: town.events.length, label: "Events" },
            { n: town.stories.length, label: "Stories" },
          ].map((s) => (
            <span key={s.label} className="font-ui text-[10px] uppercase tracking-[0.12em] text-[#f2e6c8]/30">
              <span className="text-[#f2e6c8]/60 mr-1">{s.n}</span>{s.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Body: cream background ───────────────────────────────── */}
      <div className="bg-cream py-10 sm:py-16 px-5 sm:px-8 md:px-16">
        <div className="mx-auto max-w-[1200px] grid md:grid-cols-[1fr_260px] gap-16 items-start">

          {/* Main article column */}
          <article className="max-w-[620px]">

            {/* First paragraph with drop cap */}
            <p className="drop-cap font-editorial text-[1.1rem] leading-[1.8] text-ink mb-10">
              {firstParagraph}
            </p>

            {/* Featured People */}
            {featuredPeople.length > 0 && (
              <section id="people" className="mb-10">
                <div className="border-t-[3px] border-ink pt-8 mt-8 mb-6">
                  <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
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
                      className="no-underline flex items-center gap-4 group py-4 border-b border-ink/8 hover:bg-yellow/10 hover:pl-2 transition-all duration-150"
                    >
                      {/* Portrait */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-ink/8 border border-ink/10">
                        {person.imageUrl ? (
                          <img
                            src={person.imageUrl}
                            alt={person.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center font-display text-[20px] text-ink/30">
                            {person.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-editorial text-[18px] sm:text-[22px] text-ink group-hover:text-crimson transition-colors leading-tight">
                          {person.name}
                        </p>
                        <p className="font-ui text-[11px] uppercase tracking-[0.1em] text-crimson/60 mt-0.5">
                          {person.roles.join(", ")}
                        </p>
                      </div>
                      <span className="text-crimson ml-2 flex-shrink-0 font-display">&rarr;</span>
                    </NextLink>
                  ))}
                </div>
              </section>
            )}

            {/* Featured Events */}
            {featuredEvents.length > 0 && (
              <section id="events" className="mb-10">
                <div className="border-t-[3px] border-ink pt-8 mt-8 mb-6">
                  <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
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
                        <p className="font-editorial text-[18px] sm:text-[22px] text-ink group-hover:text-crimson transition-colors">
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
              <section id="places" className="mb-10">
                <div className="border-t-[3px] border-ink pt-8 mt-8 mb-6">
                  <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
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
              <section id="stories" className="mb-10">
                <div className="border-t-[3px] border-ink pt-8 mt-8 mb-6">
                  <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
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
                      <p className="font-ui text-[11px] uppercase tracking-[0.12em] text-crimson group-hover:text-yellow/70 mb-1">
                        {story.storyType.replace(/_/g, " ")}
                      </p>
                      <p className="font-editorial text-[18px] sm:text-[22px] text-ink group-hover:text-cream transition-colors leading-tight">
                        {story.title}
                      </p>
                      <p className="font-ui text-[19px] text-ink/60 group-hover:text-cream/60 leading-relaxed mt-2">
                        {story.excerpt}
                      </p>
                    </NextLink>
                  ))}
                </div>
              </section>
            )}

            {/* Footer links */}
            <div className="pt-6 border-t border-ink/10 flex flex-wrap gap-6 font-ui text-[0.8rem] text-ink/55">
              <NextLink href={`/changelog?town=${slug}`} className="no-underline hover:text-ink/70 transition-colors">
                View changes for this town
              </NextLink>
<NextLink href={`/partner/inquire?town=${slug}`} className="no-underline hover:text-ink/70 transition-colors">
                Inquire about partnering
              </NextLink>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8 mt-0">

            {/* Explore All Sections */}
            <div>
              <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-ink/30 mb-3">
                Explore
              </p>
              <ul>
                {sidebarLinks.map((link) => (
                  <li key={link.label}>
                    <NextLink
                      href={link.href}
                      className="no-underline flex items-center gap-2 py-2.5 border-b border-ink/8 font-ui text-[19px] text-ink hover:text-crimson transition-colors"
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
                <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-ink/30 mb-3">
                  Nearby Towns
                </p>
                <ul>
                  {town.linkedTowns.slice(0, 5).map((linked) => (
                    <li key={linked.townId}>
                      <NextLink
                        href={`/towns/${linked.townSlug}`}
                        className="no-underline flex items-center gap-2 py-2.5 border-b border-ink/8 font-ui text-[19px] text-ink hover:text-crimson transition-colors"
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
                <p className="font-editorial italic text-[19px] sm:text-[19px] text-ink leading-relaxed">
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

      {/* ── Upcoming Events Agenda ───────────────────────────────── */}
      {localEvents.length > 0 && (
        <div className="bg-[#1a3a72] py-10 sm:py-14 px-5 sm:px-8 md:px-16">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-cream/40 mb-2">
                  Plan Your Visit
                </p>
                <h2 className="font-display text-cream text-[clamp(28px,4vw,44px)] leading-none tracking-[-0.02em]">
                  Upcoming Events
                </h2>
              </div>
              <NextLink
                href={`/towns/${slug}/events`}
                className="no-underline font-ui text-[10px] uppercase tracking-[0.15em] text-cream/50 hover:text-cream transition-colors flex items-center gap-1.5"
              >
                All Events <span aria-hidden="true">→</span>
              </NextLink>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                ...localEvents.filter((e) => e.featured),
                ...localEvents.filter((e) => !e.featured),
              ]
                .slice(0, 3)
                .map((evt) => {
                  const MONTH_SHORT = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                  return (
                    <NextLink
                      key={evt.id}
                      href={evt.url ?? `/towns/${slug}/events`}
                      target={evt.url ? "_blank" : undefined}
                      rel={evt.url ? "noopener noreferrer" : undefined}
                      className="no-underline group flex gap-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cream/30 transition-colors p-5"
                    >
                      {/* Date badge */}
                      <div className="flex-shrink-0 text-center w-12">
                        {evt.month ? (
                          <>
                            <p className="font-ui text-[11px] uppercase tracking-[0.1em] text-cream/40">
                              {MONTH_SHORT[evt.month]}
                            </p>
                            {evt.day && (
                              <p className="font-display text-[28px] leading-none text-cream">
                                {evt.day}
                              </p>
                            )}
                          </>
                        ) : (
                          <p className="font-ui text-[11px] uppercase tracking-[0.1em] text-cream/30 mt-1">
                            Annual
                          </p>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="font-ui text-[11px] uppercase tracking-[0.12em] text-crimson mb-1">
                          {evt.category}
                        </p>
                        <p className="font-editorial text-cream text-[21px] leading-snug group-hover:text-yellow transition-colors line-clamp-2">
                          {evt.name}
                        </p>
                        {evt.venue && (
                          <p className="font-ui text-[10px] text-cream/40 mt-1 truncate">
                            {evt.venue}
                          </p>
                        )}
                      </div>
                    </NextLink>
                  );
                })}
            </div>

            <div className="mt-6 text-center">
              <NextLink
                href={`/towns/${slug}/events`}
                className="no-underline inline-block font-ui text-[10px] uppercase tracking-[0.2em] font-semibold text-cream border border-cream/30 px-6 py-2.5 hover:bg-cream/10 transition-colors"
              >
                View All Events for {town.name}
              </NextLink>
            </div>
          </div>
        </div>
      )}

      {/* ── Bottom Banner ────────────────────────────────────────── */}
      <section className="bg-ink border-t-4 border-crimson py-12 sm:py-20 px-5 sm:px-8 md:px-16">
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
