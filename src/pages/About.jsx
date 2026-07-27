import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { AboutComponents } from '../components/AboutComponents'

const About = () => {
  return (
    <div>
      <NavBar/>
      <AboutComponents/>
      <Footer/>
    </div>
  )
}

export default About