import React from 'react'

const ProductCategory = ({categoryName, text, products}) => {
  return (
    <section className='mt-10 px-5 bg-neutral-100 py-10'>
        <div className='space-y-10'>
            <h1 className='text-2xl font-[600]'>{categoryName}</h1>
            <p className='text-[12px] text-neutral-500'>{text}</p>
            <div className='flex justify-between items-center text-[13px] text-neutral-600'>
                <p>Showing all {products.length} results</p>
                <select name="" id="" className='outline-none bg-inherit'>
                <option value="">Default sorting</option>
                <option value="">Sort by popularity</option>
                <option value="">Sort by average rating</option>
                <option value="">Sort by latest</option>
                <option value="">Sort by price: low to high</option>
                <option value="">Sort by price: high to low</option>
                <option value=""></option>
                </select>
            </div>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5'>
            {products.map((product, index) => (
            <div className='w-[200px]' key={index}>
            <div className='w-[200px] h-[200px] mb-2'>
                <img src={product.link} alt={product.title} />
            </div>
            <p className='text-[12px] text-neutral-400'>{categoryName}</p>
            <h1 className='font-[500]'>{product.title}</h1>
            <p className='text-[12px] w-[90%] break-words'><span className='line-through text-neutral-400'>{product.oldPrice}</span><span>{product.newPrice}</span></p>
            </div>
            ))}
        </div>
    </section>
  )
}

export default ProductCategory