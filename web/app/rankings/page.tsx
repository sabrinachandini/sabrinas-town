import { getRankings, RankedTown } from "@/lib/api";
import { PageHero, StatCard, SectionHeader } from "@/components/ui";

export const metadata = {
  title: "Rankings | History is for Everyone",
  description:
    "All 77 Revolutionary towns ranked across seven dimensions — preservation, documentation, accessibility, significance, education, connections, and research depth.",
};

export const dynamic = "force-dynamic";

interface RankedEntry extends RankedTown {
  assignedRank: number;
}

export default async function RankingsPage() {
  const raw = await getRankings({ limit: 77 });

  // Sort descending by compositeScore
  const sorted = [...raw].sort((a, b) => b.compositeScore - a.compositeScore);

  // Assign sequential rank numbers
  const towns: RankedEntry[] = sorted.map((town, i) => ({
    ...town,
    assignedRank: i + 1,
  }));

  const topTown = towns[0];
  const uniqueStates = new Set(towns.map((t) => t.state)).size;

  // Group into three tiers by position
  const tier1 = towns.slice(0, 25);
  const tier2 = towns.slice(25, 51);
  const tier3 = towns.slice(51, 77);

  const tier1MinScore = tier1[tier1.length - 1]?.compositeScore ?? 0;
  const tier2MinScore = tier2[tier2.length - 1]?.compositeScore ?? 0;
  const tier1MaxScore = tier1[0]?.compositeScore ?? 0;
  const tier2MaxScore = tier2[0]?.compositeScore ?? 0;
  const tier3MaxScore = tier3[0]?.compositeScore ?? 0;

  return (
    <main>
      {/* Hero */}
      <PageHero
        bg="navy"
        overline="The Complete Rankings"
        title="77 Towns Ranked"
        titleEmphasis="Ranked"
        body="Every Revolutionary town scored across seven dimensions — preservation, documentation, accessibility, significance, education, connections, and research depth."
      />

      {/* Stats bar */}
      <section className="bg-charcoal py-6">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#333]">
            <StatCard value="77" label="Towns Ranked" />
            <StatCard value={String(uniqueStates)} label="States Covered" />
            <StatCard
              value={topTown?.name ?? "—"}
              label="Highest Ranked"
              detail={topTown ? `Score: ${topTown.compositeScore}` : undefined}
            />
            <StatCard value="7" label="Scoring Dimensions" />
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <section className="bg-crimson py-3 overflow-hidden">
        <div className="relative flex overflow-x-hidden">
          <span className="animate-[marquee_30s_linear_infinite] whitespace-nowrap font-condensed font-bold text-white text-[0.8rem] tracking-[0.1em] uppercase flex-shrink-0">
            {towns.slice(0, 10).map((t, i) => (
              <span key={t.id}>
                <span className="text-gold mx-1">#0{i + 1}</span>
                {t.name}
                <span className="mx-4 opacity-40">|</span>
              </span>
            ))}
          </span>
          {/* Duplicate for seamless loop */}
          <span
            className="animate-[marquee_30s_linear_infinite] whitespace-nowrap font-condensed font-bold text-white text-[0.8rem] tracking-[0.1em] uppercase flex-shrink-0"
            aria-hidden="true"
          >
            {towns.slice(0, 10).map((t, i) => (
              <span key={`dup-${t.id}`}>
                <span className="text-gold mx-1">#0{i + 1}</span>
                {t.name}
                <span className="mx-4 opacity-40">|</span>
              </span>
            ))}
          </span>
        </div>
      </section>

      {/* Tier 1 */}
      <TierSection
        towns={tier1}
        bg="bg-ivory"
        overline={`Tier 1 | Score ${tier1MinScore}–${tier1MaxScore}`}
        title="Foundation Towns"
        subtitle="The most fully documented, preserved, and visitor-ready Revolutionary sites in America."
      />

      {/* Tier 2 */}
      <TierSection
        towns={tier2}
        bg="bg-cream"
        overline={`Tier 2 | Score ${tier2MinScore}–${tier2MaxScore}`}
        title="Core Towns"
        subtitle="Strong historical significance with excellent primary sources and growing visitor infrastructure."
      />

      {/* Tier 3 */}
      <TierSection
        towns={tier3}
        bg="bg-white"
        overline={`Tier 3 | Score ${tier3MaxScore} and below`}
        title="Emerging Towns"
        subtitle="Essential to the full Revolutionary story — documentation and preservation opportunities remain."
      />
    </main>
  );
}

function TierSection({
  towns,
  bg,
  overline,
  title,
  subtitle,
}: {
  towns: RankedEntry[];
  bg: string;
  overline: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className={`${bg} py-20`}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeader overline={overline} title={title} />
        <p className="font-serif text-[0.95rem] text-charcoal -mt-4 mb-10 max-w-[600px]">
          {subtitle}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {towns.map((town) => (
            <TownRankCard key={town.id} town={town} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TownRankCard({ town }: { town: RankedEntry }) {
  const rankStr = String(town.assignedRank).padStart(2, "0");

  return (
    <a
      href={`/towns/${town.slug}`}
      className="no-underline block bg-white p-5 border-l-4 border-crimson group hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="font-heading font-black text-crimson text-[1.4rem] leading-none">
            #{rankStr}
          </p>
          <p className="font-heading font-bold text-navy text-[1rem] leading-tight mt-1 group-hover:text-crimson transition-colors">
            {town.name}
          </p>
          <p className="font-condensed text-[0.72rem] tracking-[0.08em] uppercase text-slate mt-0.5">
            {town.state}
          </p>
        </div>
        <div className="flex-shrink-0 text-right">
          <p className="font-heading font-bold text-navy text-[1.1rem] leading-none">
            {town.compositeScore}
          </p>
          <p className="font-condensed text-[0.65rem] tracking-[0.06em] uppercase text-slate mt-0.5">
            score
          </p>
        </div>
      </div>
      <p className="mt-3 font-sans text-[0.8rem] text-slate leading-snug line-clamp-2">
        {town.heroSummary40}
      </p>
    </a>
  );
}
