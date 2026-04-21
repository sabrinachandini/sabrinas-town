import { NextRequest, NextResponse } from "next/server";
import { getTown } from "@/lib/api";

export const revalidate = 3600;

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return new NextResponse("Not found", { status: 404 });
  }

  const siteUrl = "https://sabrinas-town.vercel.app";
  const summary = esc((town.execSummary150 ?? town.heroSummary40 ?? "").slice(0, 200));
  const initial = esc(town.name.charAt(0));

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(town.name)}, ${esc(town.state)} | History is for Everyone</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { height: 100%; }
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
      background: #f2e6c8; color: #14100a;
      display: flex; flex-direction: column; min-height: 100%;
    }
    .card { flex: 1; display: flex; flex-direction: column; border: 3px solid #14100a; overflow: hidden; }
    .hdr {
      background: #14100a; padding: 18px 22px 16px;
      border-bottom: 3px solid #cc3322; position: relative; overflow: hidden;
    }
    .ghost {
      position: absolute; right: -6px; top: -10px;
      font-size: 90px; font-weight: 900; color: rgba(255,255,255,0.04);
      line-height: 1; letter-spacing: -0.04em; pointer-events: none; user-select: none;
    }
    .eyebrow { font-size: 9px; text-transform: uppercase; letter-spacing: 0.22em; color: rgba(242,230,200,0.4); margin-bottom: 5px; font-weight: 500; }
    .town-name { font-size: clamp(22px, 6vw, 36px); font-weight: 900; color: #f2e6c8; line-height: 0.92; letter-spacing: -0.03em; }
    .body { flex: 1; padding: 16px 22px; display: flex; flex-direction: column; gap: 10px; }
    .accent { width: 28px; height: 2px; background: #cc3322; margin-bottom: 4px; }
    .summary { font-size: 13px; line-height: 1.6; color: rgba(20,16,10,0.6); flex: 1; }
    .footer { padding: 11px 22px; border-top: 2px solid rgba(20,16,10,0.08); display: flex; align-items: center; justify-content: space-between; gap: 8px; }
    .site-lbl { font-size: 8px; text-transform: uppercase; letter-spacing: 0.18em; color: rgba(20,16,10,0.3); }
    .explore { font-size: 9px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 600; color: #cc3322; text-decoration: none; border: 1.5px solid rgba(204,51,34,0.4); padding: 5px 12px; white-space: nowrap; }
    .explore:hover { background: #cc3322; color: #f2e6c8; }
  </style>
</head>
<body>
  <div class="card">
    <div class="hdr">
      <div class="ghost" aria-hidden="true">${initial}</div>
      <p class="eyebrow">${esc(town.state)} &middot; History is for Everyone</p>
      <h1 class="town-name">${esc(town.name)}</h1>
    </div>
    <div class="body">
      <div class="accent"></div>
      ${summary ? `<p class="summary">${summary}</p>` : ""}
    </div>
    <div class="footer">
      <span class="site-lbl">historyisforeveryone.com</span>
      <a class="explore" href="${siteUrl}/towns/${esc(slug)}" target="_blank" rel="noopener noreferrer">
        Explore ${esc(town.name)} &rarr;
      </a>
    </div>
  </div>
</body>
</html>`;

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Frame-Options": "ALLOWALL",
      "Content-Security-Policy": "frame-ancestors *",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
