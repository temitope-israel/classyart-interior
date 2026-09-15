"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "2348025780872";

const navLinks = [
  { label: "Selected Work", href: "#projects", num: "01" },
  { label: "Process", href: "#process", num: "02" },
  { label: "Contact", href: "#contact", num: "03" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          scrolled
            ? "bg-cream/95 dark:bg-ink/95 border-b border-ink/15 dark:border-white/15 backdrop-blur-md py-4 shadow-sm"
            : "bg-transparent py-7 sm:py-9"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Editorial Wordmark with Dynamic Contrast */}
          <a href="#top" className="group flex flex-col focus:outline-none">
            <div className="flex items-center gap-1.5">
              <span
                className={`font-[family-name:var(--font-display)] text-2xl sm:text-3xl tracking-[-0.03em] font-medium transition-colors duration-500 ${
                  scrolled ? "text-ink dark:text-cream" : "text-white"
                }`}
              >
                CLASSYART
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </div>
            <span
              className={`text-[9px] uppercase tracking-[0.35em] font-sans font-semibold transition-colors duration-500 -mt-1 ${
                scrolled ? "text-ink/70 dark:text-cream/70" : "text-white/80"
              }`}
            >
              Interiors & Architectural Studio
            </span>
          </a>

          {/* Magnetic Floating Nav Container */}
          <nav
            aria-label="Main Navigation"
            className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-500 ${
              scrolled
                ? "bg-ink/10 dark:bg-white/10 border border-ink/15 dark:border-white/15"
                : "bg-black/30 dark:bg-black/40 backdrop-blur-md border border-white/20"
            }`}
          >
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300 focus:outline-none ${
                  scrolled
                    ? hoveredIndex === idx
                      ? "text-cream dark:text-ink"
                      : "text-ink dark:text-cream"
                    : hoveredIndex === idx
                      ? "text-ink"
                      : "text-white"
                }`}
              >
                {/* Active Pill Hover Highlight */}
                {hoveredIndex === idx && (
                  <motion.span
                    layoutId="navHover"
                    className={`absolute inset-0 rounded-full -z-10 ${
                      scrolled ? "bg-ink dark:bg-cream" : "bg-white"
                    }`}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="flex items-center gap-2">
                  <span className="text-[9px] font-mono opacity-60">
                    {link.num}
                  </span>
                  <span>{link.label}</span>
                </span>
              </a>
            ))}
          </nav>

          {/* Action Group */}
          <div className="flex items-center gap-4">
            {/* Minimal High-Contrast CTA Button */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via WhatsApp"
              className={`group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-500 overflow-hidden border ${
                scrolled
                  ? "border-ink bg-ink text-cream hover:bg-accent hover:border-accent dark:border-cream dark:bg-cream dark:text-ink dark:hover:bg-accent dark:hover:text-cream"
                  : "border-white/40 bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-ink"
              }`}
            >
              <MessageCircle
                size={13}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:-rotate-12"
              />
              <span className="hidden sm:inline">Start Project</span>
              <ArrowUpRight
                size={12}
                className="opacity-80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-full md:hidden transition-all duration-300 ${
                scrolled
                  ? "text-ink dark:text-cream bg-ink/5 dark:bg-white/10 hover:bg-ink/10"
                  : "text-white bg-black/30 hover:bg-black/50"
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Architectural Mobile Curtain Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-ink text-cream md:hidden pt-36 px-8 pb-12 flex flex-col justify-between"
          >
            <div className="space-y-12">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-accent">
                  Menu Directory
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-mono opacity-60">
                  Lagos, NG
                </span>
              </div>

              <ul className="space-y-8">
                {navLinks.map((link) => (
                  <li key={link.href} className="overflow-hidden">
                    <motion.a
                      initial={{ y: 40 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-baseline justify-between text-4xl font-[family-name:var(--font-display)] tracking-tight text-white hover:text-accent"
                    >
                      <span className="group-hover:translate-x-3 transition-transform duration-300">
                        {link.label}
                      </span>
                      <span className="text-sm font-mono text-accent">
                        [{link.num}]
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Contact Bar */}
            <div className="space-y-4 border-t border-white/10 pt-8">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full py-4 px-6 bg-cream text-ink hover:bg-accent hover:text-cream transition-colors rounded-full text-xs uppercase tracking-[0.2em] font-bold"
              >
                <span>Direct Inquiry</span>
                <ArrowUpRight size={16} />
              </a>
              <p className="text-[10px] text-center text-white/50 uppercase tracking-widest font-mono">
                © Classyart Interiors — All Rights Reserved
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
