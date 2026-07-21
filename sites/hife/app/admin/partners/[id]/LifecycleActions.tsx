"use client";

import { useTransition } from "react";
import { updateStatus } from "./actions";
import type { PartnerAccountStatus } from "@prisma/client";

const TRANSITIONS: Record<PartnerAccountStatus, PartnerAccountStatus[]> = {
  PENDING: ["ACTIVE", "CHURNED"],
  ACTIVE: ["SUSPENDED", "CHURNED"],
  SUSPENDED: ["ACTIVE", "CHURNED"],
  CHURNED: ["PENDING"],
};

const BUTTON_STYLE: Record<string, string> = {
  ACTIVE: "bg-[#2a5c45] text-white hover:bg-[#2a5c45]/80",
  SUSPENDED: "border border-[#C8A24A] text-[#C8A24A] hover:bg-[#C8A24A]/5",
  CHURNED: "border border-[#cc3322] text-[#cc3322] hover:bg-[#cc3322]/5",
  PENDING: "border border-[#14100a]/20 text-[#14100a]/50 hover:bg-[#14100a]/5",
};

export function LifecycleActions({
  accountId,
  currentStatus,
}: {
  accountId: string;
  currentStatus: PartnerAccountStatus;
}) {
  const [isPending, startTransition] = useTransition();
  const next = TRANSITIONS[currentStatus] ?? [];

  if (next.length === 0) return null;

  return (
    <div className="flex gap-3 flex-wrap">
      {next.map((status) => (
        <form
          key={status}
          action={() =>
            startTransition(async () => {
              await updateStatus(accountId, status);
            })
          }
        >
          <button
            type="submit"
            disabled={isPending}
            className={`font-ui text-[10px] uppercase tracking-[0.15em] px-4 py-2 transition-colors disabled:opacity-40 ${BUTTON_STYLE[status]}`}
          >
            → {status}
          </button>
        </form>
      ))}
    </div>
  );
}
