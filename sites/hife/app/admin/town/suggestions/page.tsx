import { redirect } from "next/navigation";
import NextLink from "next/link";
import { auth } from "@/lib/auth";
import { resolveScope } from "@/lib/scope";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

const STATUS_COLOR: Record<string, string> = {
  PENDING: "#C8A24A",
  ACCEPTED: "#2a5c45",
  REJECTED: "#cc3322",
};

export default async function SuggestionsPage() {
  const session = await auth();
  const scope = await resolveScope(session);
  if (!scope || scope.type !== "town") redirect("/login");

  const suggestions = await prisma.suggestion.findMany({
    where: { partnerAccountId: scope.partnerAccountId },
    include: { submittedBy: { select: { name: true, email: true } } },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return (
    <div>
      <div className="bg-[#1a3a72] px-8 py-8 border-b-4 border-white/20">
        <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-white/40 mb-1">
          Your Town
        </p>
        <h1 className="font-display text-[#f2e6c8] text-[36px] tracking-[-0.03em]">
          Suggestions
        </h1>
        <p className="font-ui text-[13px] text-white/40 mt-1">
          Content corrections and additions submitted to HIFE staff.
        </p>
      </div>

      <div className="max-w-[900px] mx-auto px-8 py-8">
        <div className="flex justify-end mb-6">
          <NextLink
            href="/admin/town/suggestions/new"
            className="font-ui text-[10px] uppercase tracking-[0.15em] px-4 py-2.5 bg-[#1a3a72] text-white hover:bg-[#1a3a72]/80 transition-colors no-underline"
          >
            + New Suggestion
          </NextLink>
        </div>

        {suggestions.length === 0 && (
          <p className="font-ui text-[13px] text-[#14100a]/40">
            No suggestions yet. Submit one to propose a content change.
          </p>
        )}

        <div className="space-y-3">
          {suggestions.map((s) => (
            <div
              key={s.id}
              className="border-2 border-[#14100a]/10 bg-white/60 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-ui text-[11px] font-semibold text-[#14100a]">
                      {s.entityType}
                    </span>
                    {s.entityId && (
                      <span className="font-mono text-[10px] text-[#14100a]/30 truncate">
                        {s.entityId}
                      </span>
                    )}
                    {!s.entityId && (
                      <span className="font-ui text-[9px] text-[#C8A24A] border border-[#C8A24A]/30 px-1.5 py-0.5">
                        new entity
                      </span>
                    )}
                  </div>
                  {s.note && (
                    <p className="font-ui text-[11px] text-[#14100a]/60 mt-2 border-l-2 border-[#14100a]/10 pl-3">
                      {s.note}
                    </p>
                  )}
                  <div className="flex gap-3 mt-2 flex-wrap">
                    <span className="font-ui text-[10px] text-[#14100a]/40">
                      by {s.submittedBy.name ?? s.submittedBy.email}
                    </span>
                    <span className="font-ui text-[10px] text-[#14100a]/40">
                      {new Date(s.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <span
                  className="font-ui text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 border shrink-0"
                  style={{
                    color: STATUS_COLOR[s.status] ?? "#14100a",
                    borderColor: STATUS_COLOR[s.status] ?? "#14100a",
                  }}
                >
                  {s.status}
                </span>
              </div>
              {s.reviewNote && (
                <div className="mt-3 pt-3 border-t border-[#14100a]/5">
                  <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-[#14100a]/30 mb-1">
                    Staff note
                  </p>
                  <p className="font-ui text-[11px] text-[#14100a]/60">{s.reviewNote}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
