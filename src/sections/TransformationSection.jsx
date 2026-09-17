import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, Cpu, GitBranch, Network, Award } from 'lucide-react';

export default function TransformationSection() {
  const stages = [
    { title: 'PHASE 01', name: 'TECHNOLOGICAL CORE', icon: Cpu, desc: 'Central energy orb surrounded by orbiting torus rings.' },
    { title: 'PHASE 02', name: 'RINGS EXPANSION', icon: Sliders, desc: 'Spatial separation into segmented orbital ring layers.' },
    { title: 'PHASE 03', name: 'ROBOTIC STRUCTURE', icon: GitBranch, desc: 'Reorganization into futuristic mechanical exoskeleton joints.' },
    { title: 'PHASE 04', name: 'NETWORK MATRIX', icon: Network, desc: 'Distributed quantum grid nodes forming interconnected neural networks.' },
    { title: 'PHASE 05', name: 'TECHFEST EMBLEM', icon: Award, desc: 'Central convergence into the 30th Edition glowing Techfest icon.' },
  ];

  return (
    <section id="transformation" className="section-block relative">
      <div className="max-w-6xl mx-auto w-full space-y-12 px-4">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 font-mono-tech text-xs text-cyan-300">
            <Sliders className="w-4 h-4 text-cyan-400" />
            <span>03 // REAL-TIME 3D SCROLL TRANSFORMATION</span>
          </div>

          <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl text-white tracking-wide">
            DYNAMIC GEOMETRIC <span className="gradient-text-purple">MORPHING</span>
          </h2>

          <p className="text-slate-200 text-sm sm:text-base font-normal max-w-2xl mx-auto">
            As you scroll down, the 3D environment reacts dynamically, evolving through 5 distinct morphological phases.
          </p>
        </div>

        {/* Phase Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 flex flex-col justify-between space-y-4 group shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-xs text-cyan-400 font-bold bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">{stage.title}</span>
                  <Icon className="w-5 h-5 text-cyan-300 group-hover:scale-110 group-hover:text-white transition-all" />
                </div>
                
                <div>
                  <h4 className="font-orbitron font-bold text-xs text-white group-hover:text-cyan-300 transition-colors">
                    {stage.name}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2 font-normal">
                    {stage.desc}
                  </p>
                </div>

                <div className="h-1 w-full bg-slate-800/80 rounded-full group-hover:bg-cyan-400 transition-colors" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
