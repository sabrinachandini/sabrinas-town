import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import { auth } from "@/lib/auth";
import { resolveScope, requireNetworkScope } from "@/lib/scope";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

async function createAgreement(accountId: string, formData: FormData) {
  "use server";
  const session = await auth();
  const scope = await resolveScope(session);
  requireNetworkScope(scope);

  const title = formData.get("title") as string;
  const terms = formData.get("terms") as string;
  const startsAt = formData.get("startsAt") as string | null;
  const expiresAt = formData.get("expiresAt") as string | null;

  if (!title?.trim() || !terms?.trim()) throw new Error("title and terms required");

  await prisma.agreement.create({
    data: {
      partnerAccountId: accountId,
      title: title.trim(),
      terms: terms.trim(),
      status: "DRAFT",
      startsAt: startsAt ? new Date(startsAt) : null,
      expiresAt: expiresAt ? new Date(expiresAt) : null,
    },
  });

  redirect(`/admin/partners/${accountId}`);
}

export default async function NewAgreementPage({ params }: Props) {
  const { id } = await params;

  const session = await auth();
  const scope = await resolveScope(session);
  requireNetworkScope(scope);

  const account = await prisma.partnerAccount.findUnique({
    where: { id },
    select: { id: true, name: true },
  });
  if (!account) notFound();

  const boundAction = createAgreement.bind(null, id);

  return (
    <div>
      <div className="bg-[#14100a] px-8 py-8 border-b-4 border-[#C8A24A]">
        <div className="flex items-center gap-3 mb-2">
          <a href={`/admin/partners/${id}`}
            className="font-ui text-[10px] text-[#C8A24A]/50 hover:text-[#C8A24A]">
            ← {account.name}
          </a>
        </div>
        <h1 className="font-display text-[#f2e6c8] text-[32px] tracking-[-0.03em]">New Agreement</h1>
      </div>

      <div className="max-w-[700px] mx-auto px-8 py-10">
        <form action={boundAction} className="space-y-6">
          <div>
            <label className="block font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/50 mb-2">
              Title *
            </label>
            <input
              name="title"
              type="text"
              required
              placeholder="e.g. Annual Partnership Agreement 2026"
              className="w-full font-ui text-[12px] border-2 border-[#14100a]/10 bg-white/60 px-4 py-2.5 focus:outline-none focus:border-[#1a3a72]/40"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/50 mb-2">
                Starts
              </label>
              <input
                name="startsAt"
                type="date"
                className="w-full font-ui text-[12px] border-2 border-[#14100a]/10 bg-white/60 px-4 py-2.5 focus:outline-none focus:border-[#1a3a72]/40"
              />
            </div>
            <div>
              <label className="block font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/50 mb-2">
                Expires
              </label>
              <input
                name="expiresAt"
                type="date"
                className="w-full font-ui text-[12px] border-2 border-[#14100a]/10 bg-white/60 px-4 py-2.5 focus:outline-none focus:border-[#1a3a72]/40"
              />
            </div>
          </div>

          <div>
            <label className="block font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/50 mb-2">
              Terms * <span className="normal-case tracking-normal text-[#14100a]/30">(plain text)</span>
            </label>
            <textarea
              name="terms"
              rows={10}
              required
              placeholder="Describe the terms of this agreement…"
              className="w-full font-ui text-[12px] border-2 border-[#14100a]/10 bg-white/60 px-4 py-2.5 focus:outline-none focus:border-[#1a3a72]/40 resize-none"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="font-ui text-[10px] uppercase tracking-[0.15em] px-5 py-2.5 bg-[#14100a] text-white hover:bg-[#14100a]/80 transition-colors"
            >
              Save as Draft
            </button>
            <a
              href={`/admin/partners/${id}`}
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
