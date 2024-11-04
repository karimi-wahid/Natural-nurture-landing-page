import React from 'react'
import { bestSellerProduct, bestSellerSingleProduct } from '../constants'

const BestSeller = () => {
  return (
    <section className='w-full px-10 my-10 '>
        <h1 className='text-4xl font-[700] mb-5'>BestSeller</h1>

        <div className='w-full flex items-center justify-center lg:justify-around flex-wrap'>

            <div className='w-full lg:w-2/4 flex flex-wrap items-center justify-center space-y-5 gap-5 lg:gap-0'>
            {
                bestSellerProduct.map((item, index) => (  
            <div className='w-2/5 md:w-2/6 lg:w-2/4' key={index}>
                <img src={item.link} alt={item.title}
                 />
                <h1 className='text-2xl font-[600] mt-2'>{item.title}</h1>
                <p className='text-[#7e8427]'>${item.price}</p>
            </div>
            ))}   
            </div>
            {bestSellerSingleProduct.map((item, index) => (
            <div className='mt-5 lg:mt-0'>
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