import {
  Container,
  Heading,
  Text,
  Link,
  Button,
  Divider,
} from "@/components/ui";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-section">
        <Container>
          <Heading level={1}>History is for everyone.</Heading>
          <Text className="mt-element max-w-[620px]">
            Sabrina's Town is a living network of America's Revolutionary towns
            — built for travelers who want more than plaques, teachers who need
            more than textbooks, and towns ready to tell their own stories. We
            connect 75 communities across 13 states, each scored for historical
            significance, preservation quality, and visitor experience.
          </Text>

          <div className="flex flex-wrap gap-4 mt-component">
            <Button href="/towns">Explore Towns</Button>
            <Button href="/teach" variant="secondary">
              Teach a Town
            </Button>
            <Button href="/partner" variant="secondary">
              Partner With Us
            </Button>
          </div>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* What This Is */}
      <section className="py-component">
        <Container>
          <Heading level={2}>What this is</Heading>
          <Text className="mt-element">
            Most Revolutionary War resources treat each town as an isolated
            stop. But the Revolution was a networked event — people moved
            between places, ideas spread through correspondence, and local
            actions triggered consequences elsewhere. Sabrina's Town maps these
            connections.
          </Text>
          <Text className="mt-element">
            Every town in our network links to the people who shaped it, the
            events that happened there, the themes those events represent, and
            the routes that connected communities. When you explore Lexington,
            you'll understand how it connects to Concord, Boston, Philadelphia,
            and dozens of other places where the same questions about liberty
            and self-governance played out.
          </Text>

          {/* Knowledge Graph Diagram */}
          <div className="mt-component p-component bg-bg-secondary rounded-lg">
            <Text
              size="small"
              muted
              className="uppercase tracking-wide text-center mb-element"
            >
              The Knowledge Graph
            </Text>
            <div className="flex flex-wrap items-center justify-center gap-3 text-body font-medium">
              <span className="px-4 py-2 bg-bg-primary rounded border border-border-light">
                Town
              </span>
              <span className="text-accent-blue">↔</span>
              <span className="px-4 py-2 bg-bg-primary rounded border border-border-light">
                Event
              </span>
              <span className="text-accent-blue">↔</span>
              <span className="px-4 py-2 bg-bg-primary rounded border border-border-light">
                Person
              </span>
              <span className="text-accent-blue">↔</span>
              <span className="px-4 py-2 bg-bg-primary rounded border border-border-light">
                Theme
              </span>
              <span className="text-accent-blue">↔</span>
              <span className="px-4 py-2 bg-bg-primary rounded border border-border-light">
                Route
              </span>
            </div>
            <Text size="small" muted className="text-center mt-element">
              Every entity connects to every other. Follow Paul Revere from
              Boston to Lexington. Trace the theme of "citizen soldiers" across
              a dozen towns. See which events share the same cast of characters.
            </Text>
          </div>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* The 75-Town Network */}
      <section className="py-component">
        <Container>
          <Heading level={2}>The 75-Town Network</Heading>
          <Text className="mt-element">
            From the urban centers where revolutionary ideas fermented to the
            rural crossroads where militia assembled, our network spans the
            geography of American independence. Each town is scored across seven
            dimensions: historical significance, preservation quality,
            accessibility, interpretive resources, interconnection with other
            sites, documented stories, and source quality.
          </Text>

          {/* Map Placeholder */}
          <div className="mt-component aspect-[16/9] bg-bg-secondary rounded-lg border border-border-light flex items-center justify-center">
            <div className="text-center">
              <Text muted>Interactive map coming soon</Text>
              <Text size="small" muted className="mt-2">
                75 towns · 13 states · 1 interconnected story
              </Text>
            </div>
          </div>

          <div className="mt-element flex flex-wrap gap-4">
            <Button href="/rankings" size="small">
              View Full Rankings
            </Button>
            <Button href="/towns/lexington-ma" variant="secondary" size="small">
              Start with Lexington
            </Button>
          </div>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* For Travelers / Teachers / Towns */}
      <section className="py-component">
        <Container size="wide">
          <Heading level={2} className="text-center">
            Built for three audiences
          </Heading>

          <div className="mt-component grid md:grid-cols-3 gap-component">
            {/* Travelers */}
            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>For Travelers</Heading>
              <Text className="mt-element">
                Skip the tourist traps. Our scoring system identifies which
                towns offer genuine historical depth versus gift-shop history.
                Compare destinations before you go. Build itineraries that
                follow actual Revolutionary routes. Understand what you're
                looking at when you get there.
              </Text>
              <div className="mt-element">
                <Link href="/towns">Browse all towns →</Link>
              </div>
            </div>

            {/* Teachers */}
            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>For Teachers</Heading>
              <Text className="mt-element">
                Every town page includes a complete teacher module: lesson
                plans, primary source packets, discussion questions, comparative
                assignments, and quizzes. Materials align with state standards
                and emphasize critical thinking over memorization. Download
                everything as PDF.
              </Text>
              <div className="mt-element">
                <Link href="/teach">Access teacher resources →</Link>
              </div>
            </div>

            {/* Towns */}
            <div className="p-element bg-bg-secondary rounded-lg">
              <Heading level={3}>For Towns</Heading>
              <Text className="mt-element">
                Tourism boards and historical societies can partner with us to
                feature their town's story. Licensed partners get embeddable
                widgets, analytics dashboards, and the ability to suggest
                updates. Your history, professionally presented, reaching the
                audiences who care about it.
              </Text>
              <div className="mt-element">
                <Link href="/partner">Become a partner →</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* Recently Updated */}
      <section className="py-component">
        <Container>
          <Heading level={2}>Recently updated</Heading>
          <Text className="mt-element" muted>
            Our content evolves as new research emerges and communities share
            their stories. Every change is logged transparently.
          </Text>

          <div className="mt-component space-y-element">
            {/* Changelog entries - placeholder data */}
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 mt-2 rounded-full bg-accent-red flex-shrink-0" />
              <div>
                <Text size="small" muted>
                  February 24, 2026
                </Text>
                <Text>
                  <Link href="/towns/lexington-ma">Lexington, MA</Link> —
                  Initial town profile published with 6 events, 7 historical
                  figures, and 5 narrative stories including lesser-known voices
                  like Prince Estabrook.
                </Text>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 mt-2 rounded-full bg-accent-blue flex-shrink-0" />
              <div>
                <Text size="small" muted>
                  February 24, 2026
                </Text>
                <Text>
                  Network launch — 7 towns seeded with interconnected knowledge
                  graph. Paul Revere's Midnight Ride route now traceable from
                  Boston through Lexington to Concord.
                </Text>
              </div>
            </div>
          </div>

          <div className="mt-component">
            <Button href="/changelog" variant="secondary" size="small">
              View full changelog
            </Button>
          </div>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* Footer */}
      <footer className="py-component">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-element">
            <div>
              <Text className="font-heading text-h3 font-semibold">
                Sabrina's Town
              </Text>
              <Text size="small" muted>
                American Revolution Tourism Network
              </Text>
            </div>
            <div className="flex flex-wrap gap-6">
              <Link href="/about">About</Link>
              <Link href="/methodology">Methodology</Link>
              <Link href="/sources">Sources</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <Divider spacing="default" />
          <Text size="small" muted className="text-center">
            History is for everyone. Built with care in 2026.
          </Text>
        </Container>
      </footer>
    </main>
  );
}
