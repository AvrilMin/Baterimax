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
	    <Canvas style={{ height: '1500px', width: '1500px'}}>
		  <ambientLight intensity={3} /> {/* Aumenta la luz ambiental */}
		  <ModeloBateria />
		</Canvas>

  	)
}
