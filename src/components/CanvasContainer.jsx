import React, { Component, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import MainScene from '../three/MainScene';

// WebGL Error Boundary
class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMsg: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMsg: error?.message || 'WebGL Context Error' };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('WebGL Rendering Notice:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 z-0 flex flex-col items-center justify-center bg-[#030712] text-center p-6 space-y-4">
          <div className="w-20 h-20 rounded-full border border-cyan-400/40 flex items-center justify-center bg-cyan-950/30 shadow-[0_0_30px_rgba(0,240,255,0.4)]">
            <span className="font-orbitron font-bold text-cyan-400 text-2xl">3D</span>
          </div>
          <h2 className="font-orbitron font-bold text-xl text-white">2D HIGH-PERFORMANCE FALLBACK MODE</h2>
          <p className="text-slate-400 text-sm max-w-md font-mono-tech">
            WebGL acceleration is restricted on this browser context. The UI interactive command center is operating in enhanced CSS mode.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function CanvasContainer() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse to [-1, 1]
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="canvas-container">
      <WebGLErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 8.5], fov: 50 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <MainScene mouse={mouse} scrollProgress={scrollProgress} />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
