import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Character } from './Character'
import { Environment, ContactShadows } from '@react-three/drei'
import { PlaneGeometry, MeshStandardMaterial } from 'three'


export default function App() {
  return (
    <Canvas shadows >
      <ambientLight intensity={0.2} />
      <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />

      {/* Environment setup */}
<Environment
  background={0}
  rotation={0}
  files="/ShowcaseEnvy.hdr"
/>


      {/* Controls for Orbit */}
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />

      {/* Ground Plane */}
      <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial transparent opacity={0.50} />
      </mesh>

      {/* Character model */}
      <Character />
    </Canvas>
  )
}
