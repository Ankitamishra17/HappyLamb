import { motion } from "framer-motion";
import { Clapperboard, Users, Award, PlayCircle, Play } from "lucide-react";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);
const STATS = [
  { icon: Clapperboard, value: "250+", label: "PROJECTS", sub: "Completed" },
  { icon: Users, value: "120+", label: "HAPPY CLIENTS", sub: "Worldwide" },
  {
    icon: Award,
    value: "4+",
    label: "YEARS OF EXPERIENCE",
    sub: "In Production",
  },
  {
    icon: PlayCircle,
    value: "500+",
    label: "HOURS OF FOOTAGE",
    sub: "Delivered",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function About() {
  return (
    <section  className="w-full">
      {/* Light content block */}
      <div className="relative" style={{ backgroundColor: "#F4F3F1" }}>
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/Camera.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute " />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center -mt-12">
            {/* Left: copy */}
            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p
                variants={fadeUp}
                className="text-xs md:text-sm font-semibold tracking-[0.25em] mb-4"
                style={{ color: "#FB5406", fontFamily: "Poppins, sans-serif" }}
              >
                ABOUT US
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="uppercase leading-[0.95] tracking-wide text-[34px] sm:text-[42px] md:text-[48px] lg:text-[72px] mb-6"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  color: "#1A1A1A",
                }}
              >
                We Are Passionate
                <br />
                <span style={{ color: "#FB5406" }}>Storytellers.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-sm md:text-base leading-relaxed max-w-md mb-8"
                style={{ color: "#4A4A4A", fontFamily: "Poppins, sans-serif" }}
              >
                Happy Lamb Production (OPC) Private Limited is a Mumbai-based
                creative studio focused on building powerful visual narratives
                that help brands connect with audiences in meaningful ways.
                Founded in 2023 by industry veteran Dilip Gupta, the studio
                delivers end-to-end creative solutions across film, design, and
                digital media. From films, animation, and product shoots to
                design, advertising, photography, and social media, Happy Lamb
                Production delivers integrated creative solutions tailored to
                each brand’s goals.
              </motion.p>

              <MotionLink
                to="/about"
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-3 px-6 py-3.5 text-xs font-semibold tracking-wider "
                style={{
                  backgroundColor: "#1A1A1A",
                  color: "#FFFFFF",
                  fontFamily: "Poppins, sans-serif",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#090909")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1A1A1A")
                }
              >
                LEARN MORE
                <span
                  className="w-5 h-5  flex items-center justify-center"
                  style={{ backgroundColor: "#FB5406" }}
                >
                  <Play size={9} fill="#FFFFFF" color="#FFFFFF" />
                </span>
              </MotionLink>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Dark stats bar */}
      <div style={{ backgroundColor: "#090909" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-14 md:py-16">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4"
          >
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="relative flex flex-col items-center text-center gap-2.5 px-4"
                >
                  {/* Vertical divider between items on desktop */}
                  {i !== 0 && (
                    <span
                      className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px"
                      style={{ backgroundColor: "#2A2A2A" }}
                    />
                  )}

                  <span
                    className="w-14 h-14 border flex items-center justify-center mb-1"
                    style={{
                      borderColor: "rgba(251,84,6,0.4)",
                      backgroundColor: "rgba(251,84,6,0.06)",
                    }}
                  >
                    <Icon size={22} color="#FB5406" />
                  </span>

                  <span
                    className="text-4xl md:text-5xl"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      color: "#FFFFFF",
                    }}
                  >
                    {stat.value}
                  </span>

                  <span
                    className="text-[11px] tracking-widest font-semibold"
                    style={{
                      color: "#FB5406",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {stat.label}
                  </span>

                  <span
                    className="text-xs"
                    style={{
                      color: "#8D8D8D",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {stat.sub}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
