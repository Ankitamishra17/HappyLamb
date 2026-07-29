import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Film } from "lucide-react";

const DARK_PALETTE = {
  BG: "#090909",
  CARD_BG: "#141414",
  CARD_HOVER: "#1A1A1A",
  ORANGE: "#FB5406",
  ORANGE_HOVER: "#FF6B1A",
  BORDER: "#2A2A2A",
  BORDER_ACTIVE: "rgba(251, 84, 6, 0.5)",
  TEXT_PRIMARY: "#FFFFFF",
  TEXT_MUTED: "#C9C9C9",
  TEXT_FAINT: "#8D8D8D",
};

const FONTS = {
  heading: "'Bebas Neue', 'Oswald', 'Arial Narrow', sans-serif",
  body: "'Poppins', 'Helvetica Neue', sans-serif",
};

const TEAM = [
  {
    name: "Deepak Gupta",
    role: "Editor",
    tag: "",
    img: "/Deepak-Gupta.webp",
  },
  {
    name: "Dilip Gupta",
    role: "Founder",
    tag: "Founding",
    img: "/dilip.webp",
  },
  {
    name: "Kapil Rawat",
    role: "Delhi Executive Director",
    tag: "Founding",
    img: "/Kapil_Rawat.webp",
  },
  {
    name: "Prince Mishra",
    role: "Creative Director",
    tag: null,
    img: "/Prince_Mishra.webp",
  },
  {
    name: "Ratnesh Yadav",
    role: "Colorist & Editor",
    tag: null,
    img: "/Ratnesh-Yadav.webp",
  },
  {
    name: "Sarvashreshth Ray",
    role: "Film Director",
    tag: null,
    img: "/sarvesh.webp",
  },
  {
    name: "Memon Shadap Razzak",
    role: "Head Editor",
    tag: null,
    img: "/Memon_Shadap_Razzak.webp",
  },
];

export default function TeamCards() {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [progress, setProgress] = useState(0);
  const dragRef = useRef({ isDown: false, startX: 0, scrollStart: 0 });
  const [dragging, setDragging] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth - 2;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max);
    setProgress(max > 0 ? Math.min(el.scrollLeft / max, 1) : 0);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const cardStep = () => {
    const el = trackRef.current;
    const card = el?.querySelector("[data-card]");
    const gap = window.innerWidth < 640 ? 16 : 24;
    return (card?.offsetWidth || 260) + gap;
  };

  const scrollBy = (dir) =>
    trackRef.current?.scrollBy({ left: dir * cardStep(), behavior: "smooth" });

  const onMouseDown = (e) => {
    dragRef.current = {
      isDown: true,
      startX: e.pageX,
      scrollStart: trackRef.current.scrollLeft,
    };
    setDragging(true);
  };

  const onMouseUp = () => {
    dragRef.current.isDown = false;
    setDragging(false);
  };

  const onMouseMove = (e) => {
    if (!dragRef.current.isDown) return;
    e.preventDefault();
    trackRef.current.scrollLeft =
      dragRef.current.scrollStart - (e.pageX - dragRef.current.startX);
  };

  return (
    <section
      className="w-full  py-14 sm:py-20  lg:py-24 select-none overflow-hidden"
      style={{
        backgroundColor: DARK_PALETTE.BG,
        color: DARK_PALETTE.TEXT_PRIMARY,
        fontFamily: FONTS.body,
      }}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700&display=swap"
      />
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }

        [data-card] .overlay { opacity: 0.55; transition: opacity .35s cubic-bezier(0.16, 1, 0.3, 1); }
        [data-card]:hover .overlay { opacity: 1; }

        [data-card] .card-img { transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease; filter: grayscale(0.25) contrast(1.02); }
        [data-card]:hover .card-img { transform: scale(1.07); filter: grayscale(0) contrast(1.05); }

        [data-card] .info { transform: translateY(6px); transition: transform .35s cubic-bezier(0.16, 1, 0.3, 1); }
        [data-card]:hover .info { transform: translateY(0); }

        [data-card] .role-line { width: 0%; transition: width .45s cubic-bezier(0.16, 1, 0.3, 1); }
        [data-card]:hover .role-line { width: 100%; }

        [data-card] { transition: border-color .3s ease, transform .3s ease; }
        [data-card]:hover { border-color: ${DARK_PALETTE.BORDER_ACTIVE}; }
      `}</style>

      <div className="w-full max-w-7xl px-6 sm:px-8 lg:px-12 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em]"
              style={{ color: DARK_PALETTE.ORANGE }}
            >
              <Film size={14} className="shrink-0" />
              <span>Studio Roster — The People Behind The Work</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[0.88]"
              style={{ fontFamily: FONTS.heading }}
            >
              Our <span style={{ color: DARK_PALETTE.ORANGE }}>Team</span>
            </motion.h2>
          </div>

          <div
            className="text-xs font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase"
            style={{ color: DARK_PALETTE.TEXT_FAINT }}
          >
            <span
              className="font-bold text-base sm:text-lg"
              style={{
                fontFamily: FONTS.heading,
                color: DARK_PALETTE.ORANGE,
                letterSpacing: "0.02em",
              }}
            >
              {String(TEAM.length).padStart(2, "0")}
            </span>{" "}
            / Key Makers
          </div>
        </div>

        {/* Carousel Track */}
        <div
          ref={trackRef}
          onScroll={updateEdges}
          onMouseDown={onMouseDown}
          className={`flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-4 sm:pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: dragging ? "auto" : "smooth",
          }}
        >
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              data-card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative flex-none w-[210px] sm:w-[260px] md:w-[280px] lg:w-[300px] h-[310px] sm:h-[380px] md:h-[410px] lg:h-[440px]  overflow-hidden border shadow-2xl group"
              style={{
                backgroundColor: DARK_PALETTE.CARD_BG,
                borderColor: DARK_PALETTE.BORDER,
                scrollSnapAlign: "start",
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="card-img absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />

              {member.tag && (
                <span
                  className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase  px-2.5 sm:px-3 py-1 backdrop-blur-md"
                  style={{
                    color: DARK_PALETTE.ORANGE,
                    backgroundColor: "rgba(9,9,9,0.85)",
                    border: `1px solid rgba(251,84,6,0.4)`,
                  }}
                >
                  {member.tag}
                </span>
              )}

              {/* Ambient Overlay */}
              <div
                className="overlay absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(9,9,9,0.97) 0%, rgba(9,9,9,0.65) 45%, rgba(9,9,9,0) 82%)",
                }}
              />

              {/* Information Panel */}
              <div className="info absolute left-0 right-0 bottom-0 p-4 sm:p-6 z-10">
                <div
                  className="text-xl sm:text-2xl lg:text-3xl tracking-tight mb-1.5 uppercase leading-none"
                  style={{
                    fontFamily: FONTS.heading,
                    color: DARK_PALETTE.TEXT_PRIMARY,
                  }}
                >
                  {member.name}
                </div>
                <div
                  className="role-line h-px mb-2"
                  style={{ backgroundColor: DARK_PALETTE.ORANGE }}
                />
                <div
                  className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.14em] sm:tracking-[0.18em] uppercase"
                  style={{ color: DARK_PALETTE.TEXT_MUTED }}
                >
                  <span
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 inline-block  shrink-0"
                    style={{ backgroundColor: DARK_PALETTE.ORANGE }}
                  />
                  <span className="truncate">{member.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Controls Row: progress + buttons */}
        <div
          className="flex items-center justify-between gap-6 mt-4 pt-5 sm:pt-6 border-t"
          style={{ borderColor: DARK_PALETTE.BORDER }}
        >
          {/* Scroll Progress Bar */}
          <div
            className="hidden sm:block flex-1 h-[2px]  overflow-hidden"
            style={{ backgroundColor: DARK_PALETTE.BORDER }}
          >
            <div
              className="h-full  transition-[width] duration-200 ease-out"
              style={{
                width: `${Math.max(progress * 100, 8)}%`,
                backgroundColor: DARK_PALETTE.ORANGE,
              }}
            />
          </div>

          <div className="flex justify-end gap-3 shrink-0">
            <button
              onClick={() => scrollBy(-1)}
              disabled={atStart}
              aria-label="Previous Team Member"
              className="w-10 h-10 sm:w-12 sm:h-12  border flex items-center justify-center active:scale-95 transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              style={{
                borderColor: DARK_PALETTE.BORDER,
                backgroundColor: DARK_PALETTE.CARD_BG,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = DARK_PALETTE.ORANGE;
                e.currentTarget.style.backgroundColor = DARK_PALETTE.CARD_HOVER;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = DARK_PALETTE.BORDER;
                e.currentTarget.style.backgroundColor = DARK_PALETTE.CARD_BG;
              }}
            >
              <ArrowLeft
                size={16}
                className="sm:hidden"
                style={{ color: DARK_PALETTE.TEXT_PRIMARY }}
              />
              <ArrowLeft
                size={18}
                className="hidden sm:block"
                style={{ color: DARK_PALETTE.TEXT_PRIMARY }}
              />
            </button>
            <button
              onClick={() => scrollBy(1)}
              disabled={atEnd}
              aria-label="Next Team Member"
              className="w-10 h-10 sm:w-12 sm:h-12  border flex items-center justify-center active:scale-95 transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              style={{
                borderColor: DARK_PALETTE.BORDER,
                backgroundColor: DARK_PALETTE.CARD_BG,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = DARK_PALETTE.ORANGE;
                e.currentTarget.style.backgroundColor = DARK_PALETTE.CARD_HOVER;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = DARK_PALETTE.BORDER;
                e.currentTarget.style.backgroundColor = DARK_PALETTE.CARD_BG;
              }}
            >
              <ArrowRight
                size={16}
                className="sm:hidden"
                style={{ color: DARK_PALETTE.TEXT_PRIMARY }}
              />
              <ArrowRight
                size={18}
                className="hidden sm:block"
                style={{ color: DARK_PALETTE.TEXT_PRIMARY }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
