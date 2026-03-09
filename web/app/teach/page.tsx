import { Metadata } from "next";
import {
  Container,
  Text,
  Link,
  Button,
  PageHero,
  SectionHeader,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Teach | History is for Everyone",
  description:
    "Classroom-ready resources for teaching the American Revolution through local history. Lesson plans, primary sources, quizzes, and comparative assignments aligned to state standards.",
};

export default function TeachPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        bg="navy"
        overline="Classroom-Ready Resources"
        title="For Teachers"
        body="Critical thinking materials for teaching the American Revolution through local history. Every town, every state, built for teachers first."
      />

      {/* State Resources */}
      <section className="py-20 bg-ivory">
        <Container>
          <SectionHeader
            overline="Browse by State"
            title="Teacher Resources"
          />
          <p className="font-serif text-[1.05rem] text-charcoal max-w-[640px] mb-10 -mt-4">
            Teacher resources are organized by state, with curated content
            prioritized for towns with the richest primary source availability.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Massachusetts */}
            <div className="bg-navy text-white p-6 border-l-4 border-crimson">
              <h3 className="font-heading font-bold text-[1.35rem] text-crimson mb-3">
                Massachusetts
              </h3>
              <p className="font-serif text-[0.95rem] text-fog leading-relaxed mb-5">
                Ten towns spanning the opening acts of the Revolution — from the
                shots fired at Lexington and Concord to the siege of Boston, the
                maritime resistance of the North Shore, and the interior
                defiance that shut down royal courts before a single battle was
                fought.
              </p>
              <Button href="/teach/massachusetts" size="small" variant="outline">
                View Massachusetts Resources
              </Button>
            </div>

            {/* New Jersey */}
            <div className="bg-navy text-white p-6 border-l-4 border-crimson">
              <h3 className="font-heading font-bold text-[1.35rem] text-crimson mb-3">
                New Jersey
              </h3>
              <p className="font-serif text-[0.95rem] text-fog leading-relaxed mb-5">
                The crossroads of the war — from Washington&apos;s desperate
                crossing of the Delaware to two brutal winters at Morristown
                that tested the Continental Army to its limits.
              </p>
              <Button href="/teach/new-jersey" size="small" variant="outline">
                View New Jersey Resources
              </Button>
            </div>

            {/* Connecticut */}
            <div className="bg-navy text-white p-6 border-l-4 border-crimson">
              <h3 className="font-heading font-bold text-[1.35rem] text-crimson mb-3">
                Connecticut
              </h3>
              <p className="font-serif text-[0.95rem] text-fog leading-relaxed mb-5">
                Connecticut&apos;s Revolutionary story spans the colony&apos;s
                maritime economy, Tory loyalists, and the brutal British raid on
                Danbury that pushed many fence-sitters toward the Patriot cause.
              </p>
              <Button href="/teach/connecticut" size="small" variant="outline">
                View Connecticut Resources
              </Button>
            </div>

            {/* Rhode Island */}
            <div className="bg-navy text-white p-6 border-l-4 border-crimson">
              <h3 className="font-heading font-bold text-[1.35rem] text-crimson mb-3">
                Rhode Island
              </h3>
              <p className="font-serif text-[0.95rem] text-fog leading-relaxed mb-5">
                Newport, occupied by the British for three years, and
                Providence, which emerged as the Patriot headquarters and naval
                center — two towns that capture the tension at the heart of the
                Revolution.
              </p>
              <Button href="/teach/rhode-island" size="small" variant="outline">
                View Rhode Island Resources
              </Button>
            </div>

            {/* New Hampshire */}
            <div className="bg-navy text-white p-6 border-l-4 border-crimson">
              <h3 className="font-heading font-bold text-[1.35rem] text-crimson mb-3">
                New Hampshire
              </h3>
              <p className="font-serif text-[0.95rem] text-fog leading-relaxed mb-5">
                New Hampshire struck first — its militia seized Fort William and
                Mary in December 1774, months before Lexington, making it one
                of the earliest acts of armed resistance in the colonies.
              </p>
              <Button href="/teach/new-hampshire" size="small" variant="outline">
                View New Hampshire Resources
              </Button>
            </div>

            {/* Vermont */}
            <div className="bg-navy text-white p-6 border-l-4 border-crimson">
              <h3 className="font-heading font-bold text-[1.35rem] text-crimson mb-3">
                Vermont
              </h3>
              <p className="font-serif text-[0.95rem] text-fog leading-relaxed mb-5">
                Vermont in 1777 was a disputed territory claimed by both New
                York and New Hampshire, and its Green Mountain Boys fought for
                independence on two fronts: against the British and against
                colonial authority.
              </p>
              <Button href="/teach/vermont" size="small" variant="outline">
                View Vermont Resources
              </Button>
            </div>

            {/* New York */}
            <div className="bg-navy text-white p-6 border-l-4 border-crimson">
              <h3 className="font-heading font-bold text-[1.35rem] text-crimson mb-3">
                New York
              </h3>
              <p className="font-serif text-[0.95rem] text-fog leading-relaxed mb-5">
                New York was the strategic prize of the entire war. The British
                held New York City from 1776 to 1783; the Patriot victory at
                Saratoga brought France into the war; and Washington&apos;s army
                spent its most desperate years in the Hudson Valley.
              </p>
              <Button href="/teach/new-york" size="small" variant="outline">
                View New York Resources
              </Button>
            </div>

            {/* Pennsylvania */}
            <div className="bg-navy text-white p-6 border-l-4 border-crimson">
              <h3 className="font-heading font-bold text-[1.35rem] text-crimson mb-3">
                Pennsylvania
              </h3>
              <p className="font-serif text-[0.95rem] text-fog leading-relaxed mb-5">
                Pennsylvania hosted both the Continental Congress and the
                darkest winter of the war. From the political debates in
                Philadelphia to the suffering at Valley Forge, the state&apos;s
                history captures the Revolution at its most fragile.
              </p>
              <Button href="/teach/pennsylvania" size="small" variant="outline">
                View Pennsylvania Resources
              </Button>
            </div>

            {/* Virginia */}
            <div className="bg-navy text-white p-6 border-l-4 border-crimson">
              <h3 className="font-heading font-bold text-[1.35rem] text-crimson mb-3">
                Virginia
              </h3>
              <p className="font-serif text-[0.95rem] text-fog leading-relaxed mb-5">
                Virginia produced the Revolution&apos;s most consequential
                leaders — Washington, Jefferson, Madison, Henry — and its final
                chapter was written at Yorktown, where the last major British
                army surrendered in 1781.
              </p>
              <Button href="/teach/virginia" size="small" variant="outline">
                View Virginia Resources
              </Button>
            </div>

            {/* South Carolina */}
            <div className="bg-navy text-white p-6 border-l-4 border-crimson">
              <h3 className="font-heading font-bold text-[1.35rem] text-crimson mb-3">
                South Carolina
              </h3>
              <p className="font-serif text-[0.95rem] text-fog leading-relaxed mb-5">
                South Carolina&apos;s war was the most brutal in the colonies —
                a civil war within a war, with Patriot and Loyalist militias
                fighting in a landscape of isolated plantations and dense
                backcountry.
              </p>
              <Button href="/teach/south-carolina" size="small" variant="outline">
                View South Carolina Resources
              </Button>
            </div>

            {/* North Carolina */}
            <div className="bg-navy text-white p-6 border-l-4 border-crimson">
              <h3 className="font-heading font-bold text-[1.35rem] text-crimson mb-3">
                North Carolina
              </h3>
              <p className="font-serif text-[0.95rem] text-fog leading-relaxed mb-5">
                North Carolina&apos;s backcountry became the decisive theater
                of the Southern campaign. The overmountain men at Kings Mountain
                and Nathanael Greene&apos;s grinding campaign broke British
                control of the South.
              </p>
              <Button href="/teach/north-carolina" size="small" variant="outline">
                View North Carolina Resources
              </Button>
            </div>

            {/* Georgia */}
            <div className="bg-navy text-white p-6 border-l-4 border-crimson">
              <h3 className="font-heading font-bold text-[1.35rem] text-crimson mb-3">
                Georgia
              </h3>
              <p className="font-serif text-[0.95rem] text-fog leading-relaxed mb-5">
                Georgia was the only colony the British successfully
                reconquered — and held for years. Savannah&apos;s occupation
                and the failed Franco-American siege teach students about the
                war&apos;s international dimensions and the limits of alliance.
              </p>
              <Button href="/teach/georgia" size="small" variant="outline">
                View Georgia Resources
              </Button>
            </div>

            {/* Maryland */}
            <div className="bg-navy text-white p-6 border-l-4 border-crimson">
              <h3 className="font-heading font-bold text-[1.35rem] text-crimson mb-3">
                Maryland
              </h3>
              <p className="font-serif text-[0.95rem] text-fog leading-relaxed mb-5">
                Maryland&apos;s location between the Northern and Southern
                colonies made it a crucial logistical hub, and its state
                constitution of 1776 became a model for republican government
                studied throughout the founding generation.
              </p>
              <Button href="/teach/maryland" size="small" variant="outline">
                View Maryland Resources
              </Button>
            </div>

            {/* Delaware */}
            <div className="bg-navy text-white p-6 border-l-4 border-crimson">
              <h3 className="font-heading font-bold text-[1.35rem] text-crimson mb-3">
                Delaware
              </h3>
              <p className="font-serif text-[0.95rem] text-fog leading-relaxed mb-5">
                Delaware&apos;s decision to break with Pennsylvania and form
                its own delegation gave the Continental Congress its key swing
                vote for independence, and its &quot;Blue Hen&quot; regiment
                became one of the Continental Army&apos;s most celebrated units.
              </p>
              <Button href="/teach/delaware" size="small" variant="outline">
                View Delaware Resources
              </Button>
            </div>

            {/* Maine */}
            <div className="bg-navy text-white p-6 border-l-4 border-crimson">
              <h3 className="font-heading font-bold text-[1.35rem] text-crimson mb-3">
                Maine
              </h3>
              <p className="font-serif text-[0.95rem] text-fog leading-relaxed mb-5">
                Maine, then part of Massachusetts, suffered some of the
                war&apos;s earliest British raids — Falmouth (now Portland) was
                bombarded and burned in 1775 — and its Penobscot Expedition of
                1779 was one of the largest American naval disasters.
              </p>
              <Button href="/teach/maine" size="small" variant="outline">
                View Maine Resources
              </Button>
            </div>

            {/* Frontier */}
            <div className="bg-navy text-white p-6 border-l-4 border-crimson">
              <h3 className="font-heading font-bold text-[1.35rem] text-crimson mb-3">
                Frontier
              </h3>
              <p className="font-serif text-[0.95rem] text-fog leading-relaxed mb-5">
                The Revolution extended far beyond the eastern seaboard. George
                Rogers Clark&apos;s capture of Kaskaskia, the founding of
                Marietta, and Wheeling&apos;s frontier forts show how the war
                reshaped the continent.
              </p>
              <Button href="/teach/frontier" size="small" variant="outline">
                View Frontier Resources
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-cream">
        <Container>
          <SectionHeader
            overline="Methodology"
            title="Our Approach"
          />

          {/* Stats strip */}
          <div className="flex flex-wrap gap-10 mb-10 -mt-4 border-b border-[#DDD8CE] pb-10">
            <div>
              <span className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-crimson block mb-1">
                Sources
              </span>
              <span className="font-heading font-black text-[2rem] text-navy leading-none">
                Tier 1
              </span>
              <span className="font-serif text-[0.85rem] text-slate block mt-1">
                Tier 1 sources
              </span>
            </div>
            <div>
              <span className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-crimson block mb-1">
                Coverage
              </span>
              <span className="font-heading font-black text-[2rem] text-navy leading-none">
                77
              </span>
              <span className="font-serif text-[0.85rem] text-slate block mt-1">
                77 towns
              </span>
            </div>
            <div>
              <span className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-crimson block mb-1">
                States
              </span>
              <span className="font-heading font-black text-[2rem] text-navy leading-none">
                16
              </span>
              <span className="font-serif text-[0.85rem] text-slate block mt-1">
                16 states
              </span>
            </div>
          </div>

          <p className="font-serif text-[1.05rem] text-charcoal max-w-[720px] leading-relaxed mb-6">
            Every source in our teacher materials is evaluated using a
            three-tier credibility system. Tier 1 sources include primary
            documents, National Park Service materials, and peer-reviewed
            scholarship. Teacher narratives are written to help educators
            contextualize sources for their students — not to replace the
            sources themselves.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/methodology">Read our full methodology</Link>
            <Link href="/methodology#source-tiers">Source credibility tiers</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
