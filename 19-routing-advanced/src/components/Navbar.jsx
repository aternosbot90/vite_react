import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center py-4 px-8 bg-blue-800 justify-between'>
        <h2 className='text-xl font-bold'>Dice</h2>
        <div className='flex gap-10'>
            <a className='text-lg font-medium' href="/">Home</a>
            <a className='text-lg font-medium' href="/about">About</a>
            <a className='text-lg font-medium' href="/product">Product</a>
        </div>
    </div>
  )
}

export default Navbar