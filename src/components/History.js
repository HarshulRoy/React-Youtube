import React from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

export default function History(){
    let data = sessionStorage.getItem('id')
    let videos = []
    if(data){
      data = JSON.parse(data)
      for(let item in data){
        videos.push(data[item])
      }
    }
    console.log(videos)
    return !data?<div className='col-span-10'><img className='w-[60%] mt-6 h-auto m-auto' src={process.env.PUBLIC_URL+'/no_img.png'} alt="noInternet" /></div>: (
        <div className='flex flex-wrap m-6 col-span-10'>
          {videos.map((item)=> <Link to={"/watch?v="+item.id} key={item.id} className='w-[22rem]'><VideoCard info={item}/></Link>)}
        </div>
      )
}