import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title,setTitle] = useState('kunal')

  const submitHandler = (e)=>{
    e.preventDefault();
    
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
        console.log("form submitted by: ",title);
        
      }} action="">
        <input onChange={(e)=>{
          setTitle(e.target.value);
          
        }} type="text" placeholder='enter your name' value={title} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App