import blue from "@/assets/blue.png";
import piano from "@/assets/r2-d2.jpg";
import space from "@/assets/space-walk.png";
import paper from "@/assets/paper.jpg";


export const Synesthesia = () => {
    return (
            <figure className="w-full h-screen">
                <img
                    alt="Top half of blue and silver colored contraptions" 
                    src={blue} className="w-full h-screen object-fill" />  
                <figcaption className="absolute inset-0 flex items-center justify-center z-20">
                    <a className="work-caption" href="https://synesthesia-psi.vercel.app/">
                        Synesthesia
                    </a>
                </figcaption>
                <figcaption className="z-40 absolute top-8 right-2 text-[10px] tracking-wider text-zinc-900">
                    berlin · via<span> </span>
                    <a href=" https://www.instagram.com/p/C5A7xNTshk5/?igsh=ZzR4dWJ1bnc0cHJo&img_index=3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline"
                    >
                          duc trinh
                    </a>
                </figcaption>
            </figure>
        
    )
}

export const SpaceInvaders = () => {
    return (
        
            <figure className="w-full h-screen">
               <img
                    alt="Astronaut performing space walk without tether" 
                    src={space} className="w-full h-screen object-cover" />  
                <figcaption className="absolute inset-0 flex items-center justify-center z-20">
                    <a className="work-caption" href="https://space-invaders-nine-psi.vercel.app/">
                        Space Invaders
                    </a>
                </figcaption>
                <figcaption className="z-20 absolute top-8 right-2 text-[10px] tracking-wider text-zinc-900">
                    bruce mccandles · nasa · via <span> </span> 
                    <a href="https://www.instagram.com/p/DB7_kpjuElI/?hl=en" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        complex
                    </a>
                </figcaption>
                    
            </figure>
        
    )
}

export const DungeonsAndDragons = () => {
    return (
        
            <figure className="w-full h-screen relative">
                <img 
                    alt="Paper brown background behind flower illustration" 
                    src={paper} className="w-full h-screen object-cover" />
                <figcaption className="absolute inset-0 flex items-center justify-center z-20">
                    <a className="work-caption !text-black" href="https://dungeons-and-dragons-site.vercel.app/">
                        Dungeons and Dragons
                    </a>
                </figcaption>
                {/* <figcaption className="z-20 absolute bottom-2 right-2 text-[10px] tracking-wider text-zinc-900">
                    zeekr · via <span> </span> 
                    <a href="https://www.instagram.com/p/DB7_kpjuElI/?hl=en" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        jiayi
                    </a>
                </figcaption> */}
            </figure>
        
    )
}

export const R2D2 = () => {
    return (
        <figure className="w-full h-screen relative">
            <img 
                alt="Photo of a car seat, reimagined as a piano concept"
                src={piano}
                className="w-full h-screen object-cover" 
            />

            <figcaption className="absolute inset-0 flex items-center justify-center z-20">
                <a className="work-caption" href="https://r2-d2-nu.vercel.app/">
                    R2D2
                </a>
            </figcaption>

            <figcaption className="z-20 absolute top-8 right-2 text-[10px] tracking-wider text-zinc-900">
                zeekr · via <span />
                <a
                    href="https://www.instagram.com/p/DB7_kpjuElI/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                >
                    jiayi
                </a>
            </figcaption>
        </figure>
    );
};
