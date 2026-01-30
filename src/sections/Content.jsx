import Projects from "./Projects.jsx";
import AboutMe from "./AboutMe.jsx";
import Certifications from "./Certifications.jsx";
import Skills from "./Skills.jsx";

function Content () {
    return (
        <section className="
            flex flex-col gap-6 lg:gap-12.5
            px-6 py-6
            lg:px-[12%] lg:py-12.5
            bg-section
        ">
            <Projects />
            <AboutMe />
            <Certifications />
            <Skills />
        </section>
    )
}

export default Content;