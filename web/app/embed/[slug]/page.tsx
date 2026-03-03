import { notFound } from "next/navigation";
import { getTown } from "@/lib/api";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EmbedTownPage({ params }: PageProps) {
  const { slug } = await params;
  const town = await getTown(slug);

  if (!town) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://historyisforeveryone.com";

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-size: 14px; line-height: 1.5; color: #1a1a1a; }
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
        .state { font-size: 12px; font-family: system-ui, sans-serif; color: #6b7280; margin-bottom: 8px; }
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
        .branding { margin-top: 10px; text-align: center; font-family: system-ui, sans-serif; font-size: 10px; color: #9ca3af; }
        .branding a { color: #9ca3af; text-decoration: none; }
      `}</style>

      <div className="widget">
        <span className="badge">Revolutionary Town</span>
        <h1>{town.name}</h1>
        <p className="state">{town.state}</p>
        <p className="summary">{town.execSummary150 ?? town.heroSummary40}</p>
        {town.compositeScore != null && (
          <div className="score-row">
            <span className="score-pill">Score {town.compositeScore.toFixed(1)}</span>
            <span className="tier">{town.scoreTier}</span>
          </div>
        )}
        <a
          className="cta"
          href={`${siteUrl}/towns/${town.slug}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore {town.name} →
        </a>
        <p className="branding">
          Powered by{" "}
          <a href={siteUrl} target="_blank" rel="noopener noreferrer">
            History is for Everyone
          </a>
        </p>
      </div>
    </>
  );
}
