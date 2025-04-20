
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useState, Suspense } from 'react';

// Simplified tractor component with fewer polygons and optimized rendering
function Tractor() {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      {/* Simplified tractor shape with fewer geometries */}
      <group position={[0, 0, 0]}>
        {/* Tractor body - simplified */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[2, 1, 1.5]} />
          <meshStandardMaterial color="#2563eb" />
        </mesh>
        
        {/* Cabin - simplified */}
        <mesh position={[0.5, 1.2, 0]}>
          <boxGeometry args={[1, 0.8, 1.2]} />
          <meshStandardMaterial color="#1e40af" />
        </mesh>
        
        {/* Wheels - reduced detail */}
        {/* Front wheels */}
        <mesh position={[-0.7, -0.2, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 16]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
        <mesh position={[-0.7, -0.2, -0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 16]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
        
        {/* Back wheels (larger) */}
        <mesh position={[0.7, -0.1, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.4, 16]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
        <mesh position={[0.7, -0.1, -0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.4, 16]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
      </group>
    </mesh>
  );
}

// Fallback component to display when 3D content is loading or fails
function FallbackComponent() {
  return (
    <div className="flex items-center justify-center h-full w-full bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="h-24 w-24 mx-auto mb-4 text-blue-500">
            🚜
          </div>
        </div>
        <p className="text-gray-500">Loading 3D tractor model...</p>
      </div>
    </div>
  );
}

export function TractorCanvas() {
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
