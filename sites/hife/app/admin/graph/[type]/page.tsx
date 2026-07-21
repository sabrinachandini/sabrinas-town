import prisma from "@/lib/prisma";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import type { EntityType } from "@prisma/client";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ type: string }> };

async function getEntities(type: EntityType, search: string) {
  const q = search ? { contains: search, mode: "insensitive" as const } : undefined;

  switch (type) {
    case "TOWN":
      return (await prisma.town.findMany({
        where: q ? { name: q } : undefined,
        orderBy: { compositeScore: "desc" },
        take: 100,
        select: { id: true, name: true, state: true, compositeScore: true, updatedAt: true },
      })).map((r) => ({ id: r.id, label: r.name, meta: `${r.state} · score ${r.compositeScore.toFixed(0)}`, updatedAt: r.updatedAt }));

    case "PLACE":
      return (await prisma.place.findMany({
        where: q ? { name: q } : undefined,
        include: { town: { select: { name: true } } },
        orderBy: { updatedAt: "desc" },
        take: 100,
      })).map((r) => ({ id: r.id, label: r.name, meta: `${r.placeType} · ${r.town.name}`, updatedAt: r.updatedAt, needsReview: r.needsReview }));

    case "PERSON":
      return (await prisma.person.findMany({
        where: q ? { name: q } : undefined,
        orderBy: { updatedAt: "desc" },
        take: 100,
      })).map((r) => ({ id: r.id, label: r.name, meta: r.roles.join(", "), updatedAt: r.updatedAt, needsReview: r.needsReview }));

    case "EVENT":
      return (await prisma.event.findMany({
        where: q ? { name: q } : undefined,
        include: { town: { select: { name: true } } },
        orderBy: { updatedAt: "desc" },
        take: 100,
      })).map((r) => ({ id: r.id, label: r.name, meta: r.town.name, updatedAt: r.updatedAt, needsReview: r.needsReview }));

    case "SOURCE":
      return (await prisma.source.findMany({
        where: q ? { title: q } : undefined,
        orderBy: { updatedAt: "desc" },
        take: 100,
      })).map((r) => ({ id: r.id, label: r.title, meta: `${r.type} · ${r.credibilityTier}`, updatedAt: r.updatedAt }));

    case "STORY":
      return (await prisma.story.findMany({
        where: q ? { title: q } : undefined,
        include: { town: { select: { name: true } } },
        orderBy: { updatedAt: "desc" },
        take: 100,
      })).map((r) => ({ id: r.id, label: r.title, meta: `${r.storyType} · ${r.town.name}`, updatedAt: r.updatedAt, needsReview: r.needsReview }));

    case "ROUTE":
      return (await prisma.route.findMany({
        where: q ? { name: q } : undefined,
        orderBy: { updatedAt: "desc" },
        take: 100,
      })).map((r) => ({ id: r.id, label: r.name, meta: r.totalMiles ? `${r.totalMiles} mi` : "", updatedAt: r.updatedAt }));

    case "BUSINESS":
      return (await prisma.business.findMany({
        where: q ? { name: q } : undefined,
        include: { town: { select: { name: true } } },
        orderBy: { updatedAt: "desc" },
        take: 100,
      })).map((r) => ({ id: r.id, label: r.name, meta: `${r.category} · ${r.town.name}`, updatedAt: r.updatedAt }));

    default:
      return [];
  }
}

async function getEntityLinks(type: EntityType, entityId: string) {
  return prisma.entityLink.findMany({
    where: {
      OR: [
        { fromId: entityId, fromType: type },
        { toId: entityId, toType: type },
      ],
    },
    orderBy: { status: "asc" },
    take: 20,
  });
}

const VALID_TYPES: EntityType[] = [
  "TOWN", "PLACE", "PERSON", "EVENT", "SOURCE", "STORY", "ORGANIZATION", "ROUTE", "BUSINESS",
];

export default async function GraphEntityListPage({
  params,
  searchParams,
}: Props & { searchParams: Promise<{ q?: string; entity?: string }> }) {
  const { type } = await params;
  const { q = "", entity } = await searchParams;

  if (!VALID_TYPES.includes(type as EntityType)) notFound();

  const entityType = type as EntityType;
  const entities = await getEntities(entityType, q);
  const links = entity ? await getEntityLinks(entityType, entity) : [];

  return (
    <div>
      <div className="bg-[#14100a] px-8 py-6 border-b-4 border-[#C8A24A]">
        <div className="flex items-center gap-3 mb-2">
          <NextLink href="/admin/graph"
            className="font-ui text-[10px] text-[#C8A24A]/50 hover:text-[#C8A24A] no-underline">
            ← Graph
          </NextLink>
        </div>
        <h1 className="font-display text-[#f2e6c8] text-[32px] tracking-[-0.03em]">
          {entityType}
        </h1>
        <p className="font-ui text-[13px] text-[#f2e6c8]/40 mt-1">{entities.length} records</p>
      </div>

      <div className="max-w-[1000px] mx-auto px-8 py-8 flex gap-8">
        {/* Entity list */}
        <div className="flex-1 min-w-0">
          <form className="mb-4">
            <input type="hidden" name="type" value={type} />
            <input
              name="q"
              defaultValue={q}
              placeholder={`Search ${entityType.toLowerCase()}s…`}
              className="w-full font-ui text-[12px] border-2 border-[#14100a]/10 bg-white/60 px-4 py-2 focus:outline-none focus:border-[#1a3a72]/30"
            />
          </form>

          <div className="space-y-1">
            {entities.map((e) => (
              <NextLink
                key={e.id}
                href={`/admin/graph/${type}?entity=${e.id}${q ? `&q=${q}` : ""}`}
                className={`block py-2.5 px-3 border-b border-[#14100a]/5 hover:bg-white/60 transition-colors no-underline ${entity === e.id ? "bg-white/80 border-l-2 border-l-[#1a3a72]" : ""}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-ui text-[12px] text-[#14100a] font-medium truncate">{e.label}</p>
                    {e.meta && <p className="font-ui text-[10px] text-[#14100a]/40 mt-0.5 truncate">{e.meta}</p>}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {Boolean("needsReview" in e && (e as { needsReview?: boolean }).needsReview) && (
                      <span className="font-ui text-[9px] text-[#cc3322] border border-[#cc3322]/30 px-1.5 py-0.5">
                        review
                      </span>
                    )}
                    <span className="font-ui text-[10px] text-[#14100a]/30 tabular-nums">
                      {new Date(e.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </NextLink>
            ))}
          </div>
        </div>

        {/* EntityLink panel */}
        {entity && (
          <div className="w-[280px] shrink-0">
            <h3 className="font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/40 mb-3">
              Relationships
            </h3>
            {links.length === 0 && (
              <p className="font-ui text-[11px] text-[#14100a]/30">No entity links yet.</p>
            )}
            <div className="space-y-2">
              {links.map((l) => (
                <div key={l.id}
                  className="border border-[#14100a]/10 bg-white/60 p-3 text-[11px]">
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="font-ui text-[10px] text-[#14100a]/40">{l.fromType}</span>
                    <span className="text-[#14100a]/30">→</span>
                    <span className="font-ui text-[10px] font-semibold text-[#1a3a72]">{l.linkType}</span>
                    <span className="text-[#14100a]/30">→</span>
                    <span className="font-ui text-[10px] text-[#14100a]/40">{l.toType}</span>
                  </div>
                  {l.label && (
                    <p className="font-ui text-[10px] text-[#2a5c45] mt-1">&quot;{l.label}&quot;</p>
                  )}
                  <span className={`font-ui text-[9px] mt-1 inline-block ${l.status === "PUBLISHED" ? "text-[#2a5c45]" : "text-[#C8A24A]"}`}>
                    {l.status}
                  </span>
                </div>
              ))}
            </div>
            <NextLink href="/admin/review"
              className="font-ui text-[10px] text-[#1a3a72] hover:underline no-underline mt-4 block">
              + Review queue to add links
            </NextLink>
          </div>
        )}
      </div>
    </div>
  );
}
