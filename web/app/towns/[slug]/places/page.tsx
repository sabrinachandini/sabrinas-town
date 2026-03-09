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
      BATTLEFIELD: "Battlefield",
      HISTORIC_HOUSE: "Historic House",
      MONUMENT: "Monument",
      MUSEUM: "Museum",
      CEMETERY: "Cemetery",
      CHURCH: "Church",
      GOVERNMENT: "Government",
      TAVERN: "Tavern",
      LANDMARK: "Landmark",
      TRAIL: "Trail",
    };
    return labels[type] || type;
  };

  return (
    <PageShell>
      <PageHeader
        name={town.name}
        state={town.state}
        subtitle={`${placesData?.totals.total ?? places.length} historic sites to visit.`}
        variant="bold"
      />

      <EditorialSection id="places" title="Places">
        {places.length > 0 ? (
          <div>
            {places.map((place) => (
              <a
                key={place.id}
                href={`/towns/${slug}/places/${(place as any).slug || place.id}`}
                className="flex items-baseline justify-between gap-4 py-5 border-b border-[#0e1428]/8 last:border-b-0 no-underline group"
              >
                <div className="min-w-0">
                  <p className="font-editorial text-[1.375rem] text-[#0e1428] group-hover:text-[#c8222a] transition-colors">
                    {place.name}
                  </p>

                  <p className="font-ui text-[0.75rem] text-[#0e1428]/50 uppercase tracking-[0.08em] mt-1">
                    {formatPlaceType(place.placeType)}
                    {place.address && <> &middot; {place.address}</>}
                  </p>

                  {place.description && (
                    <p className="font-editorial text-[0.95rem] text-[#0e1428]/70 leading-relaxed mt-2">
                      {place.description}
                    </p>
                  )}
                </div>

                <span className="font-display text-[#c8222a] group-hover:translate-x-1 transition-transform shrink-0 text-[1.25rem] leading-none">
                  &rarr;
                </span>
              </a>
            ))}
          </div>
        ) : (
          <p className="font-ui text-[0.85rem] text-[#0e1428]/50">
            Places directory for {town.name} is being compiled.
          </p>
        )}
      </EditorialSection>
    </PageShell>
  );
}
