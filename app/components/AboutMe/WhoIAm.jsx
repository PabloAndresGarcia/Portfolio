import React from 'react'

const WhoIAm = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1'>
      <div>
      <h3 className='text-3xl py-5 mt-5'>Sobre mí</h3>
      <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-left'>Mi nombre es Pablo García, soy un <span className='text-teal-500'> Desarrollo FrontEnd </span>. Disfruto trabajar en equipo y asumir desafíos técnicos. Mi enfoque se centra en el <span className='text-teal-500'>diseño</span> y la <span className='text-teal-500'>funcionalidad web</span>, y me apasiona la resolución de problemas para lograr resultados sólidos.</p>
      </div>
      <div className='grid items-center justify-center'>
      <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8' href="https://www.coderhouse.com/certificados/652e4ae318da10077d75f3ea?lang=es">Certificado React</a>
      </div>
    </div>
  )
}

export default WhoIAm