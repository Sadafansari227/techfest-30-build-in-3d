import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import TechCore from './TechCore';

export default function ScrollTransformObjects({ scrollProgress = 0, mouse = { x: 0, y: 0 } }) {
  const groupRef = useRef();
  
  // Ref nodes for each transformation phase
  const explodedRingsRef = useRef();
  const mechFrameRef = useRef();
  const networkGridRef = useRef();
  const techfestEmblemRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Global rotation and tilt based on mouse & scroll progress
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      state.clock.getElapsedTime() * 0.15 + mouse.x * 0.4,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.y * 0.3,
      0.05
    );

    // Smooth stage visibility & transform interpolation based on scrollProgress (0 to 1)

    // Phase 1: Core (0 to 0.25)
    // Phase 2: Exploded Rings Separation (0.25 to 0.5)
    if (explodedRingsRef.current) {
      const p2 = Math.min(1, Math.max(0, (scrollProgress - 0.2) / 0.3));
      explodedRingsRef.current.position.y = THREE.MathUtils.lerp(10, 0, p2);
      explodedRingsRef.current.scale.setScalar(THREE.MathUtils.lerp(0.1, 1, p2));
      explodedRingsRef.current.rotation.z += delta * 0.5 * p2;
    }

    // Phase 3: Robotic Exoskeleton Frame (0.45 to 0.7)
    if (mechFrameRef.current) {
      const p3 = Math.min(1, Math.max(0, (scrollProgress - 0.45) / 0.25));
      mechFrameRef.current.scale.setScalar(THREE.MathUtils.lerp(0, 1.1, p3));
      mechFrameRef.current.rotation.x += delta * 0.3 * p3;
      mechFrameRef.current.rotation.y += delta * 0.4 * p3;
    }

    // Phase 4: Quantum Network Grid (0.68 to 0.88)
    if (networkGridRef.current) {
      const p4 = Math.min(1, Math.max(0, (scrollProgress - 0.68) / 0.2));
      networkGridRef.current.scale.setScalar(THREE.MathUtils.lerp(0, 1.2, p4));
      networkGridRef.current.rotation.z += delta * 0.2 * p4;
    }

    // Phase 5: Final Techfest Emblem Convergence (0.85 to 1.0)
    if (techfestEmblemRef.current) {
      const p5 = Math.min(1, Math.max(0, (scrollProgress - 0.85) / 0.15));
      techfestEmblemRef.current.scale.setScalar(THREE.MathUtils.lerp(0, 1.35, p5));
      techfestEmblemRef.current.rotation.y += delta * 0.6 * p5;
    }
  });

  return (
    <group ref={groupRef}>
      
      {/* PHASE 1 & 2: Primary Core Object (Always visible in Section 1 & 2) */}
      <group position={[0, 0, 0]}>
        <TechCore mouse={mouse} scrollProgress={scrollProgress} />
      </group>

      {/* PHASE 2: Exploded Ring Extensions (Appears as user scrolls into Section 3) */}
      <group ref={explodedRingsRef} position={[0, 10, 0]}>
        {[3.6, 4.4, 5.2].map((radius, idx) => (
          <mesh key={idx} rotation={[Math.PI / (idx + 2), Math.PI / 4, 0]}>
            <torusGeometry args={[radius, 0.025, 16, 100]} />
            <meshStandardMaterial
              color={idx % 2 === 0 ? '#00f0ff' : '#a855f7'}
              emissive={idx % 2 === 0 ? '#00f0ff' : '#8a2be2'}
              emissiveIntensity={1.2}
              wireframe={idx === 1}
            />
          </mesh>
        ))}
      </group>

      {/* PHASE 3: Robotic Exoskeleton Structures */}
      <group ref={mechFrameRef} scale={[0, 0, 0]}>
        {/* Mech Pistons and Joint Nodes */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i / 6) * Math.PI * 2;
          return (
            <group key={i} position={[Math.cos(angle) * 3.2, Math.sin(angle) * 3.2, 0]}>
              <mesh rotation={[0, 0, angle]}>
                <cylinderGeometry args={[0.08, 0.08, 1.6, 16]} />
                <meshStandardMaterial color="#00f0ff" emissive="#0066ff" metalness={0.9} />
              </mesh>
              <mesh position={[0, 0.9, 0]}>
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshStandardMaterial color="#ffffff" emissive="#00f0ff" emissiveIntensity={1.5} />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* PHASE 4: Network Grid Matrix Nodes */}
      <group ref={networkGridRef} scale={[0, 0, 0]}>
        {Array.from({ length: 18 }).map((_, i) => {
          const u = (i / 18) * Math.PI * 2;
          const v = ((i % 3) - 1) * 1.5;
          return (
            <mesh key={i} position={[Math.sin(u) * 4.2, v, Math.cos(u) * 4.2]}>
              <dodecahedronGeometry args={[0.2, 0]} />
              <meshStandardMaterial
                color="#a855f7"
                emissive="#a855f7"
                emissiveIntensity={2}
                wireframe
              />
            </mesh>
          );
        })}
      </group>

      {/* PHASE 5: Converged Glowing 3D Techfest Emblem */}
      <group ref={techfestEmblemRef} scale={[0, 0, 0]}>
        {/* Outer Hexagonal Shield */}
        <mesh>
          <cylinderGeometry args={[2.5, 2.5, 0.2, 6]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={1.8}
            wireframe
          />
        </mesh>
        {/* Inner Core Emblem Pulsing Octahedron */}
        <mesh>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#00f0ff"
            emissiveIntensity={2.5}
            roughness={0.1}
            metalness={1}
          />
        </mesh>
        {/* Orbiting Tech Rings */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[3.2, 0.04, 16, 80]} />
          <meshStandardMaterial color="#a855f7" emissive="#8a2be2" emissiveIntensity={2} />
        </mesh>
      </group>

    </group>
  );
}
