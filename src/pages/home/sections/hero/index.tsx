import HeroBg from "@/assets/hero-bg02.png"

export default function HeroSection() {
    return (
        <div className="min-h-fit md:pl-4 relative">
            <ul className="hidden md:flex flex-col gap-0 text-start absolute ml-[50%] px-6 py-4 z-40">
                <a href="#home" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#project-one" className="nav-link">
                    Work
                    <span className="superscript"></span>
                </a>
                <a href="#contact" className="nav-link">Contact</a>
            </ul>
            
            <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-screen"> 
                <HeroText />
                <HeroImage />
            </div>
        </div>
    )
}


export function HeroText() {
    return (
        <div className="h-full md:min-h-fit flex flex-col justify-end z-50">
            <div className="max-w-full md:max-w-[50%] leading-[1.125rem] px-5 py-10 md:py-0">
                <p className="font-medium text-base md:text-sm">Frontend Engineer</p>
                <p className="text-gray-400 md:text-sm md:mt-2 mb-4">
                    I build interactive user interfaces that 
                    connect users to the backend logic of applications. 
                    With me, digital products are usable, 
                    responsive, and visually appealing across devices.
                </p>
                <p className={`hero-text mt-4 text-gray-900 md:text-[11.25rem] text-[4rem] font-inter-tight font-bold leading-tight md:leading-[8.125rem]`}>
                    SUWAYBA
                </p>   
            </div>
        </div>
    )
}


export function HeroImage() {
    return (
         <div className="w-full min-h-screen md:min-h-fit md:h-full max-h-screen">
            <figure className="h-screen md:h-full">
                <img className="w-full h-full zoom-in-out" 
                    alt="Close-up of Sarah pouring water between cupped hands against a plain wall for the Jane publication." 
                    src={HeroBg} 
                /> 
                <div className="z-20 absolute bottom-2 right-2 text-[10px] tracking-wider text-zinc-900">
                    wilde / hein / sarah · via&nbsp;
                    <a 
                        href="https://www.instagram.com/p/Ce3MUPJvvs2/?igshid=ZTJlZmI4ZjZmNw%3D%3D" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline"
                    >
                        greyattic
                    </a>
                </div>
            </figure>
        </div>
    )
}