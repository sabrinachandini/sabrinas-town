import { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Teach | History is for Everyone",
  description:
    "Classroom-ready resources for teaching the American Revolution through local history. Lesson plans, primary sources, quizzes, and comparative assignments aligned to state standards.",
};

const STATES = [
  {
    name: "Massachusetts",
    slug: "massachusetts",
    description:
      "Ten towns spanning the opening acts of the Revolution — from the shots fired at Lexington and Concord to the siege of Boston, the maritime resistance of the North Shore, and the interior defiance that shut down royal courts before a single battle was fought.",
  },
  {
    name: "New Jersey",
    slug: "new-jersey",
    description:
      "The crossroads of the war — from Washington\u2019s desperate crossing of the Delaware to two brutal winters at Morristown that tested the Continental Army to its limits.",
  },
  {
    name: "Virginia",
    slug: "virginia",
    description:
      "Virginia produced the Revolution\u2019s most consequential leaders — Washington, Jefferson, Madison, Henry — and its final chapter was written at Yorktown, where the last major British army surrendered in 1781.",
  },
  {
    name: "New York",
    slug: "new-york",
    description:
      "New York was the strategic prize of the entire war. The British held New York City from 1776 to 1783; the Patriot victory at Saratoga brought France into the war; and Washington\u2019s army spent its most desperate years in the Hudson Valley.",
  },
  {
    name: "Pennsylvania",
    slug: "pennsylvania",
    description:
      "Pennsylvania hosted both the Continental Congress and the darkest winter of the war. From the political debates in Philadelphia to the suffering at Valley Forge, the state\u2019s history captures the Revolution at its most fragile.",
  },
  {
    name: "South Carolina",
    slug: "south-carolina",
    description:
      "South Carolina\u2019s war was the most brutal in the colonies — a civil war within a war, with Patriot and Loyalist militias fighting in a landscape of isolated plantations and dense backcountry.",
  },
  {
    name: "Connecticut",
    slug: "connecticut",
    description:
      "Connecticut\u2019s Revolutionary story spans the colony\u2019s maritime economy, Tory loyalists, and the brutal British raid on Danbury that pushed many fence-sitters toward the Patriot cause.",
  },
  {
    name: "North Carolina",
    slug: "north-carolina",
    description:
      "North Carolina\u2019s backcountry became the decisive theater of the Southern campaign. The overmountain men at Kings Mountain and Nathanael Greene\u2019s grinding campaign broke British control of the South.",
  },
  {
    name: "Rhode Island",
    slug: "rhode-island",
    description:
      "Newport, occupied by the British for three years, and Providence, which emerged as the Patriot headquarters and naval center — two towns that capture the tension at the heart of the Revolution.",
  },
  {
    name: "Maryland",
    slug: "maryland",
    description:
      "Maryland\u2019s location between the Northern and Southern colonies made it a crucial logistical hub, and its state constitution of 1776 became a model for republican government studied throughout the founding generation.",
  },
  {
    name: "New Hampshire",
    slug: "new-hampshire",
    description:
      "New Hampshire struck first — its militia seized Fort William and Mary in December 1774, months before Lexington, making it one of the earliest acts of armed resistance in the colonies.",
  },
  {
    name: "Georgia",
    slug: "georgia",
    description:
      "Georgia was the only colony the British successfully reconquered — and held for years. Savannah\u2019s occupation and the failed Franco-American siege teach students about the war\u2019s international dimensions and the limits of alliance.",
  },
  {
    name: "Vermont",
    slug: "vermont",
    description:
      "Vermont in 1777 was a disputed territory claimed by both New York and New Hampshire, and its Green Mountain Boys fought for independence on two fronts: against the British and against colonial authority.",
  },
  {
    name: "Delaware",
    slug: "delaware",
    description:
      "Delaware\u2019s decision to break with Pennsylvania and form its own delegation gave the Continental Congress its key swing vote for independence, and its \u201cBlue Hen\u201d regiment became one of the Continental Army\u2019s most celebrated units.",
  },
  {
    name: "Maine",
    slug: "maine",
    description:
      "Maine, then part of Massachusetts, suffered some of the war\u2019s earliest British raids — Falmouth (now Portland) was bombarded and burned in 1775 — and its Penobscot Expedition of 1779 was one of the largest American naval disasters.",
  },
];

export default function TeachPage() {
  return (
    <main>
      {/* NAVY hero */}
      <section className="bg-[#1a3a72] border-b-4 border-[#14100a] py-12 sm:py-20 px-5 sm:px-16 relative overflow-hidden">
        {/* Ghost watermark */}
        <div aria-hidden className="absolute right-[-10px] top-[-20px] font-display leading-none pointer-events-none select-none text-white/[0.06]" style={{ fontSize: "clamp(180px,35vw,480px)", letterSpacing: "-0.05em" }}>
          Teach
        </div>

        {/* Stars */}
        <svg aria-hidden className="absolute top-5 right-5 pointer-events-none" style={{ opacity: 0.2 }} width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path d="M11 25 L12.4 30 L18 30 L13.5 33.5 L15 39 L11 35.8 L7 39 L8.5 33.5 L4 30 L9.6 30 Z" fill="#4A6A9B" />
          <path d="M38 10 L39 13 L42 13 L39.8 14.8 L40.8 18 L38 16.2 L35.2 18 L36.2 14.8 L34 13 L37 13 Z" fill="#f2e6c8" />
          <path d="M44 36 L44.7 38.4 L47.3 38.4 L45.2 39.9 L45.9 42.3 L44 41 L42.1 42.3 L42.8 39.9 L40.7 38.4 L43.3 38.4 Z" fill="#4A6A9B" />
        </svg>

        {/* Tilted stamp */}
        <div aria-hidden className="absolute top-10 right-10 rotate-[-2.5deg] font-ui font-bold text-[11px] tracking-[0.12em] uppercase text-[rgba(242,230,200,0.55)] border-[2px] border-[rgba(242,230,200,0.4)] px-3 py-1.5 hidden sm:block">
          For Classrooms
        </div>

        <div className="relative z-10 max-w-[700px]">
          <p className="font-ui text-[11px] font-semibold tracking-[0.32em] uppercase text-[rgba(255,255,255,0.78)] flex items-center gap-3 mb-6">
            <span className="w-4 h-[2px] bg-[rgba(255,255,255,0.3)] block flex-shrink-0" />
            For Teachers &amp; Classrooms
          </p>

          <h1 className="font-display leading-[0.88] tracking-[-0.05em] m-0" style={{ fontSize: "clamp(40px,10vw,120px)" }}>
            <span className="text-white block">History</span>
            <span className="text-[#a8bcd8] block" style={{ transform: "rotate(-2deg) translateX(28px)", transformOrigin: "left center", display: "block" }}>
              For
            </span>
            <span className="text-white block">Teachers.</span>
          </h1>

          <svg width="360" height="12" viewBox="0 0 340 12" className="block mt-7" aria-hidden>
            <path d="M0 8 Q21 2 42 8 Q63 14 85 7 Q106 1 127 7 Q148 13 170 7 Q191 2 212 7 Q233 13 255 7 Q276 2 297 7 Q318 13 340 6" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>

          <p className="font-editorial italic font-light text-[20px] sm:text-[20px] text-[rgba(255,255,255,0.76)] max-w-[500px] mt-8 leading-[1.55]">
            Critical thinking materials for teaching the American Revolution through local history. Every town, every state, built for teachers first.
          </p>
        </div>
      </section>

      {/* CRIMSON stats band */}
      <section className="bg-[#cc3322] border-b-4 border-[#14100a] py-8 sm:py-11 px-5 sm:px-16 relative overflow-hidden">
        {/* Ghost */}
        <div aria-hidden className="absolute right-6 top-[-12px] font-display text-[190px] leading-none text-white/[0.07] pointer-events-none select-none hidden sm:block">
          T1
        </div>

        <div className="relative z-10 flex flex-wrap gap-8 sm:gap-0 items-start sm:items-center">
          {/* Stat 1 */}
          <div className="sm:pr-11 sm:border-r border-white/20">
            <div className="font-display text-white leading-none" style={{ fontSize: "clamp(40px,6vw,72px)" }}>Tier 1</div>
            <div className="font-ui text-[11px] font-semibold tracking-[0.14em] uppercase text-white mt-1">Primary sources only</div>
            <svg width="50" height="7" viewBox="0 0 50 7" aria-hidden className="mt-1">
              <path d="M0 4 Q6 1 12 4 Q18 7 25 3 Q31 0 37 3 Q43 7 50 2" stroke="#4A6A9B" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.45" />
            </svg>
          </div>

          {/* Stat 2 */}
          <div className="sm:px-11 sm:border-r border-white/20">
            <div className="font-display text-white leading-none" style={{ fontSize: "clamp(40px,6vw,72px)" }}>77</div>
            <div className="font-ui text-[11px] font-semibold tracking-[0.14em] uppercase text-white mt-1">Towns in network</div>
            <svg width="50" height="7" viewBox="0 0 50 7" aria-hidden className="mt-1">
              <path d="M0 4 Q6 1 12 4 Q18 7 25 3 Q31 0 37 3 Q43 7 50 2" stroke="#4A6A9B" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.45" />
            </svg>
          </div>

          {/* Stat 3 */}
          <div className="sm:px-11 sm:border-r border-white/20">
            <div className="font-display text-white leading-none" style={{ fontSize: "clamp(40px,6vw,72px)" }}>16</div>
            <div className="font-ui text-[11px] font-semibold tracking-[0.14em] uppercase text-white mt-1">States covered</div>
            <svg width="50" height="7" viewBox="0 0 50 7" aria-hidden className="mt-1">
              <path d="M0 4 Q6 1 12 4 Q18 7 25 3 Q31 0 37 3 Q43 7 50 2" stroke="#4A6A9B" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.45" />
            </svg>
          </div>

          {/* Badge */}
          <div className="sm:px-11 sm:ml-auto">
            <div className="bg-[#f2e6c8] text-[#14100a] font-ui text-[11px] font-bold tracking-[0.24em] uppercase px-[18px] py-[9px] border-[2.5px] border-[#14100a] inline-block" style={{ boxShadow: "3px 3px 0 #14100a", transform: "rotate(-2deg)" }}>
              Standards Aligned
            </div>
          </div>
        </div>
      </section>

      {/* PAPER state list */}
      <section className="bg-[#f2ece0] py-10 sm:py-16 px-5 sm:px-16">
        {/* Section intro */}
        <div className="max-w-[640px] mb-10 sm:mb-14">
          <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B53A29] flex items-center gap-3 mb-3">
            <span className="w-4 h-[2px] bg-[#cc3322] block flex-shrink-0" />
            Browse by State
          </p>
          <h2 className="font-display leading-[0.92] tracking-[-0.04em] text-[#14100a] m-0" style={{ fontSize: "clamp(32px,4.5vw,60px)" }}>
            Browse by State
          </h2>
          <p className="font-editorial italic font-light text-[20px] sm:text-[18px] text-[rgba(20,16,10,0.72)] mt-5 leading-[1.65]">
            Teacher resources organized by state, prioritized for towns with the richest primary source availability.
          </p>
        </div>

        {/* Squiggle */}
        <div className="mb-2">
          <svg width="160" height="12" viewBox="0 0 160 12" aria-hidden className="block">
            <path d="M0 8 Q10 2 20 8 Q30 14 40 7 Q50 1 60 7 Q70 13 80 7 Q90 2 100 7 Q110 13 120 7 Q130 2 140 7 Q150 13 160 6" stroke="#cc3322" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.35" />
          </svg>
        </div>

        {/* State rows */}
        {STATES.map((state, i) => (
          <div
            key={state.slug}
            className="py-7 sm:py-9 border-b border-[rgba(20,16,10,0.08)] grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-1 sm:gap-12"
          >
            {/* Left */}
            <div>
              <a
                href={`/teach/${state.slug}`}
                className="no-underline font-display leading-[0.92] tracking-[-0.03em] text-[#14100a] hover:text-[#cc3322] transition-colors block"
                style={{ fontSize: "clamp(26px,3vw,40px)" }}
              >
                {state.name}
              </a>
              <div className="font-ui text-[10px] font-semibold tracking-[0.18em] text-[rgba(20,16,10,0.65)] mt-1.5">
                {String(i + 1).padStart(2, "0")} of {STATES.length}
              </div>
            </div>

            {/* Right */}
            <div>
              <p className="font-editorial italic font-light text-[20px] sm:text-[18px] text-[rgba(20,16,10,0.6)] leading-[1.65] mb-3.5">
                {state.description}
              </p>
              <a
                href={`/teach/${state.slug}`}
                className="no-underline font-ui text-[10px] font-semibold tracking-[0.18em] uppercase text-[#cc3322] border-b border-[rgba(204,51,34,0.3)] pb-0.5 hover:border-[#cc3322] transition-colors"
              >
                View Resources →
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* NAVY methodology */}
      <section className="bg-[#1a3a72] border-t-4 border-[#14100a] py-12 sm:py-20 px-5 sm:px-16 relative overflow-hidden">
        {/* Ghost */}
        <div aria-hidden className="absolute right-[-10px] bottom-[-20px] font-display text-[380px] leading-none text-white/[0.04] pointer-events-none select-none tracking-[-0.05em]">
          Method
        </div>

        <div className="relative z-10 max-w-[720px]">
          <p className="font-ui text-[11px] font-semibold tracking-[0.32em] uppercase text-[rgba(255,255,255,0.75)] mb-4">
            Methodology
          </p>

          <h2 className="font-display leading-[0.9] tracking-[-0.04em] text-white m-0" style={{ fontSize: "clamp(40px,6vw,80px)" }}>
            Our{" "}
            <span className="text-[#a8bcd8] inline-block" style={{ transform: "rotate(-2deg)", transformOrigin: "left center" }}>
              Approach.
            </span>
          </h2>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 sm:gap-0 py-6 border-t border-white/10 border-b border-white/10 my-8">
            {[
              { num: "Tier 1", label: "Primary Sources" },
              { num: "77", label: "Towns Covered" },
              { num: "16", label: "States" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`sm:px-11 ${i === 0 ? "sm:pl-0" : ""} ${i < 2 ? "sm:border-r border-white/[0.12]" : ""}`}
              >
                <div className="font-display text-[40px] sm:text-[52px] text-white leading-none">{stat.num}</div>
                <div className="font-ui text-[11px] font-semibold tracking-[0.14em] uppercase text-[rgba(255,255,255,0.65)] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="font-editorial italic font-light text-[20px] sm:text-[19px] text-[rgba(255,255,255,0.65)] leading-[1.7] max-w-[680px] mb-7">
            Every source in our teacher materials is evaluated using a three-tier credibility system. Tier 1 sources include primary documents, National Park Service materials, and peer-reviewed scholarship. Teacher narratives are written to help educators contextualize sources — not to replace them.
          </p>

          <div className="flex gap-7 flex-wrap">
            <a href="/methodology" className="no-underline font-ui text-[10px] font-semibold tracking-[0.18em] uppercase text-[rgba(255,255,255,0.65)] border-b border-white/[0.18] pb-0.5 hover:text-white hover:border-white/50 transition-colors">
              Read our full methodology
            </a>
            <a href="/methodology#source-tiers" className="no-underline font-ui text-[10px] font-semibold tracking-[0.18em] uppercase text-[rgba(255,255,255,0.65)] border-b border-white/[0.18] pb-0.5 hover:text-white hover:border-white/50 transition-colors">
              Source credibility tiers
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
