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
      {/* Hero */}
      <section className="bg-ink border-b-4 border-crimson py-24 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
            The Complete Rankings
          </p>
          <h1
            className="font-display text-cream leading-[0.88]"
            style={{ fontSize: "clamp(80px,12vw,140px)" }}
          >
            {towns.length} Towns<br />Ranked
          </h1>
          <p className="font-editorial italic text-cream/60 text-[18px] mt-6 max-w-[500px] leading-relaxed">
            Every Revolutionary town scored across seven dimensions — preservation, documentation, accessibility, significance, education, connections, and research depth.
          </p>
        </div>
      </section>

      {/* Stats row — full-bleed navy */}
      <section className="bg-[#1a3a72] py-12 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px] flex flex-wrap gap-12">
          <div>
            <span className="font-display text-[48px] text-yellow leading-none block">{towns.length}</span>
            <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-cream/60 block mt-1">Towns Ranked</span>
          </div>
          <div>
            <span className="font-display text-[48px] text-yellow leading-none block">{uniqueStates}</span>
            <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-cream/60 block mt-1">States Covered</span>
          </div>
          <div>
            <span className="font-display text-[48px] text-yellow leading-none block">
              {topTown?.name ?? "—"}
            </span>
            <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-cream/60 block mt-1">
              Highest Ranked{topTown ? ` · Score ${topTown.compositeScore}` : ""}
            </span>
          </div>
          <div>
            <span className="font-display text-[48px] text-yellow leading-none block">7</span>
            <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-cream/60 block mt-1">Scoring Dimensions</span>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <section className="bg-crimson py-3 overflow-hidden">
        <div className="relative flex overflow-x-hidden">
          <span className="animate-[marquee_30s_linear_infinite] whitespace-nowrap font-display text-cream text-[0.9rem] tracking-[0.08em] uppercase flex-shrink-0">
            {towns.slice(0, 10).map((t, i) => (
              <span key={t.id}>
                <span className="text-cream/50 mx-1">#{String(i + 1).padStart(2, "0")}</span>
                {t.name}
                <span className="mx-4 opacity-30">|</span>
              </span>
            ))}
          </span>
          <span
            className="animate-[marquee_30s_linear_infinite] whitespace-nowrap font-display text-cream text-[0.9rem] tracking-[0.08em] uppercase flex-shrink-0"
            aria-hidden="true"
          >
            {towns.slice(0, 10).map((t, i) => (
              <span key={`dup-${t.id}`}>
                <span className="text-cream/50 mx-1">#{String(i + 1).padStart(2, "0")}</span>
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
        bg="bg-cream"
      />

      {/* Tier 2 */}
      <TierSection
        towns={tier2}
        overline={`Tier 2 · Score ${tier2MinScore}–${tier2MaxScore}`}
        title="Core Towns"
        subtitle="Strong historical significance with excellent primary sources and growing visitor infrastructure."
        bg="bg-[#f8f0d8]"
      />

      {/* Tier 3 */}
      <TierSection
        towns={tier3}
        overline={`Tier 3 · Score ${tier3MaxScore} and below`}
        title="Emerging Towns"
        subtitle="Essential to the full Revolutionary story — documentation and preservation opportunities remain."
        bg="bg-cream"
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
        <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
          {overline}
        </p>
        <h2 className="font-display text-ink" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>{title}</h2>
        <p className="font-editorial italic text-ink/60 text-[0.95rem] mt-2 mb-8 max-w-[600px]">{subtitle}</p>
        <div className="border-b border-ink/10 mb-8" />
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
  return (
    <a
      href={`/towns/${town.slug}`}
      className="flex items-center justify-between group py-4 border-b border-ink/8 no-underline hover:bg-yellow/10 hover:pl-2 transition-all pr-4"
    >
      <div className="flex items-center gap-3">
        <span className="font-display text-[24px] text-ink/30 w-10 shrink-0 leading-none">
          {String(town.assignedRank).padStart(2, "0")}
        </span>
        <div className="min-w-0">
          <span className="font-editorial text-[20px] text-ink group-hover:text-crimson transition-colors block leading-tight">
            {town.name}
          </span>
          <span className="font-ui text-[0.7rem] uppercase tracking-[0.08em] text-ink/40">
            {town.state}
          </span>
        </div>
      </div>
      <span className="font-display text-[20px] text-crimson shrink-0">
        {town.compositeScore}
      </span>
    </a>
  );
}
