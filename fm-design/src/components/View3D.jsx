import React from 'react'

export const View3D = () => {
  return (
    <div className='bg-[#197B69] px-16 py-12 flex items-center justify-center'>

      {/* Container das fotos — relative para o card se posicionar */}
      <div className='relative grid grid-cols-2 gap-2 max-w-5xl w-full'>

        {/* Foto 1 — sala de jantar */}
        <img
          src="1.png"
          alt="Sala de jantar"
          className='w-full h-72 object-cover'
        />

        {/* Foto 2 — escritório */}
        <img
          src="1.png"
          alt="Escritório"
          className='w-full h-72 object-cover'
        />

        {/* Foto 3 — estante */}
        <img
          src="2.png"
          alt="Estante"
          className='w-full h-72 object-cover'
        />

        {/* Foto 4 — sala de estar */}
        <img
          src="3.png"
          alt="Sala de estar"
          className='w-full h-72 object-cover'
        />

        {/* Card central — absolute sobre as 4 fotos */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C2AC8F]/85 backdrop-blur-sm p-8 w-72 text-white'>
          <h2 className='text-2xl font-bold mb-4'>Visualização 3D</h2>
          <p className='text-sm font-light leading-relaxed'>
            Entregamos modelagem e renderização 3D para que você visualize 
            seu projeto com realismo antes da execução. Cada detalhe — 
            iluminação, texturas e mobiliário — é apresentado de forma clara, 
            garantindo confiança nas escolhas e fidelidade ao resultado final.
          </p>
        </div>

      </div>
    </div>
  )
}