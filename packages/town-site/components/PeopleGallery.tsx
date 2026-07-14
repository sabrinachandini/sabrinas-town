export interface GalleryPerson {
  id: string;
  name: string;
  slug: string;
  role?: string;
  bio?: string;
  imageUrl?: string;
}

interface PeopleGalleryProps {
  people: GalleryPerson[];
  /** Section heading. Defaults to "People". */
  title?: string;
}

/**
 * People gallery — 3:4 portrait cards with equal billing (no ranking, no
 * "featured" styling that dominates). Renders a graceful empty state.
 * Meant to be placed inside a <Container>.
 */
export function PeopleGallery({ people, title = "People" }: PeopleGalleryProps) {
  return (
    <section className="py-14">
      <h2 className="font-condensed text-2xl uppercase tracking-wide mb-8">{title}</h2>

      {people.length === 0 ? (
        <p className="font-body text-sm text-text-muted">
          People connected to this town will appear here soon.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {people.map((person) => (
            <a
              key={person.id}
              href={person.slug ? `/people/${person.slug}` : undefined}
              className="group block"
            >
              <div className="aspect-[3/4] bg-bg-secondary rounded-lg border border-border-light overflow-hidden group-hover:border-red transition-colors">
                {person.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={person.imageUrl}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-condensed text-4xl text-text-muted/40 uppercase">
                    {person.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="font-body font-semibold text-text-primary group-hover:text-red transition-colors mt-2 leading-snug">
                {person.name}
              </div>
              {person.role && (
                <div className="font-body text-xs text-red uppercase tracking-wide mt-0.5">
                  {person.role}
                </div>
              )}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
