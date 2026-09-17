import React from 'react';
import { motion } from 'framer-motion';
import { Box } from 'lucide-react';
import DomainCard from '../components/DomainCard';

export default function DomainsSection() {
  const domains = [
    {
      id: 'ai',
      num: '01',
      title: 'ARTIFICIAL INTELLIGENCE',
      desc: 'Exploring neural networks, deep learning algorithms, computer vision, and autonomous intelligence systems shaping the future.',
      tag: 'DOMAIN // AI & ML',
      iconType: 'ai',
    },
    {
      id: 'robotics',
      num: '02',
      title: 'ROBOTICS & AUTOMATION',
      desc: 'Next-generation humanoid robotics, mechatronics, bionics, and swarm robotic systems engineered for exploration.',
      tag: 'DOMAIN // ROBOTICS',
      iconType: 'robotics',
    },
    {
      id: 'cyber',
      num: '03',
      title: 'CYBER TECHNOLOGY',
      desc: 'Quantum cryptography, network defense protocols, distributed ledger architectures, and secure digital infrastructure.',
      tag: 'DOMAIN // CYBER & QUANTUM',
      iconType: 'cyber',
    },
    {
      id: 'engineering',
      num: '04',
      title: 'FUTURE ENGINEERING',
      desc: 'Aerospace propulsion, renewable energy systems, nanotechnology, and advanced material science innovations.',
      tag: 'DOMAIN // ENGINEERING',
      iconType: 'engineering',
    },
  ];

  return (
    <section id="domains" className="section-block relative">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 font-mono-tech text-xs text-cyan-400"
          >
            <Box className="w-4 h-4 text-cyan-400" />
            <span>04 // INNOVATION DOMAINS</span>
          </motion.div>

          <h2 className="font-orbitron font-extrabold text-4xl md:text-5xl text-white tracking-wide">
            EXPLORE THE <span className="gradient-text-cyan">FRONTIERS</span>
          </h2>

          <p className="text-slate-300 text-base font-light">
            Discover Techfest IIT Bombay's core pillars of technological advancement. Hover over cards to inspect 3D perspective physics.
          </p>
        </div>

        {/* 4 Interactive 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domains.map((domain, index) => (
            <DomainCard key={domain.id} {...domain} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
