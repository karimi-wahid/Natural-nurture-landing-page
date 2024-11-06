import React from 'react'
import Button from './Button'

const SignUp = ({setAuthType }) => {
  return (
    <div className='w-full flex items-center justify-center'>
        <form className='flex justify-between items-center flex-col w-[60%] space-y-5 my-10 shadow-md py-8'>
            <h1 className='text-2xl font-semibold mb-4'>Sign Up Form</h1>
            <input type="text"
            className='w-[60%] outline-none border-b border-neutral-400 rounded-md p-1 focus:ring-blue-500 focus:ring-1'
            placeholder='Enter your firstName...' name='firstName' required/>
            <input type="text"
            className='w-[60%] outline-none border-b border-neutral-400 rounded-md p-1 focus:ring-blue-500 focus:ring-1'
            placeholder='Enter your lastName...' name='lastName' required />
            <input type="email"
            className='w-[60%] outline-none border-b border-neutral-400 rounded-md p-1 focus:ring-blue-500 focus:ring-1'
            placeholder='Enter your email address...' name='email' required />
            <input type="password"
            className='w-[60%] outline-none border-b border-neutral-400 rounded-md p-1 focus:ring-blue-500 focus:ring-1' 
            placeholder='write your password here...' name='password' required />
            <Button btnText={'Create Account'} type={"submit"} />
            <p>already have account? <button className='text-blue-500 cursor-pointer' onClick={() => setAuthType('logIn')}>Login</button></p>
        </form>
    </div>
  )
}

export default SignUp