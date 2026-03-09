import { notFound } from "next/navigation";
import { getTown, getTownPersonDetail } from "@/lib/api";
import {
  PageShell,
  PageHeader,
  EditorialSection,
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

  const lifespan = person.birthYear && person.deathYear
    ? `${person.birthYear}–${person.deathYear}`
    : person.birthYear
      ? `b. ${person.birthYear}`
      : null;

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
          <p className="font-heading font-bold text-[1.1rem] text-navy mb-1">
            {lifespan}
          </p>
        )}
        {person.roles.length > 0 && (
          <p className="font-condensed uppercase tracking-wide text-[0.7rem] text-slate mb-0">
            {person.roles.join(" · ")}
          </p>
        )}
        <div className="h-px bg-crimson w-12 my-6" />
      </div>

      <Prose>
        {person.bioLong ? (
          person.bioLong.split("\n\n").map((p, i) => <p key={i}>{p}</p>)
        ) : (
          <p>{person.bioShort}</p>
        )}
      </Prose>

      {person.events.length > 0 && (
        <EditorialSection id="in-town" title={`In ${town.name}`}>
          <ol className="space-y-0">
            {person.events
              .sort((a, b) => {
                if (!a.startDate) return 1;
                if (!b.startDate) return -1;
                return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
              })
              .map((event) => (
                <li
                  key={event.id}
                  className="flex gap-4 py-4 border-b border-border-light last:border-b-0"
                >
                  {/* Crimson dot */}
                  <span className="w-2 h-2 bg-crimson rounded-full shrink-0 mt-2" aria-hidden="true" />

                  {/* Date */}
                  <span className="font-condensed text-[0.75rem] text-slate w-[90px] shrink-0 tabular-nums pt-0.5">
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
                      className="no-underline font-heading font-semibold text-[1rem] text-navy hover:text-crimson transition-colors"
                    >
                      {event.name}
                    </NextLink>
                    {event.roleInEvent && (
                      <span className="ml-2 font-condensed text-[0.7rem] text-slate uppercase tracking-wide">
                        ({event.roleInEvent})
                      </span>
                    )}
                    <p className="font-sans text-[0.875rem] text-slate leading-relaxed mt-1">
                      {event.summary}
                    </p>
                  </div>
                </li>
              ))}
          </ol>
        </EditorialSection>
      )}

      {person.stories.length > 0 && (
        <EditorialSection id="stories" title="Stories">
          <div className="space-y-4">
            {person.stories.map((story) => (
              <NextLink
                key={story.id}
                href={`/towns/${slug}/stories/${story.id}`}
                className="no-underline block py-4 border-b border-border-light last:border-b-0 group"
              >
                <p className="font-heading font-semibold text-[1rem] text-navy group-hover:text-crimson transition-colors">
                  {story.title}
                </p>
                <p className="mt-1 font-sans text-[0.875rem] text-slate leading-relaxed">
                  {story.excerpt}
                </p>
              </NextLink>
            ))}
          </div>
        </EditorialSection>
      )}

      <div className="mt-12 pt-8 border-t border-border-light">
        <NextLink
          href={`/towns/${slug}/people`}
          className="no-underline font-condensed font-bold text-[0.72rem] tracking-[0.08em] uppercase text-navy hover:text-crimson transition-colors"
        >
          &larr; Back to people
        </NextLink>
      </div>
    </PageShell>
  );
}
