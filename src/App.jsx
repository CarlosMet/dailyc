import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Benefit from './Components/Benefits/Benefit'
import CodeBox from './Components/codeBox/CodeBox'
import Description from './Components/Description/Description'
import Design from './Components/Design/Design'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar'
import Responsive from './Components/Responsive/Responsive'

function App() {  

  return (
    <div className="App">
      <Navbar />      
      <Hero />
      <div className="second-section">
        <Description />
        <Benefit />
      </div>
      <Design />
      <Responsive />
      <Footer />
    </div>
  )
}

export default App
