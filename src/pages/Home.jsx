import React from 'react'
import "../assets/styles/header.css"
import About from '../component/ui/About';
import Clients from '../component/ui/Clients';
import Footer from '../component/ui/Footer';
import Hero from '../component/ui/Hero';
import Portfolio from '../component/ui/Portfolio';
import Service from '../component/ui/Service';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Clients />
      <Footer />
    </>
  )
}

export default Home
