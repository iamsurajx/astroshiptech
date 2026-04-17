import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';

function HolographicCore() {
  const coreRef = useRef();
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.18;
      coreRef.current.rotation.y = t * 0.25;
      coreRef.current.position.y = Math.sin(t * 0.8) * 0.12;
      const s = 1 + Math.sin(t * 1.5) * 0.03;
      coreRef.current.scale.set(s, s, s);
    }
    if (ring1.current) ring1.current.rotation.z = t * 0.35;
    if (ring2.current) ring2.current.rotation.x = t * 0.25;
    if (ring3.current) ring3.current.rotation.y = -t * 0.4;
  });

  return (
    <group scale={1.35} position={[0, 0, -2]}>
      <mesh ref={coreRef}>
        <torusKnotGeometry args={[1, 0.28, 180, 32]} />
        <meshStandardMaterial color="#ff0033" emissive="#ff0033" emissiveIntensity={0.65} metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh>
        <torusKnotGeometry args={[1, 0.28, 180, 32]} />
        <meshBasicMaterial color="#ff3366" wireframe transparent opacity={0.18} />
      </mesh>
      <mesh ref={ring1} rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[2.1, 0.015, 16, 100]} />
        <meshBasicMaterial color="#ff0033" transparent opacity={0.35} />
      </mesh>
      <mesh ref={ring2} rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[2.4, 0.012, 16, 100]} />
        <meshBasicMaterial color="#ff0033" transparent opacity={0.25} />
      </mesh>
      <mesh ref={ring3} rotation={[Math.PI / 4, 0, Math.PI / 4]}>
        <torusGeometry args={[2.7, 0.01, 16, 100]} />
        <meshBasicMaterial color="#ff0033" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

export default function HeroSection() {
  return (
    <section className="min-h-screen relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8.5], fov: 42 }} gl={{ antialias: true, alpha: true }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[8, 8, 8]} color="#ff0033" intensity={2} />
            <pointLight position={[-8, -8, -4]} color="#ffffff" intensity={0.8} />
            <HolographicCore />
            <Stars radius={180} depth={50} count={1000} factor={3} saturation={0} fade speed={0.4} />
            <Environment preset="night" />
            <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.3} />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center pt-32">
          <div className="relative inline-block">
            <div className="absolute -inset-10 bg-black/60 blur-3xl rounded-full -z-10"></div>
            <div className="mb-5">
              <span className="inline-block px-6 py-2 bg-[#ff0033]/10 border border-[#ff0033]/30 rounded-full text-xs tracking-widest font-semibold text-white/90">
                Build With Us Build with AI
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              Stop Worrying About<br />
              <span className="text-[#ff0033] drop-shadow-[0_0_30px_rgba(255,0,51,0.8)]">Tech.</span><br />
              Start Focusing on Growth.
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Expert full-stack development and reliable cloud pipelines.<br />
              We build, ship, and scale your digital products flawlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
