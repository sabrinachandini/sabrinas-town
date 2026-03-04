import { Container, Heading, Text, Link, Button, Divider } from "@/components/ui";
import { Reveal } from "@/lib/scroll";

const FEATURED_TOWNS = [
  {
    slug: "boston-ma",
    name: "Boston",
    state: "MA",
    score: 94,
    description: "From the Massacre to the Tea Party — where colonial grievance became organized resistance.",
  },
  {
    slug: "lexington-ma",
    name: "Lexington",
    state: "MA",
    score: 91,
    description: "Where the first shots of the Revolution were fired, before dawn, on April 19, 1775.",
  },
  {
    slug: "concord-ma",
    name: "Concord",
    state: "MA",
    score: 89,
    description: "The North Bridge fight that turned a skirmish into a war.",
  },
  {
    slug: "philadelphia-pa",
    name: "Philadelphia",
    state: "PA",
    score: 93,
    description: "Where the Continental Congress met, the Declaration was signed, and the war was argued into being.",
  },
  {
    slug: "yorktown-va",
    name: "Yorktown",
    state: "VA",
    score: 88,
    description: "The siege that ended the war — Cornwallis surrendered here on October 19, 1781.",
  },
  {
    slug: "saratoga-springs-ny",
    name: "Saratoga",
    state: "NY",
    score: 87,
    description: "The turning point. The American victory that brought France into the war.",
  },
];

const BROWSE_STATES = [
  { label: "Massachusetts", href: "/towns#Massachusetts" },
  { label: "Virginia", href: "/towns#Virginia" },
  { label: "New York", href: "/towns#New York" },
  { label: "Pennsylvania", href: "/towns#Pennsylvania" },
  { label: "South Carolina", href: "/towns#South Carolina" },
  { label: "North Carolina", href: "/towns#North Carolina" },
  { label: "Georgia", href: "/towns#Georgia" },
  { label: "Connecticut", href: "/towns#Connecticut" },
  { label: "Rhode Island", href: "/towns#Rhode Island" },
  { label: "New Hampshire", href: "/towns#New Hampshire" },
  { label: "Vermont", href: "/towns#Vermont" },
  { label: "Delaware", href: "/towns#Delaware" },
  { label: "Maryland", href: "/towns#Maryland" },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-section border-b border-border-light">
        <Container>
          <div className="max-w-[760px]">
            <Heading level={1} className="text-display">
              75 Revolutionary towns. One network.
            </Heading>
            <Text className="mt-element max-w-[560px] text-text-muted">
              Plan a trip. Teach a lesson. Connect the dots.
            </Text>
            {/* Thin blue rule */}
            <div className="mt-element h-px w-16 bg-accent-blue" />
            <div className="mt-element flex flex-wrap gap-4">
              <Button href="/towns">Browse towns &rarr;</Button>
              <Button href="/teach" variant="secondary">For teachers &rarr;</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Towns */}
      <Reveal as="section" wrapperClassName="py-section">
        <Container>
          <div className="flex items-baseline justify-between mb-component">
            {/* Red accent marker heading */}
            <div className="border-l-4 border-accent-red pl-4">
              <Heading level={2}>Start here</Heading>
            </div>
            <Link href="/towns">
              <Text as="span" size="small" muted>All towns &rarr;</Text>
            </Link>
          </div>

          <div className="flex flex-wrap gap-y-0">
            {FEATURED_TOWNS.map((town, index) => (
              <Reveal key={town.slug} delay={index * 60} wrapperClassName="w-full md:w-1/2">
                <Link
                  href={`/towns/${town.slug}`}
                  className="flex gap-4 py-element border-b border-border-light no-underline group pr-component"
                >
                  <div>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <Text className="font-semibold font-heading group-hover:text-accent-blue transition-colors">
                        {town.name}, {town.state}
                      </Text>
                      <Text as="span" size="small" muted>
                        &mdash; {town.description}
                      </Text>
                      <Text as="span" size="small" muted className="font-mono">
                        (Score: {town.score})
                      </Text>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Reveal>

      <Divider spacing="section" />

      {/* Browse by state */}
      <Reveal as="section" wrapperClassName="py-component">
        <Container>
          <Heading level={3} className="mb-element font-heading">
            Browse by state
          </Heading>
          <div className="flex flex-wrap gap-3">
            {BROWSE_STATES.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 border border-border-light rounded-full text-small hover:border-accent-blue hover:text-accent-blue transition-colors no-underline"
              >
                {label}
              </Link>
            ))}
          </div>
        </Container>
      </Reveal>

      <Divider spacing="section" />

      {/* No myths. */}
      <Reveal as="section" wrapperClassName="py-section">
        <Container>
          <div className="max-w-[680px]">
            <Heading level={2}>No myths. No ratings.<br />Just the record.</Heading>
            <div className="mt-component space-y-element">
              <Text>
                Every claim cites its source, graded by credibility tier. Tier 1 is primary documents and peer-reviewed scholarship. Tier 3 is oral tradition, clearly labeled.
              </Text>
              <Text>
                Profiles update transparently — every change is logged and dated. You can see exactly what changed and why.
              </Text>
            </div>
            <div className="mt-component">
              <Link href="/methodology">Read our methodology &rarr;</Link>
            </div>
          </div>
        </Container>
      </Reveal>

      <Divider spacing="section" />

      {/* For teachers */}
      <Reveal as="section" wrapperClassName="py-section bg-bg-secondary">
        <Container>
          <div className="grid md:grid-cols-2 gap-component items-center">
            <div>
              <Text size="small" muted className="mb-element uppercase tracking-widest font-body">
                For educators
              </Text>
              <Heading level={2}>Teaching the Revolution?</Heading>
              <Text className="mt-element">
                Every town includes teacher modules — lesson plans, curated
                primary source packets with analysis prompts, graphic organizers,
                quizzes with answer keys, and comparative assignments. Built for
                critical thinking, not memorization.
              </Text>
              <div className="mt-component">
                <Button href="/teach">Explore teacher resources</Button>
              </div>
            </div>
            <div className="space-y-element">
              {[
                { label: "16 states covered", sub: "From Massachusetts to the frontier" },
                { label: "Curated & generated", sub: "Clearly labeled, always sourced" },
                { label: "Print-ready packets", sub: "PDF-formatted for classroom use" },
              ].map(({ label, sub }) => (
                <div key={label} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                  <div>
                    <Text className="font-medium">{label}</Text>
                    <Text size="small" muted>{sub}</Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Reveal>

      <Divider spacing="section" />

      {/* For towns */}
      <Reveal as="section" wrapperClassName="py-component">
        <Container>
          <Text muted>
            Work for your town&apos;s tourism office or historical society?{" "}
            <Link href="/partner">Learn how to partner with us &rarr;</Link>
          </Text>
        </Container>
      </Reveal>
    </main>
  );
}
