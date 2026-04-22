import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Events of the Revolution | History is for Everyone";
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

        {/* Ghost word */}
        <div style={{
          position: "absolute",
          top: 0,
          right: -10,
          fontSize: 280,
          fontWeight: 700,
          color: "rgba(255,255,255,0.03)",
          lineHeight: 1,
          display: "flex",
        }}>
          EVENTS
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#4A6A9B", display: "flex" }}>
            Revolutionary War
          </div>
          <div style={{ fontSize: 80, fontWeight: 700, color: "#f2e6c8", lineHeight: 0.9, display: "flex" }}>
            Events &amp; Milestones
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
