import React from 'react'

export const Header = () => {
  return (
    <header className="w-full bg-[#197B69] z-10">
        <nav className="flex h-[14vh] w-full items-center px-8">
            <img src="logo.png" alt="Logo Francisco Martins" className="w-[451px] h-[201px] pl-[60px]" />
            <ul className="ml-20 flex gap-[60px] text-white text-[24px] font-medium">
                <li><a href="#" className="hover:underline">Início</a></li>
                <li><a href="#" className="hover:underline">Sobre</a></li>
                <li><a href="#" className="hover:underline">Produção</a></li>
                <li><a href="#" className="hover:underline">Produtos</a></li>
                <li><a href="#" className="hover:underline">Contato</a></li>
            </ul>
        </nav>
    </header>
  )
}
