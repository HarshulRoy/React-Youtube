import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)
  if(!isMenuOpen){
    return null
  }
  return (
    <div className="col-span-2"> 
      <div className='p-5'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li>Shorts</li>
          <li>Subscribe</li>
        </ul>
      </div>
      <hr />
      <div className='p-5'>
      <h1 className='font-bold pt-5'>You &gt;</h1>
        <ul>
          <li>Your channel</li>
          <li>History</li>
          <li>Playlists</li>
          <li>Your videos</li>
          <li>Watch later</li>
          <li>Liked videos</li>
        </ul>
      </div>
      <hr />
      <div className='p-5'>
        <h1 className='font-bold pt-5'>Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
