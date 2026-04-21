import { Metadata } from "next";
import { getTeacherModule } from "@/lib/api";

export const metadata: Metadata = {
  title: "Teach New Jersey | History is for Everyone",
  description:
    "Teacher resources for New Jersey towns at the crossroads of the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
  openGraph: {
    title: "Teach New Jersey | History is for Everyone",
    description:
      "Teacher resources for New Jersey towns at the crossroads of the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
    url: "https://sabrinas-town.vercel.app/teach/new-jersey",
  },
  alternates: { canonical: "https://sabrinas-town.vercel.app/teach/new-jersey" },
};

export const dynamic = "force-dynamic";

const NJ_TOWNS = [
  { slug: "morristown-nj", name: "Morristown" },
];

const COMING_SOON = ["Trenton", "Princeton", "Monmouth", "New Brunswick", "Fort Lee"];

export default async function NewJerseyTeachPage() {
  const modules = await Promise.all(
    NJ_TOWNS.map(async (town) => {
      const mod = await getTeacherModule(town.slug);
      return {
        ...town,
        hasCurated: mod?.meta?.contentSource === "curated",
        hasModule: mod !== null,
        gradeRange: mod?.overview?.gradeRange ?? null,
        duration: mod?.overview?.estimatedDuration ?? null,
      };
    })
  );

  const curatedCount = modules.filter((m) => m.hasCurated).length;
  const moduleCount = modules.filter((m) => m.hasModule).length;

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="bg-[#1a3a72] border-b-4 border-[#14100a] py-20 px-8 md:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-[-10px] top-[-20px] font-display leading-none pointer-events-none select-none text-white/[0.04]" style={{ fontSize: "clamp(160px,28vw,360px)", letterSpacing: "-0.05em" }}>NJ</div>
        <svg aria-hidden className="absolute top-6 right-6 pointer-events-none" style={{ opacity: 0.18 }} width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path d="M11 25 L12.4 30 L18 30 L13.5 33.5 L15 39 L11 35.8 L7 39 L8.5 33.5 L4 30 L9.6 30 Z" fill="#e8b84b" />
          <path d="M38 10 L39 13 L42 13 L39.8 14.8 L40.8 18 L38 16.2 L35.2 18 L36.2 14.8 L34 13 L37 13 Z" fill="#f2e6c8" />
          <path d="M44 36 L44.7 38.4 L47.3 38.4 L45.2 39.9 L45.9 42.3 L44 41 L42.1 42.3 L42.8 39.9 L40.7 38.4 L43.3 38.4 Z" fill="#e8b84b" />
        </svg>
        <div aria-hidden className="absolute top-10 right-10 rotate-[-2.5deg] font-ui font-bold text-[10px] tracking-[0.12em] uppercase text-[rgba(242,230,200,0.5)] border-[2px] border-[rgba(242,230,200,0.35)] px-3 py-1.5 hidden sm:block">For Classrooms</div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 mb-8">
            <a href="/teach" className="font-ui text-[9px] uppercase tracking-[0.2em] text-[#f2e6c8]/30 hover:text-[#e8b84b] transition-colors no-underline">Teach</a>
            <span className="text-[#f2e6c8]/20 text-[10px]">/</span>
            <span className="font-ui text-[9px] uppercase tracking-[0.2em] text-[#f2e6c8]/55">New Jersey</span>
          </nav>
          <p className="font-ui text-[9px] uppercase tracking-[0.28em] text-[#f2e6c8]/40 flex items-center gap-2.5 mb-4">
            <span className="w-4 h-[2px] bg-[#f2e6c8]/30 block" />Teacher Resources
          </p>
          <h1 className="font-display text-[#f2e6c8] leading-[0.88] tracking-[-0.02em] whitespace-nowrap" style={{ fontSize: "clamp(42px,8vw,120px)" }}>New Jersey</h1>
          <svg width="320" height="12" viewBox="0 0 320 12" className="block mt-6 mb-8" aria-hidden>
            <path d="M0 8 Q20 2 40 8 Q60 14 80 7 Q100 1 120 7 Q140 13 160 7 Q180 2 200 7 Q220 13 240 7 Q260 2 280 7 Q300 13 320 6" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
          <p className="font-editorial italic font-light text-[19px] text-[rgba(255,255,255,0.65)] max-w-[580px] leading-[1.65]">
            New Jersey was the crossroads of the American Revolution — more battles were fought here than in any other colony, from Washington's desperate Delaware crossing to the brutal winters at Morristown.
          </p>
        </div>
      </section>

      {/* ── STATS BAND ────────────────────────────────────────────── */}
      <section className="bg-[#cc3322] border-b-4 border-[#14100a] py-10 px-8 md:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-4 top-[-12px] font-display text-[190px] leading-none text-white/[0.06] pointer-events-none select-none">NJ</div>
        <div className="relative z-10 flex items-center flex-wrap gap-0 max-w-[1200px] mx-auto">
          {[
            { num: String(NJ_TOWNS.length), label: "Towns Available" },
            { num: String(moduleCount), label: "With Full Packets" },
            { num: String(COMING_SOON.length) + "+", label: "Towns Coming Soon" },
          ].map((stat, i) => (
            <div key={stat.label} className={`pr-10 ${i > 0 ? "px-10" : ""} ${i < 2 ? "border-r border-white/20" : ""}`}>
              <div className="font-display text-[#e8b84b] leading-none" style={{ fontSize: "clamp(44px,5.5vw,68px)" }}>{stat.num}</div>
              <div className="font-ui text-[10px] font-semibold tracking-[0.14em] uppercase text-white/50 mt-1">{stat.label}</div>
              <svg width="50" height="7" viewBox="0 0 50 7" aria-hidden className="mt-1"><path d="M0 4 Q6 1 12 4 Q18 7 25 3 Q31 0 37 3 Q43 7 50 2" stroke="#e8b84b" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.45" /></svg>
            </div>
          ))}
          <div className="ml-auto">
            <div className="bg-[#f2e6c8] text-[#14100a] font-ui text-[9px] font-bold tracking-[0.22em] uppercase px-5 py-2.5 border-[2.5px] border-[#14100a] inline-block" style={{ boxShadow: "3px 3px 0 #14100a", transform: "rotate(-2deg)" }}>Standards Aligned</div>
          </div>
        </div>
      </section>

      {/* ── NARRATIVE ─────────────────────────────────────────────── */}
      <section className="bg-[#f2e6c8] border-b-4 border-[#14100a] py-16 px-8 md:px-16">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="font-ui text-[9px] uppercase tracking-[0.28em] text-[#cc3322] flex items-center gap-2.5 mb-4"><span className="w-4 h-[2px] bg-[#cc3322] block" />The Context</p>
            <h2 className="font-display text-[#14100a] leading-[0.92]" style={{ fontSize: "clamp(32px,4vw,52px)" }}>Why Teach<br /><span className="text-[#1a3a72]">New Jersey?</span></h2>
            <div className="w-10 h-[3px] bg-[#cc3322] mt-5" />
          </div>
          <div className="space-y-5">
            <p className="font-editorial italic font-light text-[18px] text-[#14100a]/70 leading-[1.75]">
              New Jersey's geography made it a perpetual battleground: situated between the British stronghold of New York and the Continental Congress in Philadelphia, its roads, rivers, and towns saw constant military movement across seven years of war.
            </p>
            <p className="font-ui text-[14px] text-[#14100a]/60 leading-relaxed">
              Its civilian population endured occupation, foraging, and the daily disruption of armies marching through their communities. Morristown was the Continental Army's winter headquarters twice — the first in 1777 when smallpox and starvation threatened to end the army, and again in 1779–80 when the worst winter of the century nearly accomplished what the British could not. Teaching New Jersey means teaching the war as it was actually experienced: not a series of glorious victories but a long, grinding contest of endurance.
            </p>
          </div>
        </div>
      </section>

      {/* ── TOWN RESOURCE LIST ────────────────────────────────────── */}
      <section className="bg-[#f2e6c8] border-b-4 border-[#14100a] py-16 px-8 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-ui text-[9px] uppercase tracking-[0.28em] text-[#cc3322] flex items-center gap-2.5 mb-4"><span className="w-4 h-[2px] bg-[#cc3322] block" />Town Resources</p>
          <h2 className="font-display text-[#14100a] leading-[0.92] mb-2" style={{ fontSize: "clamp(32px,4vw,52px)" }}>Print-Ready Packets</h2>
          <p className="font-ui text-[13px] text-[#14100a]/50 mb-10">Complete teacher packets formatted for classroom printing — lesson plans, source packets, handouts, and quizzes.</p>
          <div className="border-t-[3px] border-[#14100a]">
            {modules.map((m, i) => (
              <div key={m.slug} className="flex items-center justify-between py-6 border-b border-[#14100a]/10 gap-8 group">
                <div className="flex items-center gap-5 min-w-0">
                  <span className="font-ui text-[10px] font-semibold text-[#14100a]/25 w-6 flex-shrink-0 text-right">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <a href={`/towns/${m.slug}/teacher`} className="no-underline font-display text-[clamp(22px,3vw,32px)] text-[#14100a] hover:text-[#cc3322] transition-colors leading-none tracking-[-0.02em]">{m.name}</a>
                    {m.gradeRange && <p className="font-ui text-[10px] uppercase tracking-[0.14em] text-[#14100a]/35 mt-1">{m.gradeRange}{m.duration ? ` · ${m.duration}` : ""}</p>}
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className={`font-ui text-[8px] uppercase tracking-[0.14em] px-2.5 py-1 border ${m.hasCurated ? "border-[#1a3a72]/30 text-[#1a3a72] bg-[#1a3a72]/5" : m.hasModule ? "border-[#e8b84b]/50 text-[#a07a00]" : "border-[#14100a]/12 text-[#14100a]/30"}`}>
                    {m.hasCurated ? "Curated" : m.hasModule ? "Generated" : "Coming Soon"}
                  </span>
                  {m.hasModule && (
                    <a href={`/towns/${m.slug}/teacher/print`} target="_blank" rel="noopener noreferrer" className="no-underline font-ui text-[9px] uppercase tracking-[0.16em] text-[#cc3322] border border-[#cc3322]/30 px-4 py-2 hover:bg-[#cc3322] hover:text-[#f2e6c8] transition-colors whitespace-nowrap">Print →</a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Coming soon band */}
          <div className="mt-10 pt-8 border-t border-[#14100a]/10">
            <p className="font-ui text-[9px] uppercase tracking-[0.22em] text-[#14100a]/40 mb-4">Additional towns coming soon</p>
            <div className="flex flex-wrap gap-3">
              {COMING_SOON.map((name) => (
                <span key={name} className="font-ui text-[11px] uppercase tracking-[0.12em] text-[#14100a]/35 border border-[#14100a]/12 px-3 py-1.5">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ───────────────────────────────────────────── */}
      <section className="bg-[#1a3a72] py-16 px-8 md:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-[-10px] bottom-[-20px] font-display text-[320px] leading-none text-white/[0.04] pointer-events-none select-none tracking-[-0.05em]">T1</div>
        <div className="relative z-10 max-w-[720px] mx-auto">
          <p className="font-ui text-[9px] uppercase tracking-[0.28em] text-[#f2e6c8]/35 mb-4">Source Standards</p>
          <h2 className="font-display text-[#f2e6c8] leading-[0.9] mb-6" style={{ fontSize: "clamp(36px,5vw,68px)" }}>
            Tier&nbsp;1{" "}<span className="text-[#e8b84b] inline-block" style={{ transform: "rotate(-2deg)", transformOrigin: "left center" }}>Sources Only.</span>
          </h2>
          <p className="font-editorial italic font-light text-[18px] text-[rgba(255,255,255,0.62)] leading-[1.7] mb-8 max-w-[600px]">
            Every source in our New Jersey materials is evaluated using a three-tier credibility system. Tier&nbsp;1 includes primary documents, National Park Service materials, and peer-reviewed scholarship. Teacher narratives contextualize sources — they don&apos;t replace them.
          </p>
          <div className="flex gap-6 flex-wrap">
            <a href="/methodology" className="no-underline font-ui text-[10px] uppercase tracking-[0.18em] text-[#f2e6c8]/40 border-b border-[#f2e6c8]/20 pb-0.5 hover:text-[#f2e6c8] hover:border-[#f2e6c8]/50 transition-colors">Read Our Full Methodology</a>
            <a href="/teach" className="no-underline font-ui text-[10px] uppercase tracking-[0.18em] text-[#f2e6c8]/40 border-b border-[#f2e6c8]/20 pb-0.5 hover:text-[#f2e6c8] hover:border-[#f2e6c8]/50 transition-colors">All States →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
