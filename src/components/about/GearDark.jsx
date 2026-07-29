import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Film, Palette, Smartphone, Layers, ArrowUpRight } from "lucide-react";

/* ---------------------------------------------------------
   TOKENS
   Fonts: Bebas Neue (headings) / Poppins (body + UI)
   Make sure both are loaded once in index.html:
   <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
--------------------------------------------------------- */
const COLORS = {
  primary: "#FB5406", // Orange
  secondary: "#1A1A1A", // Charcoal
  bg: "#090909", // Rich Black
  surface: "#141414", // Card
  border: "#2A2A2A",
  heading: "#FFFFFF",
  body: "#C9C9C9",
  muted: "#8D8D8D",
  hover: "#FF6B1A",
};

const FONT_HEAD = "'Bebas Neue', sans-serif";
const FONT_BODY = "'Poppins', sans-serif";

// Real service capabilities, grouped exactly as the dossier's manifesto describes them
const CAPABILITY_CATEGORIES = [
  {
    id: "film",
    label: "Film & Production",
    icon: <Film className="h-4 w-4" />,
    items: [
      {
        name: "Ad Films",
        spec: "Brand campaigns built around a clear narrative arc, from script to final cut",
        status: "Core Service",
      },
      {
        name: "Product Shoots",
        spec: "Studio and on-location product filming tailored to each brand's positioning",
        status: "Core Service",
      },
      {
        name: "Animation",
        spec: "Motion and animated content used to explain, promote, or simplify a story",
        status: "Core Service",
      },
    ],
  },
  {
    id: "design",
    label: "Design & Advertising",
    icon: <Palette className="h-4 w-4" />,
    items: [
      {
        name: "Advertising Campaigns",
        spec: "End-to-end campaign concepts spanning film, print, and digital touchpoints",
        status: "Core Service",
      },
      {
        name: "Photography",
        spec: "Brand and product photography aligned with a campaign's visual identity",
        status: "Core Service",
      },
      {
        name: "Visual Design",
        spec: "Design work that carries a brand's tone across every asset it produces",
        status: "Core Service",
      },
    ],
  },
  {
    id: "digital",
    label: "Digital & Social",
    icon: <Smartphone className="h-4 w-4" />,
    items: [
      {
        name: "Social Media Content",
        spec: "Platform-native cutdowns and content built for feed-first attention",
        status: "Core Service",
      },
      {
        name: "Digital Storytelling",
        spec: "Content designed to carry a campaign from broadcast to screen",
        status: "Core Service",
      },
    ],
  },
  {
    id: "industries",
    label: "Industries We Serve",
    icon: <Layers className="h-4 w-4" />,
    items: [
      {
        name: "Food & Beverage",
        spec: "Campaign work across F&B brand storytelling",
        status: "Industry",
      },
      {
        name: "Lifestyle & Leisure",
        spec: "Lifestyle-led narratives for consumer and leisure brands",
        status: "Industry",
      },
      {
        name: "Sports",
        spec: "Sports-driven brand and campaign content",
        status: "Industry",
      },
      {
        name: "Technology",
        spec: "Product and brand films for technology companies",
        status: "Industry",
      },
      {
        name: "Pharmaceuticals",
        spec: "Campaign work within the pharmaceutical sector",
        status: "Industry",
      },
    ],
  },
];

// Signature motif: a clapperboard identification stripe — diagonal
// orange/black bands, the one visual borrowed directly from a film slate.
const SlateStripe = ({ className = "", height = 10 }) => (
  <div
    className={className}
    style={{
      height,
      backgroundImage: `repeating-linear-gradient(-45deg, ${COLORS.primary} 0px, ${COLORS.primary} 14px, ${COLORS.bg} 14px, ${COLORS.bg} 28px)`,
    }}
  />
);

export default function AboutGearDark() {
  const [activeTab, setActiveTab] = useState("film");
  const currentCategory = CAPABILITY_CATEGORIES.find(
    (cat) => cat.id === activeTab,
  );

  return (
    <section
      className="relative w-full py-24 overflow-hidden"
      style={{
        background: COLORS.bg,
        fontFamily: FONT_BODY,
        borderTop: `1px solid ${COLORS.border}`,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700;800&display=swap');
      `}</style>

      {/* Ambient glow, restrained to the accent color only */}
      <div
        className="absolute top-1/3 -right-32 h-96 w-96  pointer-events-none"
        style={{
          background: COLORS.primary,
          opacity: 0.08,
          filter: "blur(170px)",
        }}
      />
      <div
        className="absolute bottom-10 left-10 h-80 w-80  pointer-events-none"
        style={{
          background: COLORS.primary,
          opacity: 0.05,
          filter: "blur(150px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        {/* Header Block */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8"
          style={{ borderBottom: `1px solid ${COLORS.border}` }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5"
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full  opacity-60"
                  style={{ background: COLORS.primary }}
                />
                <span
                  className="relative inline-flex  h-2 w-2"
                  style={{ background: COLORS.primary }}
                />
              </span>
              <span
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: COLORS.primary }}
              >
                What We Do
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-5xl sm:text-7xl leading-[0.95] tracking-wide"
              style={{ fontFamily: FONT_HEAD, color: COLORS.heading }}
            >
              CAPABILITIES &{" "}
              <span style={{ color: COLORS.primary }}>INDUSTRIES</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-sm leading-relaxed font-light"
            style={{ color: COLORS.muted }}
          >
            End-to-end creative solutions across film, design, and digital media
            — tailored to each brand's goals, wherever their industry sits.
          </motion.p>
        </div>

        {/* Tab Navigation — styled as slate-board selectors */}
        <div className="mt-12 flex md:flex-wrap gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-6 px-6 sm:-mx-8 sm:px-8 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {CAPABILITY_CATEGORIES.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className="group relative overflow-hidden shrink-0 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                style={{
                  fontFamily: FONT_BODY,
                  border: `1px solid ${isActive ? COLORS.primary : COLORS.border}`,
                  background: isActive ? COLORS.primary : COLORS.surface,
                  color: isActive ? COLORS.secondary : COLORS.body,
                }}
              >
                <span className="flex items-center gap-2.5 px-6 py-3 whitespace-nowrap">
                  {category.icon}
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {currentCategory?.items.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative  p-8 flex flex-col justify-between transition-colors duration-200"
                  style={{
                    background: COLORS.surface,
                    border: `1px solid ${COLORS.border}`,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = COLORS.primary)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = COLORS.border)
                  }
                >
                  {/* left accent bar, appears on hover */}
                  <div
                    className="absolute left-0 top-0 h-full w-[3px]  opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: COLORS.primary }}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="inline-flex items-center gap-2  px-3 py-1 text-[10px] font-semibold uppercase tracking-widest"
                        style={{
                          background: "rgba(251,84,6,0.08)",
                          color: COLORS.primary,
                          border: `1px solid rgba(251,84,6,0.25)`,
                        }}
                      >
                        <span
                          className="h-1.5 w-1.5 "
                          style={{ background: COLORS.primary }}
                        />
                        {item.status}
                      </span>
                    </div>

                    <h3
                      className="text-2xl tracking-wide"
                      style={{ fontFamily: FONT_HEAD, color: COLORS.heading }}
                    >
                      {item.name.toUpperCase()}
                    </h3>

                    <p
                      className="mt-3 text-sm leading-relaxed"
                      style={{ color: COLORS.muted }}
                    >
                      {item.spec}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative mt-16  p-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden"
          style={{
            background: COLORS.secondary,
            border: `1px solid ${COLORS.border}`,
          }}
        >
          <div className="absolute top-0 left-0 w-full"></div>

          <div>
            <h4
              className="text-2xl tracking-wide"
              style={{ fontFamily: FONT_HEAD, color: COLORS.heading }}
            >
              HAVE A PROJECT THAT FITS ONE OF THESE?
            </h4>
            <p className="mt-1 text-xs" style={{ color: COLORS.muted }}>
              Tell us about your brand, timeline, and goals — we'll take it from
              concept to final delivery.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2  px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors duration-200"
            style={{ background: COLORS.primary, color: COLORS.secondary }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = COLORS.hover)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = COLORS.primary)
            }
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
