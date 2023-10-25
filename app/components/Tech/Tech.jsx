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
import wordpress from '../../../public/images/wordpress.png'




const Tech = () => {
  return (
    <>
    <h3 className='text-3xl py-5 mt-5'>Mis habilidades</h3>
    <div className='grid md:grid-cols-3 grid-cols-1 gap-1 text-center'>
        <div className='grid justify-center shadow-lg rounded-xl m-10'>
            <Image src={html} width={150} height={150} />
        </div>
        <div className='grid justify-center shadow-lg rounded-xl m-10'>
            <Image src={css} width={150} height={150} />
        </div>
        <div className='grid justify-center shadow-lg rounded-xl m-10'>
            <Image src={react} width={150} height={150} />
        </div>
        <div className='grid justify-center shadow-lg rounded-xl m-10'>
            <Image src={js} width={150} height={150} />
        </div>
        <div className='grid justify-center shadow-lg rounded-xl m-10'>
            <Image src={node} width={150} height={150} />
        </div>
        <div className='grid justify-center shadow-lg rounded-xl m-10'>
            <Image src={git} width={150} height={150} />
        </div>
        <div className='grid justify-center shadow-lg rounded-xl m-10'>
            <Image src={firebase} width={150} height={150} />
        </div>
        <div className='grid justify-center shadow-lg rounded-xl m-10'>
            <Image src={visualcode} width={150} height={150} />
        </div>
        <div className='grid justify-center shadow-lg rounded-xl m-10'>
            <Image src={wordpress} width={150} height={150} />
        </div>
    </div>
    </>
  )
}

export default Tech