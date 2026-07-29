import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  Award,
  Camera,
  ArrowUpRight,
  Film,
} from "lucide-react";

// Dark Design System Tokens
const DARK_PALETTE = {
  BG: "#090909",
  CHARCOAL: "#1A1A1A",
  CARD_BG: "#141414",
  ORANGE: "#FB5406",
  ORANGE_HOVER: "#FF6B1A",
  BORDER: "#2A2A2A",
  TEXT_PRIMARY: "#FFFFFF",
  TEXT_MUTED: "#C9C9C9",
  TEXT_FAINT: "#8D8D8D",
};

const FONTS = {
  heading: "'Bebas Neue',  sans-serif",
  body: "'Poppins',  sans-serif",
};

// Cinema crew / studio background image
const BG_IMAGE = "14.png";

const STATS = [
  { label: "Creative Minds", value: "50+" },
  { label: "National Campaigns", value: "120+" },
  { label: "Industry Awards", value: "18" },
];

export default function TeamHero() {
  return (
    <section
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden px-6 lg:px-[96px] py-20 text-white"
      style={{ backgroundColor: DARK_PALETTE.BG, fontFamily: FONTS.body }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700;900&display=swap"
      />

      {/* Background Image Layer with Layered Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMAGE}
          alt="Production crew on set background"
          className="h-full w-full object-cover object-center scale-105"
        />
      
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl px-6 sm:px-8 lg:px-12 grid-cols-1 items-center gap-16 lg:grid-cols-12">
        {/* Left Column — Manifesto */}
        <div className="lg:col-span-7 space-y-6 -mt-14">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="uppercase leading-[0.92] tracking-tight"
            style={{
              fontFamily: FONTS.heading,
              fontSize: "clamp(3rem, 6.5vw, 5.75rem)",
              color: DARK_PALETTE.TEXT_PRIMARY,
            }}
          >
            Meet the minds
            <br />
            <span style={{ color: DARK_PALETTE.ORANGE }}>crafting iconic</span>
            <br />
            stories
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-lg text-[15px] leading-relaxed font-light"
            style={{ fontFamily: FONTS.body, color: DARK_PALETTE.TEXT_MUTED }}
          >
            From visionary directors and scriptwriters to Bollywood campaign
            producers and technical crew — we are a collective of creators
            obsessed with making brands unforgettable.
          </motion.p>

          {/* Quick Stats Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="pt-6 grid grid-cols-3 gap-4 max-w-lg border-t"
            style={{ borderColor: DARK_PALETTE.BORDER }}
          >
            {STATS.map((stat, index) => (
              <div key={index} className="space-y-1">
                <p
                  className="text-2xl sm:text-3xl font-bold"
                  style={{
                    fontFamily: FONTS.body,
                    color: DARK_PALETTE.TEXT_PRIMARY,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[11px] uppercase font-semibold tracking-wider"
                  style={{
                    fontFamily: FONTS.body,
                    color: DARK_PALETTE.TEXT_FAINT,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
