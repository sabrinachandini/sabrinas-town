import prisma from "@/lib/prisma";

export const metadata = {
  title: "Browse Towns | History is for Everyone",
  description:
    "77 towns across 13 original states — every place where the American Revolution happened.",
  openGraph: {
    title: "Browse Towns",
    description: "77 towns across 13 original states — every place where the American Revolution happened.",
    url: "https://sabrinas-town.vercel.app/towns",
  },
  alternates: { canonical: "https://sabrinas-town.vercel.app/towns" },
};

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

const ABBREV_TO_NAME: Record<string, string> = {
  MA: "Massachusetts", NJ: "New Jersey", NY: "New York",
  PA: "Pennsylvania", VA: "Virginia", SC: "South Carolina",
  CT: "Connecticut", NC: "North Carolina", RI: "Rhode Island",
  MD: "Maryland", NH: "New Hampshire", GA: "Georgia",
  VT: "Vermont", DE: "Delaware", ME: "Maine",
  WV: "West Virginia", OH: "Ohio", IL: "Illinois",
};

const STATE_ORDER = [
  "Massachusetts", "New Jersey", "New York", "Pennsylvania", "Virginia",
  "South Carolina", "Connecticut", "North Carolina", "Rhode Island",
  "Maryland", "New Hampshire", "Georgia", "Vermont", "Delaware", "Maine",
  "West Virginia", "Ohio", "Illinois",
];

const STATE_IDS: Record<string, string> = {
  Massachusetts: "ma", "New Jersey": "nj", "New York": "ny",
  Pennsylvania: "pa", Virginia: "va", "South Carolina": "sc",
  Connecticut: "ct", "North Carolina": "nc", "Rhode Island": "ri",
  Maryland: "md", "New Hampshire": "nh", Georgia: "ga",
  Vermont: "vt", Delaware: "de", Maine: "me",
  "West Virginia": "wv", Ohio: "oh", Illinois: "il",
};

function Squiggle({ width = 340, stroke = "rgba(255,255,255,0.35)", strokeWidth = "2.5" }: {
  width?: number; stroke?: string; strokeWidth?: string;
}) {
  return (
    <svg width={width} height="12" viewBox="0 0 340 12" style={{ display: "block" }}>
      <path
        d="M0 8 Q21 2 42 8 Q63 14 85 7 Q106 1 127 7 Q148 13 170 7 Q191 2 212 7 Q233 13 255 7 Q276 2 297 7 Q318 13 340 6"
        stroke={stroke} strokeWidth={strokeWidth} fill="none" strokeLinecap="round"
      />
    </svg>
  );
}

function WavyRule() {
  return (
    <svg width="260" height="10" viewBox="0 0 260 10" style={{ display: "block", marginTop: 6 }}>
      <path
        d="M0 6 Q16 1 33 6 Q49 11 65 5 Q81 0 98 5 Q114 10 130 5 Q146 1 163 5 Q179 10 195 5 Q211 1 228 5 Q244 10 260 4"
        stroke="#c8222a" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3"
      />
    </svg>
  );
}

export default async function TownsPage({ searchParams }: PageProps) {
  const { q = "" } = await searchParams;
  let towns: { id: string; name: string; state: string; slug: string; heroSummary40: string; execSummary150: string }[] = [];
  try {
    towns = await prisma.town.findMany({
      select: { id: true, name: true, state: true, slug: true, heroSummary40: true, execSummary150: true },
      orderBy: { name: "asc" },
    });
  } catch (err) {
    console.error("[TownsPage] DB error:", err);
  }

  const query = q.trim().toLowerCase();
  const filtered = query
    ? towns.filter(
        (t) =>
          t.name.toLowerCase().includes(query) ||
          (ABBREV_TO_NAME[t.state] ?? t.state).toLowerCase().includes(query) ||
          t.state.toLowerCase().includes(query)
      )
    : towns;

  const townsByState: Record<string, typeof filtered> = {};
  for (const town of filtered) {
    const stateName = ABBREV_TO_NAME[town.state] ?? town.state;
    if (!townsByState[stateName]) townsByState[stateName] = [];
    townsByState[stateName].push(town);
  }

  const statesToShow = STATE_ORDER.filter((s) => townsByState[s]);

  return (
    <main>
      {/* ── RED hero ── */}
      <section
        className="relative overflow-hidden px-5 sm:px-[52px] pt-10 sm:pt-16 pb-10 sm:pb-14"
        style={{ background: "var(--red)", borderBottom: "4px solid var(--ink)" }}
      >
        {/* Ghost */}
        <div
          aria-hidden
          className="absolute right-[-10px] top-[-20px] pointer-events-none select-none z-0"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(120px, 30vw, 460px)",
            lineHeight: 1,
            color: "rgba(255,255,255,0.07)",
            letterSpacing: "-0.05em",
          }}
        >
          Towns
        </div>

        {/* Tilted stamp — desktop only */}
        <div
          aria-hidden
          className="hidden sm:block absolute top-6 right-6 z-[2]"
          style={{
            border: "2px solid rgba(255,255,255,0.45)",
            color: "rgba(255,255,255,0.6)",
            fontFamily: "var(--font-dm)",
            fontSize: 8,
            fontWeight: 700,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            padding: "6px 12px",
            transform: "rotate(-2deg)",
          }}
        >
          75 Towns · 16 States
        </div>

        {/* Stars */}
        <svg
          aria-hidden
          className="hidden sm:block absolute top-5 right-20 pointer-events-none z-[2]"
          style={{ opacity: 0.2 }}
          width="52" height="52" viewBox="0 0 52 52" fill="none"
        >
          <path d="M11 25 L12.4 30 L18 30 L13.5 33.5 L15 39 L11 35.8 L7 39 L8.5 33.5 L4 30 L9.6 30 Z" fill="#4A6A9B" />
          <path d="M38 10 L39 13 L42 13 L39.8 14.8 L40.8 18 L38 16.2 L35.2 18 L36.2 14.8 L34 13 L37 13 Z" fill="#f2e6c8" />
          <path d="M44 36 L44.7 38.4 L47.3 38.4 L45.2 39.9 L45.9 42.3 L44 41 L42.1 42.3 L42.8 39.9 L40.7 38.4 L43.3 38.4 Z" fill="#4A6A9B" />
        </svg>

        {/* Content */}
        <div className="relative z-[1] max-w-[700px]">
          <p
            className="flex items-center gap-3 mb-5"
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            <span className="w-5 h-[2px] flex-shrink-0" style={{ background: "rgba(255,255,255,0.5)" }} />
            The Revolutionary Town Network
          </p>

          <h1
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(40px, 11vw, 136px)",
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              color: "white",
              margin: 0,
            }}
          >
            Every Town.
          </h1>

          <span
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(40px, 11vw, 136px)",
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              color: "rgba(255,255,255,0.25)",
              fontStyle: "italic",
              display: "block",
              transform: "rotate(-1.5deg) translateX(20px)",
              transformOrigin: "left center",
              marginTop: 4,
            }}
          >
            Everywhere.
          </span>

          <div className="mt-6">
            <Squiggle width={280} stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" />
          </div>

          <p
            className="mt-5 max-w-[460px]"
            style={{
              fontFamily: "var(--font-instrument)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(15px, 2vw, 19px)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.5,
            }}
          >
            77 towns across 13 original states — every place where the American Revolution happened.
          </p>
        </div>
      </section>

      {/* ── BLUE search + state nav ── */}
      <section style={{ background: "var(--blue)", borderBottom: "4px solid var(--ink)" }}>
        {/* Search row */}
        <form
          action="/towns"
          method="GET"
          className="flex items-center gap-4 px-5 sm:px-[52px] py-[18px]"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          <span
            className="flex-shrink-0"
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Search
          </span>
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Filter towns..."
            className="towns-search-input flex-1 min-w-0"
            style={{
              fontFamily: "var(--font-instrument)",
              fontStyle: "italic",
              fontSize: 16,
              color: "white",
              background: "transparent",
              border: "none",
              borderBottom: "2px solid rgba(255,255,255,0.22)",
              padding: "4px 0",
            }}
          />
          {q && (
            <a
              href="/towns"
              className="flex-shrink-0"
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 10,
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                letterSpacing: "0.1em",
              }}
            >
              Clear
            </a>
          )}
        </form>

        {/* State pills */}
        <div className="px-5 sm:px-[52px] py-3 flex flex-wrap gap-1">
          {STATE_ORDER.map((state) => (
            <a
              key={state}
              href={`#${STATE_IDS[state]}`}
              className="state-pill"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: 13,
                color: "rgba(255,255,255,0.75)",
                padding: "4px 8px",
                textDecoration: "none",
              }}
            >
              {state}
            </a>
          ))}
          <div className="w-full pt-1.5">
            <Squiggle width={120} stroke="#4A6A9B" strokeWidth="1.8" />
          </div>
        </div>
      </section>

      {/* ── PAPER town list ── */}
      <section
        className="px-5 sm:px-[52px] pb-16 sm:pb-24"
        style={{ background: "var(--paper)" }}
      >
        {filtered.length === 0 && q ? (
          <div className="py-20 text-center">
            <p
              style={{
                fontFamily: "var(--font-instrument)",
                fontStyle: "italic",
                fontSize: 18,
                color: "var(--ink)",
              }}
            >
              No towns match &ldquo;{q}&rdquo;.{" "}
              <a href="/towns" style={{ color: "var(--red)" }}>Browse all towns</a>
            </p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-24 text-center max-w-[480px] mx-auto">
            <p
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(60px,10vw,100px)",
                lineHeight: 1,
                color: "rgba(20,16,10,0.06)",
                letterSpacing: "-0.04em",
              }}
            >
              503
            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "var(--font-instrument)",
                fontStyle: "italic",
                fontSize: 20,
                color: "var(--ink)",
                lineHeight: 1.5,
              }}
            >
              Towns are temporarily unavailable.
            </p>
            <p
              className="mt-3"
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 12,
                color: "rgba(20,16,10,0.4)",
                letterSpacing: "0.05em",
              }}
            >
              The database is waking up — try refreshing in a moment.
            </p>
            <a
              href="/towns"
              style={{
                display: "inline-block",
                marginTop: 20,
                fontFamily: "var(--font-dm)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--red)",
                border: "1.5px solid var(--red)",
                padding: "10px 24px",
                textDecoration: "none",
              }}
            >
              Refresh
            </a>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-x-[72px]">
            {statesToShow.map((state) => {
              const id = STATE_IDS[state];
              const stateTowns = (townsByState[state] || []).sort((a, b) =>
                a.name.localeCompare(b.name)
              );
              return (
                <div key={state} id={id} className="pt-10 sm:pt-14">
                  <div className="mb-2">
                    <h2
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "clamp(26px, 3.2vw, 44px)",
                        lineHeight: 0.92,
                        letterSpacing: "-0.04em",
                        color: "var(--ink)",
                        margin: 0,
                      }}
                    >
                      <span style={{ color: "var(--red)", opacity: 0.4, fontWeight: 300, marginRight: 4 }}>/</span>
                      {state}
                      <span style={{ fontSize: 13, color: "var(--red)", marginLeft: 10 }}>
                        {stateTowns.length}
                      </span>
                    </h2>
                    <WavyRule />
                  </div>

                  <div>
                    {stateTowns.map((town) => {
                      const snippet = (town.execSummary150 ?? town.heroSummary40 ?? "").slice(0, 60);
                      return (
                        <a
                          key={town.id}
                          href={`/towns/${town.slug}`}
                          className="town-row flex items-baseline py-[11px] border-b no-underline"
                          style={{ borderBottomColor: "rgba(20,16,10,0.07)", transition: "padding-left 0.15s" }}
                        >
                          <span
                            className="town-name-text flex-shrink-0"
                            style={{
                              fontFamily: "var(--font-instrument)",
                              fontStyle: "italic",
                              fontWeight: 400,
                              fontSize: "clamp(15px, 1.5vw, 20px)",
                              letterSpacing: "-0.02em",
                              color: "var(--ink)",
                              minWidth: 120,
                              transition: "color 0.15s",
                            }}
                          >
                            {town.name}
                          </span>
                          {/* Snippet — hidden on mobile */}
                          {snippet && (
                            <>
                              <span
                                className="hidden sm:inline-block flex-shrink-0 self-center rounded-full"
                                style={{ width: 4, height: 4, background: "var(--blue)", opacity: 0.38, margin: "0 13px 3px" }}
                              />
                              <span
                                className="hidden sm:block overflow-hidden flex-1"
                                style={{
                                  fontFamily: "var(--font-instrument)",
                                  fontStyle: "italic",
                                  fontWeight: 300,
                                  fontSize: 13,
                                  color: "rgba(20,16,10,0.42)",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {snippet}
                              </span>
                            </>
                          )}
                          <span
                            className="town-arrow flex-shrink-0 ml-auto sm:ml-2"
                            style={{ color: "var(--red)", fontSize: 12, opacity: 0, transition: "opacity 0.15s" }}
                          >
                            →
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ── INK interstitial ── */}
      <section
        className="relative overflow-hidden px-5 sm:px-[52px] py-12 sm:py-16"
        style={{ background: "var(--ink)", borderTop: "4px solid var(--ink)", borderBottom: "4px solid var(--ink)" }}
      >
        <div className="absolute top-0 right-0 bottom-0 w-1.5 z-0" style={{ background: "var(--red)" }} aria-hidden />
        <div
          aria-hidden
          className="absolute bottom-[-28px] left-7 pointer-events-none select-none z-0"
          style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(120px, 25vw, 300px)", lineHeight: 1, color: "rgba(255,255,255,0.04)" }}
        >
          1775
        </div>

        <div className="relative z-[1] max-w-[640px]">
          <p
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(28px, 5vw, 64px)",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              color: "white",
              margin: 0,
            }}
          >
            The war was won{" "}
            <span style={{ color: "#6b8fd4", display: "inline-block", transform: "rotate(-2deg)", transformOrigin: "left center" }}>
              here.
            </span>
            <br />In kitchens, fields,<br />and front doors.
          </p>
          <div className="mt-4">
            <Squiggle width={220} stroke="rgba(107,143,212,0.5)" strokeWidth="2.5" />
          </div>
          <p
            className="mt-6"
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.4)" }}>— </span>
            History Is For Everyone · The American Revolution
          </p>
        </div>

        <svg aria-hidden className="absolute bottom-6 right-6 pointer-events-none" style={{ opacity: 0.1 }} width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="11.5" y="0" width="5" height="28" rx="2.5" fill="white" />
          <rect x="0" y="11.5" width="28" height="5" rx="2.5" fill="white" />
        </svg>
      </section>

      {/* ── RED CTA ── */}
      <section
        className="relative overflow-hidden px-5 sm:px-[52px] py-14 sm:py-20"
        style={{ background: "var(--red)", borderTop: "4px solid var(--ink)" }}
      >
        <div
          aria-hidden
          className="absolute right-[-10px] bottom-[-30px] pointer-events-none select-none z-0"
          style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(100px, 25vw, 340px)", lineHeight: 1, color: "rgba(255,255,255,0.07)" }}
        >
          Teach
        </div>

        <svg aria-hidden className="hidden sm:block absolute top-5 right-5 pointer-events-none z-[2]" style={{ opacity: 0.2 }} width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path d="M11 25 L12.4 30 L18 30 L13.5 33.5 L15 39 L11 35.8 L7 39 L8.5 33.5 L4 30 L9.6 30 Z" fill="#4A6A9B" />
          <path d="M38 10 L39 13 L42 13 L39.8 14.8 L40.8 18 L38 16.2 L35.2 18 L36.2 14.8 L34 13 L37 13 Z" fill="#f2e6c8" />
        </svg>

        <div className="relative z-[1] max-w-[640px]">
          <div
            className="inline-block mb-5"
            style={{
              border: "2.5px solid rgba(255,255,255,0.45)",
              color: "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-dm)",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              padding: "7px 14px",
              transform: "rotate(-2.5deg)",
              transformOrigin: "left center",
            }}
          >
            Open to Everyone
          </div>

          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(48px, 8vw, 100px)",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              color: "white",
              margin: "12px 0 0",
            }}
          >
            Teach the<br />
            <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.85)", display: "inline-block", transform: "rotate(-1.5deg)", transformOrigin: "left center" }}>
              Revolution.
            </span>
          </h2>

          <div className="my-5">
            <Squiggle width={240} stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" />
          </div>

          <p
            className="mb-8"
            style={{
              fontFamily: "var(--font-instrument)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(15px, 2vw, 19px)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.5,
            }}
          >
            Lesson plans, primary sources, and quizzes for every town in the network.
          </p>

          <a
            href="/teach"
            className="block w-full sm:w-auto sm:inline-block text-center"
            style={{
              background: "var(--ink)",
              color: "var(--cream)",
              fontFamily: "var(--font-dm)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "16px 36px",
              border: "2px solid var(--ink)",
              boxShadow: "5px 5px 0 rgba(255,255,255,0.25)",
              textDecoration: "none",
              maxWidth: 300,
            }}
          >
            Teacher Resources →
          </a>
        </div>
      </section>
    </main>
  );
}
