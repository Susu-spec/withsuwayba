export default function HeroSection() {
    return (
         <section className="pl-4 pb-[11.25rem] h-screen relative">
            <ul className="flex flex-col gap-0 text-start absolute ml-[50%] px-6 py-4 z-40">
                <a href="/" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/work" className="nav-link">
                    Work
                    <span className="superscript"></span>
                </a>
                <a href="/contact" className="nav-link">Contact</a>
            </ul>
            <p className="capitalize !text-[11.25rem] !font-inter-tight font-bold absolute bottom-6 z-5 leading-[8.125rem]">
              SUWAYBA
            </p>    
            <div className="h-full grid grid-cols-2 relative">
                <div className="relative flex flex-col justify-end ">
                <div className="max-w-[50%] leading-[1.125rem] absolute bottom-[10.25rem]">
                    <p className="font-medium text-xs">
                        Frontend Engineer
                    </p>
                    <p className="text-gray-400 text-xs">
                        I build interactive user interfaces that 
                        connect users to the backend logic of applications. 
                        My work ensures that digital products are usable, 
                        responsive, and visually appealing across devices.
                    </p>
                </div>
                </div>
                
                <div className="w-full h-full">
                    <picture>
                        <source media="(max-width: 480px)" srcSet="https://balance.michael-aust.com/media/pages/home/9f06b010e0-1743182714/header-img-placeholder-480x840-crop.webp" />
                        <source media="(max-width: 760px)" srcSet="https://balance.michael-aust.com/media/pages/home/9f06b010e0-1743182714/header-img-placeholder-760x.webp"/>
                        <source media="(max-width: 1200px)" srcSet="https://balance.michael-aust.com/media/pages/home/9f06b010e0-1743182714/header-img-placeholder-1200x.webp"/>
                        <source media="(max-width: 1920px)" srcSet="https://balance.michael-aust.com/media/pages/home/9f06b010e0-1743182714/header-img-placeholder-1920x.webp"/>
                        <source media="(min-width: 1921px)" srcSet="https://balance.michael-aust.com/media/pages/home/9f06b010e0-1743182714/header-img-placeholder-2560x.webp"/>
                        <img className="h-full" 
                            alt="Dark skinned man in white suit looking to the left in a bright studio next to a table with flowers on it." 
                            src="https://balance.michael-aust.com/media/pages/home/9f06b010e0-1743182714/header-img-placeholder-2560x.webp" 
                            data-src="https://balance.michael-aust.com/media/pages/home/9f06b010e0-1743182714/header-img-placeholder-2560x.webp" 
                        />
                        
                    </picture>
                </div>
            </div>
        </section>
    )
}