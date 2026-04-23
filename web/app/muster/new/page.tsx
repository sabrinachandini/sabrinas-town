"use client";

import { useRef, useState, useTransition } from "react";
import { createMuster } from "@/app/muster/actions";

const INTERESTS = [
  { id: "battles", label: "Battles & skirmishes" },
  { id: "founding-figures", label: "Founding figures" },
  { id: "women", label: "Women of the Revolution" },
  { id: "spies", label: "Spies & secret networks" },
  { id: "taverns", label: "Taverns & daily life" },
  { id: "african-american-indigenous", label: "African American & Indigenous perspectives" },
  { id: "pre-war", label: "Pre-war agitation" },
  { id: "naval", label: "Naval history" },
];

const TRAVELER_TYPES = [
  { id: "SOLO_COUPLE", label: "Solo / Couple" },
  { id: "FAMILY_KIDS", label: "Family with kids" },
  { id: "SCHOOL_GROUP", label: "School group" },
  { id: "HISTORY_BUFF", label: "History buff" },
];

const PACES = [
  { id: "LEISURELY", label: "Leisurely", sub: "2–3 stops/day" },
  { id: "BALANCED", label: "Balanced", sub: "4–5 stops/day" },
  { id: "PACKED", label: "Packed", sub: "6+ stops/day" },
];

const STEPS = ["Dates", "Locations", "Interests", "Pace"];

type Step = 0 | 1 | 2 | 3;

export default function MusterNewPage() {
  const [step, setStep] = useState<Step>(0);
  const [isPending, startTransition] = useTransition();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form values
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [travelerType, setTravelerType] = useState("SOLO_COUPLE");
  const [pace, setPace] = useState("BALANCED");

  const formRef = useRef<HTMLFormElement>(null);

  // Validation per step
  const canAdvance = (): boolean => {
    if (step === 0) return !!startDate && !!endDate && endDate >= startDate;
    if (step === 1) return !!startLocation.trim() && !!endLocation.trim();
    if (step === 2) return true; // interests optional
    return true;
  };

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    if (!formRef.current) return;
    const fd = new FormData(formRef.current);
    setErrorMsg(null);
    startTransition(async () => {
      const result = await createMuster(fd);
      if (result?.error) setErrorMsg(result.error);
    });
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-[#1a3a72] border-b-4 border-[#cc3322] px-8 md:px-16 py-8">
        <div className="max-w-[680px] mx-auto">
          <p className="font-ui text-[10px] uppercase tracking-[0.24em] text-cream/40 mb-1">
            From History Is For Everyone
          </p>
          <h1 className="font-display text-cream text-[clamp(28px,5vw,48px)] leading-none tracking-[-0.02em]">
            Muster a Trip
          </h1>
        </div>
      </div>

      {/* Progress */}
      <div className="border-b border-ink/8 bg-white/40">
        <div className="max-w-[680px] mx-auto px-8 md:px-16 py-4">
          <div className="flex gap-1">
            {STEPS.map((label, i) => (
              <div key={label} className="flex-1">
                <div
                  className={`h-[3px] transition-colors ${
                    i <= step ? "bg-[#cc3322]" : "bg-ink/10"
                  }`}
                />
                <p className={`font-ui text-[9px] uppercase tracking-[0.15em] mt-1.5 ${
                  i === step ? "text-[#cc3322]" : i < step ? "text-ink/40" : "text-ink/20"
                }`}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-[680px] mx-auto px-8 md:px-16 py-12">
        <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
          {/* Hidden fields that hold all values */}
          <input type="hidden" name="startDate" value={startDate} />
          <input type="hidden" name="endDate" value={endDate} />
          <input type="hidden" name="startLocation" value={startLocation} />
          <input type="hidden" name="endLocation" value={endLocation} />
          {selectedInterests.map((i) => (
            <input key={i} type="hidden" name="interests" value={i} />
          ))}
          <input type="hidden" name="travelerType" value={travelerType} />
          <input type="hidden" name="pace" value={pace} />

          {/* ── Step 0: Dates ── */}
          {step === 0 && (
            <div>
              <h2 className="font-display text-[clamp(24px,4vw,36px)] text-ink tracking-[-0.02em] mb-2">
                When are you going?
              </h2>
              <p className="font-ui text-[17px] text-ink/50 mb-10">
                Pick your travel dates — up to 14 days.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/50 block mb-2">
                    Start date
                  </span>
                  <input
                    type="date"
                    min={today}
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                      if (endDate && e.target.value > endDate) setEndDate("");
                    }}
                    className="w-full border-2 border-ink/15 bg-white px-4 py-3 font-ui text-[16px] text-ink focus:outline-none focus:border-[#1a3a72] transition-colors"
                  />
                </label>
                <label className="block">
                  <span className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/50 block mb-2">
                    End date
                  </span>
                  <input
                    type="date"
                    min={startDate || today}
                    max={
                      startDate
                        ? new Date(new Date(startDate).getTime() + 13 * 86400000)
                            .toISOString()
                            .split("T")[0]
                        : undefined
                    }
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full border-2 border-ink/15 bg-white px-4 py-3 font-ui text-[16px] text-ink focus:outline-none focus:border-[#1a3a72] transition-colors"
                  />
                </label>
              </div>

              {startDate && endDate && (
                <p className="font-ui text-[14px] text-ink/40 mt-4">
                  {Math.ceil(
                    (new Date(endDate).getTime() - new Date(startDate).getTime()) / 86400000
                  ) + 1} day trip
                </p>
              )}
            </div>
          )}

          {/* ── Step 1: Locations ── */}
          {step === 1 && (
            <div>
              <h2 className="font-display text-[clamp(24px,4vw,36px)] text-ink tracking-[-0.02em] mb-2">
                Where are you starting and ending?
              </h2>
              <p className="font-ui text-[17px] text-ink/50 mb-10">
                City, town, or landmark. Can be the same place for a round trip.
              </p>

              <div className="space-y-6">
                <label className="block">
                  <span className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/50 block mb-2">
                    Starting from
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. Boston, MA"
                    value={startLocation}
                    onChange={(e) => setStartLocation(e.target.value)}
                    className="w-full border-2 border-ink/15 bg-white px-4 py-3 font-ui text-[16px] text-ink placeholder:text-ink/25 focus:outline-none focus:border-[#1a3a72] transition-colors"
                  />
                </label>
                <label className="block">
                  <span className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/50 block mb-2">
                    Ending at
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. Concord, MA  (or same as start)"
                    value={endLocation}
                    onChange={(e) => setEndLocation(e.target.value)}
                    className="w-full border-2 border-ink/15 bg-white px-4 py-3 font-ui text-[16px] text-ink placeholder:text-ink/25 focus:outline-none focus:border-[#1a3a72] transition-colors"
                  />
                </label>
              </div>
            </div>
          )}

          {/* ── Step 2: Interests ── */}
          {step === 2 && (
            <div>
              <h2 className="font-display text-[clamp(24px,4vw,36px)] text-ink tracking-[-0.02em] mb-2">
                What kind of history?
              </h2>
              <p className="font-ui text-[17px] text-ink/50 mb-10">
                Pick as many as you like — or skip and we&apos;ll cover the highlights.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {INTERESTS.map(({ id, label }) => {
                  const active = selectedInterests.includes(id);
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => toggleInterest(id)}
                      className={`font-ui text-[11px] uppercase tracking-[0.12em] px-4 py-2.5 border-2 transition-colors ${
                        active
                          ? "bg-[#1a3a72] border-[#1a3a72] text-cream"
                          : "bg-white border-ink/15 text-ink/60 hover:border-[#1a3a72]/40 hover:text-ink"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Step 3: Traveler type + Pace ── */}
          {step === 3 && (
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-[clamp(24px,4vw,36px)] text-ink tracking-[-0.02em] mb-2">
                  Who&apos;s traveling?
                </h2>
                <p className="font-ui text-[17px] text-ink/50 mb-8">
                  Helps us get the tone and pacing right.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {TRAVELER_TYPES.map(({ id, label }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setTravelerType(id)}
                      className={`font-ui text-[11px] uppercase tracking-[0.1em] px-3 py-4 border-2 text-center transition-colors ${
                        travelerType === id
                          ? "bg-[#1a3a72] border-[#1a3a72] text-cream"
                          : "bg-white border-ink/15 text-ink/60 hover:border-[#1a3a72]/40"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-[clamp(22px,3.5vw,30px)] text-ink tracking-[-0.02em] mb-2">
                  What&apos;s your pace?
                </h2>
                <p className="font-ui text-[17px] text-ink/50 mb-8">
                  How many stops per day feels right?
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {PACES.map(({ id, label, sub }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setPace(id)}
                      className={`font-ui px-4 py-5 border-2 text-center transition-colors ${
                        pace === id
                          ? "bg-[#1a3a72] border-[#1a3a72] text-cream"
                          : "bg-white border-ink/15 text-ink/60 hover:border-[#1a3a72]/40"
                      }`}
                    >
                      <p className={`text-[12px] uppercase tracking-[0.12em] font-semibold ${pace === id ? "text-cream" : "text-ink"}`}>
                        {label}
                      </p>
                      <p className={`text-[11px] mt-1 ${pace === id ? "text-cream/60" : "text-ink/40"}`}>
                        {sub}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </form>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep((s) => (s - 1) as Step)}
              disabled={isPending}
              className="font-ui text-[10px] uppercase tracking-[0.18em] text-ink/40 hover:text-ink transition-colors disabled:opacity-30"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep((s) => (s + 1) as Step)}
              disabled={!canAdvance()}
              className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] bg-[#1a3a72] text-cream px-8 py-3.5 disabled:opacity-30 hover:bg-[#0e1428] transition-colors"
            >
              Continue →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isPending}
              className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] bg-[#cc3322] text-cream px-8 py-3.5 hover:bg-[#a32818] transition-colors disabled:opacity-50 min-w-[200px] text-center"
            >
              {isPending ? "Mustering your trip…" : "Muster my trip →"}
            </button>
          )}
        </div>

        {step === 3 && !isPending && !errorMsg && (
          <p className="font-ui text-[13px] text-ink/35 mt-4 text-center">
            Takes about 10 seconds. No account required.
          </p>
        )}

        {errorMsg && (
          <p className="font-ui text-[13px] text-[#cc3322] mt-4 text-center">
            {errorMsg} Please try again.
          </p>
        )}

        {isPending && (
          <div className="mt-8 text-center">
            <p className="font-editorial italic text-[17px] text-ink/50">
              Gathering the troops…
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
