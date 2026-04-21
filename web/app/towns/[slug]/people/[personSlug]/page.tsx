import { notFound } from "next/navigation";
import { getTown, getTownPersonDetail } from "@/lib/api";
import NextLink from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string; personSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, personSlug } = await params;
  const person = await getTownPersonDetail(slug, personSlug);
  if (!person) return { title: "Person Not Found" };
  const title = `${person.name} | History is for Everyone`;
  const description = person.bioShort.slice(0, 160);
  const url = `https://sabrinas-town.vercel.app/towns/${slug}/people/${personSlug}`;
  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { card: "summary_large_image" as const, title, description },
    alternates: { canonical: url },
  };
}

export default async function PersonDetailPage({ params }: PageProps) {
  const { slug, personSlug } = await params;
  const [town, person] = await Promise.all([
    getTown(slug),
    getTownPersonDetail(slug, personSlug),
  ]);
  if (!town || !person) notFound();

  const lifespan = person.birthYear && person.deathYear
    ? `${person.birthYear}–${person.deathYear}`
    : person.birthYear ? `b. ${person.birthYear}` : null;

  const sortedEvents = [...person.events].sort((a, b) => {
    if (!a.startDate) return 1;
    if (!b.startDate) return -1;
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    description: person.bioShort,
    ...(person.birthYear ? { birthDate: String(person.birthYear) } : {}),
    ...(person.deathYear ? { deathDate: String(person.deathYear) } : {}),
    hasOccupation: person.roles.map((r) => ({ "@type": "Occupation", name: r })),
  };

  return (
    <div className="bg-cream min-h-screen">
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <div className="bg-[#14100a] border-b-4 border-[#cc3322] py-16 px-8 md:px-16 relative overflow-hidden">
        {/* Ghost initial */}
        <div aria-hidden className="absolute right-0 top-[-10px] font-display leading-none text-white/[0.04] pointer-events-none select-none" style={{ fontSize: "clamp(120px,22vw,300px)" }}>
          {person.name.charAt(0)}
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-ui text-[9px] uppercase tracking-[0.2em] text-cream/30 mb-8">
            <NextLink href={`/towns/${slug}`} className="no-underline hover:text-cream/60 transition-colors">{town.name}</NextLink>
            <span>/</span>
            <NextLink href={`/towns/${slug}/people`} className="no-underline hover:text-cream/60 transition-colors">People</NextLink>
          </nav>

          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              {lifespan && (
                <p className="font-display text-[#e8b84b] text-[clamp(18px,2.5vw,28px)] leading-none mb-4 tracking-[0.02em]">
                  {lifespan}
                </p>
              )}
              <h1 className="font-display text-cream leading-[0.9] tracking-[-0.03em]" style={{ fontSize: "clamp(48px,9vw,110px)" }}>
                {person.name}
              </h1>
              {person.roles.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {person.roles.map((role) => (
                    <span key={role} className="font-ui text-[9px] uppercase tracking-[0.15em] text-cream/50 border border-cream/15 px-2.5 py-1">
                      {role}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Stat: events count */}
            {sortedEvents.length > 0 && (
              <div className="hidden md:block text-right flex-shrink-0">
                <p className="font-display text-[64px] text-cream/10 leading-none">{sortedEvents.length}</p>
                <p className="font-ui text-[9px] uppercase tracking-[0.2em] text-cream/25">Events in {town.name}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-[1200px] px-8 md:px-16 py-16">
        <div className="grid md:grid-cols-[1fr_260px] gap-16 items-start">

          {/* Main column */}
          <div>
            {/* Biography */}
            <section>
              <div className="border-t-[3px] border-ink pt-6 mb-8">
                <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                  Biography
                </p>
              </div>
              <div className="space-y-5">
                {person.bioLong
                  ? person.bioLong.split("\n\n").map((para, i) => (
                      <p key={i} className={`font-editorial text-[18px] text-ink leading-[1.75] ${i === 0 ? "drop-cap" : ""}`}>
                        {para}
                      </p>
                    ))
                  : <p className="font-editorial text-[18px] text-ink leading-[1.75] drop-cap">{person.bioShort}</p>
                }
              </div>
            </section>

            {/* Events in this town */}
            {sortedEvents.length > 0 && (
              <section className="mt-16">
                <div className="border-t-[3px] border-ink pt-6 mb-8">
                  <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                    In {town.name}
                  </p>
                </div>
                <ol className="space-y-0">
                  {sortedEvents.map((event) => (
                    <li key={event.id} className="flex gap-5 py-5 border-b border-ink/8 last:border-b-0 group">
                      {/* Date badge */}
                      <div className="flex-shrink-0 w-16 text-right">
                        {event.startDate ? (
                          <div className="bg-ink text-cream inline-block px-2 py-1 text-center">
                            <p className="font-display text-[11px] leading-none text-cream/60">
                              {new Date(event.startDate).toLocaleDateString("en-US", { month: "short" })}
                            </p>
                            <p className="font-display text-[20px] leading-none text-cream">
                              {new Date(event.startDate).getFullYear()}
                            </p>
                          </div>
                        ) : (
                          <div className="bg-ink/10 inline-block px-2 py-2 text-center">
                            <p className="font-ui text-[9px] text-ink/30 uppercase">n.d.</p>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <NextLink
                          href={`/towns/${slug}/timeline/${event.id}`}
                          className="no-underline font-editorial text-[20px] text-ink group-hover:text-crimson transition-colors leading-snug block"
                        >
                          {event.name}
                        </NextLink>
                        {event.roleInEvent && (
                          <p className="font-ui text-[10px] uppercase tracking-[0.12em] text-crimson/60 mt-1">
                            Role: {event.roleInEvent}
                          </p>
                        )}
                        {event.summary && (
                          <p className="font-ui text-[12px] text-ink/50 leading-relaxed mt-1.5 line-clamp-2">
                            {event.summary}
                          </p>
                        )}
                        {event.themes.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {event.themes.slice(0, 3).map((theme) => (
                              <span key={theme.id} className="font-ui text-[8px] uppercase tracking-[0.1em] text-ink/30 border border-ink/10 px-1.5 py-0.5">
                                {theme.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* Stories */}
            {person.stories.length > 0 && (
              <section className="mt-16">
                <div className="border-t-[3px] border-ink pt-6 mb-8">
                  <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                    Stories
                  </p>
                </div>
                <div className="space-y-0">
                  {person.stories.map((story) => (
                    <NextLink
                      key={story.id}
                      href={`/towns/${slug}/stories/${story.id}`}
                      className="no-underline block py-5 border-b border-ink/8 last:border-b-0 group"
                    >
                      <p className="font-ui text-[8px] uppercase tracking-[0.14em] text-crimson/60 mb-1">
                        {story.storyType.replace(/_/g, " ")}
                      </p>
                      <p className="font-editorial text-[19px] text-ink group-hover:text-crimson transition-colors leading-snug">
                        {story.title}
                      </p>
                      {story.excerpt && (
                        <p className="font-ui text-[12px] text-ink/50 leading-relaxed mt-1.5 line-clamp-2">
                          {story.excerpt}
                        </p>
                      )}
                    </NextLink>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Quick facts */}
            <div className="bg-[#14100a] p-5">
              <p className="font-ui text-[9px] uppercase tracking-[0.2em] text-cream/30 mb-4">Quick Facts</p>
              <dl className="space-y-3">
                {lifespan && (
                  <div>
                    <dt className="font-ui text-[9px] uppercase tracking-[0.12em] text-cream/30">Lived</dt>
                    <dd className="font-editorial text-[17px] text-cream mt-0.5">{lifespan}</dd>
                  </div>
                )}
                {person.roles.length > 0 && (
                  <div>
                    <dt className="font-ui text-[9px] uppercase tracking-[0.12em] text-cream/30">Roles</dt>
                    <dd className="font-editorial text-[15px] text-cream mt-0.5 leading-snug">{person.roles.join(", ")}</dd>
                  </div>
                )}
                <div>
                  <dt className="font-ui text-[9px] uppercase tracking-[0.12em] text-cream/30">Town</dt>
                  <dd className="mt-0.5">
                    <NextLink href={`/towns/${slug}`} className="no-underline font-editorial text-[15px] text-[#e8b84b] hover:text-cream transition-colors">
                      {town.name}, {town.state}
                    </NextLink>
                  </dd>
                </div>
                <div>
                  <dt className="font-ui text-[9px] uppercase tracking-[0.12em] text-cream/30">Verification</dt>
                  <dd className="font-ui text-[10px] text-cream/50 uppercase tracking-[0.1em] mt-0.5">
                    {person.verificationStatus.replace(/_/g, " ")}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Navigation */}
            <div>
              <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-ink/30 mb-3">Explore {town.name}</p>
              <ul>
                {[
                  { label: "← All People", href: `/towns/${slug}/people` },
                  { label: "Timeline", href: `/towns/${slug}/timeline` },
                  { label: "Overview", href: `/towns/${slug}` },
                ].map((link) => (
                  <li key={link.label}>
                    <NextLink href={link.href} className="no-underline flex items-center gap-2 py-2.5 border-b border-ink/8 font-ui text-[13px] text-ink hover:text-crimson transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                      {link.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
