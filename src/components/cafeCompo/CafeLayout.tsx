// import React from 'react'
import Hero from './Hero'
// import Navbar from '../Navbar'
import TodaySpecial from './TodaySpecial'
// import Footer from '../Footer'
// import Image from './Image'
// import image1 from "../../assets/CafeImage/IMG1.png"
// import image2 from "../../assets/CafeImage/IMG2.png"

import { StickyScrollRevealDemo } from './Resturant'
import Testimonials from './testimonials'

const CafeLayout = () => {
  return (
    <>
        {/* <Navbar></Navbar> */}
        <Hero></Hero>
        <TodaySpecial></TodaySpecial>
        {/* <Image photo={image1}></Image> */}
        <StickyScrollRevealDemo></StickyScrollRevealDemo>
        {/* <Image photo={image2}></Image> */}
        <Testimonials></Testimonials>

        {/* <Footer></Footer> */}
    </>
  )
}

export default CafeLayout