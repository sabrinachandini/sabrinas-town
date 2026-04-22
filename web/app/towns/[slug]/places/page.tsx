import { getTown, getPlaces, getRankings } from "@/lib/api";
import { ComingSoon } from "@/components/town";
import {
  PageShell,
  PageHeader,
  EditorialSection,
} from "@/components/editorial";
import NextLink from "next/link";

export const revalidate = 3600;

export async function generateStaticParams() {
  const towns = await getRankings({ limit: 500 });
  return (towns ?? []).map((t) => ({ slug: t.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);
  if (!town) return { title: "Visit | Town Not Found" };
  const title = `Places | ${town.name}, ${town.state}`;
  const description = `Plan your visit to ${town.name}, ${town.state} — historic sites, hours, and trip planning.`;
  const url = `https://sabrinas-town.vercel.app/towns/${slug}/places`;
  const images = town.imageUrl ? [{ url: town.imageUrl, width: 1200, height: 630 }] : undefined;
  return {
    title,
    description,
    openGraph: { title, description, url, images },
    twitter: { card: "summary_large_image", title, description, images: town.imageUrl ? [town.imageUrl] : undefined },
    alternates: { canonical: url },
  };
}

export default async function PlacesPage({ params }: PageProps) {
  const { slug } = await params;
  const [town, placesData] = await Promise.all([getTown(slug), getPlaces(slug)]);

  if (!town) return <ComingSoon slug={slug} section="Places" />;

  const allPlaces = placesData
    ? Object.values(placesData.placesByCategory).flat()
    : town.featuredPlaces ?? [];

  // Only show places that are outdoors or verifiably open to the public.
  // Historic houses with no hours/admission info are assumed private residences.
  const places = allPlaces.filter((place) => {
    if (place.placeType === "HISTORIC_HOUSE") {
      return place.hours !== null || place.admission !== null;
    }
    return true;
  });

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
            {/* Section header */}
            <div className="border-b-[3px] border-ink pb-3 mb-0">
              <p className="font-display text-[24px] text-ink/30 tracking-[0.15em] uppercase">
                Historic Sites
              </p>
            </div>

            {places.map((place) => (
              <NextLink
                key={place.id}
                href={`/towns/${slug}/places/${place.slug || place.id}`}
                className="flex items-center justify-between group py-4 border-b border-ink/8 no-underline hover:bg-ink/5 hover:pl-2 transition-all duration-150"
              >
                <div className="min-w-0">
                  <p className="font-editorial text-[22px] text-ink group-hover:text-crimson transition-colors">
                    {place.name}
                  </p>

                  <p className="font-ui text-[11px] uppercase tracking-[0.1em] text-crimson/60 mt-0.5">
                    {formatPlaceType(place.placeType)}
                    {place.address && <> &middot; {place.address}</>}
                  </p>

                  {place.description && (
                    <p className="font-editorial text-[19px] text-ink/60 mt-2 line-clamp-2">
                      {place.description}
                    </p>
                  )}

                  {(place.hours || place.admission) && (
                    <div className="flex flex-wrap gap-3 mt-2">
                      {place.hours && (
                        <span className="font-ui text-[10px] text-ink/40 tracking-wide">
                          🕐 {place.hours}
                        </span>
                      )}
                      {place.admission && (
                        <span className="font-ui text-[10px] text-ink/40 tracking-wide">
                          {place.admission.toLowerCase().startsWith("free") ? "✓ Free" : `$ ${place.admission}`}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <span className="font-display text-crimson shrink-0 ml-4 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </NextLink>
            ))}
          </div>
        ) : (
          <p className="font-ui text-[0.85rem] text-ink/50">
            Places directory for {town.name} is being compiled.
          </p>
        )}
      </EditorialSection>
    </PageShell>
  );
}
