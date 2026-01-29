import perfilIcon from '../assets/img/perfil-web.webp';

function Hero() {
  return (
    <section className="flex bg-section px-[12%] py-4 justify-between items-center">
        <header className="flex justify-center items-center gap-2.5">
            <img src={perfilIcon} className="w-10 h-10 rounded-full" alt="logo"/>
            <div className="flex flex-col text-normal">
                <p>Aldxrd</p>
                <p className="text-secondary text-[12px]">Web Developer</p>
            </div>
        </header>
        <nav>
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
    </section>
  )
}

export default Hero