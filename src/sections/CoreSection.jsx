import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Activity, Zap, Compass, Move } from 'lucide-react';

export default function CoreSection() {
  return (
    <section id="core" className="section-block relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4">
        
        {/* Left Column Text & Feature Panel (Takes 6 cols, leaving right side wide open for 3D Core) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 font-mono-tech text-xs text-cyan-300">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>02 // THE TECHNOLOGICAL CORE</span>
          </div>

          <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-cyan-500/30 space-y-6 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide leading-tight">
              WHERE IDEAS <br />
              <span className="gradient-text-cyan">BECOME REALITY</span>
            </h2>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              Techfest brings together technology, creativity and innovation to build experiences that challenge what is possible.
            </p>

            {/* Core Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono-tech text-xs">
              <div className="glass-panel p-4 rounded-xl border border-cyan-500/30 flex items-center gap-3">
                <Activity className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-bold">ROBOTICS & AI</p>
                  <p className="text-cyan-400/80 text-[10px]">AUTONOMOUS TECH</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-purple-500/30 flex items-center gap-3">
                <Zap className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-bold">CYBER SYSTEMS</p>
                  <p className="text-purple-300/80 text-[10px]">QUANTUM DATA</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono-tech text-cyan-400/90 border-t border-slate-800/80">
              <Move className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Interactive 3D: Move cursor & hover floating labels on screen</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column Telemetry Card (Takes 6 cols, compact HUD card) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 lg:pl-12"
        >
          <div className="glass-panel cyber-corners p-8 rounded-2xl border border-cyan-500/30 space-y-6 max-w-md ml-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="font-orbitron font-bold text-sm text-cyan-400 flex items-center gap-2">
                <Compass className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
                CORE TELEMETRY
              </span>
              <span className="font-mono-tech text-[11px] text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/30">
                STATE: ACTIVE
              </span>
            </div>

            <div className="space-y-4 font-mono-tech text-xs text-slate-200">
              <p className="leading-relaxed font-normal">
                Interact with the central technological core in the viewport. Move your cursor to tilt torus rings and trigger real-time spatial physics.
              </p>
              <div className="p-3.5 bg-cyan-950/50 border border-cyan-500/30 rounded-lg text-xs text-cyan-300 font-medium">
                ⚡ Hover floating 3D tags to highlight neural domain connections.
              </div>
            </div>

            <div className="pt-2 flex justify-between text-[11px] font-mono-tech text-slate-400 border-t border-slate-800/80">
              <span>IIT BOMBAY COMMAND</span>
              <span>NODE_ID #30-IITB</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
