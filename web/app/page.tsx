import NextLink from "next/link";
import prisma from "@/lib/prisma";
import { getOnThisDay } from "@/lib/api";

export const dynamic = "force-dynamic";

/* ── Page ──────────────────────────────────────────────────────────── */

export default async function HomePage() {
  let towns: { name: string; slug: string }[] = [];
  try {
    towns = await prisma.town.findMany({
      where: { state: "MA", NOT: { heroSummary40: "" } },
      select: { name: true, slug: true },
      orderBy: { name: "asc" },
    });
  } catch {
    // fall back to empty list — links won't show rather than 404
  }

  const now = new Date();
  const otdMonth = now.getUTCMonth() + 1;
  const otdDay = now.getUTCDate();
  const otdMonthName = now.toLocaleDateString("en-US", { month: "long", timeZone: "UTC" });
  const otdDayNum = now.toLocaleDateString("en-US", { day: "numeric", timeZone: "UTC" });
  let otdEvents: Awaited<ReturnType<typeof getOnThisDay>> = [];
  try {
    otdEvents = await getOnThisDay(otdMonth, otdDay);
  } catch {
    // non-fatal — widget just won't show events
  }
  return (
    <main>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* 1. HERO                                                        */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section className="flex flex-col sm:grid sm:grid-cols-2 sm:min-h-screen border-b-4 border-[#14100a]">

        {/* LEFT */}
        <div className="bg-[#f2e6c8] px-5 sm:px-10 py-10 sm:py-16 flex flex-col justify-center relative z-[3]">

          {/* Eyebrow pill */}
          <span className="inline-block font-ui text-[11px] font-semibold tracking-[0.3em] uppercase text-[#f2e6c8] bg-[#cc3322] px-3 py-[5px] mb-6 -rotate-1 w-fit">
            75 Towns · 1 Revolution
          </span>

          {/* H1 */}
          <h1
            className="font-editorial font-black text-[#1a3a72] leading-[0.9] tracking-[-0.04em] relative z-10 sm:w-[130%]"
            style={{ fontSize: "clamp(48px,6vw,88px)" }}
          >
            History<br />
            <em
              className="font-editorial font-light text-[#cc3322] block"
              style={{ fontStyle: "italic" }}
            >
              is
            </em>
            <span className="text-[#14100a] everyone">for Everyone</span>
          </h1>

          {/* Squiggle under H1 — whimsy */}
          <svg
            width="240" height="12" viewBox="0 0 240 12"
            style={{ display: 'block', margin: '8px 0 0' }}
            aria-hidden="true"
          >
            <path
              d="M0 8 Q15 2 30 8 Q45 14 60 7 Q75 1 90 7 Q105 13 120 7 Q135 2 150 7 Q165 13 180 7 Q195 2 210 7 Q225 13 240 6"
              stroke="#cc3322" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5"
            />
          </svg>

          {/* Pull quote */}
          <p className="font-editorial italic font-light text-[21px] sm:text-[22px] leading-[1.4] text-[#4a3c1a] max-w-[340px] mt-8">
            Seventy-seven towns. The places where ordinary people made history.
          </p>

          {/* CTA row — stacked on mobile */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-9">
            <NextLink
              href="/towns"
              className="font-editorial font-bold text-[20px] tracking-[0.04em] text-[#f2e6c8] bg-[#cc3322] px-7 py-3.5 no-underline inline-block border-[3px] border-[#14100a] shadow-[4px_4px_0_#14100a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#14100a] transition-all duration-100 text-center"
            >
              Explore the Towns
            </NextLink>
            <NextLink
              href="/teach"
              className="font-ui text-[11px] font-medium tracking-[0.18em] uppercase text-[#1a3a72] no-underline border-b-2 border-[#1a3a72] pb-0.5 text-center sm:text-left w-fit self-center sm:self-auto"
            >
              For Teachers
            </NextLink>
          </div>
        </div>

        {/* RIGHT — horizontal strip on mobile, full panel on desktop */}
        <div className="bg-[#1a3a72] h-[175px] sm:h-auto border-t-4 sm:border-t-0 sm:border-l-4 border-[#14100a] relative overflow-hidden flex items-center justify-center">

          {/* Mobile only: compass + tagline */}
          <div className="sm:hidden absolute top-2 right-3 font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-[rgba(242,230,200,0.28)] z-[4]">
            N ↑
          </div>
          <div className="sm:hidden absolute bottom-3 left-4 z-[4]">
            <p className="font-editorial font-black text-[#f2e6c8] text-[19px] leading-tight">75 / Towns. One Revolution.</p>
          </div>

          {/* Badge 1 */}
          <div className="hidden sm:block absolute top-12 left-8 -rotate-[3deg] font-editorial font-black text-[11px] tracking-[0.1em] uppercase bg-[#4A6A9B] text-[#14100a] px-3 py-1.5 border-[2.5px] border-[#14100a] z-[4]">
            April 19, 1775
          </div>

          {/* Badge 2 */}
          <div className="hidden sm:block absolute bottom-20 right-6 rotate-[2.5deg] font-editorial font-black text-[11px] tracking-[0.1em] uppercase bg-[#4A6A9B] text-[#14100a] px-3 py-1.5 border-[2.5px] border-[#14100a] z-[4]">
            Massachusetts, 1775
          </div>

          {/* Ghost year */}
          <div
            className="absolute bottom-[-20px] right-[-10px] font-editorial font-black text-white/[0.06] leading-none tracking-[-0.05em] z-[1] pointer-events-none select-none"
            style={{ fontSize: "180px" }}
            aria-hidden="true"
          >
            1775
          </div>

          {/* Star-map SVG */}
          <svg
            className="absolute inset-0 w-full h-full z-[1]"
            viewBox="0 0 500 600"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <circle cx="320" cy="280" r="180" fill="rgba(232,184,75,0.07)" />
            <circle cx="320" cy="280" r="120" fill="rgba(232,184,75,0.06)" />
            <path d="M180 300 Q190 160 320 150 Q460 140 470 280 Q480 420 340 430 Q190 440 180 300 Z" fill="none" stroke="rgba(242,230,200,0.07)" strokeWidth="2" />
            <path d="M300 200 L307 221 L330 221 L312 234 L319 255 L300 242 L281 255 L288 234 L270 221 L293 221 Z" fill="#4A6A9B" opacity="0.85" />
            <path d="M130 155 L135 170 L151 170 L138 179 L143 194 L130 185 L117 194 L122 179 L109 170 L125 170 Z" fill="#cc3322" opacity="0.65" />
            <path d="M405 325 L408 335 L419 335 L411 341 L414 351 L405 345 L396 351 L399 341 L391 335 L402 335 Z" fill="#f2e6c8" opacity="0.45" />
            <path d="M160 420 L162 426 L169 426 L163 431 L165 437 L160 433 L155 437 L157 431 L151 426 L158 426 Z" fill="#4A6A9B" opacity="0.4" />
            <path d="M430 130 L432 137 L439 137 L433 141 L435 148 L430 144 L425 148 L427 141 L421 137 L428 137 Z" fill="#f2e6c8" opacity="0.3" />
            <path d="M80 240 L82 246 L88 246 L83 250 L85 256 L80 252 L75 256 L77 250 L72 246 L78 246 Z" fill="#cc3322" opacity="0.3" />
            <path d="M75 510 Q130 460 165 420 Q205 380 245 348 Q280 318 300 280 Q318 242 300 200" stroke="rgba(242,230,200,0.13)" strokeWidth="2" strokeDasharray="6 5" fill="none" strokeLinecap="round" />
            <circle cx="165" cy="420" r="5.5" fill="#cc3322" opacity="0.55" />
            <circle cx="245" cy="348" r="4.5" fill="#4A6A9B" opacity="0.5" />
            <circle cx="300" cy="280" r="7" fill="#cc3322" opacity="0.75" />
            <circle cx="300" cy="200" r="4" fill="#f2e6c8" opacity="0.45" />
            <circle cx="75" cy="510" r="3.5" fill="#4A6A9B" opacity="0.35" />
            <line x1="55" y1="96" x2="148" y2="96" stroke="rgba(242,230,200,0.11)" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="55" y1="106" x2="110" y2="106" stroke="rgba(242,230,200,0.06)" strokeWidth="2" strokeLinecap="round" />
            <line x1="365" y1="485" x2="465" y2="485" stroke="rgba(242,230,200,0.11)" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="390" y1="495" x2="465" y2="495" stroke="rgba(242,230,200,0.06)" strokeWidth="2" strokeLinecap="round" />
            <g transform="translate(420,205) rotate(22)">
              <rect x="-3" y="-30" width="6" height="60" rx="3" fill="rgba(242,230,200,0.13)" />
              <rect x="-30" y="-3" width="60" height="6" rx="3" fill="rgba(242,230,200,0.13)" />
            </g>
          </svg>

          {/* Bottom-anchored content block — desktop only */}
          <div className="hidden sm:flex absolute bottom-0 left-0 right-0 h-full z-[3] p-14 flex-col justify-end">
            <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[rgba(242,230,200,0.65)] mb-4">
              The Shot Heard Round the World
            </p>
            <p
              className="font-editorial font-black text-[#f2e6c8] leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: "clamp(32px,3.5vw,54px)" }}
            >
              75 Towns.<br />One Revolution.
            </p>
            <div className="w-12 h-[3px] bg-[#cc3322] my-5" />
            <p className="font-editorial italic font-light text-[20px] leading-[1.65] text-[rgba(242,230,200,0.58)] max-w-[280px]">
              Every town has a story. Most of them have never been told.
            </p>
          </div>

          {/* Stars — whimsy */}
          <svg className="absolute top-5 right-5 pointer-events-none z-[4]" width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true" style={{ opacity: 0.2 }}>
            <path d="M11 25 L12.4 30 L18 30 L13.5 33.5 L15 39 L11 35.8 L7 39 L8.5 33.5 L4 30 L9.6 30 Z" fill="#4A6A9B" />
            <path d="M38 10 L39 13 L42 13 L39.8 14.8 L40.8 18 L38 16.2 L35.2 18 L36.2 14.8 L34 13 L37 13 Z" fill="#f2e6c8" />
            <path d="M44 36 L44.7 38.4 L47.3 38.4 L45.2 39.9 L45.9 42.3 L44 41 L42.1 42.3 L42.8 39.9 L40.7 38.4 L43.3 38.4 Z" fill="#4A6A9B" />
          </svg>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* 2. STATS RIBBON                                               */}
      {/* ────────────────────────────────────────────────────────────── */}
      <div className="stats-ribbon bg-[#1a3a72] flex border-b-4 border-[#cc3322] overflow-hidden">
        {[
          { number: "13", accent: "✦", label: "Original Colonies" },
          { number: "75", accent: "",   label: "Towns Documented" },
          { number: "8",  accent: " yrs", label: "The Conflict Lasted" },
          { number: "1783", accent: "", label: "Year of Victory" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="stat-cell flex-1 px-4 sm:px-6 py-6 sm:py-7 border-r-2 border-[rgba(242,230,200,0.08)] last:border-r-0 flex flex-col gap-1"
          >
            <div className="font-display text-[40px] sm:text-[48px] text-[#f2e6c8] leading-none tracking-[-0.04em]">
              {stat.number}<span className="text-[#cc3322] text-[0.7em]">{stat.accent}</span>
            </div>
            <div className="font-ui text-[10px] font-normal tracking-[0.2em] uppercase text-[rgba(242,230,200,0.4)]">
              {stat.label}
            </div>
            {/* Tiny squiggle under stat label — whimsy */}
            <svg width="60" height="7" viewBox="0 0 60 7" aria-hidden="true">
              <path d="M0 4 Q7 1 15 4 Q22 7 30 3 Q37 0 45 3 Q52 7 60 2"
                stroke="#4A6A9B" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" />
            </svg>
          </div>
        ))}
      </div>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* ON THIS DAY — full section                                    */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section className="bg-[#1a3a72] border-b-4 border-[#cc3322] py-14 sm:py-20 px-5 sm:px-10 relative overflow-hidden">
        {/* Ghost day number watermark */}
        <div
          aria-hidden
          className="absolute right-[-0.05em] top-[-0.1em] font-display leading-none pointer-events-none select-none text-white/[0.035]"
          style={{ fontSize: "clamp(160px,32vw,380px)" }}
        >
          {otdDayNum}
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          {/* Kicker */}
          <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#cc3322] flex items-center gap-2 mb-6 before:content-[''] before:w-4 before:h-[2px] before:bg-[#cc3322] before:block">
            On This Day in the Revolution
          </p>

          {/* Date heading */}
          <h2
            className="font-display text-[#f2e6c8] leading-[0.9] tracking-[-0.03em] mb-8"
            style={{ fontSize: "clamp(44px,8vw,100px)" }}
          >
            {otdMonthName} {otdDayNum}
          </h2>

          {otdEvents.length > 0 ? (
            <div className="border-t border-[rgba(242,230,200,0.10)]">
              {otdEvents.slice(0, 3).map((event) => (
                <NextLink
                  key={event.id}
                  href={`/towns/${event.town.slug}/timeline/${(event as { slug?: string }).slug ?? event.id}`}
                  className="no-underline flex gap-4 sm:gap-6 py-6 border-b border-[rgba(242,230,200,0.07)] group hover:bg-[rgba(242,230,200,0.02)] transition-colors -mx-5 sm:-mx-10 px-5 sm:px-10"
                >
                  {/* Year badge */}
                  <div className="bg-[#cc3322] px-2.5 sm:px-3 py-2 text-center min-w-[52px] sm:min-w-[60px] flex-shrink-0 self-start">
                    <p className="font-display text-[20px] sm:text-[24px] text-[#f2e6c8] leading-none">{event.year}</p>
                    <p className="font-ui text-[9px] uppercase tracking-[0.1em] text-[#f2e6c8]/55 mt-0.5">{otdMonthName.slice(0, 3)}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-[clamp(17px,2.5vw,26px)] text-[#f2e6c8] group-hover:text-[#cc3322] transition-colors leading-tight tracking-[-0.02em]">
                      {event.name}
                    </p>
                    <p className="font-ui text-[10px] uppercase tracking-[0.12em] text-[#cc3322]/70 mt-1">
                      {event.town.name}, {event.town.state}
                    </p>
                    {event.summary && (
                      <p className="font-ui text-[12px] sm:text-[19px] text-[#f2e6c8]/40 leading-relaxed mt-1.5 line-clamp-2">
                        {event.summary}
                      </p>
                    )}
                  </div>
                </NextLink>
              ))}
            </div>
          ) : (
            <p className="font-editorial italic text-[18px] text-[#f2e6c8]/35 border-t border-[rgba(242,230,200,0.08)] pt-8">
              No documented events recorded on {otdMonthName} {otdDayNum} — but the war never stopped.
            </p>
          )}

          <NextLink
            href="/on-this-day"
            className="no-underline inline-flex items-center gap-2 mt-8 font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-[#f2e6c8]/45 border border-[rgba(242,230,200,0.15)] px-6 py-3 hover:border-[#cc3322] hover:text-[#cc3322] transition-colors"
          >
            See all events on {otdMonthName} {otdDayNum} →
          </NextLink>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* 3. MANIFESTO                                                  */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section className="bg-[#cc3322] py-12 sm:py-20 px-5 sm:px-10 relative overflow-hidden border-b-4 border-[#14100a]">
        {/* Ghost circles */}
        <div className="absolute w-[280px] h-[280px] rounded-full border-[3px] border-[rgba(242,230,200,0.1)] top-[-80px] right-[-80px]" aria-hidden="true" />
        <div className="absolute w-[180px] h-[180px] rounded-full border-[3px] border-[rgba(242,230,200,0.07)] bottom-[-60px] left-[40%]" aria-hidden="true" />

        {/* Stars — whimsy */}
        <svg className="absolute top-5 right-5 pointer-events-none" width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true" style={{ opacity: 0.18 }}>
          <path d="M11 25 L12.4 30 L18 30 L13.5 33.5 L15 39 L11 35.8 L7 39 L8.5 33.5 L4 30 L9.6 30 Z" fill="#4A6A9B" />
          <path d="M38 10 L39 13 L42 13 L39.8 14.8 L40.8 18 L38 16.2 L35.2 18 L36.2 14.8 L34 13 L37 13 Z" fill="#f2e6c8" />
          <path d="M44 36 L44.7 38.4 L47.3 38.4 L45.2 39.9 L45.9 42.3 L44 41 L42.1 42.3 L42.8 39.9 L40.7 38.4 L43.3 38.4 Z" fill="#4A6A9B" />
        </svg>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 relative z-10">
          {/* Left */}
          <div className="pr-0 sm:pr-10 pb-8 sm:pb-0 border-b-[3px] sm:border-b-0 sm:border-r-[3px] border-[rgba(242,230,200,0.25)]">
            <h2
              className="font-editorial font-black text-[#f2e6c8] leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: "clamp(36px,4vw,60px)" }}
            >
              The War<br />Was Won<br />
              <span className="inline-block -rotate-[4deg] text-[#4A6A9B] origin-left">Here.</span>
            </h2>
          </div>

          {/* Right */}
          <div className="pt-8 sm:pt-0 sm:pl-12 flex flex-col justify-between">
            <p className="font-editorial italic font-light text-[20px] sm:text-[22px] leading-[1.55] text-[rgba(242,230,200,0.85)]">
              Not on famous battlefields alone. It was won in a farmhouse in Wilmington where a surgeon packed his bag. In a church in Salem where men argued through the night. In a kitchen in Concord where someone hid the powder.
              <br /><br />
              This project maps those places. All of them.
            </p>
            {/* Squiggle after body copy — whimsy */}
            <svg width="180" height="10" viewBox="0 0 180 10" style={{ display: 'block', marginTop: '16px' }} aria-hidden="true">
              <path d="M0 6 Q11 1 22 6 Q33 11 45 5 Q56 0 67 5 Q78 10 90 5 Q101 1 112 5 Q123 10 135 5 Q146 1 157 5 Q168 10 180 4"
                stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
            <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[rgba(242,230,200,0.4)] mt-6 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[rgba(242,230,200,0.3)] block" />
              75 Towns · 8 Years · 1 Revolution
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* 4. TOWNS                                                      */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section className="bg-[#f8f0d8] border-b-4 border-[#14100a] grid grid-cols-1 sm:grid-cols-2">

        {/* Left */}
        <div className="px-5 sm:px-10 py-12 sm:py-16 border-b-4 sm:border-b-0 sm:border-r-4 border-[#14100a]">
          {/* Kicker */}
          <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[#cc3322] flex items-center gap-2.5 mb-8">
            <span className="w-5 h-[2px] bg-[#cc3322] block" />
            The Map
          </p>

          {/* H2 */}
          <h2
            className="font-editorial font-black text-[#14100a] leading-[0.95] tracking-[-0.03em] mb-10"
            style={{ fontSize: "clamp(36px,4vw,56px)" }}
          >
            Where It<br />
            <em className="font-editorial italic font-light text-[#1a3a72]">Happened</em>
          </h2>

          {/* Squiggle under heading — whimsy */}
          <svg width="200" height="12" viewBox="0 0 200 12" style={{ display: 'block', margin: '10px 0 20px' }} aria-hidden="true">
            <path d="M0 8 Q12 2 25 8 Q37 14 50 7 Q62 1 75 7 Q87 13 100 7 Q112 2 125 7 Q137 13 150 7 Q162 2 175 7 Q187 13 200 6"
              stroke="#cc3322" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.38" />
          </svg>

          {/* Town grid */}
          <ul className="grid grid-cols-3 border-t-2 border-[#14100a] list-none m-0 p-0">
            {towns.map((town) => (
              <li
                key={town.slug}
                className="border-b border-r border-[rgba(20,16,10,0.15)] [&:nth-child(3n)]:border-r-0"
              >
                <NextLink
                  href={`/towns/${town.slug}`}
                  className="flex items-center gap-2 px-3 py-2.5 text-[12px] font-ui text-[#14100a] no-underline hover:bg-[#1a3a72] hover:text-[#f2e6c8] transition-colors duration-150 [&:hover_.dot]:bg-[#4A6A9B]"
                >
                  <span className="dot w-[5px] h-[5px] rounded-full bg-[#cc3322] flex-shrink-0 transition-colors" />
                  {town.name}
                </NextLink>
              </li>
            ))}
            <li className="border-b border-[rgba(20,16,10,0.15)]">
              <NextLink
                href="/towns"
                className="flex items-center gap-2 px-3 py-2.5 text-[12px] font-ui text-[#14100a] no-underline opacity-50 italic hover:opacity-100 hover:bg-[#1a3a72] hover:text-[#f2e6c8] transition-all duration-150"
              >
                + 54 more →
              </NextLink>
            </li>
          </ul>

          {/* Dashed rule + View All — whimsy */}
          <div className="mt-6">
            <svg width="100%" height="6" viewBox="0 0 300 6" preserveAspectRatio="none" aria-hidden="true">
              <line x1="0" y1="3" x2="300" y2="3" stroke="rgba(20,16,10,0.15)" strokeWidth="1.5" strokeDasharray="5 4" />
            </svg>
            <NextLink
              href="/towns"
              className="block w-full sm:w-auto text-center sm:text-left mt-4 font-ui text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1a3a72] no-underline border-b-2 border-[#1a3a72] pb-0.5"
            >
              View All Towns →
            </NextLink>
          </div>
        </div>

        {/* Right */}
        <div className="bg-[#1a3a72] px-8 sm:px-12 py-12 sm:py-16 relative overflow-hidden flex flex-col justify-between">

          {/* Tilted tag */}
          <div className="absolute top-12 right-8 rotate-[3deg] bg-[#4A6A9B] text-[#14100a] font-editorial font-bold text-[12px] px-3.5 py-2 border-[2.5px] border-[#14100a] shadow-[3px_3px_0_#14100a] z-[3]">
            Featured Town
          </div>

          {/* Ghost state — whimsy */}
          <div className="absolute top-[-16px] right-[-20px] font-editorial font-black text-[100px] sm:text-[120px] text-white/[0.05] leading-none pointer-events-none select-none" aria-hidden="true">
            MA
          </div>

          <div className="relative z-10">
            <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[rgba(242,230,200,0.4)] mb-5">
              This Week
            </p>
            <h3
              className="font-editorial font-black text-[#f2e6c8] leading-[0.9] tracking-[-0.04em]"
              style={{ fontSize: "clamp(36px,4vw,60px)" }}
            >
              Concord
            </h3>
            <p className="font-editorial font-black text-[#cc3322] text-[48px] sm:text-[72px] leading-none tracking-[-0.04em] mt-4">
              Apr 19
            </p>
            <p className="font-editorial italic font-light text-[19px] sm:text-[18px] leading-[1.6] text-[rgba(242,230,200,0.7)] max-w-[340px] mt-6">
              The shot heard round the world. But who fired it? Seventy-seven militia stood on a triangular green at dawn. What they knew — and feared — is more complicated than the myth.
            </p>
            <NextLink
              href="/towns/concord-ma"
              className="inline-flex items-center gap-2.5 mt-8 font-ui text-[11px] font-semibold tracking-[0.2em] uppercase text-[#f2e6c8] no-underline border-b-2 border-[rgba(242,230,200,0.3)] pb-[3px] w-fit"
            >
              Read the Town →
            </NextLink>
          </div>

          {/* Small stars SVG */}
          <svg
            className="absolute bottom-8 left-12 w-[90px] h-[30px] opacity-[0.25] pointer-events-none"
            viewBox="0 0 90 30"
            fill="none"
            aria-hidden="true"
          >
            <path d="M10 15 L11 17.8 L14 17.8 L11.7 19.4 L12.6 22.2 L10 20.5 L7.4 22.2 L8.3 19.4 L6 17.8 L9 17.8 Z" fill="#4A6A9B" />
            <path d="M30 8 L30.8 10.4 L33.4 10.4 L31.4 11.9 L32.2 14.3 L30 12.8 L27.8 14.3 L28.6 11.9 L26.6 10.4 L29.2 10.4 Z" fill="#4A6A9B" />
            <path d="M55 18 L55.6 19.8 L57.6 19.8 L56.1 20.9 L56.7 22.7 L55 21.5 L53.3 22.7 L53.9 20.9 L52.4 19.8 L54.4 19.8 Z" fill="#4A6A9B" />
          </svg>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* 5. QUOTE                                                      */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section className="bg-[#2a5c45] py-16 sm:py-24 px-5 sm:px-10 relative overflow-hidden border-b-4 border-[#14100a] flex items-center justify-center">

        {/* Ghost quotation mark */}
        <div
          className="absolute font-editorial font-black text-white/[0.04] top-[-80px] left-5 leading-none z-0 pointer-events-none select-none"
          style={{ fontSize: "400px" }}
          aria-hidden="true"
        >
          &ldquo;
        </div>

        {/* Ghost circles */}
        <div className="absolute w-[500px] h-[500px] rounded-full border-2 border-[rgba(242,230,200,0.08)] top-[-200px] right-[-150px]" aria-hidden="true" />
        <div className="absolute w-[200px] h-[200px] rounded-full border-2 border-[rgba(242,230,200,0.08)] bottom-[-80px] left-[10%]" aria-hidden="true" />

        {/* Cross mark — whimsy */}
        <svg className="absolute bottom-6 right-6 pointer-events-none" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" style={{ opacity: 0.2 }}>
          <rect x="11.5" y="0" width="5" height="28" rx="2.5" fill="white" />
          <rect x="0" y="11.5" width="28" height="5" rx="2.5" fill="white" />
        </svg>

        <div className="relative z-[2] max-w-[960px] text-center">
          <blockquote>
            <p
              className="font-editorial italic font-light text-[#f2e6c8] leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(24px,3.5vw,52px)" }}
            >
              &ldquo;Those who expect to reap the blessings of freedom must, like men, undergo{" "}
              <strong className="font-editorial font-black not-italic text-[#4A6A9B]">
                the fatigues of supporting it.
              </strong>&rdquo;
            </p>
            {/* Squiggle replaces horizontal rule — whimsy */}
            <div className="flex items-center justify-center gap-3 mt-7">
              <svg width="32" height="1" viewBox="0 0 32 1" aria-hidden="true">
                <line x1="0" y1="0.5" x2="32" y2="0.5" stroke="rgba(242,230,200,0.25)" strokeWidth="1" />
              </svg>
              <p className="font-ui text-[10px] font-medium tracking-[0.24em] uppercase text-[rgba(242,230,200,0.4)]">
                Thomas Paine · The American Crisis · 1776
              </p>
              <svg width="32" height="1" viewBox="0 0 32 1" aria-hidden="true">
                <line x1="0" y1="0.5" x2="32" y2="0.5" stroke="rgba(242,230,200,0.25)" strokeWidth="1" />
              </svg>
            </div>
          </blockquote>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* 6. STORIES                                                    */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section className="bg-[#f2e6c8] border-b-4 border-[#14100a]">

        {/* Header row */}
        <div className="px-5 sm:px-10 py-10 sm:py-14 pb-6 sm:pb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between border-b-[3px] border-[#14100a] gap-4">
          <h2
            className="font-editorial font-black text-[#14100a] leading-[0.92] tracking-[-0.04em]"
            style={{ fontSize: "clamp(36px,4vw,64px)" }}
          >
            The <em className="font-editorial italic font-light text-[#cc3322]">Stories</em><br />
            Nobody Tells
          </h2>
          {/* Squiggle under heading — whimsy */}
          <svg width="200" height="12" viewBox="0 0 200 12" style={{ display: 'block' }} aria-hidden="true" className="sm:hidden">
            <path d="M0 8 Q12 2 25 8 Q37 14 50 7 Q62 1 75 7 Q87 13 100 7 Q112 2 125 7 Q137 13 150 7 Q162 2 175 7 Q187 13 200 6"
              stroke="#cc3322" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.38" />
          </svg>
          <NextLink
            href="/towns"
            className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1a3a72] no-underline border-b-2 border-[#1a3a72] pb-0.5 flex-shrink-0 sm:ml-8 sm:mb-1 w-fit"
          >
            Browse All Towns →
          </NextLink>
        </div>

        {/* Cards — stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3">

          {/* Card 1 — red left border on mobile */}
          <div className="bg-[#f2e6c8] px-7 sm:px-9 py-10 border-b-[3px] sm:border-b-0 sm:border-r-[3px] border-[#14100a] relative overflow-hidden border-l-[5px] border-l-[#cc3322] sm:border-l-0">
            <div className="absolute top-4 right-5 font-editorial font-black text-[80px] leading-none tracking-[-0.05em] opacity-[0.12] pointer-events-none select-none text-[#14100a]" aria-hidden="true">
              01
            </div>
            <span className="inline-block font-ui text-[11px] font-semibold tracking-[0.24em] uppercase px-2.5 py-1 border-[1.5px] mb-5 text-[#cc3322] border-[#cc3322]">
              People
            </span>
            <h3 className="font-editorial font-black text-[20px] sm:text-[24px] leading-[1.05] tracking-[-0.02em] mb-4 text-[#14100a]">
              The Surgeon Who Rode Before Revere
            </h3>
            <p className="font-ui text-[20px] font-light leading-[1.7] text-[rgba(20,16,10,0.6)]">
              Samuel Prescott was the only rider who actually made it to Concord. Revere was captured. Dawes turned back. Prescott jumped a stone wall.
            </p>
            <NextLink
              href="/towns/concord-ma"
              className="inline-flex items-center gap-2 mt-6 font-ui text-[10px] font-semibold tracking-[0.18em] uppercase no-underline pb-0.5 text-[#1a3a72] border-b-[1.5px] border-[#1a3a72]"
            >
              Read More
            </NextLink>
          </div>

          {/* Card 2 — blue left border on mobile */}
          <div className="bg-[#1a3a72] px-7 sm:px-9 py-10 border-b-[3px] sm:border-b-0 sm:border-r-[3px] border-[#14100a] relative overflow-hidden border-l-[5px] border-l-[#3a6abf] sm:border-l-0">
            <div className="absolute top-4 right-5 font-editorial font-black text-[80px] leading-none tracking-[-0.05em] opacity-[0.12] pointer-events-none select-none text-[#f2e6c8]" aria-hidden="true">
              02
            </div>
            <span className="inline-block font-ui text-[11px] font-semibold tracking-[0.24em] uppercase px-2.5 py-1 border-[1.5px] mb-5 text-[#4A6A9B] border-[#4A6A9B]">
              Places
            </span>
            <h3 className="font-editorial font-black text-[20px] sm:text-[24px] leading-[1.05] tracking-[-0.02em] mb-4 text-[#f2e6c8]">
              The Tavern That Was Really a War Room
            </h3>
            <p className="font-ui text-[20px] font-light leading-[1.7] text-[rgba(242,230,200,0.6)]">
              Every town had one. The public room where men drank cider and planned treason. Buckman Tavern had both — sometimes on the same night.
            </p>
            <NextLink
              href="/towns/lexington-ma"
              className="inline-flex items-center gap-2 mt-6 font-ui text-[10px] font-semibold tracking-[0.18em] uppercase no-underline pb-0.5 text-[#4A6A9B] border-b-[1.5px] border-[#4A6A9B]"
            >
              Read More
            </NextLink>
          </div>

          {/* Card 3 — red left border on mobile */}
          <div className="bg-[#cc3322] px-7 sm:px-9 py-10 relative overflow-hidden border-l-[5px] border-l-[#ff4422] sm:border-l-0">
            <div className="absolute top-4 right-5 font-editorial font-black text-[80px] leading-none tracking-[-0.05em] opacity-[0.12] pointer-events-none select-none text-[#f2e6c8]" aria-hidden="true">
              03
            </div>
            <span className="inline-block font-ui text-[11px] font-semibold tracking-[0.24em] uppercase px-2.5 py-1 border-[1.5px] mb-5 text-[#f2e6c8] border-[rgba(242,230,200,0.5)]">
              Forgotten
            </span>
            <h3 className="font-editorial font-black text-[20px] sm:text-[24px] leading-[1.05] tracking-[-0.02em] mb-4 text-[#f2e6c8]">
              The Women Who Kept the Powder Dry
            </h3>
            <p className="font-ui text-[20px] font-light leading-[1.7] text-[rgba(242,230,200,0.65)]">
              When the men marched out, someone stayed behind. Hid the flax. Buried the pewter. Fed the scouts who came through at midnight. These are their names.
            </p>
            <NextLink
              href="/towns"
              className="inline-flex items-center gap-2 mt-6 font-ui text-[10px] font-semibold tracking-[0.18em] uppercase no-underline pb-0.5 text-[#f2e6c8] border-b-[1.5px] border-[rgba(242,230,200,0.5)]"
            >
              Browse Towns →
            </NextLink>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* 7. CTA                                                        */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section className="bg-[#4A6A9B] border-b-4 border-[#14100a] py-14 sm:py-20 px-5 sm:px-10 flex flex-col sm:grid sm:grid-cols-[1fr_auto] sm:items-center gap-8 sm:gap-16 relative overflow-hidden">

        {/* Ghost "75" */}
        <div
          className="absolute font-editorial font-black text-[rgba(20,16,10,0.05)] right-[-40px] top-[-60px] leading-none tracking-[-0.06em] z-0 pointer-events-none select-none"
          style={{ fontSize: "320px" }}
          aria-hidden="true"
        >
          75
        </div>

        {/* Tilted stamp */}
        <div className="absolute top-10 right-[300px] font-editorial font-black text-[11px] tracking-[0.12em] uppercase text-[#cc3322] border-[3px] border-[#cc3322] px-3.5 py-2 -rotate-[8deg] opacity-60 z-[2] hidden sm:block">
          All Welcome
        </div>

        {/* Stars — whimsy */}
        <svg className="absolute top-5 right-5 pointer-events-none" width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true" style={{ opacity: 0.18 }}>
          <path d="M11 25 L12.4 30 L18 30 L13.5 33.5 L15 39 L11 35.8 L7 39 L8.5 33.5 L4 30 L9.6 30 Z" fill="#cc3322" />
          <path d="M38 10 L39 13 L42 13 L39.8 14.8 L40.8 18 L38 16.2 L35.2 18 L36.2 14.8 L34 13 L37 13 Z" fill="#14100a" />
        </svg>
        <svg className="absolute bottom-5 left-5 pointer-events-none" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" style={{ opacity: 0.15 }}>
          <path d="M20 5 L21.8 13.2 L30 14 L21.8 14.8 L23 23 L20 15 L17 23 L18.2 14.8 L10 14 L18.2 13.2 Z" fill="#14100a" />
        </svg>

        {/* Headline */}
        <p
          className="font-editorial font-black text-[#14100a] leading-[0.92] tracking-[-0.04em] relative z-[2]"
          style={{ fontSize: "clamp(40px,5vw,80px)" }}
        >
          Pick a town.<br />
          <em className="font-editorial italic font-light text-[#cc3322]">Start anywhere.</em>
        </p>

        {/* Button — full width on mobile */}
        <NextLink
          href="/towns"
          className="font-editorial font-bold text-[20px] sm:text-[20px] text-[#f2e6c8] bg-[#1a3a72] px-8 sm:px-10 py-4 sm:py-5 no-underline block sm:inline-block text-center border-[3px] border-[#14100a] shadow-[6px_6px_0_#cc3322] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[9px_9px_0_#cc3322] transition-all duration-100 whitespace-nowrap relative z-[2] flex-shrink-0"
        >
          Explore All Towns →
        </NextLink>
      </section>

    </main>
  );
}
