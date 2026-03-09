import { getTown, getTownSources } from "@/lib/api";
import { ComingSoon } from "@/components/town";
import {
  PageShell,
  PageHeader,
  SourceGroup,
} from "@/components/editorial";

export const revalidate = 3600;

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
    return <ComingSoon slug={slug} section="Sources" />;
  }

  const tier1 = sourcesData?.sources.filter((s) => s.credibilityTier === "TIER1") ?? [];
  const tier2 = sourcesData?.sources.filter((s) => s.credibilityTier === "TIER2") ?? [];
  const tier3 = sourcesData?.sources.filter((s) => s.credibilityTier === "TIER3") ?? [];
  const tierTodo = sourcesData?.sources.filter((s) => s.credibilityTier === "TODO") ?? [];

  return (
    <PageShell>
      <PageHeader
        name={town.name}
        state={town.state}
        subtitle={
          sourcesData && sourcesData.sources.length > 0
            ? `${sourcesData.totalCount} sources organized by credibility tier.`
            : "Sources being compiled."
        }
        variant="bold"
      />

      {sourcesData && sourcesData.sources.length > 0 ? (
        <div className="space-y-8">
          <SourceGroup label="Tier 1 — Institutional and Academic" sources={tier1} />
          <SourceGroup label="Tier 2 — Reputable Secondary" sources={tier2} />
          <SourceGroup label="Tier 3 — General Reference" sources={tier3} />
          <SourceGroup label="Pending Evaluation" sources={tierTodo} />

          <div className="h-px bg-ink/10 my-8" />
          <p className="font-ui text-[13px] text-ink/50">
            For details on how we evaluate sources, see our{" "}
            <a href="/methodology" className="text-crimson hover:underline">
              Methodology
            </a>
            .
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="font-editorial text-ink/60">
            Sources for this town are being compiled and verified.
          </p>
          <p className="font-ui text-[13px] text-ink/50">
            For details on how we evaluate sources, see our{" "}
            <a href="/methodology" className="text-crimson hover:underline">
              Methodology
            </a>
            .
          </p>
        </div>
      )}
    </PageShell>
  );
}
