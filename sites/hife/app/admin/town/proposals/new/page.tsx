import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { resolveScope } from "@/lib/scope";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

async function submitProposal(formData: FormData) {
  "use server";
  const session = await auth();
  const scope = await resolveScope(session);
  if (!scope || scope.type !== "town") throw new Error("unauthorized");
  if (!session?.user?.id) throw new Error("no user");

  const title = formData.get("title") as string;
  const summary = formData.get("summary") as string;
  const agreementId = (formData.get("agreementId") as string | null) || null;

  if (!title?.trim() || !summary?.trim()) throw new Error("title and summary required");

  await prisma.proposal.create({
    data: {
      partnerAccountId: scope.partnerAccountId,
      submittedById: session.user.id,
      title: title.trim(),
      summary: summary.trim(),
      ...(agreementId ? { agreementId } : {}),
      status: "DRAFT",
    },
  });

  redirect("/admin/town/proposals");
}

export default async function NewProposalPage() {
  const session = await auth();
  const scope = await resolveScope(session);
  if (!scope || scope.type !== "town") redirect("/login");

  const agreements = await prisma.agreement.findMany({
    where: { partnerAccountId: scope.partnerAccountId, status: "ACTIVE" },
    select: { id: true, title: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="bg-[#1a3a72] px-8 py-8 border-b-4 border-white/20">
        <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-white/40 mb-1">
          Your Town
        </p>
        <h1 className="font-display text-[#f2e6c8] text-[36px] tracking-[-0.03em]">
          New Proposal
        </h1>
        <p className="font-ui text-[13px] text-white/40 mt-1">
          Draft a partnership proposal. Saved as Draft — submit when ready.
        </p>
      </div>

      <div className="max-w-[700px] mx-auto px-8 py-10">
        <form action={submitProposal} className="space-y-6">
          <div>
            <label className="block font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/50 mb-2">
              Title *
            </label>
            <input
              name="title"
              type="text"
              required
              placeholder="e.g. Spring Trail Map Sponsorship 2026"
              className="w-full font-ui text-[12px] border-2 border-[#14100a]/10 bg-white/60 px-4 py-2.5 focus:outline-none focus:border-[#1a3a72]/40"
            />
          </div>

          {agreements.length > 0 && (
            <div>
              <label className="block font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/50 mb-2">
                Agreement <span className="normal-case tracking-normal text-[#14100a]/30">(optional)</span>
              </label>
              <select
                name="agreementId"
                className="w-full font-ui text-[12px] border-2 border-[#14100a]/10 bg-white/60 px-4 py-2.5 focus:outline-none focus:border-[#1a3a72]/40"
              >
                <option value="">— none —</option>
                {agreements.map((a) => (
                  <option key={a.id} value={a.id}>{a.title}</option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/50 mb-2">
              Summary *
            </label>
            <textarea
              name="summary"
              rows={6}
              required
              placeholder="Describe the proposal, its goals, and what you're asking for…"
              className="w-full font-ui text-[12px] border-2 border-[#14100a]/10 bg-white/60 px-4 py-2.5 focus:outline-none focus:border-[#1a3a72]/40 resize-none"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="font-ui text-[10px] uppercase tracking-[0.15em] px-5 py-2.5 bg-[#1a3a72] text-white hover:bg-[#1a3a72]/80 transition-colors"
            >
              Save as Draft
            </button>
            <a
              href="/admin/town/proposals"
              className="font-ui text-[10px] uppercase tracking-[0.15em] px-5 py-2.5 border-2 border-[#14100a]/20 text-[#14100a]/50 hover:border-[#14100a]/40 transition-colors"
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
