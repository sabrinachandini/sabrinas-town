"use client";

import { useState } from "react";

const STATUS_OPTIONS = ["NEW", "IN_REVIEW", "RESPONDED", "CLOSED"] as const;

export function InquiryActions({
  id,
  currentStatus,
  currentNotes,
}: {
  id: string;
  currentStatus: string;
  currentNotes: string;
}) {
  const [status, setStatus] = useState(currentStatus);
  const [notes, setNotes] = useState(currentNotes);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSave() {
    setLoading(true);
    setError(null);
    setSaved(false);

    try {
      const res = await fetch(`/api/admin/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, notes }),
      });
      const data = await res.json();
      if (data.success) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } else {
        setError(data.error || "Failed to save");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-element">
      <div>
        <label
          htmlFor="status"
          className="block text-small font-medium mb-1"
        >
          Status
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full max-w-xs px-4 py-2 border-2 border-border-light rounded-lg bg-bg-primary text-text-primary text-small"
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s.replace("_", " ")}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-small font-medium mb-1"
        >
          Internal Notes
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border-2 border-border-light rounded-lg bg-bg-primary text-text-primary text-small focus:border-accent-blue focus:outline-none resize-y"
        />
      </div>

      {error && <p className="text-small text-red-600">{error}</p>}
      {saved && (
        <p className="text-small text-green-600">Saved successfully</p>
      )}

      <button
        type="button"
        onClick={handleSave}
        disabled={loading}
        className="inline-block px-6 py-2.5 text-small font-medium border-2 border-accent-blue text-accent-blue rounded-lg hover:bg-accent-blue hover:text-white transition-colors disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
}
