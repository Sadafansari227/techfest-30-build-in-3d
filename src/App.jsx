import React, { useState } from 'react';
import CanvasContainer from './components/CanvasContainer';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';

import HeroSection from './sections/HeroSection';
import CoreSection from './sections/CoreSection';
import TransformationSection from './sections/TransformationSection';
import DomainsSection from './sections/DomainsSection';
import ParticleSection from './sections/ParticleSection';
import TimelineSection from './sections/TimelineSection';
import FinalCtaSection from './sections/FinalCtaSection';
import Footer from './sections/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* Sci-fi Futuristic Scanline & Cyber Grid Overlays */}
      <div className="scanline-overlay" />
      <div className="cyber-grid-bg" />

      {/* Custom Crosshair / Ring Cursor */}
      <CustomCursor />

      {/* Futuristic System Initialization Screen */}
      <LoadingScreen onLoaded={() => setLoaded(true)} />

      {/* Fixed WebGL 3D Interactive Canvas Background */}
      <CanvasContainer />

      {/* Futuristic Floating Navigation */}
      <Navbar />

      {/* HUD Telemetry Scroll Indicator */}
      <ScrollProgress />

      {/* Foreground Content Sections */}
      <main className="content-wrapper">
        <HeroSection />
        <CoreSection />
        <TransformationSection />
        <DomainsSection />
        <ParticleSection />
        <TimelineSection />
        <FinalCtaSection />
      </main>

      {/* Cyberpunk Command Footer */}
      <Footer />
    </div>
  );
}
