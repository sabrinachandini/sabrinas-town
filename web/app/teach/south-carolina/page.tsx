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
  title: "Teach South Carolina | History is for Everyone",
  description:
    "Teacher resources for South Carolina towns in the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
};

export const dynamic = "force-dynamic";

const SC_TOWNS = [
  { slug: "charleston-sc", name: "Charleston" },
  { slug: "camden-sc", name: "Camden" },
  { slug: "cowpens-sc", name: "Cowpens" },
  { slug: "ninety-six-sc", name: "Ninety Six" },
  { slug: "eutaw-springs-sc", name: "Eutaw Springs" },
  { slug: "beaufort-sc", name: "Beaufort" },
  { slug: "hobkirks-hill-sc", name: "Hobkirk's Hill" },
  { slug: "fort-moultrie-sc", name: "Fort Moultrie" },
];

export default async function SouthCarolinaTeachPage() {
  const modules = await Promise.all(
    SC_TOWNS.map(async (town) => {
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
            South Carolina
          </Text>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-section">
        <Container>
          <Heading level={1}>South Carolina</Heading>
          <div className="mt-element max-w-[720px] space-y-element">
            <Text>
              South Carolina&apos;s war was the most brutal in the colonies —
              a civil war within a war, with Patriot and Loyalist militias
              fighting in a landscape of isolated plantations and dense
              backcountry. Enslaved people&apos;s labor and knowledge shaped
              every campaign.
            </Text>
            <Text>
              The fall of Charleston in 1780 was the worst American defeat of
              the entire war, surrendering an entire Continental Army. What
              followed was a guerrilla war of extraordinary violence — Tarleton&apos;s
              Quarters, the massacre at Waxhaws, the retaliatory raids by
              Sumter and Marion. The eight towns in this collection span the
              Southern campaign from Fort Moultrie&apos;s early defiance in 1776
              to Nathanael Greene&apos;s grinding war of attrition that wore
              British strength to nothing without ever winning a decisive battle.
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
            {curatedCount} of {SC_TOWNS.length} South Carolina town
            {SC_TOWNS.length === 1 ? "" : "s"} ha
            {SC_TOWNS.length === 1 ? "s" : "ve"} curated teacher resources.
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
