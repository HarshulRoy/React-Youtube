import React from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'


const VideContainer = () => {

  const [videos,setVideos] = React.useState([])
  const getVideos = async()=>{
    try {
      let data = await fetch(YOUTUBE_VIDEOS_API+'50')
      data = await data.json() 
      setVideos(data.items)
    } catch (error) {
      console.log('video container error',error)
    }
  }
  React.useEffect(()=>{
    getVideos()
  },[])

  function handleHistory(item){
    let list = sessionStorage.getItem('id') || {}
    if(!sessionStorage.getItem('id')){
      list[item.id]= item
      list = JSON.stringify(list)
      sessionStorage.setItem('id',list)
      console.log('run 1')
    }else{
      list = JSON.parse(list)
      if(!list[item.id]){
        list[item.id] = item
        list = JSON.stringify(list)
        sessionStorage.setItem('id',list)
        console.log('run 2')
      }
    }
    console.log(JSON.parse(sessionStorage.getItem('id')),'2list')
  }
  return videos.length===0?<div><img className='w-[66%] h-auto m-auto' src={process.env.PUBLIC_URL+'/Poor-Internet.png'} alt="noInternet" /></div>: (
    <div className='flex flex-wrap m-6'>
      {videos.map((item)=> <Link onClick={()=>handleHistory(item)} to={"/watch?v="+item.id} key={item.id} className='w-[22rem]'><VideoCard info={item}/></Link>)}
    </div>
  )
}

export default VideContainer
