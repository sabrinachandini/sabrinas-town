"use client";

import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

// Shared class for all text inputs/textareas — includes visible focus ring
const INPUT_CLASS =
  "w-full px-4 py-3 min-h-[44px] border-2 border-[#ddd8ce] bg-[#f2ece0] text-[#0e1428] text-[15px] focus:outline-none focus:border-[#1a3a72] focus:ring-2 focus:ring-[#1a3a72]/25 transition-colors";

export function InquiryForm({ townSlug }: { townSlug?: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      title: (formData.get("title") as string) || undefined,
      organization: (formData.get("organization") as string) || undefined,
      phone: (formData.get("phone") as string) || undefined,
      message: (formData.get("message") as string) || undefined,
      townSlug: townSlug || undefined,
      website: (formData.get("website") as string) || undefined,
    };

    try {
      const res = await fetch(`${API_URL}/api/partner/inquire`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="p-8 bg-[#f8f0d8] border-2 border-[#ddd8ce] text-center"
      >
        <p className="font-heading font-black text-[22px] text-[#0e1428]">Inquiry received</p>
        <p className="mt-3 text-[16px] text-[#6b7280]">
          We review every inquiry personally. You&rsquo;ll hear from us soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot — visually and programmatically hidden */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Required field notice */}
      <p className="font-ui text-[13px] text-[#6b7280]">
        Fields marked <span aria-label="required">*</span> are required.
      </p>

      <div>
        <label htmlFor="name" className="block font-ui text-[13px] font-medium text-[#0e1428] mb-1.5">
          Name <span aria-hidden="true" className="text-[#B53A29]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={200}
          autoComplete="name"
          aria-required="true"
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-ui text-[13px] font-medium text-[#0e1428] mb-1.5">
          Email <span aria-hidden="true" className="text-[#B53A29]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={200}
          autoComplete="email"
          aria-required="true"
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="title" className="block font-ui text-[13px] font-medium text-[#0e1428] mb-1.5">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          maxLength={200}
          autoComplete="organization-title"
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="organization" className="block font-ui text-[13px] font-medium text-[#0e1428] mb-1.5">
          Organization
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          maxLength={200}
          autoComplete="organization"
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-ui text-[13px] font-medium text-[#0e1428] mb-1.5">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          maxLength={50}
          autoComplete="tel"
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-ui text-[13px] font-medium text-[#0e1428] mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={5000}
          className={`${INPUT_CLASS} resize-y`}
        />
      </div>

      {/* Error — announced immediately to screen readers */}
      {error && (
        <p
          role="alert"
          aria-live="assertive"
          className="font-ui text-[14px] text-[#B53A29] border-l-4 border-[#B53A29] pl-3 py-1"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        aria-busy={loading}
        aria-disabled={loading}
        className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] font-ui text-[13px] font-semibold uppercase tracking-[0.15em] border-2 border-[#1a3a72] text-[#1a3a72] hover:bg-[#1a3a72] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3a72] focus-visible:ring-offset-2"
      >
        {loading && (
          <svg
            aria-hidden="true"
            className="animate-spin w-4 h-4 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {loading ? "Submitting…" : "Submit Inquiry"}
      </button>
    </form>
  );
}
