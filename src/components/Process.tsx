"use client";

import { motion } from "framer-motion";
import { Hammer, HardHat, Ruler, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Site Survey & Blueprinting",
    desc: "We measure down to the millimeter and analyze site lighting before drafting high-precision technical layouts.",
    icon: Ruler,
  },
  {
    num: "02",
    title: "Material Curation",
    desc: "Sourcing custom joinery, bespoke stonework, and hand-selected textiles tailored to the project's aesthetic.",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "On-Site Execution",
    desc: "Direct hands-on site management alongside artisans, structural engineers, and skilled contractors.",
    icon: HardHat,
  },
  {
    num: "04",
    title: "Final Styling & Handover",
    desc: "Precision installation of custom furniture, lighting accents, and final architectural detailing.",
    icon: Hammer,
  },
];

const galleryItems = [
  {
    src: "/process/site-visit.jpg",
    caption: "Site Survey & Assessment",
    step: "PHASE 01",
    featured: true,
  },
  {
    src: "/process/installation.jpg",
    caption: "Custom Joinery Installation",
    step: "PHASE 02",
    featured: false,
  },
  {
    src: "/process/team.jpg",
    caption: "Artisan & Technical Supervision",
    step: "PHASE 03",
    featured: false,
  },
  {
    src: "/process/finishing.jpg",
    caption: "Final Turnkey Detailing",
    step: "PHASE 04",
    featured: false,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-28 sm:py-40 bg-ink text-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-cream/15 pb-8 mb-16 sm:mb-24 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent text-[11px] font-mono uppercase tracking-[0.3em]">
                03 / Behind the Scenes
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl tracking-tight text-cream font-light">
              On Site, Every Step.
            </h2>
          </div>

          <p className="text-cream/50 text-xs font-mono uppercase tracking-[0.25em] max-w-xs">
            [ Site Rigor &bull; Execution Excellence ]
          </p>
        </motion.div>

        {/* Top Split Layout: Narrative & Step Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-cream font-light leading-snug">
              The finished space is just the final chapter — <br />
              <span className="italic font-serif text-accent">
                the true craft happens on site.
              </span>
            </h3>
            <p className="text-cream/70 text-base sm:text-lg leading-relaxed font-light">
              Before photo shoots and reveals come scaffolding, technical
              precision, and relentless site visits. We oversee every trade to
              ensure design intent translates seamlessly into structural
              reality.
            </p>
          </div>

          {/* Sequential Process Steps */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t lg:border-t-0 lg:border-l border-cream/15 pt-8 lg:pt-0 lg:pl-12">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-accent text-xs font-mono uppercase tracking-widest">
                      [{step.num}]
                    </span>
                    <Icon size={16} className="text-cream/40" />
                  </div>
                  <h4 className="font-[family-name:var(--font-display)] text-lg text-cream font-light">
                    {step.title}
                  </h4>
                  <p className="text-cream/60 text-xs font-sans font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive B-Roll Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-[260px] sm:auto-rows-[280px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative overflow-hidden bg-white/5 border border-cream/10 ${
                item.featured
                  ? "sm:col-span-2 sm:row-span-2"
                  : "col-span-1 row-span-1"
              }`}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover grayscale transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
              />

              {/* Dynamic Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Architectural Label Badges */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent bg-ink/60 backdrop-blur-md px-2.5 py-1 self-start border border-cream/10">
                  {item.step}
                </span>

                <div>
                  <p className="font-[family-name:var(--font-display)] text-lg sm:text-xl text-cream font-light tracking-wide">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
