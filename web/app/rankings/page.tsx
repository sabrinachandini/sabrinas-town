import { getRankings, RankedTown } from "@/lib/api";

export const metadata = {
  title: "Rankings | History is for Everyone",
  description:
    "All Revolutionary towns ranked across seven dimensions — preservation, documentation, accessibility, significance, education, connections, and research depth.",
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
      {/* Hero with inline stats */}
      <section className="bg-[#0a0e1a] py-24 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-white/40 mb-4">The Complete Rankings</p>
          <h1 className="font-display text-white leading-[0.9]" style={{ fontSize: "clamp(80px,12vw,160px)" }}>
            {towns.length} Towns<br />Ranked
          </h1>
          <p className="font-editorial italic text-white/60 text-[1.1rem] mt-6 max-w-[500px] leading-relaxed">
            Every Revolutionary town scored across seven dimensions — preservation, documentation, accessibility, significance, education, connections, and research depth.
          </p>

          {/* Inline stats */}
          <div className="flex flex-wrap gap-12 mt-12 pt-12 border-t border-white/10">
            <div>
              <span className="font-display text-[3.5rem] text-white leading-none block">{towns.length}</span>
              <span className="font-ui text-[0.7rem] uppercase tracking-[0.12em] text-white/40 block mt-1">Towns Ranked</span>
            </div>
            <div>
              <span className="font-display text-[3.5rem] text-white leading-none block">{uniqueStates}</span>
              <span className="font-ui text-[0.7rem] uppercase tracking-[0.12em] text-white/40 block mt-1">States Covered</span>
            </div>
            <div>
              <span className="font-display text-[3.5rem] text-[#c8222a] leading-none block">
                {topTown?.name ?? "—"}
              </span>
              <span className="font-ui text-[0.7rem] uppercase tracking-[0.12em] text-white/40 block mt-1">
                Highest Ranked{topTown ? ` · Score ${topTown.compositeScore}` : ""}
              </span>
            </div>
            <div>
              <span className="font-display text-[3.5rem] text-white leading-none block">7</span>
              <span className="font-ui text-[0.7rem] uppercase tracking-[0.12em] text-white/40 block mt-1">Scoring Dimensions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <section className="bg-[#c8222a] py-3 overflow-hidden">
        <div className="relative flex overflow-x-hidden">
          <span className="animate-[marquee_30s_linear_infinite] whitespace-nowrap font-display text-white text-[0.9rem] tracking-[0.08em] uppercase flex-shrink-0">
            {towns.slice(0, 10).map((t, i) => (
              <span key={t.id}>
                <span className="text-white/50 mx-1">#{String(i + 1).padStart(2, "0")}</span>
                {t.name}
                <span className="mx-4 opacity-30">|</span>
              </span>
            ))}
          </span>
          <span
            className="animate-[marquee_30s_linear_infinite] whitespace-nowrap font-display text-white text-[0.9rem] tracking-[0.08em] uppercase flex-shrink-0"
            aria-hidden="true"
          >
            {towns.slice(0, 10).map((t, i) => (
              <span key={`dup-${t.id}`}>
                <span className="text-white/50 mx-1">#{String(i + 1).padStart(2, "0")}</span>
                {t.name}
                <span className="mx-4 opacity-30">|</span>
              </span>
            ))}
          </span>
        </div>
      </section>

      {/* Tier 1 */}
      <TierSection
        towns={tier1}
        overline={`Tier 1 · Score ${tier1MinScore}–${tier1MaxScore}`}
        title="Foundation Towns"
        subtitle="The most fully documented, preserved, and visitor-ready Revolutionary sites in America."
        bg="bg-[#f2ece0]"
      />

      {/* Tier 2 */}
      <TierSection
        towns={tier2}
        overline={`Tier 2 · Score ${tier2MinScore}–${tier2MaxScore}`}
        title="Core Towns"
        subtitle="Strong historical significance with excellent primary sources and growing visitor infrastructure."
        bg="bg-[#ede7db]"
      />

      {/* Tier 3 */}
      <TierSection
        towns={tier3}
        overline={`Tier 3 · Score ${tier3MaxScore} and below`}
        title="Emerging Towns"
        subtitle="Essential to the full Revolutionary story — documentation and preservation opportunities remain."
        bg="bg-[#f2ece0]"
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
    <section className={`${bg} py-20 px-8 md:px-16`}>
      <div className="mx-auto max-w-[1200px]">
        <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-[#0e1428]/40 mb-2">{overline}</p>
        <h2 className="font-display text-[#0e1428]" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>{title}</h2>
        <p className="font-editorial italic text-[#0e1428]/60 text-[0.95rem] mt-2 mb-8 max-w-[600px]">{subtitle}</p>
        <div className="border-b border-[#0e1428]/10 mb-8" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {towns.map((town) => (
            <TownRankRow key={town.id} town={town} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TownRankRow({ town }: { town: RankedEntry }) {
  const rankStr = String(town.assignedRank).padStart(2, "0");

  return (
    <a
      href={`/towns/${town.slug}`}
      className="no-underline flex items-baseline gap-4 border-b border-[#0e1428]/8 py-4 pr-4 group"
    >
      <span className="font-display text-[#c8222a] text-[1.4rem] leading-none shrink-0">
        #{rankStr}
      </span>
      <div className="flex-1 min-w-0">
        <span className="font-editorial text-[1rem] text-[#0e1428] group-hover:text-[#c8222a] transition-colors block leading-tight">
          {town.name}
        </span>
        <span className="font-ui text-[0.7rem] uppercase tracking-[0.08em] text-[#0e1428]/40">
          {town.state}
        </span>
      </div>
      <span className="font-display text-[1.2rem] text-[#0e1428]/30 shrink-0">
        {town.compositeScore}
      </span>
    </a>
  );
}
