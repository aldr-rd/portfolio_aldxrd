export default function SkillCard({ skill }) {
    return (
        <div className="
            relative
            flex flex-col items-center justify-center
            p-8 h-30
            bg-card border border-bordes rounded-[20px]
            overflow-hidden group
            hover:border-primary hover:scale-102
            transition-all duration-400
            cursor-default
        ">
            <p className="
                text-[18px] font-semibold text-center
                transition-all duration-400
                group-hover:opacity-0 group-hover:scale-90
            ">{skill.name}</p>
            <p className="
                text-normal text-center
                absolute
                p-3
                opacity-0 scale-90
                transition-all duration-400
                group-hover:opacity-100 group-hover:scale-100
            ">{skill.description}</p>
        </div>
    );
}