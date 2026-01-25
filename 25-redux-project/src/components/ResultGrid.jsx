import React, { useEffect } from 'react'
import {fetchPhotos,fetchVideos,fetchGifs} from '../api/mediaApi'
import { setQuery,setLoading,setError,setResults } from '../redux/features/searchSlice'
import { useDispatch,useSelector } from 'react-redux'
import ResultCard from './ResultCard'
const ResultGrid = () => {
    const dispatch = useDispatch()
    const {query,activeTab,results,loading,error} = useSelector((store)=>store.search)
  
    
     
    useEffect(function(){
      if(!query) return
        const getData = async ()=>{
        try{
          dispatch(setLoading())
          let data = []
        if(activeTab === 'photos'){
            let response = await fetchPhotos(query)
            data = response.results.map((item)=>({
                 id:item.id,
                 type:'photo',
                 title: item.alt_description,
                 thumbnail: item.urls.small,
                 src: item.urls.full,
            }))
            console.log(data);
              
        }
          if(activeTab === 'videos'){
            let response = await fetchVideos(query)
            data = response.videos.map((item)=>({
                id:item.id,
                type:'video',
                title: item.title,
                thumbnail: item.thumbnail,
                src: item.video_files[0].link,
            }))
            console.log(data);
        }
          if(activeTab === 'gifs'){
            let response = await fetchGifs(query)
            data = response.results.map((item)=>({
                id:item.id,
                type:'gif',
                title: item.title,
                thumbnail: item.media_formats.gif.url,
                src: item.media_formats.gif.url,
            }))
            console.log(data);
          }
        dispatch(setResults(data))
        }
        catch(err){
          dispatch(setError(err.message))
        }
    }
    getData()
    },[query, activeTab])

    if(error){
      return <h1>Error</h1>
    }
    if(loading){
      return <h1>Loading...</h1>
    }
    return (
    <div className='flex h-auto justify-center flex-wrap gap-6 overflow-auto px-10'>
      {results.map((item)=>{
          return <div className='h-auto' key={item.id}>
            <ResultCard item={item}/>
          </div>
      })}
         {/* <button onClick={getData}>GetData</button> */}
    </div>
  )
}

export default ResultGrid