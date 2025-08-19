import React from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Pricing from './Pricing'
import Stats from './Stats'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import NavBar from '../Nabvar'
import Footer from '../Footer'
const HomePage = () => {
  return (
    <>
        <NavBar/>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>  
        <Education />
        <OpenAccount />
        <Footer/>
    </>
  )
}

export default HomePage
