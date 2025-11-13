import React from 'react'

export default function VideoCard({info}) {
if(!info) return null;
 const{snippet,statistics} = info;
 const {thumbnails,channelTitle,title} = snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-md'>
      <img className="rounded-lg " src={thumbnails.medium.url} alt="video-image"/>
      <ul className='w-10/12'>
      <li className='font-bold py-2'>{title}</li>
      <li>{channelTitle}</li>
      <li>{statistics.viewCount}views</li>
      </ul>      
    </div>
  )
}

