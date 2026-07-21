import { redirect } from "next/navigation";
import NextLink from "next/link";
import { auth } from "@/lib/auth";
import { resolveScope } from "@/lib/scope";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

const STATUS_COLOR: Record<string, string> = {
  DRAFT: "#14100a",
  SUBMITTED: "#1a3a72",
  IN_REVIEW: "#C8A24A",
  APPROVED: "#2a5c45",
  REJECTED: "#cc3322",
};

export default async function ProposalsPage() {
  const session = await auth();
  const scope = await resolveScope(session);
  if (!scope || scope.type !== "town") redirect("/login");

  const proposals = await prisma.proposal.findMany({
    where: { partnerAccountId: scope.partnerAccountId },
    include: {
      agreement: { select: { title: true } },
      submittedBy: { select: { name: true, email: true } },
    },
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
          Proposals
        </h1>
        <p className="font-ui text-[13px] text-white/40 mt-1">
          Partnership proposals linked to your agreement.
        </p>
      </div>

      <div className="max-w-[900px] mx-auto px-8 py-8">
        <div className="flex justify-end mb-6">
          <NextLink
            href="/admin/town/proposals/new"
            className="font-ui text-[10px] uppercase tracking-[0.15em] px-4 py-2.5 bg-[#1a3a72] text-white hover:bg-[#1a3a72]/80 transition-colors no-underline"
          >
            + New Proposal
          </NextLink>
        </div>

        {proposals.length === 0 && (
          <p className="font-ui text-[13px] text-[#14100a]/40">No proposals yet.</p>
        )}

        <div className="space-y-3">
          {proposals.map((p) => (
            <div key={p.id} className="border-2 border-[#14100a]/10 bg-white/60 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-ui text-[12px] font-semibold text-[#14100a]">{p.title}</p>
                  <p className="font-ui text-[11px] text-[#14100a]/60 mt-1 line-clamp-2">{p.summary}</p>
                  <div className="flex gap-3 mt-2 flex-wrap">
                    {p.agreement && (
                      <span className="font-ui text-[10px] text-[#14100a]/40">
                        agreement: {p.agreement.title}
                      </span>
                    )}
                    <span className="font-ui text-[10px] text-[#14100a]/40">
                      by {p.submittedBy.name ?? p.submittedBy.email}
                    </span>
                    <span className="font-ui text-[10px] text-[#14100a]/40">
                      {new Date(p.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <span
                  className="font-ui text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 border shrink-0"
                  style={{
                    color: STATUS_COLOR[p.status] ?? "#14100a",
                    borderColor: STATUS_COLOR[p.status] ?? "#14100a",
                  }}
                >
                  {p.status}
                </span>
              </div>
              {p.reviewNote && (
                <div className="mt-3 pt-3 border-t border-[#14100a]/5">
                  <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-[#14100a]/30 mb-1">
                    Staff note
                  </p>
                  <p className="font-ui text-[11px] text-[#14100a]/60">{p.reviewNote}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
