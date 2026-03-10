import { Metadata } from "next";
import { Link } from "@/components/ui";

export const metadata: Metadata = {
  title: "Teach | History is for Everyone",
  description:
    "Classroom-ready resources for teaching the American Revolution through local history. Lesson plans, primary sources, quizzes, and comparative assignments aligned to state standards.",
};

const STATES = [
  {
    name: "Massachusetts",
    href: "/teach/massachusetts",
    description:
      "Ten towns spanning the opening acts of the Revolution — from the shots fired at Lexington and Concord to the siege of Boston, the maritime resistance of the North Shore, and the interior defiance that shut down royal courts before a single battle was fought.",
  },
  {
    name: "New Jersey",
    href: "/teach/new-jersey",
    description:
      "The crossroads of the war — from Washington\u2019s desperate crossing of the Delaware to two brutal winters at Morristown that tested the Continental Army to its limits.",
  },
  {
    name: "Connecticut",
    href: "/teach/connecticut",
    description:
      "Connecticut\u2019s Revolutionary story spans the colony\u2019s maritime economy, Tory loyalists, and the brutal British raid on Danbury that pushed many fence-sitters toward the Patriot cause.",
  },
  {
    name: "Rhode Island",
    href: "/teach/rhode-island",
    description:
      "Newport, occupied by the British for three years, and Providence, which emerged as the Patriot headquarters and naval center — two towns that capture the tension at the heart of the Revolution.",
  },
  {
    name: "New Hampshire",
    href: "/teach/new-hampshire",
    description:
      "New Hampshire struck first — its militia seized Fort William and Mary in December 1774, months before Lexington, making it one of the earliest acts of armed resistance in the colonies.",
  },
  {
    name: "Vermont",
    href: "/teach/vermont",
    description:
      "Vermont in 1777 was a disputed territory claimed by both New York and New Hampshire, and its Green Mountain Boys fought for independence on two fronts: against the British and against colonial authority.",
  },
  {
    name: "New York",
    href: "/teach/new-york",
    description:
      "New York was the strategic prize of the entire war. The British held New York City from 1776 to 1783; the Patriot victory at Saratoga brought France into the war; and Washington\u2019s army spent its most desperate years in the Hudson Valley.",
  },
  {
    name: "Pennsylvania",
    href: "/teach/pennsylvania",
    description:
      "Pennsylvania hosted both the Continental Congress and the darkest winter of the war. From the political debates in Philadelphia to the suffering at Valley Forge, the state\u2019s history captures the Revolution at its most fragile.",
  },
  {
    name: "Virginia",
    href: "/teach/virginia",
    description:
      "Virginia produced the Revolution\u2019s most consequential leaders — Washington, Jefferson, Madison, Henry — and its final chapter was written at Yorktown, where the last major British army surrendered in 1781.",
  },
  {
    name: "South Carolina",
    href: "/teach/south-carolina",
    description:
      "South Carolina\u2019s war was the most brutal in the colonies — a civil war within a war, with Patriot and Loyalist militias fighting in a landscape of isolated plantations and dense backcountry.",
  },
  {
    name: "North Carolina",
    href: "/teach/north-carolina",
    description:
      "North Carolina\u2019s backcountry became the decisive theater of the Southern campaign. The overmountain men at Kings Mountain and Nathanael Greene\u2019s grinding campaign broke British control of the South.",
  },
  {
    name: "Georgia",
    href: "/teach/georgia",
    description:
      "Georgia was the only colony the British successfully reconquered — and held for years. Savannah\u2019s occupation and the failed Franco-American siege teach students about the war\u2019s international dimensions and the limits of alliance.",
  },
  {
    name: "Maryland",
    href: "/teach/maryland",
    description:
      "Maryland\u2019s location between the Northern and Southern colonies made it a crucial logistical hub, and its state constitution of 1776 became a model for republican government studied throughout the founding generation.",
  },
  {
    name: "Delaware",
    href: "/teach/delaware",
    description:
      "Delaware\u2019s decision to break with Pennsylvania and form its own delegation gave the Continental Congress its key swing vote for independence, and its \u201cBlue Hen\u201d regiment became one of the Continental Army\u2019s most celebrated units.",
  },
  {
    name: "Maine",
    href: "/teach/maine",
    description:
      "Maine, then part of Massachusetts, suffered some of the war\u2019s earliest British raids — Falmouth (now Portland) was bombarded and burned in 1775 — and its Penobscot Expedition of 1779 was one of the largest American naval disasters.",
  },
  {
    name: "Frontier",
    href: "/teach/frontier",
    description:
      "The Revolution extended far beyond the eastern seaboard. George Rogers Clark\u2019s capture of Kaskaskia, the founding of Marietta, and Wheeling\u2019s frontier forts show how the war reshaped the continent.",
  },
];

export default function TeachPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#2a5c45] py-24 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-white/70 mb-4">Classroom-Ready Resources</p>
          <h1 className="font-display text-white leading-[0.9]" style={{ fontSize: "clamp(80px,12vw,160px)" }}>
            For Teachers
          </h1>
          <p className="font-editorial italic text-white/85 text-[1.1rem] mt-6 max-w-[500px] leading-relaxed">
            Critical thinking materials for teaching the American Revolution through local history. Every town, every state, built for teachers first.
          </p>
        </div>
      </section>

      {/* State Resources */}
      <section className="py-20 bg-[#f2ece0] px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-baseline gap-4 mb-2">
            <h2 className="font-display text-[3rem] text-[#0e1428] leading-none">Browse by State</h2>
          </div>
          <p className="font-editorial italic text-[#0e1428]/60 text-[1rem] mb-2 max-w-[600px]">
            Teacher resources are organized by state, with curated content prioritized for towns with the richest primary source availability.
          </p>
          <div className="border-b border-[#0e1428]/10 mb-8" />

          <div>
            {STATES.map((state) => (
              <div key={state.name} className="border-b border-[#0e1428]/8 py-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10">
                  <div className="min-w-[220px]">
                    <h3 className="font-editorial text-[1.5rem] text-[#0e1428]">{state.name}</h3>
                  </div>
                  <div className="flex-1">
                    <p className="font-ui text-[0.875rem] text-[#0e1428]/60 leading-relaxed mb-3">
                      {state.description}
                    </p>
                    <a
                      href={state.href}
                      className="font-ui text-[0.75rem] uppercase tracking-[0.1em] text-[#c8222a] no-underline hover:underline"
                    >
                      View Resources &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-[#f2ece0] px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="border-t border-[#0e1428]/10 pt-16">
            <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-[#0e1428]/40 mb-3">Methodology</p>
            <h2 className="font-display text-[#0e1428]" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>Our Approach</h2>

            {/* Stats row */}
            <div className="flex flex-wrap gap-12 mt-8 mb-8 pb-8 border-b border-[#0e1428]/10">
              <div>
                <span className="font-display text-[3.5rem] text-[#0e1428] leading-none block">Tier 1</span>
                <span className="font-ui text-[0.75rem] uppercase tracking-[0.1em] text-[#c8222a] block mt-1">Primary Sources</span>
              </div>
              <div>
                <span className="font-display text-[3.5rem] text-[#0e1428] leading-none block">77</span>
                <span className="font-ui text-[0.75rem] uppercase tracking-[0.1em] text-[#c8222a] block mt-1">Towns Covered</span>
              </div>
              <div>
                <span className="font-display text-[3.5rem] text-[#0e1428] leading-none block">16</span>
                <span className="font-ui text-[0.75rem] uppercase tracking-[0.1em] text-[#c8222a] block mt-1">States</span>
              </div>
            </div>

            <p className="font-editorial text-[1.05rem] text-[#0e1428] max-w-[720px] leading-relaxed mb-6">
              Every source in our teacher materials is evaluated using a three-tier credibility system. Tier 1 sources include primary documents, National Park Service materials, and peer-reviewed scholarship. Teacher narratives are written to help educators contextualize sources for their students — not to replace the sources themselves.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/methodology">Read our full methodology</Link>
              <Link href="/methodology#source-tiers">Source credibility tiers</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
