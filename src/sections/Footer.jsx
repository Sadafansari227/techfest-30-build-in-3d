import React from 'react';
import { Cpu, Terminal, Radio } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-cyan-500/20 bg-[#02050e] text-slate-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Brand Info */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="font-orbitron font-extrabold text-lg text-white">
              TECHFEST <span className="text-cyan-400">// 30</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-md font-light leading-relaxed">
            Official 3D Interactive Web Command Center designed for the Techfest IIT Bombay Campus Ambassador task.
          </p>
          <div className="flex items-center gap-2 text-[11px] font-mono-tech text-cyan-400">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>COMMUNICATING WITH IIT BOMBAY NODES</span>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="space-y-3 font-mono-tech text-xs">
          <p className="text-white font-bold font-orbitron text-xs tracking-wider">NAVIGATION</p>
          <ul className="space-y-2">
            <li>
              <button onClick={() => scrollToSection('hero')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                01 EXPLORE HERO
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('core')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                02 THE TECH CORE
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('transformation')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                03 SCROLL MORPH
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('domains')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                04 DOMAINS
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('journey')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                05 INNOVATION JOURNEY
              </button>
            </li>
          </ul>
        </div>

        {/* Telemetry metadata */}
        <div className="space-y-3 font-mono-tech text-xs">
          <p className="text-white font-bold font-orbitron text-xs tracking-wider">TELEMETRY</p>
          <div className="space-y-1 text-[11px] text-slate-400">
            <p>LATITUDE: 19.1334° N</p>
            <p>LONGITUDE: 72.9133° E</p>
            <p>ENGINE: THREE.JS + R3F</p>
            <p>DESIGN: FUTURISTIC HUD</p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-tech text-slate-500">
        <p>© TECHFEST IIT BOMBAY 30 — BUILD IN 3D TASK</p>
        <p className="flex items-center gap-1">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>PORTAL VER: 30.0.4 // STABLE</span>
        </p>
      </div>
    </footer>
  );
}
