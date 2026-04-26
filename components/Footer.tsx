"use client";

export default function Footer() {
  return (
    <footer
      className="w-full border-t"
      style={{ borderColor: "rgba(226,114,91,0.2)", backgroundColor: "rgba(226,114,91,0.03)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "var(--font-playfair)", color: "#E2725B" }}
            >
              Mother&apos;s Recipe
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#9D7B67" }}>
              Preserving culinary heritage, one family at a time.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#6B4C38" }}>
              Quick Links
            </p>
            <ul className="space-y-2" role="list">
              {[
                { label: "About", href: "#about" },
                { label: "Features", href: "#features" },
                { label: "Join Waitlist", href: "#waitlist" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-colors duration-200 cursor-pointer"
                    style={{ color: "#9D7B67" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E2725B")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9D7B67")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact / Social */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#6B4C38" }}>
              Stay Connected
            </p>
            <p className="text-sm mb-4" style={{ color: "#9D7B67" }}>
              Follow our journey and be the first to know when we launch.
            </p>
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
              style={{ color: "#E2725B" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C85C47")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#E2725B")}
            >
              Get early access
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ borderColor: "rgba(226,114,91,0.15)", color: "#9D7B67" }}
        >
          <p>&copy; {new Date().getFullYear()} Mother&apos;s Recipe. All rights reserved.</p>
          <p>Made with love, for families everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
