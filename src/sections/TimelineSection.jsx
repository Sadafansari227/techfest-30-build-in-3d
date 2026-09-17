import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Wrench, Cpu, Trophy, Globe, Compass } from 'lucide-react';

export default function TimelineSection() {
  const steps = [
    {
      num: '01',
      title: 'IDEA',
      subtitle: 'CONCEPTUALIZATION',
      desc: 'Formulating visionary technological concepts that redefine traditional boundaries of science and innovation.',
      icon: Lightbulb,
      badge: 'PHASE 1',
    },
    {
      num: '02',
      title: 'CREATE',
      subtitle: 'PROTOTYPING & DESIGN',
      desc: 'Architecting 3D models, algorithms, circuit blueprints, and neural systems from raw vision.',
      icon: Wrench,
      badge: 'PHASE 2',
    },
    {
      num: '03',
      title: 'BUILD',
      subtitle: 'HARDWARE & SOFTWARE',
      desc: 'Assembling robust hardware prototypes, programming autonomous software, and testing engineering limits.',
      icon: Cpu,
      badge: 'PHASE 3',
    },
    {
      num: '04',
      title: 'COMPETE',
      subtitle: 'ARENA & EXHIBITION',
      desc: 'Showcasing breakthroughs, competing on global stages, and demonstrating functional excellence under pressure.',
      icon: Trophy,
      badge: 'PHASE 4',
    },
    {
      num: '05',
      title: 'IMPACT',
      subtitle: 'GLOBAL TRANSFORMATION',
      desc: 'Deploying technological innovations into real-world applications to shape a smarter, sustainable future.',
      icon: Globe,
      badge: 'FINAL PHASE',
    },
  ];

  return (
    <section id="journey" className="section-block relative">
      <div className="max-w-4xl mx-auto w-full space-y-12 px-4">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 font-mono-tech text-xs text-cyan-300">
            <Compass className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '12s' }} />
            <span>06 // TECHFEST INNOVATION JOURNEY</span>
          </div>

          <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl text-white tracking-wide">
            THE EVOLUTION <span className="gradient-text-cyan">PIPELINE</span>
          </h2>

          <p className="text-slate-200 text-base font-normal">
            The standard methodology for translating creative tech ideas into real-world technological impact.
          </p>
        </div>

        {/* Vertical Stepper Timeline */}
        <div className="relative border-l-2 border-cyan-500/40 ml-4 md:ml-28 space-y-10 pl-6 md:pl-10">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Node Bullet Icon */}
                <div className="absolute -left-[35px] md:-left-[51px] top-2 w-10 h-10 rounded-full bg-[#030712] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.7)] group-hover:scale-110 group-hover:bg-cyan-400 transition-all">
                  <IconComponent className="w-5 h-5 text-cyan-300 group-hover:text-black transition-colors" />
                </div>

                {/* Content Card */}
                <div className="glass-panel cyber-corners p-6 sm:p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition-all space-y-3 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tech text-xs text-cyan-300 font-bold bg-cyan-950/70 px-2.5 py-0.5 rounded border border-cyan-500/30">{step.badge}</span>
                    <span className="font-orbitron font-extrabold text-slate-600 text-3xl group-hover:text-cyan-400/50 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-orbitron font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="font-mono-tech text-xs text-cyan-400 font-semibold tracking-wider">
                    {step.subtitle}
                  </p>

                  <p className="text-slate-200 text-sm sm:text-base font-normal leading-relaxed pt-1">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
