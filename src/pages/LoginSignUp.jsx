import { useState } from 'react'
import InfoSection from '../components/InfoSection'
import SignUp from '../components/SignUp'
import Login from '../components/Login'

const LoginSignUp = () => {
    const [authType, setAuthType] = useState('signUp')

    const imgUrl = authType === 'signUp'  
    ? 'https://plus.unsplash.com/premium_photo-1681487916420-8f50a06eb60e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  
    : 'https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    const text = authType === 'signUp'
    ? 'Welcome to Sign Up Page'
    : 'Welcome to Login Page'

  return (
    <section>
        <InfoSection text={text}  imgUrl={imgUrl} />
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