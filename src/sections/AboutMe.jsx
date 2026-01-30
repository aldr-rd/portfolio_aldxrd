function AboutMe() {
    return (
        <section id="aboutme" className="
            flex flex-col gap-2.5
            pb-6
            lg:pb-12.5
            border-b border-bordes
        ">
            <div className="flex flex-col gap-2.5">
                <h2 className="text-txth2 text-accent font-bold card-animation">SOBRE MI</h2>
                <h3 className="text-txth3 font-semibold card-animation">Richard Aldair Diaz Brandan</h3>
            </div>
            <div className="flex flex-col lg:flex-row gap-2.5 lg:gap-7.5 items-start">
                <div className="w-full lg:w-1/2 card-animation">
                    <p>Estudiante de Ingeniería de Sistemas con experiencia en desarrollo web, gestión de proyectos y análisis de información.
                    <br /> <br />
                    He participado en proyectos reales aplicando programación, construcción de sitios web, modelado de datos y coordinación de equipos bajo metodologías ágiles. Manejo tecnologías como JavaScript, React, WordPress, SQL y Power BI, lo que me permite adaptarme a distintos roles dentro del área tecnológica.
                    <br /> <br />
                    Me caracterizo por mi aprendizaje constante, capacidad de trabajo en equipo y orientación a resultados, buscando aportar soluciones eficientes y bien estructuradas en entornos dinámicos.</p>
                </div>
                <div className="
                    flex flex-col gap-5
                    border border-bordes rounded-[20px]
                    bg-card
                    w-full p-4
                    lg:w-1/2 lg:p-6.25 cursor-default
                    hover:scale-102 transition-all duration-500
                    card-animation
                ">
                    <div className="flex justify-between items-end">
                        <div className="flex flex-col">
                            <p className="text-txth5 font-semibold">Systems Engineering</p>
                            <p className="text-normal text-secondary">Universidad Cesar Vallejo</p>
                        </div>
                        <div className="flex flex-col text-normal text-secondary items-end">
                            <p>2021 - 2026</p>
                            <p>Lima, Peru</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-end ">
                        <div className="flex flex-col">
                            <p className="text-txth5 font-semibold">Desarrollo Front-End</p>
                            <p className="text-normal text-secondary">Oracle Next Education (ONE)</p>
                        </div>
                        <div className="flex flex-col text-normal text-secondary items-end">
                            <p>2023</p>
                            <p>Latino America</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;