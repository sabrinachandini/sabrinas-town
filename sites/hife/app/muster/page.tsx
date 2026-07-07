import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Muster — Plan Your Revolutionary War Road Trip | History Is For Everyone",
  description:
    "Muster a multi-day Revolutionary War road trip. Get a day-by-day plan with historical sites, living history events, and HIFE's expert voice — in under 5 minutes.",
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Tell us your trip",
    body: "Dates, start and end points, what kind of history you're after. Takes about a minute.",
  },
  {
    step: "02",
    title: "We muster a plan",
    body: "Claude — powered by History Is For Everyone's content — drafts a day-by-day muster built around sites and real events happening on your dates.",
  },
  {
    step: "03",
    title: "Edit, share, go",
    body: "Swap stops, adjust the order, print your muster or share the link. Your trip, your way.",
  },
];

const INTEREST_CHIPS = [
  "Battles & skirmishes",
  "Founding figures",
  "Women of the Revolution",
  "Spies & secret networks",
  "Taverns & daily life",
  "African American & Indigenous perspectives",
  "Naval history",
];

export default function MusterLandingPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* ── Hero ── */}
      <div className="bg-[#1a3a72] relative overflow-hidden">
        <div
          aria-hidden
          className="absolute right-[-0.04em] top-[-0.1em] font-display leading-none text-white/[0.04] pointer-events-none select-none"
          style={{ fontSize: "clamp(6rem,18vw,18rem)" }}
        >
          MUSTER
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-16 pt-16 pb-20 md:pt-24 md:pb-28">
          <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-cream/40 mb-4">
            From History Is For Everyone
          </p>
          <h1
            className="font-display text-cream leading-[0.88] tracking-[-0.03em] mb-6"
            style={{ fontSize: "clamp(52px,10vw,120px)" }}
          >
            Muster
          </h1>
          <div className="w-16 h-[3px] bg-[#cc3322] mb-8" />
          <p className="font-editorial italic font-light text-cream/70 max-w-[540px] leading-[1.65] mb-10"
             style={{ fontSize: "clamp(18px,2.2vw,24px)" }}>
            A Revolutionary War road trip, assembled for you — day by day, site by site, with real living-history events on your exact dates.
          </p>
          <Link
            href="/muster/new"
            className="no-underline inline-block bg-[#cc3322] text-cream font-ui text-[11px] font-semibold uppercase tracking-[0.22em] px-8 py-4 border-2 border-[#cc3322] hover:bg-transparent hover:text-cream transition-colors"
          >
            Muster a Trip →
          </Link>
        </div>
      </div>

      {/* ── How it works ── */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 md:py-24">
        <div className="border-t-[3px] border-ink pt-6 mb-12">
          <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[#cc3322] flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-[#cc3322] before:block">
            How It Works
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {HOW_IT_WORKS.map(({ step, title, body }) => (
            <div key={step}>
              <p className="font-display text-[#cc3322]/30 text-[80px] leading-none mb-4 tracking-[-0.04em]">
                {step}
              </p>
              <h2 className="font-display text-[22px] text-ink tracking-[-0.02em] mb-3">{title}</h2>
              <p className="font-ui text-[17px] text-ink/55 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Interest preview ── */}
      <div className="bg-[#1a3a72]/5 border-t border-b border-ink/8">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-12">
          <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-ink/40 mb-5">
            Tell us what you care about
          </p>
          <div className="flex flex-wrap gap-2">
            {INTEREST_CHIPS.map((chip) => (
              <span
                key={chip}
                className="font-ui text-[11px] uppercase tracking-[0.1em] text-[#1a3a72] border border-[#1a3a72]/30 px-3 py-1.5"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Who it's for ── */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 md:py-24">
        <div className="border-t-[3px] border-ink pt-6 mb-12">
          <p className="font-ui text-[11px] font-semibold tracking-[0.28em] uppercase text-[#cc3322] flex items-center gap-2 before:content-[''] before:w-4 before:h-[2px] before:bg-[#cc3322] before:block">
            Built for Every Kind of Traveler
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { label: "History buffs", desc: "Lesser-known sites, primary source connections, scholarly depth." },
            { label: "Families with kids", desc: "Reenactments, interactive museums, manageable pacing, ice cream stops." },
            { label: "Teachers & school groups", desc: "Bus-friendly logistics, grade-appropriate framing, printable plans." },
            { label: "Casual tourists", desc: "The highlight reel plus local flavor — no PhD required." },
          ].map(({ label, desc }) => (
            <div key={label} className="border border-ink/10 p-6">
              <h3 className="font-display text-[18px] text-ink tracking-[-0.01em] mb-2">{label}</h3>
              <p className="font-ui text-[16px] text-ink/50 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="bg-[#1a3a72] border-t-4 border-[#cc3322]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-cream text-[clamp(24px,4vw,40px)] leading-tight tracking-[-0.02em] mb-1">
              Ready to muster?
            </p>
            <p className="font-ui text-[16px] text-cream/50">No account required. Free to use.</p>
          </div>
          <Link
            href="/muster/new"
            className="no-underline flex-shrink-0 inline-block bg-cream text-[#1a3a72] font-ui text-[11px] font-semibold uppercase tracking-[0.22em] px-8 py-4 border-2 border-cream hover:bg-transparent hover:text-cream transition-colors"
          >
            Muster a Trip →
          </Link>
        </div>
      </div>
    </div>
  );
}
