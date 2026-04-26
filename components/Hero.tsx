import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <main className="flex flex-col items-center px-6 py-16 text-center" id="waitlist">
      <div className="max-w-2xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-8 border"
          style={{ borderColor: "#E2725B", color: "#E2725B", backgroundColor: "rgba(226,114,91,0.08)" }}
        >
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
          <span className="animate-subtext-pulse" style={{ color: "#E2725B" }}>Story</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ color: "#6B4C38" }}
        >
          Preserve, share, and rediscover the home-cooked flavors passed down through generations.
          Mother&apos;s Recipe helps families keep their culinary heritage alive — one dish at a time.
        </p>

        <WaitlistForm />

        {/* Social proof */}
        <p className="mt-5 text-sm" style={{ color: "#9D7B67" }}>
          Join{" "}
          <span className="font-semibold" style={{ color: "#6B4C38" }}>
            1,200+
          </span>{" "}
          food lovers already on the waitlist. No spam, ever.
        </p>
      </div>
    </main>
  );
}
