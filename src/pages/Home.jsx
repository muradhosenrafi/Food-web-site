import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import SpecialOffer from '../components/SpecialOffer'
import AboutHome from '../components/AboutHome'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <SpecialOffer/>
        <AboutHome/>
    </div>
  )
}

export default Home