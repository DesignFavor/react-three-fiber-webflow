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

  useEffect(() => {
    if (actions[names[0]]) {
      actions[names[0]].reset().fadeIn(0.5).play();
      actions[names[0]].setEffectiveTimeScale(2); // Set speed to 2x
    }
  }, [actions, names]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[1.65, 0, 0]} position={[0, -2, 0]} scale={[2, 2, 2]}> 
          <primitive object={nodes.mixamorigHips} />
        </group>
        <skinnedMesh castShadow receiveShadow name="10294136_0_Material003" geometry={nodes['10294136_0_Material003'].geometry} material={materials['Material.003']} skeleton={nodes['10294136_0_Material003'].skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="Aviator_Glasses_Material004" geometry={nodes.Aviator_Glasses_Material004.geometry} material={materials['Material.004']} skeleton={nodes.Aviator_Glasses_Material004.skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="Cylinder001_Socks001" geometry={nodes.Cylinder001_Socks001.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Cylinder001_Socks001.skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="Cylinder_Socks001" geometry={nodes.Cylinder_Socks001.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Cylinder_Socks001.skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="defaultMaterial_Material006" geometry={nodes.defaultMaterial_Material006.geometry} material={materials['Material.006']} skeleton={nodes.defaultMaterial_Material006.skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="Eyes_Eyes_and_Noes001" geometry={nodes.Eyes_Eyes_and_Noes001.geometry} material={materials['Eyes and Noes.001']} skeleton={nodes.Eyes_Eyes_and_Noes001.skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="Face001_Mouth001" geometry={nodes.Face001_Mouth001.geometry} material={materials['Mouth.001']} skeleton={nodes.Face001_Mouth001.skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="Face_Skin001" geometry={nodes.Face_Skin001.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Face_Skin001.skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="Hoodie_Material008" geometry={nodes.Hoodie_Material008.geometry} material={materials['Material.008']} skeleton={nodes.Hoodie_Material008.skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="Hoodie_Solana-Summer-Shirt4_(1)" geometry={nodes['Hoodie_Solana-Summer-Shirt4_(1)'].geometry} material={materials['Solana-Summer-Shirt4 (1)']} skeleton={nodes['Hoodie_Solana-Summer-Shirt4_(1)'].skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="image_(11)_(1)_(1)_Logo001" geometry={nodes['image_(11)_(1)_(1)_Logo001'].geometry} material={materials['Logo.001']} skeleton={nodes['image_(11)_(1)_(1)_Logo001'].skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="neck_Skin001" geometry={nodes.neck_Skin001.geometry} material={materials.PaletteMaterial002} skeleton={nodes.neck_Skin001.skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="Nose_Eyes_and_Noes001" geometry={nodes.Nose_Eyes_and_Noes001.geometry} material={materials['Eyes and Noes.001']} skeleton={nodes.Nose_Eyes_and_Noes001.skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="Object_17001_Skin001" geometry={nodes.Object_17001_Skin001.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Object_17001_Skin001.skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="Object_17_Skin001" geometry={nodes.Object_17_Skin001.geometry} material={materials.PaletteMaterial002} skeleton={nodes.Object_17_Skin001.skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="Plane001_Sneeker001" geometry={nodes.Plane001_Sneeker001.geometry} material={materials['Sneeker.001']} skeleton={nodes.Plane001_Sneeker001.skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="Plane076_Sneeker001" geometry={nodes.Plane076_Sneeker001.geometry} material={materials['Sneeker.001']} skeleton={nodes.Plane076_Sneeker001.skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="Sharp_Cuban_Link_Chain002_Gold_Chain001" geometry={nodes.Sharp_Cuban_Link_Chain002_Gold_Chain001.geometry} material={materials.PaletteMaterial003} skeleton={nodes.Sharp_Cuban_Link_Chain002_Gold_Chain001.skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
        <skinnedMesh castShadow receiveShadow name="Shirt_Material_10001" geometry={nodes.Shirt_Material_10001.geometry} material={materials.PaletteMaterial004} skeleton={nodes.Shirt_Material_10001.skeleton} position={[0.027, -0.074, -1]} rotation={[Math.PI / 2, 0, 0]} scale={5.276} />
      </group>
    </group>
  )
}

useGLTF.preload('./model/Character-transformed.glb')
