import ContactUs from '../components/ContactUs'
import InfoSection from '../components/InfoSection'

const Contact = () => {
  return (
    <section>
        <InfoSection text={'Contact Us'} imgUrl={'https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
        <div className='grid place-items-center'>
            <ContactUs />
        </div>
    </section>
  )
}

export default Contact