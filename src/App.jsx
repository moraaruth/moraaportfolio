import React from 'react'
import Hero from './sections/Hero'
import NavBar from './components/NavBar'
import ShowcaseSection from './sections/ShowcaseSection'
import AnimatedCounter from './components/AnimatedCounter'
import FeatureCards from './sections/FeatureCards'
import Experience from './sections/ExprienceSection'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AnimatedCounter />
      <ShowcaseSection />
      <FeatureCards />
      <Experience />
    </>
  )
}

export default App
