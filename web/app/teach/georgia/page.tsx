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
  title: "Teach Georgia | History is for Everyone",
  description:
    "Teacher resources for Georgia towns in the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
};

export const dynamic = "force-dynamic";

const GA_TOWNS = [
  { slug: "savannah-ga", name: "Savannah" },
  { slug: "augusta-ga", name: "Augusta" },
];

export default async function GeorgiaTeachPage() {
  const modules = await Promise.all(
    GA_TOWNS.map(async (town) => {
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
            Georgia
          </Text>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-section">
        <Container>
          <Heading level={1}>Georgia</Heading>
          <div className="mt-element max-w-[720px] space-y-element">
            <Text>
              Georgia was the only colony the British successfully reconquered
              — and held for years. Savannah&apos;s occupation and the failed
              Franco-American siege teach students about the war&apos;s
              international dimensions and the limits of alliance.
            </Text>
            <Text>
              The failed Franco-American siege of Savannah in 1779 was one of
              the war&apos;s costliest defeats, demonstrating that a French
              alliance was not a guarantee of victory. Augusta changed hands
              multiple times as Patriot and Loyalist forces fought for control
              of the backcountry. Georgia&apos;s experience — reconquered,
              occupied, slowly liberated — offers students a window into what
              the Revolution looked like when the Patriots were losing, and what
              it took to rebuild both an army and a civil society in the middle
              of a war.
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
            {curatedCount} of {GA_TOWNS.length} Georgia town
            {GA_TOWNS.length === 1 ? "" : "s"} ha
            {GA_TOWNS.length === 1 ? "s" : "ve"} curated teacher resources.
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
