import React from 'react'
import { bestSellerProduct, bestSellerSingleProduct } from '../constants'

const BestSeller = () => {
  return (
    <section className='w-full px-10 my-10 '>
        <h1 className='text-4xl font-[700] mb-5'>BestSeller</h1>
        <div className='w-full flex items-center justify-around'>
            <div className='w-2/4 flex flex-wrap space-y-5'>
            {
                bestSellerProduct.map((item, index) => (  
            <div className='w-2/4' key={index}>
                <img src={item.link} alt={item.title}
                 />
                <h1 className='text-2xl font-[600] mt-2'>{item.title}</h1>
                <p className='text-[#7e8427]'>${item.price}</p>
            </div>
            ))}   
            </div>
            {bestSellerSingleProduct.map((item, index) => (
            <div>
                <img src={item.link} alt={item.title} />
                <h1 className='text-2xl font-[600] mt-2'>{item.title}</h1>
                <p className='text-[#7e8427]'>${item.price}</p>
            </div>
            ))}
        </div>
    </section>
  )
}

export default BestSeller