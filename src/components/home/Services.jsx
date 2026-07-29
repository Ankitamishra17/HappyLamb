"use client";

import { motion } from "framer-motion";
import { Video, Clapperboard, MonitorPlay, ArrowRight } from "lucide-react";

/* Custom drone icon — lucide has no dedicated drone glyph */
function DroneIcon({ size = 26, color = "#FB5406" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="13" r="2.4" stroke={color} strokeWidth="1.5" />
      <path
        d="M9.8 11.2 5.5 6.5M14.2 11.2l4.3-4.7M9.8 14.8l-4.3 4.7M14.2 14.8l4.3 4.7"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="5" cy="5.5" r="1.6" stroke={color} strokeWidth="1.5" />
      <circle cx="19" cy="5.5" r="1.6" stroke={color} strokeWidth="1.5" />
      <circle cx="5" cy="19.5" r="1.6" stroke={color} strokeWidth="1.5" />
      <circle cx="19" cy="19.5" r="1.6" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

const SERVICES = [
  {
    Icon: Video,
    title: "VIDEOGRAPHY",
    desc: "Cinematic videos for every story.",
  },
  {
    Icon: Clapperboard,
    title: "FILM PRODUCTION",
    desc: "End-to-end production services.",
    filled: true,
  },
  {
    Icon: MonitorPlay,
    title: "EDITING",
    desc: "Precision editing that brings life.",
  },
  {
    Icon: DroneIcon,
    title: "AERIAL SHOOT",
    desc: "Stunning aerial shots that elevate.",
    custom: true,
  },
];

const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="w-full"
      style={{ backgroundColor: "#090909" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 md:mb-14"
        >
          <h2
            className="uppercase text-[32px] sm:text-[38px] md:text-[42px] tracking-wide mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#FFFFFF" }}
          >
            Our Services
          </h2>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="block h-[3px]"
            style={{ backgroundColor: "#FB5406" }}
          />
        </motion.div>

        {/* Services panel */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border  overflow-hidden"
          style={{
            borderColor: "#2A2A2A",
            borderLeftColor: "#FB5406",
            borderLeftWidth: "2px",
          }}
        >
          {SERVICES.map((service, i) => {
            const Icon = service.Icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col items-center text-center gap-4 px-6 py-10 border-t sm:border-t-0 ${
                  i !== 0 ? "lg:border-l sm:border-l" : ""
                } ${i % 2 !== 0 ? "border-l sm:border-l-0" : ""}`}
                style={{ borderColor: "#2A2A2A" }}
              >
                <motion.span
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex items-center justify-center w-16 h-16"
                >
                  {service.custom ? (
                    <Icon size={30} color="#FB5406" />
                  ) : (
                    <Icon
                      size={30}
                      color="#FB5406"
                      fill={service.filled ? "#FB5406" : "none"}
                      strokeWidth={service.filled ? 0 : 1.5}
                    />
                  )}
                </motion.span>

                <h3
                  className="text-base tracking-wide"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-sm leading-relaxed max-w-[180px]"
                  style={{
                    color: "#8D8D8D",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {service.desc}
                </p>

                {/* hover underline accent */}
                <motion.span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-10 transition-all duration-300"
                  style={{ backgroundColor: "#FB5406" }}
                />
              </motion.div>
            );
          })}
        </motion.div>

       
      </div>
    </section>
  );
}
