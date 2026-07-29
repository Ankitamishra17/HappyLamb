import { motion } from "framer-motion";
import { Camera, Eye, SlidersHorizontal, Clapperboard } from "lucide-react";

/* ---------------------------------------------------------
   TOKENS — shared with the capabilities section (light theme)
   Fonts: Bebas Neue (headings) / Poppins (body + UI)
--------------------------------------------------------- */
const COLORS = {
  primary: "#FB5406",
  secondary: "#1A1A1A",
  bg: "#FAF9F7",
  surface: "#FFFFFF",
  border: "#E7E4DF",
  heading: "#1A1A1A",
  body: "#4B4B4B",
  muted: "#8D8D8D",
};

const FONT_HEAD = "'Bebas Neue', sans-serif";
const FONT_BODY = "'Poppins', sans-serif";

const PHILOSOPHIES = [
  {
    icon: <Eye className="h-5 w-5" style={{ color: COLORS.primary }} />,
    frame: "01",
    title: "Intentional Framing",
    desc: "Every frame must serve the story. We don't shoot filler content — every camera motion, focal length choice, and lighting cue is calculated.",
  },
  {
    icon: (
      <SlidersHorizontal
        className="h-5 w-5"
        style={{ color: COLORS.primary }}
      />
    ),
    frame: "02",
    title: "Color as Emotion",
    desc: "Color grading isn't just applying LUTs. It's crafting atmospheric palettes in DaVinci Resolve that evoke felt emotion before a word is spoken.",
  },
  {
    icon: (
      <Clapperboard className="h-5 w-5" style={{ color: COLORS.primary }} />
    ),
    frame: "03",
    title: "Narrative Pacing",
    desc: "Whether it's a 30-second high-energy commercial or a slow-burn documentary, rhythm and sound design dictate audience retention.",
  },
];

const MILESTONES = [
  {
    year: "2023",
    title: "Indie Roots & FPV Aerials",
    desc: "Started filming high-speed action sports and outdoor travel documentaries.",
  },
  {
    year: "2024",
    title: "Commercial Transition",
    desc: "Directed first major brand campaign for regional tech and automotive brands.",
  },
  {
    year: "2025",
    title: "Global Campaigns & RED Rig",
    desc: "Expanded to international 8K cinema productions and festival short films.",
  },
  {
    year: "Present",
    title: "Full-Scale Production",
    desc: "Leading commercial directors, post-production color pipelines, and aerial teams.",
  },
];

// Perforation strip — the signature motif for this section: a punched
// film-edge bar, standing in for the numbered-card grid the rest of the
// site uses. Reads as an actual strip of celluloid running along frames.
const Sprockets = ({ count = 6 }) => (
  <div
    className="flex items-center justify-between px-4"
    style={{ background: COLORS.secondary, height: 14 }}
  >
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="h-2 w-2 " style={{ background: COLORS.bg }} />
    ))}
  </div>
);

export default function AboutBio() {
  return (
    <section
      className="relative w-full overflow-hidden py-24"
      style={{
        background: COLORS.bg,
        color: COLORS.body,
        borderTop: `1px solid ${COLORS.border}`,
        borderBottom: `1px solid ${COLORS.border}`,
        fontFamily: FONT_BODY,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700;800&display=swap');
      `}</style>

      <div
        className="pointer-events-none absolute top-1/3 left-0 h-96 w-96 "
        style={{
          background: COLORS.primary,
          opacity: 0.06,
          filter: "blur(160px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* SECTION 1: STORY & BIO */}
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12">
          {/* Left Column: Portrait with a timecode ID plate instead of a floating card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="mx-auto max-w-md lg:max-w-none">
              <div
                className="overflow-hidden "
                style={{
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: "0 20px 40px -20px rgba(26,26,26,0.15)",
                }}
              >
                <div
                  className="relative aspect-[4/5] w-full"
                  style={{ background: COLORS.surface }}
                >
                  <img
                    src="/dilip.webp"
                    alt="Director behind the scenes"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <span
                    className="absolute top-4 left-4  px-2 py-1 text-[10px] font-semibold tracking-widest"
                    style={{
                      background: "rgba(9,9,9,0.55)",
                      color: "#FFFFFF",
                      fontFamily: FONT_BODY,
                    }}
                  >
                    ● REC 00:04:12:08
                  </span>
                </div>

                {/* ID plate — reads like a slate label bolted under the frame */}
                <div
                  className="flex items-center gap-3 p-4"
                  style={{ background: COLORS.secondary }}
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center "
                    style={{ background: "rgba(251,84,6,0.12)" }}
                  >
                    <Camera
                      className="h-4 w-4"
                      style={{ color: COLORS.primary }}
                    />
                  </div>
                  <div>
                    <span
                      className="block text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: COLORS.primary }}
                    >
                      Production Mindset
                    </span>
                    <p className="text-xs font-medium text-white/90">
                      Obsessed with light, motion, and raw human emotion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5"
            >
              <span
                className="h-1.5 w-1.5 "
                style={{ background: COLORS.primary }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: COLORS.primary }}
              >
                My Journey
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-4xl uppercase leading-[0.95] tracking-wide sm:text-5xl"
              style={{ fontFamily: FONT_HEAD, color: COLORS.heading }}
            >
              Bridging Commercial Rigor with{" "}
              <span style={{ color: COLORS.primary }}>Artistic Vision.</span>
            </motion.h2>

            {/* Pull quote replaces the second paragraph as a standalone editorial element */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-6 pl-5 text-base italic leading-relaxed sm:text-lg"
              style={{
                borderLeft: `3px solid ${COLORS.primary}`,
                color: COLORS.heading,
              }}
            >
              "Every brand or narrative has a unique pulse — my job is finding
              that rhythm through lighting, camera placement, and precision
              color grading in post."
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-sm leading-relaxed sm:text-base"
            >
              We are mumbai based company, we specialize in collaborating with
              new and not so new companies across many industries to amplify
              thier marketing performance. Happy lamb production works with feel
              good brands including food and drink, health and lifestyle, sports
              and technology, pharmaceutical and leisure. we help brands to tell
              their stories in the most creative way using mix of creativity ,
              technology, ideas and passion.
            </motion.p>

            {/* Spec-sheet stats — a horizontal strip instead of a card grid */}
            <div
              className="mt-8 flex flex-wrap divide-x "
              style={{
                border: `1px solid ${COLORS.border}`,
                background: COLORS.surface,
                borderColor: COLORS.border,
              }}
            >
              {[
                { label: "RAW Workflows", value: "4K / 8K" },
                { label: "Custom Color LUTs", value: "100%" },
                { label: "Location Access", value: "Global" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex-1 min-w-[120px] px-6 py-5"
                  style={{ borderColor: COLORS.border }}
                >
                  <span
                    className="block text-2xl tracking-wide"
                    style={{ fontFamily: FONT_HEAD, color: COLORS.heading }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="mt-0.5 block text-[11px] font-semibold uppercase tracking-wider"
                    style={{ color: COLORS.muted }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2: CREATIVE PHILOSOPHY — filmstrip frames */}
        <div className="mt-28">
          <div className="mx-auto max-w-2xl text-center">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: COLORS.primary }}
            >
              Directing Pillars
            </span>
            <h3
              className="mt-2 text-3xl uppercase tracking-wide sm:text-4xl"
              style={{ fontFamily: FONT_HEAD, color: COLORS.heading }}
            >
              The Creative Philosophy
            </h3>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PHILOSOPHIES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                className="overflow-hidden "
                style={{
                  border: `1px solid ${COLORS.border}`,
                  background: COLORS.surface,
                }}
              >
                <div className="p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className="flex h-10 w-10 items-center justify-center "
                      style={{ background: "rgba(251,84,6,0.08)" }}
                    >
                      {item.icon}
                    </div>
                    <span
                      className="text-[11px] font-semibold tracking-widest"
                      style={{ color: COLORS.muted, fontFamily: FONT_BODY }}
                    >
                      FRAME {item.frame}
                    </span>
                  </div>
                  <h4
                    className="text-xl tracking-wide"
                    style={{ fontFamily: FONT_HEAD, color: COLORS.heading }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="mt-3 text-xs leading-relaxed sm:text-sm"
                    style={{ color: COLORS.muted }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 3: MILESTONES — a running counter instead of a card grid */}
        <div
          className="mt-28 pt-16"
          style={{ borderTop: `1px solid ${COLORS.border}` }}
        >
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: COLORS.primary }}
              >
                Career Progression
              </span>
              <h3
                className="mt-2 text-3xl uppercase tracking-wide sm:text-4xl"
                style={{ fontFamily: FONT_HEAD, color: COLORS.heading }}
              >
                Key Milestones
              </h3>
            </div>
            <p
              className="max-w-md text-xs sm:text-sm"
              style={{ color: COLORS.muted }}
            >
              A chronological look at how our production scale and technical
              setup evolved over time.
            </p>
          </div>

          {/* Desktop: waveform-style counter hanging off a shared timeline */}
          <div
            className="hidden md:flex"
            style={{ borderTop: `1px solid ${COLORS.border}` }}
          >
            {MILESTONES.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                className="flex flex-1 flex-col items-center text-center px-4"
              >
                <div
                  className="w-px"
                  style={{
                    height: idx % 2 === 0 ? 20 : 52,
                    background: COLORS.border,
                  }}
                />
                <span
                  className="h-2.5 w-2.5 "
                  style={{ background: COLORS.primary }}
                />
                <div className="mt-4">
                  <span
                    className="text-3xl tracking-wide"
                    style={{ fontFamily: FONT_HEAD, color: COLORS.primary }}
                  >
                    {m.year}
                  </span>
                  <h4
                    className="mt-2 text-sm font-bold"
                    style={{ color: COLORS.heading }}
                  >
                    {m.title}
                  </h4>
                  <p
                    className="mt-1.5 text-xs leading-relaxed"
                    style={{ color: COLORS.muted }}
                  >
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: vertical stem list */}
          <div className="flex flex-col gap-8 md:hidden">
            {MILESTONES.map((m, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className="h-2.5 w-2.5 shrink-0 "
                    style={{ background: COLORS.primary }}
                  />
                  {idx !== MILESTONES.length - 1 && (
                    <div
                      className="mt-1 w-px flex-1"
                      style={{ background: COLORS.border }}
                    />
                  )}
                </div>
                <div className="pb-2">
                  <span
                    className="text-2xl tracking-wide"
                    style={{ fontFamily: FONT_HEAD, color: COLORS.primary }}
                  >
                    {m.year}
                  </span>
                  <h4
                    className="mt-1 text-sm font-bold"
                    style={{ color: COLORS.heading }}
                  >
                    {m.title}
                  </h4>
                  <p
                    className="mt-1.5 text-xs leading-relaxed"
                    style={{ color: COLORS.muted }}
                  >
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
