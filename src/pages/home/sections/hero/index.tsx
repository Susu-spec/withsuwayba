import HeroBg from "@/assets/hero-bg02.png"

export default function HeroSection() {
    return (
         <div className="pl-4 h-screen relative overflow-hidden">
            <ul className="flex flex-col gap-0 text-start absolute ml-[50%] px-6 py-4 z-40">
                <a href="/" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/work" className="nav-link">
                    Work
                    <span className="superscript"></span>
                </a>
                <a href="/contact" className="nav-link">Contact</a>
            </ul>
            
            <div className="grid grid-cols-2 h-full">
                <div className="flex flex-col relative justify-end z-40">
                    <div className="max-w-[50%] leading-[1.125rem] ">
                        <p className="font-medium text-xs">
                            Frontend Engineer
                        </p>
                        <p className="text-gray-400 text-xs">
                            I build interactive user interfaces that 
                            connect users to the backend logic of applications. 
                            My work ensures that digital products are usable, 
                            responsive, and visually appealing across devices.
                        </p>
                        <p className="capitalize mt-3 text-gray-900 !text-[11.25rem] !font-inter-tight font-bold leading-[8.125rem]">
                            SUWAYBA
                        </p>   
                    </div>
                </div>
                
                <div className="w-full h-full max-h-screen">
                    <figure>
                        <img className="w-full zoom-in-out" 
                            alt="Close-up of Sarah pouring water between cupped hands against a plain wall for the Jane publication." 
                            src={HeroBg} 
                        /> 
                       <div className="z-20 absolute bottom-2 right-2 text-[10px] tracking-wider text-zinc-900">
                            wilde / hein / sarah · via 
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
            </div>
        </div>
    )
}