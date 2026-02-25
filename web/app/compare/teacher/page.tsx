import { compareTeacherModules, getRankings } from "@/lib/api";
import { Container, Heading, Text, Link, Divider } from "@/components/ui";
import { ContentSourceBadge } from "@/components/town";

interface PageProps {
  searchParams: Promise<{ townA?: string; townB?: string }>;
}

export async function generateMetadata() {
  return {
    title: "Compare Teacher Modules | Sabrina's Town",
    description: "Compare teacher resources for two Revolutionary War towns side by side.",
  };
}

export default async function CompareTeacherPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const { townA, townB } = params;

  if (!townA || !townB) {
    return <TeacherCompareSelector />;
  }

  const data = await compareTeacherModules(townA, townB);

  if (!data) {
    return (
      <main className="py-section">
        <Container>
          <Heading level={1}>Towns Not Found</Heading>
          <Text className="mt-element">One or both towns could not be found.</Text>
          <Link href="/compare/teacher" className="mt-element inline-block">Back to selector</Link>
        </Container>
      </main>
    );
  }

  const { townA: modA, townB: modB, comparison } = data;

  return (
    <main className="py-section">
      <Container>
        <Text size="small" muted className="uppercase tracking-wide">Teacher Module Comparison</Text>
        <Heading level={1} className="mt-2">{modA.town.name} vs {modB.town.name}</Heading>

        {/* Side-by-side overviews */}
        <div className="mt-component grid md:grid-cols-2 gap-component">
          <ModuleCard module={modA} />
          <ModuleCard module={modB} />
        </div>

        <Divider spacing="section" />

        {/* Suggested cross-town assignment */}
        <section>
          <Heading level={2}>Suggested Cross-Town Assignment</Heading>
          <div className="mt-component p-component bg-bg-secondary rounded-lg">
            <Text className="font-medium">{comparison.suggestedAssignment.title}</Text>
            <Text className="mt-element">{comparison.suggestedAssignment.description}</Text>
            <div className="mt-element">
              <Text size="small" muted className="uppercase tracking-wide mb-2">Guide Questions</Text>
              <ul className="space-y-2">
                {comparison.suggestedAssignment.guideQuestions.map((q, i) => (
                  <li key={i} className="pl-4 border-l-2 border-accent-blue">
                    <Text size="small">{q}</Text>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Divider spacing="section" />

        {/* Shared source types */}
        {comparison.sharedSourceTypes.length > 0 && (
          <section>
            <Heading level={2}>Shared Primary Source Types</Heading>
            <div className="mt-component flex flex-wrap gap-2">
              {comparison.sharedSourceTypes.map((type) => (
                <span key={type} className="px-3 py-1 bg-bg-secondary rounded-full text-small">{type}</span>
              ))}
            </div>
          </section>
        )}

        {/* Links to individual teacher pages */}
        <div className="mt-section">
          <div className="p-component bg-bg-secondary rounded-lg text-center">
            <Heading level={3}>Explore Full Teacher Modules</Heading>
            <div className="mt-element flex justify-center gap-4">
              <Link href={`/towns/${modA.town.slug}/teacher`} className="px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 no-underline">
                {modA.town.name}
              </Link>
              <Link href={`/towns/${modB.town.slug}/teacher`} className="px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 no-underline">
                {modB.town.name}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

function ModuleCard({ module }: { module: { town: { name: string; state: string; slug: string }; overview: { title: string; gradeRange: string; estimatedDuration: string; summary: string }; meta?: { contentSource: "curated" | "generated" } } }) {
  return (
    <div className="p-element bg-bg-secondary rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <Text size="small" muted className="uppercase tracking-wide">{module.town.state}</Text>
        <ContentSourceBadge contentSource={module.meta?.contentSource || "generated"} />
      </div>
      <Heading level={3}>{module.town.name}</Heading>
      <Text className="font-medium mt-2">{module.overview.title}</Text>
      <Text size="small" className="mt-element">{module.overview.summary}</Text>
      <div className="mt-element flex gap-4 text-small text-text-muted">
        <span>{module.overview.gradeRange}</span>
        <span>{module.overview.estimatedDuration}</span>
      </div>
    </div>
  );
}

async function TeacherCompareSelector() {
  const towns = await getRankings({ limit: 75 });
  return (
    <main className="py-section">
      <Container>
        <Heading level={1}>Compare Teacher Modules</Heading>
        <Text className="mt-element text-text-muted max-w-[600px]">
          Select two towns to compare their teacher resources side by side.
        </Text>
        <div className="mt-component">
          <form action="/compare/teacher" method="GET" className="space-y-component">
            <div className="grid md:grid-cols-2 gap-component">
              <div>
                <label htmlFor="townA" className="block text-small font-medium mb-2">First Town</label>
                <select name="townA" id="townA" required defaultValue="lexington-ma" className="w-full p-3 bg-bg-secondary border border-border-light rounded-lg text-text-primary">
                  {towns.map((t) => <option key={t.id} value={t.slug}>{t.name}, {t.state}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="townB" className="block text-small font-medium mb-2">Second Town</label>
                <select name="townB" id="townB" required defaultValue="concord-ma" className="w-full p-3 bg-bg-secondary border border-border-light rounded-lg text-text-primary">
                  {towns.map((t) => <option key={t.id} value={t.slug}>{t.name}, {t.state}</option>)}
                </select>
              </div>
            </div>
            <button type="submit" className="px-6 py-3 bg-accent-blue text-white font-medium rounded-lg hover:bg-accent-blue/90 transition-colors">Compare</button>
          </form>
        </div>
      </Container>
    </main>
  );
}
