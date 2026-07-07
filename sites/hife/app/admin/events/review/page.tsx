import prisma from "@/lib/prisma";
import Link from "next/link";
import { approveEvent, rejectEvent, promoteSource } from "./actions";

export default async function EventReviewPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab = "pending" } = await searchParams;

  const [pending, runs, sources] = await Promise.all([
    prisma.localEvent.findMany({
      where: tab === "pending" ? { needsReview: true, published: false } : {},
      include: { source: { select: { id: true, name: true, trustLevel: true } }, town: { select: { name: true, slug: true } } },
      orderBy: { createdAt: "desc" },
      take: 100,
    }),
    prisma.ingestionRun.findMany({ orderBy: { startedAt: "desc" }, take: 10 }),
    prisma.eventSource.findMany({ orderBy: { name: "asc" } }),
  ]);

  const pendingCount = await prisma.localEvent.count({ where: { needsReview: true, published: false } });

  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-[#1a3a72] border-b-4 border-[#cc3322] px-8 py-8">
        <nav className="font-ui text-[10px] uppercase tracking-[0.18em] text-cream/40 mb-4">
          <Link href="/admin" className="hover:text-cream/70">Admin</Link> / Event Ingestion
        </nav>
        <h1 className="font-display text-cream text-[36px] tracking-[-0.02em]">Event Ingestion</h1>
        {pendingCount > 0 && (
          <p className="font-ui text-[13px] text-[#cc3322] mt-1 font-semibold">
            {pendingCount} event{pendingCount !== 1 ? "s" : ""} pending review
          </p>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-ink/10 bg-white/40 px-8">
        <div className="flex gap-1">
          {[
            { key: "pending", label: `Pending (${pendingCount})` },
            { key: "sources", label: `Sources (${sources.length})` },
            { key: "runs", label: "Run Log" },
          ].map(({ key, label }) => (
            <a
              key={key}
              href={`?tab=${key}`}
              className={`no-underline font-ui text-[10px] uppercase tracking-[0.15em] px-5 py-3 border-b-2 transition-colors ${
                tab === key ? "border-[#cc3322] text-ink" : "border-transparent text-ink/40 hover:text-ink"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 py-8">

        {/* ── Pending review ── */}
        {tab === "pending" && (
          <div>
            {pending.length === 0 ? (
              <p className="font-ui text-[16px] text-ink/40">No events pending review. The queue is clear.</p>
            ) : (
              <div className="space-y-3">
                {pending.map((e) => (
                  <div key={e.id} className="border border-ink/10 bg-white/60 p-5">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="font-ui text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 bg-[#1a3a72]/10 text-[#1a3a72]">
                            {e.category}
                          </span>
                          <span className="font-ui text-[9px] uppercase tracking-[0.15em] text-ink/30">
                            {e.source?.name ?? "manual"}
                          </span>
                          <Link
                            href={`/towns/${e.town.slug}`}
                            className="no-underline font-ui text-[9px] uppercase tracking-[0.15em] text-ink/30 hover:text-[#1a3a72]"
                          >
                            {e.town.name}
                          </Link>
                        </div>
                        <h2 className="font-display text-[20px] text-ink tracking-[-0.01em]">{e.name}</h2>
                        <p className="font-ui text-[12px] text-ink/50 mt-0.5">
                          {e.eventDate
                            ? new Date(e.eventDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
                            : e.month && e.day
                            ? `Annual — ${new Date(0, e.month - 1).toLocaleString("en-US", { month: "long" })} ${e.day}`
                            : "No date"}
                          {e.venue ? ` · ${e.venue}` : ""}
                        </p>
                        <p className="font-ui text-[13px] text-ink/60 mt-2 leading-relaxed max-w-[600px] line-clamp-3">{e.description}</p>
                        {e.url && (
                          <a href={e.url} target="_blank" rel="noopener noreferrer"
                            className="font-ui text-[11px] text-[#1a3a72]/60 hover:text-[#1a3a72] mt-1 block">
                            ↗ Source link
                          </a>
                        )}
                      </div>

                      <div className="flex flex-col gap-2 flex-shrink-0">
                        <form action={approveEvent.bind(null, e.id)}>
                          <button type="submit" className="w-full font-ui text-[10px] uppercase tracking-[0.12em] bg-[#2a5c45] text-cream px-5 py-2 hover:bg-[#1a3a2a] transition-colors">
                            Approve →
                          </button>
                        </form>
                        <form action={rejectEvent.bind(null, e.id)}>
                          <button type="submit" className="w-full font-ui text-[10px] uppercase tracking-[0.12em] border border-[#cc3322]/30 text-[#cc3322]/70 px-5 py-2 hover:border-[#cc3322] hover:text-[#cc3322] transition-colors">
                            Reject
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── Sources ── */}
        {tab === "sources" && (
          <div className="space-y-3">
            <p className="font-ui text-[12px] text-ink/40 mb-6">
              To add a source, run: <code className="bg-ink/5 px-2 py-0.5 font-mono text-[11px]">npx tsx scripts/seed-event-sources.ts</code>
            </p>
            {sources.map((s) => (
              <div key={s.id} className="border border-ink/10 bg-white/60 p-5">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`font-ui text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 ${s.trustLevel === "auto_publish" ? "bg-[#2a5c45]/15 text-[#2a5c45]" : "bg-[#8B6914]/15 text-[#8B6914]"}`}>
                        {s.trustLevel}
                      </span>
                      <span className="font-ui text-[9px] uppercase tracking-[0.15em] text-ink/30">{s.type}</span>
                      <span className={`font-ui text-[9px] uppercase tracking-[0.15em] px-1.5 py-0.5 ${s.active ? "text-ink/30" : "bg-[#cc3322]/10 text-[#cc3322]"}`}>
                        {s.active ? "active" : "paused"}
                      </span>
                    </div>
                    <h2 className="font-display text-[18px] text-ink">{s.name}</h2>
                    <a href={s.url} target="_blank" rel="noopener noreferrer"
                      className="font-ui text-[11px] text-ink/40 hover:text-[#1a3a72] block mt-0.5">
                      {s.url.slice(0, 70)}{s.url.length > 70 ? "…" : ""}
                    </a>
                    {s.notes && <p className="font-ui text-[12px] text-ink/40 mt-2 max-w-[500px]">{s.notes}</p>}
                    <p className="font-ui text-[10px] text-ink/25 mt-2">
                      {s.lastFetchAt
                        ? `Last fetched: ${new Date(s.lastFetchAt).toLocaleDateString()} · ${s.lastStatus ?? "—"} · ${s.lastEventCount ?? 0} events`
                        : "Never fetched"}
                    </p>
                  </div>
                  {s.trustLevel === "review_first" && (
                    <form action={promoteSource.bind(null, s.id)}>
                      <button type="submit"
                        className="font-ui text-[9px] uppercase tracking-[0.12em] border border-[#2a5c45]/30 text-[#2a5c45]/70 px-4 py-2 hover:border-[#2a5c45] hover:text-[#2a5c45] transition-colors">
                        Promote to Auto-Publish
                      </button>
                    </form>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Run log ── */}
        {tab === "runs" && (
          <div className="space-y-3">
            {runs.length === 0 ? (
              <p className="font-ui text-[16px] text-ink/40">No runs yet.</p>
            ) : (
              runs.map((r) => (
                <div key={r.id} className="border border-ink/10 bg-white/60 p-5">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className={`font-ui text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 ${r.status === "completed" ? "bg-[#2a5c45]/15 text-[#2a5c45]" : r.status === "failed" ? "bg-[#cc3322]/10 text-[#cc3322]" : "bg-[#8B6914]/15 text-[#8B6914]"}`}>
                      {r.status}
                    </span>
                    <span className="font-ui text-[11px] text-ink/50">
                      {new Date(r.startedAt).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                    </span>
                    <span className="font-ui text-[10px] text-ink/35">
                      {r.sourcesChecked} sources · +{r.eventsCreated} created · {r.eventsDuped} duped · {r.eventsExpired} expired
                    </span>
                  </div>
                  {r.log && (
                    <pre className="font-mono text-[10px] text-ink/40 bg-ink/[0.03] p-3 overflow-x-auto max-h-48 overflow-y-auto whitespace-pre-wrap">
                      {r.log}
                    </pre>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
