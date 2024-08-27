import React from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideContainer = () => {

  const [videos,setVideos] = React.useState([])
  const getVideos = async()=>{
    try {
      let data = await fetch(YOUTUBE_VIDEOS_API)
    data = await data.json()
    setVideos(data.items)
    } catch (error) {
      console.log(error)
    }
  }
  React.useEffect(()=>{
    getVideos()
  },[])

  return videos.length===0?<div></div>: (
    <div className='flex flex-wrap m-6'>
      {videos.map((item)=> <Link to={"/watch?v="+item.id} key={item.id}><VideoCard info={item}/></Link>)}
    </div>
  )
}

export default VideContainer
