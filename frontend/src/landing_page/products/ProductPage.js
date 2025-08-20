import React from 'react'
import Navbar from '../Nabvar'
import Footer from '../Footer'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

const ProductPage = () => {
  return (
    <>
    <Navbar/>
      <Hero/>
      <LeftSection/>
      <RightSection/>
      <Universe/>
      <Footer/>
    </>
  )
}

export default ProductPage
