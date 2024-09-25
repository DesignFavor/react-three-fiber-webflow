import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Character(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('./model/Character-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions, names } = useAnimations(animations, group)
  console.log(names)


  useEffect(( ) => {
    actions[names[0]].reset().fadeIn(0.5).play();
  
  }, [] );
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[1.65, 0, 0]} position={[0, -2, 0]} scale={[2, 2, 2]}> 
          <primitive object={nodes.mixamorigHips} />
        </group>
        
        <skinnedMesh castShadow receiveShadow name="Aviator_Glasses" geometry={nodes.Aviator_Glasses.geometry} material={materials['Material.004']} skeleton={nodes.Aviator_Glasses.skeleton} position={[-0.012, 0.234, -1.315]} rotation={[Math.PI / 2, 0, 0]} scale={0.741} />
        <skinnedMesh castShadow receiveShadow name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials['Socks.001']} skeleton={nodes.Cylinder.skeleton} position={[-0.012, 0.234, -1.315]} rotation={[Math.PI / 2, 0, 0]} scale={0.741} />
        <skinnedMesh castShadow receiveShadow name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials['Socks.001']} skeleton={nodes.Cylinder001.skeleton} position={[-0.012, 0.234, -1.315]} rotation={[Math.PI / 2, 0, 0]} scale={0.741} />
        <skinnedMesh castShadow receiveShadow name="defaultMaterial" geometry={nodes.defaultMaterial.geometry} material={materials['Material.006']} skeleton={nodes.defaultMaterial.skeleton} position={[-0.012, 0.234, -1.315]} rotation={[Math.PI / 2, 0, 0]} scale={0.741} />
        <skinnedMesh castShadow receiveShadow name="Eyes" geometry={nodes.Eyes.geometry} material={materials['Eyes and Noes.001']} skeleton={nodes.Eyes.skeleton} position={[-0.012, 0.234, -1.315]} rotation={[Math.PI / 2, 0, 0]} scale={0.741} />
        <skinnedMesh castShadow receiveShadow name="Face" geometry={nodes.Face.geometry} material={materials['Skin.001']} skeleton={nodes.Face.skeleton} position={[-0.012, 0.234, -1.315]} rotation={[Math.PI / 2, 0, 0]} scale={0.741} />
        <skinnedMesh castShadow receiveShadow name="Face001" geometry={nodes.Face001.geometry} material={materials['Mouth.001']} skeleton={nodes.Face001.skeleton} position={[-0.012, 0.234, -1.315]} rotation={[Math.PI / 2, 0, 0]} scale={0.741} />
        <skinnedMesh castShadow receiveShadow name="Hoodie" geometry={nodes.Hoodie.geometry} material={materials['Material.008']} skeleton={nodes.Hoodie.skeleton} position={[-0.012, 0.234, -1.315]} rotation={[Math.PI / 2, 0, 0]} scale={0.741} />
        <skinnedMesh castShadow receiveShadow name="image_(11)_(1)_(1)" geometry={nodes['image_(11)_(1)_(1)'].geometry} material={materials['Logo.001']} skeleton={nodes['image_(11)_(1)_(1)'].skeleton} position={[-0.012, 0.234, -1.315]} rotation={[Math.PI / 2, 0, 0]} scale={0.741} />
        <skinnedMesh castShadow receiveShadow name="neck" geometry={nodes.neck.geometry} material={materials['Skin.001']} skeleton={nodes.neck.skeleton} position={[-0.012, 0.234, -1.315]} rotation={[Math.PI / 2, 0, 0]} scale={0.741} />
        <skinnedMesh castShadow receiveShadow name="Nose" geometry={nodes.Nose.geometry} material={materials['Eyes and Noes.001']} skeleton={nodes.Nose.skeleton} position={[-0.012, 0.234, -1.315]} rotation={[Math.PI / 2, 0, 0]} scale={0.741} />
        <skinnedMesh castShadow receiveShadow name="Object_17" geometry={nodes.Object_17.geometry} material={materials['Skin.001']} skeleton={nodes.Object_17.skeleton} position={[-0.012, 0.234, -1.315]} rotation={[Math.PI / 2, 0, 0]} scale={0.741} />
        <skinnedMesh castShadow receiveShadow name="Object_17001" geometry={nodes.Object_17001.geometry} material={materials['Skin.001']} skeleton={nodes.Object_17001.skeleton} position={[-0.012, 0.234, -1.315]} rotation={[Math.PI / 2, 0, 0]} scale={0.741} />
        <skinnedMesh castShadow receiveShadow name="Plane001" geometry={nodes.Plane001.geometry} material={materials['Sneeker.001']} skeleton={nodes.Plane001.skeleton} position={[-0.012, 0.234, -1.315]} rotation={[Math.PI / 2, 0, 0]} scale={0.741} />
        <skinnedMesh castShadow receiveShadow name="Plane076" geometry={nodes.Plane076.geometry} material={materials['Sneeker.001']} skeleton={nodes.Plane076.skeleton} position={[-0.012, 0.234, -1.315]} rotation={[Math.PI / 2, 0, 0]} scale={0.741} />
        <skinnedMesh castShadow receiveShadow name="Sharp_Cuban_Link_Chain002" geometry={nodes.Sharp_Cuban_Link_Chain002.geometry} material={materials['Gold Chain.001']} skeleton={nodes.Sharp_Cuban_Link_Chain002.skeleton} position={[-0.012, 0.234, -1.315]} rotation={[Math.PI / 2, 0, 0]} scale={0.741} />
        <skinnedMesh castShadow receiveShadow name="Shirt" geometry={nodes.Shirt.geometry} material={materials['Material_10.001']} skeleton={nodes.Shirt.skeleton} position={[-0.012, 0.234, -1.315]} rotation={[Math.PI / 2, 0, 0]} scale={0.741} />
      </group>
    </group>
  )
}

useGLTF.preload('./model/Character-transformed.glb')
