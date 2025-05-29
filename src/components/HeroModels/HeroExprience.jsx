import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Room } from './Room'
import { useMediaQuery } from 'react-responsive'

const HeroExprience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768)' });

  return (
  <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40"/> 
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls 
      enablePan={false}
      enableZoom={!isTablet}
      maxDistance={20}
      minDistance={5}
      minPolarAngle={Math.PI / 5}
      maxPolarAngle={Math.PI / 2}
      
      />
    <Room />
  </Canvas>
  )
}

export default HeroExprience