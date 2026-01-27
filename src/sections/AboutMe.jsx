function AboutMe() {
    return (
        <section className="about">
            <div className="about_container">
                <h2 className="about_title">SOBRE MI</h2>
                <h3 className="about_subtitle">Richard Aldair Diaz Brandan</h3>
            </div>
            <div className="about_content">
                <div className="about_content_text">
                    <p>Estudiante de Ingeniería de Sistemas con experiencia en desarrollo web, gestión de proyectos y análisis de información.
                    <br /> <br />
                    He participado en proyectos reales aplicando programación, construcción de sitios web, modelado de datos y coordinación de equipos bajo metodologías ágiles. Manejo tecnologías como JavaScript, React, WordPress, SQL y Power BI, lo que me permite adaptarme a distintos roles dentro del área tecnológica.
                    <br /> <br />
                    Me caracterizo por mi aprendizaje constante, capacidad de trabajo en equipo y orientación a resultados, buscando aportar soluciones eficientes y bien estructuradas en entornos dinámicos.</p>
                </div>
                <div className="about_content_studies">
                    <div className="studies_item">
                        <div className="studies_item_name">
                            <p>Systems Engineering</p>
                            <p>Universidad Cesar Vallejo</p>
                        </div>
                        <div className="studies_item_date">
                            <p>2021 - 2026</p>
                            <p>Lima, Peru</p>
                        </div>
                    </div>
                    <div className="studies_item">
                        <div className="studies_item_name">
                            <p>Desarrollo Front-End</p>
                            <p>Oracle Next Education (ONE)</p>
                        </div>
                        <div className="studies_item_date">
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