import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, ChevronUp, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FinalCtaSection() {
  const triggerCelebration = () => {
    // Launch energetic futuristic confetti burst
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.65 },
      colors: ['#00f0ff', '#a855f7', '#ffffff', '#0066ff'],
    });

    // Scroll smoothly to top hero section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="final-cta" className="section-block relative text-center min-h-screen flex flex-col items-center justify-center">
      
      <div className="max-w-4xl mx-auto w-full space-y-10 z-10 px-4">
        
        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-mono-tech text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse" />
            <span>07 // THE FUTURE CALLS</span>
          </div>

          <h2 className="font-orbitron font-black text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-wider leading-tight text-glow-cyan drop-shadow-readability">
            THE FUTURE <br />
            IS BUILT BY THOSE <br />
            <span className="gradient-text-purple">WHO CREATE IT.</span>
          </h2>
        </motion.div>

        {/* Branding Glass Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/40 max-w-lg mx-auto space-y-4 shadow-[0_0_60px_rgba(0,240,255,0.2)]"
        >
          <div className="flex items-center justify-center gap-2 text-cyan-400 font-mono-tech text-xs tracking-widest">
            <Trophy className="w-4 h-4 text-cyan-400" />
            <span>IIT BOMBAY CAMPUS AMBASSADOR</span>
          </div>
          <div className="font-orbitron font-extrabold text-4xl sm:text-5xl text-white tracking-widest">
            TECHFEST
          </div>
          <div className="font-orbitron font-bold text-xl text-cyan-400 tracking-wider">
            IIT BOMBAY
          </div>
          <div className="w-16 h-16 rounded-full border-2 border-purple-400 flex items-center justify-center mx-auto shadow-[0_0_25px_#a855f7] bg-purple-950/50">
            <span className="font-orbitron font-extrabold text-2xl text-purple-200">30</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-4 flex flex-col items-center gap-4"
        >
          <button
            onClick={triggerCelebration}
            className="cyber-button group cursor-pointer text-lg sm:text-xl px-12 py-6 shadow-[0_0_35px_rgba(0,240,255,0.7)]"
          >
            <span className="flex items-center gap-3">
              <Rocket className="w-6 h-6 text-slate-900 group-hover:-translate-y-1 transition-transform" />
              EXPLORE TECHFEST
            </span>
          </button>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs font-mono-tech text-cyan-400/90 hover:text-white transition-colors pt-3 cursor-pointer"
          >
            <ChevronUp className="w-4 h-4 animate-bounce text-cyan-400" />
            <span>RETURN TO HERO VIEWPORT</span>
          </button>
        </motion.div>

      </div>

    </section>
  );
}
