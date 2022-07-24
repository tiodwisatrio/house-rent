import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
        <div className='container mx-auto w-[75%] lg:w-[50%]'>
            <h1 className='text-center text-violet-600 font-semibold text-xl md:text-2xl lg:text-3xl mt-[-1rem]'>Login</h1>
            <form action="" className='p-4'>
                <div className='flex flex-col space-y-2 mb-8'>
                    <label for="">Email</label>
                    <input className='text-sm p-4 rounded bg-violet-50 border border-gray-50 focus:border-violet-600 outline-none' type="email" placeholder='your email...' />
                </div>
                <div className='flex flex-col space-y-2 mb-8'>
                    <label for="">Password</label>
                    <input className='text-sm p-4 rounded bg-violet-50 border border-gray-50 focus:border-violet-600 outline-none' type="password" placeholder='your password...' />
                </div>
                <div className='flex flex-col space-y-2 mt-12'>
                    <button className='bg-violet-600 hover:bg-violet-700 transition-all duration-300 p-4 rounded text-white font-semibold mb-4'>Login</button>
                    <p className='text-center'>Don't have an account? <span className='text-violet-600'><Link to='/register'>Register</Link></span></p>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Login