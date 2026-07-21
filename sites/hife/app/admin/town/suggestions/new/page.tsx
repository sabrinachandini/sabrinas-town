import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { resolveScope } from "@/lib/scope";
import prisma from "@/lib/prisma";
import type { SuggestionEntityType } from "@prisma/client";
import type { Prisma } from "@prisma/client";

export const dynamic = "force-dynamic";

const ENTITY_TYPES: SuggestionEntityType[] = [
  "TOWN", "PLACE", "EVENT", "PERSON", "SOURCE", "STORY", "ORGANIZATION", "ROUTE", "BUSINESS",
];

async function submitSuggestion(formData: FormData) {
  "use server";
  const session = await auth();
  const scope = await resolveScope(session);
  if (!scope || scope.type !== "town") throw new Error("unauthorized");
  if (!session?.user?.id) throw new Error("no user");

  const entityType = formData.get("entityType") as SuggestionEntityType;
  const entityId = (formData.get("entityId") as string | null) || null;
  const note = (formData.get("note") as string | null) || null;
  const payloadRaw = (formData.get("payload") as string | null) || "{}";

  let payload: Prisma.InputJsonValue;
  try {
    payload = JSON.parse(payloadRaw);
  } catch {
    payload = { raw: payloadRaw };
  }

  await prisma.suggestion.create({
    data: {
      partnerAccountId: scope.partnerAccountId,
      submittedById: session.user.id,
      entityType,
      entityId: entityId || null,
      payload,
      note,
    },
  });

  redirect("/admin/town/suggestions");
}

export default async function NewSuggestionPage() {
  const session = await auth();
  const scope = await resolveScope(session);
  if (!scope || scope.type !== "town") redirect("/login");

  return (
    <div>
      <div className="bg-[#1a3a72] px-8 py-8 border-b-4 border-white/20">
        <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-white/40 mb-1">
          Your Town
        </p>
        <h1 className="font-display text-[#f2e6c8] text-[36px] tracking-[-0.03em]">
          New Suggestion
        </h1>
        <p className="font-ui text-[13px] text-white/40 mt-1">
          Propose a content addition or correction. HIFE staff will review before publishing.
        </p>
      </div>

      <div className="max-w-[700px] mx-auto px-8 py-10">
        <form action={submitSuggestion} className="space-y-6">
          <div>
            <label className="block font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/50 mb-2">
              Entity Type *
            </label>
            <select
              name="entityType"
              required
              className="w-full font-ui text-[12px] border-2 border-[#14100a]/10 bg-white/60 px-4 py-2.5 focus:outline-none focus:border-[#1a3a72]/40"
            >
              {ENTITY_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/50 mb-2">
              Entity ID <span className="normal-case tracking-normal text-[#14100a]/30">(leave blank for new entity)</span>
            </label>
            <input
              name="entityId"
              type="text"
              placeholder="e.g. cuid123abc (from existing record)"
              className="w-full font-ui text-[12px] border-2 border-[#14100a]/10 bg-white/60 px-4 py-2.5 focus:outline-none focus:border-[#1a3a72]/40"
            />
          </div>

          <div>
            <label className="block font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/50 mb-2">
              Note
            </label>
            <textarea
              name="note"
              rows={3}
              placeholder="Describe the change and why it matters…"
              className="w-full font-ui text-[12px] border-2 border-[#14100a]/10 bg-white/60 px-4 py-2.5 focus:outline-none focus:border-[#1a3a72]/40 resize-none"
            />
          </div>

          <div>
            <label className="block font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/50 mb-2">
              Payload <span className="normal-case tracking-normal text-[#14100a]/30">(JSON — proposed field changes)</span>
            </label>
            <textarea
              name="payload"
              rows={6}
              defaultValue="{}"
              className="w-full font-mono text-[11px] border-2 border-[#14100a]/10 bg-white/60 px-4 py-2.5 focus:outline-none focus:border-[#1a3a72]/40 resize-y"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="font-ui text-[10px] uppercase tracking-[0.15em] px-5 py-2.5 bg-[#1a3a72] text-white hover:bg-[#1a3a72]/80 transition-colors"
            >
              Submit Suggestion
            </button>
            <a
              href="/admin/town/suggestions"
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
