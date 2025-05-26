import React from 'react'

const words = [
  { text : 'Ideas', imgPath: '/images/ideas.svg' },
  { text : 'Concepts', imgPath: '/images/concepts.svg' }

]
const Hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden'>
   <div className='absolute top-0 left-0 z-10'>
   <img src='./assets/public/images/bg.png' alt='background'/>
   </div>

<div className='hero-layout'>
  {/* left displaying hero content to the left side */}
<header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
<div className='flex flex-col gap-7'> 
<div className='hero-text'>
<h1>Shaping Designs</h1>
<h1>into Real Projects</h1>
<h1>that Deliver Results</h1>
</div>

</div>
</header>
{/* right - 3d model */}
</div>
 </section>
  )
}

export default Hero