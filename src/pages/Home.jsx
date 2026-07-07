import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import SpecialOffer from '../components/SpecialOffer'
import AboutHome from '../components/AboutHome'
import OurHomeMenu from '../components/OurHomeMenu'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <SpecialOffer/>
        <AboutHome/>
        <OurHomeMenu/>
    </div>
  )
}

export default Home