import React from 'react'

const VideoCard = ({info}) => {
     
  return (
    <div className='p-2 w-[100%]'>
      <img className='rounded-lg' src={info?.snippet?.thumbnails?.medium?.url} alt="thumbnail" />
      <ul>
        <li className='font-bold py-2'>{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard
