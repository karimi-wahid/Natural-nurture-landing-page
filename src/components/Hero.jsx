import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-end items-center -mt-10 mr-10 w-[95%] h-screen'>
        <div className='basis-[40%]'></div>
        <div className='flex justify-end items-center flex-col basis-[60%] space-y-10 w-full'>
            
            <h1 className='text-xl font-[700] w-full text-end'>New Arrival</h1>
            <h1 className='text-5xl font-[600] text-end w-full'>Nourish delicate skin & <br /> hair package</h1>

            <p className='font-[300]  my-5 w-full text-end'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br /> sed do eiusmod tempor incididunt </p>
            <button className='px-3 py-2 hover:bg-[#7e8427] duration-200 hover:text-white'>Shop Now</button>
        </div>
    </div>
  )
}

export default Hero