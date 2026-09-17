import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, ShieldAlert } from 'lucide-react';

export default function ParticleSection() {
  return (
    <section id="particles" className="section-block relative">
      <div className="max-w-4xl mx-auto w-full text-center space-y-8 z-10 px-4">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 font-mono-tech text-xs text-purple-300"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>05 // IMMERSIVE PARTICLE UNIVERSE</span>
        </motion.div>

        {/* Text Backdrop Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 sm:p-10 rounded-2xl border border-purple-500/30 space-y-4 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        >
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl text-white tracking-wide">
            QUANTUM <span className="gradient-text-purple">PARTICLE DYNAMICS</span>
          </h2>

          <p className="text-slate-200 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto pt-2">
            Over 1,300 procedural floating particle nodes form the ambient atmosphere, reacting to cursor movement and scroll displacement in real-time.
          </p>
        </motion.div>

        {/* Telemetry Indicator Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="glass-panel p-6 rounded-xl border border-cyan-500/30 text-center space-y-2">
            <Eye className="w-6 h-6 text-cyan-400 mx-auto" />
            <div className="font-orbitron font-bold text-white text-sm">3D DEPTH</div>
            <p className="font-mono-tech text-xs text-cyan-300/80 font-medium">ADDITIVE BLENDING</p>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-purple-500/30 text-center space-y-2">
            <Sparkles className="w-6 h-6 text-purple-400 mx-auto" />
            <div className="font-orbitron font-bold text-white text-sm">PHYSICS LERP</div>
            <p className="font-mono-tech text-xs text-purple-300/80 font-medium">60 FPS SMOOTH</p>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-cyan-500/30 text-center space-y-2">
            <ShieldAlert className="w-6 h-6 text-cyan-400 mx-auto" />
            <div className="font-orbitron font-bold text-white text-sm">OPTIMIZED</div>
            <p className="font-mono-tech text-xs text-cyan-300/80 font-medium">ZERO FRAME DROP</p>
          </div>
        </div>

      </div>
    </section>
  );
}
