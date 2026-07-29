import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Clock,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

/**
 * Studio brand palette — light-section variant
 * Primary        #FB5406  — orange accent
 * Hover          #FF6B1A  — bright orange
 * Page bg        #F4F3F1 — matches Testimonials/Showreel/WorkImpact
 * Form card      #FFFFFF, border #E4E2DF
 * Heading/ink    #1A1A1A — charcoal (white heading text needs a dark bg to read)
 * Body text      #4A4A4A
 * Muted text     #8D8D8D
 * Right panel    #1A1A1A / #2A2A2A border — the one dark block on this light page,
 *                same move as the "What We Deliver" panel in WorkImpact
 *
 * Heading font: Bebas Neue · Body font: Poppins
 */

const PROJECT_TYPES = [
  "Feature Film",
  "Commercial / Ad Film",
  "Documentary",
  "Corporate Video",
  "Music Video",
  "Other Creative Project",
];

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email Us",
    items: [
      {
        text: "happylambproduction@gmail.com",
        href: "mailto:happylambproduction@gmail.com",
      },
      {
        text: "dilip@happylamb.co.in",
        href: "mailto:dilip@happylamb.co.in",
      },
    ],
  },
  {
    icon: Phone,
    label: "Call Us",
    items: [
      { text: "+91 9820778491", href: "tel:+919820778491" },
      { text: "+91 9820778500", href: "tel:+919820778500" },
    ],
  },
  {
    icon: MapPin,
    label: "Studio Hub",
    items: [
      {
        text: `504, 5th Floor, Share Siddhivinayak New-2 Building,
Sahakari Co. Hoc. Socty., Iraniwadi,
Hemu Colony Road No. 04,
Kandivali West, Mumbai – 400067`,
        href: "#",
      },
    ],
  },
];

export default function ContactSectionLight() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: PROJECT_TYPES[0],
    message: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | submitting | sent

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API Call
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#F4F3F1] px-4 py-16 font-['Poppins'] text-[#4A4A4A] sm:px-6 sm:py-24 lg:px-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700;800&display=swap');
      `}</style>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Main Pitch Form                              */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col justify-between overflow-hidden  border border-[#E4E2DF] bg-white p-6 shadow-xl backdrop-blur-md sm:p-8 lg:col-span-7 lg:p-12"
          >
            <div>
              {/* Header Badge */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-4 inline-flex items-center gap-2  border border-[#FB5406]/25 bg-[#FB5406]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#FB5406]"
              >
                <Sparkles size={12} />
                Tell Us Your Story
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="font-['Bebas_Neue'] text-3xl uppercase leading-[0.95] tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl"
              >
                Pitch the project
              </motion.h2>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#4A4A4A] sm:text-base">
                Have a concept ready to bring to light? Fill out the brief below
                and our production leads will reach out.
              </p>
            </div>

            {/* Form Section */}
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="my-auto flex flex-col items-center justify-center  border border-[#FB5406]/40 bg-[#F4F3F1] px-6 py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="mb-4 flex h-16 w-16 items-center justify-center  bg-[#FB5406] shadow-inner"
                  >
                    <CheckCircle2 size={32} className="text-white" />
                  </motion.div>

                  <h3 className="font-['Bebas_Neue'] text-xl uppercase tracking-wide text-[#1A1A1A]">
                    Enquiry Received
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#4A4A4A]">
                    Thank you! A senior producer from our studio will review
                    your brief and follow up within 24 hours.
                  </p>

                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 cursor-pointer text-xs font-bold uppercase tracking-widest text-[#FB5406] underline underline-offset-4 transition-colors duration-300 hover:text-[#FF6B1A]"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-6"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Name Field */}
                    <div className="relative">
                      <input
                        required
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder=" "
                        className="peer w-full border-b-2 border-[#E4E2DF] bg-transparent py-2.5 text-base text-[#1A1A1A] outline-none transition-all duration-300 focus:border-[#FB5406]"
                      />
                      <label
                        htmlFor="name"
                        className="pointer-events-none absolute left-0 top-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#8D8D8D] transition-all duration-300 peer-focus:-top-3.5 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                      >
                        Your Name *
                      </label>
                    </div>

                    {/* Phone Field */}
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder=" "
                        className="peer w-full border-b-2 border-[#E4E2DF] bg-transparent py-2.5 text-base text-[#1A1A1A] outline-none transition-all duration-300 focus:border-[#FB5406]"
                      />
                      <label
                        htmlFor="phone"
                        className="pointer-events-none absolute left-0 top-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#8D8D8D] transition-all duration-300 peer-focus:-top-3.5 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                      >
                        Phone Number
                      </label>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input
                      required
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder=" "
                      className="peer w-full border-b-2 border-[#E4E2DF] bg-transparent py-2.5 text-base text-[#1A1A1A] outline-none transition-all duration-300 focus:border-[#FB5406]"
                    />
                    <label
                      htmlFor="email"
                      className="pointer-events-none absolute left-0 top-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#8D8D8D] transition-all duration-300 peer-focus:-top-3.5 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                    >
                      Email Address *
                    </label>
                  </div>

                  {/* Custom Project Type Dropdown */}
                  <div className="relative">
                    <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#8D8D8D]">
                      Project Type
                    </span>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex w-full items-center justify-between border-b-2 border-[#E4E2DF] bg-transparent py-2.5 text-left text-base text-[#1A1A1A] outline-none transition-colors duration-300"
                    >
                      <span>{form.projectType}</span>
                      <ChevronDown
                        size={16}
                        className={`text-[#8D8D8D] transition-transform duration-300 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 right-0 z-20 mt-2 max-h-60 overflow-y-auto  border border-[#E4E2DF] bg-white py-2 shadow-2xl"
                        >
                          {PROJECT_TYPES.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => {
                                update("projectType", type);
                                setDropdownOpen(false);
                              }}
                              className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm font-medium text-[#1A1A1A] transition-colors duration-300 hover:bg-black/5"
                            >
                              {type}
                              {form.projectType === type && (
                                <div className="h-2 w-2  bg-[#FB5406]" />
                              )}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <textarea
                      required
                      rows={3}
                      id="message"
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder=" "
                      className="peer w-full resize-none border-b-2 border-[#E4E2DF] bg-transparent py-2.5 text-base text-[#1A1A1A] outline-none transition-all duration-300 focus:border-[#FB5406]"
                    />
                    <label
                      htmlFor="message"
                      className="pointer-events-none absolute left-0 top-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#8D8D8D] transition-all duration-300 peer-focus:-top-3.5 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                    >
                      Project Details & Timeline *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative inline-flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden  bg-[#FB5406] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:bg-[#FF6B1A] disabled:opacity-60 sm:w-auto"
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        <span>Submit Brief</span>
                        <Send
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Contact Details & Status Card               */}
          {/* The one dark panel on this light page — same move as the   */}
          {/* "What We Deliver" block in WorkImpact.                     */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col justify-between overflow-hidden  border border-[#2A2A2A] bg-[#1A1A1A] p-6 shadow-2xl sm:p-8 lg:col-span-5 lg:p-10"
          >
            {/* Top Section */}
            <div>
              {/* Studio Status Pill */}
              <div className="mb-8 inline-flex items-center gap-2  border border-[#2A2A2A] bg-white/5 px-3 py-1.5 text-[11px] font-medium text-[#C9C9C9] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2  bg-emerald-500"></span>
                </span>
                <Clock size={12} className="ml-1 text-nowrap opacity-60" />
                <span>IST (UTC+5:30) • Open for Commissions</span>
              </div>

              <h3 className="font-['Bebas_Neue'] text-2xl uppercase tracking-tight text-white sm:text-3xl">
                Reach Us Directly
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#C9C9C9]">
                Prefer a quick chat before pitching? Reach out directly to our
                production desk or stop by our studio space.
              </p>

             {/* Contact Links Stack */}
              <div className="mt-10 space-y-4">
                {CONTACT_DETAILS.map(({ icon: Icon, label, items }) => (
                  <div
                    key={label}
                    className="group  border border-[#2A2A2A] bg-white/[0.03] p-4 transition-all duration-300 hover:border-[#FB5406]/40 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center  bg-[#090909] transition-transform duration-300 group-hover:scale-110">
                        <Icon size={18} className="text-[#FB5406]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-heading uppercase tracking-widest text-[#8D8D8D]">
                          {label}
                        </p>
                        <div className="mt-1 space-y-1">
                          {items.map(({ text, href }) => (
                            <a
                              key={text}
                              href={href}
                              className="group/link flex min-w-0 items-start justify-between gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-[#FF6B1A]"
                            >
                              <span className="min-w-0 whitespace-pre-line break-words [overflow-wrap:anywhere]">
                                {text}
                              </span>
                              {href !== "#" && (
                                <ArrowUpRight
                                  size={14}
                                  className="mt-0.5 shrink-0 text-[#8D8D8D] transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-[#FF6B1A]"
                                />
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Quote Banner */}
            <div className="mt-12 border-t border-[#2A2A2A] pt-6">
              <p className="text-xs italic leading-relaxed text-[#8D8D8D]">
                "Every story deserves a frame that honors its spirit."
              </p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#FB5406]">
                — Happy Lamb Studios
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}