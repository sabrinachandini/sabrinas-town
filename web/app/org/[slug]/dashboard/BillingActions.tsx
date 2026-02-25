"use client";

import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

// ---------------------------------------------------------------------------
// SubscribeButton
// ---------------------------------------------------------------------------

export function SubscribeButton({
  orgSlug,
  planTier,
  userId,
}: {
  orgSlug: string;
  planTier: string;
  userId: string;
}) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/billing/checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-User-Id": userId },
        body: JSON.stringify({ orgSlug, planTier }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Checkout error:", data);
        setLoading(false);
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className="inline-block px-4 py-1.5 text-small border-2 border-accent-blue text-accent-blue rounded-lg hover:bg-accent-blue hover:text-white transition-colors disabled:opacity-50"
    >
      {loading ? "Redirecting…" : "Subscribe"}
    </button>
  );
}

// ---------------------------------------------------------------------------
// ManageBillingButton
// ---------------------------------------------------------------------------

export function ManageBillingButton({
  orgSlug,
  userId,
}: {
  orgSlug: string;
  userId: string;
}) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/billing/portal-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-User-Id": userId },
        body: JSON.stringify({ orgSlug }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Portal error:", data);
        setLoading(false);
      }
    } catch (err) {
      console.error("Portal error:", err);
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className="inline-block px-4 py-2 text-small border-2 border-border-light rounded-lg hover:border-text-muted transition-colors disabled:opacity-50"
    >
      {loading ? "Redirecting…" : "Manage billing"}
    </button>
  );
}

// ---------------------------------------------------------------------------
// ActivateStewardshipForm
// ---------------------------------------------------------------------------

export function ActivateStewardshipForm({
  orgSlug,
  userId,
  towns,
}: {
  orgSlug: string;
  userId: string;
  towns: { slug: string; name: string }[];
}) {
  const [selectedTown, setSelectedTown] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleActivate() {
    if (!selectedTown) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/api/stewardship/activate`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-User-Id": userId },
        body: JSON.stringify({ orgSlug, townSlug: selectedTown }),
      });
      const data = await res.json();
      if (data.success) {
        window.location.reload();
      } else {
        setError(data.error || "Failed to activate stewardship.");
        setLoading(false);
      }
    } catch (err) {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="mt-element">
      <select
        value={selectedTown}
        onChange={(e) => setSelectedTown(e.target.value)}
        className="w-full px-4 py-2 border-2 border-border-light rounded-lg bg-bg-primary text-text-primary text-small"
      >
        <option value="" disabled>
          Select a town
        </option>
        {towns.map((t) => (
          <option key={t.slug} value={t.slug}>
            {t.name}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={handleActivate}
        disabled={loading || !selectedTown}
        className="mt-2 px-4 py-2 text-small border-2 border-accent-blue text-accent-blue rounded-lg hover:bg-accent-blue hover:text-white transition-colors disabled:opacity-50"
      >
        {loading ? "Activating…" : "Activate stewardship"}
      </button>
      {error && (
        <p className="mt-2 text-small text-red-600">{error}</p>
      )}
    </div>
  );
}
