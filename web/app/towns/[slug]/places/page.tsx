import { getTown, getPlaces } from "@/lib/api";
import { ComingSoon } from "@/components/town";
import {
  PageShell,
  PageHeader,
  EditorialSection,
} from "@/components/editorial";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);
  if (!town) return { title: "Visit | Town Not Found" };
  return {
    title: `Visit | ${town.name}, ${town.state} | History is for Everyone`,
    description: `Plan your visit to ${town.name}, ${town.state} — sites, hours, and trip planning information.`,
  };
}

export default async function PlacesPage({ params }: PageProps) {
  const { slug } = await params;
  const [town, placesData] = await Promise.all([getTown(slug), getPlaces(slug)]);

  if (!town) return <ComingSoon slug={slug} section="Places" />;

  const places = placesData
    ? Object.values(placesData.placesByCategory).flat()
    : town.featuredPlaces ?? [];

  const formatPlaceType = (type: string): string => {
    const labels: Record<string, string> = {
      BATTLEFIELD: "Battlefield", HISTORIC_HOUSE: "Historic House",
      MONUMENT: "Monument", MUSEUM: "Museum", CEMETERY: "Cemetery",
      CHURCH: "Church", GOVERNMENT: "Government", TAVERN: "Tavern",
      LANDMARK: "Landmark", TRAIL: "Trail",
    };
    return labels[type] || type;
  };

  return (
    <PageShell>
      <PageHeader
        name={town.name}
        state={town.state}
        subtitle={`${placesData?.totals.total ?? places.length} historic sites to visit.`}
      />

      <EditorialSection id="places" title="Places">
        {places.length > 0 ? (
          <ol className="space-y-0 list-none">
            {places.map((place, i) => (
              <li key={place.id} className="py-4 border-b border-border-light last:border-b-0">
                <div className="flex gap-4">
                  <span className="text-small text-text-muted font-body tabular-nums w-6 shrink-0">
                    {i + 1}.
                  </span>
                  <div>
                    <p className="font-body font-medium">
                      <a
                        href={`/towns/${slug}/places/${(place as any).slug || place.id}`}
                        className="hover:text-accent-blue transition-colors"
                      >
                        {place.name}
                      </a>
                    </p>
                    <p className="mt-1 text-small text-text-muted font-body uppercase tracking-wide">
                      {formatPlaceType(place.placeType)}
                      {place.address && <> &middot; {place.address}</>}
                    </p>
                    {place.description && (
                      <p className="mt-2 text-small font-body leading-relaxed text-text-primary">
                        {place.description}
                      </p>
                    )}
                    {place.hours && (
                      <p className="mt-1 text-small text-text-muted font-body">Hours: {place.hours}</p>
                    )}
                    {place.website && (
                      <a href={place.website} className="mt-1 inline-block text-small text-accent-blue font-body hover:underline" target="_blank" rel="noopener noreferrer">
                        Website &rarr;
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-text-muted font-body">
            Places directory for {town.name} is being compiled.
          </p>
        )}
      </EditorialSection>
    </PageShell>
  );
}
