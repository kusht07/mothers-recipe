export default function About() {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-20" aria-labelledby="about-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <div>
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#E2725B" }}
          >
            Our Story
          </p>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "#2D1B0E" }}
          >
            Made for Families Who Cook with Heart
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: "#6B4C38" }}>
            Every family has recipes that exist only in memory — in the worn edges of a handwritten card, in a
            grandmother&apos;s voice describing a pinch of this and a handful of that. When she&apos;s gone, those
            flavors can disappear forever.
          </p>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#6B4C38" }}>
            Mother&apos;s Recipe was born from that fear — and that love. We built a place where your family&apos;s
            culinary heritage can live forever: preserved, shared, and celebrated across generations.
          </p>
          <ul className="space-y-4" role="list">
            {[
              { label: "Preserve", text: "Turn faded cards and memory into permanent digital records" },
              { label: "Share", text: "Keep the whole family cooking the same beloved dishes" },
              { label: "Remember", text: "Attach the stories that make every recipe more than just food" },
            ].map(({ label, text }) => (
              <li key={label} className="flex items-start gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(226,114,91,0.15)", color: "#E2725B" }}
                  aria-hidden="true"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm leading-relaxed" style={{ color: "#6B4C38" }}>
                  <strong style={{ color: "#2D1B0E" }}>{label}.</strong> {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative stats card */}
        <div className="relative" aria-hidden="true">
          <div
            className="rounded-3xl p-8 border"
            style={{ backgroundColor: "rgba(226,114,91,0.06)", borderColor: "rgba(226,114,91,0.2)" }}
          >
            <p
              className="text-sm font-medium mb-6 text-center"
              style={{ color: "#9D7B67" }}
            >
              Families are already waiting
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "1,200+", label: "On the waitlist" },
                { value: "40+", label: "Countries represented" },
                { value: "∞", label: "Recipes to preserve" },
                { value: "100%", label: "Made with love" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl p-5 text-center border"
                  style={{ backgroundColor: "#FFFDD0", borderColor: "rgba(226,114,91,0.15)" }}
                >
                  <p
                    className="text-2xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-playfair)", color: "#E2725B" }}
                  >
                    {value}
                  </p>
                  <p className="text-xs" style={{ color: "#9D7B67" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <blockquote
              className="mt-6 pt-6 border-t text-sm italic leading-relaxed text-center"
              style={{ borderColor: "rgba(226,114,91,0.2)", color: "#6B4C38" }}
            >
              &ldquo;I wish I had this when my mother was alive. Her recipes only exist in my memory now.&rdquo;
              <footer className="mt-2 text-xs not-italic" style={{ color: "#9D7B67" }}>
                — Beta tester, Bangalore
              </footer>
            </blockquote>
          </div>
          {/* Decorative dot */}
          <div
            className="absolute -top-3 -right-3 w-6 h-6 rounded-full"
            style={{ backgroundColor: "#E2725B", opacity: 0.3 }}
          />
          <div
            className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full"
            style={{ backgroundColor: "#E2725B", opacity: 0.15 }}
          />
        </div>
      </div>
    </section>
  );
}
