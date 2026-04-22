import { notFound } from "next/navigation";
import { getPersonBySlug, getAllPeople } from "@/lib/api";
import NextLink from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { MarkdownBio } from "@/components/editorial";
import { Metadata } from "next";

export const revalidate = 3600;

export async function generateStaticParams() {
  const people = await getAllPeople({ limit: 1000 });
  return people.filter((p) => p.slug).map((p) => ({ slug: p.slug! }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = await getPersonBySlug(slug);
  if (!person) return { title: "Person Not Found" };
  const title = `${person.name} | History is for Everyone`;
  const description = person.bioShort.slice(0, 160);
  const url = `https://sabrinas-town.vercel.app/people/${slug}`;
  return {
    title,
    description,
    openGraph: { title, description, url, ...(person.imageUrl ? { images: [{ url: person.imageUrl }] } : {}) },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: url },
  };
}

export default async function PersonPage({ params }: PageProps) {
  const { slug } = await params;
  const person = await getPersonBySlug(slug);
  if (!person) notFound();

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
    ...(person.imageUrl ? { image: person.imageUrl } : {}),
    ...(person.birthYear ? { birthDate: String(person.birthYear) } : {}),
    ...(person.deathYear ? { deathDate: String(person.deathYear) } : {}),
    hasOccupation: person.roles.map((r) => ({ "@type": "Occupation", name: r })),
  };

  return (
    <div className="bg-cream min-h-screen">
      <JsonLd data={jsonLd} />

      {/* ── Hero ── */}
      <div className="bg-[#14100a] border-b-4 border-[#cc3322] py-16 px-8 md:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-0 top-[-10px] font-display leading-none text-white/[0.04] pointer-events-none select-none" style={{ fontSize: "clamp(120px,22vw,300px)" }}>
          {person.name.charAt(0)}
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 font-ui text-[9px] uppercase tracking-[0.2em] text-cream/30 mb-8">
            <NextLink href="/people" className="no-underline hover:text-cream/60 transition-colors">People</NextLink>
            <span>/</span>
            <span className="text-cream/55">{person.name}</span>
          </nav>

          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div className="flex gap-8 items-end">
              {/* Portrait */}
              {person.imageUrl && (
                <div className="hidden md:block flex-shrink-0">
                  <img
                    src={person.imageUrl}
                    alt={`Portrait of ${person.name}`}
                    className="w-[120px] h-[150px] object-cover object-top grayscale opacity-80 border border-cream/10"
                  />
                  {person.imageCredit && (
                    <p className="font-ui text-[7px] text-cream/20 mt-1 max-w-[120px] leading-tight">{person.imageCredit}</p>
                  )}
                </div>
              )}
              <div>
                {lifespan && (
                  <p className="font-display text-[#e8b84b] text-[clamp(16px,2vw,24px)] leading-none mb-3">{lifespan}</p>
                )}
                <h1 className="font-display text-cream leading-[0.9] tracking-[-0.03em]" style={{ fontSize: "clamp(42px,8vw,100px)" }}>
                  {person.name}
                </h1>
                {person.roles.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {person.roles.map((role) => (
                      <span key={role} className="font-ui text-[9px] uppercase tracking-[0.15em] text-cream/50 border border-cream/15 px-2.5 py-1">
                        {role}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="hidden md:block text-right flex-shrink-0">
              <p className="font-display text-[56px] text-cream/10 leading-none">{sortedEvents.length}</p>
              <p className="font-ui text-[9px] uppercase tracking-[0.2em] text-cream/25">recorded events</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats band ── */}
      {person.towns.length > 0 && (
        <div className="bg-[#cc3322] py-3 px-8 md:px-16 flex flex-wrap gap-4 items-center">
          <p className="font-ui text-[9px] uppercase tracking-[0.2em] text-white/60">Connected towns:</p>
          {person.towns.map((town) => (
            <NextLink key={town.slug} href={`/towns/${town.slug}`} className="no-underline font-ui text-[10px] uppercase tracking-[0.12em] text-white font-semibold hover:text-[#e8b84b] transition-colors">
              {town.name}, {town.state}
            </NextLink>
          ))}
        </div>
      )}

      {/* ── Body ── */}
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
              <MarkdownBio
                content={person.bioLong ?? person.bioShort}
                dropCap
              />
            </section>

            {/* Events timeline */}
            {sortedEvents.length > 0 && (
              <section className="mt-16">
                <div className="border-t-[3px] border-ink pt-6 mb-8">
                  <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                    Events
                  </p>
                </div>
                <ol className="space-y-0">
                  {sortedEvents.map((event) => (
                    <li key={event.id} className="flex gap-5 py-5 border-b border-ink/8 last:border-b-0 group">
                      <div className="flex-shrink-0 w-16 text-right">
                        {event.startDate ? (
                          <div className="bg-ink text-cream inline-block px-2 py-1 text-center">
                            <p className="font-display text-[10px] leading-none text-cream/60">
                              {new Date(event.startDate).toLocaleDateString("en-US", { month: "short" })}
                            </p>
                            <p className="font-display text-[18px] leading-none text-cream">
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
                          href={event.slug ? `/events/${event.slug}` : `/towns/${event.town.slug}/timeline`}
                          className="no-underline font-editorial text-[19px] text-ink group-hover:text-crimson transition-colors leading-snug block"
                        >
                          {event.name}
                        </NextLink>
                        <div className="flex items-center gap-3 mt-1 flex-wrap">
                          <NextLink href={`/towns/${event.town.slug}`} className="no-underline font-ui text-[9px] uppercase tracking-[0.12em] text-ink/40 hover:text-crimson transition-colors">
                            {event.town.name}
                          </NextLink>
                          {event.roleInEvent && (
                            <span className="font-ui text-[9px] uppercase tracking-[0.1em] text-crimson/60">
                              {event.roleInEvent}
                            </span>
                          )}
                        </div>
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
                      href={`/towns/${story.town.slug}/stories/${story.id}`}
                      className="no-underline block py-5 border-b border-ink/8 last:border-b-0 group"
                    >
                      <p className="font-ui text-[8px] uppercase tracking-[0.14em] text-crimson/60 mb-1">
                        {story.storyType.replace(/_/g, " ")} · {story.town.name}
                      </p>
                      <p className="font-editorial text-[19px] text-ink group-hover:text-crimson transition-colors leading-snug">
                        {story.title}
                      </p>
                      {story.excerpt && (
                        <p className="font-ui text-[12px] text-ink/50 leading-relaxed mt-1.5 line-clamp-2">{story.excerpt}</p>
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
                    <dd className="font-editorial text-[16px] text-cream mt-0.5">{lifespan}</dd>
                  </div>
                )}
                {person.roles.length > 0 && (
                  <div>
                    <dt className="font-ui text-[9px] uppercase tracking-[0.12em] text-cream/30">Roles</dt>
                    <dd className="font-editorial text-[14px] text-cream mt-0.5 leading-snug">{person.roles.join(", ")}</dd>
                  </div>
                )}
                {person.towns.length > 0 && (
                  <div>
                    <dt className="font-ui text-[9px] uppercase tracking-[0.12em] text-cream/30">Towns</dt>
                    <dd className="mt-0.5 space-y-1">
                      {person.towns.map((t) => (
                        <NextLink key={t.slug} href={`/towns/${t.slug}`} className="no-underline block font-editorial text-[14px] text-[#e8b84b] hover:text-cream transition-colors">
                          {t.name}, {t.state}
                        </NextLink>
                      ))}
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="font-ui text-[9px] uppercase tracking-[0.12em] text-cream/30">Verification</dt>
                  <dd className="font-ui text-[10px] text-cream/50 uppercase tracking-[0.1em] mt-0.5">
                    {person.verificationStatus.replace(/_/g, " ")}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Portrait (mobile / sidebar) */}
            {person.imageUrl && (
              <div className="md:hidden">
                <img src={person.imageUrl} alt={`Portrait of ${person.name}`} className="w-full max-w-[200px] object-cover grayscale opacity-80" />
                {person.imageCredit && <p className="font-ui text-[7px] text-ink/30 mt-1 leading-tight">{person.imageCredit}</p>}
              </div>
            )}

            {/* Navigation */}
            <div>
              <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-ink/30 mb-3">Explore</p>
              <ul>
                {[
                  { label: "← All People", href: "/people" },
                  { label: "Events Calendar", href: "/events" },
                  { label: "All Towns", href: "/towns" },
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
