import {
  getTown,
  getTownSources,
  getTownClusters,
  Town,
  TownSource,
} from "@/lib/api";
import { recordOrgEvent } from "@/lib/analytics";
import { Container, Text, Divider, Link } from "@/components/ui";
import { Separator } from "@/components/ui/separator";
import {
  HubCard,
  FeaturedList,
  FeaturedListItem,
  MiniTimeline,
  SectionHeader,
  TransparencyFooter,
} from "@/components/town";
import {
  PageShell,
  PageHeader,
} from "@/components/editorial";

const EDITORIAL_SLUGS = new Set(["boston-ma"]);

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
    title: `${town.name}, ${town.state} | History Is For Everyone`,
    description: town.execSummary150,
  };
}

export default async function TownOverviewPage({ params }: PageProps) {
  const { slug } = await params;

  if (EDITORIAL_SLUGS.has(slug)) {
    return <EditorialTownPage slug={slug} />;
  }

  return <ClassicTownPage slug={slug} />;
}

// ---------------------------------------------------------------------------
// Editorial layout (Boston)
// ---------------------------------------------------------------------------

async function EditorialTownPage({ slug }: { slug: string }) {
  const [town, sourcesData] = await Promise.all([
    getTown(slug),
    getTownSources(slug),
  ]);

  if (!town) return null;

  void recordOrgEvent(slug, "TOWN_VIEW");

  const firstParagraph = town.whyMatters.split("\n\n")[0];

  const sections = [
    {
      label: "History",
      href: `/towns/${slug}/history`,
      desc: "The full narrative of what happened here and why it mattered.",
    },
    {
      label: "Timeline",
      href: `/towns/${slug}/events`,
      desc: `${town.events.length} documented events in chronological order.`,
    },
    {
      label: "People",
      href: `/towns/${slug}/people`,
      desc: "Historical figures connected to this town through documented events.",
    },
    {
      label: "Places",
      href: `/towns/${slug}/visit`,
      desc: `${town.placesTotals?.total ?? 0} sites to visit, with hours and planning info.`,
    },
    {
      label: "Stories",
      href: `/towns/${slug}/stories`,
      desc: `${town.stories.length} first-person accounts and interpretive voices.`,
    },
    {
      label: "Teacher",
      href: `/towns/${slug}/teacher`,
      desc: "Lesson plans, primary sources, and classroom materials.",
    },
    {
      label: "Sources",
      href: `/towns/${slug}/sources`,
      desc: `${sourcesData?.totalCount ?? 0} sources organized by credibility tier.`,
    },
  ];

  return (
    <PageShell>
      <PageHeader
        name={town.name}
        state={town.state}
        subtitle={town.execSummary150}
        lastUpdated={sourcesData?.lastUpdated ?? town.lastUpdatedAt}
      />

      <p className="font-body text-body leading-[1.8] text-text-primary mb-16">
        {firstParagraph}
      </p>

      <nav>
        <ul className="space-y-0">
          {sections.map((section) => (
            <li
              key={section.label}
              className="border-b border-border-light last:border-b-0"
            >
              <a
                href={section.href}
                className="flex items-center justify-between py-5 group"
              >
                <div>
                  <p className="font-heading text-[1.25rem] tracking-tight group-hover:text-accent-blue transition-colors">
                    {section.label}
                  </p>
                  <p className="mt-1 text-small text-text-muted font-body">
                    {section.desc}
                  </p>
                </div>
                <span className="text-text-muted group-hover:text-accent-blue transition-colors ml-4 shrink-0">
                  &rarr;
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Separator className="mt-20 mb-10 bg-border-light" />
      <footer className="space-y-4 text-small text-text-muted font-body">
        <p>
          <a
            href={`/changelog?town=${slug}`}
            className="text-accent-blue hover:underline"
          >
            View changes for this town
          </a>
          {" · "}
          <a
            href={`/partner/inquire?town=${slug}`}
            className="text-accent-blue hover:underline"
          >
            Inquire about operating this site
          </a>
        </p>
      </footer>
    </PageShell>
  );
}

// ---------------------------------------------------------------------------
// Classic layout (all other towns)
// ---------------------------------------------------------------------------

async function ClassicTownPage({ slug }: { slug: string }) {
  const [town, sourcesData, townClusters] = await Promise.all([
    getTown(slug),
    getTownSources(slug),
    getTownClusters(slug),
  ]);

  if (!town) {
    return null;
  }

  void recordOrgEvent(slug, "TOWN_VIEW");

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
          {townClusters.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {townClusters.map((tc) => (
                <Link
                  key={tc.cluster.slug}
                  href={`/clusters/${tc.cluster.slug}`}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border-default text-small hover:border-accent-blue transition-colors"
                >
                  Part of: {tc.cluster.name}
                </Link>
              ))}
            </div>
          )}
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
            Choose your path through this town&apos;s Revolutionary story.
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

      {/* Section 9: Sources */}
      <Divider spacing="section" />
      <section>
        <Container>
          <SectionHeader title={`Sources${sourcesData ? ` (${sourcesData.totalCount})` : ""}`} />
          {sourcesData && sourcesData.sources.length > 0 ? (
            <>
              <SourceTierGroup
                label="Tier 1 — Institutional and Academic"
                sources={sourcesData.sources.filter((s) => s.credibilityTier === "TIER1")}
              />
              <SourceTierGroup
                label="Tier 2 — Reputable Secondary"
                sources={sourcesData.sources.filter((s) => s.credibilityTier === "TIER2")}
              />
              <SourceTierGroup
                label="Tier 3 — General Reference"
                sources={sourcesData.sources.filter((s) => s.credibilityTier === "TIER3")}
              />
              <SourceTierGroup
                label="Pending Evaluation"
                sources={sourcesData.sources.filter((s) => s.credibilityTier === "TODO")}
              />
              <Text size="small" muted className="mt-component">
                For details on how we evaluate sources, see our{" "}
                <Link href="/methodology">Methodology</Link>.
              </Text>
              <Text size="small" muted className="mt-2">
                <Link href={`/changelog?town=${slug}`}>
                  View changes for this town →
                </Link>
              </Text>
            </>
          ) : (
            <Text muted className="mt-element">
              Sources being compiled. Check back soon.
            </Text>
          )}
        </Container>
      </section>

      {/* Section 10: Transparency Footer */}
      <Divider spacing="section" />
      <TransparencyFooter lastUpdatedAt={sourcesData?.lastUpdated ?? town.lastUpdatedAt} townSlug={slug} />

      {/* Town Inquiry CTA */}
      <Container>
        <div className="mt-section pt-element border-t border-border-light">
          <Text size="small" muted>
            Work for this town&apos;s tourism board?{" "}
            <Link href={`/partner/inquire?town=${slug}`}>
              Inquire about operating this site
            </Link>
          </Text>
        </div>
      </Container>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getUniquePeopleCount(town: Town): number {
  return town.events.reduce((sum, e) => sum + e.peopleCount, 0);
}

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

function formatEventDate(dateStr: string | null): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

function SourceTierGroup({
  label,
  sources,
}: {
  label: string;
  sources: TownSource[];
}) {
  if (sources.length === 0) return null;

  return (
    <details open className="mt-component group">
      <summary className="cursor-pointer list-none flex items-center gap-2 select-none">
        <span className="text-text-muted transition-transform group-open:rotate-90">&#9654;</span>
        <Text size="small" muted className="uppercase tracking-wide font-medium">
          {label} ({sources.length})
        </Text>
      </summary>
      <div className="mt-element space-y-2">
        {sources.map((source) => (
          <div key={source.id} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent-blue flex-shrink-0" />
            <div>
              <Text size="small">
                {source.url ? (
                  <Link href={source.url} className="font-medium">
                    {source.title}
                  </Link>
                ) : (
                  <span className="font-medium">{source.title}</span>
                )}
                {" — "}
                {source.publisherOrHolder}
                {source.notes?.toLowerCase().includes("needs verification") && (
                  <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-amber-100 text-amber-800">
                    Needs verification
                  </span>
                )}
              </Text>
              {source.notes && (
                <Text size="small" muted>
                  {source.notes}
                </Text>
              )}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}
