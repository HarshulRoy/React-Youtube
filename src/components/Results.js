import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeVideo } from '../utils/suggestionSlice'
import { useSearchParams } from 'react-router-dom'
import SuggestionCard from './SuggestionCard'
import ButtonList from './ButtonList'
import { YOUTUBE_SUGGESTION_API } from '../utils/constant'


const Results = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams();
  const searchSuggestions = useSelector((store)=>store.suggestion)
  
  useEffect(()=>{
    videoSearch()
  },[searchParams.get('search_query')])
  
  async function videoSearch(){
    let data = await fetch(YOUTUBE_SUGGESTION_API+searchParams.get('search_query'))
    data = await data.json()
    console.log(data.items)
    dispatch(storeVideo(data.items))
  }
  return (
    <div className='flex flex-col  col-span-10'>
      <ButtonList/>
      <div className='flex flex-col items-center'>
      {searchSuggestions.result.length>0&&searchSuggestions.result.map((item, index)=>{
        return <SuggestionCard key={index} info={item} dimension={{height:"270px",mTop:"1rem"}}/>
      })}
      </div>
    </div>
  )
}

export default Results
