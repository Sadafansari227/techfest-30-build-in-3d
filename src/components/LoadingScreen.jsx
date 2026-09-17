import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onLoaded }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING TECHFEST CORE...');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const statuses = [
      'INITIALIZING TECHFEST CORE...',
      'CALIBRATING 3D GRAPHICS ENGINE...',
      'LOADING QUANTUM NODE MESHES...',
      'ESTABLISHING NEURAL IIT BOMBAY LINK...',
      'SYSTEM READY // ENTERING MATRIX'
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(interval);
          setStatusText(statuses[4]);
          setTimeout(() => {
            setCompleted(true);
            if (onLoaded) onLoaded();
          }, 600);
          return 100;
        }

        const idx = Math.min(Math.floor((next / 100) * 4), 3);
        setStatusText(statuses[idx]);
        return next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {!completed && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white select-none px-4"
          style={{ background: 'radial-gradient(circle at center, #0a1128 0%, #030712 100%)' }}
        >
          {/* Cyber Grid Background */}
          <div className="absolute inset-0 cyber-grid-bg opacity-30" />
          
          <div className="relative z-10 w-full max-w-lg p-8 rounded-xl glass-panel border border-cyan-500/30 text-center space-y-6">
            
            {/* Header Emblem */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-full border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.6)] animate-pulse">
                <span className="font-orbitron font-bold text-2xl text-cyan-400">30</span>
              </div>
              <h1 className="font-orbitron text-2xl font-extrabold tracking-widest gradient-text-cyan mt-2">
                TECHFEST // 30
              </h1>
              <p className="font-mono-tech text-xs text-cyan-400/70 tracking-wider uppercase">
                IIT Bombay Technological Command Center
              </p>
            </div>

            {/* Progress Bar Container */}
            <div className="space-y-3">
              <div className="flex justify-between items-center font-mono-tech text-xs text-cyan-300">
                <span className="truncate pr-2">{statusText}</span>
                <span className="font-bold text-cyan-400">{progress}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-3 bg-slate-900/90 rounded-full p-0.5 border border-cyan-500/40 overflow-hidden relative shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_#00f0ff]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Diagnostics HUD Footer */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800 text-[10px] font-mono-tech text-slate-400">
              <div className="flex flex-col">
                <span className="text-slate-500">SYS_STATUS</span>
                <span className="text-emerald-400 font-semibold">NOMINAL</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500">WEBGL_3D</span>
                <span className="text-cyan-400 font-semibold">ACTIVATED</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500">LOCATION</span>
                <span className="text-purple-400 font-semibold">IIT BOMBAY</span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
