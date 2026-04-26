"use client";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <div
      className="rounded-2xl p-6 border transition-colors duration-200 cursor-default"
      style={{ backgroundColor: "#FFFDD0", borderColor: "rgba(226,114,91,0.2)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(226,114,91,0.5)";
        e.currentTarget.style.backgroundColor = "rgba(255,253,208,1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(226,114,91,0.2)";
        e.currentTarget.style.backgroundColor = "#FFFDD0";
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: "rgba(226,114,91,0.15)", color: "#E2725B" }}
        aria-hidden="true"
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
  );
}
