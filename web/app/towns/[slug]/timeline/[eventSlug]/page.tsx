import { notFound } from "next/navigation";
import { getTown, getTownEventDetail } from "@/lib/api";
import { EVENT_VIDEOS } from "@/lib/videos";
import { PageShell, PageHeader, Prose, ImageWithCaption, YouTubeEmbed } from "@/components/editorial";
import { JsonLd } from "@/components/seo/JsonLd";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string; eventSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, eventSlug } = await params;
  const event = await getTownEventDetail(slug, eventSlug);

  if (!event) {
    return { title: "Event Not Found" };
  }

  const title = event.name;
  const description = event.summary.slice(0, 160);
  const url = `https://sabrinas-town.vercel.app/towns/${slug}/timeline/${eventSlug}`;
  const images = event.imageUrl ? [{ url: event.imageUrl, width: 1200, height: 630 }] : undefined;
  return {
    title,
    description,
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

  if (!town || !event) {
    notFound();
  }

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return null;
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formattedDate = formatDate(event.startDate);

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

  return (
    <PageShell>
      <JsonLd data={jsonLd} />
      <PageHeader
        variant="bold"
        name={event.name}
        state={town.state}
        subtitle={formattedDate ?? undefined}
      />

      {/* Metadata strip */}
      {(formattedDate || event.datePrecision) && (
        <div className="flex flex-wrap gap-8 mt-4 mb-2">
          {formattedDate && (
            <div>
              <span className="font-ui text-[11px] uppercase tracking-[0.1em] text-ink/40 block">
                Date
              </span>
              <span className="font-editorial text-[16px] text-ink">
                {formattedDate}
              </span>
            </div>
          )}
          {event.datePrecision && event.datePrecision !== "EXACT" && (
            <div>
              <span className="font-ui text-[11px] uppercase tracking-[0.1em] text-ink/40 block">
                Precision
              </span>
              <span className="font-editorial text-[16px] text-ink capitalize">
                {event.datePrecision.toLowerCase()}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Red accent rule */}
      <div className="w-12 h-[3px] bg-crimson my-6" />

      <Prose>
        {event.summary.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Prose>

      {event.imageUrl && (
        <ImageWithCaption
          src={event.imageUrl}
          alt={event.name}
          caption={event.imageCredit ?? undefined}
        />
      )}

      {(() => {
        const vid = (event.videoId && event.videoSource)
          ? { videoId: event.videoId, title: event.name, source: event.videoSource, description: undefined }
          : EVENT_VIDEOS[event.id];
        return vid ? (
          <YouTubeEmbed
            videoId={vid.videoId}
            title={vid.title}
            source={vid.source}
            description={vid.description}
          />
        ) : null;
      })()}

      {event.people.length > 0 && (
        <div className="mt-10">
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
            People Involved
          </p>
          <div className="space-y-0">
            {event.people.map((person) => (
              <div
                key={person.id}
                className="py-4 border-b border-ink/8 last:border-b-0"
              >
                <a
                  href={`/towns/${slug}/people/${(person as any).slug ?? person.id}`}
                  className="no-underline"
                >
                  <span className="font-editorial text-[18px] text-ink hover:text-crimson transition-colors">
                    {person.name}
                  </span>
                  {person.roleInEvent && (
                    <span className="ml-2 font-ui text-[11px] uppercase text-ink/50">
                      ({person.roleInEvent})
                    </span>
                  )}
                </a>
                <p className="mt-1 font-ui text-[11px] text-ink/50 leading-relaxed">
                  {person.bioShort}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {event.themes.length > 0 && (
        <div className="mt-10">
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
            Themes
          </p>
          <div className="flex flex-wrap gap-2">
            {event.themes.map((theme) => (
              <a
                key={theme.id}
                href={`/towns?q=${encodeURIComponent(theme.name)}`}
                className="no-underline font-ui text-[9px] tracking-[0.1em] uppercase text-ink/60 border-2 border-ink/20 px-2.5 py-1 hover:bg-crimson hover:text-cream hover:border-crimson transition-colors"
              >
                {theme.name}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-ink/10">
        <a
          href={`/towns/${slug}/timeline`}
          className="font-ui text-[9px] tracking-[0.2em] uppercase text-ink/40 hover:text-crimson transition-colors no-underline"
        >
          &larr; Back to timeline
        </a>
      </div>
    </PageShell>
  );
}
