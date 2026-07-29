import { motion } from "framer-motion";
import { TrendingUp, Clock, ArrowUpRight } from "lucide-react";

const DARK_PALETTE = {
  BG: "#090909",
  CARD_BG: "#141414",
  ORANGE: "#FB5406",
  ORANGE_HOVER: "#FF6B1A",
  BORDER: "#2A2A2A",
  BORDER_ACTIVE: "rgba(251, 84, 6, 0.4)",
  TEXT_PRIMARY: "#FFFFFF",
  TEXT_MUTED: "#C9C9C9",
  TEXT_FAINT: "#8D8D8D",
};

const FONTS = {
  heading: "'Bebas Neue', 'Oswald', 'Arial Narrow', sans-serif",
  body: "'Poppins', 'Helvetica Neue', sans-serif",
};

// Cinema & Editorial Background Image
const BG_IMAGE = "2.png";

// Featured Blog Article Highlight
const FEATURED_POST = {
  category: "Production Insights",
  title: "The Art of Anamorphic Lenses in Modern Brand Commercials",
  readTime: "6 min read",
  date: "2026 Edition",
  image:
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop",
};

const TRENDING_TOPICS = [
  { name: "Directing", count: "14 articles" },
  { name: "Cinematography", count: "22 articles" },
  { name: "Post-Production", count: "18 articles" },
];

export default function BlogHero() {
  return (
    <section
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden px-6 lg:px-[96px] py-20 text-white"
      style={{ backgroundColor: DARK_PALETTE.BG, fontFamily: FONTS.body }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700&display=swap"
      />

      {/* Background Image Layer with Vignette Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMAGE}
          alt="Studio set and lens background"
          className="h-full w-full object-cover object-center scale-105"
        />
        
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:gap-16 lg:grid-cols-12">
        {/* Left Column — Editorial Manifesto & Header */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: DARK_PALETTE.ORANGE }}
          >
            <span
              className="w-6 h-px"
              style={{ backgroundColor: DARK_PALETTE.ORANGE }}
            />
            The Journal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="uppercase leading-[0.9] tracking-tight"
            style={{
              fontFamily: FONTS.heading,
              fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
              color: DARK_PALETTE.TEXT_PRIMARY,
            }}
          >
            Behind the
            <br />
            <span style={{ color: DARK_PALETTE.ORANGE }}>
              scenes &amp; story
            </span>
            <br />
            craft
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-lg text-[15px] leading-relaxed font-light"
            style={{ color: DARK_PALETTE.TEXT_MUTED }}
          >
            Deep dives into filmmaking techniques, campaign breakdowns, lighting
            setups, and industry insights directly from our directors,
            producers, and creative crew.
          </motion.p>

          {/* Trending Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="pt-4 border-t"
            style={{ borderColor: DARK_PALETTE.BORDER }}
          >
            <p
              className="text-[10px] uppercase font-semibold tracking-widest mb-3 flex items-center gap-1.5"
              style={{ color: DARK_PALETTE.TEXT_FAINT }}
            >
              <TrendingUp
                className="w-3.5 h-3.5"
                style={{ color: DARK_PALETTE.ORANGE }}
              />
              Popular Categories
            </p>
            <div className="flex flex-wrap gap-2">
              {TRENDING_TOPICS.map((topic, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-md border backdrop-blur-md text-xs font-medium transition-colors cursor-pointer"
                  style={{
                    borderColor: DARK_PALETTE.BORDER,
                    backgroundColor: "rgba(255,255,255,0.04)",
                    color: DARK_PALETTE.TEXT_MUTED,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor =
                      DARK_PALETTE.BORDER_ACTIVE)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = DARK_PALETTE.BORDER)
                  }
                >
                  {topic.name}{" "}
                  <span
                    style={{ color: DARK_PALETTE.ORANGE }}
                    className="text-[10px] ml-1"
                  >
                    ({topic.count})
                  </span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>

    
        
      </div>
    </section>
  );
}
