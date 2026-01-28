import React from 'react'
import { useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { useDispatch } from 'react-redux'
import { clearCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {

  const collection = useSelector(state => state.collection.items)
  const dispatch = useDispatch();
   const clearAll = (item)=>{
       dispatch(clearCollection(item))
   }
  return (
   <div className='overflow-auto px-10 py-6'>
    {collection.length>0?<div className='flex justify-between mb-6'>
      <h2 className='text-3xl font-medium'>Your collection</h2>
       <button onClick={()=>{
          clearAll()
       }} className='active:scale-95 transition cursor-pointer bg-red-600 px-8 py-3 txt-lg font-medium rounded'>Clear Collection</button>
    </div>:<div className='text-5xl text-gray-300 text-center font-medium'>Your Collection is empty</div>}
    
     <div className='flex h-auto justify-start flex-wrap gap-6'>
        {collection.map((item, idx) =>{
          return <div key={idx}>
            <CollectionCard item={item} />
          </div>
        })}
    </div>
   </div>
  )
}

export default CollectionPage