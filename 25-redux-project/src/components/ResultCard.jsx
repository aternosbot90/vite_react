import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className='w-[18vw] h-80 bg-white rounded'>
          <div className='h-[70%]'>
             {item.type =='photo'?<img className='h-full w-full object-cover object-center' src={item.src} alt="" />:''}
           {item.type =='video'?<video className='h-full w-full object-cover object-center' muted autoPlay src={item.src} controls></video>:''}
          </div>
           <div className='text-black'>{item.title}</div>
    </div>
  )
}

export default ResultCard