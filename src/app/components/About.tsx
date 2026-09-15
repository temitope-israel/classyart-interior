"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Compass, ShieldCheck, Sparkles } from "lucide-react";

const stats = [
  { label: "Completed Projects", value: "205+" },
  { label: "Design Experience", value: "8 Yrs+" },
  { label: "Lagos & Beyond", value: "100%" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-36 bg-cream text-ink overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header / Directory Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-ink/10 pb-8 mb-16 sm:mb-24 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent text-[11px] font-mono uppercase tracking-[0.3em]">
                01 / About the Studio
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl tracking-tight text-ink font-light">
              Craft &amp; Conviction.
            </h2>
          </div>

          <p className="text-ink/50 text-xs font-mono uppercase tracking-[0.25em] max-w-xs">
            [ Principal Designer &amp; Site Director ]
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Architectural Framed Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-none border border-ink/10 group">
              <img
                src="/about.jpg"
                alt="Founder, Classyart Interiors"
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-40" />
            </div>

            {/* Floating Architectural Badge */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-8 sm:-right-8 bg-ink text-cream p-6 max-w-[220px] hidden sm:block border border-white/10 shadow-2xl">
              <span className="block text-[9px] font-mono uppercase tracking-[0.25em] text-accent mb-2">
                Core Philosophy
              </span>
              <p className="text-xs font-sans leading-relaxed text-cream/80">
                “True luxury is defined by structural integrity and personal
                oversight.”
              </p>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-6 space-y-10 lg:pl-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-ink leading-[1.15] font-light">
                Interiors built on real site craft, <br />
                <span className="italic font-serif text-accent">
                  never shortcuts.
                </span>
              </h3>

              <div className="space-y-4 text-ink/70 text-base sm:text-lg leading-relaxed font-light">
                <p>
                  Every project starts on site, not on a decorative mood board.
                  From the preliminary architectural concepts down to the final
                  custom joinery installation, the work is personally directed
                  and managed.
                </p>
                <p>
                  Based in Lagos, Classyart Interiors works alongside clients
                  who desire spaces that feel intentionally considered rather
                  than simply styled.
                </p>
              </div>
            </motion.div>

            {/* Mini Values List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 border-t border-b border-ink/10 py-6"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-accent shrink-0" />
                <span className="text-xs uppercase tracking-widest font-mono text-ink/80">
                  Turnkey Precision
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Compass size={18} className="text-accent shrink-0" />
                <span className="text-xs uppercase tracking-widest font-mono text-ink/80">
                  Site Supervision
                </span>
              </div>
            </motion.div>

            {/* Metrics Counter Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-2"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-ink font-light">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-ink/50">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
