import { useState } from 'react'
import InfoSection from '../components/InfoSection'
import SignUp from '../components/SignUp'
import Login from '../components/Login'

const LoginSignUp = () => {
    const [authType, setAuthType] = useState('signUp')
  return (
    <section>
        <InfoSection text={'Contact Us'} imgUrl={'https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
        <div className='grid place-items-center'>

            {authType == 'signUp' ? 
            <SignUp setAuthType={setAuthType} />
                :
                <Login setAuthType={setAuthType} />
            }
        </div>
    </section>
  )
}

export default LoginSignUp