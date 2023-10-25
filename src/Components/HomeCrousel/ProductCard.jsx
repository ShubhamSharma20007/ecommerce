import React from 'react'
import { mens_kurat } from './Data'
import { useState } from 'react'

const ProductCard = ({product}) => {
  return (
    <>
     <div className="relative bg-light mx-auto rounded-lg shadow-lg my-6 overflow-hidden w-[15rem] py-4 ">    
    <div className=" w-[13rem] h-[10rem] m-auto mt-4 ">
        <img src={product.img} className='object-cover object-top w-full  h-full' alt="" />
    </div>

    <div className="p-4">
      <h3 className='text-lg font-medium text-gray-900'>NoFilter</h3>
      <p className='text-lg font-medium text-gray-900'>Men Solid Cotton Shirt</p>
    </div>
    </div> 
    </>
  )
}

export default ProductCard
