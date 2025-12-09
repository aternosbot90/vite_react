import React from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = React.useState([])

  const getData = async ()=>{
    const res = await axios.get('https://picsum.photos/v2/list?page=3&limit=30') //post we use to send data to backend into database
    console.log(res.data)
    setUserData(res.data)
    
  }

  let printUserData = 'No User Available'
  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return <div>
        <div className='h-40 w-44 overflow-auto bg-white rounded-xl'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h2>{elem.author}</h2>
      </div>
    })
  }
  
  return (
    <div className='bg-black p-4 overflow-auto h-screen text-white'>
     <button
     onClick={getData}
      className='bg-green-600 mb-3 px-5 active:scale-95 py-2 rounded text-white'>
        Get data
        </button>
        <div className='flex flex-wrap gap-4'>
          {printUserData}
        </div>
    </div>
  )
}

export default App