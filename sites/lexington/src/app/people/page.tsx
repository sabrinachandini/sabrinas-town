export const dynamic = "force-dynamic";

import { getPeople } from "@/lib/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "People of Lexington — The Faces of April 19, 1775",
  description:
    "The people of Lexington's Revolutionary War history — soldiers, ministers, witnesses, and those history almost forgot. Every person links to their story.",
};

const FEATURED_SLUGS = [
  "john-parker",
  "paul-revere",
  "william-prescott",
  "elizabeth-clarke",
  "prince-estabrook",
];

const ROLE_COLOR: Record<string, string> = {
  MILITIA_OFFICER:  "text-crimson-ink",
  MILITIA_MEMBER:   "text-crimson-ink",
  MESSENGER:        "text-blue",
  MINISTER:         "text-blue",
  WITNESS:          "text-slate",
  CIVILIAN:         "text-slate",
};

function roleLabel(roles: string[]): string {
  if (!roles.length) return "";
  return roles
    .slice(0, 2)
    .map((r) => r.replace(/_/g, " ").toLowerCase().replace(/^\w/, (c) => c.toUpperCase()))
    .join(" · ");
}

export default async function PeoplePage() {
  const people = await getPeople();

  // Sort: featured first, then alphabetical
  const featured = FEATURED_SLUGS
    .map((slug) => people.find((p) => p.slug === slug))
    .filter(Boolean) as typeof people;
  const rest = people.filter((p) => !FEATURED_SLUGS.includes(p.slug ?? ""));

  return (
    <div className="bg-cream">
      {/* Page header */}
      <div className="section-border bg-navy text-cream">
        <div className="max-w-wide mx-auto px-5 pt-12 pb-10">
          <div className="font-ui text-[11px] tracking-[0.3em] uppercase text-gold font-medium mb-4">
            {people.length} people documented
          </div>
          <h1 className="font-condensed text-[clamp(3rem,8vw,6rem)] uppercase leading-none text-cream mb-4">
            The Faces of<br />
            <span className="text-gold">April 19</span>
          </h1>
          <p className="font-ui text-base text-cream/70 max-w-xl leading-relaxed">
            Soldiers, ministers, alarm riders, witnesses, and those history almost forgot.
            Every person here connects to the sites where their story happened.
          </p>
        </div>
      </div>

      {/* Featured portraits — equal billing */}
      {featured.length > 0 && (
        <section aria-label="Featured figures" className="section-border">
          <div className="max-w-wide mx-auto px-5 py-12">
            <div className="font-ui text-[11px] tracking-[0.25em] uppercase text-slate font-medium mb-6">
              Central figures
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {featured.map((person) => (
                <a
                  key={person.id}
                  href={person.slug ? `/people/${person.slug}` : undefined}
                  className="group block border border-[#ddd8ce] hover:border-crimson bg-paper transition-colors"
                >
                  {/* Portrait placeholder / image */}
                  <div className="aspect-[3/4] bg-navy/5 overflow-hidden relative">
                    {person.imageUrl ? (
                      <img
                        src={person.imageUrl}
                        alt={`Portrait of ${person.name}`}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-end p-4 bg-gradient-to-t from-navy/80 to-transparent">
                        <span
                          className="font-condensed text-6xl text-cream/20 leading-none select-none"
                          aria-hidden="true"
                        >
                          {person.name.split(" ").pop()?.[0] ?? "?"}
                        </span>
                      </div>
                    )}
                    {/* Name overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-4">
                      <div className="font-condensed text-xl text-cream leading-tight">
                        {person.name}
                      </div>
                    </div>
                  </div>
                  {/* Card body */}
                  <div className="p-4">
                    {person.roles.length > 0 && (
                      <div className={`font-ui text-[11px] tracking-[0.15em] uppercase font-medium mb-2 ${ROLE_COLOR[person.roles[0]] ?? "text-slate"}`}>
                        {roleLabel(person.roles)}
                      </div>
                    )}
                    <p className="font-ui text-xs text-slate leading-relaxed line-clamp-3">
                      {person.bioShort}
                    </p>
                    {(person.birthYear || person.deathYear) && (
                      <div className="font-ui text-[11px] text-slate/50 mt-2">
                        {person.birthYear ?? "?"}–{person.deathYear ?? "?"}
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All other people */}
      {rest.length > 0 && (
        <section aria-label="All documented figures" className="section-border">
          <div className="max-w-wide mx-auto px-5 py-12">
            <div className="font-ui text-[11px] tracking-[0.25em] uppercase text-slate font-medium mb-6">
              All documented figures — {rest.length} more
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((person) => (
                <a
                  key={person.id}
                  href={person.slug ? `/people/${person.slug}` : undefined}
                  className="group flex gap-4 p-4 border border-[#ddd8ce] hover:border-crimson bg-cream transition-colors"
                >
                  {/* Monogram avatar */}
                  <div
                    className="w-12 h-12 shrink-0 bg-navy/10 flex items-center justify-center font-condensed text-xl text-navy/40 group-hover:bg-crimson/10 group-hover:text-crimson transition-colors"
                    aria-hidden="true"
                  >
                    {person.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-ui font-medium text-sm text-ink group-hover:text-crimson transition-colors leading-tight">
                      {person.name}
                    </div>
                    {person.roles.length > 0 && (
                      <div className="font-ui text-[11px] tracking-[0.1em] uppercase text-slate mt-0.5">
                        {roleLabel(person.roles)}
                      </div>
                    )}
                    <p className="font-ui text-xs text-slate mt-1 leading-snug line-clamp-2">
                      {person.bioShort}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {people.length === 0 && (
        <div className="max-w-wide mx-auto px-5 py-20 text-center">
          <p className="font-ui text-sm text-slate">People loading — check back soon.</p>
        </div>
      )}
    </div>
  );
}
