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
      <section className="bg-ink border-b-4 border-crimson py-24 px-8 md:px-16 relative overflow-hidden">
        {/* Star scatter */}
        <svg className="absolute top-8 right-12 opacity-20 pointer-events-none" width="180" height="140" aria-hidden="true">
          {[
            [22,18],[54,8],[90,30],[130,12],[160,40],[14,70],[70,55],[110,68],[148,80],
            [38,100],[85,90],[135,105],[170,65],[50,125],[100,118],[145,130],
          ].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r={i%5===0?2.2:1.2} fill="white" />
          ))}
        </svg>
        {/* Cross mark */}
        <svg className="absolute bottom-10 left-[60%] opacity-10 pointer-events-none" width="24" height="24" aria-hidden="true">
          <line x1="12" y1="0" x2="12" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="0" y1="12" x2="24" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>

        <div className="mx-auto max-w-[1200px] relative">
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
            About This Project
          </p>
          <h1
            className="font-display text-cream leading-[0.88]"
            style={{ fontSize: "clamp(80px,12vw,140px)" }}
          >
            History is for Everyone
          </h1>
          {/* Squiggle */}
          <svg width="260" height="12" viewBox="0 0 260 12" fill="none" className="mt-3 mb-6" aria-hidden="true">
            <path d="M0 7 Q16 1 32 7 Q48 13 65 6 Q81 0 97 6 Q113 12 130 6 Q146 1 162 6 Q178 12 195 6 Q211 1 228 6 Q244 12 260 5"
              stroke="#cc3322" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
          </svg>
          <p className="font-editorial italic text-cream/60 text-[18px] max-w-[500px] leading-relaxed">
            A public-good research network covering America&apos;s Revolutionary towns — built for travelers, teachers, and the towns themselves.
          </p>
        </div>
      </section>

      {/* Who I Am */}
      <section className="py-20 bg-cream px-8 md:px-16 relative overflow-hidden">
        {/* Ghost text */}
        <span className="absolute right-0 top-4 font-display text-[clamp(80px,14vw,160px)] text-ink/[0.04] leading-none select-none pointer-events-none uppercase">
          1775
        </span>
        <div className="mx-auto max-w-[1200px] relative">
          <div className="max-w-[720px]">
            <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
              Who I Am
            </p>
            <h2 className="font-display text-[2.5rem] text-ink mb-2">Sabrina Bhattacharjya</h2>
            {/* Squiggle */}
            <svg width="180" height="10" viewBox="0 0 180 10" fill="none" className="mb-6" aria-hidden="true">
              <path d="M0 5 Q22 0 45 5 Q67 10 90 5 Q112 0 135 5 Q157 10 180 4"
                stroke="#cc3322" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
            </svg>
            <div className="border-b border-ink/10 mb-8" />

            {/* Stamp */}
            <div className="float-right ml-6 mb-4 mt-1 rotate-3 border-2 border-crimson/60 px-3 py-2 font-ui text-[9px] font-bold uppercase tracking-[0.2em] text-crimson/70 select-none">
              Lexington, MA<br />Est. 1775
            </div>

            <p className="font-editorial text-[1.05rem] text-[#0e1428] leading-relaxed mb-5">
              I&apos;m Sabrina Bhattacharjya, a 15-year-old from Lexington, Massachusetts — the town where
              the American Revolution began on April 19, 1775. I&apos;m the founder of{" "}
              <strong>History Is For Everyone</strong>, a platform connecting 75+ Revolutionary War towns
              for teachers, tourists, and the communities that shaped the Revolution. I also run{" "}
              <strong>lexington250.com</strong>, a hub for Revolutionary War history with original writing,
              tourism guides, and merchandise sold at Buckman Tavern. I&apos;m also the author of{" "}
              <em>The Midnight Writer</em>, a children&apos;s picture book about Elizabeth Clarke —
              a 12-year-old eyewitness to the Battle of Lexington — and my work has been covered by the{" "}
              <em>New York Times</em>, the BBC, and iHeart Radio.
            </p>
            <p className="font-editorial text-[0.9rem] text-[#0e1428]/50 leading-relaxed border-t border-[#0e1428]/10 pt-5 mt-6 clear-both">
              To learn more about Sabrina Bhattacharjya, visit her website at{" "}
              <a
                href="https://sabrinachandini.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c8222a] underline decoration-[#c8222a]/30 underline-offset-2 hover:decoration-[#c8222a] transition-all"
              >
                sabrinachandini.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Why this exists */}
      <section className="py-20 bg-cream px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[720px]">
            <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
              Origin
            </p>
            <h2 className="font-display text-[2.5rem] text-ink mb-2">Why this exists</h2>
            {/* Squiggle */}
            <svg width="160" height="10" viewBox="0 0 160 10" fill="none" className="mb-6" aria-hidden="true">
              <path d="M0 5 Q20 0 40 5 Q60 10 80 5 Q100 0 120 5 Q140 10 160 4"
                stroke="#1a3a72" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
            </svg>
            <div className="border-b border-ink/10 mb-8" />
            <p className="font-editorial text-[1.05rem] text-ink leading-relaxed mb-6">
              Most of the towns that shaped the American Revolution have never
              been documented well enough for a visitor to plan a meaningful trip,
              or for a teacher to build a real lesson. The famous sites get the
              attention, the funding, and the shelf space. The rest — Guilford
              Courthouse, Kaskaskia, Beaufort — sit quietly with real history and
              almost no usable record of it.
            </p>
            <p className="font-editorial text-[1.05rem] text-ink leading-relaxed mb-6">
              We started by mapping the towns that played a documented role in
              the Revolution across 13 colonies. For each one, we researched the
              events, the people, the places, the primary sources, and the
              connections to other towns. We scored them across seven dimensions
              so that a teacher in Ohio or a tourist planning a road trip could
              actually compare them.
            </p>
            <p className="font-editorial text-[1.05rem] text-ink leading-relaxed">
              The goal is not a finished encyclopedia. It is a living research
              network that gets better as more people engage with it — and that
              makes the history usable for everyone, not just the towns that
              already appear on every map.
            </p>
          </div>
        </div>
      </section>

      {/* How to use this */}
      <section className="py-20 bg-[#f8f0d8] px-8 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[720px]">
            <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
              Guide
            </p>
            <h2 className="font-display text-[2.5rem] text-ink mb-2">How to use this</h2>
            {/* Squiggle */}
            <svg width="140" height="10" viewBox="0 0 140 10" fill="none" className="mb-6" aria-hidden="true">
              <path d="M0 5 Q17 0 35 5 Q52 10 70 5 Q87 0 105 5 Q122 10 140 4"
                stroke="#cc3322" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
            </svg>
            <div className="border-b border-ink/10 mb-8" />

            <div className="space-y-8">
              {/* Travelers */}
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0 mt-2" />
                <div>
                  <h3 className="font-editorial text-[20px] text-ink mb-2">For travelers</h3>
                  <p className="font-ui text-[14px] text-ink/60 leading-relaxed">
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
                <div className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0 mt-2" />
                <div>
                  <h3 className="font-editorial text-[20px] text-ink mb-2">For teachers</h3>
                  <p className="font-ui text-[14px] text-ink/60 leading-relaxed">
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
                <div className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0 mt-2" />
                <div>
                  <h3 className="font-editorial text-[20px] text-ink mb-2">For towns and organizations</h3>
                  <p className="font-ui text-[14px] text-ink/60 leading-relaxed">
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
      <section className="py-20 bg-[#1a3a72] px-8 md:px-16 relative overflow-hidden">
        {/* Star scatter */}
        <svg className="absolute top-6 right-10 opacity-15 pointer-events-none" width="160" height="120" aria-hidden="true">
          {[
            [18,12],[50,6],[88,22],[125,8],[150,35],[10,60],[65,48],[105,62],[145,75],
            [35,92],[80,85],[130,98],[160,55],
          ].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r={i%4===0?2:1.2} fill="white" />
          ))}
        </svg>
        {/* Cross marks */}
        <svg className="absolute bottom-12 right-[20%] opacity-10 pointer-events-none" width="20" height="20" aria-hidden="true">
          <line x1="10" y1="0" x2="10" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="0" y1="10" x2="20" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <svg className="absolute top-[40%] left-[5%] opacity-10 pointer-events-none" width="16" height="16" aria-hidden="true">
          <line x1="8" y1="0" x2="8" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="0" y1="8" x2="16" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>

        <div className="mx-auto max-w-[1200px] relative">
          <div className="max-w-[720px]">
            <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
              Values
            </p>
            <h2 className="font-display text-[2.5rem] text-cream mb-2">What we believe</h2>
            {/* Squiggle */}
            <svg width="160" height="10" viewBox="0 0 160 10" fill="none" className="mb-6" aria-hidden="true">
              <path d="M0 5 Q20 0 40 5 Q60 10 80 5 Q100 0 120 5 Q140 10 160 4"
                stroke="#cc3322" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
            </svg>
            <div className="border-b border-cream/10 mb-8" />

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
                    className="font-display text-[3rem] text-crimson leading-none shrink-0 select-none"
                    aria-hidden="true"
                  >
                    {num}
                  </span>
                  <div className="pt-1">
                    <p className="font-editorial text-[20px] text-cream mb-2">{head}</p>
                    <p className="font-ui text-[14px] text-cream/60 leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-cream border-y-4 border-crimson py-20 px-8 md:px-16 relative overflow-hidden">
        {/* Decorative dashes */}
        <svg className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none" width="60" height="4" aria-hidden="true">
          <line x1="0" y1="2" x2="60" y2="2" stroke="#0e1428" strokeWidth="2" strokeDasharray="6 4"/>
        </svg>
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8 relative">
          <div>
            <p className="font-display text-ink leading-none" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
              Start <span className="text-crimson">Exploring.</span>
            </p>
            {/* Squiggle under CTA text */}
            <svg width="200" height="10" viewBox="0 0 200 10" fill="none" className="mt-2" aria-hidden="true">
              <path d="M0 5 Q25 0 50 5 Q75 10 100 5 Q125 0 150 5 Q175 10 200 4"
                stroke="#cc3322" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
            </svg>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="/towns"
              className="inline-block px-6 py-3 bg-ink text-cream font-ui font-semibold text-[11px] tracking-[0.2em] uppercase shadow-[4px_4px_0_#c8222a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#c8222a] transition-all duration-100 no-underline"
            >
              Browse Towns
            </a>
            <a
              href="/teach"
              className="inline-block px-6 py-3 bg-ink text-cream font-ui font-semibold text-[11px] tracking-[0.2em] uppercase shadow-[4px_4px_0_#c8222a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#c8222a] transition-all duration-100 no-underline"
            >
              Teacher Materials
            </a>
            <a
              href="/partner"
              className="inline-block px-6 py-3 bg-ink text-cream font-ui font-semibold text-[11px] tracking-[0.2em] uppercase shadow-[4px_4px_0_#c8222a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#c8222a] transition-all duration-100 no-underline"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
