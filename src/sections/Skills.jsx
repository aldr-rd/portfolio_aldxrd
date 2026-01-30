import skills from "../data/skills";
import SkillsCard from "../components/SkillCard";

function Skills() {
    return (
        <section id="skills" className="
            flex flex-col gap-5
        ">
            <h2 className="text-accent text-txth2 font-bold card-animation">SKILLS</h2>
            <div className="grid grid-cols-4 gap-5">
                {skills.map((skl) => (
                    <SkillsCard
                        key={skl.id}
                        skill={skl}
                    />
                ))}
            </div>
        </section>
    )
}

export default Skills;