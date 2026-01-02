import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='flex justify-start items-center overflow-x-auto flex-nowrap gap-5 h-[55%] w-full py-5 mt-10'>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-400 p-5 rounded-xl '>
             <div className='flex justify-between items-center'>
                <h3 className='px-3 py-1 rounded bg-red-600 text-sm'>High</h3>
                <h4 className='text-sm'>20 feb 2026</h4>
             </div>
             <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
             <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo modi asperiores ducimus doloribus sunt!</p>
        </div>
            <div className='flex-shrink-0 h-full w-[300px] bg-green-400 p-5 rounded-xl '>
             <div className='flex justify-between items-center'>
                <h3 className='px-3 py-1 rounded bg-red-600 text-sm'>High</h3>
                <h4 className='text-sm'>20 feb 2026</h4>
             </div>
             <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
             <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo modi asperiores ducimus doloribus sunt!</p>
        </div>
            <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 p-5 rounded-xl '>
             <div className='flex justify-between items-center'>
                <h3 className='px-3 py-1 rounded bg-red-600 text-sm'>High</h3>
                <h4 className='text-sm'>20 feb 2026</h4>
             </div>
             <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
             <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo modi asperiores ducimus doloribus sunt!</p>
        </div>
            <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 p-5 rounded-xl '>
             <div className='flex justify-between items-center'>
                <h3 className='px-3 py-1 rounded bg-red-600 text-sm'>High</h3>
                <h4 className='text-sm'>20 feb 2026</h4>
             </div>
             <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
             <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo modi asperiores ducimus doloribus sunt!</p>
        </div>
        

    </div>
  )
}

export default TaskList