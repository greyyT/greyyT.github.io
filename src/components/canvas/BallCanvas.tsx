import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { CanvasLoader } from '..';

interface BallCanvasProps {
  icon: string;
}

const Ball = ({ imgUrl }: { imgUrl: string }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={0.75} rotationIntensity={0.5} floatIntensity={2}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[0, 0.01, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 3]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} map={decal} rotation={[2 * Math.PI, 0, 6.25]} />
      </mesh>
    </Float>
  );
};

const BallCanvas: React.FC<BallCanvasProps> = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
