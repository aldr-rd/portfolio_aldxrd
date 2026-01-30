function Banner() {
    return (
        <section id="home" className="
            px-[12%] py-14 flex justify-center items-center
            animate-fade-up
            animate-range-[entry_0%_cover_30%]
        ">
            <div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="flex flex-col justify-center items-center animate-blurred-fade-in">
                        <h2 className="text-mediano text-accent font-bold">Engineering Student</h2>
                        <h1 className="text-gigante font-black">Richard Diaz</h1>
                        <p className='text-txth3 font-semibold'>FrontEnd Developer</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2.5 animate-blurred-fade-in">
                        <div className="flex gap-5">
                            <a href="https://www.linkedin.com/in/aldxrd/" target="_blank" className="
                                flex px-5 py-2.5 bg-button rounded-[10px] text-btn
                                hover:scale-105 transition-all duration-400
                                hover:bg-red-500
                            ">Linkedin -&gt;</a>
                            <a href="https://github.com/aldr-rd" target="_blank_" className="
                                flex px-5 py-2.5 bg-button rounded-[10px] text-btn
                                hover:scale-105 transition-all duration-400
                                hover:bg-red-500
                            ">Github -&gt;</a>
                        </div>
                        <a href="/pdf/Diaz_CV.pdf" target="_blank" className="
                            flex items-center justify-center gap-1.25 px-4 py-2.5
                            border border-bordes rounded-[10px] text-btn
                            hover:scale-105 transition-all duration-400
                            hover:bg-neutral-900 hover:border-neutral-900
                        ">
                            <svg width={15} height={15}><use href={"/sprite.svg#download"} /></svg>
                            Descargar CV
                        </a>
                    </div>
                    <div>
                        <ul className='flex gap-2.5 animate-blurred-fade-in'>
                            <li><svg width={25} height={25}><use href={"/sprite.svg#html"} /></svg></li>
                            <li><svg width={25} height={25}><use href={"/sprite.svg#css"} /></svg></li>
                            <li><svg width={25} height={25}><use href={"/sprite.svg#javascript"} /></svg></li>
                            <li><svg width={25} height={25}><use href={"/sprite.svg#react"} /></svg></li>
                            <li><svg width={25} height={25}><use href={"/sprite.svg#nodejs"} /></svg></li>
                            <li><svg width={25} height={25}><use href={"/sprite.svg#java"} /></svg></li>
                            <li><svg width={25} height={25}><use href={"/sprite.svg#database"} /></svg></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner