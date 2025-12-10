import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Shimmer from './components/Shimmer'
import Card from './components/Card'
import Button from './components/Button'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index ,setIndex] = useState(1)

  const getData = async ()=>{
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`) //post we use to send data to backend into database
    console.log(res.data)
    setUserData(res.data)
  }

  useEffect(function(){
     getData()
  },[index])

  let printUserData = <h3 className='text-grey-400 text-xs'><Shimmer /></h3>
  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
          <Card elem={elem} />
      </div>
    })
  }
  
  return (
    <div className='bg-black p-4 overflow-auto h-screen text-white'>
     <h1 className='fixed text-6xl bg-red-500'>{index}</h1>
     {/* <button
     onClick={getData}
      className='bg-green-600 mb-3 px-5 active:scale-95 py-2 rounded text-white'>
        Get data
        </button> */}
        <div className='flex flex-wrap justify-center gap-4 p-2'>
          {printUserData}
        </div>
        <Button index={index} setIndex={setIndex} setUserData={setUserData} />
    </div>
  )
}

export default App