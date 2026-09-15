"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

// Headline pairs that will cycle infinitely
const textPairs = [
  { header: "CRAFTING ELEVATION", subText: "Living spaces, refined." },
  { header: "CURATED LIVING", subText: "Architecture meets emotion." },
  { header: "SPATIAL POETRY", subText: "Bespoke luxury interiors." },
  { header: "SCULPTED SANCTUARY", subText: "Designed for modern life." },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayedHeader, setDisplayedHeader] = useState("");
  const [displayedSub, setDisplayedSub] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPair = textPairs[index];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Writing phase
      if (displayedHeader.length < currentPair.header.length) {
        timeout = setTimeout(() => {
          setDisplayedHeader(
            currentPair.header.slice(0, displayedHeader.length + 1),
          );
        }, 80);
      } else if (displayedSub.length < currentPair.subText.length) {
        timeout = setTimeout(() => {
          setDisplayedSub(
            currentPair.subText.slice(0, displayedSub.length + 1),
          );
        }, 50);
      } else {
        // Pause at the end before deleting
        timeout = setTimeout(() => setIsDeleting(true), 3000);
      }
    } else {
      // Deleting phase
      if (displayedSub.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedSub(
            currentPair.subText.slice(0, displayedSub.length - 1),
          );
        }, 30);
      } else if (displayedHeader.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedHeader(
            currentPair.header.slice(0, displayedHeader.length - 1),
          );
        }, 40);
      } else {
        // Move to next text pair
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % textPairs.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedHeader, displayedSub, isDeleting, index]);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 pb-10 px-6 sm:px-12"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-100"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/30 to-ink/90" />
      </div>

      {/* Top Header Tagline / Indexing */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-cream/15 pb-6 text-cream/70"
      >
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] px-2.5 py-1 border border-cream/20 rounded-sm bg-ink/30 backdrop-blur-md">
            Vol. 01 — 2026
          </span>
          <span className="hidden sm:inline text-xs font-sans tracking-widest uppercase text-cream/50">
            Interior Architecture
          </span>
        </div>

        {/* <span className="text-xs font-mono uppercase tracking-[0.25em] text-cream/60">
          [ 06.48° N, 03.37° E ]
        </span> */}
      </motion.div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Typewriter Header Container */}
          <div className="lg:col-span-9 space-y-4 min-h-[220px] sm:min-h-[280px] flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent text-xs font-mono uppercase tracking-[0.3em]"
            >
              Bespoke Spaces &amp; Private Residences
            </motion.p>

            <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-7xl lg:text-8xl font-light tracking-[-0.04em] leading-[0.95]">
              {/* Solid Cream Header */}
              <span className="text-cream block">
                {displayedHeader}
                {displayedSub === "" && (
                  <span className="animate-pulse text-accent ml-1">|</span>
                )}
              </span>

              {/* Solid Gold Sub-text */}
              <span className="italic font-serif text-accent block mt-2 text-4xl sm:text-6xl lg:text-7xl font-normal">
                {displayedSub}
                {displayedSub !== "" && (
                  <span className="animate-pulse text-cream ml-1">|</span>
                )}
              </span>
            </h1>
          </div>

          {/* Minimalist Side Info & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col gap-6 lg:border-l lg:border-cream/15 lg:pl-8"
          >
            <p className="text-cream/70 text-xs sm:text-sm font-sans font-light leading-relaxed">
              Timeless interior design crafted with natural materials,
              architectural precision, and sculptural form.
            </p>

            <a
              href="#projects"
              className="group inline-flex items-center justify-between w-full px-6 py-4 border border-cream/30 hover:border-cream bg-cream/5 hover:bg-cream hover:text-ink text-cream transition-all duration-500 rounded-none text-xs uppercase tracking-[0.25em] font-semibold backdrop-blur-sm"
            >
              <span>Explore Work</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar Anchor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-t border-cream/15 pt-6 text-cream/50 text-[10px] font-mono uppercase tracking-widest"
      >
        <div className="flex items-center gap-6">
          <span>Classyart Studio</span>
          <span className="hidden sm:inline text-cream/30">&bull;</span>
          <span className="hidden sm:inline text-cream/40">
            Residential &amp; Commercial
          </span>
        </div>

        <a
          href="#process"
          className="flex items-center gap-2 text-cream/70 hover:text-accent transition-colors"
        >
          <span>Scroll Down</span>
          <ArrowDownRight size={12} />
        </a>
      </motion.div>
    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import { ArrowDownRight, ArrowUpRight } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 pb-10 px-6 sm:px-12"
//     >
//       {/* Background Video with Crisp Contrast Overlay */}
//       <div className="absolute inset-0 z-0">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover object-center scale-100"
//           style={{ imageRendering: "-webkit-optimize-contrast" }}
//         >
//           <source src="/hero.mp4" type="video/mp4" />
//         </video>

//         {/* Dual Edge Vignette */}
//         <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/20 to-ink/90" />
//       </div>

//       {/* Top Header Tagline / Indexing */}
//       <motion.div
//         initial={{ opacity: 0, y: -15 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-cream/15 pb-6 text-cream/70"
//       >
//         <div className="flex items-center gap-3">
//           <span className="text-[10px] font-mono uppercase tracking-[0.3em] px-2.5 py-1 border border-cream/20 rounded-sm bg-ink/30 backdrop-blur-md">
//             Vol. 01 — 2026
//           </span>
//           <span className="hidden sm:inline text-xs font-sans tracking-widest uppercase text-cream/50">
//             Interior Architecture
//           </span>
//         </div>

//         <span className="text-xs font-mono uppercase tracking-[0.25em] text-cream/60">
//           [ 06.48° N, 03.37° E ]
//         </span>
//       </motion.div>

//       {/* Hero Core Content — Poster Layout */}
//       <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
//           {/* Headline Block */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-9 space-y-4"
//           >
//             <p className="text-accent text-xs font-mono uppercase tracking-[0.3em]">
//               Bespoke Spaces & Private Residences
//             </p>
//             <h1 className="font-[family-name:var(--font-display)] text-cream text-6xl sm:text-8xl lg:text-9xl font-light tracking-[-0.04em] leading-[0.9]">
//               LUXURY <br />
//               <span className="italic font-normal font-serif text-cream/90 pl-2 sm:pl-8">
//                 REDONE.
//               </span>
//             </h1>
//           </motion.div>

//           {/* Minimalist Side Quote & CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-3 flex flex-col gap-6 lg:border-l lg:border-cream/15 lg:pl-8"
//           >
//             <p className="text-cream/70 text-xs sm:text-sm font-sans font-light leading-relaxed">
//               Timeless interior design crafted with natural materials,
//               architectural precision, and sculptural form.
//             </p>

//             <a
//               href="#projects"
//               className="group inline-flex items-center justify-between w-full px-6 py-4 border border-cream/30 hover:border-cream bg-cream/5 hover:bg-cream hover:text-ink text-cream transition-all duration-500 rounded-none text-xs uppercase tracking-[0.25em] font-semibold backdrop-blur-sm"
//             >
//               <span>Explore Work</span>
//               <ArrowUpRight
//                 size={14}
//                 className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//               />
//             </a>
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom Bar Anchor */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.4 }}
//         className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-t border-cream/15 pt-6 text-cream/50 text-[10px] font-mono uppercase tracking-widest"
//       >
//         <div className="flex items-center gap-6">
//           <span>Classyart Studio</span>
//           <span className="hidden sm:inline text-cream/30">&bull;</span>
//           <span className="hidden sm:inline text-cream/40">
//             Residential & Commercial
//           </span>
//         </div>

//         <a
//           href="#process"
//           className="flex items-center gap-2 text-cream/70 hover:text-accent transition-colors"
//         >
//           <span>Scroll Down</span>
//           <ArrowDownRight size={12} />
//         </a>
//       </motion.div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import { ArrowUpRight, Play } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-12"
//     >
//       {/* Background Video with Cinematic Overlay */}
//       <div className="absolute inset-0 z-0">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover object-center scale-105 filter brightness-[0.85] contrast-[1.05]"
//           style={{ imageRendering: "-webkit-optimize-contrast" }}
//         >
//           <source src="/hero.mp4" type="video/mp4" />
//         </video>

//         {/* Multi-layered Vignette & Editorial Gradients */}
//         <div className="absolute inset-0 bg-ink/30 backdrop-blur-[1px]" />
//         <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-90" />
//         <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />
//       </div>

//       {/* Main Container */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full h-full flex flex-col justify-between min-h-[calc(100vh-8rem)]">
//         {/* Top Badging / Location Indicator */}
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.25em] text-cream/60 border-b border-cream/10 pb-4"
//         >
//           <div className="flex items-center gap-2">
//             <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
//             <span>Lagos &bull; Abuja &bull; London</span>
//           </div>
//           <span className="hidden sm:inline-block">
//             Est. 2024 &bull; Architectural Interiors
//           </span>
//         </motion.div>

//         {/* Hero Central Typography Grid */}
//         <div className="my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-8 space-y-6"
//           >
//             <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-cream/15 bg-cream/5 backdrop-blur-md">
//               <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-accent">
//                 Bespoke Design
//               </span>
//             </div>

//             <h1 className="font-[family-name:var(--font-display)] text-cream text-5xl sm:text-7xl lg:text-8xl tracking-[-0.03em] leading-[0.95] font-light">
//               Crafting <br />
//               <span className="italic font-normal text-cream/90">
//                 extraordinary
//               </span>{" "}
//               spaces.
//             </h1>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-4 flex flex-col justify-end space-y-8"
//           >
//             <p className="text-cream/70 text-sm sm:text-base font-sans font-light leading-relaxed max-w-sm">
//               We design luxury residential and commercial environments tailored
//               to elevate everyday living through minimalist sophistication.
//             </p>

//             {/* Action Group */}
//             <div className="flex flex-wrap items-center gap-4">
//               <a
//                 href="#projects"
//                 className="group inline-flex items-center gap-3 bg-cream text-ink text-xs uppercase tracking-[0.2em] font-semibold px-7 py-4 rounded-full hover:bg-accent hover:text-white transition-all duration-500 shadow-xl"
//               >
//                 <span>View Portfolio</span>
//                 <ArrowUpRight
//                   size={14}
//                   className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                 />
//               </a>

//               <a
//                 href="#process"
//                 className="inline-flex items-center gap-2 text-cream/80 hover:text-white text-xs uppercase tracking-[0.2em] px-5 py-4 transition-colors duration-300"
//               >
//                 <Play size={12} className="fill-current text-accent" />
//                 <span>Our Film</span>
//               </a>
//             </div>
//           </motion.div>
//         </div>

//         {/* Footer Meta Bar & Scroll Anchor */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="flex items-end justify-between pt-6 border-t border-cream/10 text-cream/50 text-[11px] font-mono tracking-widest uppercase"
//         >
//           <div>
//             <span className="block text-cream/30 text-[9px]">
//               Featured Project
//             </span>
//             <span className="text-cream/80">
//               The Oak Residence — Victoria Island
//             </span>
//           </div>

//           <a
//             href="#projects"
//             className="hidden sm:flex items-center gap-2 text-cream/60 hover:text-cream transition-colors group"
//           >
//             <span>Scroll</span>
//             <span className="block w-px h-8 bg-cream/30 group-hover:h-12 group-hover:bg-accent transition-all duration-300" />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
