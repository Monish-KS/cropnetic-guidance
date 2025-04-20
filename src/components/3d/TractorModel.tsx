
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
        <mesh position={[-0.7, -0.2, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 8]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
        <mesh position={[-0.7, -0.2, -0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 8]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
        
        {/* Back wheels */}
        <mesh position={[0.7, -0.1, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.4, 8]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
        <mesh position={[0.7, -0.1, -0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.4, 8]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
      </group>
    </mesh>
  );
}

// Static fallback component that doesn't rely on Three.js
function StaticTractorFallback() {
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
      <div className="text-center p-6">
        <div className="text-9xl mb-4">🚜</div>
        <h3 className="text-xl font-medium mb-2">Agricultural Equipment</h3>
        <p className="text-gray-500">View available tractors and accessories</p>
      </div>
    </div>
  );
}

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full w-full bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center">
        <div>
          <div className="h-24 w-24 mx-auto mb-4 text-blue-500">
            🚜
          </div>
        </div>
        <p className="text-gray-500">Loading equipment details...</p>
      </div>
    </div>
  );
}

export function TractorCanvas() {
  // By default, use the static fallback instead of trying to load 3D
  const [use3D, setUse3D] = useState(false);
  const [loading3D, setLoading3D] = useState(false);
  
  // If user wants to try 3D, we'll set a timeout to revert to static if it fails
  useEffect(() => {
    if (use3D) {
      setLoading3D(true);
      const timer = setTimeout(() => {
        // Check if canvas exists (3D content loaded)
        const canvas = document.querySelector('canvas');
        if (!canvas) {
          console.log("3D canvas failed to load, reverting to static view");
          setUse3D(false);
        }
        setLoading3D(false);
      }, 5000); // 5 seconds timeout
      
      return () => clearTimeout(timer);
    }
  }, [use3D]);
  
  // If not using 3D, show the static fallback
  if (!use3D) {
    return (
      <div>
        <StaticTractorFallback />
        <div className="mt-2 text-center">
          <button 
            onClick={() => setUse3D(true)}
            className="text-sm text-blue-600 hover:text-blue-800 underline"
          >
            Try 3D View (may not work on all devices)
          </button>
        </div>
      </div>
    );
  }
  
  // If 3D is loading, show loading state
  if (loading3D) {
    return <LoadingFallback />;
  }
  
  // Try to render the 3D view
  return (
    <div>
      <div className="h-[400px] w-full rounded-lg overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <Suspense fallback={<LoadingFallback />}>
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
      <div className="mt-2 text-center">
        <button 
          onClick={() => setUse3D(false)}
          className="text-sm text-blue-600 hover:text-blue-800 underline"
        >
          Return to static view
        </button>
      </div>
    </div>
  );
}
