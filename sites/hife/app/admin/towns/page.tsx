import prisma from "@/lib/prisma";
import NextLink from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminTownsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; sort?: string }>;
}) {
  const { q, sort = "score" } = await searchParams;

  const towns = await prisma.town.findMany({
    where: q
      ? { OR: [{ name: { contains: q, mode: "insensitive" } }, { state: { contains: q, mode: "insensitive" } }] }
      : undefined,
    select: {
      id: true,
      slug: true,
      name: true,
      state: true,
      compositeScore: true,
      heroSummary40: true,
      imageUrl: true,
      updatedAt: true,
      _count: {
        select: {
          events: true,
          places: true,
          townPeople: true,
          businesses: true,
          changeLogEntries: true,
        },
      },
    },
    orderBy:
      sort === "name"
        ? { name: "asc" }
        : sort === "updated"
        ? { updatedAt: "desc" }
        : { compositeScore: "desc" },
  });

  return (
    <div className="bg-[#f2ece0] min-h-screen">
      <div className="bg-[#1a3a72] border-b-4 border-[#cc3322] px-8 py-8">
        <NextLink
          href="/admin"
          className="no-underline font-ui text-[10px] uppercase tracking-[0.2em] text-[#f2e6c8]/40 hover:text-[#f2e6c8] transition-colors mb-4 block"
        >
          ← Admin
        </NextLink>
        <h1 className="font-display text-[#f2e6c8] text-[36px] tracking-[-0.02em]">
          Towns
        </h1>
        <p className="font-ui text-[12px] text-[#f2e6c8]/40 mt-1">
          {towns.length} towns
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-8 py-8">
        {/* Controls */}
        <div className="flex gap-3 flex-wrap items-center mb-6">
          <form className="flex gap-1">
            {sort !== "score" && <input type="hidden" name="sort" value={sort} />}
            <input
              type="text"
              name="q"
              defaultValue={q || ""}
              placeholder="Search town or state…"
              className="font-ui text-[12px] border-2 border-[#14100a]/15 bg-white/70 px-3 py-2 text-[#14100a] w-52 focus:outline-none focus:border-[#1a3a72]"
            />
            <button
              type="submit"
              className="font-ui text-[10px] uppercase tracking-[0.12em] border-2 border-[#14100a]/15 px-3 py-2 text-[#14100a]/60 hover:border-[#14100a]/40 transition-colors"
            >
              Search
            </button>
          </form>

          <div className="flex gap-1 ml-auto">
            {[
              { key: "score", label: "Score ↓" },
              { key: "name", label: "Name A–Z" },
              { key: "updated", label: "Recently updated" },
            ].map(({ key, label }) => {
              const params = new URLSearchParams();
              if (key !== "score") params.set("sort", key);
              if (q) params.set("q", q);
              return (
                <NextLink
                  key={key}
                  href={`/admin/towns${params.toString() ? `?${params}` : ""}`}
                  className={`no-underline font-ui text-[10px] uppercase tracking-[0.1em] px-3 py-2 border transition-colors ${
                    sort === key
                      ? "bg-[#1a3a72] border-[#1a3a72] text-[#f2e6c8]"
                      : "border-[#14100a]/15 text-[#14100a]/50 hover:border-[#14100a]/40"
                  }`}
                >
                  {label}
                </NextLink>
              );
            })}
          </div>
        </div>

        {/* Town rows */}
        <div className="space-y-2">
          {towns.map((t) => {
            const score = Math.round(t.compositeScore);
            const scoreColor =
              score >= 80 ? "#2a5c45" : score >= 60 ? "#1a3a72" : score >= 40 ? "#C8A24A" : "#cc3322";
            return (
              <div
                key={t.id}
                className="border-2 border-[#14100a]/8 bg-white/50 hover:bg-white/80 transition-colors p-4"
              >
                <div className="flex items-center gap-4 flex-wrap">
                  {/* Score pill */}
                  <div
                    className="font-display text-[20px] leading-none w-14 text-center flex-shrink-0"
                    style={{ color: scoreColor }}
                  >
                    {score || "—"}
                  </div>

                  {/* Main info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-display text-[18px] text-[#14100a] tracking-[-0.01em]">
                        {t.name}
                      </span>
                      <span className="font-ui text-[11px] text-[#14100a]/40">{t.state}</span>
                    </div>
                    <p className="font-ui text-[11px] text-[#14100a]/50 mt-0.5 truncate">
                      {t.heroSummary40}
                    </p>
                    <div className="flex gap-3 mt-1 flex-wrap">
                      {[
                        { label: "events", count: t._count.events },
                        { label: "places", count: t._count.places },
                        { label: "people", count: t._count.townPeople },
                        { label: "businesses", count: t._count.businesses },
                        { label: "changelog", count: t._count.changeLogEntries },
                      ].map(({ label, count }) => (
                        <span key={label} className="font-ui text-[10px] text-[#14100a]/35">
                          {count} {label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 flex-shrink-0">
                    <NextLink
                      href={`/towns/${t.slug}`}
                      className="no-underline font-ui text-[10px] uppercase tracking-[0.1em] border border-[#14100a]/15 px-3 py-1.5 text-[#14100a]/50 hover:border-[#14100a]/40 transition-colors"
                      target="_blank"
                    >
                      View ↗
                    </NextLink>
                    <NextLink
                      href={`/admin/picks?town=${t.slug}`}
                      className="no-underline font-ui text-[10px] uppercase tracking-[0.1em] border border-[#C8A24A]/40 px-3 py-1.5 text-[#C8A24A] hover:bg-[#C8A24A]/10 transition-colors"
                    >
                      ★ Picks
                    </NextLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {towns.length === 0 && (
          <p className="font-ui text-[14px] text-[#14100a]/40 py-12 text-center">
            No towns match that search.
          </p>
        )}
      </div>
    </div>
  );
}
