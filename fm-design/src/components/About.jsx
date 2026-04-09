import React from 'react'

export const About = () => {
  return (
    <section className="w-full bg-[linear-gradient(to_bottom,#197B69_50%,#146455_50%)] px-16 py-[12.5vh]">
              <div className="flex gap-16 items-start max-w-7xl mx-auto">
                  <div className="flex-1 text-white pt-[26vh] md:pt-[15vh] lg:pt-[15vh]">
                      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8">
                          UM POUCO<br />SOBRE NÓS
                      </h2>
                      <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
                          Com mais de 30 anos de experiência, o Francisco <br /> Martins  Design de Interiores é referência na criação <br /> de ambientes sofisticados e funcionais na Grande <br /> Florianópolis. Liderado por Francisco Marcelino <br /> Martins Filho, o escritório alia tradição e inovação <br /> para desenvolver projetos que traduzem a essência <br /> de cada cliente.
                      </p>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                      <img src="casa2.png" alt="" className="w-full aspect-square object-cover bg-white/10" />
                      <img src="casa3.png" alt="" className="w-full aspect-square object-cover bg-white/10" />
                      <img src="casa4.png" alt="" className="w-full aspect-square object-cover bg-white/10" />
                      <img src="casa5.png" alt="" className="w-full aspect-square object-cover bg-white/10" />
                  </div>
              </div>
              <p className="text-white text-center text-sm mt-16 md:mt-10 lg:mt-16 w-4xl mx-auto">
                  Nosso compromisso é transformar espaços em experiências únicas, unindo estética, conforto e personalidade em cada detalhe.
              </p>
          </section>
  )
}
