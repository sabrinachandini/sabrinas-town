import { getAllPeople } from "@/lib/api";
import NextLink from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "People of the Revolution | History is for Everyone",
  description: "Patriots, Loyalists, soldiers, and civilians who shaped the American Revolution — explored through the towns where history happened.",
  openGraph: {
    title: "People of the Revolution | History is for Everyone",
    description: "Patriots, Loyalists, soldiers, and civilians who shaped the American Revolution.",
    url: "https://sabrinas-town.vercel.app/people",
  },
  alternates: { canonical: "https://sabrinas-town.vercel.app/people" },
};

const ROLE_GROUPS = [
  { label: "Patriots & Founders", match: ["Patriot", "Founder", "Delegate", "Governor", "General", "Continental"], color: "#1a3a72" },
  { label: "Military Figures", match: ["Officer", "Soldier", "Commander", "Admiral", "Colonel", "Major", "Captain", "Militia"], color: "#cc3322" },
  { label: "Loyalists & British", match: ["Loyalist", "British", "Tory", "Royal"], color: "#14100a" },
  { label: "Women & Civilians", match: ["Civilian", "Spy", "Nurse", "Writer", "Poet", "Printer"], color: "#4a7c3f" },
  { label: "Other Figures", match: [], color: "#5a4a2a" },
];

function getRoleGroup(roles: string[]): string {
  for (const group of ROLE_GROUPS) {
    if (group.match.length === 0) continue;
    if (roles.some((r) => group.match.some((m) => r.includes(m)))) return group.label;
  }
  return "Other Figures";
}

export default async function PeoplePage() {
  const people = await getAllPeople({ limit: 500 });

  const grouped: Record<string, typeof people> = {};
  for (const group of ROLE_GROUPS) grouped[group.label] = [];
  for (const person of people) {
    const group = getRoleGroup(person.roles);
    grouped[group].push(person);
  }

  const totalWithImage = people.filter((p) => p.imageUrl).length;
  const activeGroups = ROLE_GROUPS.filter((g) => (grouped[g.label]?.length ?? 0) > 0);

  // Pick featured figures: one per group with an image
  const featured = ROLE_GROUPS.flatMap((g) =>
    (grouped[g.label] ?? []).filter((p) => p.imageUrl).slice(0, 1)
  ).slice(0, 4);

  return (
    <div className="bg-[#f2e6c8] min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-[#14100a] border-b-4 border-[#cc3322] pt-16 pb-0 px-8 md:px-16 relative overflow-hidden">
        {/* Ghost word */}
        <div
          aria-hidden
          className="absolute right-[-0.04em] bottom-[-0.12em] font-display leading-none text-white/[0.035] pointer-events-none select-none"
          style={{ fontSize: "clamp(9rem,20vw,17rem)" }}
        >
          PEOPLE
        </div>
        {/* Decorative rule */}
        <svg className="absolute top-0 left-[30%] h-full w-[1px] pointer-events-none" viewBox="0 0 1 400" fill="none" preserveAspectRatio="none" aria-hidden>
          <line x1="0.5" y1="0" x2="0.5" y2="400" stroke="rgba(232,184,75,0.07)" strokeWidth="1" />
        </svg>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 font-ui text-[9px] uppercase tracking-[0.2em] text-[#f2e6c8]/25 mb-10">
            <NextLink href="/" className="no-underline hover:text-[#f2e6c8]/50 transition-colors">Home</NextLink>
            <span>/</span>
            <span className="text-[#f2e6c8]/45">People</span>
          </nav>

          <div className="pb-16">
            <p className="font-ui text-[9px] uppercase tracking-[0.28em] text-[#e8b84b] mb-5">Historical Figures</p>
            <h1
              className="font-display text-[#f2e6c8] leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(52px,10vw,130px)" }}
            >
              People of the<br />Revolution
            </h1>
            <p className="font-editorial italic text-[19px] text-[#f2e6c8]/50 max-w-[540px] leading-[1.65] mt-6">
              {people.length} historical figures — Patriots, Loyalists, soldiers, diplomats, and the civilians who lived through it all.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-[#cc3322] border-b-4 border-[#14100a] py-4 px-8 md:px-16 flex flex-wrap gap-8 items-center">
        {[
          { n: people.length, label: "People" },
          { n: totalWithImage, label: "With Portraits" },
          { n: activeGroups.length, label: "Categories" },
        ].map((s) => (
          <div key={s.label} className="flex items-baseline gap-2">
            <span className="font-display text-[2.2rem] text-[#e8b84b] leading-none">{s.n}</span>
            <span className="font-ui text-[9px] uppercase tracking-[0.1em] text-white/60">{s.label}</span>
          </div>
        ))}
        <div className="ml-auto hidden md:flex items-center gap-6">
          {activeGroups.map((g) => (
            <a key={g.label} href={`#${g.label.replace(/\s+/g, "-").toLowerCase()}`} className="no-underline font-ui text-[8px] uppercase tracking-[0.12em] text-white/50 hover:text-white transition-colors whitespace-nowrap">
              {g.label.split(" ")[0]} ({grouped[g.label]?.length ?? 0})
            </a>
          ))}
        </div>
      </section>

      {/* ── Featured portraits strip ── */}
      {featured.length > 0 && (
        <section className="border-b-4 border-[#14100a] overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {featured.map((person, i) => (
              <NextLink
                key={person.id}
                href={person.slug ? `/people/${person.slug}` : `/people/${person.id}`}
                className="no-underline group relative overflow-hidden aspect-[3/4] flex items-end border-r-2 border-[#14100a] last:border-r-0"
              >
                <Image
                  src={person.imageUrl!}
                  alt={person.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14100a]/90 via-[#14100a]/20 to-transparent" />
                <div className="relative z-10 p-5 w-full">
                  <p className="font-ui text-[8px] uppercase tracking-[0.18em] text-[#e8b84b] mb-1">
                    {person.roles[0]}
                  </p>
                  <p className="font-display text-[#f2e6c8] text-[clamp(16px,2vw,24px)] leading-tight group-hover:text-[#e8b84b] transition-colors">
                    {person.name}
                  </p>
                  {(person.birthYear || person.deathYear) && (
                    <p className="font-ui text-[9px] text-[#f2e6c8]/35 mt-1">
                      {person.birthYear ?? "?"}{person.deathYear ? `–${person.deathYear}` : ""}
                    </p>
                  )}
                </div>
                {/* Index number stamp */}
                <div
                  aria-hidden
                  className="absolute top-4 right-4 font-display text-[5rem] text-white/[0.05] leading-none pointer-events-none select-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </NextLink>
            ))}
          </div>
        </section>
      )}

      {/* ── People by group ── */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 space-y-20">
        {ROLE_GROUPS.map((group) => {
          const members = grouped[group.label] ?? [];
          if (members.length === 0) return null;
          const groupId = group.label.replace(/\s+/g, "-").toLowerCase();
          return (
            <section key={group.label} id={groupId}>
              {/* Section header */}
              <div className="border-t-[3px] border-[#14100a] pt-6 mb-8 flex items-end justify-between gap-4">
                <div>
                  <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:block"
                    style={{ color: group.color }}
                  >
                    <span className="before:bg-current" style={{ display: "contents" }}>
                      {group.label}
                    </span>
                  </p>
                </div>
                <span
                  className="font-display leading-none"
                  style={{ fontSize: "clamp(2.5rem,5vw,4rem)", color: `${group.color}18` }}
                >
                  {members.length}
                </span>
              </div>

              {/* Card grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#14100a]/12">
                {members.map((person) => (
                  <NextLink
                    key={person.id}
                    href={person.slug ? `/people/${person.slug}` : `/people/${person.id}`}
                    className="no-underline bg-[#f2e6c8] hover:bg-[#1a3a72] group transition-colors duration-150 flex gap-0 items-stretch"
                  >
                    {/* Portrait column */}
                    <div className="w-[72px] flex-shrink-0 overflow-hidden bg-[#14100a]/6 group-hover:bg-[#14100a]/30 transition-colors relative">
                      {person.imageUrl ? (
                        <Image
                          src={person.imageUrl}
                          alt={person.name}
                          fill
                          sizes="72px"
                          className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                        />
                      ) : (
                        <div className="w-full h-full min-h-[88px] flex items-center justify-center">
                          <span className="font-display text-[32px] text-[#14100a]/15 group-hover:text-[#f2e6c8]/15 transition-colors">
                            {person.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Text column */}
                    <div className="flex-1 min-w-0 p-4">
                      <p className="font-display text-[17px] text-[#14100a] group-hover:text-[#f2e6c8] transition-colors leading-tight">
                        {person.name}
                      </p>
                      {(person.birthYear || person.deathYear) && (
                        <p className="font-ui text-[9px] text-[#14100a]/35 group-hover:text-[#f2e6c8]/35 transition-colors mt-0.5 tabular-nums">
                          {person.birthYear ?? "?"}{person.deathYear ? `–${person.deathYear}` : ""}
                        </p>
                      )}
                      <p
                        className="font-ui text-[8px] uppercase tracking-[0.1em] mt-2 transition-colors group-hover:text-[#e8b84b]"
                        style={{ color: group.color }}
                      >
                        {person.roles.slice(0, 2).join(" · ")}
                      </p>
                      {person.primaryTown && (
                        <p className="font-ui text-[9px] text-[#14100a]/30 group-hover:text-[#f2e6c8]/30 transition-colors mt-1.5">
                          {person.primaryTown.name}, {person.primaryTown.state}
                        </p>
                      )}
                    </div>
                  </NextLink>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
