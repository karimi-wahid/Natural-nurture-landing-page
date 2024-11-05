import React from 'react'
import InfoSection from '../components/InfoSection'
import HomeMade from '../components/HomeMade'
import MeetFounder from '../components/MeetFounder'
import Ingrident from '../components/Ingrident'
import Features from '../components/Features'

const About = () => {
  return (
    <section>
        <InfoSection text={'About Us'} imgUrl={'https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
        <div className='px-10'>
        <HomeMade />
        <MeetFounder />
        <Ingrident />
        <Features />
        </div>
    </section>
  )
}

export default About