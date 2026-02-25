import { getTown, TownPlace } from "@/lib/api";
import { Container, Heading, Text, Divider, Link } from "@/components/ui";
import { EmptyState } from "@/components/town";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return { title: "Visit | Town Not Found" };
  }

  return {
    title: `Visit | ${town.name}, ${town.state} | Sabrina's Town`,
    description: `Plan your visit to ${town.name}, ${town.state} — sites, hours, and trip planning information.`,
  };
}

export default async function VisitPage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return null;
  }

  const tourismInfo = town.tourismInfo as Record<string, unknown> | null;
  const hasContent = tourismInfo && !tourismInfo.placeholder;

  if (!hasContent) {
    return (
      <EmptyState
        title="Visitor Information Coming Soon"
        description={`Practical visitor information for ${town.name} is being compiled. This section will include historic sites, museums, hours of operation, accessibility details, and trip planning resources to help you experience this town's Revolutionary history firsthand.`}
        townSlug={slug}
      />
    );
  }

  return (
    <div className="py-section">
      {/* Intro */}
      <Container>
        <Text className="text-text-muted max-w-[720px]">
          Planning a visit requires practical information: what's open, how to get there, what's worth your time. This section covers the logistics of experiencing {town.name}'s Revolutionary sites.
        </Text>
      </Container>

      <Divider spacing="section" />

      {/* Tourism Quick Facts */}
      <section>
        <Container>
          <Heading level={2}>Visitor Quick Facts</Heading>
          <div className="mt-component grid sm:grid-cols-2 lg:grid-cols-3 gap-element">
            {tourismInfo?.bestTimeToVisit && (
              <InfoCard
                label="Best Time to Visit"
                value={String(tourismInfo.bestTimeToVisit)}
              />
            )}
            {tourismInfo?.avgVisitDuration && (
              <InfoCard
                label="Suggested Duration"
                value={String(tourismInfo.avgVisitDuration)}
              />
            )}
            {tourismInfo?.npsDesignation && (
              <InfoCard
                label="NPS Designation"
                value="National Park Service site"
              />
            )}
            {tourismInfo?.stateHistoricSite && (
              <InfoCard
                label="State Recognition"
                value="State Historic Site"
              />
            )}
          </div>
        </Container>
      </section>

      {/* Accessibility */}
      <Divider spacing="section" />
      <section>
        <Container>
          <Heading level={2}>Getting There</Heading>
          <div className="mt-component grid sm:grid-cols-2 gap-element">
            {tourismInfo?.publicTransitAccess !== undefined && (
              <AccessCard
                label="Public Transit"
                available={Boolean(tourismInfo.publicTransitAccess)}
              />
            )}
            {tourismInfo?.parkingAvailable !== undefined && (
              <AccessCard
                label="Parking"
                available={Boolean(tourismInfo.parkingAvailable)}
              />
            )}
            {tourismInfo?.nearMajorCity !== undefined && (
              <AccessCard
                label="Near Major City"
                available={Boolean(tourismInfo.nearMajorCity)}
              />
            )}
          </div>
          {tourismInfo?.walkabilityScore && (
            <div className="mt-element p-element bg-bg-secondary rounded-lg">
              <div className="flex items-center justify-between">
                <Text size="small" muted>Walkability Score</Text>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-border-light rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent-blue rounded-full"
                      style={{ width: `${tourismInfo.walkabilityScore}%` }}
                    />
                  </div>
                  <Text size="small" className="font-mono">
                    {String(tourismInfo.walkabilityScore)}
                  </Text>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Interpretation */}
      {(tourismInfo?.guidedToursAvailable || tourismInfo?.visitorCenterQuality) && (
        <>
          <Divider spacing="section" />
          <section>
            <Container>
              <Heading level={2}>On-Site Resources</Heading>
              <div className="mt-component grid sm:grid-cols-2 gap-element">
                {tourismInfo?.guidedToursAvailable && (
                  <div className="p-element bg-bg-secondary rounded-lg">
                    <Text className="font-medium">Guided Tours</Text>
                    <Text size="small" muted className="mt-tight">
                      Available on-site
                    </Text>
                  </div>
                )}
                {tourismInfo?.visitorCenterQuality && (
                  <div className="p-element bg-bg-secondary rounded-lg">
                    <Text className="font-medium">Visitor Center</Text>
                    <Text size="small" muted className="mt-tight">
                      Quality rating: {String(tourismInfo.visitorCenterQuality)}/100
                    </Text>
                  </div>
                )}
                {tourismInfo?.educationalProgramsCount && (
                  <div className="p-element bg-bg-secondary rounded-lg">
                    <Text className="font-medium">Educational Programs</Text>
                    <Text size="small" muted className="mt-tight">
                      {String(tourismInfo.educationalProgramsCount)} programs offered
                    </Text>
                  </div>
                )}
              </div>
            </Container>
          </section>
        </>
      )}

      {/* Places */}
      <Divider spacing="section" />
      <section>
        <Container>
          <Heading level={2}>Places to See</Heading>
          {town.places && town.places.length > 0 ? (
            <>
              <Text className="mt-element text-text-muted max-w-[620px]">
                {town.places.length} historic sites and points of interest in {town.name}. Featured destinations are highlighted first.
              </Text>

              {/* Featured Places */}
              {town.places.filter((p) => p.featured).length > 0 && (
                <div className="mt-component">
                  <Text size="small" muted className="uppercase tracking-wide mb-element">
                    Featured Destinations
                  </Text>
                  <div className="grid md:grid-cols-2 gap-element">
                    {town.places
                      .filter((p) => p.featured)
                      .map((place) => (
                        <PlaceCard key={place.id} place={place} featured />
                      ))}
                  </div>
                </div>
              )}

              {/* All Places by Type */}
              <div className="mt-component">
                <Text size="small" muted className="uppercase tracking-wide mb-element">
                  All Sites
                </Text>
                <div className="space-y-element">
                  {town.places
                    .filter((p) => !p.featured)
                    .map((place) => (
                      <PlaceCard key={place.id} place={place} />
                    ))}
                </div>
              </div>
            </>
          ) : (
            <div className="mt-component p-element bg-bg-secondary rounded-lg border border-dashed border-border-light text-center">
              <Text size="small" muted className="italic">
                Places directory coming soon
              </Text>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-element bg-bg-secondary rounded-lg">
      <Text size="small" muted className="uppercase tracking-wide">
        {label}
      </Text>
      <Text className="mt-tight">{value}</Text>
    </div>
  );
}

function AccessCard({ label, available }: { label: string; available: boolean }) {
  return (
    <div className="p-element bg-bg-secondary rounded-lg flex items-center gap-3">
      <div
        className={`w-3 h-3 rounded-full ${
          available ? "bg-accent-blue" : "bg-border-light"
        }`}
      />
      <div>
        <Text size="small">{label}</Text>
        <Text size="small" muted>
          {available ? "Available" : "Not available"}
        </Text>
      </div>
    </div>
  );
}

const placeTypeLabels: Record<string, string> = {
  BATTLEFIELD: "Battlefield",
  HISTORIC_HOUSE: "Historic House",
  MONUMENT: "Monument",
  MUSEUM: "Museum",
  CEMETERY: "Cemetery",
  CHURCH: "Church",
  GOVERNMENT: "Government",
  TAVERN: "Historic Tavern",
  LANDMARK: "Landmark",
  TRAIL: "Trail",
};

function PlaceCard({ place, featured = false }: { place: TownPlace; featured?: boolean }) {
  return (
    <div
      className={`p-element bg-bg-secondary rounded-lg ${
        featured ? "border-l-4 border-accent-blue" : ""
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <Text className="font-medium">{place.name}</Text>
          <Text size="small" className="text-accent-blue">
            {placeTypeLabels[place.placeType] || place.placeType}
          </Text>
        </div>
        {place.admission && (
          <Text size="small" className="px-2 py-1 bg-bg-primary rounded">
            {place.admission}
          </Text>
        )}
      </div>

      <Text size="small" className="mt-element">
        {place.description}
      </Text>

      {place.historicalNote && (
        <Text size="small" muted className="mt-element italic">
          {place.historicalNote}
        </Text>
      )}

      <div className="mt-element flex flex-wrap gap-element text-small">
        {place.hours && (
          <div>
            <Text size="small" muted>Hours:</Text>
            <Text size="small" className="ml-1">{place.hours}</Text>
          </div>
        )}
        {place.address && (
          <div>
            <Text size="small" muted>Address:</Text>
            <Text size="small" className="ml-1">{place.address}</Text>
          </div>
        )}
      </div>

      <div className="mt-element flex flex-wrap gap-3">
        {place.website && (
          <Link
            href={place.website}
            className="text-small text-accent-blue hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website →
          </Link>
        )}
        {place.phone && (
          <Text size="small" muted>
            {place.phone}
          </Text>
        )}
      </div>

      {place.amenities && place.amenities.length > 0 && (
        <div className="mt-element flex flex-wrap gap-2">
          {place.amenities.map((amenity) => (
            <span
              key={amenity}
              className="px-2 py-1 text-small bg-bg-primary rounded border border-border-light"
            >
              {amenity}
            </span>
          ))}
        </div>
      )}

      {place.accessibilityNotes && (
        <Text size="small" muted className="mt-element">
          Accessibility: {place.accessibilityNotes}
        </Text>
      )}
    </div>
  );
}
