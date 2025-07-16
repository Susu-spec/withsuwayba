import synesthesiaImage from "@/assets/blue.png";
import astralPlane from "@/assets/r2d2.png";
import spaceStars from "@/assets/space-invaders.gif";
import dragons from "@/assets/castle.png";


export const Synesthesia = () => {
    return (
        
            <picture className="w-full h-screen relative">
                <img
                    // alt="Top half of woman's head who has dark hair in front of plain background." 
                    src={synesthesiaImage} className="w-full h-screen object-fill" />
               
                <div className="z-20 absolute bottom-2 right-2 text-[10px] tracking-wider text-zinc-900">
                    berlin · via  
                    <a href=" https://www.instagram.com/p/C5A7xNTshk5/?igsh=ZzR4dWJ1bnc0cHJo&img_index=3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline"
                    >
                         duc trinh
                    </a>
                </div>
            </picture>
        
    )
}

export const SpaceInvaders = () => {
    return (
        
            <picture className="w-full h-screen relative">
                <img 
                    // alt="Top half of woman's head who has dark hair in front of plain background." 
                    src={spaceStars} className="w-full h-screen object-fill" />
            </picture>
        
    )
}

export const DungeonsAndDragons = () => {
    return (
        
            <picture className="w-full h-screen relative">
                <img 
                    // alt="Top half of woman's head who has dark hair in front of plain background." 
                    src={dragons} className="w-full h-screen object-cover" />
            </picture>
        
    )
}

export const R2D2 = () => {
    return (
        
            <picture className="w-full h-screen relative">
                <img 
                    // alt="Top half of woman's head who has dark hair in front of plain background." 
                    src={astralPlane} className="w-full h-screen object-cover" />
            </picture>
        
    )
}