import React from 'react'
import Header from '../compoonents/Header'
import LifeAtSurfCamp from '../compoonents/Life'
import ImageCard from '../compoonents/ImageCard'
import Packages from '../compoonents/Packages'
import SurfDays from '../compoonents/SurfDays'

const Home = () => {
  return (
    <div>
      <Header />
      <LifeAtSurfCamp />
      <ImageCard />
      <Packages />
      <SurfDays />
    </div>
  )
}

export default Home
