import { notFound } from "next/navigation";
import { getTown, getTownSources, TownSource } from "@/lib/api";
import { Container, Heading, Text, Link, Divider } from "@/components/ui";
import { Separator } from "@/components/ui/separator";
import {
  PageShell,
  PageHeader,
  SourceGroup,
} from "@/components/editorial";

const EDITORIAL_SLUGS = new Set(["boston-ma", "lexington-ma", "concord-ma", "salem-ma", "worcester-ma", "springfield-ma", "plymouth-ma", "trenton-nj", "princeton-nj", "monmouth-nj", "morristown-nj", "elizabeth-nj", "hackensack-nj"]);

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return { title: "Sources | Town Not Found" };
  }

  return {
    title: `Sources | ${town.name}, ${town.state} | History is for Everyone`,
    description: `Sources and references for ${town.name}, ${town.state} organized by credibility tier.`,
  };
}

export default async function SourcesPage({ params }: PageProps) {
  const { slug } = await params;

  const [town, sourcesData] = await Promise.all([
    getTown(slug),
    getTownSources(slug),
  ]);

  if (!town) {
    notFound();
  }

  if (EDITORIAL_SLUGS.has(slug)) {
    return <EditorialSourcesPage town={town} sourcesData={sourcesData} />;
  }

  return <ClassicSourcesPage town={town} slug={slug} sourcesData={sourcesData} />;
}

function EditorialSourcesPage({
  town,
  sourcesData,
}: {
  town: NonNullable<Awaited<ReturnType<typeof getTown>>>;
  sourcesData: Awaited<ReturnType<typeof getTownSources>>;
}) {
  const tier1 =
    sourcesData?.sources.filter((s) => s.credibilityTier === "TIER1") ?? [];
  const tier2 =
    sourcesData?.sources.filter((s) => s.credibilityTier === "TIER2") ?? [];
  const tier3 =
    sourcesData?.sources.filter((s) => s.credibilityTier === "TIER3") ?? [];
  const tierTodo =
    sourcesData?.sources.filter((s) => s.credibilityTier === "TODO") ?? [];

  return (
    <PageShell>
      <PageHeader
        name={town.name}
        state={town.state}
        subtitle={`${sourcesData?.totalCount ?? 0} sources organized by credibility tier.`}
      />

      {sourcesData && sourcesData.sources.length > 0 ? (
        <div className="space-y-8">
          <SourceGroup
            label="Tier 1 — Institutional and Academic"
            sources={tier1}
          />
          <SourceGroup
            label="Tier 2 — Reputable Secondary"
            sources={tier2}
          />
          <SourceGroup
            label="Tier 3 — General Reference"
            sources={tier3}
          />
          <SourceGroup label="Pending Evaluation" sources={tierTodo} />

          <Separator className="bg-border-light" />
          <p className="text-small text-text-muted font-body">
            For details on how we evaluate sources, see our{" "}
            <a
              href="/methodology"
              className="text-accent-blue hover:underline"
            >
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
    </PageShell>
  );
}

function ClassicSourcesPage({
  town,
  slug,
  sourcesData,
}: {
  town: NonNullable<Awaited<ReturnType<typeof getTown>>>;
  slug: string;
  sourcesData: Awaited<ReturnType<typeof getTownSources>>;
}) {
  const tier1 =
    sourcesData?.sources.filter((s) => s.credibilityTier === "TIER1") ?? [];
  const tier2 =
    sourcesData?.sources.filter((s) => s.credibilityTier === "TIER2") ?? [];
  const tier3 =
    sourcesData?.sources.filter((s) => s.credibilityTier === "TIER3") ?? [];
  const tierTodo =
    sourcesData?.sources.filter((s) => s.credibilityTier === "TODO") ?? [];

  return (
    <div className="py-section">
      <Container>
        <Heading level={2}>Sources</Heading>
        <Text className="mt-element text-text-muted">
          {sourcesData?.totalCount ?? 0} sources for {town.name}, {town.state} organized by credibility tier.
        </Text>
      </Container>

      <Divider spacing="section" />

      <Container>
        {sourcesData && sourcesData.sources.length > 0 ? (
          <div className="space-y-component">
            <SourceTierGroup label="Tier 1 — Institutional and Academic" sources={tier1} />
            <SourceTierGroup label="Tier 2 — Reputable Secondary" sources={tier2} />
            <SourceTierGroup label="Tier 3 — General Reference" sources={tier3} />
            <SourceTierGroup label="Pending Evaluation" sources={tierTodo} />

            <Divider spacing="default" />
            <Text size="small" muted>
              For details on how we evaluate sources, see our{" "}
              <Link href="/methodology">Methodology</Link>.
            </Text>
          </div>
        ) : (
          <Text muted>
            Sources for {town.name} are being compiled. Check back soon.
          </Text>
        )}
      </Container>
    </div>
  );
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
    <details open className="group">
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
