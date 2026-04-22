import { notFound } from "next/navigation";
import { getEventBySlug, getAllEvents } from "@/lib/api";
import NextLink from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/seo/JsonLd";
import { MarkdownBio } from "@/components/editorial";
import { Metadata } from "next";

export const revalidate = 3600;

export async function generateStaticParams() {
  const events = await getAllEvents({ minSignificance: 0, limit: 2000 });
  return events.filter((e) => e.slug).map((e) => ({ slug: e.slug! }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };
  const title = `${event.name} | History is for Everyone`;
  const description = event.summary.slice(0, 160);
  const url = `https://sabrinas-town.vercel.app/events/${slug}`;
  return {
    title,
    description,
    openGraph: { title, description, url, ...(event.imageUrl ? { images: [{ url: event.imageUrl }] } : {}) },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: url },
  };
}

function formatDate(iso: string, precision: string): string {
  const d = new Date(iso);
  if (precision === "YEAR") return String(d.getFullYear());
  if (precision === "MONTH") return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) notFound();

  const dateLabel = event.startDate ? formatDate(event.startDate, event.datePrecision) : null;
  const year = event.startDate ? new Date(event.startDate).getFullYear() : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.summary.slice(0, 300),
    ...(event.startDate ? { startDate: event.startDate } : {}),
    location: { "@type": "Place", name: event.town.name, address: { "@type": "PostalAddress", addressRegion: event.town.state } },
  };

  return (
    <div className="bg-cream min-h-screen">
      <JsonLd data={jsonLd} />

      {/* ── Hero ── */}
      <div className="bg-[#1a3a72] border-b-4 border-[#cc3322] relative overflow-hidden">
        {/* Background image */}
        {event.imageUrl && (
          <div className="absolute inset-0 z-0">
            <Image src={event.imageUrl} alt="" fill className="object-cover opacity-[0.12] grayscale" />
          </div>
        )}
        <div className="relative z-10 py-16 px-8 md:px-16 max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.2em] text-cream/30 mb-8">
            <NextLink href="/events" className="no-underline hover:text-cream/60 transition-colors">Events</NextLink>
            <span>/</span>
            <NextLink href={`/towns/${event.town.slug}`} className="no-underline hover:text-cream/60 transition-colors">{event.town.name}</NextLink>
          </nav>

          {dateLabel && (
            <p className="font-display text-[#4A6A9B] text-[clamp(16px,2vw,24px)] leading-none mb-4">{dateLabel}</p>
          )}
          <h1 className="font-display text-cream leading-[0.9] tracking-[-0.02em]" style={{ fontSize: "clamp(36px,7vw,88px)" }}>
            {event.name}
          </h1>

          <div className="flex flex-wrap gap-3 mt-6 items-center">
            <NextLink href={`/towns/${event.town.slug}`} className="no-underline font-ui text-[10px] uppercase tracking-[0.15em] text-cream/50 border border-cream/15 px-3 py-1.5 hover:border-cream/40 transition-colors">
              {event.town.name}, {event.town.state}
            </NextLink>
            {event.themes.map((theme) => (
              <span key={theme.id} className="font-ui text-[11px] uppercase tracking-[0.1em] text-cream/30 border border-cream/10 px-2.5 py-1">
                {theme.name}
              </span>
            ))}
            {event.significanceWeight >= 80 && (
              <span className="font-ui text-[10px] uppercase tracking-[0.14em] text-[#4A6A9B] border border-[#4A6A9B]/30 px-2.5 py-1">
                Major Event
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="mx-auto max-w-[1200px] px-8 md:px-16 py-16">
        <div className="grid md:grid-cols-[1fr_280px] gap-16 items-start">

          {/* Main column */}
          <div>
            {/* Summary */}
            <section>
              <div className="border-t-[3px] border-ink pt-6 mb-8">
                <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                  What Happened
                </p>
              </div>
              <MarkdownBio content={event.summary} dropCap />
            </section>

            {/* Image with credit */}
            {event.imageUrl && (
              <figure className="mt-12">
                <Image src={event.imageUrl} alt={event.name} width={1200} height={400} className="w-full max-h-[400px] object-contain bg-[#1a3a72]/5" />
                {event.imageCredit && (
                  <figcaption className="font-ui text-[11px] text-ink/35 mt-2 leading-relaxed">{event.imageCredit}</figcaption>
                )}
              </figure>
            )}

            {/* Video */}
            {event.videoId && (
              <section className="mt-12">
                <div className="border-t-[3px] border-ink pt-6 mb-6">
                  <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                    Video
                  </p>
                </div>
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${event.videoId}`}
                    title={event.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
                {event.videoSource && event.videoSource !== "other" && (
                  <p className="font-ui text-[11px] text-ink/35 mt-2 uppercase tracking-[0.1em]">
                    Source: {event.videoSource === "ken-burns" ? "Ken Burns Documentary" : "Liberty Kids"}
                  </p>
                )}
              </section>
            )}

            {/* People involved */}
            {event.people.length > 0 && (
              <section className="mt-16">
                <div className="border-t-[3px] border-ink pt-6 mb-8">
                  <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
                    People Involved
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-px bg-ink/8">
                  {event.people.map((person) => (
                    <NextLink
                      key={person.id}
                      href={person.slug ? `/people/${person.slug}` : `/towns/${event.town.slug}/people`}
                      className="no-underline bg-cream hover:bg-[#1a3a72] group transition-colors p-4 flex gap-3 items-start"
                    >
                      {person.imageUrl ? (
                        <Image src={person.imageUrl} alt={person.name} width={44} height={54} className="object-cover object-top flex-shrink-0 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all" />
                      ) : (
                        <div className="w-[44px] h-[54px] flex-shrink-0 bg-ink/8 flex items-center justify-center">
                          <span className="font-display text-[22px] text-ink/20 group-hover:text-cream/20 transition-colors">{person.name.charAt(0)}</span>
                        </div>
                      )}
                      <div>
                        <p className="font-display text-[16px] text-ink group-hover:text-cream transition-colors leading-tight">{person.name}</p>
                        {person.roleInEvent && (
                          <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-crimson group-hover:text-[#4A6A9B] transition-colors mt-0.5">{person.roleInEvent}</p>
                        )}
                        <p className="font-ui text-[11px] text-ink/40 group-hover:text-cream/40 transition-colors mt-0.5">{person.roles.slice(0, 2).join(", ")}</p>
                      </div>
                    </NextLink>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Event facts */}
            <div className="bg-[#1a3a72] p-5">
              <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-cream/30 mb-4">Event Details</p>
              <dl className="space-y-3">
                {dateLabel && (
                  <div>
                    <dt className="font-ui text-[11px] uppercase tracking-[0.12em] text-cream/30">Date</dt>
                    <dd className="font-editorial text-[15px] text-cream mt-0.5">{dateLabel}</dd>
                  </div>
                )}
                <div>
                  <dt className="font-ui text-[11px] uppercase tracking-[0.12em] text-cream/30">Location</dt>
                  <dd className="mt-0.5">
                    <NextLink href={`/towns/${event.town.slug}`} className="no-underline font-editorial text-[15px] text-[#4A6A9B] hover:text-cream transition-colors">
                      {event.town.name}, {event.town.state}
                    </NextLink>
                  </dd>
                </div>
                <div>
                  <dt className="font-ui text-[11px] uppercase tracking-[0.12em] text-cream/30">Significance</dt>
                  <dd className="mt-1">
                    <div className="flex gap-1">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className={`h-[3px] flex-1 ${i < Math.round(event.significanceWeight / 10) ? "bg-[#cc3322]" : "bg-cream/10"}`} />
                      ))}
                    </div>
                    <p className="font-ui text-[10px] text-cream/30 uppercase tracking-[0.1em] mt-1">{event.significanceWeight}/100</p>
                  </dd>
                </div>
                {event.people.length > 0 && (
                  <div>
                    <dt className="font-ui text-[11px] uppercase tracking-[0.12em] text-cream/30">People</dt>
                    <dd className="font-editorial text-[15px] text-cream mt-0.5">{event.people.length} figures</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Related events */}
            {event.relatedEvents.length > 0 && (
              <div>
                <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-ink/30 mb-3">Also in {event.town.name}</p>
                <ul className="space-y-0">
                  {event.relatedEvents.map((rel) => (
                    <li key={rel.id}>
                      <NextLink
                        href={rel.slug ? `/events/${rel.slug}` : `/towns/${rel.town.slug}/timeline`}
                        className="no-underline flex items-start gap-2 py-3 border-b border-ink/8 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0 mt-1.5" />
                        <div>
                          <p className="font-ui text-[12px] text-ink group-hover:text-crimson transition-colors leading-snug">{rel.name}</p>
                          {rel.startDate && (
                            <p className="font-ui text-[11px] text-ink/30 mt-0.5">{new Date(rel.startDate).getFullYear()}</p>
                          )}
                        </div>
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Navigation */}
            <div>
              <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-ink/30 mb-3">Explore</p>
              <ul>
                {[
                  { label: "← All Events", href: "/events" },
                  { label: event.town.name, href: `/towns/${event.town.slug}` },
                  { label: "People", href: "/people" },
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
