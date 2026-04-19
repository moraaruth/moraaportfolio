import React from 'react'
import Hero from './sections/Hero'
import NavBar from './components/NavBar'
import ShowcaseSection from './sections/ShowcaseSection'
import AISection from './sections/AISection'
import AnimatedCounter from './components/AnimatedCounter'
import FeatureCards from './sections/FeatureCards'
import Experience from './sections/ExprienceSection'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Tesimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AnimatedCounter />
      <ShowcaseSection />
      <AISection />
      <FeatureCards />
      <Experience />
      {/* <TechStack /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
