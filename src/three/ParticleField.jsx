import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField({ count = 1200, scrollProgress = 0, mouse = { x: 0, y: 0 } }) {
  const pointsRef = useRef();

  // Generate procedural particles with custom colors and positions
  const [positions, colors, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sc = new Float32Array(count);

    const cyan = new THREE.Color('#00f0ff');
    const purple = new THREE.Color('#a855f7');
    const white = new THREE.Color('#ffffff');

    for (let i = 0; i < count; i++) {
      // Spread in a large sphere / cylinder space
      const radius = 12 + Math.random() * 28;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = (Math.random() - 0.5) * 45;
      pos[i * 3 + 2] = radius * Math.cos(phi);

      // Mix colors
      const rand = Math.random();
      const mixedColor = rand < 0.6 ? cyan : rand < 0.85 ? purple : white;
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;

      sc[i] = Math.random() * 1.8 + 0.5;
    }

    return [pos, col, sc];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    // Continuous subtle slow rotation
    pointsRef.current.rotation.y += delta * 0.05;
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(
      pointsRef.current.rotation.x,
      mouse.y * 0.15 + scrollProgress * 0.5,
      0.05
    );
    pointsRef.current.rotation.z = THREE.MathUtils.lerp(
      pointsRef.current.rotation.z,
      mouse.x * 0.15,
      0.05
    );
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.75}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
