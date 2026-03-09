import { Link } from "@/components/ui";

export const metadata = {
  title: "About | History is for Everyone",
  description:
    "Why we built this, who it serves, and what we believe about history, access, and trust.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0a0e1a] py-24 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-white/40 mb-4">About This Project</p>
          <h1 className="font-display text-white leading-[0.9]" style={{ fontSize: "clamp(60px,10vw,140px)" }}>
            History is for Everyone
          </h1>
          <p className="font-editorial italic text-white/60 text-[1.1rem] mt-6 max-w-[500px] leading-relaxed">
            A public-good research network covering America&apos;s Revolutionary towns — built for travelers, teachers, and the towns themselves.
          </p>
        </div>
      </section>

      {/* Why this exists */}
      <section className="py-20 bg-[#f2ece0] px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[720px]">
            <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-[#0e1428]/40 mb-3">Origin</p>
            <h2 className="font-display text-[2.5rem] text-[#0e1428] mb-6">Why this exists</h2>
            <div className="border-b border-[#0e1428]/10 mb-8" />
            <p className="font-editorial text-[1.05rem] text-[#0e1428] leading-relaxed mb-6">
              Most of the towns that shaped the American Revolution have never
              been documented well enough for a visitor to plan a meaningful trip,
              or for a teacher to build a real lesson. The famous sites get the
              attention, the funding, and the shelf space. The rest — Guilford
              Courthouse, Kaskaskia, Beaufort — sit quietly with real history and
              almost no usable record of it.
            </p>
            <p className="font-editorial text-[1.05rem] text-[#0e1428] leading-relaxed mb-6">
              We started by mapping the towns that played a documented role in
              the Revolution across 13 colonies. For each one, we researched the
              events, the people, the places, the primary sources, and the
              connections to other towns. We scored them across seven dimensions
              so that a teacher in Ohio or a tourist planning a road trip could
              actually compare them.
            </p>
            <p className="font-editorial text-[1.05rem] text-[#0e1428] leading-relaxed">
              The goal is not a finished encyclopedia. It is a living research
              network that gets better as more people engage with it — and that
              makes the history usable for everyone, not just the towns that
              already appear on every map.
            </p>
          </div>
        </div>
      </section>

      {/* How to use this */}
      <section className="py-20 bg-[#f2ece0] px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[720px]">
            <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-[#0e1428]/40 mb-3">Guide</p>
            <h2 className="font-display text-[2.5rem] text-[#0e1428] mb-6">How to use this</h2>
            <div className="border-b border-[#0e1428]/10 mb-8" />

            <div className="space-y-8">
              {/* Travelers */}
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#c8222a] rounded-full shrink-0 mt-2" />
                <div>
                  <h3 className="font-editorial text-[1.25rem] text-[#0e1428] mb-2">For travelers</h3>
                  <p className="font-ui text-[0.95rem] text-[#0e1428]/70 leading-relaxed">
                    Browse the <Link href="/towns">town network</Link> to find
                    communities with a strong preservation score, accessible
                    battlefields, and stories that connect to the bigger arc of the
                    war. Use the{" "}
                    <Link href="/rankings">rankings</Link> to compare towns across
                    seven dimensions — or the compare tool to plan a multi-stop
                    itinerary. Every town page links to real places, documented
                    events, and the people who were there.
                  </p>
                </div>
              </div>

              {/* Teachers */}
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#c8222a] rounded-full shrink-0 mt-2" />
                <div>
                  <h3 className="font-editorial text-[1.25rem] text-[#0e1428] mb-2">For teachers</h3>
                  <p className="font-ui text-[0.95rem] text-[#0e1428]/70 leading-relaxed">
                    Every town in the network has lesson plans aligned to state
                    standards, curated primary source packets with guided analysis
                    prompts, and ready-to-use quizzes. Students learn to read
                    original documents, weigh conflicting accounts, and understand
                    how the same event looked different from different towns. Visit
                    the <Link href="/teach">Teach</Link> section to browse by state
                    or town.
                  </p>
                </div>
              </div>

              {/* Towns */}
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#c8222a] rounded-full shrink-0 mt-2" />
                <div>
                  <h3 className="font-editorial text-[1.25rem] text-[#0e1428] mb-2">For towns and organizations</h3>
                  <p className="font-ui text-[0.95rem] text-[#0e1428]/70 leading-relaxed">
                    Every town in the network has a researched public profile at no
                    cost — events, people, places, stories, and sources. Communities
                    that want a deeper presence can join the{" "}
                    <Link href="/partner">partnership program</Link>, which adds
                    analytics, custom editorial collaboration, and a deeper
                    organizational voice in how their town&apos;s story is told. The
                    core history remains open regardless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="py-20 bg-[#f2ece0] px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[720px]">
            <p className="font-ui text-[0.7rem] uppercase tracking-[0.15em] text-[#0e1428]/40 mb-3">Values</p>
            <h2 className="font-display text-[2.5rem] text-[#0e1428] mb-6">What we believe</h2>
            <div className="border-b border-[#0e1428]/10 mb-8" />

            <ol className="space-y-10 list-none">
              {[
                {
                  num: "01",
                  head: "History belongs to every community that made it.",
                  body: "Not just the towns with the biggest endowments or the most familiar names. Ticonderoga and Trenton and Guilford Courthouse and Ninety Six — all of them matter, and all of them deserve to be documented well.",
                },
                {
                  num: "02",
                  head: "Uncertainty is honest.",
                  body: "We label every claim with a confidence level. Verified, oral tradition, anecdotal, unverified — readers deserve to know the difference. When we don't know something, we say so.",
                },
                {
                  num: "03",
                  head: "Teachers are the real audience.",
                  body: "A well-built lesson plan turns a date and a battle into something a student actually understands and remembers. We build every profile with teachers in mind first.",
                },
              ].map(({ num, head, body }) => (
                <li key={num} className="flex gap-6">
                  <span
                    className="font-display text-[3rem] text-[#c8222a] leading-none shrink-0 select-none"
                    aria-hidden="true"
                  >
                    {num}
                  </span>
                  <div className="pt-1">
                    <p className="font-editorial text-[1.1rem] text-[#0e1428] mb-2">{head}</p>
                    <p className="font-ui text-[0.95rem] text-[#0e1428]/60 leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0a0e1a] py-20 px-8 md:px-16">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-display text-white leading-none" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
            Start <span className="text-[#c8222a]">Exploring.</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/towns"
              className="no-underline border border-white text-white font-ui font-medium text-[0.8rem] uppercase tracking-[0.12em] px-8 py-3 hover:bg-[#c8222a] hover:border-[#c8222a] transition-colors whitespace-nowrap"
            >
              Browse Towns
            </a>
            <a
              href="/teach"
              className="no-underline border border-white text-white font-ui font-medium text-[0.8rem] uppercase tracking-[0.12em] px-8 py-3 hover:bg-[#c8222a] hover:border-[#c8222a] transition-colors whitespace-nowrap"
            >
              Teacher Materials
            </a>
            <a
              href="/partner"
              className="no-underline border border-white text-white font-ui font-medium text-[0.8rem] uppercase tracking-[0.12em] px-8 py-3 hover:bg-[#c8222a] hover:border-[#c8222a] transition-colors whitespace-nowrap"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
