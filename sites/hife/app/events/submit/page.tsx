"use client";

import { useState, useTransition } from "react";
import { submitEvent } from "./actions";

const EVENT_TYPES = [
  { id: "reenactment", label: "Reenactment / Living history" },
  { id: "festival", label: "Festival or parade" },
  { id: "ceremony", label: "Ceremony or commemoration" },
  { id: "tour", label: "Guided tour" },
  { id: "lecture", label: "Lecture or talk" },
  { id: "exhibition", label: "Exhibition or special program" },
];

export default function EventSubmitPage() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success?: boolean; error?: string } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    startTransition(async () => {
      const res = await submitEvent(fd);
      setResult(res);
    });
  };

  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-[#1a3a72] border-b-4 border-[#cc3322] px-8 md:px-16 py-10">
        <div className="max-w-[720px] mx-auto">
          <p className="font-ui text-[10px] uppercase tracking-[0.24em] text-cream/40 mb-1">Muster · History Is For Everyone</p>
          <h1 className="font-display text-cream text-[clamp(26px,5vw,48px)] leading-none tracking-[-0.02em]">Add Your Event to Muster</h1>
          <p className="font-editorial italic text-cream/60 text-[17px] mt-3 leading-relaxed max-w-[500px]">
            Reenactments, festivals, lectures, ceremonies — if it&apos;s Revolutionary War history, we want it on the map.
          </p>
        </div>
      </div>

      <div className="max-w-[720px] mx-auto px-8 md:px-16 py-12">
        {result?.success ? (
          <div className="border-l-4 border-[#5a7a5a] bg-[#5a7a5a]/5 p-6">
            <h2 className="font-display text-[24px] text-ink tracking-[-0.01em] mb-2">Submitted — thank you.</h2>
            <p className="font-ui text-[16px] text-ink/60 leading-relaxed">
              We review submissions within 72 hours. Approved events appear in Muster automatically.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-7">
            {result?.error && (
              <p className="font-ui text-[14px] text-[#cc3322] border border-[#cc3322]/30 px-4 py-3">{result.error}</p>
            )}

            <label className="block">
              <span className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/50 block mb-2">Event name <span className="text-[#cc3322]">*</span></span>
              <input name="eventName" required className="w-full border-2 border-ink/15 bg-white px-4 py-3 font-ui text-[16px] focus:outline-none focus:border-[#1a3a72] transition-colors" />
            </label>

            <label className="block">
              <span className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/50 block mb-2">Event type <span className="text-[#cc3322]">*</span></span>
              <select name="eventType" required className="w-full border-2 border-ink/15 bg-white px-4 py-3 font-ui text-[16px] focus:outline-none focus:border-[#1a3a72] transition-colors">
                <option value="">Select a type…</option>
                {EVENT_TYPES.map(({ id, label }) => <option key={id} value={id}>{label}</option>)}
              </select>
            </label>

            <label className="block">
              <span className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/50 block mb-2">Description <span className="text-[#cc3322]">*</span></span>
              <textarea name="description" required rows={4} className="w-full border-2 border-ink/15 bg-white px-4 py-3 font-ui text-[16px] focus:outline-none focus:border-[#1a3a72] transition-colors resize-y" />
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/50 block mb-2">Start date</span>
                <input type="date" name="startDate" className="w-full border-2 border-ink/15 bg-white px-4 py-3 font-ui text-[16px] focus:outline-none focus:border-[#1a3a72] transition-colors" />
              </label>
              <label className="block">
                <span className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/50 block mb-2">End date</span>
                <input type="date" name="endDate" className="w-full border-2 border-ink/15 bg-white px-4 py-3 font-ui text-[16px] focus:outline-none focus:border-[#1a3a72] transition-colors" />
              </label>
            </div>

            <label className="block">
              <span className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/50 block mb-2">Venue name</span>
              <input name="venueName" placeholder="e.g. Lexington Battle Green" className="w-full border-2 border-ink/15 bg-white px-4 py-3 font-ui text-[16px] placeholder:text-ink/25 focus:outline-none focus:border-[#1a3a72] transition-colors" />
            </label>

            <label className="block">
              <span className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/50 block mb-2">Website / ticket link</span>
              <input name="websiteUrl" type="url" placeholder="https://" className="w-full border-2 border-ink/15 bg-white px-4 py-3 font-ui text-[16px] placeholder:text-ink/25 focus:outline-none focus:border-[#1a3a72] transition-colors" />
            </label>

            <label className="block">
              <span className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/50 block mb-2">Contact email <span className="text-[#cc3322]">*</span></span>
              <input name="contactEmail" type="email" required className="w-full border-2 border-ink/15 bg-white px-4 py-3 font-ui text-[16px] focus:outline-none focus:border-[#1a3a72] transition-colors" />
            </label>

            <button type="submit" disabled={isPending} className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] bg-[#cc3322] text-cream px-8 py-4 hover:bg-[#a32818] transition-colors disabled:opacity-50">
              {isPending ? "Submitting…" : "Submit event →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
