import React from 'react'
import { top5Product } from '../constants'

const Top5Products = () => {
  return (
    <section className='w-full h-screen my-20 flex flex-col items-center justify-center space-y-10'>
        <h1 className='text-3xl font-[600]'>Founders Top 5 Favorites</h1>
        <div className='flex justify-around items-center flex-wrap gap-5'>
            {top5Product.map((item,index) => (
            <div className='text-center w-[200px]'>
                <img src={item.link} alt={item.label}
                 className='rounded-full mb-3'/>
                <h1 className='text-xl font-[500]'>{item.label}</h1>
                <p>${item.price}</p>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Top5Products