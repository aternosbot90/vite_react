import React from 'react'

const CreateTask = () => {
  return (
     <div className='w-full p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                      <h3 className='text-sm text-grey-300 mb-0.5'>Task Title</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="text" name="" id="" placeholder='Make a Ui design' />
                </div>
                <div>
                 <h3 className='text-sm text-grey-300 mb-0.5'>Date</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="date" />
               </div>
               <div>
                 <h3 className='text-sm text-grey-300 mb-0.5'>Asign to</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="text" name="" id="" placeholder='employee name' />
               </div>
               <div>
                 <h3 className='text-sm text-grey-300 mb-0.5'>Category</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="text" placeholder='design, dev, etc' />
               </div>
                </div>
               
                <div className='w-1/2'>
                    <h3 className='text-sm text-grey-300 mb-0.5'>Description</h3>
                <textarea className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4 w-full' cols="50" rows="10"></textarea>
                 <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full' >Create Task</button>
                </div>
               
            </form>
        </div>
  )
}

export default CreateTask