import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen" style={{ backgroundColor: "#FFFDD0" }}>
      <Navbar />
      <Hero />

      {/* Section divider */}
      <div className="flex items-center gap-4 max-w-xs mx-auto opacity-40 px-6" aria-hidden="true">
        <div className="flex-1 h-px" style={{ backgroundColor: "#E2725B" }} />
        <svg className="w-5 h-5 flex-shrink-0" style={{ color: "#E2725B" }} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
        </svg>
        <div className="flex-1 h-px" style={{ backgroundColor: "#E2725B" }} />
      </div>

      <About />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
