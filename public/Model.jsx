/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 model.glb --transform 
Files: model.glb [603.71KB] > C:\Users\mdhat\Desktop\Web Development\jusc-dev-task\public\model-transformed.glb [603.56KB] (0%)
Author: AyoubBani (https://sketchfab.com/AyoubBani)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/rocket-b17a0f9f805c4fa7b978829006bbb57f
Title: Rocket
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder_white_0.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} />
      <instancedMesh args={[nodes.Cube006_whiteSmoke_0.geometry, materials.PaletteMaterial001, 17]} instanceMatrix={nodes.Cube006_whiteSmoke_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube010_whiteSmoke_0.geometry, materials.PaletteMaterial001, 2]} instanceMatrix={nodes.Cube010_whiteSmoke_0.instanceMatrix} />
    </group>
  )
}

useGLTF.preload('/model-transformed.glb')