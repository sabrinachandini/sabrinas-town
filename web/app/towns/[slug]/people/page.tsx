import { getTown, getTownPeople } from "@/lib/api";
import { ComingSoon } from "@/components/town";
import { PageShell, PageHeader } from "@/components/editorial";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return { title: "People | Town Not Found" };
  }

  return {
    title: `People | ${town.name}, ${town.state} | History is for Everyone`,
    description: `Historical figures connected to ${town.name}, ${town.state} during the Revolutionary War.`,
  };
}

export default async function PeoplePage({ params }: PageProps) {
  const { slug } = await params;

  const [town, peopleData] = await Promise.all([
    getTown(slug),
    getTownPeople(slug),
  ]);

  if (!town) return <ComingSoon slug={slug} section="People" />;

  const people = peopleData?.people ?? [];

  return (
    <PageShell>
      <PageHeader
        name={town.name}
        state={town.state}
        subtitle={`Historical figures connected to ${town.name}.`}
        variant="bold"
      />

      <section className="pt-16 md:pt-20">
        {/* Section header */}
        <div className="border-b border-[#0e1428]/10 mb-8">
          <h2 className="font-display text-[1.5rem] text-[#0e1428]/30 tracking-[0.15em] uppercase mb-1">
            {people.length} People
          </h2>
        </div>

        {people.length > 0 ? (
          <div>
            {people.map((person) => {
              const lifespan =
                person.birthYear && person.deathYear
                  ? `${person.birthYear}–${person.deathYear}`
                  : person.birthYear
                    ? `b. ${person.birthYear}`
                    : null;

              const meta = [lifespan, ...person.roles].filter(Boolean).join(" · ");

              return (
                <a
                  key={person.id}
                  href={`/towns/${slug}/people/${(person as { slug?: string; id: string }).slug || person.id}`}
                  className="group block border-b border-[#0e1428]/8 py-5 last:border-b-0 no-underline"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-[1.375rem] text-[#0e1428] group-hover:text-[#c8222a] group-hover:translate-x-1 transition-all duration-150">
                      {person.name}
                    </span>
                    <span className="font-display text-[#c8222a] text-[1.1rem] leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-150" aria-hidden="true">
                      &rarr;
                    </span>
                  </div>

                  {meta && (
                    <p className="font-ui text-[0.75rem] text-[#0e1428]/50 uppercase tracking-[0.08em] mt-0.5">
                      {meta}
                    </p>
                  )}

                  {person.bioShort && (
                    <p className="font-editorial text-[0.95rem] text-[#0e1428]/70 leading-relaxed mt-2">
                      {person.bioShort}
                    </p>
                  )}
                </a>
              );
            })}
          </div>
        ) : (
          <p className="font-editorial text-[0.95rem] text-[#0e1428]/60 leading-relaxed">
            Research is ongoing. People connected to {town.name} will appear here.
          </p>
        )}
      </section>
    </PageShell>
  );
}
