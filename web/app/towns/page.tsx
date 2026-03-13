import prisma from "@/lib/prisma";

export const metadata = {
  title: "Browse Towns | History is for Everyone",
  description:
    "77 towns across 13 original states — every place where the American Revolution happened.",
};

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

// DB stores two-letter abbreviations — map to display names
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

  // Group by full state name (DB returns abbreviations like "MA")
  const townsByState: Record<string, typeof filtered> = {};
  for (const town of filtered) {
    const stateName = ABBREV_TO_NAME[town.state] ?? town.state;
    if (!townsByState[stateName]) townsByState[stateName] = [];
    townsByState[stateName].push(town);
  }

  const statesToShow = STATE_ORDER.filter((s) => townsByState[s]);

  return (
    <main>
      {/* RED hero */}
      <section
        className="page-pad"
        style={{
          background: "var(--red)",
          padding: "64px 52px 56px",
          borderBottom: "4px solid var(--ink)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ghost */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: -10,
            top: -20,
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(160px, 30vw, 460px)",
            lineHeight: 1,
            color: "rgba(255,255,255,0.07)",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
            letterSpacing: "-0.05em",
          }}
        >
          Towns
        </div>

        {/* Tilted stamp — whimsy */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            border: "2px solid rgba(255,255,255,0.45)",
            color: "rgba(255,255,255,0.6)",
            fontFamily: "var(--font-dm)",
            fontSize: 8,
            fontWeight: 700,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            padding: "6px 12px",
            transform: "rotate(-2deg)",
            zIndex: 2,
          }}
        >
          75 Towns · 16 States
        </div>

        {/* Stars — whimsy */}
        <svg
          aria-hidden
          style={{ position: "absolute", top: 20, right: 80, pointerEvents: "none", opacity: 0.2, zIndex: 2 }}
          width="52" height="52" viewBox="0 0 52 52" fill="none"
        >
          <path d="M11 25 L12.4 30 L18 30 L13.5 33.5 L15 39 L11 35.8 L7 39 L8.5 33.5 L4 30 L9.6 30 Z" fill="#e8b84b" />
          <path d="M38 10 L39 13 L42 13 L39.8 14.8 L40.8 18 L38 16.2 L35.2 18 L36.2 14.8 L34 13 L37 13 Z" fill="#f2e6c8" />
          <path d="M44 36 L44.7 38.4 L47.3 38.4 L45.2 39.9 L45.9 42.3 L44 41 L42.1 42.3 L42.8 39.9 L40.7 38.4 L43.3 38.4 Z" fill="#e8b84b" />
        </svg>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700 }}>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 20,
                height: 2,
                background: "rgba(255,255,255,0.5)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            The Revolutionary Town Network
          </p>

          <h1
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(64px, 10vw, 136px)",
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
              fontSize: "clamp(64px, 10vw, 136px)",
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

          <div style={{ marginTop: 24 }}>
            <Squiggle width={340} stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" />
          </div>

          <p
            style={{
              fontFamily: "var(--font-instrument)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: 19,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 460,
              marginTop: 24,
              lineHeight: 1.5,
            }}
          >
            77 towns across 13 original states — every place where the American Revolution happened.
          </p>
        </div>
      </section>

      {/* BLUE search + state nav */}
      <section
        style={{
          background: "var(--blue)",
          borderBottom: "4px solid var(--ink)",
        }}
      >
        {/* Search row */}
        <form
          action="/towns"
          method="GET"
          className="page-pad"
          style={{
            padding: "18px 52px",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.38)",
              flexShrink: 0,
            }}
          >
            Search
          </span>
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Filter towns..."
            className="towns-search-input"
            style={{
              fontFamily: "var(--font-instrument)",
              fontStyle: "italic",
              fontSize: 16,
              color: "white",
              background: "transparent",
              border: "none",
              borderBottom: "2px solid rgba(255,255,255,0.22)",
              width: 300,
              padding: "4px 0",
            }}
          />
          {q && (
            <a
              href="/towns"
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
        <div
          className="page-pad"
          style={{ padding: "12px 52px 14px", display: "flex", flexWrap: "wrap", gap: 4 }}
        >
          {STATE_ORDER.map((state) => (
            <a
              key={state}
              href={`#${STATE_IDS[state]}`}
              className="state-pill"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: 13,
                color: "rgba(255,255,255,0.38)",
                padding: "4px 10px",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
            >
              {state}
            </a>
          ))}
          {/* Small yellow squiggle at end of state pills — whimsy */}
          <div style={{ width: "100%", paddingTop: 6 }}>
            <Squiggle width={120} stroke="#e8b84b" strokeWidth="1.8" />
          </div>
        </div>
      </section>

      {/* PAPER two-column town list */}
      <section
        className="page-pad"
        style={{ background: "var(--paper)", padding: "0 52px 96px" }}
      >
        {filtered.length === 0 ? (
          <div style={{ padding: "80px 0", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--font-instrument)",
                fontStyle: "italic",
                fontSize: 18,
                color: "var(--ink)",
              }}
            >
              No towns match &ldquo;{q}&rdquo;.{" "}
              <a href="/towns" style={{ color: "var(--red)" }}>
                Browse all towns
              </a>
            </p>
          </div>
        ) : (
          <div
            className="towns-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0 72px",
            }}
          >
            {statesToShow.map((state) => {
              const id = STATE_IDS[state];
              const stateTowns = (townsByState[state] || []).sort((a, b) =>
                a.name.localeCompare(b.name)
              );
              return (
                <div key={state} id={id} style={{ paddingTop: 56 }}>
                  <div style={{ marginBottom: 8 }}>
                    <h2
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "clamp(30px, 3.2vw, 44px)",
                        lineHeight: 0.92,
                        letterSpacing: "-0.04em",
                        color: "var(--ink)",
                        margin: 0,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--red)",
                          opacity: 0.4,
                          fontWeight: 300,
                          marginRight: 4,
                        }}
                      >
                        /
                      </span>
                      {state}
                      <span
                        style={{
                          fontSize: 13,
                          color: "var(--red)",
                          marginLeft: 10,
                        }}
                      >
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
                          className="town-row"
                          style={{
                            display: "flex",
                            alignItems: "baseline",
                            padding: "11px 0",
                            borderBottom: "1px solid rgba(20,16,10,0.07)",
                            textDecoration: "none",
                            transition: "padding-left 0.15s",
                          }}
                        >
                          <span
                            className="town-name-text"
                            style={{
                              fontFamily: "var(--font-instrument)",
                              fontStyle: "italic",
                              fontWeight: 400,
                              fontSize: "clamp(15px, 1.5vw, 20px)",
                              letterSpacing: "-0.02em",
                              color: "var(--ink)",
                              minWidth: 130,
                              flexShrink: 0,
                              transition: "color 0.15s",
                            }}
                          >
                            {town.name}
                          </span>
                          <span
                            style={{
                              width: 4,
                              height: 4,
                              background: "var(--blue)",
                              opacity: 0.38,
                              borderRadius: "50%",
                              margin: "0 13px 3px",
                              flexShrink: 0,
                              alignSelf: "center",
                            }}
                          />
                          <span
                            style={{
                              fontFamily: "var(--font-instrument)",
                              fontStyle: "italic",
                              fontWeight: 300,
                              fontSize: 13,
                              color: "rgba(20,16,10,0.42)",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              flex: 1,
                            }}
                          >
                            {snippet}
                          </span>
                          <span
                            className="town-arrow"
                            style={{
                              color: "var(--red)",
                              fontSize: 12,
                              opacity: 0,
                              marginLeft: 8,
                              flexShrink: 0,
                              transition: "opacity 0.15s",
                            }}
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

      {/* INK interstitial */}
      <section
        className="page-pad"
        style={{
          background: "var(--ink)",
          padding: "64px 52px 72px",
          borderTop: "4px solid var(--ink)",
          borderBottom: "4px solid var(--ink)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Red right edge */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: 6,
            background: "var(--red)",
            zIndex: 0,
          }}
        />
        {/* Ghost */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: -28,
            left: 28,
            fontFamily: "var(--font-bebas)",
            fontSize: 300,
            lineHeight: 1,
            color: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          1775
        </div>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: 640 }}>
          <p
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              color: "white",
              margin: 0,
            }}
          >
            The war was won{" "}
            <span
              style={{
                color: "#6b8fd4",
                display: "inline-block",
                transform: "rotate(-2deg)",
                transformOrigin: "left center",
              }}
            >
              here.
            </span>
            <br />
            In kitchens, fields,
            <br />
            and front doors.
          </p>

          <div style={{ marginTop: 16 }}>
            <Squiggle width={220} stroke="rgba(107,143,212,0.5)" strokeWidth="2.5" />
          </div>

          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.28)",
              marginTop: 24,
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.18)" }}>— </span>
            History Is For Everyone · The American Revolution
          </p>
        </div>

        {/* Cross mark — whimsy */}
        <svg aria-hidden style={{ position: "absolute", bottom: 24, right: 24, opacity: 0.1, pointerEvents: "none" }} width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="11.5" y="0" width="5" height="28" rx="2.5" fill="white" />
          <rect x="0" y="11.5" width="28" height="5" rx="2.5" fill="white" />
        </svg>
      </section>

      {/* RED CTA */}
      <section
        className="page-pad"
        style={{
          background: "var(--red)",
          padding: "80px 52px 88px",
          borderTop: "4px solid var(--ink)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ghost */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: -10,
            bottom: -30,
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(120px, 25vw, 340px)",
            lineHeight: 1,
            color: "rgba(255,255,255,0.07)",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          Teach
        </div>

        {/* Stars — whimsy */}
        <svg aria-hidden style={{ position: "absolute", top: 20, right: 20, opacity: 0.2, pointerEvents: "none", zIndex: 2 }} width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path d="M11 25 L12.4 30 L18 30 L13.5 33.5 L15 39 L11 35.8 L7 39 L8.5 33.5 L4 30 L9.6 30 Z" fill="#e8b84b" />
          <path d="M38 10 L39 13 L42 13 L39.8 14.8 L40.8 18 L38 16.2 L35.2 18 L36.2 14.8 L34 13 L37 13 Z" fill="#f2e6c8" />
        </svg>
        <svg aria-hidden style={{ position: "absolute", bottom: 24, left: 24, opacity: 0.15, pointerEvents: "none", zIndex: 2 }} width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 5 L22 15 L32 15 L24 21 L27 31 L20 25 L13 31 L16 21 L8 15 L18 15 Z" fill="#f2e6c8" />
        </svg>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: 640 }}>
          <div
            style={{
              display: "inline-block",
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
              marginBottom: 20,
            }}
          >
            Open to Everyone
          </div>

          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(56px, 8vw, 100px)",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              color: "white",
              margin: "12px 0 0",
            }}
          >
            Teach the
            <br />
            <span
              style={{
                fontStyle: "italic",
                color: "rgba(255,255,255,0.85)",
                display: "inline-block",
                transform: "rotate(-1.5deg)",
                transformOrigin: "left center",
              }}
            >
              Revolution.
            </span>
          </h2>

          <div style={{ margin: "20px 0" }}>
            <Squiggle width={260} stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" />
          </div>

          <p
            style={{
              fontFamily: "var(--font-instrument)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: 19,
              color: "rgba(255,255,255,0.75)",
              marginBottom: 32,
              lineHeight: 1.5,
            }}
          >
            Lesson plans, primary sources, and quizzes for every town in the network.
          </p>

          <a
            href="/teach"
            className="btn-dark"
            style={{
              display: "block",
              maxWidth: 300,
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
              textAlign: "center",
            }}
          >
            Teacher Resources →
          </a>
        </div>
      </section>
    </main>
  );
}
