import { Metadata } from "next";
import { getTeacherModule } from "@/lib/api";
import { Container, Text, Link } from "@/components/ui";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Teach New Jersey | History is for Everyone",
  description:
    "Teacher resources for New Jersey towns at the crossroads of the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
  openGraph: {
    title: "Teach New Jersey | History is for Everyone",
    description: "Teacher resources for New Jersey towns at the crossroads of the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
    url: "https://sabrinas-town.vercel.app/teach/new-jersey",
  },
  alternates: { canonical: "https://sabrinas-town.vercel.app/teach/new-jersey" },
};

export const dynamic = "force-dynamic";

const NJ_TOWNS = [
  { slug: "morristown-nj", name: "Morristown" },
];

export default async function NewJerseyTeachPage() {
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
      {/* Hero */}
      <PageHero
        bg="navy"
        overline="Teacher Resources"
        title="New Jersey"
        body="New Jersey was the crossroads of the American Revolution — more battles and skirmishes were fought on its soil than in any other colony. From Washington's desperate crossing of the Delaware on Christmas night 1776 to two brutal winters at Morristown that tested the Continental Army to its limits, New Jersey's story is one of endurance, improvisation, and survival against extraordinary odds."
      />

      {/* Intro body */}
      <section className="py-16 bg-ivory">
        <div className="mx-auto max-w-[720px] px-6 md:px-10">
          <p className="font-serif text-[1.05rem] leading-[1.85] text-charcoal">
            The state&apos;s geography made it a perpetual battleground:
            situated between the British stronghold of New York and the
            Continental Congress in Philadelphia, New Jersey&apos;s roads,
            rivers, and towns saw constant military movement. Its civilian
            population endured occupation, foraging, and the daily disruption
            of armies marching through their communities. Teaching New
            Jersey&apos;s Revolution means teaching the war as it was actually
            experienced — not as a series of glorious victories but as a long,
            grinding contest of endurance.
          </p>
        </div>
      </section>

      {/* Coverage Status */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeader
            overline="Content Coverage"
            title="Coverage Status"
          />
          <p className="text-charcoal text-[0.95rem] mb-8 -mt-6">
            {curatedCount} of {NJ_TOWNS.length} New Jersey town
            {NJ_TOWNS.length === 1 ? "" : "s"} ha
            {NJ_TOWNS.length === 1 ? "s" : "ve"} curated teacher resources.
          </p>
          <CoverageList modules={modules} />
          <p className="mt-10 text-slate text-[0.9rem]">
            Additional New Jersey towns coming soon. The full network includes
            Trenton, Princeton, Monmouth, New Brunswick, and Fort Lee.
          </p>
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
            className={`w-3 h-3 rounded-full flex-shrink-0 ${
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
