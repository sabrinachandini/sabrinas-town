import NextLink from "next/link";

/* ── Data ──────────────────────────────────────────────────────── */

const ESSENTIAL_TOWNS = [
  { number: 1, slug: "boston-ma",           name: "Boston",       state: "Massachusetts", excerpt: "From the Massacre to the Tea Party — where colonial grievance became organized resistance." },
  { number: 2, slug: "lexington-ma",        name: "Lexington",    state: "Massachusetts", excerpt: "Where the first shots of the Revolution were fired, before dawn, on April 19, 1775." },
  { number: 3, slug: "philadelphia-pa",     name: "Philadelphia", state: "Pennsylvania",  excerpt: "Where the Continental Congress met, the Declaration was signed, and the war was argued into being." },
  { number: 4, slug: "saratoga-springs-ny", name: "Saratoga",     state: "New York",      excerpt: "The turning point. The American victory that brought France into the war." },
  { number: 5, slug: "yorktown-va",         name: "Yorktown",     state: "Virginia",      excerpt: "The siege that ended the war — Cornwallis surrendered here on October 19, 1781." },
  { number: 6, slug: "concord-ma",          name: "Concord",      state: "Massachusetts", excerpt: "The North Bridge fight that turned a skirmish into a war." },
];

const TICKER_TOWNS = [
  "Boston", "Lexington", "Concord", "Philadelphia", "Yorktown", "Saratoga",
  "Trenton", "Valley Forge", "Williamsburg", "Charleston", "Savannah",
  "Newport", "Providence", "Portsmouth", "Exeter", "Albany", "Kingston",
  "Annapolis", "Baltimore", "Wilmington", "Camden", "Cowpens", "Guilford",
  "Crown Point", "Ticonderoga", "West Point", "Princeton", "Morristown",
  "Germantown", "Paoli", "Carlisle", "York", "Cambridge", "Salem",
  "Marblehead", "Plymouth", "Springfield", "Bennington", "Fort Lee",
];

const STATS = [
  { number: "77",      label: "Towns",       detail: "Across 16 original states" },
  { number: "250+",    label: "Years",        detail: "Of living history preserved" },
  { number: "1,000s",  label: "Stories",      detail: "From generals to cobblers" },
  { number: "1",       label: "Network",      detail: "Connecting it all" },
];

const TEACHER_FEATURES = [
  { icon: "📜", title: "Primary Sources", body: "Curated packets with analysis prompts, credibility tiers, and teacher narratives." },
  { icon: "📋", title: "Lesson Plans", body: "Structured for critical thinking, not memorization. Objectives, warm-ups, and differentiation built in." },
  { icon: "🖨️", title: "Print-Ready", body: "Worksheets, quizzes with answer keys, and handouts formatted for the classroom." },
  { icon: "🗺️", title: "16 States", body: "From Massachusetts to the frontier — every theater of the Revolution covered." },
];

/* ── Page ──────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <main>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 1. HERO                                                     */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen border-b-4 border-ink">

        {/* LEFT */}
        <div className="bg-cream px-16 py-20 flex flex-col justify-center">
          <span className="bg-crimson text-cream font-ui text-[9px] tracking-[0.22em] uppercase px-3 py-1.5 -rotate-1 w-fit mb-6 inline-block">
            The American Revolution, Town by Town
          </span>
          <h1 className="font-display leading-[0.92] tracking-tight text-ink" style={{ fontSize: "clamp(60px,10vw,120px)" }}>
            History<br />
            <span className="font-editorial italic text-crimson">is</span><br />
            for<br />
            Everyone
          </h1>
          <p className="font-editorial italic text-[18px] text-ink/60 max-w-[460px] mt-6">
            Seventy-seven towns. Sixteen states. One living network.
          </p>
          <div className="flex flex-wrap items-center mt-8 gap-0">
            <NextLink
              href="/towns"
              className="inline-block px-6 py-3 bg-ink text-cream font-ui font-semibold text-[11px] tracking-[0.2em] uppercase shadow-[4px_4px_0_#c8222a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#c8222a] transition-all duration-100 no-underline"
            >
              Explore the Towns
            </NextLink>
            <NextLink
              href="/teach"
              className="border-2 border-ink text-ink font-ui font-semibold text-[11px] tracking-[0.2em] uppercase px-6 py-3 hover:bg-ink hover:text-cream transition-all duration-100 no-underline inline-block ml-3"
            >
              For Teachers &rarr;
            </NextLink>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-[#1a3a72] border-l-4 border-ink relative overflow-hidden flex flex-col justify-end">
          {/* Ghost year */}
          <div
            className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
            aria-hidden="true"
          >
            <span className="font-display text-white leading-none" style={{ fontSize: "320px", opacity: 0.05 }}>
              1775
            </span>
          </div>

          {/* Abstract SVG */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 600 700"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            {/* Dashed river-like path */}
            <path
              d="M 50 350 Q 200 200 300 350 Q 400 500 550 300"
              stroke="#7eb8e0"
              strokeWidth="1.5"
              strokeDasharray="8 6"
              opacity="0.25"
            />
            {/* Compass crosshair */}
            <line x1="300" y1="200" x2="300" y2="500" stroke="#e8b84b" strokeWidth="0.8" opacity="0.18" />
            <line x1="150" y1="350" x2="450" y2="350" stroke="#e8b84b" strokeWidth="0.8" opacity="0.18" />
            <circle cx="300" cy="350" r="60" stroke="#e8b84b" strokeWidth="0.8" opacity="0.12" />
            <circle cx="300" cy="350" r="120" stroke="#e8b84b" strokeWidth="0.5" opacity="0.07" />
            {/* Red dot cluster */}
            <circle cx="300" cy="350" r="6" fill="#c8222a" opacity="0.7" />
            <circle cx="340" cy="310" r="3" fill="#c8222a" opacity="0.45" />
            <circle cx="260" cy="390" r="3" fill="#c8222a" opacity="0.45" />
            <circle cx="320" cy="400" r="2.5" fill="#c8222a" opacity="0.35" />
            <circle cx="270" cy="320" r="2.5" fill="#c8222a" opacity="0.35" />
            {/* Gold stars */}
            <text x="180" y="200" fill="#e8b84b" fontSize="12" opacity="0.4">&#9733;</text>
            <text x="420" y="480" fill="#e8b84b" fontSize="10" opacity="0.35">&#9733;</text>
            <text x="100" y="500" fill="#e8b84b" fontSize="8" opacity="0.3">&#9733;</text>
            <text x="480" y="160" fill="#e8b84b" fontSize="9" opacity="0.3">&#9733;</text>
            {/* Cream grid */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line key={`hg-${i}`} x1="0" y1={i * 140} x2="600" y2={i * 140} stroke="#f2ece0" strokeWidth="0.4" opacity="0.06" />
            ))}
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={`vg-${i}`} x1={i * 150} y1="0" x2={i * 150} y2="700" stroke="#f2ece0" strokeWidth="0.4" opacity="0.06" />
            ))}
          </svg>

          {/* Floating badge top-right */}
          <div className="absolute top-8 right-8" aria-hidden="true">
            <span className="inline-block bg-[#e8b84b] text-ink font-ui text-[9px] font-semibold tracking-[0.22em] uppercase px-3 py-1.5 border-2 border-ink shadow-[2px_2px_0_#14100a] -rotate-1">
              Since 1775
            </span>
          </div>

          {/* Floating badge bottom-left */}
          <div className="absolute bottom-32 left-8" aria-hidden="true">
            <span className="inline-block bg-[#e8b84b] text-ink font-ui text-[9px] font-semibold tracking-[0.22em] uppercase px-3 py-1.5 border-2 border-ink shadow-[2px_2px_0_#14100a] rotate-1">
              13 Colonies
            </span>
          </div>

          {/* Bottom-anchored stacked type */}
          <div className="relative z-10 px-10 pb-16 pt-8">
            <p className="font-display text-cream leading-[0.92]" style={{ fontSize: "clamp(32px,4vw,54px)" }}>
              77 Towns.<br />One Revolution.
            </p>
            <p className="font-editorial italic text-[16px] mt-3" style={{ color: "rgba(242,236,224,0.58)" }}>
              Walked, sourced, and connected.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 2. STATS RIBBON                                             */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="bg-ink border-b-4 border-crimson flex">
        {STATS.map(({ number, label, detail }) => (
          <div
            key={label}
            className="flex-1 px-8 py-10 border-l border-cream/10 first:border-l-0 group hover:border-t-[3px] hover:border-t-crimson transition-all"
          >
            <div className="font-display text-[48px] text-cream leading-none">{number}</div>
            <div className="font-ui text-[10px] uppercase tracking-[0.2em] text-cream/35 mt-2">{label}</div>
            <div className="font-ui text-[11px] text-cream/20 mt-1">{detail}</div>
          </div>
        ))}
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 3. MANIFESTO                                                */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="bg-crimson border-b-4 border-ink grid grid-cols-1 md:grid-cols-2">

        {/* Left */}
        <div className="px-16 py-20">
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-yellow flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-[#e8b84b] before:block">
            Our Mission
          </p>
          <h2 className="font-display text-cream leading-[0.92]" style={{ fontSize: "clamp(40px,6vw,80px)" }}>
            History isn&apos;t<br />locked in a{" "}
            <span className="inline-block -rotate-[4deg] text-yellow">museum.</span>
          </h2>
        </div>

        {/* Right */}
        <div className="px-16 py-20 relative border-l-4 border-ink/20 overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-cream/10" aria-hidden="true" />
          <div className="absolute -bottom-16 -right-8 w-40 h-40 rounded-full border border-cream/10" aria-hidden="true" />

          <p className="font-editorial italic text-[16px] text-cream/80 leading-[1.8] mb-4 relative z-10">
            It&apos;s in a harbor where tea was dumped on a December night. It&apos;s on a green
            where seventy-seven men stood at dawn, outnumbered. It&apos;s in a courthouse, a
            churchyard, a field that still holds the dead.
          </p>
          <p className="font-editorial italic text-[16px] text-cream/80 leading-[1.8] relative z-10">
            Every claim we make cites its source. Every source is graded by credibility tier.
            No myths. No paywall. History is for everyone — we mean it.
          </p>
          <NextLink
            href="/about"
            className="bg-cream text-ink font-ui font-semibold text-[11px] tracking-[0.2em] uppercase px-6 py-3 shadow-[4px_4px_0_#0e1428] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-100 no-underline inline-block mt-8 relative z-10"
          >
            Our Story &rarr;
          </NextLink>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 4. TOWNS                                                    */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#f8f0d8] border-b-4 border-ink grid grid-cols-1 md:grid-cols-2">

        {/* Left */}
        <div className="px-16 py-20">
          <p className="font-ui text-[9px] font-semibold tracking-[0.28em] uppercase text-crimson flex items-center gap-2 mb-5 before:content-[''] before:w-4 before:h-[2px] before:bg-crimson before:block">
            Start Here
          </p>
          <h2 className="font-display text-[44px] text-ink leading-none mb-8">Essential Towns</h2>

          <ul className="columns-1 sm:columns-2 gap-x-8">
            {ESSENTIAL_TOWNS.map((town) => (
              <li key={town.slug} className="break-inside-avoid">
                <NextLink
                  href={`/towns/${town.slug}`}
                  className="no-underline flex items-center gap-2 py-2.5 border-b border-ink/[0.08] hover:bg-[#1a3a72] hover:text-cream px-2 -mx-2 transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" aria-hidden="true" />
                  <span className="font-editorial text-[15px] text-ink group-hover:text-cream">
                    {town.name}
                  </span>
                </NextLink>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <NextLink
              href="/towns"
              className="inline-block px-6 py-3 bg-ink text-cream font-ui font-semibold text-[11px] tracking-[0.2em] uppercase shadow-[4px_4px_0_#c8222a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#c8222a] transition-all duration-100 no-underline"
            >
              All 77 Towns &rarr;
            </NextLink>
          </div>
        </div>

        {/* Right */}
        <div className="bg-[#1a3a72] border-l-4 border-ink px-10 py-16 relative overflow-hidden flex flex-col justify-end">
          {/* Ghost state abbrev */}
          <div className="absolute top-8 right-8 select-none pointer-events-none font-display text-white/[0.06] leading-none" style={{ fontSize: "160px" }} aria-hidden="true">
            MA
          </div>

          <div className="relative z-10">
            <div className="mb-3">
              <span className="inline-block bg-[#e8b84b] text-ink font-ui text-[9px] font-semibold tracking-[0.22em] uppercase px-3 py-1.5 border-2 border-ink shadow-[2px_2px_0_#14100a] -rotate-1">
                Massachusetts
              </span>
            </div>
            <p className="font-display text-cream leading-[0.88]" style={{ fontSize: "80px" }}>
              Boston
            </p>
            <p className="font-editorial italic text-cream/70 text-[15px] mt-4 leading-relaxed max-w-[340px]">
              From the Massacre to the Tea Party — where colonial grievance became organized resistance.
            </p>
            <NextLink
              href="/towns/boston-ma"
              className="font-ui text-[11px] uppercase tracking-[0.2em] text-yellow hover:text-cream transition-colors mt-6 inline-block no-underline"
            >
              Explore Boston &rarr;
            </NextLink>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 5. QUOTE                                                    */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#2a5c45] border-b-4 border-ink py-24 px-16 relative overflow-hidden">
        {/* Ghost quotation mark */}
        <div
          className="absolute -top-8 left-8 font-display text-cream/[0.06] leading-none select-none pointer-events-none"
          style={{ fontSize: "240px" }}
          aria-hidden="true"
        >
          &ldquo;
        </div>

        <blockquote className="font-editorial italic text-[22px] text-cream leading-[1.7] max-w-[760px] relative z-10">
          <strong className="font-editorial not-italic text-yellow">These are the times that try men&apos;s souls.</strong>{" "}
          The summer soldier and the sunshine patriot will, in this crisis, shrink from the service
          of their country; but he that stands it now, deserves the love and thanks of man and woman.
        </blockquote>
        <p className="font-ui text-[9px] uppercase tracking-[0.25em] text-cream/40 mt-6 relative z-10">
          — Thomas Paine, The American Crisis, December 1776
        </p>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 6. STORIES — 3-column grid                                 */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b-4 border-ink">

        {/* Cell 1 */}
        <div className="bg-cream border-r-[3px] border-ink p-10 relative overflow-hidden">
          <div className="absolute top-4 right-6 font-display text-[80px] text-ink/[0.08] leading-none select-none pointer-events-none" aria-hidden="true">
            1
          </div>
          <span className="font-ui text-[9px] uppercase tracking-[0.18em] px-2.5 py-1 border border-ink text-ink inline-block">
            Primary Sources
          </span>
          <h3 className="font-editorial text-[20px] text-ink leading-[1.3] mt-4">
            {TEACHER_FEATURES[0].title}
          </h3>
          <p className="font-ui text-[13px] leading-relaxed mt-3 text-ink/60">
            {TEACHER_FEATURES[0].body}
          </p>
        </div>

        {/* Cell 2 */}
        <div className="bg-[#1a3a72] border-r-[3px] border-ink p-10 relative overflow-hidden">
          <div className="absolute top-4 right-6 font-display text-[80px] text-cream/[0.08] leading-none select-none pointer-events-none" aria-hidden="true">
            2
          </div>
          <span className="font-ui text-[9px] uppercase tracking-[0.18em] px-2.5 py-1 border border-cream/30 text-cream/60 inline-block">
            Lesson Plans
          </span>
          <h3 className="font-editorial text-[20px] text-cream leading-[1.3] mt-4">
            {TEACHER_FEATURES[1].title}
          </h3>
          <p className="font-ui text-[13px] leading-relaxed mt-3 text-cream/60">
            {TEACHER_FEATURES[1].body}
          </p>
        </div>

        {/* Cell 3 */}
        <div className="bg-crimson p-10 relative overflow-hidden">
          <div className="absolute top-4 right-6 font-display text-[80px] text-cream/[0.08] leading-none select-none pointer-events-none" aria-hidden="true">
            3
          </div>
          <span className="font-ui text-[9px] uppercase tracking-[0.18em] px-2.5 py-1 border border-cream/30 text-cream/60 inline-block">
            Classroom Ready
          </span>
          <h3 className="font-editorial text-[20px] text-cream leading-[1.3] mt-4">
            {TEACHER_FEATURES[2].title}
          </h3>
          <p className="font-ui text-[13px] leading-relaxed mt-3 text-cream/60">
            {TEACHER_FEATURES[2].body}
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 7. CTA                                                      */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#e8b84b] border-y-4 border-ink py-24 px-16 relative overflow-hidden">
        {/* Ghost "75" */}
        <div
          className="absolute -top-8 right-8 font-display text-ink/[0.06] leading-none select-none pointer-events-none"
          style={{ fontSize: "280px" }}
          aria-hidden="true"
        >
          75
        </div>

        <div className="relative z-10">
          <div className="inline-block border-2 border-crimson text-crimson font-display text-[13px] tracking-[0.2em] -rotate-[8deg] opacity-60 px-4 py-2 mb-8">
            SINCE 1775
          </div>

          <h2 className="font-display text-ink leading-[0.92]" style={{ fontSize: "clamp(40px,6vw,80px)" }}>
            Your town.<br />Our network.
          </h2>

          <p className="font-editorial italic text-ink/60 text-[18px] mt-4 max-w-[500px]">
            We partner with tourism offices, historical societies, and preservation organizations
            to tell stories that belong to everyone.
          </p>

          <div className="mt-10">
            <NextLink
              href="/partner"
              className="inline-block px-6 py-3 bg-ink text-cream font-ui font-semibold text-[11px] tracking-[0.2em] uppercase shadow-[4px_4px_0_#c8222a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#c8222a] transition-all duration-100 no-underline"
            >
              Partner With Us &rarr;
            </NextLink>
          </div>
        </div>
      </section>

    </main>
  );
}
