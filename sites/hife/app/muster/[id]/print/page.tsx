import { notFound } from "next/navigation";
import { getMuster } from "@/lib/muster";

interface PageProps { params: Promise<{ id: string }> }

function fmt(d: Date) { return new Date(d).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }); }
function fmtShort(d: Date) { return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" }); }

export default async function MusterPrintPage({ params }: PageProps) {
  const { id } = await params;
  const muster = await getMuster(id);
  if (!muster) notFound();

  return (
    <div className="bg-white min-h-screen font-ui">
      <script dangerouslySetInnerHTML={{ __html: `window.addEventListener('load',function(){setTimeout(function(){window.print();},600);});` }} />
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { margin: 0.6in; size: letter; }
          .no-print { display: none !important; }
          .page-break { page-break-before: always; }
        }
      `}} />

      {/* Cover */}
      <div className="border-b-4 border-[#cc3322] pb-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <img src="/logo-horizontal.svg" alt="History is for Everyone" style={{ height: 40, width: "auto" }} />
          <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-ink/40">A Muster Road Trip Plan</span>
        </div>
        <h1 className="font-display text-[40px] text-ink tracking-[-0.03em] leading-tight mb-3">{muster.title}</h1>
        <div className="flex gap-4 text-[12px] text-ink/50 font-ui uppercase tracking-[0.1em] mb-4">
          <span>{fmtShort(muster.startDate)} – {fmtShort(muster.endDate)}</span>
          <span>·</span>
          <span>{muster.startLocation} → {muster.endLocation}</span>
          <span>·</span>
          <span>{muster.days.length} days</span>
        </div>
        {muster.summary && <p className="text-[14px] text-ink/60 leading-relaxed max-w-[540px]">{muster.summary}</p>}
      </div>

      {/* Days */}
      {muster.days.map((day, di) => (
        <div key={day.id} className={di > 0 ? "page-break" : ""}>
          <div className="border-t-2 border-ink pt-4 mb-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-ink/40">{fmt(day.date)}</p>
            <h2 className="font-display text-[24px] text-ink tracking-[-0.02em]">Day {day.dayNumber}: {day.theme}</h2>
            <p className="text-[13px] text-ink/55 mt-1 leading-relaxed">{day.narrative}</p>
          </div>
          <ol className="space-y-3 mb-8">
            {day.stops.map((stop, si) => {
              const name = stop.place?.name ?? stop.localEvent?.name ?? stop.customName ?? "Stop";
              const isEvent = stop.stopType === "EVENT";
              return (
                <li key={stop.id} className={`flex gap-4 p-3 ${isEvent ? "bg-[#1a3a72]/5 border-l-2 border-[#cc3322]" : "border-l-2 border-ink/10"}`}>
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[10px] font-bold border border-ink/20 text-ink/50">{si + 1}</span>
                  <div>
                    {isEvent && <span className="text-[9px] uppercase tracking-[0.15em] text-[#cc3322] font-semibold block mb-0.5">Living History Event</span>}
                    <p className="font-display text-[16px] text-ink tracking-[-0.01em]">{name}</p>
                    {stop.arrivalTime && <p className="text-[11px] text-ink/40">{stop.arrivalTime}{stop.durationMinutes ? ` · ${stop.durationMinutes} min` : ""}</p>}
                    {stop.whyThisStop && <p className="text-[12px] text-ink/55 mt-0.5 leading-snug">{stop.whyThisStop}</p>}
                    {(stop.place?.website || stop.localEvent?.url) && (
                      <p className="text-[11px] text-ink/40 mt-0.5">{stop.place?.website ?? stop.localEvent?.url}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      ))}

      <div className="border-t border-ink/10 pt-4 mt-8 flex justify-between text-[10px] text-ink/30 uppercase tracking-[0.1em]">
        <span>History Is For Everyone · sabrinas-town.vercel.app/muster</span>
        <span>Printed from Muster</span>
      </div>
    </div>
  );
}
