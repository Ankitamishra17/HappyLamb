import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Clapperboard,
} from "lucide-react";

const PRIMARY = "#FB5406";
const SECONDARY = "#1A1A1A";
const BACKGROUND = "#090909";
const SURFACE = "#141414";
const BORDER = "#2A2A2A";
const HEADING = "#FFFFFF";
const BODY = "#C9C9C9";
const MUTED = "#8D8D8D";
const HOVER = "#FF6B1A";

// Cinema studio background image from Unsplash
const BG_IMAGE = "12.png";

export default function ContactHero() {
  return (
    <section
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden px-6 lg:px-24 py-20 text-white"
      style={{ backgroundColor: BACKGROUND }}
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMAGE}
          alt="Film set camera background"
          className="h-full w-full object-cover object-center scale-105"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(9,9,9,.95) 15%, rgba(9,9,9,.75) 45%, rgba(9,9,9,.35) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl px-6 sm:px-8 lg:px-12 grid-cols-1 items-center gap-6 lg:grid-cols-12">
        {/* Left Column — Text Manifesto */}
        <div className="lg:col-span-7 space-y-6 -mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading  uppercase leading-[0.98] tracking-tight text-white"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)" }}
          >
            Let&apos;s shoot
            <br />
            <span style={{ color: PRIMARY }}> something worth</span>
            <br />
            watching
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-lg text-base font-body leading-8"
            style={{ color: BODY }}
          >
            Tell us about the film, campaign, or story you&apos;re building. Our
            production team will get back to you shortly with a tailored pitch
            and execution plan.
          </motion.p>

          {/* Quick Contact Micro-Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg"
          >
            <div className="p-4  border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-3">
              <div className="p-2.5  bg-[#FB5406]/10 text-[#FB5406]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-heading uppercase tracking-widest text-white/40">
                  Email Us
                </p>
                <p className="text-xs font-heading  text-white">
                 dilip@happylamb.co.in
                </p>
              </div>
            </div>

            <div className="p-4  border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-3">
              <div className="p-2.5  bg-[#FB5406]/10 text-[#FB5406]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-heading uppercase  tracking-widest text-white/40">
                  Studio Hub
                </p>
                <p
                  className="font-body text-sm font-medium"
                  style={{ color: HEADING }}
                >
                  Mumbai, Maharashtra
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
