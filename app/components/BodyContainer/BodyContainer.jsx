import React from 'react'
import {
    AiFillTwitterCircle,
    AiFillLinkedin,    
    AiFillGithub}
    from 'react-icons/ai'

const BodyContainer = () => {
  return (
    <>
    <div>
        <h2>Pablo García</h2>
        <h3>Web Developer</h3>
        <p>
            Front End Developer
        </p>
    </div>
    <div>
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillGithub />
    </div> 
    </>
  )
}

export default BodyContainer