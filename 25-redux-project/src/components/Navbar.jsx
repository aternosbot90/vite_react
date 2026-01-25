import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
     <div className='flex justify-between items-center py-6 px-10 bg-blue-800'><h2 className='font-medium text-2xl'>Media Search</h2>
        <div className='flex gap-5 items-center text-xl'>
            <Link className="text-lg active:scale-95 bg-green-400 rounded px-4 py-2" to='/'>Search</Link>
            <Link className="text-lg active:scale-95 bg-green-400 rounded px-4 py-2" to='/collection'>Collection</Link>
        </div>
        </div>
  )
}

export default Navbar