"use client"
import React from 'react'
import ReactPlayer from 'react-player'
import { useIsClient } from "usehooks-ts"
import "./video.css"
import { Skeleton } from '@nextui-org/skeleton'

const VideoSkeleton = () => {
  return (
    <div className='w-full'>
      <Skeleton className='rounded-md'>
        <div className="h-[500px] rounded-lg bg-default-300"></div>
      </Skeleton>
    </div>
  )
}

export const Video = () => {
  const isClient = useIsClient()
  if (!isClient) {
    return <VideoSkeleton />
  }
  return (
    <div className=' '>
      <ReactPlayer
        url='https://global-public.realsee-cdn.com/release/vrsaas/file/signwork/tag/211be581-ab51-4b1e-350b-24d7fd27cf58.mp4'
        className='react-player'
        playing
        controls
        playsinline
        loop
        muted
        width='100%'
        height='100%'
      />
    </div>
  )
}


