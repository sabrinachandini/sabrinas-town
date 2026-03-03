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
  title: "Teach Pennsylvania | History is for Everyone",
  description:
    "Teacher resources for Pennsylvania towns in the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
};

export const dynamic = "force-dynamic";

const PA_TOWNS = [
  { slug: "philadelphia-pa", name: "Philadelphia" },
  { slug: "valley-forge-pa", name: "Valley Forge" },
  { slug: "york-pa", name: "York" },
  { slug: "carlisle-pa", name: "Carlisle" },
  { slug: "paoli-pa", name: "Paoli" },
  { slug: "germantown-pa", name: "Germantown" },
  { slug: "pittsburgh-pa", name: "Pittsburgh" },
];

export default async function PennsylvaniaTeachPage() {
  const modules = await Promise.all(
    PA_TOWNS.map(async (town) => {
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
            Pennsylvania
          </Text>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-section">
        <Container>
          <Heading level={1}>Pennsylvania</Heading>
          <div className="mt-element max-w-[720px] space-y-element">
            <Text>
              Pennsylvania hosted both the Continental Congress and the darkest
              winter of the war. From the political debates in Philadelphia to
              the suffering at Valley Forge, the state&apos;s history captures
              the Revolution at its most fragile.
            </Text>
            <Text>
              The seven towns in this collection span Pennsylvania&apos;s
              Revolutionary experience from the center of political power to the
              western frontier. Philadelphia was where independence was declared
              and then abandoned to British occupation. Valley Forge was where
              the Continental Army nearly ceased to exist. York served as the
              emergency capital when Philadelphia fell. Teaching Pennsylvania
              means teaching the gap between the ideals proclaimed in
              Independence Hall and the brutal reality of a war the Patriots
              were not certain they could win.
            </Text>
          </div>
        </Container>
      </section>

      <Divider spacing="section" />

      {/* Print-Ready Resources */}
      <section className="py-component">
        <Container>
          <Heading level={2}>Print-Ready Resources</Heading>
          <Text className="mt-element" muted>
            Complete teacher packets formatted for classroom printing.
          </Text>
          <div className="mt-component grid sm:grid-cols-2 md:grid-cols-3 gap-element">
            {modules.filter((m) => m.hasModule).map((m) => (
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
            {curatedCount} of {PA_TOWNS.length} Pennsylvania town
            {PA_TOWNS.length === 1 ? "" : "s"} ha
            {PA_TOWNS.length === 1 ? "s" : "ve"} curated teacher resources.
          </Text>
          <div className="mt-component">
            <CoverageList modules={modules} />
          </div>
        </Container>
      </section>
    </main>
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
