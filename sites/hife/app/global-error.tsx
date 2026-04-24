"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#F7F5F2",
          color: "#1E1E1E",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 480, padding: 32 }}>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 600,
              marginBottom: 16,
              color: "#1E1E1E",
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "#6B6B6B",
              marginBottom: 32,
            }}
          >
            A critical error occurred. Please try again or return to the
            homepage.
          </p>
          <div
            style={{ display: "flex", gap: 12, justifyContent: "center" }}
          >
            <button
              onClick={reset}
              style={{
                padding: "10px 24px",
                fontSize: 14,
                fontWeight: 500,
                color: "#FFFFFF",
                backgroundColor: "#1B3D6F",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Try Again
            </button>
            <a
              href="/"
              style={{
                padding: "10px 24px",
                fontSize: 14,
                fontWeight: 500,
                color: "#1B3D6F",
                backgroundColor: "transparent",
                border: "1px solid #1B3D6F",
                borderRadius: 6,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Back to Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
