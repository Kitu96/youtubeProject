import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';


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
    {video.map((video)=>
    <Link to={"/watch?v=" + video.id}><VideoCard video={video.id} info={video}/>
    </Link>
    )}
  </div>
)}

export default VideoContainer;

