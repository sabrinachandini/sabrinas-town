import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "History is for Everyone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STAR = "M 201.6 54.8 L 232.8 150.2 Q 234 154 238 154 L 338 154 Q 343 154 338.9 156.9 L 257.3 215.7 Q 254 218 255.3 221.8 L 286.4 316.3 Q 288 321 284 318.1 L 203.2 259.4 Q 200 257 196.8 259.4 L 116 318.1 Q 112 321 113.6 316.3 L 144.7 221.8 Q 146 218 142.8 215.7 L 61.1 156.9 Q 57 154 62 154 L 162 154 Q 166 154 167.2 150.2 L 198.4 54.8 Q 200 50 201.6 54.8 Z";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a3a72",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg viewBox="0 0 400 400" width="400" height="400">
          <path d={STAR} fill="#24446e" stroke="#2a2418" stroke-width="4.5" stroke-linejoin="round" />
          <g transform="translate(200 200) scale(0.667) translate(-200 -200)">
            <path d={STAR} fill="#faf0db" stroke="#2a2418" stroke-width="3.5" stroke-linejoin="round" />
          </g>
          <g transform="translate(200 200) scale(0.367) translate(-200 -200)">
            <path d={STAR} fill="#d14a39" stroke="#2a2418" stroke-width="3" stroke-linejoin="round" />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  );
}
