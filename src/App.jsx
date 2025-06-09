import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Works from './Components/Works/Works.jsx'
import ContactMe from './Components/ContactMe/ContactMe.jsx'
import Footer from './Components/Footer/Footer.jsx'


function App() {
  return (
    <>
     <Navbar></Navbar>
     <Home></Home>
     <About></About>
     <Skills></Skills>
     <Works></Works>
     <ContactMe></ContactMe>
     <Footer></Footer>
    </>
  )
}

export default App
