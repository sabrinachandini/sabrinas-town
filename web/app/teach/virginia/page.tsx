import { Metadata } from "next";
import { getTeacherModule } from "@/lib/api";
import { Container, Text, Link } from "@/components/ui";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Teach Virginia | History is for Everyone",
  description:
    "Teacher resources for Virginia towns in the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
  openGraph: {
    title: "Teach Virginia | History is for Everyone",
    description: "Teacher resources for Virginia towns in the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
    url: "https://sabrinas-town.vercel.app/teach/virginia",
  },
  alternates: { canonical: "https://sabrinas-town.vercel.app/teach/virginia" },
};

export const dynamic = "force-dynamic";

const VA_TOWNS = [
  { slug: "williamsburg-va", name: "Williamsburg" },
  { slug: "yorktown-va", name: "Yorktown" },
  { slug: "richmond-va", name: "Richmond" },
  { slug: "alexandria-va", name: "Alexandria" },
  { slug: "fredericksburg-va", name: "Fredericksburg" },
  { slug: "norfolk-va", name: "Norfolk" },
  { slug: "charlottesville-va", name: "Charlottesville" },
  { slug: "mount-vernon-va", name: "Mount Vernon" },
];

export default async function VirginiaTeachPage() {
  const modules = await Promise.all(
    VA_TOWNS.map(async (town) => {
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
        title="Virginia"
        body="Virginia produced the Revolution's most consequential leaders — Washington, Jefferson, Madison, Henry — and its final chapter was written at Yorktown, where the last major British army surrendered in 1781."
      />

      {/* Intro body */}
      <section className="py-16 bg-ivory">
        <div className="mx-auto max-w-[720px] px-6 md:px-10">
          <p className="font-serif text-[1.05rem] leading-[1.85] text-charcoal">
            The eight towns in this collection reveal Virginia&apos;s
            complexity. Williamsburg was the colonial capital where Patrick
            Henry made his defiant speeches; Yorktown was where the war
            effectively ended. But teaching Virginia honestly also means
            confronting the contradiction at its core: the men who wrote most
            eloquently about liberty were themselves slaveholders, and the
            labor of enslaved people made their political careers possible.
            Lord Dunmore&apos;s Proclamation, which promised freedom to
            enslaved people who escaped to British lines, forced that
            contradiction into the open in ways that shaped the war&apos;s
            outcome.
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
            {curatedCount} of {VA_TOWNS.length} Virginia town
            {VA_TOWNS.length === 1 ? "" : "s"} ha
            {VA_TOWNS.length === 1 ? "s" : "ve"} curated teacher resources.
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
