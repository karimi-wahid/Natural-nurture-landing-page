import React from 'react'
import { Link } from 'react-router-dom'

const MeetFounder = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center flex-col flex-wrap gap-1 my-20'>
        <div className=' md:w-2/5 h-[90%] p-10 bg-[#7e8427] space-y-10'>
            
            <h1
            className='text-4xl font-[600] text-white'
            >Meet the founder
                <br />
                Jennifer Oliver
            </h1>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolorum amet. Perspiciatis illum dolorem dicta cum fugit nemo iusto nam adipisci quis deserunt provident est obcaecati, illo tempora blanditiis fugiat voluptas dolores et modi, enim harum a officiis numquam? Eum.</p>
            
            <button className='text-white hover:text-slate-200 duration-200'>Read More</button>

        </div>
        <div className='w-full md:w-2/5 h-[90%] md:h-[95%]'>
            <img src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/about-01-free-img.jpg" alt="founder"
            className='w-full h-auto md:h-full object-cover' />
        </div>
    </section>
  )
}

export default MeetFounder