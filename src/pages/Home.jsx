import React from 'react'
import Hero from '../components/Hero'
import Ingrident from '../components/Ingrident'
import BestSeller from '../components/BestSeller'
import PhotoGallery from '../components/PhotoGallery'
import ChooseProduct from '../components/ChooseProduct'
import MeetFounder from '../components/MeetFounder'
import Top5Products from '../components/Top5Products'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div className='gird place-items-center bg-neutral-200'>
       <Hero />
      <Ingrident />
      <BestSeller />
      <PhotoGallery />
      <ChooseProduct />
      <MeetFounder />
      <Top5Products />
      <Testimonials />
    </div>
  )
}

export default Home