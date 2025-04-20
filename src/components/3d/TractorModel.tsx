
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useState, Suspense, useEffect } from 'react';

// Extremely simplified tractor component to reduce loading time and resource usage
function Tractor() {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      {/* Simplified tractor with fewer elements */}
      <group position={[0, 0, 0]}>
        {/* Body */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[2, 1, 1.5]} />
          <meshStandardMaterial color="#2563eb" />
        </mesh>
        
        {/* Cabin */}
        <mesh position={[0.5, 1.2, 0]}>
          <boxGeometry args={[1, 0.8, 1.2]} />
          <meshStandardMaterial color="#1e40af" />
        </mesh>
        
        {/* Front wheels */}
        <mesh position={[-0.7, -0.2, 0.6]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 8]} />
          <meshStandardMaterial color="#1f2937" />
          <group rotation={[Math.PI / 2, 0, 0]} />
        </mesh>
        <mesh position={[-0.7, -0.2, -0.6]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 8]} />
          <meshStandardMaterial color="#1f2937" />
          <group rotation={[Math.PI / 2, 0, 0]} />
        </mesh>
        
        {/* Back wheels */}
        <mesh position={[0.7, -0.1, 0.6]}>
          <cylinderGeometry args={[0.6, 0.6, 0.4, 8]} />
          <meshStandardMaterial color="#1f2937" />
          <group rotation={[Math.PI / 2, 0, 0]} />
        </mesh>
        <mesh position={[0.7, -0.1, -0.6]}>
          <cylinderGeometry args={[0.6, 0.6, 0.4, 8]} />
          <meshStandardMaterial color="#1f2937" />
          <group rotation={[Math.PI / 2, 0, 0]} />
        </mesh>
      </group>
    </mesh>
  );
}

// Simple fallback component for 3D content
function FallbackComponent() {
  return (
    <div className="flex items-center justify-center h-full w-full bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center">
        <div>
          <div className="h-24 w-24 mx-auto mb-4 text-blue-500">
            🚜
          </div>
        </div>
        <p className="text-gray-500">Agricultural Equipment</p>
      </div>
    </div>
  );
}

export function TractorCanvas() {
  const [showFallback, setShowFallback] = useState(false);
  
  // Set a timeout to show the fallback component if 3D content doesn't load
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if canvas exists (3D content loaded)
      const canvas = document.querySelector('canvas');
      if (!canvas) {
        setShowFallback(true);
      }
    }, 2000); // 2 seconds timeout
    
    return () => clearTimeout(timer);
  }, []);
  
  // If fallback is shown, don't attempt to render 3D content
  if (showFallback) {
    return <FallbackComponent />;
  }
  
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <Suspense fallback={<FallbackComponent />}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[5, 3, 5]} />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5} 
            enableDamping={false}
          />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} />
          <Tractor />
        </Canvas>
      </Suspense>
    </div>
  );
}
