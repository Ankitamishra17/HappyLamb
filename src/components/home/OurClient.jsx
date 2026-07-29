import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const BASE = "#090909";
const SURFACE = "#F4F1EC"; // light highlight card background so logos show true color
const HAIR = "#2A2A2A";
const ORANGE = "#FB5406";
const INK = "#FFFFFF";
const MUTED = "#8D8D8D";
const FONT_DISPLAY = "'Bebas Neue', sans-serif";
const FONT_BODY = "Poppins, sans-serif";
const FONT_MONO = "'JetBrains Mono', 'Courier New', monospace";

const CLIENTS = [
  { name: "Prompt Interiors", src: "/client1.jpeg" },
  { name: "Skyway Motors", src: "/client2.jpg" },
  { name: "Cofsils", src: "/clent3.png" },
];

// Duplicate the set so the belt can loop seamlessly
const REEL = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];
const SPEED_PX_PER_FRAME = 0.6;

export default function OurClients() {
  const scrollerRef = useRef(null);
  const rafRef = useRef(null);
  const isPaused = useRef(false);

  const isDown = useRef(false);
  const dragged = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const [hoveredIdx, setHoveredIdx] = useState(null);

  const tick = useCallback(() => {
    const el = scrollerRef.current;
    if (el && !isPaused.current && !isDown.current) {
      el.scrollLeft += SPEED_PX_PER_FRAME;
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
      }
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  function handlePointerDown(e) {
    const el = scrollerRef.current;
    if (!el) return;
    isDown.current = true;
    dragged.current = false;
    startX.current = e.clientX;
    startScroll.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e) {
    const el = scrollerRef.current;
    if (!el || !isDown.current) return;
    const delta = e.clientX - startX.current;
    if (Math.abs(delta) > 6) dragged.current = true;
    el.scrollLeft = startScroll.current - delta;
  }

  function endDrag() {
    isDown.current = false;
  }

  return (
    <section
      className="relative w-full py-24 overflow-hidden border-t border-b"
      style={{
        background: BASE,
        color: INK,
        fontFamily: FONT_BODY,
        borderColor: HAIR,
      }}
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
    >
      <style>{`
        .client-reel::-webkit-scrollbar { display: none; }
        .client-reel { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] blur-[150px] pointer-events-none"
        style={{ background: "rgba(251,84,6,0.08)" }}
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mb-14 md:mb-16"
        >
          <p
            className="text-xs md:text-sm font-semibold tracking-[0.3em] mb-4"
            style={{ color: ORANGE }}
          >
            THE REEL
          </p>
          <h2
            className="uppercase text-[32px] sm:text-[38px] md:text-[42px] tracking-wide mb-3"
            style={{ fontFamily: FONT_DISPLAY }}
          >
            <span style={{ color: INK }}>Our</span>{" "}
            <span style={{ color: ORANGE }}>Clients</span>
          </h2>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="block h-[3px]"
            style={{ backgroundColor: ORANGE }}
          />
        </motion.div>

        {/* Draggable, auto-scrolling filmstrip */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-20" />

          <div
            ref={scrollerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            className="client-reel flex items-stretch gap-5 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
          >
            {REEL.map((client, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="relative shrink-0 w-[220px] sm:w-[260px]  border flex flex-col items-center justify-center gap-4 px-8 py-10"
                  style={{
                    backgroundColor: SURFACE,
                    borderColor: isHovered ? ORANGE : "rgba(0,0,0,0.08)",
                    boxShadow: isHovered
                      ? "0 8px 24px rgba(251,84,6,0.15)"
                      : "0 4px 14px rgba(0,0,0,0.25)",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <span
                    className="absolute top-3 left-3 h-3 w-3 border-l border-t transition-colors duration-300"
                    style={{
                      borderColor: isHovered ? ORANGE : "rgba(0,0,0,0.15)",
                    }}
                  />
                  <span
                    className="absolute top-3 right-3 h-3 w-3 border-r border-t transition-colors duration-300"
                    style={{
                      borderColor: isHovered ? ORANGE : "rgba(0,0,0,0.15)",
                    }}
                  />
                  <span
                    className="absolute bottom-3 left-3 h-3 w-3 border-l border-b transition-colors duration-300"
                    style={{
                      borderColor: isHovered ? ORANGE : "rgba(0,0,0,0.15)",
                    }}
                  />
                  <span
                    className="absolute bottom-3 right-3 h-3 w-3 border-r border-b transition-colors duration-300"
                    style={{
                      borderColor: isHovered ? ORANGE : "rgba(0,0,0,0.15)",
                    }}
                  />

                  <img
                    src={client.src}
                    alt={client.name}
                    draggable={false}
                    className="h-14 sm:h-16 w-auto object-contain pointer-events-none"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
