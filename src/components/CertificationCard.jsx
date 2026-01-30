export default function CertificationCard({ certification }) {
    return (
        <div className="
                relative group
                flex flex-col
                p-6.25 gap-2.5
                bg-card border border-bordes rounded-[20px]
                hover:scale-102 transition-all duration-400 group
                hover:border-primary
                card-animation
        ">
            <p className="text-txth5 font-semibold">{certification.title}</p>
            <p className="
                flex gap-1.25
                text-normal text-secondary
            ">
                {certification.description}
            </p>
            <a href={certification.url} target="_blank" className="
                absolute bottom-3 right-3
                opacity-0 scale-90
                transition-all duration-400
                group-hover:opacity-100 group-hover:scale-100 group-hover:animate-slide-in-left
            ">
                <svg width={25} height={25}><use href={"/sprite.svg#right"} /></svg>
            </a>
        </div>
    );
}