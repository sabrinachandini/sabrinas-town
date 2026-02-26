import {
  getTown,
  getTownSources,
  getTownClusters,
  getTeacherModule,
  getPlaces,
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
  EditorialSection,
  Prose,
  OnThisPageSelect,
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
  const [town, sourcesData, townClusters, teacherModule, placesData] =
    await Promise.all([
      getTown(slug),
      getTownSources(slug),
      getTownClusters(slug),
      getTeacherModule(slug),
      getPlaces(slug),
    ]);

  if (!town) return null;

  void recordOrgEvent(slug, "TOWN_VIEW");

  const clusterName =
    townClusters.length > 0 ? townClusters[0].cluster.name : undefined;

  const places = placesData
    ? Object.values(placesData.placesByCategory).flat()
    : town.featuredPlaces ?? [];

  const sortedEvents = [...town.events].sort((a, b) => {
    if (!a.startDate) return 1;
    if (!b.startDate) return -1;
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  });

  const tier1 = sourcesData?.sources.filter((s) => s.credibilityTier === "TIER1") ?? [];
  const tier2 = sourcesData?.sources.filter((s) => s.credibilityTier === "TIER2") ?? [];
  const tier3 = sourcesData?.sources.filter((s) => s.credibilityTier === "TIER3") ?? [];
  const tierTodo = sourcesData?.sources.filter((s) => s.credibilityTier === "TODO") ?? [];

  return (
    <PageShell>
      <PageHeader
        name={town.name}
        state={town.state}
        subtitle={town.execSummary150}
        lastUpdated={sourcesData?.lastUpdated ?? town.lastUpdatedAt}
        cluster={clusterName}
      />

      <OnThisPageSelect />

      {/* ── Overview ── */}
      <EditorialSection id="overview" title="Overview">
        <Prose>
          {town.whyMatters.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>
      </EditorialSection>

      {/* ── Timeline ── */}
      {sortedEvents.length > 0 && (
        <EditorialSection id="timeline" title="Timeline">
          <ol className="space-y-0">
            {sortedEvents.map((event) => (
              <li
                key={event.id}
                className="flex gap-6 py-4 border-b border-border-light last:border-b-0"
              >
                <span className="w-[100px] shrink-0 text-small text-text-muted font-body tabular-nums">
                  {formatEventDate(event.startDate)}
                </span>
                <div>
                  <p className="font-body font-medium">{event.name}</p>
                  {event.summary && (
                    <p className="mt-1 text-small text-text-muted font-body leading-relaxed">
                      {event.summary}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </EditorialSection>
      )}

      {/* ── People ── */}
      <EditorialSection id="people" title="People">
        {town.events.some((e) => e.peopleCount > 0) ? (
          <div className="space-y-0">
            {town.events
              .filter((e) => e.peopleCount > 0)
              .map((event) => (
                <div
                  key={event.id}
                  className="py-4 border-b border-border-light last:border-b-0"
                >
                  <p className="font-body font-medium">{event.name}</p>
                  <p className="mt-1 text-small text-text-muted font-body">
                    {event.peopleCount}{" "}
                    {event.peopleCount === 1 ? "person" : "people"} documented
                  </p>
                </div>
              ))}
            <p className="pt-6 text-small text-text-muted font-body italic">
              Detailed biographical entries are being compiled. Check back as
              this section expands.
            </p>
          </div>
        ) : (
          <p className="text-text-muted font-body">
            Research is ongoing. People connected to {town.name} will appear
            here.
          </p>
        )}
      </EditorialSection>

      {/* ── Places ── */}
      {places.length > 0 && (
        <EditorialSection id="places" title="Places">
          <ol className="space-y-0 list-none">
            {places.map((place, i) => (
              <li
                key={place.id}
                className="py-4 border-b border-border-light last:border-b-0"
              >
                <div className="flex gap-4">
                  <span className="text-small text-text-muted font-body tabular-nums w-6 shrink-0">
                    {i + 1}.
                  </span>
                  <div>
                    <p className="font-body font-medium">{place.name}</p>
                    <p className="mt-1 text-small text-text-muted font-body uppercase tracking-wide">
                      {formatPlaceType(place.placeType)}
                      {place.address && <> &middot; {place.address}</>}
                    </p>
                    {place.description && (
                      <p className="mt-2 text-small font-body leading-relaxed text-text-primary">
                        {place.description}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </EditorialSection>
      )}

      {/* ── Teacher ── */}
      <EditorialSection id="teacher" title="Teacher">
        {teacherModule ? (
          <div className="space-y-0">
            {(() => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const m = teacherModule as any;
              const lessonPlan = m.lessonPlan;
              return (
                <>
                  {m.overview && (
                    <div className="py-4 border-b border-border-light">
                      <p className="font-body font-medium">{m.overview.title}</p>
                      <p className="mt-1 text-small text-text-muted font-body">
                        {m.overview.gradeRange} &middot;{" "}
                        {m.overview.estimatedDuration}
                      </p>
                      <p className="mt-2 font-body leading-relaxed">
                        {m.overview.summary}
                      </p>
                    </div>
                  )}
                  {lessonPlan?.objectives && (
                    <div className="py-4 border-b border-border-light">
                      <p className="text-small text-text-muted font-body uppercase tracking-wide mb-2">
                        Learning objectives
                      </p>
                      <ul className="space-y-1">
                        {lessonPlan.objectives.map(
                          (obj: string, i: number) => (
                            <li key={i} className="text-small font-body">
                              {i + 1}. {obj}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                  <div className="pt-4">
                    <a
                      href={`/towns/${slug}/teacher`}
                      className="text-accent-blue text-small font-body hover:underline"
                    >
                      View full lesson plan
                    </a>
                    {" · "}
                    <a
                      href={`/towns/${slug}/teacher/print`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-blue text-small font-body hover:underline"
                    >
                      Print packet
                    </a>
                  </div>
                </>
              );
            })()}
          </div>
        ) : (
          <p className="text-text-muted font-body">
            Teacher resources for {town.name} are being developed.
          </p>
        )}
      </EditorialSection>

      {/* ── Stories ── */}
      <EditorialSection id="stories" title="Stories">
        {town.stories.length > 0 ? (
          <div className="space-y-0">
            {town.stories.map((story) => (
              <div
                key={story.id}
                className="py-4 border-b border-border-light last:border-b-0"
              >
                <p className="font-body font-medium">{story.title}</p>
                {story.subjectPersonName && (
                  <p className="mt-1 text-small text-text-muted font-body">
                    {story.subjectPersonName}
                  </p>
                )}
                <p className="mt-2 font-body leading-relaxed">{story.excerpt}</p>
                <p className="mt-1 text-small text-text-muted font-body uppercase tracking-wide">
                  {story.storyType === "HISTORICAL_VOICE"
                    ? "Historical voice"
                    : "Modern voice"}
                  {" · "}
                  {story.verificationStatus.toLowerCase().replace(/_/g, " ")}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-text-muted font-body">
            Stories from {town.name} are being collected.
          </p>
        )}
      </EditorialSection>

      {/* ── Sources ── */}
      <EditorialSection id="sources" title="Sources">
        {sourcesData && sourcesData.sources.length > 0 ? (
          <div className="space-y-8">
            <EditorialSourceGroup label="Tier 1 — Institutional and Academic" sources={tier1} />
            <EditorialSourceGroup label="Tier 2 — Reputable Secondary" sources={tier2} />
            <EditorialSourceGroup label="Tier 3 — General Reference" sources={tier3} />
            <EditorialSourceGroup label="Pending Evaluation" sources={tierTodo} />
            <Separator className="bg-border-light" />
            <p className="text-small text-text-muted font-body">
              For details on how we evaluate sources, see our{" "}
              <a href="/methodology" className="text-accent-blue hover:underline">
                Methodology
              </a>
              .
            </p>
          </div>
        ) : (
          <p className="text-text-muted font-body">
            Sources being compiled. Check back soon.
          </p>
        )}
      </EditorialSection>

      {/* ── Footer ── */}
      <Separator className="mt-20 mb-10 bg-border-light" />
      <footer className="space-y-4 text-small text-text-muted font-body">
        <p>
          This page draws from primary sources and scholarly research. If you
          notice an error or have additional information, please let us know.
        </p>
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

function EditorialSourceGroup({
  label,
  sources,
}: {
  label: string;
  sources: TownSource[];
}) {
  if (sources.length === 0) return null;
  return (
    <details open className="group">
      <summary className="cursor-pointer list-none flex items-center gap-2 select-none">
        <span className="text-text-muted transition-transform group-open:rotate-90 text-small">
          &#9654;
        </span>
        <span className="text-small text-text-muted uppercase tracking-wide font-medium font-body">
          {label} ({sources.length})
        </span>
      </summary>
      <ul className="mt-4 space-y-2">
        {sources.map((source) => (
          <li key={source.id} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-accent-blue shrink-0" />
            <div>
              <p className="text-small font-body">
                {source.url ? (
                  <a
                    href={source.url}
                    className="font-medium text-accent-blue hover:underline"
                  >
                    {source.title}
                  </a>
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
              </p>
              {source.notes && (
                <p className="text-small text-text-muted font-body">
                  {source.notes}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </details>
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
