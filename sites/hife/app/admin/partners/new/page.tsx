import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { resolveScope, requireNetworkScope } from "@/lib/scope";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

async function createAccount(formData: FormData) {
  "use server";
  const session = await auth();
  const scope = await resolveScope(session);
  requireNetworkScope(scope);

  const townId = formData.get("townId") as string;
  const name = formData.get("name") as string;
  const contactEmail = (formData.get("contactEmail") as string | null) || undefined;

  const account = await prisma.partnerAccount.create({
    data: { townId, name, contactEmail, status: "PENDING" },
  });

  redirect(`/admin/partners/${account.id}`);
}

export default async function NewPartnerPage() {
  const session = await auth();
  const scope = await resolveScope(session);
  requireNetworkScope(scope);

  // Only towns without an existing partner account
  const towns = await prisma.town.findMany({
    where: { partnerAccount: null },
    orderBy: { name: "asc" },
    select: { id: true, name: true, state: true },
  });

  return (
    <div>
      <div className="bg-[#14100a] px-8 py-8 border-b-4 border-[#C8A24A]">
        <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-[#C8A24A]/50 mb-1">Mission Control</p>
        <h1 className="font-display text-[#f2e6c8] text-[36px] tracking-[-0.03em]">New Partner Account</h1>
      </div>

      <div className="max-w-[600px] mx-auto px-8 py-10">
        <form action={createAccount} className="space-y-6">
          <div>
            <label className="block font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/50 mb-2">
              Town *
            </label>
            <select
              name="townId"
              required
              className="w-full font-ui text-[12px] border-2 border-[#14100a]/10 bg-white/60 px-4 py-2.5 focus:outline-none focus:border-[#1a3a72]/40"
            >
              <option value="">— select town —</option>
              {towns.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}, {t.state}
                </option>
              ))}
            </select>
            {towns.length === 0 && (
              <p className="font-ui text-[11px] text-[#cc3322] mt-1">
                All towns already have partner accounts.
              </p>
            )}
          </div>

          <div>
            <label className="block font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/50 mb-2">
              Account Name *
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="e.g. Hudson Valley Tourism Board"
              className="w-full font-ui text-[12px] border-2 border-[#14100a]/10 bg-white/60 px-4 py-2.5 focus:outline-none focus:border-[#1a3a72]/40"
            />
          </div>

          <div>
            <label className="block font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/50 mb-2">
              Contact Email
            </label>
            <input
              name="contactEmail"
              type="email"
              placeholder="partner@example.com"
              className="w-full font-ui text-[12px] border-2 border-[#14100a]/10 bg-white/60 px-4 py-2.5 focus:outline-none focus:border-[#1a3a72]/40"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="font-ui text-[10px] uppercase tracking-[0.15em] px-5 py-2.5 bg-[#14100a] text-white hover:bg-[#14100a]/80 transition-colors"
            >
              Create Account
            </button>
            <a
              href="/admin/partners"
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
