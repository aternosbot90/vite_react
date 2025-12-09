import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  // function random(){
  //   const a = Math.random()
  //   console.log(a);

    
  // }
  //  random()
  
  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(100)

  // useEffect(function(){
  //   console.log("use effect is running...");
    
  // },[num]) // this array is dependency only when will run if specific thing get change whitout it it will run whenevr any thing get update
  
  const [a, setA] = useState(0) 
  const [b, setB] = useState(0) 

  function aChanging(){
       console.log('A ki value chnage ho gyi');
       
  }

  function bChanging(){
     console.log('B ki value chnage ho gyi');
  }

  useEffect(function(){
    aChanging()
    console.log('use effect is running....');
    
  },[a,b])

  return (
    <div>
      {/* <h1>value of num is  {num}</h1>
      <h1>value of num2 is {num2}</h1>
      <button onMouseEnter={()=>{
        setNum(prev => prev + 1)
      }} onMouseLeave={()=>{
        setNum2(prev => prev + 10)
      }}>Hover</button> */}
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(prev => prev + 1)
      }}>Change A</button>
      <button onClick={()=>{
        setB(prev => prev - 1)
      }}>Change B</button>
    </div>
  )
}

export default App