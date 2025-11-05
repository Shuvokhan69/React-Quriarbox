import React from 'react'
import Container from '../Container'
import vdo from '../../assets/video.mp4'

const Video = () => {
  return (
    <div className=' bg-[#bff0fe] min-h-screen flex items-center justify-center'>
        <Container className='pb-16 lg:pb-[150px] flex justify-center items-center'>
            <video src={vdo} 
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-3xl h-auto rounded-2xl shadow-lg object-cover"></video>
        </Container>
    </div>
  )
}

export default Video