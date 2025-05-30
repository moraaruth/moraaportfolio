import React from 'react'

const HeroLights = () => {
  return (
 <>
 <spotLight 
 position={[2, 5, 6]}
 angle={0.15}
 intensity={100}
 penubra={0.2}
 color="white"
 />

<spotLight 
 position={[4, 5, 4]}
 angle={0.3}
 intensity={40}
 penubra={0.5}
 color="4cc9f0"
 />
   <ambientLight intensity={0.2} color="#1a1a40"/> 
      <directionalLight position={[5, 5, 5]} intensity={1} />
 
 </>
  )
}

export default HeroLights