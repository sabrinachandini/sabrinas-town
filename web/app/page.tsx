import {
  Container,
  Heading,
  Text,
  Link,
  Button,
  Divider,
} from "@/components/ui";

const FEATURED_TOWNS = [
  {
    slug: "lexington-ma",
    name: "Lexington",
    description: "Where the first shots of the Revolution were fired on April 19, 1775.",
  },
  {
    slug: "concord-ma",
    name: "Concord",
    description: "The North Bridge fight that turned a skirmish into a war — and a literary capital that shaped how America remembers it.",
  },
  {
    slug: "boston-ma",
    name: "Boston",
    description: "From the Massacre to the Tea Party to the siege — the city where colonial grievance became organized resistance.",
  },
  {
    slug: "salem-ma",
    name: "Salem",
    description: "A maritime hub whose privateers and merchants bankrolled the Revolution at sea.",
  },
  {
    slug: "plymouth-ma",
    name: "Plymouth",
    description: "The Pilgrim story meets the Revolution — a town whose founding mythology shaped patriot identity.",
  },
  {
    slug: "cambridge-ma",
    name: "Cambridge",
    description: "Where Washington took command of the Continental Army and Harvard became a barracks.",
  },
];

const CLUSTERS = [
  "Lexington-Concord Corridor",
  "Boston Harbor Campaign",
  "North Shore Maritime Network",
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-section">
        <Container>
          <Heading level={1}>History is for everyone.</Heading>
          <Text className="mt-element max-w-[620px]">
            Sabrina's Town maps the connections between America's Revolutionary
            communities — the people who moved between them, the ideas that
            traveled by letter and pamphlet, the supply lines and escape routes
            that linked local rebellions into a continental cause. Seventy-five
            towns, thirteen states, one interconnected story that's still
            unfolding.
          </Text>

          <div className="flex flex-wrap gap-4 mt-component">
            <Button href="/towns">Explore Towns</Button>
            <Button href="/teach" variant="secondary">
              For Teachers
            </Button>
            <Button href="/compare" variant="secondary">
              Compare
            </Button>
            <Button href="/partner" variant="secondary">
              Partner With Us
            </Button>
          </div>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* Credibility Block */}
      <section className="py-component">
        <Container>
          <Heading level={2}>Source-tiered research</Heading>
          <Text className="mt-element">
            Every claim on this site traces back to a cited source, and every
            source is graded on a three-tier credibility scale. Tier 1 means
            primary documents, National Park Service records, peer-reviewed
            scholarship — the material historians build arguments from. Tier 2
            covers reputable secondary works: established historians, museum
            publications, well-sourced journalism. Tier 3 includes general
            references like Wikipedia and travel guides, included only when
            corroborated and clearly labeled. You can always see exactly where a
            fact comes from and how much weight we give it.
          </Text>
          <div className="mt-element">
            <Link href="/methodology">Read our full methodology →</Link>
          </div>

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

      {/* Network Block */}
      <section className="py-component">
        <Container>
          <Heading level={2}>Follow the story across towns</Heading>
          <Text className="mt-element">
            The Revolution didn't happen in one place. These six Massachusetts
            towns show how a single region's history branches, converges, and
            echoes across communities only miles apart.
          </Text>

          <div className="mt-component grid md:grid-cols-2 lg:grid-cols-3 gap-component">
            {FEATURED_TOWNS.map((town) => (
              <Link
                key={town.slug}
                href={`/towns/${town.slug}`}
                className="block p-element bg-bg-secondary rounded-lg hover:border-accent-blue border border-border-light transition-colors"
              >
                <Text className="font-heading font-semibold">{town.name}</Text>
                <Text size="small" muted className="mt-1">
                  {town.description}
                </Text>
              </Link>
            ))}
          </div>

          {/* Cluster labels */}
          <div className="mt-component flex flex-wrap gap-3">
            {CLUSTERS.map((cluster) => (
              <span
                key={cluster}
                className="px-3 py-1 text-small bg-bg-secondary rounded-full border border-border-light text-text-muted"
              >
                {cluster}
              </span>
            ))}
          </div>

          <div className="mt-element flex flex-wrap gap-4">
            <Button href="/rankings" size="small">
              View Full Rankings
            </Button>
            <Button href="/towns" variant="secondary" size="small">
              Browse All Towns
            </Button>
          </div>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* Teacher Block */}
      <section className="py-component">
        <Container>
          <Heading level={2}>For teachers</Heading>
          <Text className="mt-element max-w-[620px]">
            Every town in the network includes a complete teacher module —
            lesson plans aligned to state standards, curated primary source
            packets with guided analysis prompts, comparative assignments that
            connect multiple towns, and ready-to-use quizzes. The materials
            emphasize critical thinking over memorization: students learn to
            read primary documents, weigh conflicting accounts, and understand
            how the same event looked different from different towns.
          </Text>
          <div className="mt-element">
            <Button href="/teach" variant="secondary" size="small">
              Access Teacher Resources
            </Button>
          </div>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* Partner Block (understated) */}
      <section className="py-component">
        <Container>
          <Text muted>
            Work for your town's tourism office or historical society?{" "}
            <Link href="/partner">Learn how to partner with us</Link>.
          </Text>
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
                  Network launch — 25 towns across 7 states seeded with
                  interconnected knowledge graph. Paul Revere's Midnight Ride
                  route now traceable from Boston through Lexington to Concord.
                </Text>
              </div>
            </div>
          </div>

          <div className="mt-component">
            <Button href="/towns" variant="secondary" size="small">
              Browse all towns
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
              <Link href="/towns">Towns</Link>
              <Link href="/rankings">Rankings</Link>
              <Link href="/compare">Compare</Link>
              <Link href="/methodology">Methodology</Link>
              <Link href="/changelog">Changelog</Link>
              <Link href="/teach">Teach</Link>
              <Link href="/partner">Partner</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
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
