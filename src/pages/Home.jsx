import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Gallery />
      </main>
    </div>
  )
}

export default Home
