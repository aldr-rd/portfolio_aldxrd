import Projects from "./Projects.jsx";
import AboutMe from "./AboutMe.jsx";
import Certifications from "./Certifications.jsx";
import Skills from "./Skills.jsx";

function Content () {
    return (
        <section className="flex flex-col gap-12.5 px-[12%] py-12.5 bg-section">
            <Projects />
            <AboutMe />
            <Certifications />
            <Skills />
        </section>
    )
}

export default Content;