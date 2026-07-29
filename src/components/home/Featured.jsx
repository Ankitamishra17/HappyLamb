import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);
import {
  ArrowUpRight,
  Play,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ---------- Design tokens ---------- */
const GOLD = "#fb5406";
const INK = "#FFFFFF";
const MUTED = "rgba(255,255,255,0.55)";
const BASE = "#050505";
const PANEL = "#0a0a0a";
const HAIR = "rgba(255,255,255,0.08)";

const FONT_DISPLAY = "'Bebas Neue', sans-serif";
const FONT_BODY = "'Poppins', sans-serif";
const FONT_MONO = "'Poppins', sans-serif";

// Only Tata Hitachi videos, per client request.
// Titles are PLACEHOLDERS — swap in the real project/episode names,
// the video IDs are correct and pulled straight from the links forwarded.
const PROJECTS = [
  {
    id: 101,
    title: "Tata Hitachi — Project 1",
    category: "Brand Films",
    client: "Tata Hitachi",
    thumbnail: "https://img.youtube.com/vi/qcxQbzOzR70/hqdefault.jpg",
    videoUrl: "https://youtu.be/qcxQbzOzR70",
  },
  {
    id: 102,
    title: "Hailstone — Project 4",
    category: "Brand Films",
    client: "Hailstone",
    thumbnail: "https://img.youtube.com/vi/IM0o43ah_ss/hqdefault.jpg",
    videoUrl: "https://youtu.be/IM0o43ah_ss",
    tags: ["Brand Film"],
  },
  {
    id: 103,
    title: "Tata Hitachi — Project 2",
    category: "Brand Films",
    client: "Tata Hitachi",
    thumbnail: "https://img.youtube.com/vi/mdtj7MOb_8U/hqdefault.jpg",
    videoUrl: "https://youtu.be/mdtj7MOb_8U",
  },
  {
    id: 104,
    title: "Tata Hitachi — Project 3",
    category: "Brand Films",
    client: "Tata Hitachi",
    thumbnail: "https://img.youtube.com/vi/-ZBTxUT_zAg/hqdefault.jpg",
    videoUrl: "https://youtu.be/-ZBTxUT_zAg",
  },
  {
    id: 105,
    title: "Hailstone — Project 5",
    category: "Brand Films",
    client: "Hailstone",
    thumbnail: "https://img.youtube.com/vi/ozq9eaAEggo/hqdefault.jpg",
    videoUrl: "https://youtu.be/ozq9eaAEggo",
    tags: ["Brand Film"],
  },
  {
    id: 106,
    title: "Tata Hitachi — Project 4",
    category: "Brand Films",
    client: "Tata Hitachi",
    thumbnail: "https://img.youtube.com/vi/lySOjprzueE/hqdefault.jpg",
    videoUrl: "https://youtu.be/lySOjprzueE",
  },
  {
    id: 107,
    title: "Tata Hitachi — Project 5",
    category: "Brand Films",
    client: "Tata Hitachi",
    thumbnail: "https://img.youtube.com/vi/39Cka5MciW8/hqdefault.jpg",
    videoUrl: "https://youtu.be/39Cka5MciW8",
  },
  {
    id: 108,
    title: "Tata Hitachi — Project 6",
    category: "Brand Films",
    client: "Tata Hitachi",
    thumbnail: "https://img.youtube.com/vi/VuiOXiYmGqs/hqdefault.jpg",
    videoUrl: "https://youtu.be/VuiOXiYmGqs",
  },
  {
    id: 109,
    title: "Tata Hitachi — Project 7",
    category: "Brand Films",
    client: "Tata Hitachi",
    thumbnail: "https://img.youtube.com/vi/JGhwVETg3tM/hqdefault.jpg",
    videoUrl: "https://youtu.be/JGhwVETg3tM",
  },
  {
    id: 110,
    title: "Tata Hitachi — Project 8",
    category: "Brand Films",
    client: "Tata Hitachi",
    thumbnail: "https://img.youtube.com/vi/BjVIJHfOvEI/hqdefault.jpg",
    videoUrl: "https://youtu.be/BjVIJHfOvEI",
  },
];

/* ---------- Square tilt card ---------- */
function TiltCard({ project }) {
  const ref = useRef(null);

  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);

  const springCfg = { stiffness: 180, damping: 18, mass: 0.6 };
  const rotXs = useSpring(rotX, springCfg);
  const rotYs = useSpring(rotY, springCfg);

  const imgX = useTransform(rotYs, [-10, 10], [10, -10]);
  const imgY = useTransform(rotXs, [-10, 10], [-10, 10]);

  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${spotX}% ${spotY}%, rgba(251,84,6,0.18), transparent 65%)`;

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotY.set((px - 0.5) * 14);
    rotX.set((0.5 - py) * 14);
    spotX.set(px * 100);
    spotY.set(py * 100);
  }

  function handleLeave() {
    rotX.set(0);
    rotY.set(0);
    spotX.set(50);
    spotY.set(50);
  }

  function openReel() {
    if (project.videoUrl) {
      window.open(project.videoUrl, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      className="snap-start shrink-0 w-[300px] sm:w-[360px]"
      style={{ perspective: 1000 }}
    >
      <motion.button
        ref={ref}
        type="button"
        onClick={openReel}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        aria-label={`Play ${project.title}`}
        style={{
          rotateX: rotXs,
          rotateY: rotYs,
          transformStyle: "preserve-3d",
        }}
        className="group relative block w-full text-left overflow-hidden cursor-pointer"
      >
        {/* full-bleed frame */}
        <div className="relative w-full overflow-hidden aspect-[4/5] border border-white/[0.08] transition-colors duration-300 group-hover:border-[#fb5406]/50">
          <motion.img
            src={project.thumbnail}
            alt={project.title}
            style={{ x: imgX, y: imgY, scale: 1.15 }}
            className="h-full w-full object-cover pointer-events-none select-none transition-[filter] duration-500"
            draggable={false}
          />

          {/* cursor spotlight */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: spotlight }}
          />

          {/* base readability gradient, deepens on hover */}
          <div
            className="absolute inset-0 z-10 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 32%, rgba(0,0,0,0.05) 55%, transparent 70%)",
            }}
          />

          {/* index tab — reinforces this is a reel in a numbered strip */}
          <div
            className="absolute top-0 left-0 z-20 flex items-center gap-2 px-3.5 py-2"
            style={{
              background: "rgba(5,5,5,0.7)",
              backdropFilter: "blur(6px)",
            }}
          >
            <span
              className="text-xs font-semibold"
              style={{ fontFamily: FONT_MONO, color: GOLD }}
            >
              {String(project.id).slice(-2)}
            </span>
            <span className="h-1 w-1 " style={{ background: HAIR }} />
            <span
              className="text-[10px] uppercase tracking-[0.15em]"
              style={{ fontFamily: FONT_MONO, color: MUTED }}
            >
              {project.client}
            </span>
          </div>

          {/* play affordance — centered, understated until hover */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.06 }}
              className="flex h-16 w-16 items-center justify-center  backdrop-blur-md transition-all duration-300 group-hover:scale-105"
              style={{
                border: `1.5px solid rgba(251,84,6,0.6)`,
                background: "rgba(5,5,5,0.35)",
              }}
            >
              <Play
                className="h-5 w-5 translate-x-0.5 transition-colors duration-300"
                style={{ color: GOLD }}
                fill={GOLD}
              />
            </motion.div>
          </div>

          {/* content anchored to the frame itself, not a separate panel below */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-5">
            <div
              className="text-[10px] uppercase tracking-[0.2em] mb-2"
              style={{ fontFamily: FONT_MONO, color: GOLD }}
            >
              {project.category}
            </div>
            <h3
              className="leading-[0.95] text-2xl sm:text-[28px] mb-3"
              style={{ fontFamily: FONT_DISPLAY, color: INK }}
            >
              {project.title}
            </h3>

            <div
              className="flex items-center gap-1.5 text-xs font-semibold opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
              style={{ color: GOLD }}
            >
              View Reel <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}

export default function FeaturedWork() {
  const categories = useMemo(
    () => ["All Projects", ...new Set(PROJECTS.map((p) => p.category))],
    [],
  );
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollerRef = useRef(null);
  const isDown = useRef(false);
  const dragged = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const filteredProjects =
    activeCategory === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((item) => item.category === activeCategory);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < max - 4);
    setScrollProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, filteredProjects.length]);

  // switching category should reset scroll position, not leave the
  // strip wherever it happened to be for the previous filter
  useEffect(() => {
    scrollerRef.current?.scrollTo({ left: 0 });
  }, [activeCategory]);

  function scrollByAmount(amount) {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  function handleWheel(e) {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.currentTarget.scrollLeft += e.deltaY;
    }
  }

  function handlePointerDown(e) {
    const el = scrollerRef.current;
    if (!el) return;
    isDown.current = true;
    dragged.current = false;
    startX.current = e.clientX;
    startScroll.current = el.scrollLeft;
    el.style.scrollSnapType = "none";
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
    const el = scrollerRef.current;
    if (!el) return;
    isDown.current = false;
    el.style.scrollSnapType = "";
    if (dragged.current) {
      const swallow = (ev) => {
        ev.stopPropagation();
        ev.preventDefault();
      };
      el.addEventListener("click", swallow, { capture: true, once: true });
      setTimeout(() => (dragged.current = false), 0);
    }
  }

  return (
    <section
      className="relative w-full py-16 overflow-hidden"
      style={{ background: BASE, color: INK, fontFamily: FONT_BODY }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&display=swap');
        .fw-scroller::-webkit-scrollbar { display: none; }
        .fw-scroller { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>

      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] bg-gradient-to-b from-[#fb5406]/10 via-transparent to-transparent blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 relative z-10">
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b"
          style={{ borderColor: HAIR }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
              style={{
                border: `1px solid rgba(251,84,6,0.35)`,
                background: "rgba(251,84,6,0.08)",
                color: GOLD,
              }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Selected Portfolio</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 uppercase font-heading text-4xl sm:text-5xl lg:text-5xl tracking-tight leading-none"
            >
              Crafted for <span style={{ color: GOLD }}>Iconic Brands.</span>
            </motion.h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* category filter — was defined in state but never rendered */}
            {categories.length > 2 && (
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => {
                  const active = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
                      style={{
                        border: `1px solid ${active ? GOLD : HAIR}`,
                        background: active
                          ? "rgba(251,84,6,0.1)"
                          : "transparent",
                        color: active ? GOLD : MUTED,
                      }}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            )}

            {/* scroll arrows — desktop only */}
            <div className="hidden md:flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByAmount(-360)}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className="h-11 w-11 flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ border: `1px solid ${HAIR}`, background: PANEL }}
                onMouseEnter={(e) =>
                  canScrollLeft &&
                  (e.currentTarget.style.borderColor = "rgba(251,84,6,0.5)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = HAIR)}
              >
                <ChevronLeft className="h-4 w-4" style={{ color: INK }} />
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount(360)}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className="h-11 w-11 flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ border: `1px solid ${HAIR}`, background: PANEL }}
                onMouseEnter={(e) =>
                  canScrollRight &&
                  (e.currentTarget.style.borderColor = "rgba(251,84,6,0.5)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = HAIR)}
              >
                <ChevronRight className="h-4 w-4" style={{ color: INK }} />
              </button>
            </div>
          </div>
        </div>

        {/* horizontal filmstrip */}
        <div className="relative mt-12">
          <div
            ref={scrollerRef}
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            className="fw-scroller flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 cursor-grab active:cursor-grabbing select-none"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <TiltCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </div>

          {/* scroll progress — segmented like filmstrip perforations, with a live counter
              instead of one plain unlabeled line */}
          <div className="mt-6 flex items-center gap-4">
            <span
              className="text-xs font-semibold tabular-nums shrink-0"
              style={{ fontFamily: FONT_MONO, color: GOLD }}
            >
              {String(
                Math.min(
                  Math.round(scrollProgress * (filteredProjects.length - 1)) +
                    1,
                  filteredProjects.length,
                ),
              ).padStart(2, "0")}
            </span>

            <div className="relative flex-1 flex items-center gap-1.5">
              {filteredProjects.map((project, i) => {
                const segmentActive =
                  i <=
                  Math.round(scrollProgress * (filteredProjects.length - 1));
                return (
                  <span
                    key={project.id}
                    className="h-[3px] flex-1  overflow-hidden"
                    style={{ background: HAIR }}
                  >
                    <motion.span
                      className="block h-full"
                      style={{ background: GOLD }}
                      animate={{ width: segmentActive ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                );
              })}
            </div>

            <span
              className="text-xs font-semibold tabular-nums shrink-0"
              style={{ fontFamily: FONT_MONO, color: MUTED }}
            >
              {String(filteredProjects.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <MotionLink
            to="/work"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-3 px-10 py-4 text-xs font-bold uppercase tracking-widest transition-colors duration-300"
            style={{
              border: `1px solid rgba(251,84,6,0.35)`,
              color: INK,
              background: PANEL,
            }}
          >
            <span>Explore All Work</span>
            <ArrowUpRight className="h-4 w-4" style={{ color: GOLD }} />
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
