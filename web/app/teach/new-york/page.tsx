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
  title: "Teach New York | History is for Everyone",
  description:
    "Teacher resources for New York towns in the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
};

export const dynamic = "force-dynamic";

const NY_TOWNS = [
  { slug: "new-york-city-ny", name: "New York City" },
  { slug: "saratoga-springs-ny", name: "Saratoga Springs" },
  { slug: "albany-ny", name: "Albany" },
  { slug: "ticonderoga-ny", name: "Ticonderoga" },
  { slug: "west-point-ny", name: "West Point" },
  { slug: "white-plains-ny", name: "White Plains" },
  { slug: "newburgh-ny", name: "Newburgh" },
  { slug: "kingston-ny", name: "Kingston" },
  { slug: "crown-point-ny", name: "Crown Point" },
  { slug: "harlem-heights-ny", name: "Harlem Heights" },
  { slug: "stony-point-ny", name: "Stony Point" },
];

export default async function NewYorkTeachPage() {
  const modules = await Promise.all(
    NY_TOWNS.map(async (town) => {
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
            New York
          </Text>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-section">
        <Container>
          <Heading level={1}>New York</Heading>
          <div className="mt-element max-w-[720px] space-y-element">
            <Text>
              New York was the strategic prize of the entire war. The British
              held New York City from 1776 to 1783; the Patriot victory at
              Saratoga brought France into the war; and Washington&apos;s army
              spent its most desperate years in the Hudson Valley.
            </Text>
            <Text>
              No state offers students a fuller picture of the war&apos;s
              complexity. New York City under British occupation became a Loyalist
              refuge; the Hudson River Highlands were the strategic linchpin
              Washington fought to protect; Saratoga was the turning point that
              made allied victory possible. The eleven towns in this collection
              span the war&apos;s full arc, from the catastrophic defeats of 1776
              to Washington&apos;s farewell to his officers at Fraunces Tavern
              in 1783.
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
            {curatedCount} of {NY_TOWNS.length} New York town
            {NY_TOWNS.length === 1 ? "" : "s"} ha
            {NY_TOWNS.length === 1 ? "s" : "ve"} curated teacher resources.
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
