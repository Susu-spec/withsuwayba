import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import synesthesiaImage from "@/assets/synesthesia.png";
import astralPlane from "@/assets/astral-plane.png";
import spaceStars from "@/assets/space-stars.png";
import dragons from "@/assets/dragons.png";

gsap.registerPlugin(ScrollTrigger);


export default function WorkSection() {
   const sectionsRef = useRef<HTMLDivElement[]>([]);
useGSAP(() => {
    const sections = sectionsRef.current;
   
    const setupVerticalScroll = () => {
        sections.forEach((section, index) => {
            if (index === 0) return; // Skip animation for first section
            
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 3.5,
                    }
                })
                .fromTo(section, {
                    y: '100%', // Start from below
                }, {
                    y: '0%',   // Move to normal position
                    ease: 'none',
                    duration: 4,
                }, '<');
        })
    }
    setupVerticalScroll();

    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
}, []);

const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
        sectionsRef.current.push(el);
    }
};

const sectionComponents = [
    <Synesthesia />,
    <SpaceInvaders />,
    <DungeonsAndDragons />,
    <R2D2 />
]

return (
    <section className="sticky top-h-screen overflow-hidden">
        <div className="relative h-full">
            {sectionComponents.map((SectionComponent, index) => (
                <div
                    key={index}
                    ref={addToRefs}
                    className={`h-full sticky top-0 cursor-default ${index > 0 ? 'z-10' : ''}`}
                    style={{ zIndex: index + 1 }}
                >
                    {SectionComponent}
                </div>
            ))}
        </div>
    </section>
);
}

const Synesthesia = () => {
    return (
        <picture className="absolute w-full h-full top-0 -z-20">
            <img 
                // alt="Top half of woman's head who has dark hair in front of plain background." 
                src={synesthesiaImage} className="w-full"/>
        </picture>
    )
}

const SpaceInvaders = () => {
    return (
        <picture className="absolute w-full h-full top-0 -z-20">
            <img 
                // alt="Top half of woman's head who has dark hair in front of plain background." 
                src={spaceStars} className="w-full"/>
        </picture>
    )
}

const DungeonsAndDragons = () => {
    return (
        <picture className="absolute w-full h-full top-0 -z-20">
            <img 
                // alt="Top half of woman's head who has dark hair in front of plain background." 
                src={dragons} className="w-full"/>
        </picture>
    )
}

const R2D2 = () => {
    return (
        <picture className="absolute w-full h-full top-0 -z-20">
            <img 
                // alt="Top half of woman's head who has dark hair in front of plain background." 
                src={astralPlane} className="w-full"/>
        </picture>
    )
}