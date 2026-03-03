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
  title: "Teach Vermont | History is for Everyone",
  description:
    "Teacher resources for Vermont towns in the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
};

export const dynamic = "force-dynamic";

const VT_TOWNS = [
  { slug: "bennington-vt", name: "Bennington" },
  { slug: "brattleboro-vt", name: "Brattleboro" },
];

export default async function VermontTeachPage() {
  const modules = await Promise.all(
    VT_TOWNS.map(async (town) => {
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
            Vermont
          </Text>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-section">
        <Container>
          <Heading level={1}>Vermont</Heading>
          <div className="mt-element max-w-[720px] space-y-element">
            <Text>
              Vermont in 1777 was a disputed territory claimed by both New York
              and New Hampshire, and its Green Mountain Boys fought for
              independence on two fronts: against the British and against
              colonial authority.
            </Text>
            <Text>
              The Battle of Bennington in August 1777 was a critical prelude to
              Saratoga — a Patriot militia victory that destroyed a British
              foraging party and denied Burgoyne the supplies his army
              desperately needed. Vermont&apos;s story teaches students that the
              Revolution was never simply about thirteen unified colonies, but
              about competing claims to land, authority, and the right to
              self-governance that played out differently in every corner of
              British North America.
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
            {curatedCount} of {VT_TOWNS.length} Vermont town
            {VT_TOWNS.length === 1 ? "" : "s"} ha
            {VT_TOWNS.length === 1 ? "s" : "ve"} curated teacher resources.
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
