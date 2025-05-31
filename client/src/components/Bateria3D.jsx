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
		<div className="w-100 h-300 sm:w-300 sm:h-300 md:w-[1200px] md:h-[1200px] bg-transparent">
		    <Canvas style={{ height: '100%', width: '100%'}}>
			  <ambientLight intensity={3} /> {/* Aumenta la luz ambiental */}
			  <ModeloBateria />
			</Canvas>
		</div>

  	)
}
