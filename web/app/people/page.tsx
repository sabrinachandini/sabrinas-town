import { getAllPeople } from "@/lib/api";
import NextLink from "next/link";
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
  { label: "Patriots & Founders", match: ["Patriot", "Founder", "Delegate", "Governor", "General", "Continental"] },
  { label: "Military Figures", match: ["Officer", "Soldier", "Commander", "Admiral", "Colonel", "Major", "Captain", "Militia"] },
  { label: "Loyalists & British", match: ["Loyalist", "British", "Tory", "Royal"] },
  { label: "Women & Civilians", match: ["Civilian", "Spy", "Nurse", "Writer", "Poet", "Printer"] },
  { label: "Other Figures", match: [] },
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

  return (
    <div className="bg-cream min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-[#1a3a72] border-b-4 border-[#14100a] py-20 px-8 md:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-[-0.05em] bottom-[-0.2em] font-display leading-none text-white/[0.04] pointer-events-none select-none" style={{ fontSize: "clamp(10rem,22vw,18rem)" }}>
          PEOPLE
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 font-ui text-[9px] uppercase tracking-[0.2em] text-cream/30 mb-8">
            <NextLink href="/" className="no-underline hover:text-cream/60 transition-colors">Home</NextLink>
            <span>/</span>
            <span className="text-cream/55">People</span>
          </nav>
          <p className="font-ui text-[9px] uppercase tracking-[0.28em] text-[#e8b84b] mb-4">Historical Figures</p>
          <h1 className="font-display text-cream leading-[0.88] tracking-[-0.02em]" style={{ fontSize: "clamp(48px,9vw,120px)" }}>
            People of the<br />Revolution
          </h1>
          <p className="font-editorial italic text-[18px] text-cream/60 max-w-[560px] leading-[1.65] mt-6">
            {people.length} historical figures — Patriots, Loyalists, soldiers, diplomats, and the civilians who lived through it all.
          </p>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="bg-[#cc3322] border-b-4 border-[#14100a] py-4 px-8 md:px-16 flex flex-wrap gap-8 items-center">
        {[
          { n: people.length, label: "People" },
          { n: totalWithImage, label: "With Portraits" },
          { n: ROLE_GROUPS.filter((g) => (grouped[g.label]?.length ?? 0) > 0).length, label: "Categories" },
        ].map((s) => (
          <div key={s.label} className="flex items-baseline gap-2">
            <span className="font-display text-[2rem] text-[#e8b84b] leading-none">{s.n}</span>
            <span className="font-ui text-[9px] uppercase tracking-[0.1em] text-white/60">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── People by group ── */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 space-y-20">
        {ROLE_GROUPS.map((group) => {
          const members = grouped[group.label] ?? [];
          if (members.length === 0) return null;
          return (
            <section key={group.label}>
              <div className="border-t-[3px] border-[#14100a] pt-6 mb-8 flex items-baseline justify-between">
                <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-[#cc3322] flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-[#cc3322] before:block">
                  {group.label}
                </p>
                <span className="font-ui text-[9px] uppercase tracking-[0.1em] text-[#14100a]/30">{members.length}</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#14100a]/10">
                {members.map((person) => (
                  <NextLink
                    key={person.id}
                    href={person.slug ? `/people/${person.slug}` : `/people/${person.id}`}
                    className="no-underline bg-cream hover:bg-[#1a3a72] group transition-colors p-5 flex gap-4 items-start"
                  >
                    {/* Portrait thumbnail */}
                    {person.imageUrl ? (
                      <img
                        src={person.imageUrl}
                        alt={person.name}
                        className="w-[52px] h-[64px] object-cover object-top flex-shrink-0 grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100"
                      />
                    ) : (
                      <div className="w-[52px] h-[64px] flex-shrink-0 bg-[#14100a]/8 flex items-center justify-center">
                        <span className="font-display text-[28px] text-[#14100a]/20 group-hover:text-cream/20 transition-colors">
                          {person.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="font-display text-[18px] text-[#14100a] group-hover:text-cream transition-colors leading-tight">
                        {person.name}
                      </p>
                      {(person.birthYear || person.deathYear) && (
                        <p className="font-ui text-[9px] text-[#14100a]/40 group-hover:text-cream/40 transition-colors mt-0.5">
                          {person.birthYear ?? "?"}{person.deathYear ? `–${person.deathYear}` : ""}
                        </p>
                      )}
                      <p className="font-ui text-[9px] uppercase tracking-[0.08em] text-[#cc3322] group-hover:text-[#e8b84b] transition-colors mt-1">
                        {person.roles.slice(0, 2).join(", ")}
                      </p>
                      {person.primaryTown && (
                        <p className="font-ui text-[9px] text-[#14100a]/30 group-hover:text-cream/30 transition-colors mt-1">
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
