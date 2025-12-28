import React, { useState } from 'react'

const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const submitHandler = (e)=>{
        e.preventDefault();
        console.log("email is : ",email);
        console.log("password is : ",password);
        
           
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='rounded-xl border-2 border-emerald-600 p-20'>

        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-col items-center justify-center'>
            <input value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }} className='text-black outline-none bg-transparent placeholder:text-grey-400 border-2 border-emerald-600 rounded-full text-xl py-3 px-5' type="email" placeholder='Enter your email' />
            <input value = {password} onChange={(e)=>{
                     setPassword(e.target.value)
            }} className='text-black outline-none bg-transparent placeholder:text-grey-400 border-2 border-emerald-600 rounded-full text-xl py-3 px-5 mt-5' type="password" placeholder='Enter your password' />
            <button className='text-white outline-none placeholder:text-white border-2 bg-emerald-600 border-none rounded-full text-xl py-2 px-8 w-full mt-3'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login