import github from '../assets/icons/github.svg';

export default function ProjectCard({ project, index }) {

  const isReversed = index % 2 !== 0;

  return (
    <div className={`project_card_item ${isReversed ? "reverse" : "" }`}>
      <div className="project_card_content">
        <span className="card_category">{project.category}</span>
        <p className="card_title">{project.title}</p>
        <p className="card_description">{project.description}</p>
        <a href={project.codeUrl} className="card_url" target="_blank">
          <img src={github} alt="GitHub Icon" />
          <span>Código</span>
        </a>
        <ul className="card_tech_list">
          {project.technologies.map((tech) => (
            <li className="card_tech_item" key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="project_card_img">
        <img
          src={project.image}
          alt={project.title}
          className="card_image"
        />
      </div>

    </div>
  );
}