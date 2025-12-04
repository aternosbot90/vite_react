import React, { useState } from 'react'

const App = () => {
  // const [num, setNum] = useState({user:'rishi', age:19})
 
  const [num, setNum] = useState(10)

  const btnClicked = ()=>{
    setNum(prev => (prev+1));
    setNum(prev => (prev+1));
    setNum(prev => (prev+1)); //this is called batch update

  //  console.log(num.user);
  //  console.log(num.age);
  //  const newNum = {...num};
  //  newNum.user = 'Aman'
  //  newNum.age = 25
  //  console.log(newNum);
  //  setNum(newNum)
  
  // const newNum = [...num]
  // newNum.push(99)
  //  console.log(newNum);
  //  setNum(newNum)
  
  // setNum(prev=>({...prev,age:50}))
                                   
}
  return (
    <div>
      <h1>{num}</h1>
      {/* <h1>{num.user}, {num.age}</h1> */}
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App


