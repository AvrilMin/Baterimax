import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

function ModeloBateria() {
  const { scene } = useGLTF('/models/carBattery1.glb')
  const ref = useRef()
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.006 // Rotación lenta
    }
  })
  return <primitive object={scene} scale={0.5} position={[0, 0, 0]} ref={ref} />
}


export default function Bateria3D() {
  	return (
		<div className="w-300 h-300 sm:w-400 sm:h-400 md:w-[1000px] md:h-[1000px]">
		    <Canvas style={{ height: '100%', width: '100%'}}>
			  <ambientLight intensity={3} /> {/* Aumenta la luz ambiental */}
			  <ModeloBateria />
			</Canvas>
		</div>

  	)
}
