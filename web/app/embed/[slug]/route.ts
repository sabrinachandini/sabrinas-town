import { NextRequest, NextResponse } from "next/server";
import { getTown } from "@/lib/api";

export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) {
    return new NextResponse("Not found", { status: 404 });
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://historyisforeveryone.com";
  const score = town.compositeScore != null ? town.compositeScore.toFixed(1) : null;
  const summary = town.execSummary150 ?? town.heroSummary40;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escHtml(town.name)} | History is for Everyone</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: Georgia, 'Times New Roman', serif;
      background: transparent;
      color: #1a1a1a;
      padding: 16px;
      font-size: 14px;
      line-height: 1.5;
    }
    .widget {
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 16px;
      background: #ffffff;
      max-width: 400px;
    }
    .badge {
      display: inline-block;
      font-size: 10px;
      font-family: system-ui, sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background: #f3f4f6;
      color: #6b7280;
      padding: 2px 6px;
      border-radius: 4px;
      margin-bottom: 8px;
    }
    h1 { font-size: 18px; font-weight: bold; margin-bottom: 4px; }
    .state {
      font-size: 12px;
      font-family: system-ui, sans-serif;
      color: #6b7280;
      margin-bottom: 8px;
    }
    .summary { font-size: 13px; color: #374151; margin-bottom: 12px; }
    .score-row { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
    .score-pill {
      font-family: system-ui, sans-serif;
      font-size: 11px;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 12px;
      background: #dbeafe;
      color: #1e40af;
    }
    .tier { font-family: system-ui, sans-serif; font-size: 11px; color: #6b7280; }
    .cta {
      display: block;
      text-align: center;
      font-family: system-ui, sans-serif;
      font-size: 12px;
      font-weight: 500;
      color: #1d4ed8;
      text-decoration: none;
      border: 1px solid #1d4ed8;
      padding: 6px 12px;
      border-radius: 4px;
    }
    .cta:hover { background: #1d4ed8; color: #fff; }
    .branding {
      margin-top: 10px;
      text-align: center;
      font-family: system-ui, sans-serif;
      font-size: 10px;
      color: #9ca3af;
    }
    .branding a { color: #9ca3af; text-decoration: none; }
  </style>
</head>
<body>
  <div class="widget">
    <span class="badge">Revolutionary Town</span>
    <h1>${escHtml(town.name)}</h1>
    <p class="state">${escHtml(town.state)}</p>
    <p class="summary">${escHtml(summary)}</p>
    ${score != null ? `
    <div class="score-row">
      <span class="score-pill">Score ${escHtml(score)}</span>
      <span class="tier">${escHtml(town.scoreTier)}</span>
    </div>` : ""}
    <a class="cta" href="${escHtml(siteUrl)}/towns/${escHtml(town.slug)}" target="_blank" rel="noopener noreferrer">
      Explore ${escHtml(town.name)} &rarr;
    </a>
    <p class="branding">
      Powered by <a href="${escHtml(siteUrl)}" target="_blank" rel="noopener noreferrer">History is for Everyone</a>
    </p>
  </div>
</body>
</html>`;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
