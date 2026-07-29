"use client";

import { motion } from "framer-motion";
import { Send, Play } from "lucide-react";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const STEPS = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "We understand your vision, goals and requirements.",
  },
  {
    num: "02",
    title: "PLAN",
    desc: "Conceptualizing ideas and planning the perfect shot.",
  },
  {
    num: "03",
    title: "PRODUCE",
    desc: "Bringing the plan to life with precision and creativity.",
  },
  {
    num: "04",
    title: "DELIVER",
    desc: "Delivering stunning visuals that make an impact.",
  },
];

const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Process() {
  return (
    <section
      id="process"
      className="w-full"
      style={{ backgroundColor: "#F4F3F1" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 md:mb-20"
        >
          <h2
            className="uppercase text-[32px] sm:text-[38px] md:text-[42px] tracking-wide mb-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span style={{ color: "#1A1A1A" }}>Our</span>{" "}
            <span style={{ color: "#FB5406" }}>Process</span>
          </h2>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="block h-[3px]"
            style={{ backgroundColor: "#FB5406" }}
          />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mb-16 md:mb-20"
        >
          {/* connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-[22px] left-[10%] right-[10%] h-px border-t border-dashed"
            style={{ borderColor: "#C9C7C3" }}
          />

          {STEPS.map((step) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className="relative flex flex-col gap-4"
            >
              <div
                className="relative z-10 w-11 h-11  flex items-center justify-center text-xs font-bold shrink-0"
                style={{
                  backgroundColor: "#FB5406",
                  color: "#FFFFFF",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {step.num}
              </div>

              <h3
                className="uppercase text-lg tracking-wide"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  color: "#1A1A1A",
                }}
              >
                {step.title}
              </h3>

              <p
                className="text-sm leading-relaxed max-w-full lg:max-w-[220px]"
                style={{ color: "#5A5A5A", fontFamily: "Poppins, sans-serif" }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6  px-6 sm:px-10 py-8"
          style={{ backgroundColor: "#090909" }}
        >
          <div className="flex items-center gap-5 text-center sm:text-left">
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden sm:flex w-12 h-12  items-center justify-center shrink-0 border"
              style={{ borderColor: "#FB5406" }}
            >
              <Send size={18} color="#FB5406" />
            </motion.span>
            <div>
              <h3
                className="uppercase text-lg sm:text-xl tracking-wide mb-1"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  color: "#FFFFFF",
                }}
              >
                Have A Project In Mind?
              </h3>
              <p
                className="text-sm"
                style={{ color: "#C9C9C9", fontFamily: "Poppins, sans-serif" }}
              >
                Let's create something amazing together.
              </p>
            </div>
          </div>

          <MotionLink
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider  shrink-0"
            style={{
              backgroundColor: "#FB5406",
              color: "#FFFFFF",
              fontFamily: "Poppins, sans-serif",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FF6B1A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#FB5406")
            }
          >
            GET IN TOUCH
            
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
