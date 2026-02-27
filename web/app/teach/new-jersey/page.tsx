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
  title: "Teach New Jersey | History is for Everyone",
  description:
    "Teacher resources for New Jersey towns at the crossroads of the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
};

export const dynamic = "force-dynamic";

const NJ_TOWNS = [
  { slug: "morristown-nj", name: "Morristown" },
];

export default async function NewJerseyTeachPage() {
  // Fetch coverage status for NJ towns in parallel
  const modules = await Promise.all(
    NJ_TOWNS.map(async (town) => {
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
            New Jersey
          </Text>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-section">
        <Container>
          <Heading level={1}>New Jersey</Heading>
          <div className="mt-element max-w-[720px] space-y-element">
            <Text>
              New Jersey was the crossroads of the American Revolution — more
              battles and skirmishes were fought on its soil than in any other
              colony. From Washington&apos;s desperate crossing of the Delaware
              on Christmas night 1776 to two brutal winters at Morristown that
              tested the Continental Army to its limits, New Jersey&apos;s story
              is one of endurance, improvisation, and survival against
              extraordinary odds.
            </Text>
            <Text>
              The state&apos;s geography made it a perpetual battleground:
              situated between the British stronghold of New York and the
              Continental Congress in Philadelphia, New Jersey&apos;s roads,
              rivers, and towns saw constant military movement. Its civilian
              population endured occupation, foraging, and the daily disruption
              of armies marching through their communities. Teaching New
              Jersey&apos;s Revolution means teaching the war as it was actually
              experienced — not as a series of glorious victories but as a long,
              grinding contest of endurance.
            </Text>
          </div>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* Coverage Status */}
      <section className="py-component">
        <Container>
          <Heading level={2}>Coverage Status</Heading>
          <Text className="mt-element">
            {curatedCount} of {NJ_TOWNS.length} New Jersey town
            {NJ_TOWNS.length === 1 ? "" : "s"} ha
            {NJ_TOWNS.length === 1 ? "s" : "ve"} curated teacher resources.
          </Text>

          <div className="mt-component">
            <CoverageList modules={modules} />
          </div>

          <Text className="mt-component" muted>
            Additional New Jersey towns coming soon. The full network includes
            Trenton, Princeton, Monmouth, New Brunswick, and Fort Lee.
          </Text>
        </Container>
      </section>
    </main>
  );
}

/* Helper components */

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
