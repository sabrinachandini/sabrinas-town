import { getTown, Town } from "@/lib/api";
import { Container, Text, Divider } from "@/components/ui";
import {
  HubCard,
  FeaturedList,
  FeaturedListItem,
  MiniTimeline,
  SectionHeader,
  TransparencyFooter,
} from "@/components/town";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return { title: "Town Not Found" };
  }

  return {
    title: `${town.name}, ${town.state} | Sabrina's Town`,
    description: town.execSummary150,
  };
}

export default async function TownOverviewPage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return null; // Layout handles 404
  }

  // Transform data for FeaturedList components
  const placeItems: FeaturedListItem[] = (town.featuredPlaces || [])
    .slice(0, 5)
    .map((place) => ({
      id: place.id,
      title: place.name,
      badge: formatPlaceType(place.placeType),
    }));

  const eventItems: FeaturedListItem[] = town.events.slice(0, 5).map((event) => ({
    id: event.id,
    title: event.name,
    badge: formatEventDate(event.startDate),
  }));

  const connectionItems: FeaturedListItem[] = town.linkedTowns
    .slice(0, 5)
    .map((link) => ({
      id: link.townId,
      title: link.townName,
      subtitle: link.reason,
      badge: link.linkType.replace(/_/g, " ").toLowerCase(),
      href: `/towns/${link.townSlug}`,
    }));

  return (
    <div className="py-section">
      {/* Section 2: Executive Summary */}
      <Container>
        <div className="max-w-[720px]">
          <Text className="text-text-muted">{town.execSummary150}</Text>
        </div>
      </Container>

      {/* Section 3: Why It Matters */}
      <Divider spacing="section" />
      <section>
        <Container>
          <SectionHeader
            title="Why it matters"
            linkHref={
              town.whyMatters.split("\n\n").length > 2
                ? `/towns/${slug}/history`
                : undefined
            }
            linkText={
              town.whyMatters.split("\n\n").length > 2
                ? "Continue reading →"
                : undefined
            }
          />
          <div className="mt-element max-w-[720px]">
            {town.whyMatters
              .split("\n\n")
              .slice(0, 2)
              .map((paragraph, i) => (
                <Text key={i} className={i > 0 ? "mt-element" : ""}>
                  {paragraph}
                </Text>
              ))}
          </div>
        </Container>
      </section>

      {/* Section 4: Featured Highlights Grid */}
      <Divider spacing="section" />
      <section>
        <Container>
          <SectionHeader title={`Explore ${town.name}`} />
          <Text className="mt-element text-text-muted max-w-[620px]">
            Choose your path through this town's Revolutionary story.
          </Text>

          <div className="mt-component grid sm:grid-cols-2 gap-element">
            <HubCard
              href={`/towns/${slug}/history`}
              title="History"
              description="Timeline and context for what happened here"
              count={town.themes.length > 0 ? `${town.themes.length} themes` : undefined}
            />
            <HubCard
              href={`/towns/${slug}/people`}
              title="People"
              description="Historical figures connected to this town"
              count={
                getUniquePeopleCount(town) > 0
                  ? `${getUniquePeopleCount(town)} figures`
                  : undefined
              }
            />
            <HubCard
              href={`/towns/${slug}/visit`}
              title="Visit"
              description="Sites, hours, and planning information"
              count={
                town.placesTotals?.total
                  ? `${town.placesTotals.total} places`
                  : undefined
              }
            />
            <HubCard
              href={`/towns/${slug}/itineraries`}
              title="Itineraries"
              description="Suggested routes and day trips"
              count={town.routes.length > 0 ? `${town.routes.length} routes` : undefined}
            />
            <HubCard
              href={`/towns/${slug}/stories`}
              title="Stories"
              description="First-person accounts and voices"
              count={
                town.stories.length > 0 ? `${town.stories.length} stories` : undefined
              }
            />
            <HubCard
              href={`/towns/${slug}/teacher`}
              title="Teach"
              description="Lesson plans and classroom materials"
            />
            <HubCard
              href={`/towns/${slug}/connected`}
              title="Connected"
              description="Related towns in the Revolutionary network"
              count={
                town.linkedTowns.length > 0
                  ? `${town.linkedTowns.length} towns`
                  : undefined
              }
            />
            <HubCard
              href={`/towns/${slug}/updates`}
              title="Updates"
              description="Recent changes and data sources"
              count={
                town.recentChanges.length > 0
                  ? `${town.recentChanges.length} logged`
                  : undefined
              }
            />
          </div>
        </Container>
      </section>

      {/* Section 5: Featured Places Preview */}
      {placeItems.length > 0 && (
        <>
          <Divider spacing="section" />
          <section>
            <Container>
              <SectionHeader
                title="Featured Places"
                linkHref={`/towns/${slug}/visit`}
                linkText="View all places →"
              />
              <div className="mt-component">
                <FeaturedList items={placeItems} />
              </div>
            </Container>
          </section>
        </>
      )}

      {/* Section 6: Featured Events Preview */}
      {eventItems.length > 0 && (
        <>
          <Divider spacing="section" />
          <section>
            <Container>
              <SectionHeader
                title="Key Events"
                linkHref={`/towns/${slug}/events`}
                linkText="View all events →"
              />
              <div className="mt-component">
                <FeaturedList items={eventItems} />
              </div>
            </Container>
          </section>
        </>
      )}

      {/* Section 7: Connected Towns Preview */}
      {connectionItems.length > 0 && (
        <>
          <Divider spacing="section" />
          <section>
            <Container>
              <SectionHeader
                title="Connected Towns"
                linkHref={`/towns/${slug}/connected`}
                linkText="View all connections →"
              />
              <div className="mt-component">
                <FeaturedList items={connectionItems} />
              </div>
            </Container>
          </section>
        </>
      )}

      {/* Section 8: Mini Timeline Preview */}
      {town.events.length > 0 && (
        <>
          <Divider spacing="section" />
          <section>
            <Container>
              <SectionHeader
                title="Timeline"
                linkHref={`/towns/${slug}/history`}
                linkText="View full history →"
              />
              <div className="mt-component">
                <MiniTimeline events={town.events} maxItems={5} />
              </div>
            </Container>
          </section>
        </>
      )}

      {/* Section 9: Transparency Footer */}
      <Divider spacing="section" />
      <TransparencyFooter lastUpdatedAt={town.lastUpdatedAt} townSlug={slug} />
    </div>
  );
}

// Helper to count unique people from events
function getUniquePeopleCount(town: Town): number {
  return town.events.reduce((sum, e) => sum + e.peopleCount, 0);
}

// Format place type for display
function formatPlaceType(type: string): string {
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
}

// Format event date for compact display
function formatEventDate(dateStr: string | null): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}
