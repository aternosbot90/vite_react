import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext)
  
   
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  
  const [newTask,setNewTask] = useState([]) 

  const submitHandler = (e)=>{
     e.preventDefault()

     // Validate inputs
     if(!taskTitle || !taskDate || !asignTo || !category || !taskDescription) {
       alert('Please fill all fields')
       return
     }

     const newTaskObj = {title: taskTitle, date: taskDate, category, description: taskDescription, asignTo, active:false, newTask:true, completed:false, failed:false}
     
     const data = userData
     
     data.forEach(function(elem){
       if(asignTo == elem.firstName){
         elem.tasks.push(newTaskObj)
         elem.taskCount.newTask = elem.taskCount.newTask + 1
       }
     })
     
     // Update both context and localStorage
     setUserData(data)
     localStorage.setItem('employees', JSON.stringify(data))
     
     alert('Task created successfully!')
     
     setTaskTitle('')
     setTaskDate('')
     setAsignTo('')
     setCategory('')
     setTaskDescription('')
   }

  return (
     <div className='w-full p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                      <h3 className='text-sm text-grey-300 mb-0.5'>Task Title</h3>
                <input value={taskTitle} onChange={(e)=>{
                  setTaskTitle(e.target.value)
                }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="text" name="" id="" placeholder='Make a Ui design' />
                </div>
                <div>
                 <h3 className='text-sm text-grey-300 mb-0.5'>Date</h3>
                <input value={taskDate} onChange={(e)=>{
                  setTaskDate(e.target.value)
                }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="date" />
               </div>
               <div>
                 <h3 className='text-sm text-grey-300 mb-0.5'>Asign to</h3>
                <input value={asignTo} onChange={(e)=>{
                  setAsignTo(e.target.value)
                }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="text" name="" id="" placeholder='employee name' />
               </div>
               <div>
                 <h3 className='text-sm text-grey-300 mb-0.5'>Category</h3>
                <input value={category} onChange={(e)=>{
                  setCategory(e.target.value)
                }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="text" placeholder='design, dev, etc' />
               </div>
                </div>
                <div className='w-1/2'>
                    <h3 className='text-sm text-grey-300 mb-0.5'>Description</h3>
                <textarea value={taskDescription} onChange={(e)=>{setTaskDescription(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4 w-full' cols="50" rows="10"></textarea>
                 <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full' >Create Task</button>
                </div>
               
            </form>
        </div>
  )
}

export default CreateTask