import { Metadata } from "next";
import { getTeacherModule } from "@/lib/api";
import { Container, Text, Link } from "@/components/ui";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Teach North Carolina | History is for Everyone",
  description:
    "Teacher resources for North Carolina towns in the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
  openGraph: {
    title: "Teach North Carolina | History is for Everyone",
    description: "Teacher resources for North Carolina towns in the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
    url: "https://sabrinas-town.vercel.app/teach/north-carolina",
  },
  alternates: { canonical: "https://sabrinas-town.vercel.app/teach/north-carolina" },
};

export const dynamic = "force-dynamic";

const NC_TOWNS = [
  { slug: "guilford-courthouse-nc", name: "Guilford Courthouse" },
  { slug: "kings-mountain-nc", name: "Kings Mountain" },
  { slug: "wilmington-nc", name: "Wilmington" },
  { slug: "new-bern-nc", name: "New Bern" },
];

export default async function NorthCarolinaTeachPage() {
  const modules = await Promise.all(
    NC_TOWNS.map(async (town) => {
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
        title="North Carolina"
        body="North Carolina's backcountry became the decisive theater of the Southern campaign. The overmountain men at Kings Mountain and Nathanael Greene's grinding campaign through the Carolinas broke British control of the South."
      />

      {/* Intro body */}
      <section className="py-16 bg-ivory">
        <div className="mx-auto max-w-[720px] px-6 md:px-10">
          <p className="font-serif text-[1.05rem] leading-[1.85] text-charcoal">
            Kings Mountain is often overlooked in standard curricula, but it
            was one of the war&apos;s genuinely decisive battles — a Patriot
            militia victory that destroyed an entire Loyalist force and
            shattered Cornwallis&apos;s plan for subduing the South. Guilford
            Courthouse, fought six months later, was a Pyrrhic British victory
            that left Cornwallis&apos;s army too weakened to hold the Carolinas.
            Teaching North Carolina means teaching students how irregular
            warfare, local knowledge, and the willingness to absorb losses
            can defeat a superior conventional force.
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
            {curatedCount} of {NC_TOWNS.length} North Carolina town
            {NC_TOWNS.length === 1 ? "" : "s"} ha
            {NC_TOWNS.length === 1 ? "s" : "ve"} curated teacher resources.
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
