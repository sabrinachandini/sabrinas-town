import Stripe from "stripe";

export const metadata = {
  title: "Partner With Us | History is for Everyone",
  description:
    "Join the Revolutionary Town Network. Tourism boards and historical societies can feature their town's story with professional presentation and analytics.",
};

interface PriceData {
  id: string;
  unitAmount: number | null;
  currency: string;
  nickname: string | null;
}

const FALLBACK_PRICES = {
  plus: { id: "", unitAmount: 9900, currency: "usd", nickname: null } as PriceData,
  pro: { id: "", unitAmount: 29900, currency: "usd", nickname: null } as PriceData,
};

async function fetchStripePrices(): Promise<{ plus: PriceData; pro: PriceData }> {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const plusId = process.env.STRIPE_PRICE_PLUS_MONTHLY;
  const proId = process.env.STRIPE_PRICE_PRO_MONTHLY;

  if (!secretKey || !plusId || !proId) return FALLBACK_PRICES;

  try {
    const stripe = new Stripe(secretKey, { apiVersion: "2025-04-30.basil" as never });
    const [plus, pro] = await Promise.all([
      stripe.prices.retrieve(plusId),
      stripe.prices.retrieve(proId),
    ]);
    return {
      plus: { id: plus.id, unitAmount: plus.unit_amount, currency: plus.currency, nickname: plus.nickname },
      pro: { id: pro.id, unitAmount: pro.unit_amount, currency: pro.currency, nickname: pro.nickname },
    };
  } catch {
    return FALLBACK_PRICES;
  }
}

function Squiggle({ width = 380, stroke = "rgba(255,255,255,0.35)", strokeWidth = "2.5" }: {
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

const PROPOSITIONS = [
  {
    title: "Shape your story",
    body: "Contribute edits, corrections, and richer source material to your town\u2019s profile.",
  },
  {
    title: "Reach teachers",
    body: "Your lesson plans and primary source packets distributed to educators nationwide.",
  },
  {
    title: "Understand visitors",
    body: "Analytics on who finds your town, from where, and what they engage with most.",
  },
  {
    title: "Drive discovery",
    body: "Cross-town links route travelers through shared events, people, and routes.",
  },
];

const BENEFITS = [
  {
    title: "Official Network Membership",
    body: "Your town joins the verified network. Visitors see the \u201cOfficial Revolutionary Town Network Member\u201d badge, signaling quality and authenticity.",
  },
  {
    title: "Content Integration",
    body: "Bring your town\u2019s profile into your own digital presence through our partner API. Your data, your design \u2014 updated automatically.",
  },
  {
    title: "Analytics Dashboard",
    body: "See how visitors engage: page views, teacher downloads, comparison searches, and referral sources.",
  },
  {
    title: "Content Suggestions",
    body: "Our scoring system identifies opportunities to improve your profile: missing stories, undocumented events, sources that could be added.",
  },
  {
    title: "Teacher Reach",
    body: "Your lesson plans and primary source packets reach educators nationwide through our teacher module system.",
  },
  {
    title: "Network Connections",
    body: "Your town automatically links to related sites through shared events, people, themes, and routes \u2014 driving cross-visitation.",
  },
];

const FREE_FEATURES = [
  "Public town profiles with full historical content",
  "Teacher modules \u2014 lesson plans, primary sources, quizzes",
  "Network search and cross-town connections",
  "Source citations and credibility tiers on every claim",
];

export default async function PartnerPage() {
  const prices = await fetchStripePrices();
  const plusDisplay =
    prices.plus.unitAmount != null ? `$${Math.round(prices.plus.unitAmount / 100)}` : "$99";
  const proDisplay =
    prices.pro.unitAmount != null ? `$${Math.round(prices.pro.unitAmount / 100)}` : "$299";

  return (
    <main>
      {/* RED hero */}
      <section
        className="page-pad"
        style={{
          background: "var(--red)",
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
            fontSize: 460,
            lineHeight: 1,
            color: "rgba(255,255,255,0.07)",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
            letterSpacing: "-0.05em",
          }}
        >
          Partner
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
            Partnership Program
          </p>

          <h1
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(88px, 11vw, 160px)",
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              margin: 0,
            }}
          >
            <span style={{ color: "white", display: "block" }}>Partner</span>
            <span
              style={{
                color: "var(--yellow)",
                display: "block",
                transform: "rotate(-2deg) translateX(28px)",
                transformOrigin: "left center",
              }}
            >
              With
            </span>
            <span style={{ color: "white", display: "block" }}>Us.</span>
          </h1>

          <div style={{ marginTop: 28 }}>
            <Squiggle width={380} stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" />
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
            Every town already has a public profile. Partnership is for communities that want to shape how their story is told, reach teachers and travelers, and understand who is engaging with their history.
          </p>

          <a
            href="/partner/inquire"
            className="btn-dark"
            style={{
              display: "inline-block",
              marginTop: 36,
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
            }}
          >
            Submit an Inquiry →
          </a>
        </div>
      </section>

      {/* BLUE propositions */}
      <section
        className="page-pad"
        style={{
          background: "var(--blue)",
          padding: "56px 52px",
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
            right: 20,
            top: -10,
            fontFamily: "var(--font-bebas)",
            fontSize: 300,
            lineHeight: 1,
            color: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          ∞
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.42)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 28,
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
            What Partnership Adds
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 2,
            }}
          >
            {PROPOSITIONS.map((prop) => (
              <div
                key={prop.title}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "28px 24px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: 20,
                    color: "var(--yellow)",
                    marginBottom: 12,
                  }}
                >
                  →
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: 18,
                    color: "white",
                    marginBottom: 10,
                    letterSpacing: "0.02em",
                  }}
                >
                  {prop.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-instrument)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: 15,
                    color: "rgba(255,255,255,0.58)",
                    lineHeight: 1.55,
                  }}
                >
                  {prop.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREAM always-free */}
      <section
        className="page-pad"
        style={{
          background: "var(--cream)",
          padding: "72px 52px",
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
            bottom: -20,
            fontFamily: "var(--font-bebas)",
            fontSize: 260,
            lineHeight: 1,
            color: "rgba(20,16,10,0.03)",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
            letterSpacing: "-0.04em",
          }}
        >
          Open
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 640 }}>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--red)",
              marginBottom: 12,
            }}
          >
            Always Free
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
            Open to everyone,{" "}
            <span
              style={{
                display: "inline-block",
                transform: "rotate(-2deg)",
                transformOrigin: "left center",
                color: "var(--red)",
              }}
            >
              always.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-instrument)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: 18,
              color: "rgba(20,16,10,0.52)",
              margin: "16px 0 32px",
              maxWidth: 520,
              lineHeight: 1.65,
            }}
          >
            Partnership adds capabilities on top of a foundation that remains open to everyone. No paywall on the history.
          </p>

          <div>
            {FREE_FEATURES.map((feature) => (
              <div
                key={feature}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(20,16,10,0.08)",
                }}
              >
                <span
                  style={{
                    color: "var(--red)",
                    fontWeight: 900,
                    fontSize: 13,
                    fontFamily: "var(--font-dm)",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-instrument)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: 17,
                    color: "rgba(20,16,10,0.72)",
                  }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INK benefits */}
      <section
        className="page-pad"
        style={{
          background: "var(--ink)",
          padding: "72px 52px",
          borderBottom: "4px solid var(--red)",
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
            fontSize: 360,
            lineHeight: 1,
            color: "rgba(255,255,255,0.03)",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
            letterSpacing: "-0.05em",
          }}
        >
          Benefits
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--red)",
              marginBottom: 12,
            }}
          >
            Partner Benefits
          </p>

          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(36px, 4.5vw, 60px)",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              color: "white",
              margin: 0,
            }}
          >
            What partners receive
          </h2>

          <p
            style={{
              fontFamily: "var(--font-instrument)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: 17,
              color: "rgba(255,255,255,0.42)",
              margin: "22px 0 40px",
              maxWidth: 520,
              lineHeight: 1.65,
            }}
          >
            Six capabilities that set partnered towns apart from standard profiles.
          </p>

          <div style={{ maxWidth: 760 }}>
            {BENEFITS.map((benefit, i) => (
              <div
                key={benefit.title}
                style={{
                  display: "flex",
                  gap: 24,
                  padding: "26px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: 13,
                    color: "var(--yellow)",
                    opacity: 0.55,
                    width: 28,
                    flexShrink: 0,
                    marginTop: 3,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-instrument)",
                      fontStyle: "italic",
                      fontSize: 20,
                      color: "white",
                      marginBottom: 6,
                    }}
                  >
                    {benefit.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.4)",
                      lineHeight: 1.65,
                    }}
                  >
                    {benefit.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAPER pricing */}
      <section
        className="page-pad"
        style={{
          background: "var(--paper)",
          padding: "72px 52px",
          borderBottom: "4px solid var(--ink)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm)",
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(20,16,10,0.3)",
            marginBottom: 12,
          }}
        >
          Pricing
        </p>
        <h2
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(36px, 4.5vw, 60px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: "var(--ink)",
            margin: "0 0 48px",
          }}
        >
          Partnership tiers
        </h2>

        {/* Basic strip */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            padding: "36px 0",
            borderTop: "2px solid rgba(20,16,10,0.09)",
          }}
        >
          <div style={{ minWidth: 200, marginRight: 52 }}>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(20,16,10,0.3)",
                marginBottom: 8,
              }}
            >
              Basic
            </div>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: 52,
                color: "var(--ink)",
                lineHeight: 1,
              }}
            >
              Open
            </div>
            <div
              style={{
                fontFamily: "var(--font-instrument)",
                fontStyle: "italic",
                fontSize: 14,
                color: "rgba(20,16,10,0.42)",
                marginTop: 4,
              }}
            >
              For towns exploring the network
            </div>
          </div>

          <div style={{ flex: 1, marginRight: 52 }}>
            {[
              { included: true, label: "Basic town profile" },
              { included: true, label: "Network membership badge" },
              { included: true, label: "Teacher module access" },
              { included: false, label: "Custom branding" },
              { included: false, label: "Analytics dashboard" },
            ].map((f) => (
              <div
                key={f.label}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 10,
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(20,16,10,0.06)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 13,
                    color: f.included ? "var(--red)" : "rgba(20,16,10,0.18)",
                    flexShrink: 0,
                    width: 14,
                  }}
                >
                  {f.included ? "✓" : "–"}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-instrument)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: 16,
                    color: f.included ? "rgba(20,16,10,0.68)" : "rgba(20,16,10,0.3)",
                  }}
                >
                  {f.label}
                </span>
              </div>
            ))}
          </div>

          <div style={{ flexShrink: 0, paddingTop: 8 }}>
            <a
              href="/partner/inquire?tier=BASIC"
              style={{
                display: "inline-block",
                background: "transparent",
                color: "var(--ink)",
                fontFamily: "var(--font-dm)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "14px 28px",
                border: "2px solid var(--ink)",
                textDecoration: "none",
                transition: "background 0.15s, color 0.15s",
              }}
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Plus strip (featured) */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            padding: "36px 0",
            borderTop: "3px solid var(--red)",
            position: "relative",
          }}
        >
          {/* Popular stamp */}
          <div
            style={{
              position: "absolute",
              top: 28,
              right: 0,
              border: "2px solid var(--red)",
              color: "var(--red)",
              fontFamily: "var(--font-dm)",
              fontSize: 8,
              fontWeight: 700,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              padding: "5px 10px",
              transform: "rotate(2deg)",
              opacity: 0.75,
            }}
          >
            Popular
          </div>

          <div style={{ minWidth: 200, marginRight: 52 }}>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--red)",
                marginBottom: 8,
              }}
            >
              Plus
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
              <span
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: 52,
                  color: "var(--ink)",
                  lineHeight: 1,
                }}
              >
                {plusDisplay}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 14,
                  color: "rgba(20,16,10,0.4)",
                }}
              >
                /mo
              </span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-instrument)",
                fontStyle: "italic",
                fontSize: 14,
                color: "rgba(20,16,10,0.42)",
                marginTop: 4,
              }}
            >
              For active tourism boards
            </div>
          </div>

          <div style={{ flex: 1, marginRight: 52 }}>
            {[
              { included: true, label: "Everything in Basic" },
              { included: true, label: "Custom branding" },
              { included: true, label: "Basic analytics" },
              { included: true, label: "Priority support" },
              { included: false, label: "Advanced analytics" },
            ].map((f) => (
              <div
                key={f.label}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 10,
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(20,16,10,0.06)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 13,
                    color: f.included ? "var(--red)" : "rgba(20,16,10,0.18)",
                    flexShrink: 0,
                    width: 14,
                  }}
                >
                  {f.included ? "✓" : "–"}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-instrument)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: 16,
                    color: f.included ? "rgba(20,16,10,0.68)" : "rgba(20,16,10,0.3)",
                  }}
                >
                  {f.label}
                </span>
              </div>
            ))}
          </div>

          <div style={{ flexShrink: 0, paddingTop: 8 }}>
            <a
              href="/partner/inquire?tier=PLUS"
              style={{
                display: "inline-block",
                background: "var(--red)",
                color: "white",
                fontFamily: "var(--font-dm)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "14px 28px",
                border: "2px solid var(--red)",
                boxShadow: "4px 4px 0 var(--ink)",
                textDecoration: "none",
              }}
            >
              Start Plus Trial
            </a>
          </div>
        </div>

        {/* Pro strip */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            padding: "36px 0",
            borderTop: "2px solid rgba(20,16,10,0.09)",
          }}
        >
          <div style={{ minWidth: 200, marginRight: 52 }}>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(20,16,10,0.3)",
                marginBottom: 8,
              }}
            >
              Pro
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
              <span
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: 52,
                  color: "var(--ink)",
                  lineHeight: 1,
                }}
              >
                {proDisplay}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 14,
                  color: "rgba(20,16,10,0.4)",
                }}
              >
                /mo
              </span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-instrument)",
                fontStyle: "italic",
                fontSize: 14,
                color: "rgba(20,16,10,0.42)",
                marginTop: 4,
              }}
            >
              For regional networks
            </div>
          </div>

          <div style={{ flex: 1, marginRight: 52 }}>
            {[
              { included: true, label: "Everything in Plus" },
              { included: true, label: "Advanced analytics" },
              { included: true, label: "API access" },
              { included: true, label: "Custom integrations" },
              { included: true, label: "Multi-town management" },
            ].map((f) => (
              <div
                key={f.label}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 10,
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(20,16,10,0.06)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 13,
                    color: "var(--red)",
                    flexShrink: 0,
                    width: 14,
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-instrument)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: 16,
                    color: "rgba(20,16,10,0.68)",
                  }}
                >
                  {f.label}
                </span>
              </div>
            ))}
          </div>

          <div style={{ flexShrink: 0, paddingTop: 8 }}>
            <a
              href="/partner/inquire?tier=PRO"
              style={{
                display: "inline-block",
                background: "transparent",
                color: "var(--ink)",
                fontFamily: "var(--font-dm)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "14px 28px",
                border: "2px solid var(--ink)",
                textDecoration: "none",
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* RED closing CTA */}
      <section
        className="page-pad"
        style={{
          background: "var(--red)",
          padding: "88px 52px 96px",
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
            bottom: -24,
            fontFamily: "var(--font-bebas)",
            fontSize: 360,
            lineHeight: 1,
            color: "rgba(255,255,255,0.07)",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
            letterSpacing: "-0.05em",
          }}
        >
          Join
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 680 }}>
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
            Join the Network
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
            Ready to join
            <br />
            <span
              style={{
                fontStyle: "italic",
                color: "rgba(255,255,255,0.25)",
                display: "inline-block",
                transform: "rotate(-1.5deg)",
                transformOrigin: "left center",
              }}
            >
              the network?
            </span>
          </h2>

          <div style={{ margin: "20px 0" }}>
            <Squiggle width={300} stroke="rgba(255,255,255,0.38)" strokeWidth="2.5" />
          </div>

          <p
            style={{
              fontFamily: "var(--font-instrument)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: 19,
              color: "rgba(255,255,255,0.76)",
              marginBottom: 36,
              lineHeight: 1.5,
            }}
          >
            Tell us about your organization and the town you serve. We review every inquiry personally.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="/partner/inquire"
              className="btn-dark"
              style={{
                display: "inline-block",
                background: "var(--ink)",
                color: "var(--cream)",
                fontFamily: "var(--font-dm)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "18px 32px",
                border: "2px solid var(--ink)",
                boxShadow: "5px 5px 0 rgba(255,255,255,0.25)",
                textDecoration: "none",
              }}
            >
              Submit an Inquiry
            </a>
            <a
              href="/towns"
              style={{
                display: "inline-block",
                background: "transparent",
                color: "rgba(255,255,255,0.65)",
                fontFamily: "var(--font-dm)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "18px 32px",
                border: "2px solid rgba(255,255,255,0.3)",
                textDecoration: "none",
                transition: "border-color 0.15s, color 0.15s",
              }}
            >
              Browse the Network
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
