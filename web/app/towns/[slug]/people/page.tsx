import { getTown, getTownPeople } from "@/lib/api";
import { ComingSoon } from "@/components/town";
import {
  PageShell,
  PageHeader,
  EditorialSection,
} from "@/components/editorial";

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
      />

      <EditorialSection id="people" title={`${people.length} People`}>
        {people.length > 0 ? (
          <div className="space-y-0">
            {people.map((person) => (
              <div
                key={person.id}
                className="py-5 border-b border-border-light last:border-b-0"
              >
                <h3 className="font-heading text-[1.25rem] tracking-tight">
                  <a
                    href={`/towns/${slug}/people/${(person as any).slug || person.id}`}
                    className="hover:text-accent-blue transition-colors"
                  >
                    {person.name}
                  </a>
                </h3>
                <p className="mt-1 text-small text-text-muted font-body">
                  {[
                    person.birthYear && person.deathYear
                      ? `${person.birthYear}–${person.deathYear}`
                      : person.birthYear
                        ? `b. ${person.birthYear}`
                        : null,
                    ...person.roles,
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
                <p className="mt-2 font-body leading-relaxed">
                  {person.bioShort}
                </p>
                {person.bioLong && (
                  <details className="mt-3">
                    <summary className="text-small text-accent-blue font-body cursor-pointer hover:underline">
                      Read more
                    </summary>
                    <p className="mt-2 font-body leading-relaxed text-text-primary">
                      {person.bioLong}
                    </p>
                  </details>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-text-muted font-body">
            Research is ongoing. People connected to {town.name} will appear here.
          </p>
        )}
      </EditorialSection>
    </PageShell>
  );
}
