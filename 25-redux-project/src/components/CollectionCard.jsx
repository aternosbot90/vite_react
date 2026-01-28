import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({item}) => {
   const dispatch = useDispatch();

   const removeFromCollection = (item)=>{
      dispatch(removeCollection(item.id))
      dispatch(removeToast())
   }


  return (
      <div className='w-[18vw] hover:scale-105 transition-all relative h-full bg-white rounded-xl overflow-hidden'>
          <div className='h-full'>
             {item.type =='photo'?<img className=' h-full rounded-2xl  w-full object-cover object-center' src={item.src} alt="" />:''}
           {item.type =='video'?<video className=' h-full w-full object-cover object-center' muted src={item.src} controls></video>:''}
           {item.type =='gif'?<img className=' h-full rounded-2xl  w-full object-cover object-center' src={item.src} alt="" />:''}
          </div>
           <div id='bottom' className='flex gap-2 justify-around items-center w-full px-6 py-10 text-white absolute bottom-0'>
            <h2 className='text-xl font-semibold capitalize'>{item.title}</h2>
            <button onClick={()=>{
              removeFromCollection(item)
            }} className='bg-indigo-400 active:scale-95 cursor-pointer text-white rounded px-3 py-1 font-medium'>Remove</button>
           </div>
    </div>
  )
}

export default CollectionCard