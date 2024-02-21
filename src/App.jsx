import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { Suspense, useRef, useState } from "react"
import { Environment, SpotLight, useGLTF } from "@react-three/drei"
import { EffectComposer, DepthOfField } from "@react-three/postprocessing"

function Space({z}) {

  const ref = useRef()
  const { nodes, materials } = useGLTF('/model-transformed.glb')
  const {viewport, camera} = useThree()
  const {width, height} = viewport.getCurrentViewport(camera, [0, 0, z])

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(1),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random()*Math.PI,
    rY: Math.random()*Math.PI,
    rZ: Math.random()*Math.PI,
  })

  useFrame((state) => {
    ref.current.rotation.set((data.rX+=0.002), (data.rY+=0.002), (data.rZ+=0.002))
    ref.current.position.set(data.x * width, data.y += 0.025, z)
    if(data.y>height){
      data.y = -height
    }
  })

  return (
    <mesh 
      geometry={nodes.Cylinder_white_0.geometry} 
      material={materials.PaletteMaterial001}
      ref={ref}
      />
  )
}


function App({count = 100, depth = 80}) {

  return (
    <Canvas gl={{alpha: false}} camera={{near: 0.01, far: 110, fov:40}}>
      <color attach={"background"} args={["#140018"]}/>
      <ambientLight intensity={0.2}/>
      <SpotLight position={[10, 10, 10]} intensity={2}/>
      <Suspense fallback={null}>
        <Environment preset="sunset"/>
        {Array.from({length: count}, (_, i) => (<Space key={i} z={-(i/count)*depth-2}/>))}
        <EffectComposer>
          <DepthOfField target={[0, 0, depth/2]} focalLength={0.4} bokehScale={2} height={700}/>
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}

export default App
