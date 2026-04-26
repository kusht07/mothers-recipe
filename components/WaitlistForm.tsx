"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="inline-flex items-center gap-3 rounded-2xl px-8 py-5 text-base font-semibold shadow-sm"
        style={{ backgroundColor: "#E2725B", color: "#FFFDD0" }}
        role="status"
        aria-live="polite"
      >
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        You&apos;re on the list! We&apos;ll be in touch soon.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full"
      noValidate
      aria-label="Waitlist signup form"
    >
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-xl px-4 py-3.5 text-base border-2 outline-none focus:ring-2 transition-colors duration-200"
        style={{
          borderColor: "#E2725B",
          backgroundColor: "rgba(255,253,208,0.8)",
          color: "#2D1B0E",
          // @ts-expect-error CSS custom property
          "--tw-ring-color": "#E2725B",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#C85C47")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "#E2725B")}
        aria-required="true"
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-xl px-6 py-3.5 text-base font-semibold cursor-pointer transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{
          backgroundColor: loading ? "#C85C47" : "#E2725B",
          color: "#FFFDD0",
          // @ts-expect-error CSS custom property
          "--tw-ring-color": "#E2725B",
          "--tw-ring-offset-color": "#FFFDD0",
        }}
        onMouseEnter={(e) => !loading && (e.currentTarget.style.backgroundColor = "#C85C47")}
        onMouseLeave={(e) => !loading && (e.currentTarget.style.backgroundColor = "#E2725B")}
        aria-label={loading ? "Joining waitlist…" : "Join the waitlist"}
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Joining…
          </span>
        ) : (
          "Join Waitlist"
        )}
      </button>
    </form>
  );
}
