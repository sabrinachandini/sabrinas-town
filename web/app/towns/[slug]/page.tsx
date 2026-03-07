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

  return (
    <div>
      {/* 3px crimson rule */}
      <div className="h-[3px] bg-crimson" aria-hidden="true" />

      {/* ── Navy hero ─────────────────────────────────────────── */}
      <div className="bg-navy">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-10 pb-0">

          {/* Breadcrumb */}
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-condensed text-[0.75rem] tracking-[0.08em] uppercase text-fog">
              <li><NextLink href="/" className="no-underline hover:text-white transition-colors">Home</NextLink></li>
              <li aria-hidden="true" className="text-fog/40">/</li>
              <li><NextLink href="/towns" className="no-underline hover:text-white transition-colors">Towns</NextLink></li>
              <li aria-hidden="true" className="text-fog/40">/</li>
              <li className="text-white">{town.name}</li>
            </ol>
          </nav>

          {/* State chip */}
          <span className="inline-block px-3 py-1 bg-crimson text-white font-condensed font-bold text-[0.7rem] tracking-[0.1em] uppercase mb-4">
            {town.state}
          </span>

          {/* Town name */}
          <h1
            className="font-heading font-black text-white leading-[1.05] mb-4"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            {town.name}
          </h1>

          {/* Subtitle */}
          {town.execSummary150 && (
            <p className="font-serif italic text-fog text-[1.05rem] leading-relaxed max-w-[640px] mb-8">
              {town.execSummary150}
            </p>
          )}

          {/* Tab bar */}
          <nav aria-label="Town sections">
            <ol className="flex gap-0 overflow-x-auto">
              {tabs.map((tab, i) => {
                const isActive = i === 0; // Overview is always active on this page
                return (
                  <li key={tab.label}>
                    <NextLink
                      href={tab.href}
                      className={`no-underline block px-4 py-3 font-condensed font-bold text-[0.78rem] tracking-[0.08em] uppercase whitespace-nowrap border-b-[3px] transition-colors duration-150 ${
                        isActive
                          ? "text-white border-crimson"
                          : "text-fog border-transparent hover:text-white hover:border-white/30"
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
      </div>

      {/* ── Body: 2-column ────────────────────────────────────── */}
      <div className="bg-ivory">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-14 grid md:grid-cols-[1fr_280px] gap-12 items-start">

          {/* Main article */}
          <article>
            {/* First paragraph with drop cap */}
            <p className="drop-cap font-serif text-[1.05rem] leading-[1.85] text-charcoal mb-8">
              {firstParagraph}
            </p>

            {/* Featured People */}
            {featuredPeople.length > 0 && (
              <section className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-crimson">People</h2>
                  <NextLink href={`/towns/${slug}/people`} className="no-underline font-condensed font-bold text-[0.7rem] tracking-[0.08em] uppercase text-navy hover:text-crimson transition-colors">
                    All People &rarr;
                  </NextLink>
                </div>
                <div className="divide-y divide-[#DDD8CE]">
                  {featuredPeople.map((person) => (
                    <NextLink
                      key={person.id}
                      href={`/towns/${slug}/people/${person.slug ?? person.id}`}
                      className="no-underline flex items-center justify-between py-3 group"
                    >
                      <div>
                        <p className="font-heading font-semibold text-[1rem] text-charcoal group-hover:text-navy transition-colors">{person.name}</p>
                        <p className="font-sans text-[0.8rem] text-slate">{person.roles.join(", ")}</p>
                      </div>
                      <span className="text-slate group-hover:text-crimson transition-colors ml-4 flex-shrink-0">&rarr;</span>
                    </NextLink>
                  ))}
                </div>
              </section>
            )}

            {/* Featured Events */}
            {featuredEvents.length > 0 && (
              <section className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-crimson">Key Events</h2>
                  <NextLink href={`/towns/${slug}/timeline`} className="no-underline font-condensed font-bold text-[0.7rem] tracking-[0.08em] uppercase text-navy hover:text-crimson transition-colors">
                    Full Timeline &rarr;
                  </NextLink>
                </div>
                <div className="divide-y divide-[#DDD8CE]">
                  {featuredEvents.map((event) => (
                    <NextLink
                      key={event.id}
                      href={`/towns/${slug}/timeline/${event.slug ?? event.id}`}
                      className="no-underline flex items-center justify-between py-3 group"
                    >
                      <div>
                        <p className="font-heading font-semibold text-[1rem] text-charcoal group-hover:text-navy transition-colors">{event.name}</p>
                        {event.startDate && (
                          <p className="font-sans text-[0.8rem] text-slate">
                            {new Date(event.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                          </p>
                        )}
                      </div>
                      <span className="text-slate group-hover:text-crimson transition-colors ml-4 flex-shrink-0">&rarr;</span>
                    </NextLink>
                  ))}
                </div>
              </section>
            )}

            {/* Featured Places */}
            {featuredPlaces.length > 0 && (
              <section className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-crimson">Places to Visit</h2>
                  <NextLink href={`/towns/${slug}/places`} className="no-underline font-condensed font-bold text-[0.7rem] tracking-[0.08em] uppercase text-navy hover:text-crimson transition-colors">
                    All Places &rarr;
                  </NextLink>
                </div>
                <div className="divide-y divide-[#DDD8CE]">
                  {featuredPlaces.map((place) => (
                    <NextLink
                      key={place.id}
                      href={`/towns/${slug}/places/${place.slug ?? place.id}`}
                      className="no-underline flex items-center justify-between py-3 group"
                    >
                      <p className="font-heading font-semibold text-[1rem] text-charcoal group-hover:text-navy transition-colors">{place.name}</p>
                      <span className="text-slate group-hover:text-crimson transition-colors ml-4 flex-shrink-0">&rarr;</span>
                    </NextLink>
                  ))}
                </div>
              </section>
            )}

            {/* Featured Stories */}
            {featuredStories.length > 0 && (
              <section className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-crimson">Stories</h2>
                  <NextLink href={`/towns/${slug}/stories`} className="no-underline font-condensed font-bold text-[0.7rem] tracking-[0.08em] uppercase text-navy hover:text-crimson transition-colors">
                    All Stories &rarr;
                  </NextLink>
                </div>
                <div className="divide-y divide-[#DDD8CE]">
                  {featuredStories.map((story) => (
                    <NextLink
                      key={story.id}
                      href={`/towns/${slug}/stories/${story.id}`}
                      className="no-underline flex items-center justify-between py-3 group"
                    >
                      <div>
                        <p className="font-heading font-semibold text-[1rem] text-charcoal group-hover:text-navy transition-colors">{story.title}</p>
                        <p className="font-sans text-[0.8rem] text-slate line-clamp-1">{story.excerpt}</p>
                      </div>
                      <span className="text-slate group-hover:text-crimson transition-colors ml-4 flex-shrink-0">&rarr;</span>
                    </NextLink>
                  ))}
                </div>
              </section>
            )}

            {/* Footer links */}
            <div className="pt-6 border-t border-[#DDD8CE] flex gap-6 font-sans text-[0.8rem] text-slate">
              <NextLink href={`/changelog?town=${slug}`} className="hover:text-navy transition-colors">
                View changes for this town
              </NextLink>
              <NextLink href={`/partner/inquire?town=${slug}`} className="hover:text-navy transition-colors">
                Inquire about operating this site
              </NextLink>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5 mt-0">

            {/* Quick Facts */}
            <div className="bg-navy text-white">
              <div className="px-5 py-3 border-b border-white/10">
                <p className="font-condensed font-bold text-[0.7rem] tracking-[0.12em] uppercase" style={{ color: "#C4923B" }}>Quick Facts</p>
              </div>
              <div className="px-5 py-4 space-y-3 font-sans text-[0.85rem]">
                <div className="flex justify-between gap-3">
                  <span className="text-fog">State</span>
                  <span className="text-white font-medium">{town.state}</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-fog">Events</span>
                  <span className="text-white font-medium">{town.events.length}</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-fog">People</span>
                  <span className="text-white font-medium">{people.length}</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-fog">Stories</span>
                  <span className="text-white font-medium">{town.stories.length}</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-fog">Sources</span>
                  <span className="text-white font-medium">{sourcesData?.totalCount ?? 0}</span>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            {lastUpdatedStr && (
              <div className="bg-cream border border-[#DDD8CE] px-5 py-4">
                <p className="font-condensed font-bold text-[0.7rem] tracking-[0.12em] uppercase text-crimson mb-1">Last Updated</p>
                <p className="font-sans text-[0.85rem] text-charcoal">
                  {new Date(lastUpdatedStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>
            )}

            {/* Plan a Visit */}
            <div className="bg-cream border border-[#DDD8CE] px-5 py-4">
              <p className="font-condensed font-bold text-[0.7rem] tracking-[0.12em] uppercase text-crimson mb-2">Plan a Visit</p>
              <NextLink
                href={`/towns/${slug}/places`}
                className="no-underline block w-full text-center py-2.5 bg-navy text-white font-condensed font-bold text-[0.78rem] tracking-[0.08em] uppercase hover:bg-[#1a3560] transition-colors mb-2"
              >
                See Places &rarr;
              </NextLink>
              <NextLink
                href={`/towns/${slug}/teacher`}
                className="no-underline block w-full text-center py-2.5 border border-navy text-navy font-condensed font-bold text-[0.78rem] tracking-[0.08em] uppercase hover:bg-navy hover:text-white transition-colors"
              >
                Teacher Resources
              </NextLink>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
