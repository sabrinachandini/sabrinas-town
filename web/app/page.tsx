import NextLink from "next/link";
import { Button, TownCard, SectionHeader } from "@/components/ui";

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
  const tickerContent = [...TICKER_TOWNS, ...TICKER_TOWNS]; // duplicate for seamless loop

  return (
    <main className="bg-ivory">

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 1. HERO                                                     */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="bg-ivory overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid md:grid-cols-2 min-h-[580px]">

          {/* Left column */}
          <div className="flex flex-col justify-center py-20 md:py-24 pr-0 md:pr-12">
            <p className="fade-up fade-up-1 font-condensed font-bold text-[0.8rem] tracking-[0.16em] uppercase text-crimson mb-4">
              The American Revolution, Town by Town
            </p>
            <h1 className="fade-up fade-up-2 font-heading font-black text-[clamp(2.6rem,6vw,4.5rem)] leading-[1.08] text-charcoal mb-6">
              The Revolution<br />
              <em className="not-italic" style={{ color: "#C4923B" }}>happened here.</em>
            </h1>
            <p className="fade-up fade-up-3 font-serif text-[1.1rem] leading-relaxed text-slate max-w-[480px] mb-8">
              Seventy-seven towns. Sixteen states. One living network connecting the battles,
              figures, and stories of Revolutionary America — built for travelers, teachers,
              and curious Americans.
            </p>
            <div className="fade-up fade-up-4 flex flex-wrap gap-4">
              <Button href="/towns" variant="primary">Explore the Towns</Button>
              <Button href="/teach" variant="ghost">For Teachers &rarr;</Button>
            </div>
          </div>

          {/* Right column — dark panel with pull quote */}
          <div className="hidden md:flex flex-col justify-center relative bg-navy px-10 py-16">
            {/* Vertical crimson rule */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px]"
              style={{ background: "linear-gradient(to bottom, transparent, #BF1A2F 20%, #BF1A2F 80%, transparent)" }}
              aria-hidden="true"
            />
            {/* Ghost year */}
            <div
              className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
              aria-hidden="true"
            >
              <span
                className="font-heading font-black text-[12rem] leading-none text-white"
                style={{ opacity: 0.03 }}
              >
                1776
              </span>
            </div>

            {/* Pull quote */}
            <div className="relative">
              <div
                className="font-heading font-black text-[5rem] leading-none text-crimson mb-2 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <blockquote className="font-heading italic text-[1.3rem] leading-relaxed text-white mb-5">
                We hold these truths to be self-evident, that all men are created equal.
              </blockquote>
              <p className="font-condensed font-bold text-[0.75rem] tracking-[0.12em] uppercase" style={{ color: "#C4923B" }}>
                — Declaration of Independence, July 4, 1776
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 2. STATS BAR                                                */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="bg-navy">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ number, label, detail }) => (
            <div key={label} className="text-center">
              <div className="font-heading font-black text-[2.8rem] text-white leading-none mb-1">
                {number}
              </div>
              <div className="font-condensed font-bold text-[0.75rem] tracking-[0.12em] uppercase mb-1" style={{ color: "#C4923B" }}>
                {label}
              </div>
              <div className="font-sans text-[0.8rem] text-fog">
                {detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 3. TOWNS TICKER                                             */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="bg-crimson py-4 overflow-hidden" aria-label="Towns ticker">
        <div className="marquee-track">
          {tickerContent.map((town, i) => (
            <span
              key={i}
              className="font-condensed font-bold text-[0.85rem] tracking-[0.1em] uppercase text-white whitespace-nowrap px-6"
            >
              {town}
              <span className="ml-6 text-white/40" aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 4. MISSION                                                  */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-crimson" aria-hidden="true" />
              <span className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-crimson">Our Mission</span>
            </div>
            <h2 className="font-heading font-bold text-[2.2rem] md:text-[2.8rem] leading-tight text-charcoal mb-6">
              History isn&apos;t locked<br />
              in a <em style={{ color: "#BF1A2F", fontStyle: "normal" }}>museum.</em>
            </h2>
            <p className="font-serif text-[1rem] leading-relaxed text-slate mb-4">
              It&apos;s in a harbor where tea was dumped on a December night. It&apos;s on a green
              where seventy-seven men stood at dawn, outnumbered. It&apos;s in a courthouse, a
              churchyard, a field that still holds the dead.
            </p>
            <p className="font-serif text-[1rem] leading-relaxed text-slate mb-8">
              Every claim we make cites its source. Every source is graded by credibility tier.
              No myths. No paywall. History is for everyone — we mean it.
            </p>
            <Button href="/about" variant="primary">Our Story &rarr;</Button>
          </div>

          {/* Right — stat cards */}
          <div className="space-y-4">
            {[
              { stat: "77 Towns",             detail: "in the network — and growing" },
              { stat: "13 Original States",   detail: "plus frontier territories" },
              { stat: "Free — Always",        detail: "No paywalls. History is for everyone." },
            ].map(({ stat, detail }) => (
              <div
                key={stat}
                className="bg-navy flex items-stretch"
              >
                <div className="w-[4px] bg-crimson flex-shrink-0" aria-hidden="true" />
                <div className="px-6 py-5">
                  <div className="font-heading font-bold text-[1.1rem] text-white mb-0.5">{stat}</div>
                  <div className="font-serif text-[0.875rem] text-fog">{detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 5. ESSENTIAL TOWNS                                          */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24">
          <SectionHeader
            overline="Start Here"
            title="Essential Towns"
            linkHref="/towns"
            linkText="All 77 Towns"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#DDD8CE]">
            {ESSENTIAL_TOWNS.map((town) => (
              <TownCard key={town.slug} {...town} />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 6. FEATURED STORY                                           */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="bg-navy">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center">

          {/* Left — story content */}
          <div>
            <p className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase mb-2" style={{ color: "#C4923B" }}>
              Featured Story · Boston, Massachusetts
            </p>
            <h2 className="font-heading font-bold text-[2rem] md:text-[2.6rem] leading-tight text-white mb-6">
              The engraving that started a revolution —{" "}
              <em className="text-crimson not-italic">and lied about it.</em>
            </h2>
            <p className="font-serif text-[1rem] leading-relaxed text-fog mb-4">
              Paul Revere&apos;s 1770 engraving of the Boston Massacre is one of the most famous
              pieces of propaganda in American history. Produced within weeks of the event, it
              depicted British soldiers firing in an organized volley on a defenseless crowd.
            </p>
            <p className="font-serif text-[1rem] leading-relaxed text-fog mb-8">
              Eyewitness testimony told a different story. So does the trial record, where John
              Adams — a Patriot — successfully defended the soldiers. What Revere created wasn&apos;t
              journalism. It was the spark.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/towns/boston-ma" variant="outline">Visit Boston &rarr;</Button>
              <Button href="/towns/boston-ma/teacher" variant="ghost">Teach this story &rarr;</Button>
            </div>
          </div>

          {/* Right — image placeholder with texture */}
          <div className="relative bg-[#0a1628] border border-white/10 min-h-[320px] flex flex-col justify-end overflow-hidden">
            {/* Map grid texture */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "linear-gradient(#A8B3C4 1px, transparent 1px), linear-gradient(90deg, #A8B3C4 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden="true"
            />
            <div className="relative p-6 border-t border-crimson/40">
              <p className="font-condensed font-bold text-[0.7rem] tracking-[0.1em] uppercase text-fog/60 mb-1">
                Paul Revere, 1770
              </p>
              <p className="font-serif italic text-[0.9rem] text-fog leading-snug">
                &ldquo;The Bloody Massacre perpetrated in King Street Boston on March 5th 1770 by a party of the 29th Regt.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 7. TEACHERS STRIP                                           */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-crimson" aria-hidden="true" />
              <span className="font-condensed font-bold text-[0.75rem] tracking-[0.14em] uppercase text-crimson">For Educators</span>
            </div>
            <h2 className="font-heading font-bold text-[2.2rem] md:text-[2.6rem] leading-tight text-charcoal mb-5">
              Teaching the Revolution?
            </h2>
            <p className="font-serif text-[1rem] leading-relaxed text-slate mb-4">
              Every town includes a full teacher module — lesson plans built for critical thinking,
              curated primary sources with analysis prompts, and print-ready worksheets your
              students can actually use.
            </p>
            <p className="font-serif text-[1rem] leading-relaxed text-slate mb-8">
              Sixteen states covered. Free, always. No login required.
            </p>
            <Button href="/teach" variant="primary">Explore Teacher Resources</Button>
          </div>

          {/* Right — 2×2 feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {TEACHER_FEATURES.map(({ icon, title, body }) => (
              <div key={title} className="bg-cream p-5 border border-[#DDD8CE]">
                <div className="text-2xl mb-3" aria-hidden="true">{icon}</div>
                <div className="font-condensed font-bold text-[0.85rem] tracking-[0.05em] text-charcoal mb-1.5">
                  {title}
                </div>
                <p className="font-sans text-[0.8rem] leading-relaxed text-slate">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 8. PARTNER CTA BANNER                                       */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="bg-crimson">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-heading font-bold text-[1.8rem] md:text-[2.2rem] leading-tight text-white mb-2">
              Your town has a story. Help us tell it.
            </h2>
            <p className="font-serif text-[0.95rem] text-white/80">
              We partner with tourism offices, historical societies, and preservation organizations.
            </p>
          </div>
          <div className="flex-shrink-0">
            <NextLink
              href="/partner"
              className="no-underline inline-flex items-center px-7 py-3.5 bg-white text-crimson font-condensed font-bold text-[0.875rem] tracking-[0.08em] uppercase transition-colors duration-200 hover:bg-ivory"
            >
              Partner With Us &rarr;
            </NextLink>
          </div>
        </div>
      </section>

    </main>
  );
}
