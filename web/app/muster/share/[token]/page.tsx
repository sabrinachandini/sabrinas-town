import { notFound } from "next/navigation";
import Link from "next/link";
import { getMusterByToken } from "@/lib/muster";

interface PageProps { params: Promise<{ token: string }> }

function fmtShort(d: Date) { return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" }); }
function fmtDay(d: Date) { return new Date(d).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }); }

export default async function MusterSharePage({ params }: PageProps) {
  const { token } = await params;
  const muster = await getMusterByToken(token);
  if (!muster) notFound();

  const totalStops = muster.days.reduce((sum, d) => sum + d.stops.length, 0);

  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-[#1a3a72] border-b-4 border-[#cc3322] relative overflow-hidden">
        <div aria-hidden className="absolute right-0 top-0 font-display leading-none text-white/[0.04] pointer-events-none select-none" style={{ fontSize: "clamp(4rem,12vw,12rem)" }}>MUSTER</div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-16 pt-8 pb-10">
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

      <div className="max-w-[780px] mx-auto px-8 md:px-16 py-10 space-y-14">
        {muster.days.map((day) => (
          <section key={day.id}>
            <div className="border-t-[3px] border-ink pt-5 mb-6">
              <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/40">{fmtDay(day.date)}</p>
              <h2 className="font-display text-[clamp(20px,3vw,28px)] text-ink tracking-[-0.02em]">Day {day.dayNumber}: {day.theme}</h2>
              <p className="font-editorial italic text-[16px] text-ink/50 mt-2 leading-relaxed">{day.narrative}</p>
            </div>
            <ol className="space-y-0">
              {day.stops.map((stop, si) => {
                const name = stop.place?.name ?? stop.localEvent?.name ?? stop.customName ?? "Stop";
                const isEvent = stop.stopType === "EVENT";
                return (
                  <li key={stop.id} className={`flex gap-4 py-5 border-b border-ink/8 last:border-0 ${isEvent ? "bg-[#1a3a72]/[0.03] -mx-3 px-3" : ""}`}>
                    <div className={`flex-shrink-0 w-7 h-7 flex items-center justify-center text-[11px] font-ui font-semibold border-2 mt-0.5 ${isEvent ? "bg-[#cc3322] border-[#cc3322] text-cream" : "border-ink/20 text-ink/40"}`}>{si + 1}</div>
                    <div className="flex-1">
                      {isEvent && <span className="font-ui text-[8px] uppercase tracking-[0.15em] bg-[#cc3322] text-cream px-1.5 py-0.5 mr-1">Living History</span>}
                      <h3 className="font-display text-[clamp(17px,2.5vw,22px)] text-ink tracking-[-0.01em]">{name}</h3>
                      {stop.arrivalTime && <p className="font-ui text-[11px] text-ink/35 mt-0.5">{stop.arrivalTime}{stop.durationMinutes ? ` · ${stop.durationMinutes} min` : ""}</p>}
                      {stop.whyThisStop && <p className="font-ui text-[15px] text-ink/55 mt-1.5 leading-relaxed">{stop.whyThisStop}</p>}
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>

      <div className="border-t border-ink/10 bg-[#1a3a72]/5">
        <div className="max-w-[780px] mx-auto px-8 md:px-16 py-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="font-ui text-[14px] text-ink/50">Plan your own Revolutionary War road trip.</p>
          <Link href="/muster/new" className="no-underline font-ui text-[10px] font-semibold uppercase tracking-[0.18em] bg-[#cc3322] text-cream px-6 py-3 hover:bg-[#a32818] transition-colors">
            Muster a Trip →
          </Link>
        </div>
      </div>
    </div>
  );
}
