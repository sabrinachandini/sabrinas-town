"use client";

import { useState } from "react";

interface EventsSignupProps {
  townName: string;
  townId: string;
}

export function EventsSignup({ townName, townId }: EventsSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, townId, source: "events" }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json();
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#1a3a72] border border-white/10 px-6 py-5">
        <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-[#4A6A9B] mb-1">Subscribed</p>
        <p className="font-editorial text-white text-[20px] leading-snug">
          You&rsquo;re on the list for {townName} updates.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#1a3a72] border border-white/10 px-6 py-5">
      <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-[rgba(242,230,200,0.4)] mb-2">
        Event Updates
      </p>
      <p className="font-editorial text-[#f2e6c8] text-[21px] leading-snug mb-4">
        Get notified when new events are added for {townName}.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
          className="flex-1 min-w-0 bg-white/8 border border-white/15 text-[#f2e6c8] placeholder-white/30 font-ui text-[12px] px-3 py-2.5 focus:outline-none focus:border-[#cc3322] transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex-shrink-0 bg-[#cc3322] text-[#f2e6c8] font-ui text-[10px] font-semibold uppercase tracking-[0.15em] px-4 py-2.5 border-2 border-[#cc3322] hover:bg-[#1a3a72] hover:border-[#1a3a72] transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "…" : "Notify Me"}
        </button>
      </form>
      {status === "error" && (
        <p className="font-ui text-[11px] text-[#cc3322] mt-2">{errorMsg}</p>
      )}
      <p className="font-ui text-[10px] text-white/20 mt-3">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
