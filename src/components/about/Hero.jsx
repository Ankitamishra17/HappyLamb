import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Play } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Studio brand palette
 * Primary      #FB5406  — orange
 * Secondary    #1A1A1A  — charcoal
 * Background   #090909  — rich black
 * Surface/Card #141414  — dark gray
 * Border       #2A2A2A  — gray
 * Heading      #FFFFFF  — white
 * Body text    #C9C9C9  — light gray
 * Muted text   #8D8D8D  — gray
 * Hover        #FF6B1A  — bright orange
 *
 * Heading font: Bebas Neue · Body font: Poppins
 */
const CLIENTS = ["ICICI BANK", "GODREJ", "JCB INDIA", "BAJAJ V", "UPSTOX"];

const STATS = [
  { value: "2023", label: "Studio Founded" },
  { value: "3", label: "Film, Design & Digital" },
  { value: "6+", label: "Industries Served" },
  { value: "5+", label: "Marquee Brand Clients" },
];

// High-impact cinema studio visual background
// Desktop/tablet background stays the existing image; mobile gets its own
// crop/image so faces or key detail aren't lost on narrow screens.
const HERO_BG_IMAGE = "Camera 4.png";
const HERO_BG_IMAGE_MOBILE = "Camera 4.png"; // <-- swap to your actual mobile image filename

// Repeating sprocket-hole filmstrip ticker
const FilmstripTicker = () => {
  const reduceMotion = useReducedMotion();
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {CLIENTS.map((c, i) => (
        <span
          key={i}
          className="flex items-center gap-3 font-['Poppins'] text-xs font-bold tracking-[0.25em] text-[#1A1A1A] whitespace-nowrap"
        >
          {c}
          <span className="h-1.5 w-1.5  bg-[#1A1A1A]/50" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden border-y-2 border-[#1A1A1A] shadow-lg bg-[#FB5406]">
      {/* sprocket-hole pattern — a decorative multi-position background image,
          left as inline style since Tailwind's arbitrary-value syntax can't
          cleanly express two comma-separated background-position pairs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(26,26,26,0.6) 1.8px, transparent 1.8px)",
          backgroundSize: "14px 100%",
          backgroundPosition: "0 4px, 0 calc(100% - 4px)",
          backgroundRepeat: "repeat-x",
        }}
      />

      <div className="relative flex items-center py-3 px-2">
        <div
          className={
            reduceMotion
              ? "flex"
              : "flex animate-[hlp-scroll_28s_linear_infinite]"
          }
        >
          {row}
          {row}
        </div>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700;800&display=swap');
        @keyframes hlp-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#090909] text-[#C9C9C9]">
      {/* Background image layer with a rich-black vignette for legibility */}
      <div className="absolute inset-0 z-0">
        {/* Mobile-only background image */}
        <img
          src={HERO_BG_IMAGE_MOBILE}
          alt="Film production camera background"
          className="block h-full w-full scale-105 object-cover object-center sm:hidden"
        />
        {/* Tablet/desktop background image */}
        <img
          src={HERO_BG_IMAGE}
          alt="Film production camera background"
          className="hidden h-full w-full scale-105 object-cover object-center sm:block"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/70 to-[#090909]/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-16 pb-24 ">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          {/* Left Column — Manifesto & Typography */}
          <div className="space-y-6 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-[#2A2A2A] bg-[#141414] px-4 py-1.5 font-['Poppins'] text-xs font-semibold uppercase tracking-widest text-[#FB5406]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Studio Profile</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-['Bebas_Neue'] uppercase leading-[1.0] tracking-tight text-white"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Gentle name.
              <br />
              <span className="bg-gradient-to-r from-[#FB5406] via-[#FF6B1A] to-[#FB5406] bg-clip-text text-transparent">
                Bold production
              </span>
              <br />
              standards.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="max-w-2xl font-['Poppins'] text-base font-light leading-relaxed text-[#C9C9C9] sm:text-lg"
            >
              Happy Lamb Production is a Mumbai-based creative studio founded by{" "}
              <span className="font-medium text-white">Dilip Gupta</span>,
              specializing in commercial films, animation, photography, and
              digital content that brings brands to life.
            </motion.p>

            <Link to="/about">
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 border border-[#2A2A2A] bg-[#141414] px-7 py-3.5 font-['Poppins'] text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:border-[#FF6B1A] hover:bg-[#FF6B1A] hover:text-[#0A0A0A]"
              >
                <span className="flex h-8 w-8 items-center justify-center bg-[#FB5406] text-[#0A0A0A] transition-colors duration-300 group-hover:bg-[#0A0A0A] group-hover:text-[#FF6B1A]">
                  <Play
                    size={13}
                    fill="currentColor"
                    className="translate-x-0.5"
                  />
                </span>

                <span>Watch Our Story</span>
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Stats Section Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-16 grid grid-cols-2 gap-2 border-t border-[#2A2A2A] pt-10 lg:grid-cols-4"
        >
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1">
              <span className="font-['Bebas_Neue'] text-2xl tracking-tight text-[#FB5406] sm:text-3xl">
                {stat.value}
              </span>
              <span className="font-['Poppins'] text-xs font-semibold uppercase tracking-wider text-[#8D8D8D] sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
