"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

const categories = ["All Work", "Residential", "Commercial", "Penthouse"];

const projects = [
  {
    id: "01",
    name: "Lekki Penthouse",
    category: "Penthouse",
    year: "2025",
    location: "Lekki, Lagos",
    image: "/projects/lekki-penthouse.jpg",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: "02",
    name: "Ikoyi Residence",
    category: "Residential",
    year: "2024",
    location: "Ikoyi, Lagos",
    image: "/projects/ikoyi-residence.jpg",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "03",
    name: "VI Boardroom",
    category: "Commercial",
    year: "2025",
    location: "Victoria Island, Lagos",
    image: "/projects/vi-boardroom.jpg",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "04",
    name: "Banana Island Villa",
    category: "Residential",
    year: "2024",
    location: "Banana Island, Lagos",
    image: "/projects/banana-island-villa.jpg",
    aspectRatio: "aspect-[4/5]",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Work");

  const filteredProjects =
    activeCategory === "All Work"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative py-28 sm:py-40 bg-cream text-ink border-t border-ink/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-ink/10 pb-8 mb-12 sm:mb-20 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent text-[11px] font-mono uppercase tracking-[0.3em]">
                02 / Portfolio
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl text-ink font-light tracking-tight">
              Selected Works.
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-mono transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-ink text-cream"
                    : "bg-ink/5 text-ink/70 hover:bg-ink/10 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Staggered Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                key={project.id}
                className={`group block ${idx % 2 === 1 ? "sm:translate-y-16" : ""}`}
              >
                <a href={`#${project.id}`} className="block focus:outline-none">
                  {/* Image Container with Architectural Framing */}
                  <div
                    className={`relative ${project.aspectRatio} overflow-hidden rounded-none bg-ink/5 mb-6`}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                    />

                    {/* Dark Glass Overlay on Hover */}
                    <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-cream text-ink flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                        <ArrowUpRight size={20} />
                      </span>
                    </div>

                    {/* Corner Metadata Badge */}
                    <div className="absolute top-4 left-4 bg-ink/70 backdrop-blur-md text-cream px-3 py-1 text-[10px] font-mono uppercase tracking-widest border border-white/10">
                      [{project.id}] &bull; {project.year}
                    </div>
                  </div>

                  {/* Text Details & Floating Divider Line */}
                  <div className="border-t border-ink/10 pt-4 flex items-end justify-between">
                    <div>
                      <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-accent mb-1">
                        {project.category}
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-ink font-light tracking-tight group-hover:text-accent transition-colors duration-300">
                        {project.name}
                      </h3>
                    </div>

                    <div className="text-right">
                      <span className="block text-xs font-mono uppercase tracking-widest text-ink/50">
                        {project.location}
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More / Archive Callout */}
        <div className="mt-32 sm:mt-44 text-center border-t border-ink/10 pt-16">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-ink/50 mb-6">
            Looking for more architectural concepts?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-ink text-ink text-xs uppercase tracking-[0.2em] font-semibold hover:bg-ink hover:text-cream transition-all duration-500"
          >
            <Plus size={14} />
            <span>Request Full Portfolio</span>
          </a>
        </div>
      </div>
    </section>
  );
}
