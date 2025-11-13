import React from 'react'

export default function VideoCard({info}) {
if(!info) return null;
 const{snippet,statistics} = info;
 const {thumbnails,channelTitle,title} = snippet;
  return (
    <div className='p-2 flex-wrap'>
      <img className="rounded-lg " src={thumbnails.medium.url} alt="video-image"/>
      <ul className='w-10/12'>
      <li className='font-bold'>{title}</li>
      <li>{channelTitle}</li>
      <li>{statistics.viewCount}views</li>
      </ul>      
    </div>
  )
}

