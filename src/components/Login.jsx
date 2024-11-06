import React from 'react'
import Button from './Button'

const Login = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <form className='flex justify-between items-center flex-col w-[60%] space-y-5 my-10 shadow-md py-8'>
        <h1 className='text-2xl font-semibold mb-4'>Sign Up Form</h1>
            <input type="email"
            className='w-[60%] outline-none border-b border-neutral-400 rounded-md p-1 focus:ring-blue-500 focus:ring-1'
            placeholder='Enter your email...' name='email' required/>
            <input type="password"
            className='w-[60%] outline-none border-b border-neutral-400 rounded-md p-1 focus:ring-blue-500 focus:ring-1'
            placeholder='Enter your password...' name='password' required/>
            <Button btnText={'Login'} type={'submit'} />
            <p>don't have any account? <button className='text-blue-500 cursor-pointer' onClick={() => setAuthType('signUp')}>create account</button></p>

        </form>
    </div>
  )
}

export default Login