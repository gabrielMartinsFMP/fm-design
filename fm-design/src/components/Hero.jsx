import React from 'react'

export const Hero = () => {
  return (
    <section className="relative z-1 h-[86vh] overflow-hidden">
        <img src="casa1fundo.png" alt="" className="absolute inset-0 w-full h-full object-cover scale-[1.19]" />

        <div className="relative z-10 flex h-full  justify-between pl-[232px] pr-[136px] text-white">
            <div className="max-w-xl pt-[193px]">
                <h1 className="text-[56px] font-bold leading-tight mb-4">
                    Seu espaço, <br />
                    sua essência
                </h1>
                <p className="text-[24px] font-normal max-w-md">
                    30 anos criando ambientes que unem estilo, conforto e inovação.
                </p>
            </div>

            <div className="self-center">
                <img src="casa1.jpg" alt="" className="w-[480px] h-[400px] object-cover shadow-2xl" />
            </div>
        </div>
    </section>
  )
}
