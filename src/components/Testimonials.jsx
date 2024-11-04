import React from 'react'
import { testimonial } from '../constants'

const Testimonials = () => {
  return (
    <section className='w-full pt-20 border-t border-neutral-300 p-8 space-y-10'>
        <h1 className='text-2xl font-[600]'>Testimonials</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 w-full place-items-center space-y-5'>
            {testimonial.map((item, index) => (
            <div className='w-[90%] border-b border-neutral-300 space-y-5 p-5 hover:bg-slate-100' key={index}>
                <img src={item.link}
                className='rounded-full' alt={item.name} />
                <p className='w-[100%]'>{item.text}</p>
                <h1 className='text-xl font-[600]'>{item.name}</h1>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Testimonials