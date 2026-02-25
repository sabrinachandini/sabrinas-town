"use client";

import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

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
      <div className="p-component bg-bg-secondary rounded-lg text-center">
        <p className="text-h3 font-heading font-semibold">Inquiry received</p>
        <p className="mt-element text-text-muted">
          We review every inquiry personally. You'll hear from us soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-element">
      {/* Honeypot — visually hidden */}
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

      <div>
        <label htmlFor="name" className="block text-small font-medium mb-1">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={200}
          className="w-full px-4 py-2 border-2 border-border-light rounded-lg bg-bg-primary text-text-primary text-small focus:border-accent-blue focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-small font-medium mb-1">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={200}
          className="w-full px-4 py-2 border-2 border-border-light rounded-lg bg-bg-primary text-text-primary text-small focus:border-accent-blue focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="title" className="block text-small font-medium mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          maxLength={200}
          className="w-full px-4 py-2 border-2 border-border-light rounded-lg bg-bg-primary text-text-primary text-small focus:border-accent-blue focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="organization"
          className="block text-small font-medium mb-1"
        >
          Organization
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          maxLength={200}
          className="w-full px-4 py-2 border-2 border-border-light rounded-lg bg-bg-primary text-text-primary text-small focus:border-accent-blue focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-small font-medium mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          maxLength={50}
          className="w-full px-4 py-2 border-2 border-border-light rounded-lg bg-bg-primary text-text-primary text-small focus:border-accent-blue focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-small font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={5000}
          className="w-full px-4 py-2 border-2 border-border-light rounded-lg bg-bg-primary text-text-primary text-small focus:border-accent-blue focus:outline-none resize-y"
        />
      </div>

      {error && <p className="text-small text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="inline-block px-6 py-2.5 text-small font-medium border-2 border-accent-blue text-accent-blue rounded-lg hover:bg-accent-blue hover:text-white transition-colors disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
