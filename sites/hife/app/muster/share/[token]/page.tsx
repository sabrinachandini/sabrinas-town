import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getMusterByToken } from "@/lib/muster";
import { MusterShareMap } from "./MusterShareMap";
import { ShareActions } from "./ShareActions";

interface PageProps { params: Promise<{ token: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { token } = await params;
  const muster = await getMusterByToken(token);
  if (!muster) return { title: "Muster | History Is For Everyone" };

  const totalDays = muster.days.length;
  const totalStopsCount = muster.days.reduce((n, d) => n + d.stops.length, 0);

  const title = muster.title || `${totalDays}-Day Revolutionary War Muster`;
  const description = totalStopsCount
    ? `${totalDays} days, ${totalStopsCount} stops along the Revolutionary War trail — mustered by History Is For Everyone.`
    : `A ${totalDays}-day Revolutionary War road trip, mustered by History Is For Everyone.`;

  return {
    title: `${title} | History Is For Everyone`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "History Is For Everyone",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

const DAY_COLORS = ["#cc3322", "#1a3a72", "#4A6A9B", "#5a7a5a", "#8B6914", "#6B21A8"];

function fmtShort(d: Date) { return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" }); }
function fmtDay(d: Date) { return new Date(d).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }); }

export default async function MusterSharePage({ params }: PageProps) {
  const { token } = await params;
  const muster = await getMusterByToken(token);
  if (!muster) notFound();

  const totalStops = muster.days.reduce((sum, d) => sum + d.stops.length, 0);

  // Collect map coords
  const stopsWithCoords = muster.days.flatMap((day, di) =>
    day.stops
      .filter((s) => s.place?.lat && s.place?.lng)
      .map((s) => ({
        id: s.id,
        lat: s.place!.lat!,
        lng: s.place!.lng!,
        dayIdx: di,
        name: s.place!.name,
        whyThisStop: s.whyThisStop,
        arrivalTime: s.arrivalTime,
        durationMinutes: s.durationMinutes,
        address: s.place?.address ?? s.customNote ?? null,
        website: s.place?.website ?? s.localEvent?.url ?? null,
      }))
  );

  return (
    <div className="bg-cream min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-[#1a3a72] border-b-4 border-[#cc3322] relative overflow-hidden">
        <div aria-hidden className="absolute right-0 top-0 font-display leading-none text-white/[0.04] pointer-events-none select-none" style={{ fontSize: "clamp(4rem,12vw,12rem)" }}>MUSTER</div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 pt-8 pb-10">
          <p className="font-ui text-[9px] uppercase tracking-[0.24em] text-cream/35 mb-2">A Muster from History Is For Everyone</p>
          <h1 className="font-display text-cream leading-[0.9] tracking-[-0.03em] mb-3" style={{ fontSize: "clamp(28px,5vw,56px)" }}>{muster.title}</h1>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="font-ui text-[10px] uppercase tracking-[0.12em] text-cream/50">{fmtShort(muster.startDate)} – {fmtShort(muster.endDate)}</span>
            <span className="text-cream/20">·</span>
            <span className="font-ui text-[10px] uppercase tracking-[0.12em] text-cream/50">{muster.startLocation} → {muster.endLocation}</span>
            <span className="text-cream/20">·</span>
            <span className="font-ui text-[10px] uppercase tracking-[0.12em] text-cream/50">{muster.days.length} days · {totalStops} stops</span>
          </div>
          {muster.summary && <p className="font-editorial italic font-light text-cream/60 max-w-[560px] leading-[1.6]" style={{ fontSize: "clamp(15px,1.8vw,19px)" }}>{muster.summary}</p>}
        </div>
      </div>

      <ShareActions
        shareUrl={`https://sabrinas-town.vercel.app/muster/share/${token}`}
        title={muster.title}
      />

      {/* Two-column body */}
      <div className="flex flex-1 flex-col sm:flex-row">
        {/* Left: agenda */}
        <div className="sm:w-[55%] overflow-y-auto">
          <div className="max-w-[680px] mx-auto px-8 md:px-10 py-10 space-y-14">
            {muster.days.map((day, di) => {
              const color = DAY_COLORS[di % DAY_COLORS.length];
              return (
                <section key={day.id}>
                  <div className="border-t-[3px] pt-5 mb-6" style={{ borderColor: color }}>
                    <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/40">{fmtDay(day.date)}</p>
                    <h2 className="font-display text-[clamp(20px,3vw,28px)] text-ink tracking-[-0.02em]">Day {day.dayNumber}: {day.theme}</h2>
                    <p className="font-editorial italic text-[16px] text-ink/50 mt-2 leading-relaxed">{day.narrative}</p>
                  </div>
                  <ol className="space-y-0">
                    {day.stops.map((stop, si) => {
                      const name = stop.place?.name ?? stop.localEvent?.name ?? stop.customName ?? "Stop";
                      const isEvent = stop.stopType === "EVENT";
                      const website = stop.place?.website ?? stop.localEvent?.url ?? null;
                      return (
                        <li key={stop.id} className={`flex gap-4 py-5 border-b border-ink/8 last:border-0 ${isEvent ? "bg-[#1a3a72]/[0.03] -mx-3 px-3" : ""}`}>
                          <div
                            className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-[11px] font-ui font-semibold border-2 mt-0.5"
                            style={isEvent ? { background: color, borderColor: color, color: "#f2e6c8" } : { borderColor: `${color}40`, color: `${color}80` }}
                          >
                            {si + 1}
                          </div>
                          <div className="flex-1">
                            {isEvent && <span className="font-ui text-[8px] uppercase tracking-[0.15em] text-cream px-1.5 py-0.5 mr-1" style={{ background: color }}>Event</span>}
                            <h3 className="font-display text-[clamp(17px,2.5vw,22px)] text-ink tracking-[-0.01em] inline">
                              {website ? (
                                <a href={website} target="_blank" rel="noopener noreferrer" className="hover:text-[#1a3a72] transition-colors no-underline border-b border-ink/20 hover:border-[#1a3a72]">
                                  {name}
                                </a>
                              ) : name}
                            </h3>
                            {stop.arrivalTime && <p className="font-ui text-[11px] text-ink/35 mt-0.5">{stop.arrivalTime}{stop.durationMinutes ? ` · ${stop.durationMinutes} min` : ""}</p>}
                            {stop.whyThisStop && <p className="font-ui text-[15px] text-ink/55 mt-1.5 leading-relaxed">{stop.whyThisStop}</p>}
                            {(() => {
                              const addr = stop.place?.address ?? stop.customNote ?? null;
                              const coords = stop.place?.lat && stop.place?.lng ? `${stop.place.lat},${stop.place.lng}` : null;
                              const mapsUrl = coords
                                ? `https://www.google.com/maps/search/?api=1&query=${coords}`
                                : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((stop.place?.name ?? stop.localEvent?.name ?? stop.customName ?? "") + ", USA")}`;
                              return (
                                <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
                                  className="font-ui text-[12px] text-ink/35 hover:text-[#1a3a72] transition-colors mt-1 block no-underline">
                                  {addr ? `📍 ${addr}` : "📍 View on map →"}
                                </a>
                              );
                            })()}
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </section>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="border-t border-ink/10 bg-[#1a3a72]/5">
            <div className="max-w-[680px] mx-auto px-8 md:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="font-ui text-[14px] text-ink/50">Muster your own Revolutionary War road trip.</p>
              <Link href="/muster/new" className="no-underline font-ui text-[10px] font-semibold uppercase tracking-[0.18em] bg-[#cc3322] text-cream px-6 py-3 hover:bg-[#a32818] transition-colors">
                Muster a Trip →
              </Link>
            </div>
          </div>

        </div>

        {/* Right: map — sticky on desktop */}
        <div className="sm:w-[45%] sm:sticky sm:top-0 sm:h-screen h-[60vw]">
          <MusterShareMap stops={stopsWithCoords} />
        </div>
      </div>
    </div>
  );
}
