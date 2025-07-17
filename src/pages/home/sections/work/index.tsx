import synesthesiaImage from "@/assets/blue.png";
import piano from "@/assets/r2-d2.jpg";
import space from "@/assets/space.jpg";
import dragons from "@/assets/sky.png";


export const Synesthesia = () => {
    return (
            <figure className="w-full h-screen">
                <img
                    alt="Top half of blue and silver colored contraptions" 
                    src={synesthesiaImage} className="w-full h-screen object-fill" />  
                <div className="z-40 absolute top-8 right-2 text-[10px] tracking-wider text-zinc-900">
                    berlin · via<span> </span>
                    <a href=" https://www.instagram.com/p/C5A7xNTshk5/?igsh=ZzR4dWJ1bnc0cHJo&img_index=3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline"
                    >
                          duc trinh
                    </a>
                </div>
            </figure>
        
    )
}

export const SpaceInvaders = () => {
    return (
        
            <figure className="w-full h-screen">
                <img 
                   alt="Astronaut performing space walk without tether"
                    src={space} className="w-full h-screen object-cover" />
                <div className="z-20 absolute bottom-2 right-2 text-[10px] tracking-wider text-zinc-900">
                    bruce mccandles · nasa · via <span> </span> 
                    <a href="https://www.instagram.com/p/DB7_kpjuElI/?hl=en" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        complex
                    </a>
                </div>
                    
            </figure>
        
    )
}

export const DungeonsAndDragons = () => {
    return (
        
            <figure className="w-full h-screen relative">
                <img 
                    // alt="Top half of woman's head who has dark hair in front of plain background." 
                    src={dragons} className="w-full h-screen object-cover" />
                <div className="z-20 absolute bottom-2 right-2 text-[10px] tracking-wider text-zinc-900">
                    zeekr · via <span> </span> 
                    <a href="https://www.instagram.com/p/DB7_kpjuElI/?hl=en" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        jiayi
                    </a>
                </div>
            </figure>
        
    )
}

export const R2D2 = () => {
    return (
        
            <figure className="w-full h-screen relative">
                <img 
                    // alt="Top half of woman's head who has dark hair in front of plain background." 
                    src={piano} className="w-full h-screen object-cover" />
                <div className="z-20 absolute bottom-2 right-2 text-[10px] tracking-wider text-zinc-900">
                    zeekr · via <span> </span> 
                    <a href="https://www.instagram.com/p/DB7_kpjuElI/?hl=en" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        jiayi
                    </a>
                </div>
            </figure>
        
    )
}