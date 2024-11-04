import React from 'react'

const Ingrident = () => {
  return (
    <div className='flex justify-between items-center w-[90%] py-5  border-b border-neutral-300'>
        <div>
            <h1 className='font-[600] text-xl'>We use only natural ingredients for our <br /> products, which are good for you and the <br /> environment too.</h1>
        </div>
        <div>
            <ul className='flex  justify-between items-center gap-10'>
                <li className='w-[100px] text-center'>
                <img decoding="async" width="82" height="92" src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/icon-01-free-img.png" class="attachment-full size-full wp-image-44" alt="" />
                <p>Natural Ingredients</p>
                </li>
                <li className='w-[100px] text-center'>
                <img decoding="async" width="82" height="92" src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/icon-02-free-img.png" class="attachment-full size-full wp-image-45" alt="" />
                <p>Cruelty Free</p>
                </li>
                <li className='w-[100px] text-center'>
                <img decoding="async" width="82" height="92" src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/icon-03-free-img.png" class="attachment-full size-full wp-image-46" alt="" />
                <p>Carbon Natural</p>
                </li>
                <li className='w-[100px] text-center'>
                <img loading="lazy" decoding="async" width="82" height="92" src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/icon-04-free-img.png" class="attachment-full size-full wp-image-47" alt="" />
                <p>Recyclable Package</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Ingrident