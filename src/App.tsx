import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import './index.css' // Assuming you have a global CSS file for styles
import { div } from 'framer-motion/client'
// import CustomCursor from './Components/CustomCursor'




function App() {
  return (
   <div className="m-0 p-0">
        <Navbar />
        {/* <CustomCursor/> */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/portfolio/*" element={<Portfolio />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
     </div>
    
  )
}

export default App