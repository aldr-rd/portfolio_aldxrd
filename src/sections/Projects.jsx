import { useState } from "react";
import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

const filters = ["All", "Full Stack", "Frontend", "Backend"]

function Projects() {
    const [activeFilter, setActiveFilter] = useState("All")

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(
            (project => project.category === activeFilter)
        );

    return (
        <section id="projects" className="
            flex flex-col
        ">
            <div className="flex flex-col items-start gap-2.5">
                <h2 className="text-accent text-txth2 font-bold card-animation">PROYECTOS</h2>

                <div className="flex flex-col gap-1.25 justify-center items-start">
                    <h3 className="text-txth3 font-semibold card-animation">Mis Proyectos Destacados</h3>
                    {/* Filter Buttons */}
                    <div className="flex p-0.5 rounded-[10px] bg-card card-animation">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                className={`
                                    flex px-4 py-2 rounded-[10px] text-normal
                                    transition-colors duration-400
                                    cursor-pointer
                                    hover:bg-card2
                                    ${activeFilter === filter
                                        ? "bg-card2" : ""}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Proyectos */}
            <div>
                {filteredProjects.map((project, index) => (
                    <ProjectCard 
                        key={project.id}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects;