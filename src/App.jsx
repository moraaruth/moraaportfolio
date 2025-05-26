import React from 'react'
import Hero from './sections/Hero'

const App = () => {
  return (
 <section id='hero' className='relative overflow-hidden'>
   <div className='absolute top-0 left-0 z-10'>
   <img src='./assets/public/images/bg.png' alt='background'/>
 <Hero />
   </div>

 </section>

  )
}

export default App