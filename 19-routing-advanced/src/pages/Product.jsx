import React from 'react'
import {Link} from 'react-router-dom'
import {Outlet} from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='text-xl font-semibold text-white' to="/product/men">Men</Link>
        <Link className='text-xl font-semibold text-white' to="/product/women">Women</Link>
        <Link className='text-xl font-semibold text-white' to="/product/kids">Kids</Link>
      </div>
      {/* <h1>Product</h1> */}

      <Outlet />

    </div>
  )
}

export default Product