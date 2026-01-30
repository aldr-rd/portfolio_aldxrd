import { useState } from "react";
import perfilIcon from '../assets/img/perfil-web.webp';

function Hero() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className="
            relative z-50
            flex justify-between items-center
            bg-section px-6 py-4
            lg:px-[12%]
        ">
            <header className="flex justify-center items-center gap-2.5">
                <img src={perfilIcon} className="w-10 h-10 rounded-full" alt="logo" />
                <div className="flex flex-col text-normal">
                    <p>Aldxrd</p>
                    <p className="text-secondary text-[12px]">Web Developer</p>
                </div>
            </header>

            {/* Boton del menu */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white text-2xl"
            >
                ☰
            </button>

            {/* Menu de Desktop */}
            <nav className="hidden lg:flex">
                <ul className="flex items-center text-normal text-secondary">
                    <li><a href="#home" className='
                    px-3 py-2 border-b border-section
                    hover:text-primary hover:border-primary transition-all duration-500
                    '>Inicio</a></li>
                    <li><a href="#projects" className='
                    px-3 py-2 border-b border-section
                    hover:text-primary hover:border-primary transition-all duration-500
                    '>Proyectos</a></li>
                    <li><a href="#aboutme" className='
                    px-3 py-2 border-b border-section
                    hover:text-primary hover:border-primary transition-all duration-500
                    '>Sobre mi</a></li>
                    <li><a href="#certifications" className='
                    px-3 py-2 border-b border-section
                    hover:text-primary hover:border-primary transition-all duration-500
                    '>Certificaciones</a></li>
                    <li ><a href="#skills" className='
                    px-3 py-2 border-b border-section
                    hover:text-primary hover:border-primary transition-all duration-500
                    '>Skills</a></li>
                    <li><a href="mailto:rd544596@gmail.com" className='
                    text-primary font-semibold
                    px-3 py-2 border-b border-section
                    hover:text-secondary hover:border-primary transition-all duration-500
                    '>rd544596@gmail.com</a></li>
                </ul>
            </nav>

            {/* Menu mobile */}
            {menuOpen && (
                <>
                    <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setMenuOpen(false)} />
                    <nav className="absolute top-full left-0 w-full bg-section lg:hidden z-50">
                        <ul className="flex flex-col items-center gap-4 py-4 text-secondary">
                            <li><a className="hover:text-primary transition-all duration-500" href="#home" onClick={() => setMenuOpen(false)}>Inicio</a></li>
                            <li><a className="hover:text-primary transition-all duration-500" href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
                            <li><a className="hover:text-primary transition-all duration-500" href="#aboutme" onClick={() => setMenuOpen(false)}>Sobre mi</a></li>
                            <li><a className="hover:text-primary transition-all duration-500" href="#certifications" onClick={() => setMenuOpen(false)}>Certificaciones</a></li>
                            <li><a className="hover:text-primary transition-all duration-500" href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                            <li><a href="mailto:rd544596@gmail.com" className='text-primary font-semibold hover:text-secondary transition-all duration-500'>rd544596@gmail.com</a></li>
                        </ul>
                    </nav>
                </>
            )}
        </section>
    )
}

export default Hero