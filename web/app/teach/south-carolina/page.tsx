import { Metadata } from "next";
import { getTeacherModule } from "@/lib/api";
import { Container, Text, Link } from "@/components/ui";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Teach South Carolina | History is for Everyone",
  description:
    "Teacher resources for South Carolina towns in the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
  openGraph: {
    title: "Teach South Carolina | History is for Everyone",
    description: "Teacher resources for South Carolina towns in the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
    url: "https://sabrinas-town.vercel.app/teach/south-carolina",
  },
  alternates: { canonical: "https://sabrinas-town.vercel.app/teach/south-carolina" },
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
      {/* Hero */}
      <PageHero
        bg="navy"
        overline="Teacher Resources"
        title="South Carolina"
        body="South Carolina's war was the most brutal in the colonies — a civil war within a war, with Patriot and Loyalist militias fighting in a landscape of isolated plantations and dense backcountry. Enslaved people's labor and knowledge shaped every campaign."
      />

      {/* Intro body */}
      <section className="py-16 bg-ivory">
        <div className="mx-auto max-w-[720px] px-6 md:px-10">
          <p className="font-serif text-[1.05rem] leading-[1.85] text-charcoal">
            The fall of Charleston in 1780 was the worst American defeat of
            the entire war, surrendering an entire Continental Army. What
            followed was a guerrilla war of extraordinary violence — Tarleton&apos;s
            Quarters, the massacre at Waxhaws, the retaliatory raids by
            Sumter and Marion. The eight towns in this collection span the
            Southern campaign from Fort Moultrie&apos;s early defiance in 1776
            to Nathanael Greene&apos;s grinding war of attrition that wore
            British strength to nothing without ever winning a decisive battle.
          </p>
        </div>
      </section>

      {/* Print-Ready Resources */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeader
            overline="Print PDFs"
            title="Print-Ready Resources"
          />
          <p className="text-slate text-[0.95rem] mb-10 -mt-6">
            Complete teacher packets formatted for classroom printing.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {modules.filter((m) => m.hasModule).map((m) => (
              <PrintLink key={m.slug} slug={m.slug} name={m.name} curated={m.hasCurated} />
            ))}
          </div>
        </Container>
      </section>

      {/* Coverage Status */}
      <section className="py-20 bg-ivory">
        <Container>
          <SectionHeader
            overline="Content Coverage"
            title="Coverage Status"
          />
          <p className="text-charcoal text-[0.95rem] mb-8 -mt-6">
            {curatedCount} of {SC_TOWNS.length} South Carolina town
            {SC_TOWNS.length === 1 ? "" : "s"} ha
            {SC_TOWNS.length === 1 ? "s" : "ve"} curated teacher resources.
          </p>
          <CoverageList modules={modules} />
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
      className="block p-4 bg-white border border-[#DDD8CE] rounded-lg no-underline hover:border-crimson hover:bg-cream transition-colors"
    >
      <span className="font-medium text-navy">{name}</span>
      <span className="block text-[0.8rem] text-slate mt-1">
        {curated ? "Curated" : "Generated"} &middot; Print packet
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
