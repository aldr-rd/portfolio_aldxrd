function Footer() {
    return (
        <footer className="
            flex px-[12%] py-5
            border-t border-bordes
            bg-section
            items-center
            justify-center
        ">
            <div className="
                flex justify-center items-center gap-7.5
                text-secondary
                text-normal
            ">
                <p>Developed by aldxrd</p>
                <p>|</p>
                <div className="flex gap-5 ">
                    <a href="https://www.linkedin.com/in/aldxrd/" target="_blank"><svg width={22} height={22}><use href={"/sprite.svg#linkedin"} /></svg></a>
                    <a href="https://github.com/aldr-rd" target="_blank"><svg width={22} height={22}><use href={"/sprite.svg#github2"} /></svg></a>
                    <a href="https://discord.com/" target="_blank"><svg width={22} height={22}><use href={"/sprite.svg#discord"} /></svg></a>
                    <a href="https://www.instagram.com/" target="_blank"><svg width={22} height={22}><use href={"/sprite.svg#instagram"} /></svg></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;