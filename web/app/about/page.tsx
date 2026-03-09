import { Container, Text, Link, Button, PageHero, SectionHeader } from "@/components/ui";

export const metadata = {
  title: "About | History is for Everyone",
  description:
    "Why we built this, who it serves, and what we believe about history, access, and trust.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        bg="navy"
        overline="About This Project"
        title="History is for Everyone"
        body="A public-good research network covering America's Revolutionary towns — built for travelers, teachers, and the towns themselves."
      />

      {/* Why this exists */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="max-w-[720px]">
            <SectionHeader
              overline="Origin"
              title="Why this exists"
            />
            <p className="font-serif text-[1.05rem] text-charcoal leading-relaxed mb-6">
              Most of the towns that shaped the American Revolution have never
              been documented well enough for a visitor to plan a meaningful trip,
              or for a teacher to build a real lesson. The famous sites get the
              attention, the funding, and the shelf space. The rest — Guilford
              Courthouse, Kaskaskia, Beaufort — sit quietly with real history and
              almost no usable record of it.
            </p>
            <p className="font-serif text-[1.05rem] text-charcoal leading-relaxed mb-6">
              We started by mapping the 75 towns that played a documented role in
              the Revolution across 13 colonies. For each one, we researched the
              events, the people, the places, the primary sources, and the
              connections to other towns. We scored them across seven dimensions
              so that a teacher in Ohio or a tourist planning a road trip could
              actually compare them.
            </p>
            <p className="font-serif text-[1.05rem] text-charcoal leading-relaxed">
              The goal is not a finished encyclopedia. It is a living research
              network that gets better as more people engage with it — and that
              makes the history usable for everyone, not just the towns that
              already appear on every map.
            </p>
          </div>
        </Container>
      </section>

      {/* How to use this */}
      <section className="py-20 bg-cream">
        <Container>
          <div className="max-w-[720px]">
            <SectionHeader
              overline="Guide"
              title="How to use this"
            />

            <div className="space-y-8">
              {/* Travelers */}
              <div className="border-l-4 border-crimson pl-6">
                <h3 className="font-heading font-bold text-[1.25rem] text-navy mb-3">
                  For travelers
                </h3>
                <p className="font-serif text-[1rem] text-charcoal leading-relaxed">
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

              {/* Teachers */}
              <div className="border-l-4 border-crimson pl-6">
                <h3 className="font-heading font-bold text-[1.25rem] text-navy mb-3">
                  For teachers
                </h3>
                <p className="font-serif text-[1rem] text-charcoal leading-relaxed">
                  Every town in the network has lesson plans aligned to state
                  standards, curated primary source packets with guided analysis
                  prompts, and ready-to-use quizzes. Students learn to read
                  original documents, weigh conflicting accounts, and understand
                  how the same event looked different from different towns. Visit
                  the <Link href="/teach">Teach</Link> section to browse by state
                  or town.
                </p>
              </div>

              {/* Towns */}
              <div className="border-l-4 border-crimson pl-6">
                <h3 className="font-heading font-bold text-[1.25rem] text-navy mb-3">
                  For towns and organizations
                </h3>
                <p className="font-serif text-[1rem] text-charcoal leading-relaxed">
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
        </Container>
      </section>

      {/* What we believe */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="max-w-[720px]">
            <SectionHeader
              overline="Values"
              title="What we believe"
            />

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
                    className="font-heading font-black text-[2.5rem] text-crimson leading-none shrink-0 select-none"
                    aria-hidden="true"
                  >
                    {num}
                  </span>
                  <div className="pt-1">
                    <p className="font-heading font-bold text-[1.1rem] text-navy mb-2">
                      {head}
                    </p>
                    <p className="font-serif text-[1rem] text-charcoal leading-relaxed">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* CTA banner */}
      <section className="py-16 bg-crimson">
        <Container>
          <div className="text-center">
            <h2 className="font-heading font-black text-white text-[2rem] md:text-[2.75rem] leading-tight mb-4">
              Start exploring
            </h2>
            <p className="font-serif text-[1.05rem] text-white/80 max-w-[480px] mx-auto mb-10">
              Questions or corrections?{" "}
              <Link href="/methodology" className="text-white underline decoration-white/50 hover:decoration-white">
                Read our methodology
              </Link>{" "}
              or{" "}
              <Link href="/partner" className="text-white underline decoration-white/50 hover:decoration-white">
                reach out through the partner page
              </Link>.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Button href="/towns" variant="outline">
                Browse 77 towns
              </Button>
              <Button href="/teach" variant="outline">
                Teacher materials
              </Button>
              <Button href="/partner" variant="outline">
                Partner with us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
