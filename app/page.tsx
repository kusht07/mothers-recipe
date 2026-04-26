"use client";

import { useState } from "react";

export default function Home() {
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

  return (
    <div className="flex flex-col flex-1 min-h-screen" style={{ backgroundColor: "#FFFDD0" }}>
      {/* Nav */}
      <header className="w-full px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <span
          className="text-lg font-bold tracking-wide"
          style={{ fontFamily: "var(--font-playfair)", color: "#E2725B" }}
        >
          Mother&apos;s Recipe
        </span>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium" style={{ color: "#6B4C38" }}>
          <a href="#about" className="hover:text-[#E2725B] transition-colors duration-200 cursor-pointer">
            About
          </a>
          <a href="#waitlist" className="hover:text-[#E2725B] transition-colors duration-200 cursor-pointer">
            Join Waitlist
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex flex-col flex-1 items-center justify-center px-6 py-16 text-center" id="waitlist">
        <div className="max-w-2xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-8 border"
            style={{ borderColor: "#E2725B", color: "#E2725B", backgroundColor: "rgba(226,114,91,0.08)" }}>
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Coming Soon — Join Early Access
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "#2D1B0E" }}
          >
            Every Recipe Tells a{" "}
            <span style={{ color: "#E2725B" }}>Story</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: "#6B4C38" }}
          >
            Preserve, share, and rediscover the home-cooked flavors passed down through generations.
            Mother&apos;s Recipe helps families keep their culinary heritage alive — one dish at a time.
          </p>

          {/* Waitlist Form */}
          {submitted ? (
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
          ) : (
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
          )}

          {/* Social proof nudge */}
          <p className="mt-5 text-sm" style={{ color: "#9D7B67" }}>
            Join{" "}
            <span className="font-semibold" style={{ color: "#6B4C38" }}>
              1,200+
            </span>{" "}
            food lovers already on the waitlist. No spam, ever.
          </p>
        </div>

        {/* Decorative divider */}
        <div className="mt-20 flex items-center gap-4 max-w-xs mx-auto opacity-40" aria-hidden="true">
          <div className="flex-1 h-px" style={{ backgroundColor: "#E2725B" }} />
          <svg className="w-5 h-5 flex-shrink-0" style={{ color: "#E2725B" }} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
          </svg>
          <div className="flex-1 h-px" style={{ backgroundColor: "#E2725B" }} />
        </div>

        {/* Feature teasers */}
        <section
          id="about"
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto w-full"
          aria-label="What you can do with Mother's Recipe"
        >
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              ),
              title: "Preserve Recipes",
              desc: "Digitize handwritten cards, voice memos, and family secrets into a beautiful recipe book.",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              ),
              title: "Share with Family",
              desc: "Invite relatives to a shared cookbook so grandma's biryani stays in the family forever.",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              ),
              title: "Rediscover Heritage",
              desc: "Explore the stories, origins, and memories behind every dish your family loves.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl p-6 text-left border transition-colors duration-200"
              style={{ backgroundColor: "rgba(226,114,91,0.06)", borderColor: "rgba(226,114,91,0.2)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(226,114,91,0.15)", color: "#E2725B" }}
              >
                {icon}
              </div>
              <h3
                className="text-base font-bold mb-2"
                style={{ fontFamily: "var(--font-playfair)", color: "#2D1B0E" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6B4C38" }}>
                {desc}
              </p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-sm" style={{ color: "#9D7B67" }}>
        <p>&copy; {new Date().getFullYear()} Mother&apos;s Recipe. Made with love.</p>
      </footer>
    </div>
  );
}
