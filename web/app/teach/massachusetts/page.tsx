import { Metadata } from "next";
import { getTeacherModule } from "@/lib/api";
import { Container, Text, Link } from "@/components/ui";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Teach Massachusetts | History is for Everyone",
  description:
    "Teacher resources for ten Massachusetts towns at the center of the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
  openGraph: {
    title: "Teach Massachusetts | History is for Everyone",
    description: "Teacher resources for ten Massachusetts towns at the center of the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
    url: "https://sabrinas-town.vercel.app/teach/massachusetts",
  },
  alternates: { canonical: "https://sabrinas-town.vercel.app/teach/massachusetts" },
};

export const dynamic = "force-dynamic";

const MA_TOWNS = [
  { slug: "lexington-ma", name: "Lexington" },
  { slug: "concord-ma", name: "Concord" },
  { slug: "boston-ma", name: "Boston" },
  { slug: "salem-ma", name: "Salem" },
  { slug: "marblehead-ma", name: "Marblehead" },
  { slug: "cambridge-ma", name: "Cambridge" },
  { slug: "arlington-ma", name: "Arlington" },
  { slug: "plymouth-ma", name: "Plymouth" },
  { slug: "worcester-ma", name: "Worcester" },
  { slug: "springfield-ma", name: "Springfield" },
];

export default async function MassachusettsTeachPage() {
  const modules = await Promise.all(
    MA_TOWNS.map(async (town) => {
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
        title="Massachusetts"
        body="Massachusetts is where the American Revolution became irreversible. The colony had spent a decade resisting British authority through boycotts, petitions, and political organization, but between 1774 and 1775 that resistance crossed into armed confrontation — and the crossing happened not in one dramatic moment but across dozens of towns, each making its own calculation about what was worth risking and what could no longer be tolerated."
      />

      {/* Intro body */}
      <section className="py-16 bg-ivory">
        <div className="mx-auto max-w-[720px] px-6 md:px-10">
          <p className="font-serif text-[1.05rem] leading-[1.85] text-charcoal">
            The ten towns in this collection represent the geography of that
            transformation. Lexington and Concord are the famous names, but
            the bloodiest fighting on April 19 happened in Arlington. The
            siege of Boston was commanded from Cambridge. Salem and Marblehead
            built the maritime infrastructure that made resistance viable.
            Worcester shut down royal courts months before any shots were
            fired. Springfield armed the Continental Army. Plymouth — the
            colony&apos;s founding town — had to reconcile its Pilgrim
            identity with a Revolutionary present. Each town offers students a
            different angle on the same fundamental question: how does a
            society decide to break with its government?
          </p>
        </div>
      </section>

      {/* Teaching Sequences */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeader
            overline="Recommended Sequences"
            title="Teaching Sequences"
          />
          <p className="text-slate text-[0.95rem] mb-10 -mt-6">
            Multi-town sequences designed to build cumulative understanding across class periods.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <SequenceCard
              title="The April 19 Sequence"
              towns={["Lexington", "Arlington", "Concord"]}
              duration="5-7 class periods"
              description="Follow the day chronologically: the confrontation at dawn on Lexington Green, the brutal ambush fighting through Menotomy (Arlington), and the organized resistance at Concord's North Bridge. Students trace how a single day's events escalated from a brief skirmish to a full running battle."
            />
            <SequenceCard
              title="The Siege of Boston"
              towns={["Boston", "Cambridge"]}
              duration="4-6 class periods"
              description="Examine the siege from both sides: British-occupied Boston and Washington's headquarters in Cambridge. Students analyze the strategic challenges of besieging a fortified city, the birth of the Continental Army, and the logistics that made the siege possible."
            />
            <SequenceCard
              title="Maritime Massachusetts"
              towns={["Salem", "Marblehead"]}
              duration="3-4 class periods"
              description="Explore how coastal communities contributed to the Revolution through maritime trade, smuggling, and naval militia. Students examine how economic resistance and seafaring culture shaped these towns' Revolutionary identities."
            />
          </div>
        </Container>
      </section>

      {/* Print-Ready Resources */}
      <section className="py-20 bg-ivory">
        <Container>
          <SectionHeader
            overline="Print PDFs"
            title="Print-Ready Resources"
          />
          <p className="text-slate text-[0.95rem] mb-10 -mt-6">
            Complete teacher packets formatted for classroom printing. Each includes lesson plans, source packets, handouts, and quizzes.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {modules
              .filter((m) => m.hasModule)
              .map((m) => (
                <PrintLink key={m.slug} slug={m.slug} name={m.name} curated={m.hasCurated} />
              ))}
          </div>
        </Container>
      </section>

      {/* Coverage Status */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeader
            overline="Content Coverage"
            title="Coverage Status"
          />
          <p className="text-charcoal text-[0.95rem] mb-8 -mt-6">
            {curatedCount} of 10 Massachusetts towns have curated teacher resources.
          </p>
          <CoverageList modules={modules} />
        </Container>
      </section>
    </main>
  );
}

/* Helper components */

function SequenceCard({
  title,
  towns,
  duration,
  description,
}: {
  title: string;
  towns: string[];
  duration: string;
  description: string;
}) {
  return (
    <div className="bg-navy text-white p-6 rounded-lg">
      <h3 className="font-heading font-bold text-[1.15rem] leading-snug text-crimson">
        {title}
      </h3>
      <p className="font-condensed text-[0.8rem] tracking-wide uppercase text-gold mt-2">
        {towns.join(" → ")} &middot; {duration}
      </p>
      <p className="text-fog text-[0.9rem] leading-relaxed mt-4">
        {description}
      </p>
    </div>
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
