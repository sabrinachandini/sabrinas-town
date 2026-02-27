import { Container, Heading, Text, Link, Divider } from "@/components/ui";

export const metadata = {
  title: "About | History is for Everyone",
  description:
    "Our mission, how towns participate, and how teachers use this platform.",
};

export default function AboutPage() {
  return (
    <main className="py-section">
      <Container>
        <Heading level={1}>About History is for Everyone</Heading>

        <section className="mt-component max-w-[720px]">
          <Heading level={2}>Our mission</Heading>
          <Text className="mt-element">
            History is for Everyone is a public-good research project dedicated
            to making America's Revolutionary War heritage accessible,
            trustworthy, and useful — especially for educators. We believe the
            stories of the founding era belong to every community that played a
            part, not just the well-funded museums or the towns that already
            appear on every tourist map.
          </Text>
          <Text className="mt-element">
            We map the connections between Revolutionary communities — the people
            who moved between them, the ideas that traveled by letter and
            pamphlet, the supply lines and escape routes that linked local
            rebellions into a continental cause.
          </Text>
        </section>

        <Divider spacing="section" />

        <section className="max-w-[720px]">
          <Heading level={2}>How towns participate</Heading>
          <Text className="mt-element">
            Every town in our network has a free public profile — researched,
            sourced, and connected to the broader story. Communities can deepen
            their presence through our{" "}
            <Link href="/partner">partnership program</Link>, which adds
            analytics, custom branding, and editorial collaboration. But the
            core content — events, people, stories, sources — remains open and
            free for everyone.
          </Text>
        </section>

        <Divider spacing="section" />

        <section className="max-w-[720px]">
          <Heading level={2}>How teachers use it</Heading>
          <Text className="mt-element">
            Our work is teacher-first by design. Every town profile includes
            lesson plans aligned to state standards, curated primary source
            packets with guided analysis prompts, and ready-to-use quizzes.
            Students learn to read primary documents, weigh conflicting accounts,
            and understand how the same event looked different from different
            towns. Visit the <Link href="/teach">Teach</Link> section to get
            started.
          </Text>
        </section>

        <Divider spacing="section" />

        <section className="max-w-[720px]">
          <Heading level={2}>Transparency and trust</Heading>
          <Text className="mt-element">
            Every claim on this site traces back to a cited source, and every
            source is graded on a three-tier credibility scale. When we are
            uncertain, we say so. When we change a narrative, the change is
            logged publicly. Read our full{" "}
            <Link href="/methodology">methodology</Link> or browse the{" "}
            <Link href="/changelog">changelog</Link>.
          </Text>
        </section>

        <Divider spacing="section" />

        <div className="max-w-[720px]">
          <Text size="small" muted>
            Questions or corrections?{" "}
            <Link href="/partner">Reach out through the partner page</Link>.
          </Text>
        </div>
      </Container>
    </main>
  );
}
