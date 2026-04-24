import { notFound } from "next/navigation";
import Link from "next/link";
import { getMuster } from "@/lib/muster";
import { MusterBuilder } from "./MusterBuilder";

interface PageProps {
  params: Promise<{ id: string }>;
}

function formatDateShort(date: Date) {
  return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default async function MusterPage({ params }: PageProps) {
  const { id } = await params;
  const muster = await getMuster(id);
  if (!muster) notFound();

  const totalStops = muster.days.reduce((sum, d) => sum + d.stops.length, 0);

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <div className="bg-[#1a3a72] border-b-4 border-[#cc3322] relative overflow-hidden">
        <div aria-hidden className="absolute right-[-0.02em] top-[-0.1em] font-display leading-none text-white/[0.04] pointer-events-none select-none" style={{ fontSize: "clamp(5rem,14vw,14rem)" }}>
          MUSTER
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-8 pb-10">
          <p className="font-ui text-[9px] uppercase tracking-[0.24em] text-cream/35 mb-2">A Muster from History Is For Everyone</p>
          <h1 className="font-display text-cream leading-[0.9] tracking-[-0.03em] mb-3" style={{ fontSize: "clamp(28px,5vw,56px)" }}>
            {muster.title}
          </h1>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="font-ui text-[10px] uppercase tracking-[0.12em] text-cream/50">{formatDateShort(muster.startDate)} – {formatDateShort(muster.endDate)}</span>
            <span className="text-cream/20">·</span>
            <span className="font-ui text-[10px] uppercase tracking-[0.12em] text-cream/50">{muster.startLocation} → {muster.endLocation}</span>
            <span className="text-cream/20">·</span>
            <span className="font-ui text-[10px] uppercase tracking-[0.12em] text-cream/50">{muster.days.length} days · {totalStops} stops</span>
          </div>
          {muster.summary && (
            <p className="font-editorial italic font-light text-cream/60 max-w-[560px] leading-[1.6]" style={{ fontSize: "clamp(15px,1.8vw,19px)" }}>
              {muster.summary}
            </p>
          )}
        </div>
      </div>

      {/* Interactive builder */}
      <MusterBuilder muster={muster} />

      {/* Footer */}
      <div className="border-t border-ink/10 max-w-[1400px] mx-auto px-6 md:px-10 py-8 flex flex-wrap gap-4">
        <Link href="/muster/new" className="no-underline font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a3a72] border-2 border-[#1a3a72]/20 px-6 py-3 hover:border-[#1a3a72] transition-colors">
          Muster another trip →
        </Link>
        <Link href="/towns" className="no-underline font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/50 border border-ink/20 px-6 py-3 hover:border-ink/50 hover:text-ink transition-colors">
          Explore all towns →
        </Link>
      </div>
    </div>
  );
}
