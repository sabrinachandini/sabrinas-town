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

  const title = person.name;
  const description = person.bioShort.slice(0, 160);
  const url = `https://sabrinas-town.vercel.app/towns/${slug}/people/${personSlug}`;
  return {
    title,
    description,
    openGraph: { title, description, url },
    twitter: { card: "summary_large_image" as const, title, description },
    alternates: { canonical: url },
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
          <p className="font-display text-[2rem] text-crimson leading-none">
            {lifespan}
          </p>
        )}
        {person.roles.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {person.roles.map((role) => (
              <a
                key={role}
                href={`/towns?q=${encodeURIComponent(role)}`}
                className="no-underline font-ui text-[9px] tracking-[0.1em] uppercase text-crimson border-2 border-crimson/30 px-2.5 py-1 hover:bg-crimson hover:text-cream hover:border-crimson transition-colors"
              >
                {role}
              </a>
            ))}
          </div>
        )}
        <div className="w-12 h-[3px] bg-crimson my-6" />
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
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
            In {town.name}
          </p>
          <ol className="space-y-0">
            {sortedEvents.map((event) => (
              <li
                key={event.id}
                className="flex gap-4 py-4 border-b border-ink/8 last:border-b-0"
              >
                {/* Date */}
                <span className="font-ui text-[11px] text-ink/40 tabular-nums w-[90px] shrink-0 pt-0.5">
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
                    className="no-underline font-editorial text-[18px] text-ink hover:text-crimson transition-colors"
                  >
                    {event.name}
                  </NextLink>
                  {event.roleInEvent && (
                    <span className="ml-2 font-ui text-[11px] uppercase text-ink/40">
                      ({event.roleInEvent})
                    </span>
                  )}
                  {event.summary && (
                    <p className="font-editorial text-[0.875rem] text-ink/60 leading-relaxed mt-1">
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
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
            Stories
          </p>
          <div className="space-y-0">
            {person.stories.map((story) => (
              <NextLink
                key={story.id}
                href={`/towns/${slug}/stories/${story.id}`}
                className="no-underline block py-4 border-b border-ink/8 last:border-b-0 group"
              >
                <p className="font-editorial text-[18px] text-ink group-hover:text-crimson transition-colors">
                  {story.title}
                </p>
                {story.excerpt && (
                  <p className="mt-1 font-editorial text-[0.875rem] text-ink/60 leading-relaxed">
                    {story.excerpt}
                  </p>
                )}
              </NextLink>
            ))}
          </div>
        </section>
      )}

      {/* Back nav */}
      <div className="mt-12 pt-8 border-t border-ink/10">
        <NextLink
          href={`/towns/${slug}/people`}
          className="no-underline font-ui text-[9px] tracking-[0.2em] uppercase text-ink/40 hover:text-crimson transition-colors"
        >
          &larr; Back to people
        </NextLink>
      </div>
    </PageShell>
  );
}
