"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function ScooterPlaceholder() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group>
      {/* Body */}
      <mesh ref={meshRef} position={[0, 0.4, 0]}>
        <boxGeometry args={[1.2, 0.5, 0.4]} />
        <meshStandardMaterial color="#ff2d2d" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Front wheel */}
      <mesh position={[0.5, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.2, 0.06, 16, 32]} />
        <meshStandardMaterial color="#1a1a24" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Rear wheel */}
      <mesh position={[-0.5, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.2, 0.06, 16, 32]} />
        <meshStandardMaterial color="#1a1a24" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Handlebar */}
      <mesh position={[0.5, 0.8, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.5]} />
        <meshStandardMaterial color="#6b6b7b" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function ScooterScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 4], fov: 40 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <spotLight
          position={[0, 5, 0]}
          intensity={1}
          color="#ff2d2d"
          angle={0.6}
          penumbra={0.8}
          castShadow
        />
        <pointLight position={[3, 2, 3]} intensity={0.5} color="#ffffff" />

        <Environment preset="city" />
        <ContactShadows
          position={[0, -0.3, 0]}
          opacity={0.5}
          blur={2.5}
          far={4}
          color="#ff2d2d"
        />

        <ScooterPlaceholder />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Suspense>
    </Canvas>
  );
}
