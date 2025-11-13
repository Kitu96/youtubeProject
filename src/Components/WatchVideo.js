import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeSidebar } from '../utils/navSlice';

function WatchVideo() {
    const dispatch = useDispatch();
    useEffect(()=>{
     dispatch(removeSidebar());
    },[])
  return (
    <div>
      WatchPage
    </div>
  )
}

export default WatchVideo
