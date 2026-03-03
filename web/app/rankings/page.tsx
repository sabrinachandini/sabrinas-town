import { Metadata } from "next";
import { getRankings, RankedTown } from "@/lib/api";
import {
  Container,
  Heading,
  Text,
  Link,
  Divider,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Town Rankings | History is for Everyone",
  description:
    "How do 77 Revolutionary towns stack up? Rankings by historical significance, documentation quality, and cross-town connections.",
};

export const dynamic = "force-dynamic";

const TIER_LABELS: Record<string, string> = {
  GOLD: "Gold",
  SILVER: "Silver",
  BRONZE: "Bronze",
  STANDARD: "Standard",
};

const TIER_ORDER = ["GOLD", "SILVER", "BRONZE", "STANDARD"];

export default async function RankingsPage() {
  const towns = await getRankings({ limit: 77 });

  // Group by scoreTier preserving rank order within each tier
  const byTier: Record<string, RankedTown[]> = {};
  for (const town of towns) {
    if (!byTier[town.scoreTier]) byTier[town.scoreTier] = [];
    byTier[town.scoreTier].push(town);
  }

  const activeTiers = TIER_ORDER.filter((t) => byTier[t]?.length);

  return (
    <main className="py-section">
      <Container>
        <Heading level={1}>Town Rankings</Heading>
        <div className="mt-element max-w-[680px] space-y-element">
          <Text>
            Every town in this network is scored across nine criteria:
            historical overview depth, people documented, places catalogued,
            events recorded, stories preserved, sources cited, source quality,
            cross-town connections, and teacher lesson coverage. Scores are
            updated as content improves.
          </Text>
          <Text muted>
            {towns.length} towns ranked across {activeTiers.length} tiers.
          </Text>
        </div>

        <Divider spacing="section" />

        {activeTiers.map((tier) => (
          <section key={tier} className="mb-section">
            <div className="flex items-center gap-3 mb-component">
              <TierBadge tier={tier} />
              <Heading level={2}>{TIER_LABELS[tier] ?? tier}</Heading>
              <Text muted as="span" size="small">
                {byTier[tier].length} town{byTier[tier].length !== 1 ? "s" : ""}
              </Text>
            </div>

            <div className="space-y-2">
              {byTier[tier].map((town) => (
                <RankRow key={town.id} town={town} />
              ))}
            </div>

            {tier !== activeTiers[activeTiers.length - 1] && (
              <Divider spacing="section" />
            )}
          </section>
        ))}

        {towns.length === 0 && (
          <Text muted>Rankings data not available. Check back soon.</Text>
        )}
      </Container>
    </main>
  );
}

function TierBadge({ tier }: { tier: string }) {
  const colors: Record<string, string> = {
    GOLD: "bg-amber-100 text-amber-800 border border-amber-300",
    SILVER: "bg-gray-100 text-gray-700 border border-gray-300",
    BRONZE: "bg-orange-100 text-orange-800 border border-orange-300",
    STANDARD: "bg-bg-secondary text-text-muted border border-border-light",
  };
  return (
    <span
      className={`px-2 py-0.5 rounded text-small font-medium ${colors[tier] ?? colors.STANDARD}`}
    >
      {TIER_LABELS[tier] ?? tier}
    </span>
  );
}

function RankRow({ town }: { town: RankedTown }) {
  const change = town.rankChange;

  return (
    <Link
      href={`/towns/${town.slug}`}
      className="flex items-start gap-4 p-element bg-bg-secondary rounded-lg hover:bg-border-light transition-colors no-underline group"
    >
      {/* Rank number */}
      <span className="w-8 flex-shrink-0 text-right text-text-muted font-mono text-small pt-0.5">
        {town.rank}
      </span>

      {/* Town info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <Text className="font-medium group-hover:text-accent-blue transition-colors">
            {town.name}
          </Text>
          <Text size="small" muted as="span">
            {town.state}
          </Text>
        </div>
        <Text size="small" muted className="mt-tight line-clamp-1">
          {town.heroSummary40}
        </Text>
      </div>

      {/* Score + rank change */}
      <div className="flex-shrink-0 text-right">
        <Text size="small" className="font-medium tabular-nums">
          {town.compositeScore.toFixed(1)}
        </Text>
        {change !== null && change !== 0 && (
          <Text
            size="small"
            className={`mt-tight ${change > 0 ? "text-green-600" : "text-red-500"}`}
          >
            {change > 0 ? `+${change}` : change}
          </Text>
        )}
      </div>
    </Link>
  );
}
