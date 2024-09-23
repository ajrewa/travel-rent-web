import React from 'react'
import Hero from '../Components/Hero/Hero'
import Hero2 from '../Components/Hero2/Hero2'
import Hbanner from '../Components/Banners/Homebanner/Hbanner'
import Count from '../Components/Count/Count'
import Footer from '../Components/Footer/Footer'
import BannerSection from '../Components/Banners/Homebanner/Hbanner'
import Navbar from '../Components/Navbar/MAIN/Navbar'
import BicycleProductPage from '../Components/Bicycle/BicycleRentPage'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <Hero/>
        <BannerSection/>
        <BicycleProductPage/>
        {/* <Hbanner/>
       <Hbanner2/>*/}
        <Count/>
        <Hero2/>
        <Footer/>
    </div>
  )
}

export default Home