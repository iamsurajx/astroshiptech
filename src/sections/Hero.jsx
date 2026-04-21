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
        <meshStandardMaterial 
          color="#E11D48" 
          emissive="#E11D48" 
          emissiveIntensity={0.55} 
          metalness={0.85} 
          roughness={0.25} 
        />
      </mesh>
      <mesh>
        <torusKnotGeometry args={[1, 0.28, 180, 32]} />
        <meshBasicMaterial color="#F43F5E" wireframe transparent opacity={0.12} />
      </mesh>
      <mesh ref={ring1} rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[2.1, 0.015, 16, 100]} />
        <meshBasicMaterial color="#E11D48" transparent opacity={0.28} />
      </mesh>
      <mesh ref={ring2} rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[2.4, 0.012, 16, 100]} />
        <meshBasicMaterial color="#38BDF8" transparent opacity={0.22} />
      </mesh>
      <mesh ref={ring3} rotation={[Math.PI / 4, 0, Math.PI / 4]}>
        <torusGeometry args={[2.7, 0.01, 16, 100]} />
        <meshBasicMaterial color="#E11D48" transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

export default function HeroSection() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#0A0A0B] text-white">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8.5], fov: 42 }} gl={{ antialias: true, alpha: true }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.6} />
            <pointLight position={[8, 8, 8]} color="#E11D48" intensity={1.6} />
            <pointLight position={[-8, -6, -4]} color="#38BDF8" intensity={0.9} />
            <HolographicCore />
            <Stars radius={180} depth={50} count={800} factor={3} saturation={0} fade speed={0.4} />
            <Environment preset="night" />
            <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.25} />
          </Suspense>
        </Canvas>
        {/* soft vignette for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0A0A0B]/60 to-[#0A0A0B] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0A0A0B_80%)] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-center">
        <div className="mx-auto max-w-6xl px-6 pt-28 text-center">
          
          {/* Top pill - fixed duplicate */}
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest text-zinc-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48] animate-pulse" />
              AI-Native Product Studio • Delhi, India
            </span>
          </div>

          <div className="relative">
            {/* glow behind text */}
            <div className="absolute -inset-10 -z-10 rounded-full bg-[#0A0A0B]/70 blur-3xl" />
            
            <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Stop Worrying About
              <br />
              <span className="bg-gradient-to-r from-[#E11D48] to-[#F43F5E] bg-clip-text text-transparent">Tech.</span>
              <br />
              Start Focusing on Growth.
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              We design, build, and scale SaaS, mobile apps & AI tools in 6–10 weeks.
              React, Node, AWS — with clear ownership and post-launch support.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => scrollTo('contact')}
                className="group relative w-full overflow-hidden rounded-xl bg-[#E11D48] px-8 py-3.5 font-semibold text-white shadow-[0_0_30px_rgba(225,29,72,0.25)] transition-all hover:bg-[#BE123C] hover:shadow-[0_0_40px_rgba(225,29,72,0.35)] sm:w-auto"
              >
                <span className="relative z-10">Let's talk — Free audit</span>
              </button>
              <button
                onClick={() => scrollTo('work')}
                className="w-full rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-zinc-200 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/25 sm:w-auto"
              >
                View our work
              </button>
            </div>

            {/* Trust strip */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="text-zinc-400">Stack:</span>
                <span className="text-zinc-300">React • Next.js • Node • AWS • LangChain</span>
              </div>
              <span className="hidden h-4 w-px bg-white/10 sm:block" />
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                <span>NDA-first • Code ownership guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0B] to-transparent" />
    </section>
  );
}
