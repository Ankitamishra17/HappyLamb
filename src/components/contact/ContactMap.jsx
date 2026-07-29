import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Clock,
  Building,
  Film,
  ExternalLink,
  Copy,
  Check,
  Phone,
} from "lucide-react";

/**
 * Studio brand palette
 * Primary      #FB5406  — orange
 * Secondary    #1A1A1A  — charcoal
 * Background   #090909  — rich black
 * Surface/Card #141414  — dark gray
 * Border       #2A2A2A  — gray
 * Heading      #FFFFFF  — white
 * Body text    #C9C9C9  — light gray
 * Muted text   #8D8D8D  — gray
 * Hover        #FF6B1A  — bright orange
 *
 * Heading font: Bebas Neue · Body font: Poppins
 * No border-radius anywhere in this component, by request — square edges only.
 */

const FULL_ADDRESS = `504, 5th Floor, Share Siddhivinayak New-2 Building,
Sahakari Co. Hoc. Socty., Iraniwadi,
Hemu Colony Road No. 04,
Kandivali West, Mumbai – 400067`;

// Map now points to the actual studio address above (was previously a
// different Goregaon East location — mismatch fixed here).
const MAP_QUERY = encodeURIComponent(
  "504, 5th Floor, Share Siddhivinayak New-2 Building, Sahakari Co. Hoc. Socty., Iraniwadi, Hemu Colony Road No. 04, Kandivali West, Mumbai 400067",
);
const MAP_URL = `https://www.google.com/maps?q=${MAP_QUERY}`;
const EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

export default function ContactMap() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(FULL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#090909]  py-16 font-['Poppins'] text-[#C9C9C9]  lg:py-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700;800&display=swap');
      `}</style>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#FB5406]"
            >
              <Film size={14} />
              <span>Scene 03 — Location Brief</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 font-['Bebas_Neue'] text-3xl uppercase tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Find Us On{" "}
              <span className="bg-gradient-to-r from-[#FB5406] via-[#FF6B1A] to-[#FB5406] bg-clip-text text-transparent">
                Location
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Map + Location Details */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Viewfinder Map Container */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden border border-[#2A2A2A] bg-[#141414] p-2 shadow-xl backdrop-blur-md sm:p-3 lg:col-span-8"
          >
            {/* Map Frame Wrapper */}
            <div className="relative h-[280px] w-full overflow-hidden bg-[#1A1A1A] xs:h-[320px] sm:h-[420px] lg:h-[540px]">
              {/* Embedded Google Map, dark-mode filtered to match the studio theme */}
              <iframe
                title="Happy Lamb Production Location"
                src={EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                className="[filter:grayscale(15%)_invert(92%)_contrast(88%)_hue-rotate(180deg)] transition-all duration-700 group-hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Location Details Panel */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between border border-[#2A2A2A] bg-[#141414] p-6 shadow-xl sm:p-8 lg:col-span-4"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center bg-[#1A1A1A] text-[#FB5406]">
                <Building size={20} />
              </div>

              <h3 className="mt-6 font-['Bebas_Neue'] text-xl uppercase tracking-tight text-white">
                Studio Address
              </h3>

              <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-[#C9C9C9]">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#FB5406]" />
                <span className="whitespace-pre-line break-words">
                  {FULL_ADDRESS}
                </span>
              </p>

              <p className="mt-3 flex items-center gap-2 text-sm leading-relaxed text-[#C9C9C9]">
                <Phone size={16} className="shrink-0 text-[#FB5406]" />
                <a
                  href="tel:+919820778500"
                  className="transition-colors duration-300 hover:text-white"
                >
                  +91 98207 78500
                </a>
              </p>

              <div className="mt-6 flex items-center gap-2 border-t border-[#2A2A2A] pt-6 text-xs text-[#8D8D8D]">
                <Clock size={14} className="shrink-0 text-[#FB5406]" />
                <span>IST (UTC+5:30) • Open for Commissions</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <button
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] px-4 py-3 text-xs font-bold uppercase tracking-widest text-[#C9C9C9] transition-colors duration-300 hover:border-[#FB5406] hover:text-white"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-[#FB5406]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center justify-center gap-2 bg-[#FB5406] px-4 py-3 text-xs font-bold uppercase tracking-widest text-[#090909] transition-colors duration-300 hover:bg-[#FF6B1A]"
              >
                <Navigation size={14} />
                <span>Get Directions</span>
                
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}