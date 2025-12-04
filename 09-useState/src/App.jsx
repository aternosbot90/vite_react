// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   // let a =20;

//   // function chnageA(){
//   //   console.log(a);
    
//   //   a = 30;
//   //   console.log(a);

//   // }

//   const [a, setA] = useState(30); //a is readonly and seta is writeonly to change or update it
//   const [b, setB] = useState(40);
//   const [c, setC] = useState([10,20,30]);
//   const changeA = () => {
//     setA(40),
//     setB(50),
//     setC([100,200,300])
//   }

//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <h1>Value of b is {b}</h1>
//       <h1>Value of c is {c}</h1>
//       <button onClick={changeA}>Change A</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(2);

  function increase(){
    setCount(count + 1);
  }

  function decrease(){
    if(count > 0){
      setCount(count - 1);
    }
  }

  function jump(){
    setCount(count + 5);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick = {increase}>increase</button>
      <button onClick = {decrease}>decrease</button>
      <button onClick = {jump}>jump by 5</button>
    </div>
  )
}

export default App
