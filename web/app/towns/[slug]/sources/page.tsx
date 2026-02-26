import { notFound } from "next/navigation";
import { getTown, getTownSources } from "@/lib/api";
import { Separator } from "@/components/ui/separator";
import {
  PageShell,
  PageHeader,
  SourceGroup,
} from "@/components/editorial";

const EDITORIAL_SLUGS = new Set(["boston-ma", "lexington-ma", "concord-ma", "salem-ma", "worcester-ma", "springfield-ma", "plymouth-ma"]);

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
    title: `Sources | ${town.name}, ${town.state} | Sabrina's Town`,
    description: `Sources and references for ${town.name}, ${town.state} organized by credibility tier.`,
  };
}

export default async function SourcesPage({ params }: PageProps) {
  const { slug } = await params;

  if (!EDITORIAL_SLUGS.has(slug)) {
    notFound();
  }

  const [town, sourcesData] = await Promise.all([
    getTown(slug),
    getTownSources(slug),
  ]);

  if (!town) {
    notFound();
  }

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
