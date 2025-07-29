import React from 'react'
import Header from '../compoonents/Header'
import LifeAtSurfCamp from '../compoonents/Life'
import ImageCard from '../compoonents/ImageCard'
import Packages from '../compoonents/Packages'
import SurfDays from '../compoonents/SurfDays'
import ComfortableStays from '../compoonents/ComfortableStays'
import ImageSlider from '../compoonents/ImageSlider'
import Footer from '../compoonents/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <LifeAtSurfCamp />
      <ImageCard />
      <Packages />
      <SurfDays />
      <ComfortableStays />
      <ImageSlider />
      <Footer />
    </div>
  )
}

export default Home
