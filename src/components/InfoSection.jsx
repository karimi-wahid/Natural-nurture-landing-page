import React from 'react'

const InfoSection = ({imgUrl, text}) => {
  return (
    <section className='h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center' style={{
        backgroundImage: `url(${imgUrl})`,
      }}>
        <h1 className='text-4xl font-[700] text-white bg-opacity-50 bg-black px-3 py-2'>{text}</h1>
      </section>
  )
}

export default InfoSection