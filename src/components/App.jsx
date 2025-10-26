import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../assets/styles/App.css'
import NavBar from './NavBar'
import Hero from './Hero'
import About from './About'
import ProjectSection from './ProjectSection'
import Footer from './Footer'
import Contact from './Contact'

function App() {



  return (
    <main className='app-container overflow-x-hidden'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/home' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<ProjectSection />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
