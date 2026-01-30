export default function ProjectCard({ project, index }) {

  const isReversed = index % 2 !== 0;

  return (
    <div className={`
      flex py-12.5 gap-7.5 w-full border-b border-bordes
      ${isReversed ? "flex-row-reverse" : "flex-row"}
    `}>
      <div className="flex flex-col gap-2.5 w-1/2 items-start card-animation">
        <span className="text-accent text-txth4 font-bold">{project.category}</span>
        <p className="text-txth3 font-semibold">{project.title}</p>
        <p className="text-normal">{project.description}</p>
        <a href={project.codeUrl}
          className="flex items-center gap-1.25 justify-center
            px-3.75 py-2.5 text-btn
            bg-button2 rounded-[10px]
            hover:bg-neutral-600 hover:scale-105 transition-all duration-400
          " target="_blank">
          <svg width={17} height={17}><use href={project.buttonIcon} /></svg>
          <span>{project.buttonText}</span>
        </a>
        <ul className="flex gap-3.75 text-normal px-3.75 py-2.5 bg-card3 rounded-[10px] cursor-default">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="w-1/2 h-75 rounded-[20px] overflow-hidden group card-animation">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full h-full object-cover block
            transition-transform duration-400 ease-in-out
            group-hover:scale-105
          "
        />
      </div>

    </div>
  );
}