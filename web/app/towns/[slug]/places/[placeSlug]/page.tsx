import { notFound } from "next/navigation";
import { getTown, getTownPlaceDetail, getRankings, getPlaces } from "@/lib/api";

export async function generateStaticParams() {
  const towns = await getRankings({ limit: 500 });
  const params: { slug: string; placeSlug: string }[] = [];
  for (const town of towns ?? []) {
    const placesData = await getPlaces(town.slug);
    const places = placesData ? Object.values(placesData.placesByCategory).flat() : [];
    for (const place of places) {
      if (place.slug) params.push({ slug: town.slug, placeSlug: place.slug });
    }
  }
  return params;
}
import {
  PageShell,
  PageHeader,
  EditorialSection,
  Prose,
} from "@/components/editorial";

export const revalidate = 3600;

const PLACE_TYPE_LABELS: Record<string, string> = {
  BATTLEFIELD: "Battlefield",
  HISTORIC_HOUSE: "Historic House",
  MONUMENT: "Monument",
  MUSEUM: "Museum",
  CEMETERY: "Cemetery",
  CHURCH: "Church",
  GOVERNMENT: "Government Building",
  TAVERN: "Tavern",
  LANDMARK: "Landmark",
  TRAIL: "Trail",
};

interface PageProps {
  params: Promise<{ slug: string; placeSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, placeSlug } = await params;
  const place = await getTownPlaceDetail(slug, placeSlug);

  if (!place) {
    return { title: "Place Not Found" };
  }

  const title = place.name;
  const description = place.description.slice(0, 160);
  const url = `https://sabrinas-town.vercel.app/towns/${slug}/places/${placeSlug}`;
  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { card: "summary_large_image" as const, title, description },
    alternates: { canonical: url },
  };
}

export default async function PlaceDetailPage({ params }: PageProps) {
  const { slug, placeSlug } = await params;

  const [town, place] = await Promise.all([
    getTown(slug),
    getTownPlaceDetail(slug, placeSlug),
  ]);

  if (!town || !place) {
    notFound();
  }

  return (
    <PageShell>
      <PageHeader
        variant="bold"
        name={place.name}
        state={town.state}
        subtitle={PLACE_TYPE_LABELS[place.placeType] || place.placeType}
      />

      <Prose>
        {place.description.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Prose>

      {place.historicalNote && (
        <EditorialSection id="what-happened" title="What Happened Here">
          <Prose>
            {place.historicalNote.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Prose>
        </EditorialSection>
      )}

      {(place.address || place.hours || place.admission || place.website) && (
        <EditorialSection id="visiting" title="Visiting Today">
          <div className="space-y-4">
            {place.address && (
              <div>
                <p className="font-ui text-[9px] uppercase tracking-[0.1em] text-ink/40 mb-0.5">
                  Address
                </p>
                <p className="font-editorial text-[16px] text-ink">
                  {place.address}
                </p>
              </div>
            )}
            {place.hours && (
              <div>
                <p className="font-ui text-[9px] uppercase tracking-[0.1em] text-ink/40 mb-0.5">
                  Hours
                </p>
                <p className="font-editorial text-[16px] text-ink">
                  {place.hours}
                </p>
              </div>
            )}
            {place.admission && (
              <div>
                <p className="font-ui text-[9px] uppercase tracking-[0.1em] text-ink/40 mb-0.5">
                  Admission
                </p>
                <p className="font-editorial text-[16px] text-ink">
                  {place.admission}
                </p>
              </div>
            )}
            {place.accessibilityNotes && (
              <div>
                <p className="font-ui text-[9px] uppercase tracking-[0.1em] text-ink/40 mb-0.5">
                  Accessibility
                </p>
                <p className="font-editorial text-[16px] text-ink">
                  {place.accessibilityNotes}
                </p>
              </div>
            )}
            {place.website && (
              <div>
                <a
                  href={place.website}
                  className="font-ui text-[9px] tracking-[0.2em] uppercase text-ink/40 hover:text-crimson transition-colors no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official website &rarr;
                </a>
              </div>
            )}
          </div>
        </EditorialSection>
      )}

      {place.connectedEvents.length > 0 && (
        <EditorialSection id="events" title="Connected Events">
          <div>
            {place.connectedEvents
              .sort((a, b) => {
                if (!a.startDate) return 1;
                if (!b.startDate) return -1;
                return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
              })
              .slice(0, 10)
              .map((event) => (
                <div
                  key={event.id}
                  className="flex gap-6 py-4 border-b border-ink/8 last:border-b-0"
                >
                  <span className="w-[100px] shrink-0 font-ui text-[11px] text-ink/40 tabular-nums">
                    {event.startDate
                      ? new Date(event.startDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })
                      : ""}
                  </span>
                  <div>
                    <a
                      href={`/towns/${slug}/timeline/${event.slug || event.id}`}
                      className="font-editorial text-[18px] text-ink hover:text-crimson transition-colors no-underline"
                    >
                      {event.name}
                    </a>
                    {event.people.length > 0 && (
                      <p className="mt-1 font-ui text-[0.75rem] text-ink/40">
                        {event.people.map((p) => p.name).join(", ")}
                      </p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </EditorialSection>
      )}

      <div className="mt-12 pt-8 border-t border-ink/8">
        <a
          href={`/towns/${slug}/places`}
          className="font-ui text-[9px] tracking-[0.2em] uppercase text-ink/40 hover:text-crimson transition-colors no-underline"
        >
          &larr; Back to places
        </a>
      </div>
    </PageShell>
  );
}
