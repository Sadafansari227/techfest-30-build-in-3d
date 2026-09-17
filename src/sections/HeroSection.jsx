import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('core');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="section-block relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 z-10">
        
        {/* Left Column: Clean Minimalist Typography & Single Primary CTA (Takes 6 or 7 cols on desktop) */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Subtitle / Edition Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex items-center gap-3"
          >
            <span className="font-mono-tech text-xs tracking-[0.25em] text-cyan-400 font-bold uppercase">
              30TH EDITION
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="font-mono-tech text-xs tracking-[0.2em] text-slate-400 uppercase">
              THE FUTURE OF TECHNOLOGY
            </span>
          </motion.div>

          {/* Main Title Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="space-y-2"
          >
            <h1 className="font-orbitron font-black text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white uppercase text-glow-cyan leading-none">
              TECHFEST
            </h1>
            <h2 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-cyan-400 tracking-[0.25em] uppercase">
              IIT BOMBAY
            </h2>
          </motion.div>

          {/* One Short Sentence */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-xl"
          >
            Explore a world where ideas, technology and imagination come together.
          </motion.p>

          {/* Single Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="pt-2"
          >
            <button
              onClick={scrollToNext}
              className="cyber-button group cursor-pointer inline-flex items-center gap-3 px-8 py-4"
            >
              <span>ENTER THE FUTURE</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </motion.div>

        </div>

        {/* Right Column: Empty Space Reserved for 3D Core Viewport (Desktop) */}
        <div className="hidden lg:block lg:col-span-5 pointer-events-none" />

      </div>
    </section>
  );
}
