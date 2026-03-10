import { getTownAccent, ACCENT_HEX, ACCENT_TEXT, ACCENT_HIGHLIGHT, type TownAccent } from "@/lib/townAccent";
import { getTownSignature } from "@/lib/townSignature";
import { TownAccentSync } from "./TownAccentSync";
import type { Town } from "@/lib/api";

interface TownHeroProps {
  town: Town;
  slug: string;
}

export function TownHero({ town, slug }: TownHeroProps) {
  const accent = getTownAccent(slug);
  const sig = getTownSignature(slug, town);
  const heroBg = ACCENT_HEX[accent];
  const heroText = ACCENT_TEXT[accent];
  const highlight = ACCENT_HIGHLIGHT[accent];
  const isDark = accent !== "yellow";

  const facts = deriveFacts(town);

  return (
    <div
      className="town-hero-root"
      style={{ "--town-hero-accent": heroBg, "--town-hero-highlight": highlight } as React.CSSProperties}
    >
      <TownAccentSync hex={heroBg} />

      {/* LEFT PANEL */}
      <div
        className="town-hero-left"
        style={{ background: heroBg, borderRight: "4px solid #14100a" }}
      >
        {/* Giant ghost text */}
        <div
          className="town-hero-ghost"
          aria-hidden="true"
          style={{ color: isDark ? "rgba(255,255,255,0.05)" : "rgba(20,16,10,0.06)" }}
        >
          {sig.ghost}
        </div>

        <div className="town-hero-top">
          {/* Breadcrumb */}
          <nav
            className="town-hero-breadcrumb"
            style={{ color: isDark ? "rgba(242,230,200,0.4)" : "rgba(20,16,10,0.4)" }}
          >
            <a href="/towns" style={{ color: "inherit", textDecoration: "none" }}>All Towns</a>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>{town.state}</span>
          </nav>

          {/* Town name */}
          <h1 className="town-hero-name" style={{ color: heroText }}>
            {town.name}
          </h1>

          {/* State badge */}
          <div
            className="town-hero-badge"
            style={{
              background: isDark ? "rgba(242,230,200,0.12)" : "rgba(20,16,10,0.1)",
              color: heroText,
              border: `2px solid ${isDark ? "rgba(242,230,200,0.2)" : "rgba(20,16,10,0.2)"}`,
            }}
          >
            {town.state} · American Revolution
          </div>

          {/* Tagline */}
          <p
            className="town-hero-tagline"
            style={{ color: isDark ? "rgba(242,230,200,0.65)" : "rgba(20,16,10,0.65)" }}
          >
            {town.heroSummary40}
          </p>

          {/* Stamp */}
          {sig.stamp && (
            <div
              className="town-hero-stamp"
              style={{ color: highlight, borderColor: highlight }}
            >
              {sig.stamp}
            </div>
          )}
        </div>

        {/* Facts strip */}
        <div
          className="town-hero-facts"
          style={{
            borderTop: isDark
              ? "2px solid rgba(242,230,200,0.12)"
              : "2px solid rgba(20,16,10,0.12)",
          }}
        >
          {facts.map((f, i) => (
            <div
              key={i}
              className="town-hero-fact-item"
              style={{
                borderRight:
                  i < facts.length - 1
                    ? isDark
                      ? "1px solid rgba(242,230,200,0.1)"
                      : "1px solid rgba(20,16,10,0.1)"
                    : "none",
              }}
            >
              <div className="town-hero-fact-num" style={{ color: highlight }}>
                {f.value}
              </div>
              <div
                className="town-hero-fact-label"
                style={{
                  color: isDark ? "rgba(242,230,200,0.35)" : "rgba(20,16,10,0.4)",
                }}
              >
                {f.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div
        className="town-hero-right hidden md:block"
        style={{ borderLeft: "4px solid #14100a" }}
      >
        <TownHeroSVG slug={slug} accent={accent} />

        {sig.rightLabel && (
          <div
            className="town-hero-right-label town-hero-right-label-1"
            style={{ background: highlight }}
          >
            {sig.rightLabel}
          </div>
        )}
        {sig.rightSub && (
          <div
            className="town-hero-right-label town-hero-right-label-2"
            style={{ background: highlight }}
          >
            {sig.rightSub}
          </div>
        )}
      </div>
    </div>
  );
}

function TownHeroSVG({ slug, accent }: { slug: string; accent: TownAccent }) {
  const highlightColor = ACCENT_HIGHLIGHT[accent];

  switch (slug) {
    case "lexington-ma":
    case "concord-ma":
      return (
        <svg viewBox="0 0 400 800" fill="none" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <rect width="400" height="800" fill="#14100a" />
          <line x1="0" y1="480" x2="400" y2="480" stroke="rgba(242,230,200,0.08)" strokeWidth="2" />
          <path d="M180 800 Q185 640 190 480 Q195 340 200 200 Q202 100 205 0" stroke="#1a3a7244" strokeWidth="3" fill="none" />
          <path d="M40 500 Q120 496 200 500 Q280 504 360 498" stroke="rgba(242,230,200,0.1)" strokeWidth="4" strokeDasharray="12 6" fill="none" />
          <circle cx="200" cy="360" r="8" fill="#cc3322" opacity="0.7" />
          <circle cx="190" cy="480" r="5" fill={highlightColor} opacity="0.6" />
          {[60,120,200,290,340,80,260,320,140,380].map((x,i) => (
            <circle key={i} cx={x} cy={[80,140,60,110,90,200,170,220,250,130][i]} r={i%3===0?1.5:1} fill="rgba(242,230,200,0.3)" />
          ))}
          {[100,200,300].map(x => <line key={x} x1={x} y1="0" x2={x} y2="800" stroke="rgba(242,230,200,0.03)" strokeWidth="1" />)}
          {[200,400,600].map(y => <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(242,230,200,0.03)" strokeWidth="1" />)}
        </svg>
      );

    case "boston-ma":
      return (
        <svg viewBox="0 0 400 800" fill="none" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <rect width="400" height="800" fill="#14100a" />
          <path d="M180 150 Q140 180 120 240 Q100 300 110 380 Q120 450 160 490 Q200 530 220 560 Q240 590 230 640 Q220 680 240 720 Q260 750 280 760 Q320 770 340 740 Q360 710 350 660 Q340 610 320 580 Q300 550 310 500 Q320 450 340 410 Q360 370 350 310 Q340 250 310 200 Q280 155 240 148 Q210 143 180 150 Z"
            fill="rgba(26,58,114,0.08)" stroke="rgba(26,58,114,0.2)" strokeWidth="1.5" />
          <circle cx="220" cy="300" r="8" fill="#cc3322" opacity="0.8" />
          <circle cx="200" cy="380" r="5" fill={highlightColor} opacity="0.6" />
          {[100,200,300].map(x => <line key={x} x1={x} y1="0" x2={x} y2="800" stroke="rgba(242,230,200,0.03)" strokeWidth="1" />)}
          {[200,400,600].map(y => <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(242,230,200,0.03)" strokeWidth="1" />)}
        </svg>
      );

    case "trenton-nj":
      return (
        <svg viewBox="0 0 400 800" fill="none" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <rect width="400" height="800" fill="#14100a" />
          {[420,435,450,465].map((y,i) => (
            <path key={i} d={`M-20 ${y} Q${80+i*20} ${y-12} ${160+i*10} ${y+8} Q${260-i*5} ${y+18} ${400} ${y+5}`}
              stroke={`rgba(58,125,191,${0.35-i*0.06})`} strokeWidth={3-i*0.5} fill="none" />
          ))}
          {[{cx:120,cy:430},{cx:320,cy:445},{cx:220,cy:418}].map((p,i) => (
            <ellipse key={i} cx={p.cx} cy={p.cy} rx={40-i*10} ry={12-i*3} fill="rgba(242,230,200,0.06)" transform={`rotate(${-8+i*8}, ${p.cx}, ${p.cy})`} />
          ))}
          {[60,140,220,310,380].map((x,i) => (
            <circle key={i} cx={x} cy={[80,120,60,100,70][i]} r={i%3===0?2:1} fill="rgba(242,230,200,0.35)" />
          ))}
          <path d="M0 540 Q80 530 160 536 Q250 542 350 532 Q430 525 400 530 L400 800 L0 800 Z" fill="rgba(20,16,10,0.35)" />
          {[100,200,300].map(x => <line key={x} x1={x} y1="0" x2={x} y2="800" stroke="rgba(242,230,200,0.03)" strokeWidth="1" />)}
        </svg>
      );

    case "yorktown-va":
      return (
        <svg viewBox="0 0 400 800" fill="none" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <rect width="400" height="800" fill="rgba(0,0,0,0.2)" />
          <path d="M0 120 Q80 100 160 115 Q240 130 320 110 Q360 100 400 112 L400 0 L0 0 Z" fill="rgba(26,58,114,0.25)" />
          <path d="M60 120 Q55 200 50 300 Q45 400 60 480 Q80 540 160 600 Q200 620 240 600 Q320 540 340 480 Q355 400 355 300 Q350 200 345 120 Z"
            fill="rgba(42,92,69,0.15)" stroke="rgba(42,92,69,0.3)" strokeWidth="1.5" />
          <path d="M90 370 Q140 345 200 340 Q260 345 310 370" stroke="rgba(204,51,34,0.45)" strokeWidth="2.5" fill="none" strokeDasharray="8 4" />
          <path d="M55 470 Q130 435 200 428 Q270 435 345 470" stroke="rgba(26,58,114,0.5)" strokeWidth="2.5" fill="none" strokeDasharray="8 4" />
          <rect x="82" y="365" width="22" height="18" fill="rgba(204,51,34,0.45)" stroke="rgba(242,230,200,0.25)" strokeWidth="1" />
          <rect x="296" y="365" width="22" height="18" fill="rgba(26,58,114,0.45)" stroke="rgba(242,230,200,0.25)" strokeWidth="1" />
          <circle cx="200" cy="210" r="8" fill={highlightColor} opacity="0.7" />
          {[100,200,300].map(x => <line key={x} x1={x} y1="0" x2={x} y2="800" stroke="rgba(242,230,200,0.03)" strokeWidth="1" />)}
          {[200,400,600].map(y => <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(242,230,200,0.03)" strokeWidth="1" />)}
        </svg>
      );

    case "philadelphia-pa":
      return (
        <svg viewBox="0 0 400 800" fill="none" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <rect width="400" height="800" fill="#14100a" />
          {[60,120,180,240,300,360].map(x => <line key={x} x1={x} y1="100" x2={x} y2="700" stroke="rgba(242,230,200,0.04)" strokeWidth="1" />)}
          {[150,220,290,360,430,500,570,640].map(y => <line key={y} x1="40" y1={y} x2="380" y2={y} stroke="rgba(242,230,200,0.04)" strokeWidth="1" />)}
          <rect x="155" y="280" width="90" height="60" fill="rgba(204,51,34,0.12)" stroke="rgba(204,51,34,0.25)" strokeWidth="1.5" />
          <rect x="190" y="260" width="20" height="20" fill="rgba(204,51,34,0.18)" stroke="rgba(204,51,34,0.3)" strokeWidth="1" />
          <path d="M360 100 Q370 300 365 500 Q360 600 358 700" stroke="rgba(26,58,114,0.25)" strokeWidth="8" fill="none" />
          <circle cx="200" cy="310" r="6" fill={highlightColor} opacity="0.8" />
        </svg>
      );

    default:
      return <GenericConstellationSVG slug={slug} highlightColor={highlightColor} />;
  }
}

function GenericConstellationSVG({ slug, highlightColor }: { slug: string; highlightColor: string }) {
  const hash = slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const stars = Array.from({ length: 20 }, (_, i) => ({
    x: ((hash * (i + 1) * 37) % 360) + 20,
    y: ((hash * (i + 1) * 53) % 700) + 50,
    r: (hash * (i + 7)) % 3 === 0 ? 2 : 1.2,
  }));
  const lines = [
    [stars[0], stars[3]], [stars[3], stars[7]], [stars[7], stars[11]],
    [stars[1], stars[5]], [stars[5], stars[9]], [stars[2], stars[6]],
  ];

  return (
    <svg viewBox="0 0 400 800" fill="none" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <rect width="400" height="800" fill="#14100a" />
      {lines.map((pair, i) => (
        <line key={i} x1={pair[0].x} y1={pair[0].y} x2={pair[1].x} y2={pair[1].y}
          stroke="rgba(242,230,200,0.06)" strokeWidth="1" />
      ))}
      {stars.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="rgba(242,230,200,0.4)" />
      ))}
      <circle cx={stars[0].x} cy={stars[0].y} r="8" fill={highlightColor} opacity="0.5" />
      <circle cx={stars[0].x} cy={stars[0].y} r="4" fill={highlightColor} opacity="0.8" />
      {[100,200,300].map(x => <line key={x} x1={x} y1="0" x2={x} y2="800" stroke="rgba(242,230,200,0.03)" strokeWidth="1" />)}
      {[200,400,600].map(y => <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(242,230,200,0.03)" strokeWidth="1" />)}
    </svg>
  );
}

function deriveFacts(town: Town): Array<{ value: string; label: string }> {
  const facts: Array<{ value: string; label: string }> = [];
  if (town.events.length > 0) facts.push({ value: String(town.events.length), label: "Events" });
  if (town.stories.length > 0) facts.push({ value: String(town.stories.length), label: "Stories" });
  if (town.compositeScore) facts.push({ value: String(Math.round(town.compositeScore)), label: "Significance" });
  while (facts.length < 3) facts.push({ value: "—", label: "" });
  return facts.slice(0, 3);
}
