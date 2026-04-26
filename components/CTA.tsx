"use client";

export default function CTA() {
  return (
    <section className="w-full px-6 py-16" aria-labelledby="cta-heading">
      <div
        className="max-w-3xl mx-auto rounded-3xl px-8 py-12 text-center border"
        style={{ backgroundColor: "rgba(226,114,91,0.08)", borderColor: "rgba(226,114,91,0.25)" }}
      >
        <h2
          id="cta-heading"
          className="text-2xl sm:text-3xl font-bold mb-4"
          style={{ fontFamily: "var(--font-playfair)", color: "#2D1B0E" }}
        >
          Start preserving your family&apos;s recipes today
        </h2>
        <p className="text-base leading-relaxed mb-8 max-w-lg mx-auto" style={{ color: "#6B4C38" }}>
          Be among the first families to use Mother&apos;s Recipe. Join our waitlist and get early access when we
          launch.
        </p>
        <a
          href="#waitlist"
          className="inline-block rounded-xl px-8 py-4 text-base font-semibold transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: "#E2725B",
            color: "#FFFDD0",
            // @ts-expect-error CSS custom property
            "--tw-ring-color": "#E2725B",
            "--tw-ring-offset-color": "#FFFDD0",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C85C47")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E2725B")}
        >
          Join the Waitlist
        </a>
      </div>
    </section>
  );
}
