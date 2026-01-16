import React, { useEffect } from 'react'
import {fetchPhotos,fetchVideos} from '../api/mediaApi'
import { setQuery,setLoading,setError,setResults } from '../redux/features/searchSlice'
import { useDispatch,useSelector } from 'react-redux'

const ResultGrid = () => {
    
    const {query,activeTab,results,loading,error} = useSelector((store)=>store.search)
  
    
     
    useEffect(function(){
        const getData = async ()=>{

        let data
        if(activeTab === 'photos'){
            data = await fetchPhotos(query)
            console.log(data);  
        }
          if(activeTab === 'videos'){
            data = await fetchVideos(query)
            console.log(data);  
        }
    }

    getData()
    },[query, activeTab])
    return (
    <div>
         {/* <button onClick={getData}>GetData</button> */}
    </div>
  )
}

export default ResultGrid