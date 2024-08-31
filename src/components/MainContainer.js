import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useDispatch } from 'react-redux'
import { storeVideo } from '../utils/suggestionSlice'

const MainContainer = () => {
  const dispatch = useDispatch()
  dispatch(storeVideo([]))
  return (
    <div className='col-span-10'>
      <ButtonList />
      <VideoContainer />
    </div>
  ) 
}

export default MainContainer
