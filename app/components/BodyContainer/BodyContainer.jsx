import React from 'react'
import {
    AiFillTwitterCircle,
    AiFillLinkedin,    
    AiFillGithub}
    from 'react-icons/ai'
import Image from 'next/image'
import FotoCV from '../../../public/FotoCV.png'

const BodyContainer = () => {
  return (
    <>
    <div className='text-center p-10 '>
        <h2 className='text-4xl py-2 text-teal-500 font-medium'>Pablo García</h2>
        <h3 className='text-2xl py-2'> Front End Developer</h3>
        
    </div>
    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
        <AiFillLinkedin />
        <AiFillGithub />
      </div>
      <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
        <Image src={FotoCV} layout='fill' objectFit='cover'/>
    </div> 
    </>
  )
}

export default BodyContainer
