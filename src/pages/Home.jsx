import React from 'react'
import Hero from '../components/Hero'
import Ingrident from '../components/Ingrident'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div className='gird place-items-center'>
      <Hero />
      <Ingrident />
      <BestSeller />
    </div>
  )
}

export default Home