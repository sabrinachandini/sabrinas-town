import { notFound } from "next/navigation";
import { getTown, getTownEventDetail, getAllEvents } from "@/lib/api";

export async function generateStaticParams() {
  const events = await getAllEvents({ limit: 5000 });
  return events.map((e) => ({ slug: e.town.slug, eventSlug: e.slug ?? e.id }));
}
import { EVENT_VIDEOS } from "@/lib/videos";
import { ImageWithCaption, YouTubeEmbed } from "@/components/editorial";
import { JsonLd } from "@/components/seo/JsonLd";
import NextLink from "next/link";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string; eventSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, eventSlug } = await params;
  const event = await getTownEventDetail(slug, eventSlug);
  if (!event) return { title: "Event Not Found" };
  const title = event.name;
  const description = event.summary.slice(0, 160);
  const url = `https://sabrinas-town.vercel.app/towns/${slug}/timeline/${eventSlug}`;
  const images = event.imageUrl ? [{ url: event.imageUrl, width: 1200, height: 630 }] : undefined;
  return {
    title, description,
    openGraph: { title, description, url, images },
    twitter: { card: "summary_large_image", title, description, images: event.imageUrl ? [event.imageUrl] : undefined },
    alternates: { canonical: url },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug, eventSlug } = await params;

  const [town, event] = await Promise.all([
    getTown(slug),
    getTownEventDetail(slug, eventSlug),
  ]);

  if (!town || !event) notFound();

  const formatDate = (dateStr: string | null, precision?: string) => {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    if (precision === "YEAR") return d.getUTCFullYear().toString();
    if (precision === "MONTH") return d.toLocaleDateString("en-US", { year: "numeric", month: "long", timeZone: "UTC" });
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  };

  const dateParts = event.startDate ? (() => {
    const d = new Date(event.startDate);
    return {
      month: d.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }),
      day: d.toLocaleDateString("en-US", { day: "numeric", timeZone: "UTC" }),
      year: d.getUTCFullYear().toString(),
    };
  })() : null;

  const formattedDate = formatDate(event.startDate, event.datePrecision);
  const isKey = event.significanceWeight >= 70;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.summary.slice(0, 300),
    url: `https://sabrinas-town.vercel.app/towns/${slug}/timeline/${eventSlug}`,
    ...(event.startDate ? { startDate: event.startDate } : {}),
    ...(event.endDate ? { endDate: event.endDate } : {}),
    location: { "@type": "Place", name: town.name, address: { "@type": "PostalAddress", addressRegion: town.state, addressCountry: "US" } },
    organizer: { "@type": "Organization", name: "History is for Everyone", url: "https://sabrinas-town.vercel.app" },
    ...(event.imageUrl ? { image: event.imageUrl } : {}),
  };

  const vid = (event.videoId && event.videoSource)
    ? { videoId: event.videoId, title: event.name, source: event.videoSource, description: undefined }
    : EVENT_VIDEOS[event.id];

  return (
    <div className="bg-[#f2e6c8] min-h-screen">
      <JsonLd data={jsonLd} />

      {/* ── Hero ── */}
      <section className="bg-[#14100a] border-b-4 border-[#cc3322] pt-14 pb-0 px-8 md:px-16 relative overflow-hidden">
        {/* Ghost year watermark */}
        {dateParts && (
          <div
            aria-hidden
            className="absolute right-[-0.02em] bottom-[-0.1em] font-display leading-none text-white/[0.04] pointer-events-none select-none"
            style={{ fontSize: "clamp(10rem,22vw,18rem)" }}
          >
            {dateParts.year}
          </div>
        )}

        {/* Decorative lines */}
        <svg className="absolute top-0 right-[20%] h-full w-[2px] pointer-events-none" viewBox="0 0 2 400" fill="none" preserveAspectRatio="none" aria-hidden>
          <line x1="1" y1="0" x2="1" y2="400" stroke="rgba(232,184,75,0.06)" strokeWidth="2" />
        </svg>

        <div className="relative z-10 max-w-[900px] mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-ui text-[9px] uppercase tracking-[0.2em] text-[#f2e6c8]/25 mb-10">
            <NextLink href="/" className="no-underline hover:text-[#f2e6c8]/50 transition-colors">Home</NextLink>
            <span>/</span>
            <NextLink href={`/towns/${slug}`} className="no-underline hover:text-[#f2e6c8]/50 transition-colors">{town.name}</NextLink>
            <span>/</span>
            <NextLink href={`/towns/${slug}/timeline`} className="no-underline hover:text-[#f2e6c8]/50 transition-colors">Timeline</NextLink>
            <span>/</span>
            <span className="text-[#f2e6c8]/40 truncate max-w-[200px]">{event.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end gap-8 pb-14">
            {/* Date badge */}
            {dateParts ? (
              <div className={`flex-shrink-0 text-center px-4 py-4 self-start ${isKey ? "bg-[#cc3322]" : "bg-[#1a3a72]"} border-[3px] border-[#f2e6c8]/10`}>
                <p className="font-display text-[3rem] text-[#f2e6c8] leading-none">{dateParts.day}</p>
                <p className="font-ui text-[8px] uppercase tracking-[0.12em] text-[#f2e6c8]/60 mt-1">{dateParts.month}</p>
                <p className="font-ui text-[8px] uppercase tracking-[0.08em] text-[#f2e6c8]/40 mt-0.5">{dateParts.year}</p>
              </div>
            ) : (
              <div className="flex-shrink-0 bg-[#1a3a72]/40 border-[3px] border-[#f2e6c8]/10 px-4 py-4 text-center">
                <p className="font-ui text-[8px] uppercase tracking-[0.1em] text-[#f2e6c8]/30 leading-relaxed">Date<br />Unknown</p>
              </div>
            )}

            {/* Title */}
            <div className="flex-1 min-w-0">
              {isKey && (
                <span className="inline-block font-ui text-[7px] uppercase tracking-[0.2em] text-[#e8b84b] border border-[#e8b84b]/40 px-2 py-1 mb-4">
                  Key Event
                </span>
              )}
              <h1
                className="font-display text-[#f2e6c8] leading-[0.9] tracking-[-0.02em]"
                style={{ fontSize: "clamp(32px,5vw,72px)" }}
              >
                {event.name}
              </h1>
              <p className="font-ui text-[9px] uppercase tracking-[0.2em] text-[#f2e6c8]/30 mt-4">
                {town.name}, {town.state}
                {event.datePrecision && event.datePrecision !== "EXACT" && (
                  <span className="ml-3 text-[#f2e6c8]/20">· {event.datePrecision.toLowerCase()} date</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      {(event.people.length > 0 || event.themes.length > 0) && (
        <section className="bg-[#cc3322] border-b-4 border-[#14100a] py-4 px-8 md:px-16 flex flex-wrap gap-8 items-center">
          {event.people.length > 0 && (
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[2rem] text-[#e8b84b] leading-none">{event.people.length}</span>
              <span className="font-ui text-[9px] uppercase tracking-[0.1em] text-white/60">
                {event.people.length === 1 ? "Person" : "People"} Involved
              </span>
            </div>
          )}
          {event.themes.length > 0 && (
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[2rem] text-[#e8b84b] leading-none">{event.themes.length}</span>
              <span className="font-ui text-[9px] uppercase tracking-[0.1em] text-white/60">Themes</span>
            </div>
          )}
          <div className="flex items-baseline gap-2">
            <span className="font-display text-[2rem] text-[#e8b84b] leading-none">{event.significanceWeight}</span>
            <span className="font-ui text-[9px] uppercase tracking-[0.1em] text-white/60">Significance</span>
          </div>
        </section>
      )}

      {/* ── Image (full-width if available) ── */}
      {event.imageUrl && (
        <div className="border-b-4 border-[#14100a]">
          <ImageWithCaption
            src={event.imageUrl}
            alt={event.name}
            caption={event.imageCredit ?? undefined}
          />
        </div>
      )}

      {/* ── Main content ── */}
      <div className="max-w-[900px] mx-auto px-8 md:px-16 py-16">

        {/* Red rule */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-[3px] bg-[#cc3322]" />
          <p className="font-ui text-[9px] uppercase tracking-[0.28em] text-[#cc3322]">The Story</p>
        </div>

        {/* Prose */}
        <div className="space-y-6">
          {event.summary.split("\n\n").map((p, i) => (
            <p
              key={i}
              className="font-editorial text-[18px] md:text-[20px] text-[#14100a]/85 leading-[1.7] tracking-[-0.01em]"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Video */}
        {vid && (
          <div className="mt-12">
            <YouTubeEmbed
              videoId={vid.videoId}
              title={vid.title}
              source={vid.source}
              description={vid.description}
            />
          </div>
        )}

        {/* ── People section ── */}
        {event.people.length > 0 && (
          <div className="mt-16 pt-12 border-t-[3px] border-[#14100a]">
            <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-[#cc3322] flex items-center gap-2 mb-8 before:content-[''] before:w-4 before:h-[2px] before:bg-[#cc3322] before:block">
              People Involved
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {event.people.map((person) => {
                const personHref = (person as { slug?: string | null }).slug
                  ? `/people/${(person as { slug?: string | null }).slug}`
                  : `/towns/${slug}/people`;
                return (
                  <NextLink
                    key={person.id}
                    href={personHref}
                    className="no-underline group flex gap-4 bg-[#f2e6c8] border-[2px] border-[#14100a]/10 p-4 hover:border-[#cc3322] transition-colors"
                  >
                    {/* Portrait or initial */}
                    {(person as { imageUrl?: string | null }).imageUrl ? (
                      <img
                        src={(person as { imageUrl?: string | null }).imageUrl!}
                        alt={person.name}
                        className="w-14 h-14 object-cover flex-shrink-0 grayscale group-hover:grayscale-0 transition-all"
                      />
                    ) : (
                      <div className="w-14 h-14 bg-[#1a3a72] flex items-center justify-center flex-shrink-0">
                        <span className="font-display text-[24px] text-[#f2e6c8]/70 leading-none">
                          {person.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="font-display text-[16px] text-[#14100a] group-hover:text-[#cc3322] transition-colors leading-tight">
                        {person.name}
                      </p>
                      {person.roleInEvent && (
                        <p className="font-ui text-[9px] uppercase tracking-[0.1em] text-[#1a3a72]/60 mt-0.5">
                          {person.roleInEvent}
                        </p>
                      )}
                      {person.bioShort && (
                        <p className="font-ui text-[11px] text-[#14100a]/45 leading-relaxed mt-1.5 line-clamp-2">
                          {person.bioShort}
                        </p>
                      )}
                    </div>
                  </NextLink>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Themes ── */}
        {event.themes.length > 0 && (
          <div className="mt-12 pt-8 border-t border-[#14100a]/10">
            <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-[#cc3322] flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-[#cc3322] before:block">
              Themes
            </p>
            <div className="flex flex-wrap gap-2">
              {event.themes.map((theme) => (
                <a
                  key={theme.id}
                  href={`/towns?q=${encodeURIComponent(theme.name)}`}
                  className="no-underline font-ui text-[9px] tracking-[0.1em] uppercase text-[#14100a]/60 border-2 border-[#14100a]/20 px-3 py-1.5 hover:bg-[#cc3322] hover:text-[#f2e6c8] hover:border-[#cc3322] transition-colors"
                >
                  {theme.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ── Navigation footer ── */}
        <div className="mt-16 pt-8 border-t-[3px] border-[#14100a] flex items-center justify-between gap-4">
          <NextLink
            href={`/towns/${slug}/timeline`}
            className="font-ui text-[9px] tracking-[0.2em] uppercase text-[#14100a]/40 hover:text-[#cc3322] transition-colors no-underline"
          >
            ← Back to Timeline
          </NextLink>
          <NextLink
            href={`/towns/${slug}`}
            className="font-ui text-[9px] tracking-[0.2em] uppercase text-[#14100a]/40 hover:text-[#cc3322] transition-colors no-underline"
          >
            {town.name} →
          </NextLink>
        </div>
      </div>
    </div>
  );
}
