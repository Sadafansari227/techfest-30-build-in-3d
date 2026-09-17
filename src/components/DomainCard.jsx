import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Bot, Shield, Rocket, ArrowUpRight } from 'lucide-react';

const iconMap = {
  ai: Cpu,
  robotics: Bot,
  cyber: Shield,
  engineering: Rocket,
};

export default function DomainCard({ id, num, title, desc, tag, iconType, index }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const IconComponent = iconMap[iconType] || Cpu;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`);
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle, transition: 'transform 0.15s ease-out' }}
      className="glass-panel cyber-corners p-8 sm:p-10 rounded-2xl flex flex-col justify-between group cursor-pointer relative border border-cyan-500/30 hover:border-cyan-400 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
    >
      {/* Dynamic Cursor Light Overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, rgba(0, 240, 255, 0.18), transparent 80%)`,
        }}
      />

      {/* Top Header Row */}
      <div className="flex items-center justify-between z-10 mb-6">
        <span className="font-mono-tech text-xs text-cyan-300 tracking-widest font-bold px-3.5 py-1 bg-cyan-950/80 rounded-md border border-cyan-500/40">
          {num}
        </span>
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all">
          <IconComponent className="w-7 h-7 text-cyan-300 group-hover:text-white transition-colors" />
        </div>
      </div>

      {/* Card Body */}
      <div className="space-y-3 z-10 my-4">
        <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
          {desc}
        </p>
      </div>

      {/* Footer / CTA Tag */}
      <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between z-10 mt-2">
        <span className="font-mono-tech text-xs text-cyan-400/90 tracking-wider">
          {tag}
        </span>
        <div className="flex items-center gap-1.5 text-xs font-mono-tech font-bold text-white group-hover:text-cyan-300 group-hover:translate-x-1 transition-all">
          <span>EXPLORE</span>
          <ArrowUpRight className="w-4 h-4 text-cyan-400" />
        </div>
      </div>
    </motion.div>
  );
}
