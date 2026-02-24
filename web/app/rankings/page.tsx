import { getRankings, RankedTown } from "@/lib/api";
import {
  Container,
  Heading,
  Text,
  Link,
  Divider,
} from "@/components/ui";

export const metadata = {
  title: "Town Rankings | Sabrina's Town",
  description:
    "All 75 Revolutionary towns ranked by composite score across historical significance, preservation, accessibility, and more.",
};

export default async function RankingsPage() {
  const towns = await getRankings({ limit: 75 });

  // Group by score tier for summary
  const tiers = {
    exceptional: towns.filter((t) => t.compositeScore >= 90),
    excellent: towns.filter(
      (t) => t.compositeScore >= 75 && t.compositeScore < 90
    ),
    notable: towns.filter(
      (t) => t.compositeScore >= 60 && t.compositeScore < 75
    ),
    relevant: towns.filter(
      (t) => t.compositeScore >= 40 && t.compositeScore < 60
    ),
    emerging: towns.filter((t) => t.compositeScore < 40),
  };

  // Get unique states
  const states = [...new Set(towns.map((t) => t.state))].sort();

  return (
    <main className="py-section">
      <Container>
        {/* Header */}
        <Heading level={1}>Town Rankings</Heading>
        <Text className="mt-element max-w-[620px]">
          Every town in our network is scored across seven dimensions:
          historical significance, preservation quality, accessibility,
          interpretive resources, interconnection with other sites, documented
          stories, and source quality. The composite score reflects how well a
          town preserves and presents its Revolutionary history.
        </Text>

        {/* Tier Summary */}
        <div className="mt-component flex flex-wrap gap-4">
          <TierBadge
            label="Exceptional"
            count={tiers.exceptional.length}
            range="90+"
          />
          <TierBadge
            label="Excellent"
            count={tiers.excellent.length}
            range="75-89"
          />
          <TierBadge
            label="Notable"
            count={tiers.notable.length}
            range="60-74"
          />
          <TierBadge
            label="Relevant"
            count={tiers.relevant.length}
            range="40-59"
          />
          <TierBadge
            label="Emerging"
            count={tiers.emerging.length}
            range="0-39"
          />
        </div>

        <Divider spacing="section" />

        {/* Filter by State */}
        <div className="flex flex-wrap items-center gap-4 mb-component">
          <Text size="small" muted>
            Filter by state:
          </Text>
          <div className="flex flex-wrap gap-2">
            <Link href="/rankings" className="px-3 py-1 bg-accent-blue text-white rounded text-small no-underline hover:no-underline">
              All
            </Link>
            {states.map((state) => (
              <Link
                key={state}
                href={`/rankings?state=${state}`}
                className="px-3 py-1 bg-bg-secondary rounded text-small hover:bg-border-light no-underline"
              >
                {state}
              </Link>
            ))}
          </div>
        </div>

        {/* Rankings Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-text-primary">
                <th className="text-left py-3 pr-4 font-heading font-semibold text-small uppercase tracking-wide">
                  Rank
                </th>
                <th className="text-left py-3 pr-4 font-heading font-semibold text-small uppercase tracking-wide">
                  Town
                </th>
                <th className="text-left py-3 pr-4 font-heading font-semibold text-small uppercase tracking-wide hidden md:table-cell">
                  State
                </th>
                <th className="text-right py-3 pr-4 font-heading font-semibold text-small uppercase tracking-wide">
                  Score
                </th>
                <th className="text-right py-3 font-heading font-semibold text-small uppercase tracking-wide hidden sm:table-cell">
                  Tier
                </th>
              </tr>
            </thead>
            <tbody>
              {towns.map((town, index) => (
                <RankingRow key={town.id} town={town} index={index} />
              ))}
            </tbody>
          </table>
        </div>

        {towns.length === 0 && (
          <div className="py-section text-center">
            <Text muted>No towns found.</Text>
          </div>
        )}

        <Divider spacing="section" />

        {/* Methodology Note */}
        <div className="max-w-[620px]">
          <Heading level={2}>How scores work</Heading>
          <Text className="mt-element">
            Each town's composite score is a weighted average of seven
            dimensions. Historical significance and preservation quality carry
            the most weight, followed by accessibility and interpretive
            resources. Interconnection rewards towns that connect meaningfully
            to the broader Revolutionary network. Stories and sources reward
            towns with rich, well-documented narratives.
          </Text>
          <Text className="mt-element">
            Scores update as new information becomes available. Every change is
            logged transparently. Towns can improve their scores by adding
            primary sources, documenting lesser-known stories, or improving
            visitor resources.
          </Text>
          <div className="mt-element">
            <Link href="/methodology">Read full methodology →</Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

function TierBadge({
  label,
  count,
  range,
}: {
  label: string;
  count: number;
  range: string;
}) {
  return (
    <div className="px-4 py-2 bg-bg-secondary rounded-lg">
      <Text size="small" className="font-medium">
        {label}
      </Text>
      <div className="flex items-baseline gap-2 mt-1">
        <span className="text-h3 font-heading font-semibold text-accent-blue">
          {count}
        </span>
        <Text size="small" muted>
          ({range})
        </Text>
      </div>
    </div>
  );
}

function RankingRow({ town, index }: { town: RankedTown; index: number }) {
  const isTopThree = town.rank <= 3;

  return (
    <tr className="border-b border-border-light hover:bg-bg-secondary transition-colors">
      {/* Rank */}
      <td className="py-4 pr-4">
        <span
          className={`font-heading font-semibold ${
            isTopThree ? "text-h3 text-accent-blue" : "text-body"
          }`}
        >
          {town.rank}
        </span>
      </td>

      {/* Town Name */}
      <td className="py-4 pr-4">
        <Link href={`/towns/${town.slug}`} className="font-medium">
          {town.name}
        </Link>
        <Text size="small" muted className="mt-0.5 md:hidden">
          {town.state}
        </Text>
        <Text size="small" muted className="mt-0.5 line-clamp-1">
          {town.heroSummary40}
        </Text>
      </td>

      {/* State */}
      <td className="py-4 pr-4 hidden md:table-cell">
        <Text size="small">{town.state}</Text>
      </td>

      {/* Score */}
      <td className="py-4 pr-4 text-right">
        <span
          className={`font-mono font-medium ${
            town.compositeScore >= 75
              ? "text-accent-blue"
              : town.compositeScore >= 40
              ? "text-text-primary"
              : "text-text-muted"
          }`}
        >
          {town.compositeScore.toFixed(1)}
        </span>
      </td>

      {/* Tier */}
      <td className="py-4 text-right hidden sm:table-cell">
        <span
          className={`text-small px-2 py-1 rounded ${
            town.scoreTier === "Exceptional"
              ? "bg-accent-blue text-white"
              : town.scoreTier === "Excellent"
              ? "bg-accent-blue/10 text-accent-blue"
              : "bg-bg-secondary text-text-muted"
          }`}
        >
          {town.scoreTier}
        </span>
      </td>
    </tr>
  );
}
