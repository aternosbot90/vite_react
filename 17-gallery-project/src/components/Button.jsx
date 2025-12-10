import React from 'react'
import {useState} from 'react'
const Button = ({index,setIndex,setUserData}) => {
  return (
    <div>
        <div className='flex justify-center gap-6 items-center p-4'>
          <button
           style={{opacity: index == 1? 0.5:1}}
           onClick={()=>{
            console.log("prev page");
            if(index>1){
              setIndex(index-1)
              setUserData([])
            }
            
          }} className='hover:cursor-pointer text-sm active:scale-95 bg-amber-400 text-black rounded px-4 py-2 font-semibold'>Prev</button>
          <h4>Page: {index}</h4>
          <button 
          onClick={()=>{
            console.log("next page");
            setIndex(index+1)
            setUserData([])
          }} className='hover:cursor-pointer text-sm active:scale-95 bg-amber-400 text-black rounded px-4 py-2 font-semibold'>Next</button>
        </div>
    </div>
  )
}

export default Button