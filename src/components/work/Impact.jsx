import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Quote,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Studio brand palette (light-section variant)
 * Primary        #FB5406  — orange accent
 * Hover          #FF6B1A  — bright orange
 * Dark panel     #141414 surface / #2A2A2A border — the one dark block on this light page
 * Page bg        #F4F3F1 — matches the light sections elsewhere on the site
 * Card border    #E4E2DF — light hairline, matches Testimonials/Showreel
 * Heading/ink    #1A1A1A — charcoal, since white heading text needs a dark background to read
 * Body text      #4A4A4A
 * Muted text     #8D8D8D
 *
 * Heading font: Bebas Neue · Body font: Poppins
 */

// The studio's own words about each collaboration, per the dossier —
// not quotes attributed to the clients themselves.
const COLLABORATIONS = [
  {
    id: 1,
    quote:
      "We bring iconic storytelling to life — from Anil Kapoor reviving his legendary Mr. India persona to make banking feel nostalgic yet smart, to Konkona Sen Sharma inspiring women with the #FundYourOwnWorth spirit.",
    client: "ICICI Bank",
    project: "Mr. India Revival & Campus Power",
  },
  {
    id: 2,
    quote:
      "We exhibited Godrej's legacy of trust and innovation — from Madhuri Dixit championing Home Lockers to Matrix Home Lockers with dual-lock precision, built on protection, strength, and adaptability.",
    client: "Godrej",
    project: "Home Lockers Campaign",
  },
  {
    id: 3,
    quote:
      "We tell stories of transformation — from reshaping landscapes in Charholi Village to fueling the dreams of Tamil entrepreneurs, where JCB machines stand for progress powered by unbreakable trust.",
    client: "JCB India",
    project: "Customer Success Stories",
  },
];

// Real service scope, from the dossier's manifesto
const WHAT_WE_DELIVER = [
  {
    title: "Film & Animation",
    detail:
      "Ad films, product shoots, and animation built around a clear brand story",
  },
  {
    title: "Design & Advertising",
    detail:
      "Visual identity, campaign design, and photography for each brand's goals",
  },
  {
    title: "Digital & Social Media",
    detail:
      "Platform-native content that carries a campaign from screen to feed",
  },
];

export default function WorkImpact() {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % COLLABORATIONS.length);
  const prev = () =>
    setActiveIdx(
      (p) => (p - 1 + COLLABORATIONS.length) % COLLABORATIONS.length,
    );

  const current = COLLABORATIONS[activeIdx];

  return (
    <section className="relative w-full overflow-hidden border-t border-b border-[#E4E2DF] bg-[#F4F3F1] py-24 text-[#1A1A1A]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700;800&display=swap');
      `}</style>

      <div className="pointer-events-none absolute top-1/2 left-1/3 h-96 w-96 -translate-y-1/2  bg-[#FB5406]/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#E4E2DF] pb-8 md:flex-row md:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 font-['Poppins'] text-xs font-bold uppercase tracking-widest text-[#FB5406]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Selected Collaborations</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 font-['Bebas_Neue'] text-3xl uppercase tracking-tight text-[#1A1A1A] sm:text-5xl"
            >
              Brands We've Told{" "}
              <span className="text-[#FB5406]">Stories For</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md font-['Poppins'] text-xs leading-relaxed text-[#4A4A4A] sm:text-sm"
          >
            A look at the campaigns and productions we've delivered for brands
            across banking, security, industrial, and fintech.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
          {/* Left: Collaboration Slider */}
          <div className="relative flex flex-col justify-between  border border-[#E4E2DF] bg-white p-8 shadow-sm sm:p-10 lg:col-span-7">
            <div>
              <div className="flex items-center justify-between border-b border-[#E4E2DF] pb-6">
                <div className=" bg-[#1A1A1A] p-2.5 text-[#FB5406]">
                  <Quote className="h-4 w-4" />
                </div>
                <span className="inline-flex items-center gap-1.5  border border-[#FB5406]/30 bg-[#FB5406]/10 px-3 py-1 font-['Poppins'] text-xs font-bold text-[#FB5406]">
                  {current.project}
                </span>
              </div>

              <blockquote className="mt-8 font-['Poppins'] text-base  leading-relaxed text-[#1A1A1A] sm:text-base">
                {current.quote}
              </blockquote>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#E4E2DF] pt-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center  bg-[#FB5406]/15 font-['Bebas_Neue'] text-sm uppercase text-[#FB5406]">
                  {current.client.slice(0, 2)}
                </div>
                <div>
                  <h4 className="font-['Poppins'] text-base font-bold text-[#1A1A1A]">
                    {current.client}
                  </h4>
                  <p className="font-['Poppins'] text-xs font-medium text-[#8D8D8D]">
                    Happy Lamb Production
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="flex h-10 w-10 items-center justify-center  border border-[#E4E2DF] bg-[#F4F3F1] text-[#1A1A1A] transition-colors duration-300 hover:bg-[#1A1A1A] hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="flex h-10 w-10 items-center justify-center  border border-[#E4E2DF] bg-[#F4F3F1] text-[#1A1A1A] transition-colors duration-300 hover:bg-[#1A1A1A] hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: What We Deliver — the one dark panel on this light page */}
          <div className="flex flex-col justify-between  border border-[#2A2A2A] bg-[#141414] p-8 text-white shadow-xl sm:p-10 lg:col-span-5">
            <div>
              <span className="block font-['Poppins'] text-xs font-bold uppercase tracking-widest text-[#FB5406]">
                What We Deliver
              </span>
              <h3 className="mt-2 font-['Bebas_Neue'] text-2xl uppercase tracking-tight text-white">
                End-to-End Creative Solutions
              </h3>
              <p className="mt-2 font-['Poppins'] text-xs leading-relaxed text-[#8D8D8D]">
                Across film, design, and digital media — tailored to each
                brand's goals.
              </p>

              <div className="mt-6 space-y-4">
                {WHAT_WE_DELIVER.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FB5406]" />
                    <div>
                      <h4 className="font-['Poppins'] text-xs font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="font-['Poppins'] text-[11px] text-[#8D8D8D]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-[#2A2A2A] pt-6">
              <Link
                to="/contact"
                className="inline-flex w-full text-nowrap items-center justify-center gap-2  bg-[#FB5406] px-6 py-3.5 font-['Poppins'] text-xs font-bold uppercase tracking-wider text-[#090909] transition-colors duration-300 hover:bg-[#FF6B1A]"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
