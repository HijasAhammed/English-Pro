import React from 'react'
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  return (
    <div className='h-screen w-screen' >
      <h1 className='font-bold p-4'>English Pro..</h1>
      <div className='h-screen w-full flex items-center justify-center'>  
        <div className='h-[500px] w-[500px] flex flex-col items-center p-6' style={{borderRadius:"30px",backgroundColor:"#FFF8E4"}}>
          <h1 className='text-xl mb-12'>Login To <span className='font-bold'>English Pro..</span></h1>
          
          <div className='w-full space-y-4'>
            <div className='flex items-center'>
              <CiUser className='h-6 w-6 mr-2 text-gray-600'/>
              <input 
                type="text"
                placeholder='Username or Email'
                className='h-10 w-96 px-4 py-2'
                style={{borderRadius:"5px", border:"1px solid"}}
              />
            </div>

            <div className='flex items-center'>
              <RiLockPasswordLine className='h-6 w-6 mr-2 text-gray-600'/>
              <input 
                type="password"
                placeholder='Password'
                className='h-10 w-96 px-4 py-2'
                style={{borderRadius:"5px", border:"1px solid"}}
              />
            </div>
          </div>
          <button className='h-8 w-[390px] mt-9 ' style={{backgroundColor:"#FFB900",borderRadius:"5px"}}>Login</button>
          <p style={{color:"#DAD9D9"}}className='mt-4'>-----------------------------OR-------------------------------</p>
        </div>
      </div>
    </div>
  )
}

export default Login