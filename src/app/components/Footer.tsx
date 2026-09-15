"use client";

import {
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Mail, MapPin, ArrowUp } from "lucide-react";

const WHATSAPP_NUMBER = "2348025780872";
const EMAIL = "info@classyartinterior.com";

const socials = [
  {
    icon: FaInstagram,
    href: "https://instagram.com/classy_interiordeco",
    label: "Instagram",
  },
  {
    icon: FaTiktok,
    href: "https://tiktok.com/@classy_interiordeco", // Fixed TikTok link domain
    label: "TikTok",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/stella-nzeribe-5b0357173",
    label: "LinkedIn",
  },
  {
    icon: FaWhatsapp,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    label: "WhatsApp",
  },
];

const navLinks = [
  { label: "About Studio", href: "#about" },
  { label: "Selected Work", href: "#projects" },
  { label: "Site Process", href: "#process" },
  { label: "Start Project", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-ink text-cream pt-20 sm:pt-32 pb-12 border-t border-cream/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Top Editorial Index Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-cream/10 pb-12 mb-16 gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cream/70">
              Classyart Interiors &bull; Lagos Studio
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-cream/50 hover:text-accent transition-colors duration-300"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-cream/20 flex items-center justify-center group-hover:border-accent group-hover:-translate-y-1 transition-all duration-300">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 mb-20">
          {/* Brand & Manifesto Column */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-cream font-light tracking-tight">
              Classyart Interiors
            </h3>
            <p className="text-cream/60 text-sm sm:text-base leading-relaxed max-w-sm font-light">
              Architectural design and spatial execution built on site rigor and
              close supervision — never mood boards alone.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[10px] font-mono uppercase tracking-[0.25em] text-accent px-3 py-1 bg-white/5 border border-cream/10">
                Turnkey Design &amp; Build
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-accent text-[10px] font-mono uppercase tracking-[0.3em]">
              Directory
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-cream/70 hover:text-cream hover:pl-1.5 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="text-[10px] font-mono text-cream/30">
                      &rarr;
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-accent text-[10px] font-mono uppercase tracking-[0.3em]">
              Studio Desk
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-3 text-xs sm:text-sm font-mono text-cream/80 hover:text-accent transition-colors"
                >
                  <Mail size={15} className="text-accent shrink-0" />
                  <span className="underline underline-offset-4 decoration-cream/20 group-hover:decoration-accent">
                    {EMAIL}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm font-mono text-cream/80">
                <MapPin size={15} className="text-accent shrink-0 mt-0.5" />
                <span>Victoria Island, Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Social Media Links */}
        <div className="pt-8 border-t border-cream/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
          <p className="text-cream/40 text-[11px] font-mono uppercase tracking-wider text-center sm:text-left">
            &copy; Built by Hotis Studio
          </p>
          <p className="text-cream/40 text-[11px] font-mono uppercase tracking-wider text-center sm:text-left">
            &copy; {new Date().getFullYear()} Classyart Interiors. All rights
            reserved.
          </p>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white/5 border border-cream/10 flex items-center justify-center text-cream/70 hover:text-cream hover:bg-accent hover:border-accent transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
