import NextLink from "next/link";

interface ComingSoonProps {
  slug: string;
  section?: string;
}

function formatTownName(slug: string): string {
  const parts = slug.split("-");
  const stateAbbr = parts.pop()?.toUpperCase() ?? "";
  const name = parts
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return `${name}, ${stateAbbr}`;
}

export function ComingSoon({ slug, section }: ComingSoonProps) {
  const townName = formatTownName(slug);

  return (
    <main>
      {/* Ink hero */}
      <section className="bg-[#1a3a72] border-b-4 border-[#cc3322] py-20 px-6 sm:px-16 relative overflow-hidden">
        <div aria-hidden className="absolute right-[-10px] top-[-20px] font-display leading-none pointer-events-none select-none text-white/[0.04]" style={{ fontSize: "clamp(140px,28vw,380px)", letterSpacing: "-0.05em" }}>
          Soon
        </div>
        <svg className="absolute top-5 right-5 pointer-events-none" width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden style={{ opacity: 0.2 }}>
          <path d="M9 21 L10.2 25.5 L15 25.5 L11.2 28.5 L12.6 33 L9 30.3 L5.4 33 L6.8 28.5 L3 25.5 L7.8 25.5 Z" fill="#4A6A9B" />
          <path d="M32 8 L33 11 L36 11 L33.8 12.8 L34.8 16 L32 14.2 L29.2 16 L30.2 12.8 L28 11 L31 11 Z" fill="#f2e6c8" />
        </svg>
        <div className="absolute top-10 right-10 rotate-[4deg] font-ui font-bold text-[11px] tracking-[0.12em] uppercase text-[rgba(242,230,200,0.5)] border-[2.5px] border-[rgba(242,230,200,0.25)] px-3.5 py-2 hidden sm:block">
          In Research
        </div>
        <div className="relative z-10 max-w-[720px]">
          <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[rgba(242,230,200,0.4)] flex items-center gap-2.5 mb-8">
            <span className="w-5 h-[2px] bg-[rgba(242,230,200,0.3)] block" />
            {section ? section : "Town Profile"}
          </p>
          <h1 className="font-display text-[#f2e6c8] leading-[0.92] tracking-[-0.04em]" style={{ fontSize: "clamp(40px,8vw,100px)" }}>
            {townName}
          </h1>
          <div className="w-12 h-[3px] bg-[#cc3322] my-6" />
          <p className="font-editorial italic font-light text-[18px] sm:text-[20px] leading-[1.65] text-[rgba(242,230,200,0.65)] max-w-[540px]">
            {section
              ? `The ${section.toLowerCase()} section for ${townName} is being researched and verified from primary sources.`
              : `The full profile for ${townName} is being researched and verified from primary sources.`}
          </p>
          <svg width="220" height="10" viewBox="0 0 220 10" style={{ display: "block", marginTop: "24px" }} aria-hidden>
            <path d="M0 6 Q14 1 27 6 Q41 11 55 5 Q68 0 82 5 Q96 10 110 5 Q123 1 137 5 Q151 10 165 5 Q178 1 192 5 Q206 10 220 4" stroke="rgba(242,230,200,0.25)" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </section>

      {/* Cream body */}
      <section className="bg-[#f2ece0] py-16 px-6 sm:px-16 border-b-4 border-[#14100a]">
        <div className="mx-auto max-w-[720px]">
          <p className="font-editorial text-[21px] leading-[1.75] text-[#14100a] mb-10">
            We&rsquo;re building this town&rsquo;s Revolutionary story from the ground up — primary documents, local historical society records, and academic scholarship. Check back soon.
          </p>

          <div className="flex flex-wrap gap-4">
            <NextLink
              href="/towns"
              className="no-underline inline-block bg-[#1a3a72] text-[#f2e6c8] font-ui text-[11px] font-bold tracking-[0.18em] uppercase px-8 py-4 border-2 border-[#14100a] hover:bg-[#cc3322] hover:border-[#cc3322] transition-colors"
            >
              Browse All Towns →
            </NextLink>
            <NextLink
              href={`/partner/inquire?town=${slug}`}
              className="no-underline inline-block bg-transparent text-[#14100a] font-ui text-[11px] font-bold tracking-[0.18em] uppercase px-8 py-4 border-2 border-[rgba(20,16,10,0.3)] hover:border-[#cc3322] hover:text-[#cc3322] transition-colors"
            >
              Help Us Build This →
            </NextLink>
          </div>

          <div className="mt-10 pt-8 border-t border-[rgba(20,16,10,0.1)]">
            <p className="font-ui text-[11px] text-[rgba(20,16,10,0.4)]">
              Work for this town&rsquo;s tourism office or historical society?{" "}
              <NextLink href={`/partner/inquire?town=${slug}`} className="text-[#1a3a72] hover:text-[#cc3322] transition-colors no-underline border-b border-[rgba(26,58,114,0.3)]">
                Partner with us
              </NextLink>{" "}
              to contribute sources and shape how the story is told.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
