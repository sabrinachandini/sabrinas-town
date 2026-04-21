import { Metadata } from "next";
import { getTeacherModule } from "@/lib/api";

export const metadata: Metadata = {
  title: "Teach Vermont | History is for Everyone",
  description:
    "Teacher resources for Vermont towns in the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
  openGraph: {
    title: "Teach Vermont | History is for Everyone",
    description:
      "Teacher resources for Vermont towns in the American Revolution. Curated lesson plans, primary sources, and classroom assessments.",
    url: "https://sabrinas-town.vercel.app/teach/vermont",
  },
  alternates: {
    canonical: "https://sabrinas-town.vercel.app/teach/vermont",
  },
};

export const dynamic = "force-dynamic";

const VT_TOWNS = [
  { slug: "bennington-vt", name: "Bennington", region: "Bennington County" },
  { slug: "brattleboro-vt", name: "Brattleboro", region: "Windham County" },
];

const SEQUENCES = [
  {
    title: "The Green Mountain Republic",
    towns: ["Bennington", "Brattleboro"],
    duration: "2–3 class periods",
    description:
      "Vermont in 1777 was a disputed territory — claimed by New York, contested by New Hampshire, and defended by the Green Mountain Boys who answered to neither. Begin at Bennington, where a Patriot militia turned back a British foraging column and denied Burgoyne the supplies that might have saved his campaign, setting the stage for Saratoga. Then move to Brattleboro to examine how Vermont's borderland communities built the institutions of self-governance even as the war raged around them — and why Vermont held off joining the Union until 1791.",
  },
];

export default async function VermontTeachPage() {
  const modules = await Promise.all(
    VT_TOWNS.map(async (town) => {
      const mod = await getTeacherModule(town.slug);
      return {
        ...town,
        hasCurated: mod?.meta?.contentSource === "curated",
        hasModule: mod !== null,
        gradeRange: mod?.overview?.gradeRange ?? null,
        duration: mod?.overview?.estimatedDuration ?? null,
      };
    })
  );

  const curatedCount = modules.filter((m) => m.hasCurated).length;

  return (
    <main
      style={{
        fontFamily: "var(--font-ui, system-ui, sans-serif)",
        background: "#f2e6c8",
        minHeight: "100vh",
      }}
    >
      {/* ── Hero ── */}
      <section
        style={{
          background: "#1a3a72",
          color: "#f2e6c8",
          position: "relative",
          overflow: "hidden",
          padding: "clamp(4rem,10vw,7rem) clamp(1.5rem,5vw,4rem)",
        }}
      >
        {/* Ghost watermark */}
        <span
          aria-hidden
          style={{
            position: "absolute",
            right: "-0.05em",
            bottom: "-0.2em",
            fontSize: "clamp(12rem,28vw,22rem)",
            fontFamily: "var(--font-display, serif)",
            fontWeight: 900,
            color: "#f2e6c8",
            opacity: 0.04,
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          VT
        </span>

        <div style={{ position: "relative", maxWidth: 760 }}>
          <p
            style={{
              fontFamily: "var(--font-ui, system-ui, sans-serif)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#e8b84b",
              marginBottom: "1rem",
            }}
          >
            Teacher Resources
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display, serif)",
              fontSize: "clamp(2.8rem,6vw,5rem)",
              fontWeight: 900,
              color: "#f2e6c8",
              lineHeight: 1.05,
              marginBottom: "1.5rem",
            }}
          >
            Vermont
          </h1>
          <p
            style={{
              fontFamily: "var(--font-editorial, serif)",
              fontSize: "clamp(1.05rem,2vw,1.25rem)",
              lineHeight: 1.7,
              color: "#d4c9a8",
              maxWidth: 640,
            }}
          >
            Vermont in 1777 was a disputed territory claimed by both New York
            and New Hampshire, and its Green Mountain Boys fought for
            independence on two fronts: against the British and against colonial
            authority. The Battle of Bennington helped break Burgoyne&apos;s
            campaign before Saratoga sealed it.
          </p>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section
        style={{
          background: "#cc3322",
          color: "#f2e6c8",
          padding: "1.25rem clamp(1.5rem,5vw,4rem)",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {[
          { value: VT_TOWNS.length, label: "towns" },
          { value: curatedCount, label: "curated modules" },
          { value: SEQUENCES.length, label: "teaching sequence" },
        ].map((s) => (
          <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-display, serif)",
                fontSize: "2rem",
                fontWeight: 900,
                lineHeight: 1,
              }}
            >
              {s.value}
            </span>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                opacity: 0.85,
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </section>

      {/* ── Narrative ── */}
      <section
        style={{
          background: "#f2e6c8",
          padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#cc3322",
              marginBottom: "1rem",
            }}
          >
            Why Vermont
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display, serif)",
              fontSize: "clamp(1.6rem,3.5vw,2.4rem)",
              fontWeight: 800,
              color: "#1a3a72",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            A Republic Before It Was a State
          </h2>
          <div
            style={{
              fontFamily: "var(--font-editorial, serif)",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "#14100a",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <p>
              Most students learn that the Revolution produced thirteen united
              colonies. Vermont&apos;s story corrects that. In 1777, the Green
              Mountain settlers declared themselves an independent republic —
              not a colony, not a state — and wrote their own constitution, the
              first in the Americas to ban slavery outright. They answered
              neither to New York&apos;s land claims nor to New Hampshire&apos;s
              grants, and they negotiated with the British not out of loyalty
              but as a tactical hedge while they figured out their own future.
            </p>
            <p>
              The Battle of Bennington in August 1777 cuts to the heart of what
              made the Revolution succeed. Burgoyne&apos;s army was bleeding
              supplies, and he sent a Hessian column to seize cattle, horses,
              and a depot at Bennington. General John Stark and his militia —
              men fighting for their own land, not an imperial cause — destroyed
              the column in a single afternoon. Two weeks later, Burgoyne
              surrendered at Saratoga. Without Bennington, there may have been
              no Saratoga; without Saratoga, no French alliance.
            </p>
            <p>
              Vermont didn&apos;t join the Union until 1791 — the fourteenth
              state, not the fourteenth colony. That gap is a teaching
              opportunity: why did Vermont wait? What did they need? What does
              it tell us about the Revolution&apos;s promises and their limits?
            </p>
          </div>
        </div>
      </section>

      {/* ── Teaching Sequence ── */}
      <section
        style={{
          background: "#1a3a72",
          padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#e8b84b",
              marginBottom: "0.75rem",
            }}
          >
            Classroom Sequences
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display, serif)",
              fontSize: "clamp(1.6rem,3.5vw,2.4rem)",
              fontWeight: 800,
              color: "#f2e6c8",
              lineHeight: 1.15,
              marginBottom: "2.5rem",
            }}
          >
            Teaching Sequences
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {SEQUENCES.map((seq) => (
              <div
                key={seq.title}
                style={{
                  background: "rgba(242,230,200,0.07)",
                  border: "1px solid rgba(242,230,200,0.15)",
                  borderRadius: 8,
                  padding: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "baseline",
                    gap: "1rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display, serif)",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "#f2e6c8",
                      margin: 0,
                    }}
                  >
                    {seq.title}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#e8b84b",
                    }}
                  >
                    {seq.duration}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#a8b8d0",
                    marginBottom: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  {seq.towns.join(" → ")}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-editorial, serif)",
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    color: "#d4c9a8",
                  }}
                >
                  {seq.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Town Resources ── */}
      <section
        style={{
          background: "#f2e6c8",
          padding: "clamp(3rem,7vw,5rem) clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#cc3322",
              marginBottom: "0.75rem",
            }}
          >
            By Town
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display, serif)",
              fontSize: "clamp(1.6rem,3.5vw,2.4rem)",
              fontWeight: 800,
              color: "#1a3a72",
              lineHeight: 1.15,
              marginBottom: "2rem",
            }}
          >
            Vermont Town Resources
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {modules.map((m) => (
              <a
                key={m.slug}
                href={`/towns/${m.slug}/teacher`}
                style={{
                  display: "block",
                  background: "#fff",
                  border: "1px solid #ddd8ce",
                  borderRadius: 8,
                  padding: "1.5rem",
                  textDecoration: "none",
                  transition: "border-color 0.15s, box-shadow 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#cc3322";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 2px 12px rgba(204,51,34,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#ddd8ce";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display, serif)",
                      fontSize: "1.15rem",
                      fontWeight: 800,
                      color: "#1a3a72",
                    }}
                  >
                    {m.name}
                  </span>
                  {m.hasCurated && (
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#cc3322",
                        border: "1px solid #cc3322",
                        borderRadius: 3,
                        padding: "0.1rem 0.4rem",
                      }}
                    >
                      Curated
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#6b7280",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {m.region}
                </p>
                {(m.gradeRange || m.duration) && (
                  <p style={{ fontSize: "0.8rem", color: "#6b7280", margin: "0 0 0.75rem" }}>
                    {[m.gradeRange, m.duration].filter(Boolean).join(" · ")}
                  </p>
                )}
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <a
                    href={`/towns/${m.slug}/teacher`}
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#1a3a72",
                      textDecoration: "none",
                    }}
                  >
                    Teacher guide →
                  </a>
                  {m.hasModule && (
                    <a
                      href={`/towns/${m.slug}/teacher/print`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#6b7280",
                        textDecoration: "none",
                      }}
                    >
                      Print PDF
                    </a>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Methodology footer ── */}
      <section
        style={{
          background: "#14100a",
          color: "#a89880",
          padding: "clamp(2rem,5vw,3.5rem) clamp(1.5rem,5vw,4rem)",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#e8b84b",
              marginBottom: "0.75rem",
            }}
          >
            Our Approach
          </p>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "0.5rem" }}>
            Every module is built from primary sources — town records, pension
            applications, letters, maps, and legislative documents — and aligned
            to NCSS and state social studies standards. Curated modules have
            been reviewed by historians and classroom educators. Generated
            modules are AI-assisted first drafts awaiting full editorial review.
          </p>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>
            Questions or corrections?{" "}
            <a
              href="mailto:hello@sabrinas-town.com"
              style={{ color: "#e8b84b", textDecoration: "none" }}
            >
              Reach out
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
