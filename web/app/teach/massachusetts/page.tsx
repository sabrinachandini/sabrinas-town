import { Metadata } from "next";
import { getTeacherModule } from "@/lib/api";
import {
  Container,
  Heading,
  Text,
  Link,
  Divider,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Teach Massachusetts | History is for Everyone",
  description:
    "Teacher resources for ten Massachusetts towns at the center of the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
};

export const dynamic = "force-dynamic";

const MA_TOWNS = [
  { slug: "lexington-ma", name: "Lexington" },
  { slug: "concord-ma", name: "Concord" },
  { slug: "boston-ma", name: "Boston" },
  { slug: "salem-ma", name: "Salem" },
  { slug: "marblehead-ma", name: "Marblehead" },
  { slug: "cambridge-ma", name: "Cambridge" },
  { slug: "arlington-ma", name: "Arlington" },
  { slug: "plymouth-ma", name: "Plymouth" },
  { slug: "worcester-ma", name: "Worcester" },
  { slug: "springfield-ma", name: "Springfield" },
];

export default async function MassachusettsTeachPage() {
  // Fetch coverage status for all 10 towns in parallel
  const modules = await Promise.all(
    MA_TOWNS.map(async (town) => {
      const mod = await getTeacherModule(town.slug);
      return {
        ...town,
        hasCurated: mod?.meta?.contentSource === "curated",
        hasModule: mod !== null,
      };
    })
  );

  const curatedCount = modules.filter((m) => m.hasCurated).length;

  return (
    <main>
      {/* Breadcrumb */}
      <section className="py-element bg-bg-secondary">
        <Container>
          <Text size="small" muted>
            <Link href="/teach">Teach</Link>
            {" / "}
            Massachusetts
          </Text>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-section">
        <Container>
          <Heading level={1}>Massachusetts</Heading>
          <div className="mt-element max-w-[720px] space-y-element">
            <Text>
              Massachusetts is where the American Revolution became
              irreversible. The colony had spent a decade resisting British
              authority through boycotts, petitions, and political organization,
              but between 1774 and 1775 that resistance crossed into armed
              confrontation — and the crossing happened not in one dramatic
              moment but across dozens of towns, each making its own calculation
              about what was worth risking and what could no longer be tolerated.
            </Text>
            <Text>
              The ten towns in this collection represent the geography of that
              transformation. Lexington and Concord are the famous names, but
              the bloodiest fighting on April 19 happened in Arlington. The
              siege of Boston was commanded from Cambridge. Salem and Marblehead
              built the maritime infrastructure that made resistance viable.
              Worcester shut down royal courts months before any shots were
              fired. Springfield armed the Continental Army. Plymouth — the
              colony&apos;s founding town — had to reconcile its Pilgrim
              identity with a Revolutionary present. Each town offers students a
              different angle on the same fundamental question: how does a
              society decide to break with its government?
            </Text>
          </div>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* Teaching Sequences */}
      <section className="py-component">
        <Container>
          <Heading level={2}>Recommended Teaching Sequences</Heading>
          <Text className="mt-element" muted>
            Multi-town sequences designed to build cumulative understanding across class periods.
          </Text>

          <div className="mt-component grid md:grid-cols-3 gap-component">
            <SequenceCard
              title="The April 19 Sequence"
              towns={["Lexington", "Arlington", "Concord"]}
              duration="5-7 class periods"
              description="Follow the day chronologically: the confrontation at dawn on Lexington Green, the brutal ambush fighting through Menotomy (Arlington), and the organized resistance at Concord's North Bridge. Students trace how a single day's events escalated from a brief skirmish to a full running battle."
            />
            <SequenceCard
              title="The Siege of Boston"
              towns={["Boston", "Cambridge"]}
              duration="4-6 class periods"
              description="Examine the siege from both sides: British-occupied Boston and Washington's headquarters in Cambridge. Students analyze the strategic challenges of besieging a fortified city, the birth of the Continental Army, and the logistics that made the siege possible."
            />
            <SequenceCard
              title="Maritime Massachusetts"
              towns={["Salem", "Marblehead"]}
              duration="3-4 class periods"
              description="Explore how coastal communities contributed to the Revolution through maritime trade, smuggling, and naval militia. Students examine how economic resistance and seafaring culture shaped these towns' Revolutionary identities."
            />
          </div>
        </Container>
      </section>

      <Divider spacing="section" />

      <Divider spacing="section" />

      {/* Print-Ready Resources */}
      <section className="py-component">
        <Container>
          <Heading level={2}>Print-Ready Resources</Heading>
          <Text className="mt-element" muted>
            Complete teacher packets formatted for classroom printing. Each includes lesson plans, source packets, handouts, and quizzes.
          </Text>

          <div className="mt-component grid sm:grid-cols-2 md:grid-cols-3 gap-element">
            {modules
              .filter((m) => m.hasModule)
              .map((m) => (
                <PrintLink key={m.slug} slug={m.slug} name={m.name} curated={m.hasCurated} />
              ))}
          </div>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* Coverage Status */}
      <section className="py-component">
        <Container>
          <Heading level={2}>Coverage Status</Heading>
          <Text className="mt-element">
            {curatedCount} of 10 Massachusetts towns have curated teacher resources.
          </Text>

          <div className="mt-component">
            <CoverageList modules={modules} />
          </div>
        </Container>
      </section>
    </main>
  );
}

/* Helper components */

function SequenceCard({
  title,
  towns,
  duration,
  description,
}: {
  title: string;
  towns: string[];
  duration: string;
  description: string;
}) {
  return (
    <div className="p-element bg-bg-secondary rounded-lg">
      <Heading level={3}>{title}</Heading>
      <Text size="small" muted className="mt-1">
        {towns.join(" → ")} · {duration}
      </Text>
      <Text size="small" className="mt-element">
        {description}
      </Text>
    </div>
  );
}

function PrintLink({
  slug,
  name,
  curated,
}: {
  slug: string;
  name: string;
  curated: boolean;
}) {
  return (
    <a
      href={`/towns/${slug}/teacher/print`}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-element bg-bg-secondary rounded-lg no-underline hover:bg-bg-secondary/80 transition-colors"
    >
      <span className="font-medium text-text-primary">{name}</span>
      <span className="block text-small text-text-muted mt-1">
        {curated ? "Curated" : "Generated"} · Print packet
      </span>
    </a>
  );
}

function CoverageList({
  modules,
}: {
  modules: Array<{
    slug: string;
    name: string;
    hasCurated: boolean;
    hasModule: boolean;
  }>;
}) {
  return (
    <ul className="space-y-2">
      {modules.map((m) => (
        <li key={m.slug} className="flex items-center gap-3">
          <span
            className={`w-2 h-2 rounded-full flex-shrink-0 ${
              m.hasCurated
                ? "bg-green-600"
                : m.hasModule
                  ? "bg-yellow-500"
                  : "bg-gray-300"
            }`}
          />
          <Link href={`/towns/${m.slug}/teacher`}>
            <Text as="span" size="small">
              {m.name}
            </Text>
          </Link>
          <Text as="span" size="small" muted>
            {m.hasCurated ? "Curated" : m.hasModule ? "Generated" : "Pending"}
          </Text>
        </li>
      ))}
    </ul>
  );
}
