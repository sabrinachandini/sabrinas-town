import { getTown, getPlaces, TownPlace } from "@/lib/api";
import { Container, Heading, Text, Divider, Link } from "@/components/ui";
import { EmptyState } from "@/components/town";
import { PlacesSection } from "./PlacesSection";

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
  const [town, placesData] = await Promise.all([
    getTown(slug),
    getPlaces(slug),
  ]);

  if (!town) {
    return null;
  }

  const tourismInfo = town.tourismInfo as {
    placeholder?: boolean;
    bestTimeToVisit?: string;
    avgVisitDuration?: string;
    npsDesignation?: boolean;
    stateHistoricSite?: boolean;
    publicTransitAccess?: boolean;
    parkingAvailable?: boolean;
    nearMajorCity?: boolean;
    walkabilityScore?: number;
    guidedToursAvailable?: boolean;
    visitorCenterQuality?: number;
    educationalProgramsCount?: number;
  } | null;
  const hasTourismInfo = tourismInfo && !tourismInfo.placeholder;
  const hasPlaces = placesData && placesData.totals.total > 0;

  // Show empty state only if no tourism info AND no places
  if (!hasTourismInfo && !hasPlaces) {
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

      {/* Tourism Quick Facts - only if available */}
      {hasTourismInfo && (
        <>
          <Divider spacing="section" />
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

          {/* Getting There */}
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

          {/* On-Site Resources */}
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
        </>
      )}

      {/* Places Section */}
      <Divider spacing="section" />
      {hasPlaces && placesData ? (
        <PlacesSection
          townName={town.name}
          totals={placesData.totals}
          featured={placesData.featured}
          placesByCategory={placesData.placesByCategory}
        />
      ) : (
        <section>
          <Container>
            <Heading level={2}>Places to See</Heading>
            <div className="mt-component p-element bg-bg-secondary rounded-lg border border-dashed border-border-light">
              <Text size="small" muted className="italic">
                Places directory for {town.name} is being compiled. Check back soon, or explore the{" "}
                <Link href={`/towns/${slug}`} className="text-accent-blue hover:underline">
                  Overview
                </Link>{" "}
                and{" "}
                <Link href={`/towns/${slug}/connected`} className="text-accent-blue hover:underline">
                  Connected Towns
                </Link>{" "}
                sections.
              </Text>
            </div>
          </Container>
        </section>
      )}

      {/* Data Notes Footer */}
      <Divider spacing="section" />
      <Container>
        <Text size="small" muted className="max-w-[620px]">
          Details like hours and pricing change. We link to official sources when possible. If you notice outdated information, please let us know.
        </Text>
      </Container>
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
