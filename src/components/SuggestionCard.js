import React from 'react'
import { Link } from 'react-router-dom'

const SuggestionCard = ({info}) => {
  return (
    <div className='p-2 w-[100%] justify-center flex mt-12'>
      <Link className='w-[40%]' to={"/watch?v="+info.id.videoId}><img className='rounded-lg w-[100%] h-[270px]' src={info?.snippet?.thumbnails?.high?.url} alt="thumbnail" /></Link>
      <ul className='ml-8 w-[50%]'>
        <li className='font-bold'>{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
      </ul>
    </div>
  )
}

export default SuggestionCard
