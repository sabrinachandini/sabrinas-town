import { notFound } from "next/navigation";
import Link from "next/link";
import { getMuster } from "@/lib/muster";
import { CopyLinkButton } from "./CopyLinkButton";

interface PageProps {
  params: Promise<{ id: string }>;
}

const STOP_TYPE_ICONS: Record<string, string> = {
  SITE: "⬛",
  EVENT: "★",
  MEAL: "◆",
  LODGING: "◇",
  CUSTOM: "·",
};

const STOP_TYPE_LABELS: Record<string, string> = {
  SITE: "Historical Site",
  EVENT: "Living History Event",
  MEAL: "Meal Stop",
  LODGING: "Lodging",
  CUSTOM: "Stop",
};

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

function formatDateShort(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default async function MusterPage({ params }: PageProps) {
  const { id } = await params;
  const muster = await getMuster(id);

  if (!muster) notFound();

  const totalStops = muster.days.reduce((sum, d) => sum + d.stops.length, 0);
  const numDays = muster.days.length;

  return (
    <div className="bg-cream min-h-screen">
      {/* ── Header ── */}
      <div className="bg-[#1a3a72] border-b-4 border-[#cc3322] relative overflow-hidden">
        <div
          aria-hidden
          className="absolute right-[-0.02em] top-[-0.1em] font-display leading-none text-white/[0.04] pointer-events-none select-none"
          style={{ fontSize: "clamp(5rem,14vw,14rem)" }}
        >
          MUSTER
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-16 pt-10 pb-12">
          <p className="font-ui text-[9px] uppercase tracking-[0.24em] text-cream/35 mb-3">
            A Muster from History Is For Everyone
          </p>
          <h1 className="font-display text-cream leading-[0.9] tracking-[-0.03em] mb-4"
              style={{ fontSize: "clamp(32px,6vw,64px)" }}>
            {muster.title}
          </h1>
          <div className="flex flex-wrap gap-4 mb-5">
            <span className="font-ui text-[10px] uppercase tracking-[0.14em] text-cream/50">
              {formatDateShort(muster.startDate)} – {formatDateShort(muster.endDate)}
            </span>
            <span className="font-ui text-[10px] uppercase tracking-[0.14em] text-cream/30">·</span>
            <span className="font-ui text-[10px] uppercase tracking-[0.14em] text-cream/50">
              {muster.startLocation} → {muster.endLocation}
            </span>
            <span className="font-ui text-[10px] uppercase tracking-[0.14em] text-cream/30">·</span>
            <span className="font-ui text-[10px] uppercase tracking-[0.14em] text-cream/50">
              {numDays} day{numDays !== 1 ? "s" : ""}, {totalStops} stops
            </span>
          </div>
          {muster.summary && (
            <p className="font-editorial italic font-light text-cream/65 max-w-[580px] leading-[1.6]"
               style={{ fontSize: "clamp(16px,2vw,20px)" }}>
              {muster.summary}
            </p>
          )}
        </div>
      </div>

      {/* ── Top actions ── */}
      <div className="border-b border-ink/8 bg-white/50">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-3 flex flex-wrap items-center gap-4">
          <Link
            href="/muster/new"
            className="no-underline font-ui text-[10px] uppercase tracking-[0.15em] text-ink/40 hover:text-ink transition-colors"
          >
            ← New muster
          </Link>
          <div className="flex-1" />
          <a
            href={`/muster/${id}/print`}
            className="no-underline font-ui text-[10px] uppercase tracking-[0.15em] text-ink/50 border border-ink/15 px-4 py-1.5 hover:border-ink/40 hover:text-ink transition-colors"
          >
            Print →
          </a>
          <CopyLinkButton />
        </div>
      </div>

      {/* ── Days ── */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-12">
        <div className="space-y-16">
          {muster.days.map((day) => (
            <section key={day.id}>
              {/* Day header */}
              <div className="border-t-[3px] border-ink pt-6 mb-8">
                <div className="flex flex-wrap items-baseline gap-4">
                  <p className="font-display text-[#cc3322]/40 text-[48px] leading-none tracking-[-0.04em]">
                    {String(day.dayNumber).padStart(2, "0")}
                  </p>
                  <div>
                    <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-ink/40">
                      {formatDate(new Date(day.date))}
                    </p>
                    <h2 className="font-display text-[clamp(22px,3.5vw,32px)] text-ink tracking-[-0.02em] leading-tight">
                      {day.theme}
                    </h2>
                  </div>
                </div>
                <p className="font-editorial italic text-[17px] text-ink/55 leading-relaxed mt-4 max-w-[640px]">
                  {day.narrative}
                </p>
              </div>

              {/* Stops */}
              <ol className="space-y-0">
                {day.stops.map((stop, idx) => {
                  const isEvent = stop.stopType === "EVENT";
                  const name = stop.place?.name ?? stop.localEvent?.name ?? stop.customName ?? "Stop";
                  const detail = stop.place
                    ? `${stop.place.placeType.replace(/_/g, " ")} · ${stop.place.address ?? ""}`
                    : stop.localEvent
                    ? `${stop.localEvent.category} · ${stop.localEvent.venue ?? ""}`
                    : stop.customNote ?? "";

                  return (
                    <li
                      key={stop.id}
                      className={`flex gap-5 py-6 border-b border-ink/8 last:border-b-0 ${
                        isEvent ? "bg-[#1a3a72]/[0.03] -mx-4 px-4" : ""
                      }`}
                    >
                      {/* Stop number */}
                      <div className="flex-shrink-0 w-8 pt-0.5">
                        <div className={`w-8 h-8 flex items-center justify-center text-[11px] font-ui font-semibold border-2 ${
                          isEvent
                            ? "bg-[#cc3322] border-[#cc3322] text-cream"
                            : "bg-transparent border-ink/20 text-ink/40"
                        }`}>
                          {idx + 1}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          {isEvent && (
                            <span className="font-ui text-[8px] uppercase tracking-[0.15em] bg-[#cc3322] text-cream px-2 py-0.5">
                              Living History
                            </span>
                          )}
                          <span className="font-ui text-[9px] uppercase tracking-[0.12em] text-ink/35">
                            {STOP_TYPE_LABELS[stop.stopType] ?? stop.stopType}
                          </span>
                          {stop.arrivalTime && (
                            <span className="font-ui text-[9px] text-ink/30">
                              {stop.arrivalTime}
                              {stop.durationMinutes && ` · ${stop.durationMinutes} min`}
                            </span>
                          )}
                        </div>

                        <h3 className="font-display text-[clamp(18px,2.5vw,24px)] text-ink tracking-[-0.01em] leading-tight mb-1">
                          {stop.place ? (
                            <Link
                              href={`/places/${stop.place.id}`}
                              className="no-underline hover:text-[#cc3322] transition-colors"
                            >
                              {name}
                            </Link>
                          ) : stop.localEvent?.url ? (
                            <a
                              href={stop.localEvent.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="no-underline hover:text-[#cc3322] transition-colors"
                            >
                              {name}
                            </a>
                          ) : (
                            name
                          )}
                        </h3>

                        {detail.trim() && (
                          <p className="font-ui text-[12px] uppercase tracking-[0.1em] text-ink/35 mb-2">
                            {detail.trim().replace(/·\s*$/, "")}
                          </p>
                        )}

                        {stop.whyThisStop && (
                          <p className="font-ui text-[16px] text-ink/60 leading-relaxed">
                            {stop.whyThisStop}
                          </p>
                        )}

                        {/* Links */}
                        <div className="flex flex-wrap gap-3 mt-3">
                          {stop.place?.website && (
                            <a
                              href={stop.place.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="no-underline font-ui text-[10px] uppercase tracking-[0.12em] text-[#1a3a72]/60 hover:text-[#1a3a72] border-b border-[#1a3a72]/20 hover:border-[#1a3a72]/60 transition-colors pb-0.5"
                            >
                              Visit website →
                            </a>
                          )}
                          {stop.localEvent?.url && (
                            <a
                              href={stop.localEvent.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="no-underline font-ui text-[10px] uppercase tracking-[0.12em] text-[#cc3322]/70 hover:text-[#cc3322] border-b border-[#cc3322]/20 hover:border-[#cc3322]/60 transition-colors pb-0.5"
                            >
                              Event details →
                            </a>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>
          ))}
        </div>

        {/* ── Footer actions ── */}
        <div className="mt-16 pt-8 border-t-2 border-ink/10 flex flex-wrap gap-4">
          <Link
            href="/muster/new"
            className="no-underline font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a3a72] border-2 border-[#1a3a72]/20 px-6 py-3 hover:border-[#1a3a72] transition-colors"
          >
            Muster another trip →
          </Link>
          <Link
            href="/towns"
            className="no-underline font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/50 border border-ink/20 px-6 py-3 hover:border-ink/50 hover:text-ink transition-colors"
          >
            Explore all towns →
          </Link>
        </div>
      </div>
    </div>
  );
}
