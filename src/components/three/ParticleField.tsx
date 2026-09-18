"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

function ParticleMesh({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { positions, linePositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const connections: number[] = [];
    const pts: THREE.Vector3[] = [];

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 14;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 8;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      pts.push(new THREE.Vector3(x, y, z));
    }

    const maxDist = 2.4;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (pts[i].distanceTo(pts[j]) < maxDist) {
          connections.push(
            pts[i].x,
            pts[i].y,
            pts[i].z,
            pts[j].x,
            pts[j].y,
            pts[j].z
          );
        }
      }
    }

    return {
      positions: pos,
      linePositions: new Float32Array(connections),
    };
  }, [count]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.08;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t;
      pointsRef.current.rotation.x = Math.sin(t * 0.4) * 0.08;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = t;
      linesRef.current.rotation.x = Math.sin(t * 0.4) * 0.08;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.055}
          color="#a78bfa"
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#8581BD"
          transparent
          opacity={0.45}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export default function ParticleField() {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return (
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(133,129,189,0.3), transparent 70%), radial-gradient(ellipse 50% 40% at 20% 70%, rgba(69,66,112,0.3), transparent)",
        }}
      />
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%" }}
      >
        <ParticleMesh count={120} />
      </Canvas>
    </div>
  );
}
