import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// Brand tokens — Framecraft Productions
const BRAND = {
  orange: "#FB5406",
  orangeHover: "#FF6B1A",
  base: "#090909",
  charcoal: "#1A1A1A",
  border: "#2A2A2A",
  white: "#FFFFFF",
  bodyText: "#C9C9C9",
  muted: "#8D8D8D",
};

const FONT_DISPLAY = "'Bebas Neue', sans-serif";
const FONT_BODY = "'Poppins', sans-serif";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: " Team", href: "/team" },
  { label: "Contact", href: "/contact" },
  // { label: "Blogs", href: "/blogs" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // useLocation() re-renders on every route change — client-side Link
  // navigation, back/forward, or a hard reload — so `active` is always
  // in sync with the URL without any manual popstate wiring.
  const location = useLocation();
  const active =
    NAV_LINKS.find((l) => l.href === location.pathname)?.label || "Home";

  // Smoothed scroll-progress value, 0 -> 1 across the whole document
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scrolling when mobile nav is open, close on Escape
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  // Close the mobile menu automatically whenever the route changes
  // (e.g. user taps a link) so it doesn't stay open on the new page.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{ fontFamily: FONT_BODY }}
    >
      {/* Scroll progress bar — fills left to right as the page scrolls */}
      <div
        className="relative h-[3px] w-full"
        style={{ backgroundColor: BRAND.border }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 w-full origin-left"
          style={{ scaleX, backgroundColor: BRAND.orange }}
        />
      </div>

      {/* Main Bar with conditional glassmorphism, dark theme */}
      <div
        className="w-full transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(9,9,9,0.9)" : BRAND.base,
          backdropFilter: scrolled ? "blur(10px)" : "none",
          boxShadow: scrolled
            ? "0 1px 0 0 rgba(255,255,255,0.06), 0 8px 24px -12px rgba(0,0,0,0.5)"
            : "none",
          paddingTop: scrolled ? "10px" : "16px",
          paddingBottom: scrolled ? "10px" : "16px",
        }}
      >
        {/* 3-column grid: logo left, nav centered, CTA/toggle right */}
        <div className="mx-auto grid grid-cols-2 lg:grid-cols-3 items-center max-w-7xl px-12">
          {/* Logo — left */}
          <Link
            to="/"
            className="group relative flex items-center shrink-0 gap-3"
          >
            <img
              src="/logo.jpeg"
              alt="Framecraft Productions"
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          {/* Desktop Navigation — centered */}
          <nav
            className="hidden lg:flex items-center justify-center gap-1 uppercase"
            onMouseLeave={() => setHovered(null)}
          >
            {NAV_LINKS.map((link) => {
              const isActive = active === link.label;
              const isHovered = hovered === link.label;
              const show = isActive || isHovered;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onMouseEnter={() => setHovered(link.label)}
                  className="relative px-4 py-2 text-[13px] font-medium tracking-wide"
                  style={{ color: isActive ? BRAND.orange : BRAND.bodyText }}
                >
                  <span
                    className="relative z-10 transition-colors duration-200"
                    style={{
                      color: isHovered && !isActive ? BRAND.white : undefined,
                    }}
                  >
                    {link.label}
                  </span>

                  {/* Single underline that draws in from the center on hover/active */}
                  <motion.span
                    className="pointer-events-none absolute -bottom-0.5 left-1/2 h-[2px] rounded-full -translate-x-1/2"
                    style={{ backgroundColor: BRAND.orange }}
                    initial={false}
                    animate={{ width: show ? "70%" : 0, opacity: show ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right side — CTA on desktop, menu toggle on mobile */}
          <div className="flex items-center justify-end gap-4">
            <motion.div
              className="hidden lg:block"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-1.5  px-5 py-2.5 text-[13px] font-semibold tracking-wide text-white shadow-sm hover:shadow-md"
                style={{ backgroundColor: BRAND.orange }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = BRAND.orangeHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = BRAND.orange)
                }
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="lg:hidden relative z-[60] flex h-10 w-10 items-center justify-center  transition-colors"
            >
              <span className="relative flex h-4 w-5 flex-col justify-between">
                <motion.span
                  className="block h-[2px] w-full "
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 7 : 0,
                    backgroundColor: BRAND.white,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="block h-[2px] w-full "
                  animate={{
                    opacity: isOpen ? 0 : 1,
                    x: isOpen ? 8 : 0,
                    backgroundColor: BRAND.white,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-[2px] w-full "
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -7 : 0,
                    backgroundColor: BRAND.white,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — cinematic iris wipe, expanding from the toggle button
          like a camera aperture opening, in place of a stock slide-in drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="iris"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 38px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 38px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 38px)" }}
            transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
            className="lg:hidden fixed inset-0 z-50 flex flex-col"
            style={{ backgroundColor: BRAND.base }}
          >
            <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-8">
              {NAV_LINKS.map((link, idx) => {
                const isActive = active === link.label;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: idx * 0.06 + 0.25,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-2 py-2.5 text-[26px] font-medium uppercase tracking-wide"
                    style={{
                      color: isActive ? BRAND.orange : BRAND.white,
                      fontFamily: FONT_DISPLAY,
                    }}
                  >
                    <span
                      className="text-[13px]"
                      style={{
                        color: isActive
                          ? BRAND.orange
                          : "rgba(255,255,255,0.35)",
                        fontFamily: FONT_BODY,
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </motion.a>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: NAV_LINKS.length * 0.06 + 0.3,
                duration: 0.4,
              }}
              className="flex justify-center px-8 pb-10"
            >
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded-sm px-6 py-3 text-[14px] font-semibold tracking-wide"
                style={{ backgroundColor: BRAND.orange, color: BRAND.white }}
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
