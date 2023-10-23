import React from 'react'
import Image from 'next/image'
import css from '../../../public/images/css.png'
import firebase from '../../../public/images/firebase.png'
import git from '../../../public/images/git.png'
import html from '../../../public/images/html.png'
import js from '../../../public/images/js.png'
import node from '../../../public/images/node.png'
import react from '../../../public/images/react.png'
import visualcode from '../../../public/images/visualcode.png'



const Tech = () => {
  return (
    <div className=''>
    <h3 className='text-3xl py-1'>Mis habilidades</h3>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={html} width={100} height={100} />
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={css} width={100} height={100} />
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={react} width={100} height={100} />
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={js} width={100} height={100} />
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={node} width={100} height={100} />
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={git} width={100} height={100} />
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={firebase} width={100} height={100} />
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={visualcode} width={100} height={100} />
        </div>
    </div>
  )
}

export default Tech