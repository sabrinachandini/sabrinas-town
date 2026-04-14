import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teach | History is for Everyone",
  description:
    "Classroom-ready resources for teaching the American Revolution through local history. Lesson plans, primary sources, quizzes, and comparative assignments aligned to state standards.",
};

const STATES = [
  {
    name: "Massachusetts",
    slug: "massachusetts",
    description:
      "Ten towns spanning the opening acts of the Revolution — from the shots fired at Lexington and Concord to the siege of Boston, the maritime resistance of the North Shore, and the interior defiance that shut down royal courts before a single battle was fought.",
  },
  {
    name: "New Jersey",
    slug: "new-jersey",
    description:
      "The crossroads of the war — from Washington\u2019s desperate crossing of the Delaware to two brutal winters at Morristown that tested the Continental Army to its limits.",
  },
  {
    name: "Virginia",
    slug: "virginia",
    description:
      "Virginia produced the Revolution\u2019s most consequential leaders — Washington, Jefferson, Madison, Henry — and its final chapter was written at Yorktown, where the last major British army surrendered in 1781.",
  },
  {
    name: "New York",
    slug: "new-york",
    description:
      "New York was the strategic prize of the entire war. The British held New York City from 1776 to 1783; the Patriot victory at Saratoga brought France into the war; and Washington\u2019s army spent its most desperate years in the Hudson Valley.",
  },
  {
    name: "Pennsylvania",
    slug: "pennsylvania",
    description:
      "Pennsylvania hosted both the Continental Congress and the darkest winter of the war. From the political debates in Philadelphia to the suffering at Valley Forge, the state\u2019s history captures the Revolution at its most fragile.",
  },
  {
    name: "South Carolina",
    slug: "south-carolina",
    description:
      "South Carolina\u2019s war was the most brutal in the colonies — a civil war within a war, with Patriot and Loyalist militias fighting in a landscape of isolated plantations and dense backcountry.",
  },
  {
    name: "Connecticut",
    slug: "connecticut",
    description:
      "Connecticut\u2019s Revolutionary story spans the colony\u2019s maritime economy, Tory loyalists, and the brutal British raid on Danbury that pushed many fence-sitters toward the Patriot cause.",
  },
  {
    name: "North Carolina",
    slug: "north-carolina",
    description:
      "North Carolina\u2019s backcountry became the decisive theater of the Southern campaign. The overmountain men at Kings Mountain and Nathanael Greene\u2019s grinding campaign broke British control of the South.",
  },
  {
    name: "Rhode Island",
    slug: "rhode-island",
    description:
      "Newport, occupied by the British for three years, and Providence, which emerged as the Patriot headquarters and naval center — two towns that capture the tension at the heart of the Revolution.",
  },
  {
    name: "Maryland",
    slug: "maryland",
    description:
      "Maryland\u2019s location between the Northern and Southern colonies made it a crucial logistical hub, and its state constitution of 1776 became a model for republican government studied throughout the founding generation.",
  },
  {
    name: "New Hampshire",
    slug: "new-hampshire",
    description:
      "New Hampshire struck first — its militia seized Fort William and Mary in December 1774, months before Lexington, making it one of the earliest acts of armed resistance in the colonies.",
  },
  {
    name: "Georgia",
    slug: "georgia",
    description:
      "Georgia was the only colony the British successfully reconquered — and held for years. Savannah\u2019s occupation and the failed Franco-American siege teach students about the war\u2019s international dimensions and the limits of alliance.",
  },
  {
    name: "Vermont",
    slug: "vermont",
    description:
      "Vermont in 1777 was a disputed territory claimed by both New York and New Hampshire, and its Green Mountain Boys fought for independence on two fronts: against the British and against colonial authority.",
  },
  {
    name: "Delaware",
    slug: "delaware",
    description:
      "Delaware\u2019s decision to break with Pennsylvania and form its own delegation gave the Continental Congress its key swing vote for independence, and its \u201cBlue Hen\u201d regiment became one of the Continental Army\u2019s most celebrated units.",
  },
  {
    name: "Maine",
    slug: "maine",
    description:
      "Maine, then part of Massachusetts, suffered some of the war\u2019s earliest British raids — Falmouth (now Portland) was bombarded and burned in 1775 — and its Penobscot Expedition of 1779 was one of the largest American naval disasters.",
  },
];

function Squiggle({ width = 360, stroke = "rgba(255,255,255,0.3)", strokeWidth = "2.5" }: {
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

export default function TeachPage() {
  return (
    <main>
      {/* BLUE hero */}
      <section
        className="page-pad"
        style={{
          background: "var(--blue)",
          padding: "88px 52px 80px",
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
            fontSize: "clamp(180px, 35vw, 480px)",
            lineHeight: 1,
            color: "rgba(255,255,255,0.06)",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
            letterSpacing: "-0.05em",
          }}
        >
          Teach
        </div>

        {/* Stars — whimsy */}
        <svg aria-hidden style={{ position: "absolute", top: 20, right: 20, opacity: 0.2, pointerEvents: "none", zIndex: 2 }} width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path d="M11 25 L12.4 30 L18 30 L13.5 33.5 L15 39 L11 35.8 L7 39 L8.5 33.5 L4 30 L9.6 30 Z" fill="#e8b84b" />
          <path d="M38 10 L39 13 L42 13 L39.8 14.8 L40.8 18 L38 16.2 L35.2 18 L36.2 14.8 L34 13 L37 13 Z" fill="#f2e6c8" />
          <path d="M44 36 L44.7 38.4 L47.3 38.4 L45.2 39.9 L45.9 42.3 L44 41 L42.1 42.3 L42.8 39.9 L40.7 38.4 L43.3 38.4 Z" fill="#e8b84b" />
        </svg>

        {/* Tilted stamp — whimsy */}
        <div aria-hidden style={{ position: "absolute", top: 24, right: 24, border: "2px solid rgba(255,255,255,0.4)", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-dm)", fontSize: 8, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", padding: "6px 12px", transform: "rotate(-2.5deg)", zIndex: 3 }}>
          For Classrooms
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 700 }}>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 16,
                height: 2,
                background: "rgba(255,255,255,0.3)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            For Teachers &amp; Classrooms
          </p>

          <h1
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(52px, 14vw, 160px)",
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              margin: 0,
            }}
          >
            <span style={{ color: "white", display: "block" }}>History</span>
            <span
              style={{
                color: "var(--yellow)",
                display: "block",
                transform: "rotate(-2deg) translateX(28px)",
                transformOrigin: "left center",
              }}
            >
              For
            </span>
            <span style={{ color: "white", display: "block" }}>Teachers.</span>
          </h1>

          <div style={{ marginTop: 28 }}>
            <Squiggle width={360} stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />
          </div>

          <p
            style={{
              fontFamily: "var(--font-instrument)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: 20,
              color: "rgba(255,255,255,0.76)",
              maxWidth: 500,
              marginTop: 32,
              lineHeight: 1.55,
            }}
          >
            Critical thinking materials for teaching the American Revolution through local history. Every town, every state, built for teachers first.
          </p>
        </div>
      </section>

      {/* RED stats band */}
      <section
        className="page-pad"
        style={{
          background: "var(--red)",
          padding: "44px 52px",
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
            right: 24,
            top: -12,
            fontFamily: "var(--font-bebas)",
            fontSize: 190,
            lineHeight: 1,
            color: "rgba(255,255,255,0.07)",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          T1
        </div>

        <div
          className="zone-red-stats"
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 0,
          }}
        >
          {/* Stat 1 */}
          <div className="m-stat" style={{ padding: "0 44px 0 0", borderRight: "1px solid rgba(255,255,255,0.2)" }}>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(48px, 6vw, 72px)",
                lineHeight: 1,
                color: "var(--yellow)",
              }}
            >
              Tier 1
            </div>
            <div
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                marginTop: 4,
              }}
            >
              Primary sources only
            </div>
            <svg width="50" height="7" viewBox="0 0 50 7" aria-hidden style={{ marginTop: 4 }}>
              <path d="M0 4 Q6 1 12 4 Q18 7 25 3 Q31 0 37 3 Q43 7 50 2" stroke="#e8b84b" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.45" />
            </svg>
          </div>

          {/* Stat 2 */}
          <div
            className="m-stat"
            style={{
              padding: "0 44px",
              borderRight: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(48px, 6vw, 72px)",
                lineHeight: 1,
                color: "white",
              }}
            >
              77
            </div>
            <div
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                marginTop: 4,
              }}
            >
              Towns in network
            </div>
            <svg width="50" height="7" viewBox="0 0 50 7" aria-hidden style={{ marginTop: 4 }}>
              <path d="M0 4 Q6 1 12 4 Q18 7 25 3 Q31 0 37 3 Q43 7 50 2" stroke="#e8b84b" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.45" />
            </svg>
          </div>

          {/* Stat 3 */}
          <div className="m-stat" style={{ padding: "0 44px", borderRight: "1px solid rgba(255,255,255,0.2)" }}>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(48px, 6vw, 72px)",
                lineHeight: 1,
                color: "white",
              }}
            >
              16
            </div>
            <div
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                marginTop: 4,
              }}
            >
              States covered
            </div>
            <svg width="50" height="7" viewBox="0 0 50 7" aria-hidden style={{ marginTop: 4 }}>
              <path d="M0 4 Q6 1 12 4 Q18 7 25 3 Q31 0 37 3 Q43 7 50 2" stroke="#e8b84b" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.45" />
            </svg>
          </div>

          {/* Badge */}
          <div style={{ padding: "0 44px", marginLeft: "auto" }}>
            <div
              style={{
                background: "var(--cream)",
                color: "var(--ink)",
                fontFamily: "var(--font-dm)",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                padding: "9px 18px",
                border: "2.5px solid var(--ink)",
                boxShadow: "3px 3px 0 var(--ink)",
                transform: "rotate(-2deg)",
                display: "inline-block",
              }}
            >
              Standards Aligned
            </div>
          </div>
        </div>
      </section>

      {/* PAPER state list */}
      <section
        className="page-pad"
        style={{ background: "var(--paper)", padding: "64px 52px 96px" }}
      >
        {/* Section intro */}
        <div style={{ maxWidth: 640, marginBottom: 56 }}>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--red)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 12,
            }}
          >
            <span
              style={{
                width: 16,
                height: 2,
                background: "var(--red)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Browse by State
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(36px, 4.5vw, 60px)",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              color: "var(--ink)",
              margin: 0,
            }}
          >
            Browse by State
          </h2>
          <p
            style={{
              fontFamily: "var(--font-instrument)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: 18,
              color: "rgba(20,16,10,0.52)",
              marginTop: 22,
              lineHeight: 1.65,
            }}
          >
            Teacher resources organized by state, prioritized for towns with the richest primary source availability.
          </p>
        </div>

        {/* Squiggle before state list — whimsy */}
        <div style={{ marginBottom: 8 }}>
          <svg width="160" height="12" viewBox="0 0 160 12" aria-hidden style={{ display: "block" }}>
            <path d="M0 8 Q10 2 20 8 Q30 14 40 7 Q50 1 60 7 Q70 13 80 7 Q90 2 100 7 Q110 13 120 7 Q130 2 140 7 Q150 13 160 6"
              stroke="#cc3322" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.35" />
          </svg>
        </div>

        {/* State rows */}
        {STATES.map((state, i) => (
          <div
            key={state.slug}
            style={{
              padding: "36px 0",
              borderBottom: "1px solid rgba(20,16,10,0.08)",
              display: "grid",
              gridTemplateColumns: "220px 1fr",
              gap: 48,
            }}
            className="teach-state-row"
          >
            {/* Left */}
            <div>
              <a
                href={`/teach/${state.slug}`}
                className="teach-state-link"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(26px, 3vw, 40px)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.03em",
                  color: "var(--ink)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                  display: "block",
                }}
              >
                {state.name}
              </a>
              <div
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  color: "rgba(20,16,10,0.45)",
                  marginTop: 6,
                }}
              >
                {String(i + 1).padStart(2, "0")} of {STATES.length}
              </div>
            </div>

            {/* Right */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-instrument)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: 18,
                  color: "rgba(20,16,10,0.6)",
                  lineHeight: 1.65,
                  marginBottom: 14,
                }}
              >
                {state.description}
              </p>
              <a
                href={`/teach/${state.slug}`}
                className="teach-view-link"
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--red)",
                  textDecoration: "none",
                  borderBottom: "1.5px solid rgba(204,51,34,0.3)",
                  paddingBottom: 2,
                  transition: "letter-spacing 0.15s, border-color 0.15s",
                }}
              >
                View Resources →
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* BLUE methodology */}
      <section
        className="page-pad"
        style={{
          background: "var(--blue)",
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
            bottom: -20,
            fontFamily: "var(--font-bebas)",
            fontSize: 380,
            lineHeight: 1,
            color: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
            letterSpacing: "-0.05em",
          }}
        >
          Method
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 720 }}>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: 16,
            }}
          >
            Methodology
          </p>

          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              color: "white",
              margin: 0,
            }}
          >
            Our{" "}
            <span
              style={{
                color: "var(--yellow)",
                display: "inline-block",
                transform: "rotate(-2deg)",
                transformOrigin: "left center",
              }}
            >
              Approach.
            </span>
          </h2>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0,
              padding: "24px 0",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              margin: "32px 0",
            }}
          >
            {[
              { num: "Tier 1", label: "Primary Sources" },
              { num: "77", label: "Towns Covered" },
              { num: "16", label: "States" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: "0 44px",
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.12)" : "none",
                  paddingLeft: i === 0 ? 0 : 44,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: 52,
                    lineHeight: 1,
                    color: "var(--yellow)",
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--font-instrument)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: 19,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              maxWidth: 680,
              marginBottom: 28,
            }}
          >
            Every source in our teacher materials is evaluated using a three-tier credibility system. Tier 1 sources include primary documents, National Park Service materials, and peer-reviewed scholarship. Teacher narratives are written to help educators contextualize sources — not to replace them.
          </p>

          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            <a
              href="/methodology"
              className="method-link"
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                borderBottom: "1.5px solid rgba(255,255,255,0.18)",
                paddingBottom: 2,
                textDecoration: "none",
                transition: "color 0.15s, border-color 0.15s",
              }}
            >
              Read our full methodology
            </a>
            <a
              href="/methodology#source-tiers"
              className="method-link"
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                borderBottom: "1.5px solid rgba(255,255,255,0.18)",
                paddingBottom: 2,
                textDecoration: "none",
                transition: "color 0.15s, border-color 0.15s",
              }}
            >
              Source credibility tiers
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
