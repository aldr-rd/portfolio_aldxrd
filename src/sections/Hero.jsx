import perfilIcon from '../assets/img/perfil.jpg';

function Hero() {
  return (
    <section className="menu">
        <header className="menu_header">
            <img src={perfilIcon} className="menu_img" id="logo" alt="logo"/>
            <div className="menu_title_container">
                <p className="menu_title">Aldxrd</p>
                <p className="menu_subtitle">Web Developer</p>
            </div>
        </header>
        <nav>
            <ul className="menu_list">
                <li className="menu_list_item"><a href="">Inicio</a></li>
                <li className="menu_list_item"><a href="">Proyectos</a></li>
                <li className="menu_list_item"><a href="">Sobre mi</a></li>
                <li className="menu_list_item"><a href="">Certificaciones</a></li>
                <li className="menu_list_item"><a href="">Skills</a></li>
                <li className="menu_list_item menu_list_item-contacto"><a
                        href="mailto:rd544596@gmail.com">rd544596@gmail.com</a></li>
            </ul>
        </nav>
    </section>
  )
}

export default Hero