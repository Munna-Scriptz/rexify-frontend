import React from 'react'
import Banner from '../components/home/Banner'
import Services from '../components/home/Services'
import SmallCategory from '../components/home/SmallCategory'
import LatestProducts from '../components/home/LatestProducts'

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <SmallCategory />
      <LatestProducts />
    </>
  )
}

export default Home