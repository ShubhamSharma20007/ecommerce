import React from 'react'
import Carousel from "../HomeCrousel/Carousel"
import ProductCardCaraousel from './ProductCardCaraousel'
import Nav from '../Navbar/Nav'
const Home = () => {
  return (
    <>
      <Nav/>
      <Carousel/>
     <div className="space-y-1 px-5">
     <ProductCardCaraousel title={'Fashion Oulet'}/>
     <hr />
     <ProductCardCaraousel title ={'Men Accessories'}/>
     <hr />
     <ProductCardCaraousel title={'Women Accessories'}/>
    
     </div>
    </>
  )
}

export default Home
