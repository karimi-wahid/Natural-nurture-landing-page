import React from 'react'
import Hero from '../components/Hero'
import Ingrident from '../components/Ingrident'
import BestSeller from '../components/BestSeller'
import PhotoGallery from '../components/PhotoGallery'

const Home = () => {
  return (
    <div className='gird place-items-center'>
      <Hero />
      <Ingrident />
      <BestSeller />
      <PhotoGallery />
    </div>
  )
}

export default Home