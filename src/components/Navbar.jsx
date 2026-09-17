import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'EXPLORE', id: 'hero' },
    { label: 'CORE', id: 'core' },
    { label: 'DOMAINS', id: 'domains' },
    { label: 'JOURNEY', id: 'journey' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/85 backdrop-blur-lg border-b border-white/5 py-4 shadow-xl'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Brand Logo - Minimalist & Elegant */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 group focus:outline-none cursor-pointer"
        >
          <span className="font-orbitron font-extrabold text-lg sm:text-xl tracking-widest text-white group-hover:text-cyan-400 transition-colors">
            TECHFEST <span className="text-cyan-400 font-light">// 30</span>
          </span>
        </button>

        {/* Desktop Nav Links - Clean & Thin */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="font-mono-tech text-xs tracking-[0.2em] text-slate-300 hover:text-white transition-colors cursor-pointer relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080d1a]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-8 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left font-mono-tech text-sm tracking-widest text-slate-200 hover:text-cyan-400 py-2.5 border-b border-slate-800/40"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
