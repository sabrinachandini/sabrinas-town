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

  const title = `People | ${town.name}, ${town.state}`;
  const description = `Historical figures connected to ${town.name}, ${town.state} during the Revolutionary War.`;
  const url = `https://sabrinas-town.vercel.app/towns/${slug}/people`;
  const images = town.imageUrl ? [{ url: town.imageUrl, width: 1200, height: 630 }] : undefined;
  return {
    title,
    description,
    openGraph: { title, description, url, images },
    twitter: { card: "summary_large_image", title, description, images: town.imageUrl ? [town.imageUrl] : undefined },
    alternates: { canonical: url },
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
        <div className="border-b-[3px] border-ink pb-3 mb-0">
          <p className="font-display text-[24px] text-ink/30 tracking-[0.15em] uppercase">
            {people.length} People
          </p>
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
                  className="flex items-center justify-between group py-4 border-b border-ink/8 no-underline hover:bg-yellow/10 hover:pl-2 transition-all duration-150"
                >
                  <div className="min-w-0">
                    <span className="font-editorial text-[22px] text-ink group-hover:text-crimson transition-colors">
                      {person.name}
                    </span>

                    {meta && (
                      <p className="font-ui text-[11px] uppercase tracking-[0.1em] text-crimson/60 mt-0.5">
                        {meta}
                      </p>
                    )}

                    {person.bioShort && (
                      <p className="font-editorial text-[15px] text-ink/60 leading-relaxed mt-2">
                        {person.bioShort}
                      </p>
                    )}
                  </div>

                  <span className="font-display text-crimson shrink-0 ml-4" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              );
            })}
          </div>
        ) : (
          <p className="font-editorial text-[0.95rem] text-ink/60 leading-relaxed">
            Research is ongoing. People connected to {town.name} will appear here.
          </p>
        )}
      </section>
    </PageShell>
  );
}
