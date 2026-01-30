import certifications from "../data/certifications";
import CertificationCard from "../components/CertificationCard"

function Certifications() {
    return (
        <section id="certifications" className="
            flex flex-col gap-5 pb-12.5
            border-b border-bordes
        ">
            <h2 className="text-accent text-txth2 font-bold card-animation">CERTIFICACIONES</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 lg:gap-5">
                {certifications.map((cert) => (
                    <CertificationCard 
                        key={cert.id}
                        certification={cert}
                    />
                ))}
            </div>
        </section>
    )
}

export default Certifications;