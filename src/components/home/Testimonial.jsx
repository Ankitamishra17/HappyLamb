import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PAPER = "#F7F5F1";
const CARD = "#FFFFFF";
const BORDER = "#E3E0DA";
const ORANGE = "#FB5406";
const INK = "#1A1A1A";
const BODY = "#4A4A4A";
const MUTED = "#8D8D8D";
const FONT_DISPLAY = "'Bebas Neue', sans-serif";
const FONT_BODY = "Poppins, sans-serif";
const FONT_MONO = "'JetBrains Mono', 'Courier New', monospace";

const TESTIMONIALS = [
  {
    frame: "014",
    name: "Ariana Kapoor",
    role: "Marketing Head, Skyway Motors",
    quote:
      "Framecraft turned our product launch into a cinematic experience. The team understood our brand instantly and delivered footage that felt genuinely premium.",
    tilt: -2.5,
  },
  {
    frame: "027",
    name: "Rohan Malhotra",
    role: "Founder, Prompt Interiors",
    quote:
      "From the first call to final delivery, everything was smooth and professional. Our brand film has become the centerpiece of every client pitch we do.",
    tilt: 3,
  },
  {
    frame: "041",
    name: "Sana Iyer",
    role: "Brand Manager, Cofsils",
    quote:
      "Precise, creative and always on schedule. The aerial shots they captured elevated our campaign far beyond what we imagined possible.",
    tilt: -1.5,
  },
];

const AUTO_ADVANCE_MS = 4500;

function Sprockets() {
  return (
    <div className="flex justify-between px-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          className="h-2 w-2 "
          style={{ backgroundColor: BORDER }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [order, setOrder] = useState(TESTIMONIALS.map((_, i) => i));
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  function advance() {
    setOrder((o) => [...o.slice(1), o[0]]);
  }

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(advance, AUTO_ADVANCE_MS);
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  const len = TESTIMONIALS.length;

  return (
    <section
      className="w-full"
      style={{ backgroundColor: PAPER }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Copy column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <p
              className="text-xs md:text-sm font-semibold tracking-[0.3em] mb-4"
              style={{ color: ORANGE, fontFamily: FONT_BODY }}
            >
              CONTACT SHEET
            </p>
            <h2
              className="uppercase text-[36px] sm:text-[48px] md:text-[52px] tracking-wide leading-[0.95]"
              style={{ fontFamily: FONT_DISPLAY, color: INK }}
            >
              Frames Worth <span style={{ color: ORANGE }}>Keeping.</span>
            </h2>
            <p
              className="mt-5 text-sm md:text-base max-w-sm"
              style={{ color: MUTED, fontFamily: FONT_BODY }}
            >
              A few frames pulled straight from client reviews — tap the stack
              to cycle through them.
            </p>

            <button
              type="button"
              onClick={advance}
              className="mt-9 inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase group"
              style={{ color: INK, fontFamily: FONT_BODY }}
            >
              <span
                className="h-10 w-10  flex items-center justify-center transition-colors duration-200"
                style={{ border: `1px solid ${BORDER}`, backgroundColor: CARD }}
              >
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  style={{ color: ORANGE }}
                />
              </span>
              Next Frame
            </button>
          </motion.div>

          {/* Stack column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 relative h-[420px] sm:h-[380px]"
          >
            {order.map((tIdx, pos) => {
              const t = TESTIMONIALS[tIdx];
              const isFront = pos === 0;
              const scale = 1 - pos * 0.05;
              const y = pos * 16;
              const x = pos * 10;
              const rotate = isFront ? 0 : t.tilt;
              const z = len - pos;

              return (
                <motion.div
                  key={tIdx}
                  layout
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                  animate={{ scale, y, x, rotate, opacity: 1 }}
                  onClick={isFront ? advance : undefined}
                  className="absolute inset-0  border overflow-hidden"
                  style={{
                    zIndex: z,
                    backgroundColor: CARD,
                    borderColor: BORDER,
                    cursor: isFront ? "pointer" : "default",
                    pointerEvents: isFront ? "auto" : "none",
                    boxShadow: isFront
                      ? "0 24px 50px rgba(26,26,26,0.14)"
                      : "0 10px 24px rgba(26,26,26,0.08)",
                  }}
                >
                  <div className="pt-3">
                    <Sprockets />
                  </div>

                  <div className="px-7 sm:px-10 py-6 sm:py-8 flex flex-col h-full justify-between">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[11px] tracking-[0.25em]"
                        style={{ color: ORANGE, fontFamily: FONT_MONO }}
                      >
                        FR. {t.frame}
                      </span>
                      <span
                        className="text-[11px] tracking-[0.25em]"
                        style={{ color: MUTED, fontFamily: FONT_MONO }}
                      >
                        {String(pos + 1).padStart(2, "0")} / {String(len).padStart(2, "0")}
                      </span>
                    </div>

                    <p
                      className="text-lg sm:text-xl md:text-[22px] leading-relaxed"
                      style={{ color: INK, fontFamily: FONT_BODY, fontWeight: 400 }}
                    >
                      {t.quote}
                    </p>

                    <div className="flex items-center gap-3">
                      <span className="h-px w-8" style={{ backgroundColor: ORANGE }} />
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: INK, fontFamily: FONT_BODY }}
                        >
                          {t.name}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: MUTED, fontFamily: FONT_BODY }}
                        >
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-3">
                    <Sprockets />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}