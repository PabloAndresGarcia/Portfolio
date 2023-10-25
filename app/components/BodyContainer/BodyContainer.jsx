import React from 'react'
import {
    AiFillLinkedin,    
    AiFillGithub}
    from 'react-icons/ai'
import Image from 'next/image'
import FotoCV from '../../../public/FotoCV.png'

const BodyContainer = () => {
  return (
  <div className='grid md:grid-cols-2 grid-cols-1 mb-5 items-center'>
      <div className='text-center p-10'>
        <h2 className='text-4xl py-3 text-teal-500 font-medium md:text-6xl'>Pablo García</h2>
        <h3 className='text-2xl py-3 md:text-3xl'> Front End Developer</h3>
        <div className='flex text-5xl justify-center gap-16 py-3 text-gray-600 md:text-xl'>
        <AiFillLinkedin />
        <AiFillGithub />
        </div>
      </div>     
      <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
        <Image src={FotoCV} layout='fill' objectFit='cover'/>
      </div> 
    </div>
  )
}

export default BodyContainer
