import React from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import ParticleField from './ParticleField';
import ScrollTransformObjects from './ScrollTransformObjects';
import FloatingGeometries from './FloatingGeometries';

function CameraRig({ mouse, scrollProgress }) {
  const { camera, viewport } = useThree();

  useFrame(() => {
    // Responsive camera offset: on wide desktop viewports, offset core to the right in section 1 (Hero)
    const isDesktop = viewport.width > 6;
    
    // Smooth transition: at scrollProgress 0 (Hero), shift right by ~1.8 units on desktop; as scroll progress increases (> 0.2), center the core
    const heroXOffset = isDesktop ? Math.max(0, 1.8 * (1 - scrollProgress * 3.5)) : 0;

    const targetX = mouse.x * 1.2 + heroXOffset;
    const targetY = mouse.y * 0.9 - scrollProgress * 1.8;
    const targetZ = 8.0 + scrollProgress * 3.0;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.04);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.04);

    // Look slightly to the left of core when offset to balance camera angle
    camera.lookAt(heroXOffset * 0.3, 0, 0);
  });

  return null;
}

export default function MainScene({ mouse = { x: 0, y: 0 }, scrollProgress = 0 }) {
  return (
    <>
      {/* Cinematic Lighting System */}
      <ambientLight intensity={0.55} />
      <directionalLight position={[12, 18, 12]} intensity={1.9} color="#00f0ff" />
      <directionalLight position={[-12, -18, -12]} intensity={1.5} color="#a855f7" />
      <pointLight position={[0, 0, 6]} intensity={2.4} color="#00f0ff" distance={18} />

      {/* Smooth Camera Parallax & Responsive Framing Controller */}
      <CameraRig mouse={mouse} scrollProgress={scrollProgress} />

      {/* Main Interactive 3D Morphing Core */}
      <ScrollTransformObjects scrollProgress={scrollProgress} mouse={mouse} />

      {/* Subtle Ambient Particle Universe */}
      <ParticleField count={1100} scrollProgress={scrollProgress} mouse={mouse} />

      {/* Background Floating Geometries */}
      <FloatingGeometries count={18} />
    </>
  );
}
