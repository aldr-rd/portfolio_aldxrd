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
        <section className="projects">
            <div className="projects_container">
                <h2 className="project_title">PROYECTOS</h2>

                <div className="project_divider">
                    <h3 className="project_subtitle">Mis Proyectos Destacados</h3>
                    {/* Filter Buttons */}
                    <div className="projects_filters">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                className={`projects_filter_button ${activeFilter === filter ? "active" : ""}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Proyectos */}
            <div className="project_cards">
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