import { notFound } from "next/navigation";
import { getTown, getTownPersonDetail } from "@/lib/api";
import {
  PageShell,
  PageHeader,
  Prose,
} from "@/components/editorial";
import NextLink from "next/link";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string; personSlug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, personSlug } = await params;
  const person = await getTownPersonDetail(slug, personSlug);

  if (!person) {
    return { title: "Person Not Found" };
  }

  return {
    title: `${person.name} | History is for Everyone`,
    description: person.bioShort.slice(0, 160),
  };
}

export default async function PersonDetailPage({ params }: PageProps) {
  const { slug, personSlug } = await params;

  const [town, person] = await Promise.all([
    getTown(slug),
    getTownPersonDetail(slug, personSlug),
  ]);

  if (!town || !person) {
    notFound();
  }

  const lifespan =
    person.birthYear && person.deathYear
      ? `${person.birthYear}–${person.deathYear}`
      : person.birthYear
        ? `b. ${person.birthYear}`
        : null;

  const sortedEvents = [...person.events].sort((a, b) => {
    if (!a.startDate) return 1;
    if (!b.startDate) return -1;
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  });

  return (
    <PageShell>
      <PageHeader
        variant="bold"
        name={person.name}
        state={town.state}
        subtitle={[lifespan, ...person.roles].filter(Boolean).join(" · ")}
      />

      {/* Metadata strip */}
      <div className="mb-8">
        {lifespan && (
          <p className="font-display text-[2rem] text-[#c8222a] leading-none">
            {lifespan}
          </p>
        )}
        {person.roles.length > 0 && (
          <p className="font-ui text-[0.75rem] uppercase tracking-[0.1em] text-[#0e1428]/50 mt-1">
            {person.roles.join(" · ")}
          </p>
        )}
        <div className="w-12 h-[3px] bg-[#c8222a] my-6" />
      </div>

      {/* Biography */}
      <Prose>
        {person.bioLong ? (
          person.bioLong.split("\n\n").map((p, i) => <p key={i}>{p}</p>)
        ) : (
          <p>{person.bioShort}</p>
        )}
      </Prose>

      {/* Events / In Town */}
      {sortedEvents.length > 0 && (
        <section className="pt-16 md:pt-20">
          <div className="border-b border-[#0e1428]/10 mb-6">
            <h2 className="font-display text-[0.9rem] tracking-[0.15em] uppercase text-[#0e1428]/30 mb-4">
              In {town.name}
            </h2>
          </div>
          <ol className="space-y-0">
            {sortedEvents.map((event) => (
              <li
                key={event.id}
                className="flex gap-4 py-4 border-b border-[#0e1428]/8 last:border-b-0"
              >
                {/* Date */}
                <span className="font-ui text-[0.75rem] text-[#0e1428]/40 tabular-nums w-[90px] shrink-0 pt-0.5">
                  {event.startDate
                    ? new Date(event.startDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })
                    : ""}
                </span>

                {/* Event content */}
                <div>
                  <NextLink
                    href={`/towns/${slug}/timeline/${event.id}`}
                    className="no-underline font-editorial text-[1rem] text-[#0e1428] hover:text-[#c8222a] transition-colors"
                  >
                    {event.name}
                  </NextLink>
                  {event.roleInEvent && (
                    <span className="ml-2 font-ui text-[0.7rem] uppercase text-[#0e1428]/40">
                      ({event.roleInEvent})
                    </span>
                  )}
                  {event.summary && (
                    <p className="font-editorial text-[0.875rem] text-[#0e1428]/60 leading-relaxed mt-1">
                      {event.summary}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Stories */}
      {person.stories.length > 0 && (
        <section className="pt-16 md:pt-20">
          <div className="border-b border-[#0e1428]/10 mb-6">
            <h2 className="font-display text-[0.9rem] tracking-[0.15em] uppercase text-[#0e1428]/30 mb-4">
              Stories
            </h2>
          </div>
          <div className="space-y-0">
            {person.stories.map((story) => (
              <NextLink
                key={story.id}
                href={`/towns/${slug}/stories/${story.id}`}
                className="no-underline block py-4 border-b border-[#0e1428]/8 last:border-b-0 group"
              >
                <p className="font-editorial text-[1rem] text-[#0e1428] group-hover:text-[#c8222a] transition-colors">
                  {story.title}
                </p>
                {story.excerpt && (
                  <p className="mt-1 font-editorial text-[0.875rem] text-[#0e1428]/60 leading-relaxed">
                    {story.excerpt}
                  </p>
                )}
              </NextLink>
            ))}
          </div>
        </section>
      )}

      {/* Back nav */}
      <div className="mt-12 pt-8 border-t border-[#0e1428]/10">
        <NextLink
          href={`/towns/${slug}/people`}
          className="no-underline font-ui text-[0.72rem] tracking-[0.08em] uppercase text-[#0e1428]/50 hover:text-[#c8222a] transition-colors"
        >
          &larr; Back to people
        </NextLink>
      </div>
    </PageShell>
  );
}
