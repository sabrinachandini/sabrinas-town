import { getTown, getTownPeople, getRankings } from "@/lib/api";
import { notFound } from "next/navigation";
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
  if (!town) return { title: "Not Found" };
  const title = `People of ${town.name}, ${town.state} | History is for Everyone`;
  const description = `Historical figures connected to ${town.name}, ${town.state} during the Revolutionary War.`;
  const url = `https://sabrinas-town.vercel.app/towns/${slug}/people`;
  const images = town.imageUrl ? [{ url: town.imageUrl, width: 1200, height: 630 }] : undefined;
  return {
    title,
    description,
    openGraph: { title, description, url, images },
    twitter: { card: "summary_large_image" as const, title, description, images: town.imageUrl ? [town.imageUrl] : undefined },
    alternates: { canonical: url },
  };
}

const PATRIOT_ROLES = new Set([
  "Patriot", "General", "Colonel", "Major", "Captain", "Lieutenant", "Commander",
  "Minuteman", "Militiaman", "Continental", "Soldier", "Spy", "Intelligence Gatherer",
  "Silversmith", "Printer", "Merchant", "Statesman", "Physician", "Politician",
  "Patriot Leader", "Political Organizer", "Delegate", "Farmer", "Messenger",
  "Artisan", "Blacksmith", "Innkeeper", "Minister", "Militia Captain",
  "Town Meeting Leader", "Continental Congress Delegate", "Veteran", "Witness",
]);

const LOYALIST_ROLES = new Set([
  "Loyalist", "Tory", "British", "British Officer", "British Soldier",
  "Royal Governor", "Crown Official",
]);

export default async function PeoplePage({ params }: PageProps) {
  const { slug } = await params;
  const [town, peopleData] = await Promise.all([getTown(slug), getTownPeople(slug)]);
  if (!town) notFound();

  const people = peopleData?.people ?? [];

  const loyalists = people.filter((p) => (p.roles ?? []).some((r) => LOYALIST_ROLES.has(r)));
  const patriots = people.filter((p) => !loyalists.includes(p) && (p.roles ?? []).some((r) => PATRIOT_ROLES.has(r)));
  const others = people.filter((p) => !patriots.includes(p) && !loyalists.includes(p));

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <div className="bg-[#1a3a72] border-b-4 border-[#cc3322] py-14 px-8 md:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-0 top-0 font-display text-[240px] leading-none text-white/[0.04] pointer-events-none select-none tracking-[-0.04em]">
          {town.state.slice(0, 2).toUpperCase()}
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-cream/50 mb-2">
            {town.name}, {town.state}
          </p>
          <h1 className="font-display text-cream text-[clamp(36px,6vw,72px)] leading-none tracking-[-0.02em]">
            People
          </h1>
          <p className="font-editorial italic font-light text-cream/60 text-[17px] mt-4 max-w-[520px] leading-relaxed">
            {people.length} historical figure{people.length !== 1 ? "s" : ""} connected to {town.name} during the Revolutionary War.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-[1200px] px-8 md:px-16 py-16">
        {people.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-display text-[80px] text-ink/5 leading-none mb-4">?</p>
            <p className="font-editorial italic text-[18px] text-ink/40">Research is ongoing. People will appear here as records are verified.</p>
          </div>
        ) : (
          <div className="space-y-16">
            {[
              { label: "Patriots & Founders", group: patriots },
              { label: "Loyalists & British", group: loyalists },
              { label: "Other Figures", group: others },
            ].filter(({ group }) => group.length > 0).map(({ label, group }) => (
              <section key={label}>
                <div className="border-t-[3px] border-ink pt-6 mb-8">
                  <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                    {label}
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/8">
                  {group.map((person) => {
                    const lifespan = person.birthYear && person.deathYear
                      ? `${person.birthYear}–${person.deathYear}`
                      : person.birthYear ? `b. ${person.birthYear}` : null;
                    const personHref = `/towns/${slug}/people/${(person as any).slug || person.id}`;
                    return (
                      <NextLink
                        key={person.id}
                        href={personHref}
                        className="no-underline bg-cream group block p-6 hover:bg-[#1a3a72] transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div>
                            <p className="font-editorial text-[21px] text-ink group-hover:text-cream transition-colors leading-tight">
                              {person.name}
                            </p>
                            {lifespan && (
                              <p className="font-display text-[15px] text-crimson group-hover:text-[#4A6A9B] transition-colors mt-0.5">
                                {lifespan}
                              </p>
                            )}
                          </div>
                          <span className="font-display text-crimson group-hover:text-cream/40 transition-colors text-[20px] flex-shrink-0 mt-1">→</span>
                        </div>
                        {person.roles.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {person.roles.slice(0, 3).map((role) => (
                              <span key={role} className="font-ui text-[10px] uppercase tracking-[0.12em] text-crimson/70 group-hover:text-[#4A6A9B]/70 border border-crimson/20 group-hover:border-[#4A6A9B]/20 px-1.5 py-0.5 transition-colors">
                                {role}
                              </span>
                            ))}
                          </div>
                        )}
                        {person.bioShort && (
                          <p className="font-ui text-[12px] text-ink/55 group-hover:text-cream/55 leading-relaxed line-clamp-3 transition-colors">
                            {person.bioShort}
                          </p>
                        )}
                      </NextLink>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
