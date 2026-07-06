import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getMuster } from "@/lib/muster";
import { auth } from "@/lib/auth";
import { claimMuster } from "@/app/muster/actions";
import { MusterBuilder } from "./MusterBuilder";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const muster = await getMuster(id);
  if (!muster) return {};
  const placeNames = muster.days
    .flatMap((d) => d.stops.map((s) => s.place?.name))
    .filter(Boolean)
    .slice(0, 3)
    .join(", ");
  return {
    title: muster.title || "My Muster Road Trip",
    description: placeNames
      ? `A Revolutionary War road trip including ${placeNames} — planned with History Is For Everyone.`
      : "A Revolutionary War road trip planned with History Is For Everyone.",
  };
}

function formatDateShort(date: Date) {
  return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default async function MusterPage({ params }: PageProps) {
  const { id } = await params;
  const [muster, session] = await Promise.all([getMuster(id), auth()]);
  if (!muster) notFound();

  const isAnonymousMuster = muster.userId === null;
  const userIsSignedIn = !!session?.user?.id;
  const showClaimBanner = isAnonymousMuster && userIsSignedIn;
  const showSignInBanner = isAnonymousMuster && !userIsSignedIn;

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

      {/* Save CTA — signed in, unclaimed muster */}
      {showClaimBanner && (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <form action={claimMuster.bind(null, muster.id) as any} className="bg-[#1a3a72]/[0.06] border-b border-[#1a3a72]/10 px-6 md:px-10 py-3 flex items-center gap-4 flex-wrap">
          <p className="font-ui text-[12px] text-ink/60 flex-1">
            This muster isn&apos;t saved to your account yet.
          </p>
          <button
            type="submit"
            className="font-ui text-[10px] font-semibold uppercase tracking-[0.14em] bg-[#1a3a72] text-cream px-5 py-2 hover:bg-[#14285a] transition-colors flex-shrink-0"
          >
            Save to My Musters →
          </button>
        </form>
      )}

      {/* Save CTA — not signed in */}
      {showSignInBanner && (
        <div className="bg-[#1a3a72]/[0.06] border-b border-[#1a3a72]/10 px-6 md:px-10 py-3 flex items-center gap-4 flex-wrap">
          <p className="font-ui text-[12px] text-ink/60 flex-1">
            Sign in to save this muster and access it later.
          </p>
          <Link
            href={`/login?next=/muster/${muster.id}`}
            className="no-underline font-ui text-[10px] font-semibold uppercase tracking-[0.14em] bg-[#1a3a72] text-cream px-5 py-2 hover:bg-[#14285a] transition-colors flex-shrink-0"
          >
            Sign in to save →
          </Link>
        </div>
      )}

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
