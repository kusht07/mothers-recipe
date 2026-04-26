export default function Navbar() {
  return (
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
        <a href="#features" className="hover:text-[#E2725B] transition-colors duration-200 cursor-pointer">
          Features
        </a>
        <a href="#waitlist" className="hover:text-[#E2725B] transition-colors duration-200 cursor-pointer">
          Join Waitlist
        </a>
      </nav>
    </header>
  );
}
