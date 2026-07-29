"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SOCIALS = ["Instagram", "Facebook", "YouTube"];

const SLIDES = [
  {
    label: "01",
    image: "/Camera 3.png",
  },
  {
    label: "02",
    image: "/Camera 5.png",
  },
  {
    label: "03",
    image: "/Camera 6.png",
  },
];

const SLIDE_DURATION = 2000; // ms — kept in sync with the divider-fill animation

// Stagger container for the left-column copy
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative flex min-h-[90vh] lg:min-h-screen w-full items-center overflow-hidden py-16 md:py-20 lg:py-24 text-white"
      style={{ backgroundColor: "#090909" }}
    >
      {/* Background slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={current}
            src={SLIDES[current].image}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto  px-6 sm:px-8 lg:px-12 md:pt-10  pt-26 pb-34  ">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs md:text-sm font-semibold tracking-[0.25em] mb-4"
              style={{ color: "#FB5406", fontFamily: "Poppins, sans-serif" }}
            >
              WE CREATE. YOU INSPIRE.
            </motion.p>

            <h1
              className="uppercase leading-[0.95] tracking-wide text-[42px] md:text-[56px] lg:text-[64px] mb-6 overflow-hidden"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                color: "#FFFFFF",
              }}
            >
              <motion.span variants={itemVariants} className="block">
                Visual Stories
              </motion.span>
              <motion.span variants={itemVariants} className="block">
                That Leave An <span style={{ color: "#FB5406" }}>Impact.</span>
              </motion.span>
            </h1>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base leading-relaxed max-w-md mb-8"
              style={{ color: "#C9C9C9", fontFamily: "Poppins, sans-serif" }}
            >
              A full-service videography and production house crafting cinematic
              visuals that connect, engage and leave a lasting impact.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10 md:mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider"
                  style={{
                    backgroundColor: "#FB5406",
                    color: "#FFFFFF",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  OUR WORK
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider border"
                  style={{
                    borderColor: "#2A2A2A",
                    color: "#FFFFFF",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  CONTACT US
                </Link>
              </motion.div>
            </motion.div>

            {/* Slide indicators — synced with the background slideshow */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 text-xs tracking-widest"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {SLIDES.map((slide, i) => (
                <span key={slide.label} className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setCurrent(i)}
                    style={{ color: i === current ? "#FB5406" : "#8D8D8D" }}
                  >
                    {slide.label}
                  </button>
                  {i < SLIDES.length - 1 && (
                    <span
                      className="relative w-8 h-px overflow-hidden"
                      style={{ backgroundColor: "#2A2A2A" }}
                    >
                      {i === current && (
                        <motion.span
                          key={current}
                          className="absolute inset-y-0 left-0"
                          style={{ backgroundColor: "#FB5406" }}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: SLIDE_DURATION / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </span>
                  )}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Vertical social rail (desktop only) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-8 z-10"
      >
        {SOCIALS.map((social) => (
          <motion.a
            key={social}
            href="#"
            whileHover={{ color: "#FB5406", y: -2 }}
            className="text-[10px] tracking-[0.3em] uppercase transition-colors duration-200"
            style={{
              color: "#8D8D8D",
              writingMode: "vertical-rl",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {social}
          </motion.a>
        ))}
        <span className="w-px h-16" style={{ backgroundColor: "#2A2A2A" }} />
      </motion.div>
    </section>
  );
}
