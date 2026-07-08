import { Metadata } from "next";
import prisma from "@/lib/prisma";
import { TeachDirectory, TeachTownCard } from "./TeachDirectory";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Teach | History is for Everyone",
  description:
    "Classroom-ready resources for teaching the American Revolution through local history. Lesson plans, primary sources, quizzes, and comparative assignments aligned to state standards.",
};

// ─── State code → display name + teach slug ───────────────────────────────────

const STATE_META: Record<string, { name: string; slug: string }> = {
  MA: { name: "Massachusetts", slug: "massachusetts" },
  NJ: { name: "New Jersey", slug: "new-jersey" },
  VA: { name: "Virginia", slug: "virginia" },
  NY: { name: "New York", slug: "new-york" },
  PA: { name: "Pennsylvania", slug: "pennsylvania" },
  SC: { name: "South Carolina", slug: "south-carolina" },
  CT: { name: "Connecticut", slug: "connecticut" },
  NC: { name: "North Carolina", slug: "north-carolina" },
  RI: { name: "Rhode Island", slug: "rhode-island" },
  MD: { name: "Maryland", slug: "maryland" },
  NH: { name: "New Hampshire", slug: "new-hampshire" },
  GA: { name: "Georgia", slug: "georgia" },
  VT: { name: "Vermont", slug: "vermont" },
  DE: { name: "Delaware", slug: "delaware" },
  ME: { name: "Maine", slug: "maine" },
  // Frontier states (IL, IN, OH, WV) use the existing /teach/frontier page
  IL: { name: "Illinois Territory", slug: "frontier" },
  IN: { name: "Indiana Territory", slug: "frontier" },
  OH: { name: "Ohio (Northwest Territory)", slug: "frontier" },
  WV: { name: "West Virginia (Virginia frontier)", slug: "frontier" },
};

// ─── State descriptions (human-authored, unchanged from original) ──────────────

const STATE_DESCRIPTIONS: Record<string, string> = {
  Massachusetts:
    "Ten towns spanning the opening acts of the Revolution — from the shots fired at Lexington and Concord to the siege of Boston, the maritime resistance of the North Shore, and the interior defiance that shut down royal courts before a single battle was fought.",
  "New Jersey":
    "The crossroads of the war — from Washington's desperate crossing of the Delaware to two brutal winters at Morristown that tested the Continental Army to its limits.",
  Virginia:
    "Virginia produced the Revolution's most consequential leaders — Washington, Jefferson, Madison, Henry — and its final chapter was written at Yorktown, where the last major British army surrendered in 1781.",
  "New York":
    "New York was the strategic prize of the entire war. The British held New York City from 1776 to 1783; the Patriot victory at Saratoga brought France into the war; and Washington's army spent its most desperate years in the Hudson Valley.",
  Pennsylvania:
    "Pennsylvania hosted both the Continental Congress and the darkest winter of the war. From the political debates in Philadelphia to the suffering at Valley Forge, the state's history captures the Revolution at its most fragile.",
  "South Carolina":
    "South Carolina's war was the most brutal in the colonies — a civil war within a war, with Patriot and Loyalist militias fighting in a landscape of isolated plantations and dense backcountry.",
  Connecticut:
    "Connecticut's Revolutionary story spans the colony's maritime economy, Tory loyalists, and the brutal British raid on Danbury that pushed many fence-sitters toward the Patriot cause.",
  "North Carolina":
    "North Carolina's backcountry became the decisive theater of the Southern campaign. The overmountain men at Kings Mountain and Nathanael Greene's grinding campaign broke British control of the South.",
  "Rhode Island":
    "Newport, occupied by the British for three years, and Providence, which emerged as the Patriot headquarters and naval center — two towns that capture the tension at the heart of the Revolution.",
  Maryland:
    "Maryland's location between the Northern and Southern colonies made it a crucial logistical hub, and its state constitution of 1776 became a model for republican government studied throughout the founding generation.",
  "New Hampshire":
    "New Hampshire struck first — its militia seized Fort William and Mary in December 1774, months before Lexington, making it one of the earliest acts of armed resistance in the colonies.",
  Georgia:
    "Georgia was the only colony the British successfully reconquered — and held for years. Savannah's occupation and the failed Franco-American siege teach students about the war's international dimensions and the limits of alliance.",
  Vermont:
    "Vermont in 1777 was a disputed territory claimed by both New York and New Hampshire, and its Green Mountain Boys fought for independence on two fronts: against the British and against colonial authority.",
  Delaware:
    "Delaware's decision to break with Pennsylvania and form its own delegation gave the Continental Congress its key swing vote for independence, and its 'Blue Hen' regiment became one of the Continental Army's most celebrated units.",
  Maine:
    "Maine, then part of Massachusetts, suffered some of the war's earliest British raids — Falmouth (now Portland) was bombarded and burned in 1775 — and its Penobscot Expedition of 1779 was one of the largest American naval disasters.",
};

// ─── DB data fetch ────────────────────────────────────────────────────────────

async function getTeachDirectoryData(): Promise<{
  towns: TeachTownCard[];
  stats: { townCount: number; stateCount: number; lessonCount: number; sourceCount: number };
}> {
  try {
    const [townsRaw, lessonCount, sourceCount] = await Promise.all([
      prisma.town.findMany({
        where: {
          lessonPlans: { some: { published: true } },
        },
        orderBy: [{ state: "asc" }, { name: "asc" }],
        select: {
          id: true,
          name: true,
          state: true,
          slug: true,
          lessonPlans: {
            where: { published: true },
            orderBy: { displayOrder: "asc" },
            take: 1,
            select: {
              gradeRange: true,
              estimatedDuration: true,
              summary: true,
              lessonData: true,
            },
          },
          primarySourcePackets: {
            where: { published: true },
            select: { credibilityTier: true },
          },
        },
      }),
      prisma.lessonPlan.count({ where: { published: true } }),
      prisma.primarySourcePacket.count({ where: { published: true } }),
    ]);

    const states = new Set(townsRaw.map((t) => t.state));

    const towns: TeachTownCard[] = townsRaw.map((t) => {
      const plan = t.lessonPlans[0];
      const packets = t.primarySourcePackets;

      // Dominant confidence: pick the best tier present
      let confidence: TeachTownCard["confidenceLevel"] = "NONE";
      if (packets.some((p) => p.credibilityTier === "TIER1")) confidence = "TIER1";
      else if (packets.some((p) => p.credibilityTier === "TIER2")) confidence = "TIER2";
      else if (packets.some((p) => p.credibilityTier === "TIER3")) confidence = "TIER3";
      else if (packets.some((p) => p.credibilityTier === "TODO")) confidence = "TODO";
      else if (packets.length === 0 && t.lessonPlans.length > 0) confidence = "TIER2"; // generated fallback

      // Inquiry question: first essential question from lessonData JSON
      let inquiryQuestion: string | undefined;
      try {
        const ld = plan?.lessonData as Record<string, unknown> | undefined;
        const eqs = ld?.essentialQuestions as string[] | undefined;
        if (eqs && eqs.length > 0) inquiryQuestion = eqs[0];
      } catch {
        // ignore parse errors
      }

      return {
        slug: t.slug,
        name: t.name,
        state: t.state,
        gradeRange: plan?.gradeRange ?? "6-12",
        estimatedDuration: plan?.estimatedDuration ?? "",
        summary: plan?.summary ?? "",
        sourceCount: packets.length,
        confidenceLevel: confidence,
        lessonCount: t.lessonPlans.length,
        inquiryQuestion,
      };
    });

    return {
      towns,
      stats: {
        townCount: townsRaw.length,
        stateCount: states.size,
        lessonCount,
        sourceCount,
      },
    };
  } catch (error) {
    console.error("Error fetching teach directory data:", error);
    return {
      towns: [],
      stats: { townCount: 0, stateCount: 0, lessonCount: 0, sourceCount: 0 },
    };
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function TeachPage() {
  const { towns, stats } = await getTeachDirectoryData();

  // Resolve state codes → display names; sort by display name
  const stateCodes = [...new Set(towns.map((t) => t.state))].sort();
  const stateNames = stateCodes.map(
    (code) => STATE_META[code]?.name ?? code
  );

  return (
    <main>
      {/* ── NAVY HERO ────────────────────────────────────────────────── */}
      <section className="bg-[#1a3a72] border-b-4 border-[#14100a] py-12 sm:py-20 px-5 sm:px-16 relative overflow-hidden">
        {/* Ghost watermark */}
        <div
          aria-hidden
          className="absolute right-[-10px] top-[-20px] font-display leading-none pointer-events-none select-none text-white/[0.06]"
          style={{ fontSize: "clamp(180px,35vw,480px)", letterSpacing: "-0.05em" }}
        >
          Teach
        </div>

        {/* Stars */}
        <svg
          aria-hidden
          className="absolute top-5 right-5 pointer-events-none"
          style={{ opacity: 0.2 }}
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
        >
          <path d="M11 25 L12.4 30 L18 30 L13.5 33.5 L15 39 L11 35.8 L7 39 L8.5 33.5 L4 30 L9.6 30 Z" fill="#4A6A9B" />
          <path d="M38 10 L39 13 L42 13 L39.8 14.8 L40.8 18 L38 16.2 L35.2 18 L36.2 14.8 L34 13 L37 13 Z" fill="#f2e6c8" />
          <path d="M44 36 L44.7 38.4 L47.3 38.4 L45.2 39.9 L45.9 42.3 L44 41 L42.1 42.3 L42.8 39.9 L40.7 38.4 L43.3 38.4 Z" fill="#4A6A9B" />
        </svg>

        {/* Tilted stamp */}
        <div
          aria-hidden
          className="absolute top-10 right-10 rotate-[-2.5deg] font-ui font-bold text-[11px] tracking-[0.12em] uppercase text-[rgba(242,230,200,0.55)] border-[2px] border-[rgba(242,230,200,0.4)] px-3 py-1.5 hidden sm:block"
        >
          For Classrooms
        </div>

        <div className="relative z-10 max-w-[700px]">
          <p className="font-ui text-[11px] font-semibold tracking-[0.32em] uppercase text-[rgba(255,255,255,0.78)] flex items-center gap-3 mb-6">
            <span className="w-4 h-[2px] bg-[rgba(255,255,255,0.3)] block flex-shrink-0" aria-hidden />
            For Teachers &amp; Classrooms
          </p>

          <h1
            className="font-display leading-[0.88] tracking-[-0.05em] m-0"
            style={{ fontSize: "clamp(40px,10vw,120px)" }}
          >
            <span className="text-white block">History</span>
            <span
              className="text-[#a8bcd8] block"
              style={{
                transform: "rotate(-2deg) translateX(28px)",
                transformOrigin: "left center",
                display: "block",
              }}
            >
              For
            </span>
            <span className="text-white block">Teachers.</span>
          </h1>

          <svg
            width="360"
            height="12"
            viewBox="0 0 340 12"
            className="block mt-7"
            aria-hidden
          >
            <path
              d="M0 8 Q21 2 42 8 Q63 14 85 7 Q106 1 127 7 Q148 13 170 7 Q191 2 212 7 Q233 13 255 7 Q276 2 297 7 Q318 13 340 6"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          <p className="font-editorial italic font-light text-[20px] sm:text-[20px] text-[rgba(255,255,255,0.76)] max-w-[500px] mt-8 leading-[1.55]">
            Critical thinking materials for teaching the American Revolution through local history. Every town, every state, built for teachers first.
          </p>
        </div>
      </section>

      {/* ── LIVE STATS BAND ─────────────────────────────────────────── */}
      <section className="bg-[#cc3322] border-b-4 border-[#14100a] py-8 sm:py-11 px-5 sm:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-6 top-[-12px] font-display text-[190px] leading-none text-white/[0.07] pointer-events-none select-none hidden sm:block">
          T1
        </div>

        <div className="relative z-10 flex flex-wrap gap-8 sm:gap-0 items-start sm:items-center">
          <div className="sm:pr-11 sm:border-r border-white/20">
            <div className="font-display text-white leading-none" style={{ fontSize: "clamp(40px,6vw,72px)" }}>
              {stats.townCount}
            </div>
            <div className="font-ui text-[11px] font-semibold tracking-[0.14em] uppercase text-white mt-1">
              Towns with modules
            </div>
          </div>

          <div className="sm:px-11 sm:border-r border-white/20">
            <div className="font-display text-white leading-none" style={{ fontSize: "clamp(40px,6vw,72px)" }}>
              {stats.stateCount}
            </div>
            <div className="font-ui text-[11px] font-semibold tracking-[0.14em] uppercase text-white mt-1">
              States covered
            </div>
          </div>

          <div className="sm:px-11 sm:border-r border-white/20">
            <div className="font-display text-white leading-none" style={{ fontSize: "clamp(40px,6vw,72px)" }}>
              {stats.lessonCount}
            </div>
            <div className="font-ui text-[11px] font-semibold tracking-[0.14em] uppercase text-white mt-1">
              Lesson plans
            </div>
          </div>

          <div className="sm:px-11 sm:ml-auto">
            <div
              className="bg-[#f2e6c8] text-[#14100a] font-ui text-[11px] font-bold tracking-[0.24em] uppercase px-[18px] py-[9px] border-[2.5px] border-[#14100a] inline-block"
              style={{ boxShadow: "3px 3px 0 #14100a", transform: "rotate(-2deg)" }}
            >
              Standards Aligned
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTERABLE TOWN GRID (client component) ───────────────── */}
      <TeachDirectory towns={towns} />

      {/* ── STATE BROWSE (for curriculum directors) ───────────────── */}
      <section className="bg-[#f8f0d8] border-t-4 border-[#14100a] py-10 sm:py-16 px-5 sm:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[640px] mb-10 sm:mb-14">
            <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B53A29] flex items-center gap-3 mb-3">
              <span className="w-4 h-[2px] bg-[#cc3322] block flex-shrink-0" aria-hidden />
              Browse by State
            </p>
            <h2
              className="font-display leading-[0.92] tracking-[-0.04em] text-[#14100a] m-0"
              style={{ fontSize: "clamp(28px,4.5vw,56px)" }}
            >
              By State
            </h2>
            <p className="font-editorial italic font-light text-[20px] sm:text-[18px] text-[rgba(20,16,10,0.72)] mt-5 leading-[1.65]">
              Use this view to plan multi-town units organized by state. Each town links to its module.
            </p>
          </div>

          <div className="mb-2">
            <svg width="160" height="12" viewBox="0 0 160 12" aria-hidden className="block">
              <path
                d="M0 8 Q10 2 20 8 Q30 14 40 7 Q50 1 60 7 Q70 13 80 7 Q90 2 100 7 Q110 13 120 7 Q130 2 140 7 Q150 13 160 6"
                stroke="rgba(20,16,10,0.18)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {stateNames.map((stateName, i) => {
            // Find the code for this display name
            const stateCode = stateCodes.find(
              (c) => (STATE_META[c]?.name ?? c) === stateName
            ) ?? stateName;
            const stateTowns = towns.filter((t) => t.state === stateCode);
            const desc = STATE_DESCRIPTIONS[stateName];
            const stateSlug = STATE_META[stateCode]?.slug ?? stateName.toLowerCase().replace(/\s+/g, "-");

            return (
              <div
                key={stateName}
                className="py-7 sm:py-9 border-b border-[rgba(20,16,10,0.08)] grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-1 sm:gap-12"
              >
                {/* Left */}
                <div>
                  <p
                    className="font-display leading-[0.92] tracking-[-0.03em] text-[#14100a]"
                    style={{ fontSize: "clamp(26px,3vw,40px)" }}
                  >
                    {stateName}
                  </p>
                  <div className="font-ui text-[10px] font-semibold tracking-[0.18em] text-[rgba(20,16,10,0.65)] mt-1.5">
                    {String(i + 1).padStart(2, "0")} of {stateNames.length} ·{" "}
                    {stateTowns.length} town{stateTowns.length !== 1 ? "s" : ""}
                  </div>
                </div>

                {/* Right */}
                <div>
                  {desc && (
                    <p className="font-editorial italic font-light text-[20px] sm:text-[18px] text-[rgba(20,16,10,0.6)] leading-[1.65] mb-3.5">
                      {desc}
                    </p>
                  )}
                  {/* Town links */}
                  <div className="flex flex-wrap gap-2 mb-3.5">
                    {stateTowns.slice(0, 8).map((t) => (
                      <a
                        key={t.slug}
                        href={`/towns/${t.slug}/teacher`}
                        className="no-underline font-ui text-[11px] tracking-[0.08em] text-[#14100a]/60 border border-[#14100a]/12 px-2.5 py-1 hover:text-[#14100a] hover:border-[#14100a]/30 transition-colors focus-visible:ring-2 focus-visible:ring-[#1a3a72] focus-visible:ring-offset-1 rounded-sm"
                      >
                        {t.name}
                      </a>
                    ))}
                    {stateTowns.length > 8 && (
                      <span className="font-ui text-[11px] text-[#14100a]/30">
                        +{stateTowns.length - 8} more
                      </span>
                    )}
                  </div>
                  <a
                    href={`/teach/${stateSlug}`}
                    className="no-underline font-ui text-[10px] font-semibold tracking-[0.18em] uppercase text-[#B53A29] border-b border-[rgba(181,58,41,0.3)] pb-0.5 hover:border-[#cc3322] hover:text-[#cc3322] transition-colors"
                  >
                    View {stateName} Resources →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── METHODOLOGY ─────────────────────────────────────────────── */}
      <section className="bg-[#1a3a72] border-t-4 border-[#14100a] py-12 sm:py-20 px-5 sm:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-[-10px] bottom-[-20px] font-display text-[380px] leading-none text-white/[0.04] pointer-events-none select-none tracking-[-0.05em]">
          Method
        </div>

        <div className="relative z-10 max-w-[720px]">
          <p className="font-ui text-[11px] font-semibold tracking-[0.32em] uppercase text-[rgba(255,255,255,0.75)] mb-4">
            Methodology
          </p>

          <h2
            className="font-display leading-[0.9] tracking-[-0.04em] text-white m-0"
            style={{ fontSize: "clamp(40px,6vw,80px)" }}
          >
            Our{" "}
            <span
              className="text-[#a8bcd8] inline-block"
              style={{ transform: "rotate(-2deg)", transformOrigin: "left center" }}
            >
              Approach.
            </span>
          </h2>

          <div className="flex flex-wrap gap-8 sm:gap-0 py-6 border-t border-white/10 border-b border-white/10 my-8">
            {[
              { num: "Tier 1", label: "Primary Sources First" },
              { num: String(stats.townCount), label: "Towns Covered" },
              { num: String(stats.stateCount), label: "States" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`sm:px-11 ${i === 0 ? "sm:pl-0" : ""} ${i < 2 ? "sm:border-r border-white/[0.12]" : ""}`}
              >
                <div className="font-display text-[40px] sm:text-[52px] text-white leading-none">
                  {stat.num}
                </div>
                <div className="font-ui text-[11px] font-semibold tracking-[0.14em] uppercase text-[rgba(255,255,255,0.65)] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="font-editorial italic font-light text-[20px] sm:text-[19px] text-[rgba(255,255,255,0.65)] leading-[1.7] max-w-[680px] mb-7">
            Every source in our teacher materials is evaluated using a three-tier credibility system. Tier 1 sources include primary documents, National Park Service materials, and peer-reviewed scholarship. Teacher narratives are written to help educators contextualize sources — not to replace them.
          </p>

          <p className="font-ui text-[12px] text-[rgba(255,255,255,0.40)] leading-[1.65] max-w-[540px] mb-7">
            Sources lacking URLs, unverified standards codes, and template-generated content are flagged for review. Nothing auto-publishes without editorial approval.
          </p>

          <div className="flex gap-7 flex-wrap">
            <a
              href="/methodology"
              className="no-underline font-ui text-[10px] font-semibold tracking-[0.18em] uppercase text-[rgba(255,255,255,0.65)] border-b border-white/[0.18] pb-0.5 hover:text-white hover:border-white/50 transition-colors"
            >
              Read our full methodology
            </a>
            <a
              href="/methodology#source-tiers"
              className="no-underline font-ui text-[10px] font-semibold tracking-[0.18em] uppercase text-[rgba(255,255,255,0.65)] border-b border-white/[0.18] pb-0.5 hover:text-white hover:border-white/50 transition-colors"
            >
              Source credibility tiers
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
