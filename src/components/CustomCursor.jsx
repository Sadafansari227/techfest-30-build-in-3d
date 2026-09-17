import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsMobile(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive element
      const target = e.target;
      const isInteractive = target.closest('button, a, input, [role="button"], .glass-panel, canvas');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-100 ease-out ${
          isHovered
            ? 'w-10 h-10 border-2 border-cyan-400 bg-cyan-500/10 shadow-[0_0_20px_rgba(0,240,255,0.6)]'
            : 'w-7 h-7 border border-cyan-400/50 shadow-[0_0_8px_rgba(0,240,255,0.3)]'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            isHovered ? 1.25 : 1
          })`,
        }}
      />
      {/* Inner Glowing Center Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyan-300 rounded-full pointer-events-none z-50 shadow-[0_0_8px_#00f0ff]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
}
