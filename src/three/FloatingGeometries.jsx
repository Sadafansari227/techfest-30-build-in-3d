import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingGeometries({ count = 25 }) {
  const groupRef = useRef();

  const items = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 20 - 5,
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ],
      scale: Math.random() * 0.4 + 0.15,
      speed: Math.random() * 0.5 + 0.2,
      type: i % 3, // 0: octahedron, 1: tetra, 2: box wireframe
    }));
  }, [count]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, idx) => {
      const item = items[idx];
      child.rotation.x += delta * item.speed * 0.4;
      child.rotation.y += delta * item.speed * 0.6;
      child.position.y += Math.sin(state.clock.getElapsedTime() * item.speed + idx) * 0.005;
    });
  });

  return (
    <group ref={groupRef}>
      {items.map((item, idx) => (
        <mesh key={idx} position={item.position} rotation={item.rotation} scale={item.scale}>
          {item.type === 0 && <octahedronGeometry args={[1, 0]} />}
          {item.type === 1 && <tetrahedronGeometry args={[1, 0]} />}
          {item.type === 2 && <boxGeometry args={[1, 1, 1]} />}
          <meshStandardMaterial
            color={idx % 2 === 0 ? '#00f0ff' : '#8a2be2'}
            emissive={idx % 2 === 0 ? '#00f0ff' : '#8a2be2'}
            emissiveIntensity={0.6}
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
      ))}
    </group>
  );
}
