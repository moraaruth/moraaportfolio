import React from 'react'

const HeroLights = () => {
  return (
 <>
 <spotLight 
 position={[2, 5, 6]}
 intensity={100}
 
 />
   <ambientLight intensity={0.2} color="#1a1a40"/> 
      <directionalLight position={[5, 5, 5]} intensity={1} />
 
 </>
  )
}

export default HeroLights