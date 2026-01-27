import Projects from "./Projects.jsx";
import AboutMe from "./AboutMe.jsx";
import Certifications from "./Certifications.jsx";
import Skills from "./Skills.jsx";

function Content () {
    return (
        <section className="content_section">
            <Projects />
            <AboutMe />
            <Certifications />
            <Skills />
        </section>
    )
}

export default Content;