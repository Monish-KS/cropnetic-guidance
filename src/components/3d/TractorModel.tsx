
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useState } from 'react';

function Tractor() {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      {/* Simplified tractor shape using basic geometries */}
      <group position={[0, 0, 0]}>
        {/* Tractor body */}
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
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
        <mesh position={[-0.7, -0.2, -0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
        
        {/* Back wheels (larger) */}
        <mesh position={[0.7, -0.1, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.4, 32]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
        <mesh position={[0.7, -0.1, -0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.4, 32]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
      </group>
    </mesh>
  );
}

export function TractorCanvas() {
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <Canvas>
        <PerspectiveCamera makeDefault position={[5, 3, 5]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Tractor />
      </Canvas>
    </div>
  );
}
