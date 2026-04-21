import { getTownSignature } from "@/lib/townSignature";
import { TownAccentSync } from "./TownAccentSync";
import type { Town } from "@/lib/api";

interface TownHeroProps {
  town: Town;
  slug: string;
}

export function TownHero({ town, slug }: TownHeroProps) {
  const sig = getTownSignature(slug, town);
  const hash = slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);

  const topEvents = [...town.events]
    .sort((a, b) => b.significanceWeight - a.significanceWeight)
    .slice(0, 4);

  const tagline = town.execSummary150
    ? town.execSummary150.split(".")[0] + "."
    : town.heroSummary40;

  return (
    <div className="town-hero-rwb">
      {/* Sync nav border to red */}
      <TownAccentSync hex="#cc3322" />

      {/* ── COLUMN 1: RED ── */}
      <div className="town-col-red">
        <div className="red-arc-1" aria-hidden="true" />
        <div className="red-arc-2" aria-hidden="true" />

        <div className="red-top">
          <div className="red-kicker">
            {sig.redKicker ?? "The Revolutionary Record"}
          </div>
          <blockquote className="red-quote">
            {sig.quote ?? town.heroSummary40}
          </blockquote>
          {sig.quoteAttr && (
            <div className="red-attr">{sig.quoteAttr}</div>
          )}
        </div>

        <div className="red-events">
          {topEvents.map((event) => (
            <div key={event.id} className="red-event">
              <div className="red-year">
                {event.startDate ? new Date(event.startDate).getFullYear() : "—"}
              </div>
              <div className="red-event-name">{event.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── COLUMN 2: CREAM ── */}
      <div className="town-col-cream">
        <div className="cream-ghost" aria-hidden="true">
          {sig.ghost ?? town.name.substring(0, 4).toUpperCase()}
        </div>

        <div className="cream-top">
          <nav className="cream-breadcrumb">
            <a href="/towns">All Towns</a>
            <span>/</span>
            <span>{town.state}</span>
          </nav>

          <h1 className="town-name squiggle">{town.name}</h1>

          <div className="badge" style={{ marginTop: "24px" }}>
            {town.state} · American Revolution
          </div>

          <p className="cream-tagline">{tagline}</p>

          {sig.stamp && (
            <div className="stamp stamp-red" style={{ marginTop: "24px" }}>
              {sig.stamp}
            </div>
          )}

          <svg
            style={{ display: "block", marginTop: "28px" }}
            width="260" height="14" viewBox="0 0 260 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 8 Q16 2 32 8 Q48 14 65 7 Q81 1 97 7 Q113 13 130 7 Q146 2 162 7 Q178 13 195 7 Q211 2 228 7 Q244 13 260 6"
              stroke="#cc3322" strokeWidth="2.5" strokeLinecap="round" opacity="0.45"
            />
          </svg>
        </div>

        <div className="cream-facts">
          <div className="cream-fact">
            <div className="fact-num">{town.events.length}</div>
            <div className="fact-label">Events</div>
          </div>
          <div className="cream-fact">
            <div className="fact-num">{town.stories.length}</div>
            <div className="fact-label">Stories</div>
          </div>
          <div className="cream-fact">
            <div className="fact-num">{town.linkedTowns?.length ?? 0}</div>
            <div className="fact-label">Connections</div>
          </div>
        </div>
      </div>

      {/* ── COLUMN 3: BLUE ── */}
      <div className="town-col-blue flex">
        {sig.mapLabel1 && (
          <div
            className="map-label map-label-light"
            style={{ top: "52px", left: "16px", transform: "rotate(-2.5deg)" }}
          >
            {sig.mapLabel1}
          </div>
        )}
        {sig.mapLabel2 && (
          <div
            className="map-label map-label-dark"
            style={{ bottom: "80px", right: "12px", transform: "rotate(2deg)" }}
          >
            {sig.mapLabel2}
          </div>
        )}

        <TownMapSVG slug={slug} hash={hash} />

        <p className="blue-tagline">
          {sig.mapTagline ?? town.heroSummary40}
        </p>
      </div>
    </div>
  );
}

function TownMapSVG({ slug, hash }: { slug: string; hash: number }) {
  // Shared: subtle grid
  const gridLines = (
    <g opacity="0.04" stroke="white" strokeWidth="1">
      {[76, 152, 228, 304].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="800" />
      ))}
      {[160, 320, 480, 640].map(y => (
        <line key={y} x1="0" y1={y} x2="400" y2={y} />
      ))}
    </g>
  );

  // Shared: cross marks
  const crossMarks = (
    <>
      <g transform="translate(72,480) rotate(18)">
        <line x1="-10" y1="0" x2="10" y2="0" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeLinecap="round" />
        <line x1="0" y1="-10" x2="0" y2="10" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g transform="translate(310,260) rotate(-12)">
        <line x1="-8" y1="0" x2="8" y2="0" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="0" y1="-8" x2="0" y2="8" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </>
  );

  // Shared: scattered stars
  const starPts = Array.from({ length: 12 }, (_, i) => ({
    x: ((hash * (i + 1) * 37) % 340) + 30,
    y: ((hash * (i + 1) * 53) % 300) + 40,
    r: (hash * (i + 5)) % 4 === 0 ? 2.2 : 1.3,
  }));
  const stars = (
    <>
      {starPts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={p.r} fill="rgba(255,255,255,0.35)" />
      ))}
    </>
  );

  // North arrow
  const northArrow = (
    <>
      <line x1="36" y1="690" x2="36" y2="652" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 660 L36 648 L42 660" fill="rgba(255,255,255,0.28)" />
      <text x="36" y="710" textAnchor="middle" fontFamily="var(--font-dm)" fontSize="9" fontWeight="600" letterSpacing="0.15em" fill="rgba(255,255,255,0.22)">N</text>
    </>
  );

  let inner: React.ReactNode;

  switch (slug) {
    case "lexington-ma":
    case "concord-ma":
    case "cambridge-ma":
    case "worcester-ma":
      inner = (
        <>
          <line x1="200" y1="800" x2="205" y2="0" stroke="rgba(255,255,255,0.12)" strokeWidth="2.5" />
          <path d="M40 500 Q120 495 200 500 Q280 505 360 497" stroke="rgba(255,255,255,0.08)" strokeWidth="3" strokeDasharray="10 6" fill="none" />
          <circle cx="200" cy="340" r="9" fill="#cc3322" opacity="0.8" />
          <circle cx="197" cy="460" r="6" fill="#e8b84b" opacity="0.65" />
          <path d="M200 340 Q215 400 197 460" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
        </>
      );
      break;

    case "boston-ma":
      inner = (
        <>
          <path d="M185 105 Q148 138 130 205 Q112 268 120 344 Q128 412 166 456 Q202 498 222 526 Q240 552 232 604 Q225 640 244 682 Q262 712 282 722 Q318 732 337 707 Q355 682 347 637 Q338 593 320 566 Q303 540 310 492 Q320 444 338 406 Q356 368 347 310 Q338 252 310 202 Q282 154 244 132 Q216 118 185 105 Z"
            fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <circle cx="218" cy="282" r="9" fill="#cc3322" opacity="0.82" />
          <circle cx="200" cy="362" r="6" fill="#cc3322" opacity="0.55" />
          <circle cx="242" cy="444" r="5" fill="#e8b84b" opacity="0.7" />
          <path d="M218 282 Q244 323 242 444" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
        </>
      );
      break;

    case "trenton-nj":
    case "princeton-nj":
      inner = (
        <>
          {[428, 443, 458, 472].map((y, i) => (
            <path key={i}
              d={`M-10 ${y} Q90 ${y - 14} 180 ${y + 6} Q270 ${y + 18} 400 ${y + 3}`}
              stroke={`rgba(255,255,255,${0.25 - i * 0.05})`}
              strokeWidth={2.5 - i * 0.4} fill="none" />
          ))}
          <ellipse cx="130" cy="436" rx="38" ry="11" fill="rgba(255,255,255,0.05)" transform="rotate(-7,130,436)" />
          <ellipse cx="290" cy="450" rx="28" ry="8" fill="rgba(255,255,255,0.04)" transform="rotate(5,290,450)" />
          <ellipse cx="175" cy="424" rx="20" ry="6" fill="rgba(255,255,255,0.06)" transform="rotate(-3,175,424)" />
          {[{ cx: 155, cy: 432 }, { cx: 278, cy: 444 }, { cx: 370, cy: 420 }].map((p, i) => (
            <ellipse key={i} cx={p.cx} cy={p.cy} rx={18 - i * 3} ry={5 - i} fill="rgba(232,184,75,0.5)" />
          ))}
          <path d="M0 540 Q80 528 160 534 Q250 540 350 530 Q430 523 400 528 L400 800 L0 800 Z" fill="rgba(0,0,0,0.3)" />
        </>
      );
      break;

    case "yorktown-va":
    case "williamsburg-va":
      inner = (
        <>
          <path d="M0 110 Q80 90 160 105 Q240 120 320 100 Q360 90 400 102 L400 0 L0 0 Z" fill="rgba(255,255,255,0.12)" />
          <path d="M65 115 Q62 198 58 298 Q54 398 68 476 Q88 536 200 596 Q312 536 332 476 Q346 398 342 298 Q338 198 335 115 Z"
            fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
          <path d="M95 368 Q148 342 200 337 Q252 342 305 368" stroke="rgba(204,51,34,0.5)" strokeWidth="2.5" fill="none" strokeDasharray="8 4" />
          <path d="M58 466 Q132 432 200 426 Q268 432 342 466" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" fill="none" strokeDasharray="8 4" />
          <rect x="84" y="360" width="22" height="17" fill="rgba(204,51,34,0.5)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <rect x="294" y="360" width="22" height="17" fill="rgba(204,51,34,0.5)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <circle cx="200" cy="208" r="8" fill="#e8b84b" opacity="0.72" />
        </>
      );
      break;

    case "philadelphia-pa":
      inner = (
        <>
          {[60, 120, 180, 240, 300, 360].map(x => (
            <line key={x} x1={x} y1="80" x2={x} y2="720" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          ))}
          {[140, 210, 280, 350, 420, 490, 560].map(y => (
            <line key={y} x1="30" y1={y} x2="380" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          ))}
          <rect x="148" y="272" width="94" height="58" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <rect x="188" y="254" width="22" height="18" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <circle cx="196" cy="300" r="7" fill="#e8b84b" opacity="0.8" />
          <path d="M355 90 Q365 290 360 500 Q356 600 354 710" stroke="rgba(255,255,255,0.18)" strokeWidth="7" fill="none" />
        </>
      );
      break;

    default:
      // Constellation fallback — varied by slug hash
      inner = (
        <>
          {Array.from({ length: 6 }, (_, i) => ({
            x1: ((hash * (i + 1) * 41) % 340) + 30,
            y1: ((hash * (i + 1) * 67) % 600) + 80,
            x2: ((hash * (i + 3) * 37) % 340) + 30,
            y2: ((hash * (i + 3) * 53) % 600) + 80,
          })).map((l, i) => (
            <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          ))}
          <circle cx={((hash * 41) % 320) + 40} cy={((hash * 67) % 500) + 80} r="10" fill="#e8b84b" opacity="0.45" />
          <circle cx={((hash * 41) % 320) + 40} cy={((hash * 67) % 500) + 80} r="5" fill="#e8b84b" opacity="0.75" />
        </>
      );
  }

  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      viewBox="0 0 400 800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {gridLines}
      {stars}
      {inner}
      {crossMarks}
      {northArrow}
    </svg>
  );
}
