import React from 'react'
import Image from 'next/image'
import CoderHouse from '../../../public/images/projects/CoderHouse.png'
import AdministradorCitas from '../../../public/images/projects/AdministradorCitas.png'
import BuscadorAutos from '../../../public/images/projects/BuscadorAutos.png'
import Carrito from '../../../public/images/projects/Carrito.png'
import EnviarMails from '../../../public/images/projects/EnviarMails.png'

import {AiFillEdit, AiFillGithub} from 'react-icons/ai'

const Portfolio = () => {
  return (
    <div>
      <h3 className='text-3xl py-1'>Portfolio</h3>
        <div className="flex items-center justify-center min-h-screen container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 text-center">
            <div className="card">
              <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={CoderHouse} />
                </div>
                <h5 className='text-2xl md:text-2xl font-medium mt-3'>Proyecto Ecommerce de CoderHouse</h5>
                <a className='flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold px-4 py-2 border-none rounded-md mt-4 hover:bg-gradient-to-l hover:from-cyan-800 hover:to-teal-800 focus:scale-95' href='' >Link <AiFillGithub /></a>
              </div>
            </div>
            <div className="card">
              <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={AdministradorCitas} />
                </div>
                <h5 className='text-2xl md:text-2xl font-medium mt-3'>Proyecto JS </h5>
                <a className='flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold px-4 py-2 border-none rounded-md mt-4 hover:bg-gradient-to-l hover:from-cyan-800 hover:to-teal-800 focus:scale-95' href='' >Link <AiFillGithub /></a>
              </div>
            </div>  
            <div className="card">
              <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={BuscadorAutos} />
                </div>
                <h5 className='text-2xl md:text-2xl font-medium mt-3'>Proyecto Ecommerce de CoderHouse</h5>
                <a className='flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold px-4 py-2 border-none rounded-md mt-4 hover:bg-gradient-to-l hover:from-cyan-800 hover:to-teal-800 focus:scale-95' href='' >Link <AiFillGithub /></a>
              </div>
            </div>  
            <div className="card">
              <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={Carrito} />
                </div>
                <h5 className='text-2xl md:text-2xl font-medium mt-3'>Proyecto Ecommerce de CoderHouse</h5>
                <a className='flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold px-4 py-2 border-none rounded-md mt-4 hover:bg-gradient-to-l hover:from-cyan-800 hover:to-teal-800 focus:scale-95' href='' >Link <AiFillGithub /></a>
              </div>
            </div>  
            <div className="card">
              <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={EnviarMails} />
                </div>
                <h5 className='text-2xl md:text-2xl font-medium mt-3'>Proyecto Ecommerce de CoderHouse</h5>
                <a className='flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold px-4 py-2 border-none rounded-md mt-4 hover:bg-gradient-to-l hover:from-cyan-800 hover:to-teal-800 focus:scale-95' href='' >Link <AiFillGithub /></a>
              </div>
            </div>  

          </div>
        </div>
    </div>
  )
}

export default Portfolio