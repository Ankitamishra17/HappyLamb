import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Shared design tokens — matches FeaturedWork.jsx so the footer
// reads as the same brand, not a different site.
const GOLD = "#fb5406";
const INK = "#FFFFFF";
const MUTED = "rgba(255,255,255,0.55)";
const BASE = "#050505";
const PANEL = "#0a0a0a";
const HAIR = "rgba(255,255,255,0.08)";

const FONT_DISPLAY = "'Bebas Neue', sans-serif";
const FONT_BODY = "'Poppins', sans-serif";
const FONT_MONO = "'Poppins', sans-serif";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
  // { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

// Hand-drawn inline SVG icons (no icon library dependency)
const ICONS = {
  instagram: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  ),
  facebook: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 8.5H16.5V5.5H14.2C12 5.5 10.5 7 10.5 9.3V11.5H8.5V14.5H10.5V20.5H13.5V14.5H15.6L16 11.5H13.5V9.6C13.5 8.9 13.9 8.5 14.5 8.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  youtube: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.5"
        y="6"
        width="19"
        height="12"
        rx="3.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M10.3 9.5L14.8 12L10.3 14.5V9.5Z" fill="currentColor" />
    </svg>
  ),
  twitter: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 4H21L15.2 10.6L22 20H16.6L12.4 14.4L7.6 20H5L11.2 12.9L4.7 4H10.2L14 9.1L18.5 4Z"
        fill="currentColor"
      />
    </svg>
  ),
  mail: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 6.5L12 13L20 6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  phone: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 3.5C6 3.5 5 4.5 5 5.8C5 13 11 19 18.2 19C19.5 19 20.5 18 20.5 17L20.5 15.3C20.5 14.7 20 14.2 19.4 14.1L16.4 13.5C15.9 13.4 15.4 13.6 15.1 14L14.1 15.2C11.9 14.1 10 12.2 8.9 10L10.1 9C10.5 8.6 10.6 8.1 10.5 7.6L9.9 4.6C9.8 4 9.3 3.5 8.7 3.5H7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pin: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21C12 21 18.5 14.9 18.5 10.2C18.5 6.6 15.6 3.7 12 3.7C8.4 3.7 5.5 6.6 5.5 10.2C5.5 14.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="10.1"
        r="2.3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  ),
  arrowUpRight: (
    <svg
      className="h-3 w-3"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  // was referenced below as ICONS.check but never defined — the success
  // state was silently rendering with no icon at all.
  check: (
    <svg
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12.5L9.5 17L19 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

// Colorful brand badges (Instagram gradient, FB blue, YouTube red) clashed
// with every other section's monochrome-plus-orange system — unified to
// match instead of reading like a different site's footer.
const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", icon: ICONS.instagram },
  { label: "Facebook", href: "https://facebook.com", icon: ICONS.facebook },
  { label: "YouTube", href: "https://youtube.com", icon: ICONS.youtube },
  { label: "Twitter", href: "https://twitter.com", icon: ICONS.twitter },
];

const CONTACTS = [
  { icon: ICONS.phone, label: "+91 9820778491", href: "tel:+919820778491" },
  {
    icon: ICONS.mail,
    label: " dilip@happylamb.co.in",
    href: "mailto: dilip@happylamb.co.in",
  },
  {
    icon: ICONS.pin,
    label: `504, 5th Floor, Share Siddhivinayak New-2 Building,
Sahakari Co. Hoc. Socty., Iraniwadi,
Hemu Colony Road No. 04,
Kandivali West, Mumbai – 400067`,
    href: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <span
        className="h-1.5 w-1.5 "
        style={{ backgroundColor: GOLD }}
      />
      <h3
        className="text-[12px] font-bold uppercase tracking-[0.18em]"
        style={{ fontFamily: FONT_MONO, color: MUTED }}
      >
        {children}
      </h3>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: BASE,
        color: INK,
        fontFamily: FONT_BODY,
        borderTop: `1px solid ${HAIR}`,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&display=swap');
      `}</style>

      {/* ambient gold glow, echoes the hero glow in FeaturedWork */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-gradient-to-b from-[#fb5406]/10 via-transparent to-transparent blur-[150px]" />

      {/* Cinema-ticker marquee — scrolls continuously like an end-credits strip */}
      <div
        className="relative h-9 w-full overflow-hidden"
        style={{ background: PANEL, borderBottom: `1px solid ${HAIR}` }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 flex items-center gap-8 whitespace-nowrap pr-8 text-[11px] font-semibold uppercase tracking-[0.25em]"
          style={{ fontFamily: FONT_MONO, color: MUTED }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[0, 1].map((rep) => (
            <div key={rep} className="flex shrink-0 items-center gap-8">
              {[
                "Cinematic Storytelling",
                "Visual Excellence",
                "Narrative Integrity",
                "Happy Lamb Production",
              ].map((t) => (
                <span key={t} className="flex items-center gap-8">
                  <span>{t}</span>
                  <span
                    className="h-1 w-1 "
                    style={{ backgroundColor: GOLD }}
                  />
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle film-grain texture over the whole footer */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05] mix-blend-screen"
        aria-hidden="true"
      >
        <filter id="footerGrain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#footerGrain)" />
      </svg>

      <motion.div
        className="mx-auto max-w-7xl px-12 pt-16 pb-10 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Main Section */}
        <div
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 pb-14 border-b"
          style={{ borderColor: HAIR }}
        >
          {/* Brand & Mission */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mb-5 text-3xl uppercase tracking-wide"
              style={{ fontFamily: FONT_DISPLAY, color: INK }}
            >
              <img
                src="/logo.jpeg"
                alt="Happy Lamb Production"
                className="h-10 w-auto"
              />
            </motion.div>

            <p
              className="text-[15px] leading-relaxed max-w-sm mb-7 font-normal"
              style={{ color: MUTED }}
            >
              Stories crafted with precision. We are a creative production
              studio focused on narrative integrity, visual excellence, and
              cinematic flair.
            </p>

            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <motion.span
                    className="absolute inline-flex h-full w-full "
                    style={{ backgroundColor: GOLD }}
                    animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                  <span
                    className="relative inline-flex h-2.5 w-2.5 "
                    style={{ backgroundColor: GOLD }}
                  />
                </span>
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: FONT_MONO, color: MUTED }}
                >
                  Follow Us
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                {SOCIALS.map(({ label, href, icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center  transition-colors duration-300"
                    style={{
                      background: PANEL,
                      border: `1px solid ${HAIR}`,
                      color: MUTED,
                    }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = GOLD;
                      e.currentTarget.style.borderColor = "rgba(251,84,6,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = MUTED;
                      e.currentTarget.style.borderColor = HAIR;
                    }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <SectionHeading>Quick Links</SectionHeading>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-2 text-[15px] font-medium transition-colors"
                    style={{ color: MUTED }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = INK)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
                  >
                    <span className="h-1.5 w-1.5  bg-transparent transition-colors group-hover:bg-[#fb5406]" />
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <SectionHeading>Contact Us</SectionHeading>
            <div className="space-y-3 text-[14px]">
              {CONTACTS.map(({ icon, label, href }) => {
                const content = (
                  <>
                    <span
                      className="shrink-0 p-2.5  transition-all duration-300"
                      style={{
                        background: "rgba(251,84,6,0.08)",
                        color: GOLD,
                        border: "1px solid rgba(251,84,6,0.2)",
                      }}
                    >
                      {icon}
                    </span>
                    <span
                      className="font-medium leading-relaxed"
                      style={{ color: MUTED }}
                    >
                      {label}
                    </span>
                  </>
                );
                const className =
                  "group flex items-start gap-3.5 py-1 transition-colors duration-200";
                return href ? (
                  <a key={label} href={href} className={className}>
                    {content}
                  </a>
                ) : (
                  <div key={label} className={className}>
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <SectionHeading>Stay Updated</SectionHeading>
            <p
              className="text-[14px] mb-4 leading-relaxed"
              style={{ color: MUTED }}
            >
              Occasional notes on new work — no noise, unsubscribe anytime.
            </p>
            {submitted ? (
              <div
                className="flex items-center gap-2 text-[13px] font-semibold  px-4 py-3"
                style={{
                  background: "rgba(251,84,6,0.08)",
                  color: GOLD,
                  border: "1px solid rgba(251,84,6,0.2)",
                }}
              >
                {ICONS.check}
                <span>Thanks — you're on the list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@studio.com"
                  className="flex-1 min-w-0  px-4 py-3 text-[13px] outline-none transition-colors"
                  style={{
                    background: PANEL,
                    border: `1px solid ${HAIR}`,
                    color: INK,
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(251,84,6,0.5)")
                  }
                  onBlur={(e) => (e.currentTarget.style.borderColor = HAIR)}
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="shrink-0 flex h-11 w-11 items-center justify-center  transition-transform hover:scale-105"
                  style={{ background: GOLD, color: "#000" }}
                >
                  {ICONS.arrowUpRight}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Bottom Bar Info */}
        <motion.div
          variants={itemVariants}
          className="pt-8 flex flex-col-reverse items-center justify-between gap-4 text-center sm:flex-row sm:text-left text-xs font-medium"
          style={{ color: MUTED, fontFamily: FONT_MONO }}
        >
          <p>
            © {new Date().getFullYear()} Happy Lamb Production. All rights
            reserved.
          </p>
          <a
            href="https://deboxtechnology.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 transition-colors"
            style={{ color: MUTED }}
            onMouseEnter={(e) => (e.currentTarget.style.color = INK)}
            onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
          >
            <span>Developed By</span>
            <span
              className="font-semibold transition-colors"
              style={{ color: GOLD }}
            >
              Debox Technology
            </span>
            <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
              {ICONS.arrowUpRight}
            </span>
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
}
