import React from 'react'
import { useState } from 'react';

const App = () => {
  const [title,setTitle]= useState('')
  const [details,setDetails] = useState('')
  
  const [task,setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title,details);

    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask);
    console.log(copyTask);
    

    setTitle('');
    setDetails('');
  }
  
  const deleteNote = (idx)=>{
    console.log('note deleted');
    const copyTask = [...task];
    console.log(copyTask[idx]);
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='form'>
      <form onSubmit={(e)=>{
        submitHandler(e);
    }}>
       <div className='form-container'>
         <h1>Add notes</h1>
        {/* phele wala input */}
         <input type="text" placeholder='Enter Notes heading'
         value={title} onChange={(e)=>{
          setTitle(e.target.value);
          
         }} />

        {/* Detailed wala input */}
     <textarea placeholder='Enter your details' name="" id=""
     value={details} onChange={(e)=>{
      setDetails(e.target.value);
     }}></textarea>

        <button>Add Notes</button>
       </div>

       <div className='card-container'>
        <h1>Your Notes</h1>
        <div className='card-item'>
        {task.map(function(item,idx){
          return <div key={idx} className='card'>
            <h2 onClick={()=>{
              deleteNote(idx)
            }} className='cross'>X</h2>
            <h2>{item.title}</h2>
            <p>{item.details}</p>
          </div>
        })}
        </div>
       </div>
        {/* <img src="https://pics.clipartpng.com/midle/Yellow_Sticky_Note_PNG_Clip_Art-2383.png" alt="" /> */}
      </form>
    </div>
  )
}

export default App