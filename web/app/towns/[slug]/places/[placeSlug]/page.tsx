import { notFound } from "next/navigation";
import { getTown, getTownPlaceDetail } from "@/lib/api";
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

  return {
    title: `${place.name} | History is for Everyone`,
    description: place.description.slice(0, 160),
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
          {/* Section divider label */}
          <div className="mb-6 pb-2 border-b border-[#0e1428]/10">
            <span className="font-display text-[0.9rem] tracking-[0.15em] uppercase text-[#0e1428]/30">
              Plan Your Visit
            </span>
          </div>

          <div className="space-y-4">
            {place.address && (
              <div>
                <p className="font-ui text-[0.7rem] uppercase tracking-[0.1em] text-[#0e1428]/40 mb-0.5">
                  Address
                </p>
                <p className="font-editorial text-[1rem] text-[#0e1428]">
                  {place.address}
                </p>
              </div>
            )}
            {place.hours && (
              <div>
                <p className="font-ui text-[0.7rem] uppercase tracking-[0.1em] text-[#0e1428]/40 mb-0.5">
                  Hours
                </p>
                <p className="font-editorial text-[1rem] text-[#0e1428]">
                  {place.hours}
                </p>
              </div>
            )}
            {place.admission && (
              <div>
                <p className="font-ui text-[0.7rem] uppercase tracking-[0.1em] text-[#0e1428]/40 mb-0.5">
                  Admission
                </p>
                <p className="font-editorial text-[1rem] text-[#0e1428]">
                  {place.admission}
                </p>
              </div>
            )}
            {place.accessibilityNotes && (
              <div>
                <p className="font-ui text-[0.7rem] uppercase tracking-[0.1em] text-[#0e1428]/40 mb-0.5">
                  Accessibility
                </p>
                <p className="font-editorial text-[1rem] text-[#0e1428]">
                  {place.accessibilityNotes}
                </p>
              </div>
            )}
            {place.website && (
              <div>
                <a
                  href={place.website}
                  className="font-ui text-[0.72rem] tracking-[0.08em] uppercase text-[#c8222a] hover:text-[#0e1428] transition-colors"
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
          {/* Section divider label */}
          <div className="mb-6 pb-2 border-b border-[#0e1428]/10">
            <span className="font-display text-[0.9rem] tracking-[0.15em] uppercase text-[#0e1428]/30">
              Timeline
            </span>
          </div>

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
                  className="flex gap-6 py-4 border-b border-[#0e1428]/8 last:border-b-0"
                >
                  <span className="w-[100px] shrink-0 font-ui text-[0.75rem] text-[#0e1428]/40 tabular-nums">
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
                      className="font-editorial text-[1rem] text-[#0e1428] hover:text-[#c8222a] transition-colors no-underline"
                    >
                      {event.name}
                    </a>
                    {event.people.length > 0 && (
                      <p className="mt-1 font-ui text-[0.75rem] text-[#0e1428]/40">
                        {event.people.map((p) => p.name).join(", ")}
                      </p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </EditorialSection>
      )}

      <div className="mt-12 pt-8 border-t border-[#0e1428]/8">
        <a
          href={`/towns/${slug}/places`}
          className="font-ui text-[0.72rem] tracking-[0.08em] uppercase text-[#0e1428]/50 hover:text-[#c8222a] transition-colors no-underline"
        >
          &larr; Back to places
        </a>
      </div>
    </PageShell>
  );
}
