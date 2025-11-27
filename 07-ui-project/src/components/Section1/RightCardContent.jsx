import React from 'react'

const RightCardContent = (props) => {
  return (
   <div className='absolute bottom-0 left-0 w-full h-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold '>{props.no}</h2>
        <div>
            <p className=' text-white mb-14 text-xl leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sapiente?</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor: props.color}} className=' text-white font-medium px-8 py-3 rounded-full'>{props.tag}</button>
                <button style={{backgroundColor: props.color}} className=' text-white font-medium px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent
