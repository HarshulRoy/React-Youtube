import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeVideo } from '../utils/suggestionSlice'
import { useSearchParams } from 'react-router-dom'

const Results = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('search_query'))
  const searchSuggestions = useSelector((store)=>store.suggestion)
  function showw(){
    console.log(searchSuggestions.result)
  }
  useEffect(()=>{
    videoSearch()
  },[])
  async function videoSearch(){
    let data = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=AIzaSyCQqxr3I97aw4EBPTsAeloDXqgSC6fRIUA&q="+searchParams.get('search_query'))
    data = await data.json()
    console.log(data.items)
    dispatch(storeVideo(data.items))
  }
  return (
    <div>
      This is results
      <button className='w-10 h-7 bg-slate-600' onClick={showw}>show</button>
    </div>
  )
}

export default Results
