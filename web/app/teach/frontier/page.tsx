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
  title: "Teach Frontier | History is for Everyone",
  description:
    "Teacher resources for frontier towns in the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
};

export const dynamic = "force-dynamic";

const FRONTIER_TOWNS = [
  { slug: "kaskaskia-il", name: "Kaskaskia" },
  { slug: "marietta-oh", name: "Marietta" },
  { slug: "wheeling-wv", name: "Wheeling" },
];

export default async function FrontierTeachPage() {
  const modules = await Promise.all(
    FRONTIER_TOWNS.map(async (town) => {
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
            Frontier
          </Text>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-section">
        <Container>
          <Heading level={1}>Frontier</Heading>
          <div className="mt-element max-w-[720px] space-y-element">
            <Text>
              The Revolution extended far beyond the eastern seaboard. George
              Rogers Clark&apos;s capture of Kaskaskia, the founding of Marietta
              as the first organized settlement of the Northwest Territory, and
              Wheeling&apos;s frontier forts show how the war reshaped the
              continent.
            </Text>
            <Text>
              The frontier campaigns are rarely taught, but they decided what
              kind of country the new United States would become. Clark&apos;s
              audacious march through the Illinois Country secured American
              claims to the Northwest Territory at the peace table. The founding
              of Marietta in 1788 under the Northwest Ordinance — which banned
              slavery in the territory — set the terms for a century of
              expansion and conflict. Wheeling&apos;s forts sheltered settlers
              under constant threat from Native nations who had their own
              reasons to resist the spread of American power westward.
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
            {curatedCount} of {FRONTIER_TOWNS.length} frontier town
            {FRONTIER_TOWNS.length === 1 ? "" : "s"} ha
            {FRONTIER_TOWNS.length === 1 ? "s" : "ve"} curated teacher resources.
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
