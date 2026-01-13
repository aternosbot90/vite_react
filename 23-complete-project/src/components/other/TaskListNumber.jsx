import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='h-30 w-[45%] px-9 py-6 rounded-xl bg-blue-400'>
            <h2 className='text-2xl'>{data.taskCount.newTask}</h2>
            <h3 className='text-cl font-medium'>New Task</h3>
        </div>
         <div className='h-30 w-[45%] px-9 py-6 rounded-xl bg-green-400'>
            <h2 className='text-2xl'>{data.taskCount.completed}</h2>
            <h3 className='text-cl font-medium'>Completed Task</h3>
        </div>
         <div className='h-30 w-[45%] px-9 py-6 rounded-xl bg-yellow-400'>
            <h2 className='text-2xl'><b>{data.taskCount.active}</b></h2>
            <h3 className='text-cl font-medium'><b>Accepted Task</b></h3>
        </div>
         <div className='h-30 w-[45%] px-9 py-6 rounded-xl bg-red-400'>
            <h2 className='text-2xl'>{data.taskCount.failed}</h2>
            <h3 className='text-cl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber