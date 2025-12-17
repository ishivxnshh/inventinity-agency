import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function ParticleWave(props: any) {
  const ref = useRef<any>();
  const sphere = useMemo(() => {
    const rawData = random.inSphere(new Float32Array(6000), { radius: 1.5 });
    // Validation to prevent Nan errors
    for (let i = 0; i < rawData.length; i++) {
      if (isNaN(rawData[i])) rawData[i] = 0;
    }
    // Ensure it's a clean Float32Array
    return new Float32Array(rawData);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export const Scene = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        className="pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle, transparent 0%, black 60%)",
          WebkitMaskImage: "radial-gradient(circle, transparent 0%, black 60%)",
        }}
      >
        <ParticleWave />
      </Canvas>
    </div>
  );
};