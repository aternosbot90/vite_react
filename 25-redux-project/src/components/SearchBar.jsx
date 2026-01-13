import React, { useState } from 'react'


const SearchBar = () => {

   const [text, setText] = useState('');

   const submitHandler = (e)=>{
    e.preventDefault();
    console.log("form submitted");
   }

  return (
    <div>
        <form onSubmit={submitHandler} className='flex bg-gray-900 gap-5 p-10'>
            <input required className='w-full border-2 px-4 py-2 text-xl rounded outline-none'  type="text" placeholder='Search anything...' />
            <button className='active:scale-[0.95] cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none' >Search</button>
        </form>
    </div>
  )
}

export default SearchBar