import { auth } from "@/lib/auth";
import { getUserMusters } from "@/lib/muster";
import Link from "next/link";
import { redirect } from "next/navigation";

function fmtShort(d: Date) { return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" }); }

export default async function MyMustersPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login?from=/my-musters");

  const musters = await getUserMusters(session.user.id);

  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-[#1a3a72] border-b-4 border-[#cc3322] px-8 md:px-16 py-10">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-ui text-[10px] uppercase tracking-[0.24em] text-cream/40 mb-1">History Is For Everyone</p>
          <h1 className="font-display text-cream text-[clamp(28px,5vw,52px)] leading-none tracking-[-0.02em]">My Musters</h1>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-12">
        {musters.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-display text-[60px] text-ink/5 leading-none mb-4">—</p>
            <p className="font-editorial text-[20px] text-ink/40 mb-6">No musters yet.</p>
            <Link href="/muster/new" className="no-underline font-ui text-[11px] font-semibold uppercase tracking-[0.2em] bg-[#cc3322] text-cream px-8 py-4 hover:bg-[#a32818] transition-colors">
              Muster your first trip →
            </Link>
          </div>
        ) : (
          <>
            <div className="border-t-[3px] border-ink pt-5 mb-8 flex items-baseline justify-between">
              <p className="font-ui text-[11px] font-semibold tracking-[0.24em] uppercase text-[#cc3322]">
                {musters.length} muster{musters.length !== 1 ? "s" : ""}
              </p>
              <Link href="/muster/new" className="no-underline font-ui text-[10px] font-semibold uppercase tracking-[0.18em] bg-[#1a3a72] text-cream px-5 py-2.5 hover:bg-[#0e1428] transition-colors">
                + New muster
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {musters.map((m) => (
                <Link key={m.id} href={`/muster/${m.id}`} className="no-underline group border border-ink/10 bg-white/50 hover:border-[#1a3a72]/30 transition-colors p-5">
                  <p className="font-ui text-[9px] uppercase tracking-[0.18em] text-ink/35 mb-1">
                    {fmtShort(m.startDate)} – {fmtShort(m.endDate)} · {m.startLocation}
                  </p>
                  <h2 className="font-display text-[20px] text-ink tracking-[-0.01em] group-hover:text-[#1a3a72] transition-colors leading-tight mb-2">{m.title}</h2>
                  {m.summary && <p className="font-ui text-[14px] text-ink/50 leading-snug line-clamp-2">{m.summary}</p>}
                  <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-ink/25 mt-3">
                    {new Date(m.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </p>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
