
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const DARK_PALETTE = {
  BG: "#090909",
  CHARCOAL: "#1A1A1A",
  ORANGE: "#FB5406",
  ORANGE_HOVER: "#FF6B1A",
  BORDER: "#2A2A2A",
  TEXT_PRIMARY: "#FFFFFF",
  TEXT_MUTED: "#C9C9C9",
};

const FONTS = {
  heading: "'Bebas Neue',  sans-serif",
  body: "'Poppins',  sans-serif",
};

export default function TeamCTA() {
  return (
    <section
      className="relative w-full overflow-hidden py-14 sm:py-20  border-t"
      style={{ backgroundColor: DARK_PALETTE.BG, borderColor: DARK_PALETTE.BORDER, fontFamily: FONTS.body }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700;800&display=swap"
      />

      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/control1/1200x/53/b0/27/53b027de56295e89a773d411cd4256a2.jpg"
          alt="Production set backdrop"
          className="w-full h-full object-cover grayscale opacity-40"
        />
       
      </div>

     

      <div className="relative z-10 max-w-7xl px-6 sm:px-8 lg:px-12 mx-auto flex flex-col items-center text-center">
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 uppercase tracking-tight leading-[0.88]"
          style={{
            fontFamily: FONTS.heading,
            fontSize: "clamp(3rem, 8vw, 5.25rem)",
            color: DARK_PALETTE.TEXT_PRIMARY,
          }}
        >
          Got a project?
          <br />
          Let's shoot it.
        </motion.h2>

        {/* Action Button & Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-8"
        >
          <MotionLink
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            to="/contact"
            className="group inline-flex items-center gap-3  px-10 py-5 text-sm font-semibold tracking-[0.15em] uppercase transition-shadow shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/40"
            style={{ fontFamily: FONTS.body, backgroundColor: DARK_PALETTE.ORANGE, color: "#0A0A0A" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = DARK_PALETTE.ORANGE_HOVER)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = DARK_PALETTE.ORANGE)}
          >
            Start a project
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </MotionLink>

          {/* Contact Details */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium"
            style={{ fontFamily: FONTS.body, color: DARK_PALETTE.TEXT_MUTED }}
          >
            <a
              href="mailto:dilip@happylamb.co.in"
              className="inline-flex items-center gap-2 transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = DARK_PALETTE.ORANGE)}
              onMouseLeave={(e) => (e.currentTarget.style.color = DARK_PALETTE.TEXT_MUTED)}
            >
              <Mail size={15} />
             dilip@happylamb.co.in
            </a>
            <span className="hidden sm:inline" style={{ color: DARK_PALETTE.BORDER }}>
              •
            </span>
            <a
              href="tel:+919820778491"
              className="inline-flex items-center gap-2 transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = DARK_PALETTE.ORANGE)}
              onMouseLeave={(e) => (e.currentTarget.style.color = DARK_PALETTE.TEXT_MUTED)}
            >
              <Phone size={15} />
              +91 9820778491
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}