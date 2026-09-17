import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

const ELEGANT_LABELS = [
  { text: 'AI', position: [2.2, 1.4, 0.4] },
  { text: 'ROBOTICS', position: [-2.2, -1.2, 0.6] },
  { text: 'CYBER', position: [-2.0, 1.6, -0.4] },
  { text: 'INNOVATION', position: [2.0, -1.6, -0.4] },
];

export default function TechCore({ mouse = { x: 0, y: 0 }, hovered, onHover, scrollProgress = 0 }) {
  const groupRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const coreOrbRef = useRef();
  const wireframeOrbRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth rotation response based on mouse and scroll position
    const targetRotX = mouse.y * 0.35 + scrollProgress * Math.PI * 0.5;
    const targetRotY = state.clock.getElapsedTime() * 0.18 + mouse.x * 0.4;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.04);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.04);

    // Individual Ring counter-rotations
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.35;
    if (ring2Ref.current) ring2Ref.current.rotation.x += delta * 0.25;
    if (ring3Ref.current) ring3Ref.current.rotation.y -= delta * 0.4;

    // Core pulsing scale effect
    if (coreOrbRef.current) {
      const pulse = Math.sin(state.clock.getElapsedTime() * 2) * 0.06 + 1;
      const hoverBoost = hovered ? 1.2 : 1;
      coreOrbRef.current.scale.setScalar(pulse * hoverBoost);
    }

    if (wireframeOrbRef.current) {
      wireframeOrbRef.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => onHover && onHover(true)}
      onPointerOut={() => onHover && onHover(false)}
    >
      {/* Central Inner Glowing Energy Orb */}
      <mesh ref={coreOrbRef}>
        <sphereGeometry args={[1.05, 32, 32]} />
        <meshStandardMaterial
          color={hovered ? '#00f0ff' : '#0066ff'}
          emissive={hovered ? '#00f0ff' : '#0044aa'}
          emissiveIntensity={hovered ? 2.5 : 1.3}
          roughness={0.15}
          metalness={0.9}
        />
      </mesh>

      {/* Wireframe Outer Sphere */}
      <mesh ref={wireframeOrbRef}>
        <icosahedronGeometry args={[1.45, 2]} />
        <meshStandardMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={hovered ? 0.85 : 0.45}
          emissive="#00f0ff"
          emissiveIntensity={hovered ? 0.9 : 0.4}
        />
      </mesh>

      {/* Primary Tech Ring 1 (Torus) */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.0, 0.045, 16, 100]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={hovered ? 1.6 : 0.9}
          roughness={0.1}
          metalness={1}
        />
      </mesh>

      {/* Secondary Tech Ring 2 (Torus with distinct tilt) */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.45, 0.035, 16, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#8a2be2"
          emissiveIntensity={hovered ? 1.6 : 0.8}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Outer Segmented Tech Ring 3 */}
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 2, Math.PI / 4]}>
        <torusGeometry args={[2.9, 0.02, 12, 60]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#00f0ff"
          emissiveIntensity={0.6}
          wireframe
        />
      </mesh>

      {/* Orbiting Satellite Nodes */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        const radius = 2.3;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * radius,
              (i % 2 === 0 ? 0.4 : -0.4),
            ]}
          >
            <octahedronGeometry args={[0.11, 0]} />
            <meshStandardMaterial
              color="#00f0ff"
              emissive="#00f0ff"
              emissiveIntensity={2}
            />
          </mesh>
        );
      })}

      {/* 4 Subtle Elegant Holographic Annotations */}
      {ELEGANT_LABELS.map((label, idx) => (
        <Html
          key={idx}
          position={label.position}
          center
          distanceFactor={11}
          zIndexRange={[100, 0]}
        >
          <div className="px-3 py-1 rounded-full bg-[#030712]/80 border border-cyan-400/40 text-cyan-300 font-mono-tech text-[10px] tracking-[0.2em] uppercase backdrop-blur-md shadow-[0_0_12px_rgba(0,240,255,0.3)] select-none hover:bg-cyan-400 hover:text-black transition-all duration-300">
            {label.text}
          </div>
        </Html>
      ))}
    </group>
  );
}
