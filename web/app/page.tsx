import {
  Container,
  Heading,
  Text,
  Link,
  Button,
} from "@/components/ui";
import { Reveal } from "@/lib/scroll";

const FEATURED_TOWNS = [
  {
    slug: "boston-ma",
    name: "Boston",
    description:
      "From the Massacre to the Tea Party to the siege — the city where colonial grievance became organized resistance.",
  },
  {
    slug: "lexington-ma",
    name: "Lexington",
    description:
      "Where the first shots of the Revolution were fired on April 19, 1775.",
  },
  {
    slug: "concord-ma",
    name: "Concord",
    description:
      "The North Bridge fight that turned a skirmish into a war — and a literary capital that shaped how America remembers it.",
  },
  {
    slug: "saratoga-springs-ny",
    name: "Saratoga Springs",
    description:
      "The turning point that convinced France to join the war and changed everything.",
  },
  {
    slug: "philadelphia-pa",
    name: "Philadelphia",
    description:
      "Where independence was declared, the Constitution drafted, and a new government invented.",
  },
  {
    slug: "yorktown-va",
    name: "Yorktown",
    description:
      "The final siege that ended the war and secured American independence.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-section">
        <Container>
          <Heading level={1}>
            Explore the American Revolution, town by town.
          </Heading>
          <Text className="mt-element max-w-[620px]">
            Walk the battlefields, trace the routes, read the primary sources.
            Every town's story starts here.
          </Text>

          <div className="mt-component">
            <Button href="/towns">Explore Towns</Button>
          </div>

          <div className="mt-element flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/towns">
              <Text as="span" size="small" muted>
                Plan a trip
              </Text>
            </Link>
            <Link href="/towns">
              <Text as="span" size="small" muted>
                Find a town
              </Text>
            </Link>
            <Link href="/teach">
              <Text as="span" size="small" muted>
                For teachers
              </Text>
            </Link>
          </div>
        </Container>
        <div className="mt-section border-b border-accent-blue" />
      </section>

      {/* Section break */}
      <div className="relative my-section">
        <div className="border-t border-border-light" />
        <div className="absolute left-6 md:left-12 top-0 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-red" />
      </div>

      {/* Featured Towns */}
      <Reveal as="section" wrapperClassName="py-section">
        <Container>
          <Heading level={2}>Start here.</Heading>

          <div className="mt-component grid md:grid-cols-2 gap-x-component gap-y-element">
            {FEATURED_TOWNS.map((town, index) => (
              <Reveal key={town.slug} delay={index * 80}>
                <Link
                  href={`/towns/${town.slug}`}
                  className="block"
                >
                  <Text as="span" className="font-heading font-semibold">
                    {town.name}
                  </Text>
                  <Text size="small" muted className="mt-1">
                    {town.description}
                  </Text>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Reveal>

      {/* Section break */}
      <div className="relative my-section">
        <div className="border-t border-border-light" />
        <div className="absolute left-6 md:left-12 top-0 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-blue" />
      </div>

      {/* Plan Your Visit */}
      <Reveal as="section" wrapperClassName="py-section">
        <Container>
          <Heading level={2}>Plan your visit.</Heading>

          <div className="mt-component grid md:grid-cols-3 gap-component">
            <div>
              <Heading level={3}>Walkable routes</Heading>
              <Text size="small" muted className="mt-element">
                Follow curated itineraries through historic neighborhoods and
                battlefields.
              </Text>
              <div className="mt-element">
                <Link href="/towns/boston-ma/itineraries">
                  See Boston itineraries →
                </Link>
              </div>
            </div>

            <div>
              <Heading level={3}>Historic sites</Heading>
              <Text size="small" muted className="mt-element">
                Find the places worth visiting — taverns, meetinghouses, battle
                greens, and monuments.
              </Text>
              <div className="mt-element">
                <Link href="/towns/lexington-ma/visit">
                  Visit Lexington →
                </Link>
              </div>
            </div>

            <div>
              <Heading level={3}>Timeline</Heading>
              <Text size="small" muted className="mt-element">
                See what happened and when, from the first protests to the final
                surrender.
              </Text>
              <div className="mt-element">
                <Link href="/towns/concord-ma/events">
                  Concord events →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Reveal>

      {/* Section break */}
      <div className="relative my-section">
        <div className="border-t border-border-light" />
        <div className="absolute left-6 md:left-12 top-0 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-red" />
      </div>

      {/* What Makes This Different */}
      <Reveal as="section" wrapperClassName="py-section">
        <Container>
          <Heading level={2}>No myths. No ratings. Just the record.</Heading>

          <div className="mt-component max-w-[620px] space-y-element">
            <Text>
              — Every claim cites its source, graded by credibility tier.
            </Text>
            <Text>
              — Profiles update transparently — every change is logged.
            </Text>
            <Text>
              — Built for teachers, travelers, and towns themselves.
            </Text>
          </div>

          <div className="mt-element">
            <Link href="/methodology">Read our methodology →</Link>
          </div>
        </Container>
      </Reveal>

      {/* Section break */}
      <div className="relative my-section">
        <div className="border-t border-border-light" />
        <div className="absolute left-6 md:left-12 top-0 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-blue" />
      </div>

      {/* Teachers */}
      <Reveal as="section" wrapperClassName="py-section">
        <Container>
          <Heading level={2}>Teaching this?</Heading>
          <Text className="mt-element max-w-[620px]">
            Every town includes teacher modules — lesson plans, curated primary
            source packets, comparative assignments, and ready-to-use quizzes.
            Built for critical thinking, not memorization.
          </Text>
          <div className="mt-element">
            <Link href="/teach">Explore teacher resources →</Link>
          </div>
        </Container>
      </Reveal>

      {/* Section break */}
      <div className="relative my-section">
        <div className="border-t border-border-light" />
        <div className="absolute left-6 md:left-12 top-0 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-red" />
      </div>

      {/* For Towns */}
      <Reveal as="section" wrapperClassName="py-component">
        <Container>
          <Text muted>
            Work for your town's tourism office or historical society?{" "}
            <Link href="/partner">Learn how to partner with us</Link>.
          </Text>
        </Container>
      </Reveal>
    </main>
  );
}
