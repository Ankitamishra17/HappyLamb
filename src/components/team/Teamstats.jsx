import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Film, Award, Clapperboard, Sparkles } from "lucide-react";

// Color Palette (light surface, orange accent)
const COLORS = {
  INK: "#1A1A1A",
  INK_MUTED: "rgba(26, 26, 26, 0.65)",
  INK_FAINT: "rgba(26, 26, 26, 0.4)",
  ORANGE: "#FB5406",
  ORANGE_HOVER: "#FF6B1A",
  BORDER: "rgba(26, 26, 26, 0.12)",
  BORDER_HOVER: "rgba(251, 84, 6, 0.35)",
  CARD_BG: "#FFFFFF",
};

const FONTS = {
  heading: "'Bebas Neue', 'Oswald', 'Arial Narrow', sans-serif",
  body: "'Poppins', 'Helvetica Neue', sans-serif",
};

const STATS = [
  { value: 4, suffix: "+", label: "Years in production", icon: Film },
  { value: 250, suffix: "+", label: "Projects delivered", icon: Clapperboard },
  { value: 28, suffix: "", label: "Awards & nominations", icon: Award },
  { value: 96, suffix: "%", label: "Repeat clients", icon: Sparkles },
];

function useCountUp(target, active, duration = 1.4) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(stat.value, inView);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative  border p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
      style={{
        backgroundColor: COLORS.CARD_BG,
        borderColor: COLORS.BORDER,
      }}
    >
      {/* Top Accent Highlight */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, ${COLORS.ORANGE}, ${COLORS.ORANGE_HOVER})`,
        }}
      />

      <div className="flex items-center justify-between gap-2">
        <div
          className="flex h-10 w-10 items-center justify-center  border transition-colors"
          style={{
            backgroundColor: "rgba(251, 84, 6, 0.10)",
            borderColor: "rgba(251, 84, 6, 0.25)",
          }}
        >
          <Icon size={18} style={{ color: COLORS.ORANGE }} />
        </div>
      </div>

      <div className="mt-6">
        <p
          className="tracking-tight leading-none text-4xl sm:text-5xl lg:text-6xl"
          style={{ fontFamily: FONTS.heading, color: COLORS.INK }}
        >
          {count}
          <span style={{ color: COLORS.ORANGE }} className="ml-1">
            {stat.suffix}
          </span>
        </p>

        <p
          className="mt-3 text-xs font-semibold tracking-[0.15em] uppercase"
          style={{ fontFamily: FONTS.body, color: COLORS.INK_MUTED }}
        >
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}

export default function TeamStats() {
  return (
    <section
      className="w-full py-10 sm:py-24  overflow-hidden"
      style={{ backgroundColor: "#FFFFFF", fontFamily: FONTS.body }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700&display=swap"
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div >
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.92]"
            style={{ fontFamily: FONTS.heading, color: COLORS.INK }}
          >
            A track record, not just a{" "}
            <span style={{ color: COLORS.ORANGE }}>showreel</span>
          </motion.h2>

          <p
            className="mt-3 text-sm sm:text-base leading-relaxed font-light"
            style={{ fontFamily: FONTS.body, color: COLORS.INK_MUTED }}
          >
            Quantifiable results behind every frame. From feature productions to
            high-impact commercial campaigns.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
