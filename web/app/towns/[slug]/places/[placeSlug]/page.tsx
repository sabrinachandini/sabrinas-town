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
          <div className="space-y-3">
            {place.address && (
              <p className="font-body">
                <span className="text-small text-text-muted uppercase tracking-wide">Address:</span>{" "}
                {place.address}
              </p>
            )}
            {place.hours && (
              <p className="font-body">
                <span className="text-small text-text-muted uppercase tracking-wide">Hours:</span>{" "}
                {place.hours}
              </p>
            )}
            {place.admission && (
              <p className="font-body">
                <span className="text-small text-text-muted uppercase tracking-wide">Admission:</span>{" "}
                {place.admission}
              </p>
            )}
            {place.accessibilityNotes && (
              <p className="font-body">
                <span className="text-small text-text-muted uppercase tracking-wide">Accessibility:</span>{" "}
                {place.accessibilityNotes}
              </p>
            )}
            {place.website && (
              <p className="font-body">
                <a
                  href={place.website}
                  className="text-accent-blue hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official website &rarr;
                </a>
              </p>
            )}
          </div>
        </EditorialSection>
      )}

      {place.connectedEvents.length > 0 && (
        <EditorialSection id="events" title="Connected Events">
          <ol className="space-y-0">
            {place.connectedEvents
              .sort((a, b) => {
                if (!a.startDate) return 1;
                if (!b.startDate) return -1;
                return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
              })
              .slice(0, 10)
              .map((event) => (
                <li
                  key={event.id}
                  className="flex gap-6 py-4 border-b border-border-light last:border-b-0"
                >
                  <span className="w-[100px] shrink-0 text-small text-text-muted font-body tabular-nums">
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
                      className="font-body font-medium hover:text-accent-blue transition-colors"
                    >
                      {event.name}
                    </a>
                    {event.people.length > 0 && (
                      <p className="mt-1 text-small text-text-muted font-body">
                        {event.people.map((p) => p.name).join(", ")}
                      </p>
                    )}
                  </div>
                </li>
              ))}
          </ol>
        </EditorialSection>
      )}

      <div className="mt-12 pt-8 border-t border-border-light">
        <a
          href={`/towns/${slug}/places`}
          className="text-small text-accent-blue font-body hover:underline"
        >
          &larr; Back to places
        </a>
      </div>
    </PageShell>
  );
}
