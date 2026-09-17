import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const current = (window.scrollY / totalHeight) * 100;
        setScrollPercent(Math.min(100, Math.max(0, Math.round(current))));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-3 pointer-events-none select-none">
      {/* Sleek Scroll Progress Bar */}
      <div className="w-1 h-32 bg-slate-900/80 rounded-full overflow-hidden border border-cyan-500/20 relative shadow-sm">
        <div
          className="w-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full transition-all duration-150"
          style={{ height: `${scrollPercent}%` }}
        />
      </div>

      <div className="font-mono-tech text-[10px] text-slate-400/80 tracking-widest uppercase">
        {scrollPercent}%
      </div>
    </div>
  );
}
