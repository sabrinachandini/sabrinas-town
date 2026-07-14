import prisma from "@/lib/prisma";
import NextLink from "next/link";
import { toggleHifePick, saveBlurb } from "./actions";

export const dynamic = "force-dynamic";

const CATEGORY_LABELS: Record<string, string> = {
  DINING: "Dining",
  LODGING: "Lodging",
  RETAIL: "Retail",
  CULTURAL: "Cultural",
  OUTDOOR: "Outdoor",
  SERVICES: "Services",
  OTHER: "Other",
};

export default async function AdminPicksPage({
  searchParams,
}: {
  searchParams: Promise<{ town?: string; filter?: string; q?: string }>;
}) {
  const { town, filter = "all", q } = await searchParams;

  const towns = await prisma.town.findMany({
    select: { id: true, slug: true, name: true, state: true },
    orderBy: { name: "asc" },
  });

  const businesses = await prisma.business.findMany({
    where: {
      ...(town ? { town: { slug: town } } : {}),
      ...(filter === "picks" ? { isHifePick: true } : filter === "no-blurb" ? { isHifePick: true, blurb: null } : {}),
      ...(q ? { name: { contains: q, mode: "insensitive" as const } } : {}),
    },
    include: { town: { select: { slug: true, name: true, state: true } } },
    orderBy: [{ isHifePick: "desc" }, { name: "asc" }],
    take: 200,
  });

  const totalPicks = await prisma.business.count({ where: { isHifePick: true } });
  const noBlurb = await prisma.business.count({ where: { isHifePick: true, blurb: null } });

  return (
    <div className="bg-[#f2ece0] min-h-screen">
      {/* Header */}
      <div className="bg-[#14100a] border-b-4 border-[#C8A24A] px-8 py-8">
        <NextLink
          href="/admin"
          className="no-underline font-ui text-[10px] uppercase tracking-[0.2em] text-[#C8A24A]/50 hover:text-[#C8A24A] transition-colors mb-4 block"
        >
          ← Admin
        </NextLink>
        <h1 className="font-display text-[#f2e6c8] text-[36px] tracking-[-0.02em]">
          HIFE Picks
        </h1>
        <p className="font-ui text-[12px] text-[#f2e6c8]/40 mt-1">
          {totalPicks} picks total
          {noBlurb > 0 && (
            <span className="text-[#cc3322]/80"> · {noBlurb} missing blurb</span>
          )}
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-8 py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6 items-end">
          {/* Town filter */}
          <form>
            <select
              name="town"
              defaultValue={town || ""}
              onChange={undefined}
              className="font-ui text-[12px] border-2 border-[#14100a]/15 bg-white/70 px-3 py-2 text-[#14100a] focus:outline-none focus:border-[#1a3a72]"
            >
              <option value="">All towns</option>
              {towns.map((t) => (
                <option key={t.id} value={t.slug}>
                  {t.name}, {t.state}
                </option>
              ))}
            </select>
            {q && <input type="hidden" name="q" value={q} />}
            {filter !== "all" && <input type="hidden" name="filter" value={filter} />}
            <button
              type="submit"
              className="ml-2 font-ui text-[10px] uppercase tracking-[0.12em] bg-[#14100a] text-[#f2e6c8] px-4 py-2 hover:bg-[#1a3a72] transition-colors"
            >
              Filter
            </button>
          </form>

          {/* Pick status tabs */}
          <div className="flex gap-1">
            {[
              { key: "all", label: "All" },
              { key: "picks", label: "★ Picks only" },
              { key: "no-blurb", label: "Missing blurb" },
            ].map(({ key, label }) => {
              const params = new URLSearchParams();
              if (key !== "all") params.set("filter", key);
              if (town) params.set("town", town);
              if (q) params.set("q", q);
              const href = `/admin/picks${params.toString() ? `?${params}` : ""}`;
              return (
                <NextLink
                  key={key}
                  href={href}
                  className={`no-underline font-ui text-[10px] uppercase tracking-[0.1em] px-3 py-2 border transition-colors ${
                    filter === key
                      ? "bg-[#1a3a72] border-[#1a3a72] text-[#f2e6c8]"
                      : "border-[#14100a]/15 text-[#14100a]/50 hover:border-[#14100a]/40"
                  }`}
                >
                  {label}
                </NextLink>
              );
            })}
          </div>

          {/* Search */}
          <form className="ml-auto">
            {town && <input type="hidden" name="town" value={town} />}
            {filter !== "all" && <input type="hidden" name="filter" value={filter} />}
            <input
              type="text"
              name="q"
              defaultValue={q || ""}
              placeholder="Search name…"
              className="font-ui text-[12px] border-2 border-[#14100a]/15 bg-white/70 px-3 py-2 text-[#14100a] w-48 focus:outline-none focus:border-[#1a3a72]"
            />
            <button
              type="submit"
              className="ml-1 font-ui text-[10px] uppercase tracking-[0.12em] border-2 border-[#14100a]/15 px-3 py-2 text-[#14100a]/60 hover:border-[#14100a]/40 transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        {/* Table */}
        {businesses.length === 0 ? (
          <p className="font-ui text-[14px] text-[#14100a]/40 py-12 text-center">
            No businesses match these filters.
          </p>
        ) : (
          <div className="space-y-2">
            {businesses.map((b) => (
              <div
                key={b.id}
                className={`border-2 transition-colors p-4 ${
                  b.isHifePick
                    ? "border-[#C8A24A]/50 bg-[#C8A24A]/5"
                    : "border-[#14100a]/8 bg-white/40"
                }`}
              >
                <div className="flex items-start gap-4 flex-wrap">
                  {/* Pick toggle */}
                  <form
                    action={toggleHifePick.bind(null, b.id, b.isHifePick)}
                    className="flex-shrink-0 pt-0.5"
                  >
                    <button
                      type="submit"
                      title={b.isHifePick ? "Remove HIFE Pick" : "Mark as HIFE Pick"}
                      className={`text-[22px] leading-none transition-opacity hover:opacity-70 ${
                        b.isHifePick ? "text-[#C8A24A]" : "text-[#14100a]/15"
                      }`}
                    >
                      ★
                    </button>
                  </form>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-display text-[18px] text-[#14100a] tracking-[-0.01em]">
                        {b.name}
                      </span>
                      <span className="font-ui text-[10px] uppercase tracking-[0.1em] px-2 py-0.5 bg-[#14100a]/6 text-[#14100a]/50">
                        {CATEGORY_LABELS[b.category] ?? b.category}
                      </span>
                      {b.priceRange && (
                        <span className="font-ui text-[11px] text-[#14100a]/40">
                          {b.priceRange}
                        </span>
                      )}
                    </div>
                    <p className="font-ui text-[11px] text-[#14100a]/40 mt-0.5">
                      {b.town.name}, {b.town.state}
                      {b.address && ` · ${b.address}`}
                    </p>

                    {/* Blurb editor (only for picks) */}
                    {b.isHifePick && (
                      <form
                        action={saveBlurb.bind(null, b.id)}
                        className="mt-3 flex gap-2 items-start"
                      >
                        <textarea
                          name="blurb"
                          defaultValue={b.blurb ?? ""}
                          placeholder="Write the ★ HIFE Pick blurb… (1–2 sentences, editorial voice)"
                          rows={2}
                          className={`font-ui text-[12px] flex-1 border px-3 py-2 resize-none focus:outline-none focus:border-[#1a3a72] leading-relaxed ${
                            !b.blurb
                              ? "border-[#cc3322]/30 bg-[#cc3322]/3"
                              : "border-[#14100a]/15 bg-white/60"
                          }`}
                        />
                        <button
                          type="submit"
                          className="font-ui text-[10px] uppercase tracking-[0.1em] bg-[#1a3a72] text-[#f2e6c8] px-3 py-2 hover:bg-[#14100a] transition-colors flex-shrink-0"
                        >
                          Save
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Status badge */}
                  <span
                    className={`font-ui text-[9px] uppercase tracking-[0.15em] px-2 py-1 flex-shrink-0 ${
                      b.status === "ACTIVE"
                        ? "bg-[#2a5c45]/10 text-[#2a5c45]"
                        : "bg-[#cc3322]/10 text-[#cc3322]"
                    }`}
                  >
                    {b.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="font-ui text-[11px] text-[#14100a]/30 mt-6">
          Showing {businesses.length} businesses.
          {businesses.length === 200 && " Results capped at 200 — use filters to narrow."}
        </p>
      </div>
    </div>
  );
}
