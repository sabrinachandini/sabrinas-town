import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Town Network Map | History is for Everyone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#14100a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "64px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Red accent bar top */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 8, backgroundColor: "#cc3322", display: "flex" }} />

        {/* Decorative dots — simulated map nodes */}
        {[
          { top: 120, left: 320, size: 20, color: "#4A6A9B" },
          { top: 200, left: 540, size: 13, color: "#cc3322" },
          { top: 160, left: 700, size: 16, color: "#1a3a72" },
          { top: 300, left: 450, size: 10, color: "#cc3322" },
          { top: 260, left: 820, size: 12, color: "#1a3a72" },
          { top: 380, left: 620, size: 14, color: "#4A6A9B" },
        ].map((dot, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              borderRadius: "50%",
              backgroundColor: dot.color,
              opacity: 0.6,
              display: "flex",
            }}
          />
        ))}

        {/* Ghost word */}
        <div style={{
          position: "absolute",
          top: 0,
          right: -10,
          fontSize: 320,
          fontWeight: 700,
          color: "rgba(255,255,255,0.03)",
          lineHeight: 1,
          display: "flex",
        }}>
          MAP
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#4A6A9B", display: "flex" }}>
            Network
          </div>
          <div style={{ fontSize: 80, fontWeight: 700, color: "#f2e6c8", lineHeight: 0.9, display: "flex" }}>
            Town Network Map
          </div>
          <div style={{ fontSize: 22, color: "rgba(242,230,200,0.45)", marginTop: 16, display: "flex" }}>
            History is for Everyone
          </div>
        </div>

        {/* Bottom accent line */}
        <div style={{ position: "absolute", bottom: 64, left: 64, width: 48, height: 3, backgroundColor: "#cc3322", display: "flex" }} />
      </div>
    ),
    { ...size }
  );
}
