import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className='w-[18vw] hover:scale-105 transition-all relative h-full bg-white rounded-xl overflow-hidden'>
          <div className='h-full'>
             {item.type =='photo'?<img className=' h-full rounded-2xl  w-full object-cover object-center' src={item.src} alt="" />:''}
           {item.type =='video'?<video className=' h-full w-full object-cover object-center' muted src={item.src} controls></video>:''}
          </div>
           <div id='bottom' className='flex gap-2 justify-around items-center w-full px-6 py-10 text-white absolute bottom-0'>
            <h2 className='text-xl font-semibold capitalize'>{item.title}</h2>
            <a target='_blank' href={item.src}><button className='bg-indigo-400 active:scale-95 cursor-pointer text-white rounded px-3 py-1 font-medium'>Save</button></a>
           </div>
    </div>
  )
}

export default ResultCard