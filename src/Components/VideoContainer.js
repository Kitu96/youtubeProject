import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from './VideoCard';


function VideoContainer(){
  const[video,setVideo] = useState([]);
  useEffect(()=>{
   getVideos();
  },[]);

  const getVideos = async()=>{
   const data = await fetch(YOUTUBE_API);
   const json = await data.json();
   setVideo(json.items);
  }

return(
  <div className='flex flex-wrap'>
    {video.map((video)=><VideoCard video={video.id} info={video}/>)}
  </div>
)}

export default VideoContainer;

