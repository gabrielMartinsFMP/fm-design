import React from 'react'

export const HowItsWork = () => {
  const steps = [1, 2, 3, 4]
  const textSteps = [
    { title: 'Briefing inicial', text: 'Conversa detalhada para compreender necessidades, estilo de vida e expectativas do cliente.' },
    { title: 'Conceito', text: 'Criação de propostas visuais e funcionais que refletem a identidade desejada.' },
    { title: 'Produção', text: 'Criação de propostas visuais e funcionais que refletem a identidade desejada.' },
    { title: 'Entrega', text: 'Concretização de ambientes que unem beleza, conforto e funcionalidade.' },
  ]

  return (
    <div className='bg-[#197B69] text-white flex flex-col min-h-200 items-center justify-center p-40 gap-5'>

      {/* Título e descrição */}
      <div className='max-w-250 flex flex-col gap-3 self-start'>
        <h1 className='text-7xl font-medium'>Desenvolvimento de Projetos</h1>
        <p className='text-3xl font-light'>
          No Francisco Martins Design de Interiores,
          acreditamos que cada projeto é uma jornada
          colaborativa. Nosso processo é estruturado
          em etapas que garantem qualidade e exclusividade:
        </p>
      </div>

      {/* Linha com bolinhas */}
      <div className="relative flex items-center w-full py-12">
        <div className="absolute left-0 right-0 h-[3px] bg-white" />
        <div className="relative flex justify-between w-full">
          {steps.map((step) => (
            <div
              key={step}
              className="w-6 h-6 rounded-full bg-white"
            />
          ))}
        </div>
      </div>

      {/* Textos lado a lado */}
      <div className='flex justify-between w-full gap-8'>
        {textSteps.map((step, index) => (
          <div key={index} className='flex flex-col gap-2 flex-1'>
            <h3 className='font-bold text-2xl'>{step.title}</h3>
            <p className='font-light w-60 text-xl'>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}