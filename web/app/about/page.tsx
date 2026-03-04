import { Container, Text, Divider, Link } from "@/components/ui";

export const metadata = {
  title: "About | History is for Everyone",
  description:
    "Why we built this, who it serves, and what we believe about history, access, and trust.",
};

// ─── Section heading with a small red accent marker ──────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 mb-element">
      <span
        className="mt-2 shrink-0 w-1 h-6 bg-accent-red rounded-sm"
        aria-hidden="true"
      />
      <h2 className="text-h2 font-heading font-semibold tracking-tight text-text-primary leading-tight">
        {children}
      </h2>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="py-section">
      <Container>
        {/* ── Page header ───────────────────────────────────────────────── */}
        <div className="max-w-[760px]">
          <h1 className="text-h1 font-heading font-bold tracking-tight text-text-primary">
            History is for Everyone
          </h1>
          {/* Thin blue rule under H1 */}
          <div className="mt-4 mb-element h-px w-16 bg-accent-blue" />
          <p className="text-body font-body text-text-muted max-w-[560px] leading-relaxed">
            A public-good research network covering America&apos;s Revolutionary
            towns — built for travelers, teachers, and the towns themselves.
          </p>
        </div>

        <Divider spacing="section" />

        {/* ── Why this exists ───────────────────────────────────────────── */}
        <section className="max-w-[720px]">
          <SectionHeading>Why this exists</SectionHeading>
          <Text className="mt-0">
            Most of the towns that shaped the American Revolution have never
            been documented well enough for a visitor to plan a meaningful trip,
            or for a teacher to build a real lesson. The famous sites get the
            attention, the funding, and the shelf space. The rest — Guilford
            Courthouse, Kaskaskia, Beaufort — sit quietly with real history and
            almost no usable record of it.
          </Text>
          <Text className="mt-element">
            We started by mapping the 75 towns that played a documented role in
            the Revolution across 13 colonies. For each one, we researched the
            events, the people, the places, the primary sources, and the
            connections to other towns. We scored them across seven dimensions
            so that a teacher in Ohio or a tourist planning a road trip could
            actually compare them.
          </Text>
          <Text className="mt-element">
            The goal is not a finished encyclopedia. It is a living research
            network that gets better as more people engage with it — and that
            makes the history usable for everyone, not just the towns that
            already appear on every map.
          </Text>
        </section>

        <Divider spacing="section" />

        {/* ── How to use this ───────────────────────────────────────────── */}
        <section className="max-w-[720px]">
          <SectionHeading>How to use this</SectionHeading>

          <div className="mt-0 space-y-component">
            {/* Tourists */}
            <div className="border-l-2 border-accent-blue pl-6">
              <h3 className="text-h3 font-heading font-semibold text-text-primary mb-tight">
                For travelers
              </h3>
              <Text>
                Browse the <Link href="/towns">town network</Link> to find
                communities with a strong preservation score, accessible
                battlefields, and stories that connect to the bigger arc of the
                war. Use the{" "}
                <Link href="/rankings">rankings</Link> to compare towns across
                seven dimensions — or the compare tool to plan a multi-stop
                itinerary. Every town page links to real places, documented
                events, and the people who were there.
              </Text>
            </div>

            {/* Teachers */}
            <div className="border-l-2 border-accent-blue pl-6">
              <h3 className="text-h3 font-heading font-semibold text-text-primary mb-tight">
                For teachers
              </h3>
              <Text>
                Every town in the network has lesson plans aligned to state
                standards, curated primary source packets with guided analysis
                prompts, and ready-to-use quizzes. Students learn to read
                original documents, weigh conflicting accounts, and understand
                how the same event looked different from different towns. Visit
                the <Link href="/teach">Teach</Link> section to browse by state
                or town.
              </Text>
            </div>

            {/* Towns */}
            <div className="border-l-2 border-accent-blue pl-6">
              <h3 className="text-h3 font-heading font-semibold text-text-primary mb-tight">
                For towns and organizations
              </h3>
              <Text>
                Every town in the network has a researched public profile at no
                cost — events, people, places, stories, and sources. Communities
                that want a deeper presence can join the{" "}
                <Link href="/partner">partnership program</Link>, which adds
                analytics, custom editorial collaboration, and embeddable
                content for local tourism sites. The core history remains open
                regardless.
              </Text>
            </div>
          </div>
        </section>

        <Divider spacing="section" />

        {/* ── What we believe ───────────────────────────────────────────── */}
        <section className="max-w-[720px]">
          <SectionHeading>What we believe</SectionHeading>
          <ul className="mt-0 space-y-element list-none">
            {[
              {
                head: "History belongs to every community that made it.",
                body: "Not just the towns with the biggest endowments or the most familiar names. Ticonderoga and Trenton and Guilford Courthouse and Ninety Six — all of them matter, and all of them deserve to be documented well.",
              },
              {
                head: "Uncertainty is honest.",
                body: "We label every claim with a confidence level. Verified, oral tradition, anecdotal, unverified — readers deserve to know the difference. When we don't know something, we say so.",
              },
              {
                head: "Teachers are the real audience.",
                body: "A well-built lesson plan turns a date and a battle into something a student actually understands and remembers. We build every profile with teachers in mind first.",
              },
            ].map(({ head, body }) => (
              <li key={head} className="flex gap-4">
                <span
                  className="mt-2 shrink-0 w-2 h-2 rounded-full bg-accent-red"
                  aria-hidden="true"
                />
                <div>
                  <Text className="font-medium text-text-primary">{head}</Text>
                  <Text muted className="mt-tight">
                    {body}
                  </Text>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <Divider spacing="section" />

        {/* ── CTA block ─────────────────────────────────────────────────── */}
        <div className="max-w-[720px]">
          <p className="font-heading font-semibold text-h3 text-text-primary mb-element">
            Start exploring
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8">
            <Link href="/towns" className="font-medium">
              Browse 75 towns →
            </Link>
            <Link href="/teach" className="font-medium">
              Teacher materials →
            </Link>
            <Link href="/partner" className="font-medium">
              Partner with us →
            </Link>
          </div>
          <Text size="small" muted className="mt-component">
            Questions or corrections?{" "}
            <Link href="/methodology">Read our methodology</Link> or{" "}
            <Link href="/partner">reach out through the partner page</Link>.
          </Text>
        </div>
      </Container>
    </main>
  );
}
