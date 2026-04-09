import React from 'react'

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

const WhatsappIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.413A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.076-1.12l-.292-.174-3.024.859.862-3.014-.19-.308A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
  </svg>
)

const GmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)

export const Footer = () => {
  return (
    <div className='bg-[#0F4D42] text-white'>

      {/* Corpo principal */}
      <div className='max-w-7xl mx-auto px-16 py-16 flex flex-col md:flex-row justify-between gap-12'>

        {/* Marca */}
        <div className='flex flex-col gap-4 max-w-xs'>
          <h2 className='text-2xl font-semibold tracking-wide'>Francisco Martins</h2>
          <p className='text-sm font-light leading-relaxed text-white/70'>
            Design de interiores com identidade, funcionalidade e exclusividade.
            Transformamos ambientes em experiências.
          </p>
        </div>

        {/* Navegação */}
        <div className='flex flex-col gap-3'>
          <h3 className='text-sm font-semibold uppercase tracking-widest text-white/50 mb-1'>Menu</h3>
          {['Sobre', 'Projetos', 'Serviços', 'Contato'].map((item) => (
            <a
              key={item}
              href="#"
              className='text-sm text-white/70 hover:text-white transition-colors duration-200'
            >
              {item}
            </a>
          ))}
        </div>

        {/* Contato */}
        <div className='flex flex-col gap-4'>
          <h3 className='text-sm font-semibold uppercase tracking-widest text-white/50 mb-1'>Contato</h3>

          <a href="https://instagram.com/franciscomartinsdesign" target="_blank" rel="noreferrer"
            className='flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200'>
            <InstagramIcon />
            @franciscomartinsdesign
          </a>

          <a href="https://wa.me/5548999999999" target="_blank" rel="noreferrer"
            className='flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200'>
            <WhatsappIcon />
            (48) 9 9999-9999
          </a>

          <a href="mailto:contato@franciscomartins.com"
            className='flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200'>
            <GmailIcon />
            contato@franciscomartins.com
          </a>
        </div>

      </div>

      {/* Rodapé inferior */}
      <div className='border-t border-white/10 px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-2'>
        <p className='text-xs text-white/40'>
          © {new Date().getFullYear()} Francisco Martins Design de Interiores. Todos os direitos reservados.
        </p>
        <p className='text-xs text-white/40'>
          Palhoça, Santa Catarina
        </p>
      </div>

    </div>
  )
}