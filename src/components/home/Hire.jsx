
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function CTA() {
  return (
    <section
      id="contact-cta"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#090909" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/13146228/pexels-photo-13146228.jpeg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,9,9,0.88) 0%, rgba(9,9,9,0.93) 55%, rgba(9,9,9,0.97) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs md:text-sm font-semibold tracking-[0.3em] mb-6"
            style={{ color: "#FB5406", fontFamily: "Poppins, sans-serif" }}
          >
            LET'S CREATE TOGETHER
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="uppercase leading-[0.92] tracking-wide text-[42px] sm:text-[64px] md:text-[76px] max-w-4xl mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#FFFFFF" }}
          >
            Ready To Tell
            <br />
            Your <span style={{ color: "#FB5406" }}>Story?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-sm md:text-base leading-relaxed max-w-lg mb-10"
            style={{ color: "#C9C9C9", fontFamily: "Poppins, sans-serif" }}
          >
            From first concept to final cut, we're ready to bring your vision to
            the screen. Let's talk about what we can create together.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            <MotionLink
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold tracking-wider "
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
              START A PROJECT
              <ArrowRight size={14} />
            </MotionLink>

            <MotionLink
              to="/work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold tracking-wider  border"
              style={{
                borderColor: "#2A2A2A",
                color: "#FFFFFF",
                fontFamily: "Poppins, sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#FB5406";
                e.currentTarget.style.color = "#FB5406";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2A2A2A";
                e.currentTarget.style.color = "#FFFFFF";
              }}
            >
              VIEW OUR WORK
            </MotionLink>
          </motion.div>

          {/* Direct contact row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 pt-10 border-t"
            style={{ borderColor: "#2A2A2A", width: "100%", maxWidth: "480px" }}
          >
            <a
              href="tel:+919820778491"
              className="inline-flex items-center gap-2.5 text-sm transition-colors duration-200"
              style={{ color: "#C9C9C9", fontFamily: "Poppins, sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FB5406")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#C9C9C9")}
            >
              <span
                className="w-9 h-9  border flex items-center justify-center shrink-0"
                style={{ borderColor: "#2A2A2A" }}
              >
                <Phone size={14} color="#FB5406" />
              </span>
              +91 9820778491
            </a>

            <a
              href="mailto:happylambproduction@gmail.com"
              className="inline-flex items-center gap-2.5 text-sm transition-colors duration-200"
              style={{ color: "#C9C9C9", fontFamily: "Poppins, sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FB5406")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#C9C9C9")}
            >
              <span
                className="w-9 h-9  border flex items-center justify-center shrink-0"
                style={{ borderColor: "#2A2A2A" }}
              >
                <Mail size={14} color="#FB5406" />
              </span>
              happylambproduction@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
