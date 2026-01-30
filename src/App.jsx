import { useState } from 'react'
import Hero from './sections/Hero.jsx'
import Banner from './sections/Banner.jsx'
import Body from './sections/Content.jsx'
import Footer from './sections/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  return (
    <>
      <Hero />
      <Banner />
      <Body />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
