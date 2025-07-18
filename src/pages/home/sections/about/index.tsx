import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
    const imageRef = useRef(null);
    useGSAP(() => {
         gsap.set(imageRef.current, {
        'clip-path': "inset(0% 0 50% 0)"
    });

        gsap.to(imageRef.current, {
            'clip-path': "inset(0% 0 0% 0)",
            duration: 3,
            // ease: "power2.out",
            scrollTrigger: {
            trigger: imageRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
            scrub: 1,
            markers: true,
  
            }
        });
    }, []);
            
    return (
        <div className="flex flex-col gap-[5rem] py-20 min-h-screen max-h-fit lg:px-8 relative overflow-visible">
            <div className="relative h-full">
                 <div ref={imageRef} className="max-w-[20%] basis-[25%] ml-24 overflow-visible"> 
                    <picture>
                        <source media="(max-width: 480px)" srcSet="https://balance.michael-aust.com/media/pages/home/d09fd96a96-1743182714/index-about-placeholder-480x.webp" type="image/webp" />
                        <source media="(max-width: 760px)" srcSet="https://balance.michael-aust.com/media/pages/home/d09fd96a96-1743182714/index-about-placeholder-760x.webp" type="image/webp" />
                        <source media="(max-width: 1200px)" srcSet="https://balance.michael-aust.com/media/pages/home/d09fd96a96-1743182714/index-about-placeholder-1200x.webp" type="image/webp" />
                        <source media="(max-width: 1920px)" srcSet="https://balance.michael-aust.com/media/pages/home/d09fd96a96-1743182714/index-about-placeholder-1920x.webp" type="image/webp" />
                        <source media="(min-width: 1921px)" srcSet="https://balance.michael-aust.com/media/pages/home/d09fd96a96-1743182714/index-about-placeholder-2560x.webp" type="image/webp" />
                        <img
                            src="https://balance.michael-aust.com/media/pages/home/d09fd96a96-1743182714/index-about-placeholder-2560x.webp" 
                            alt="Flowers behind a plain background with a black and white overlay"/>
                    </picture>
                </div>
                <h1 className="font-inter-tight font-bold text-black text-[3.5rem] leading-[3rem]">
                    <span className="block pb-2"> <span className="pl-[24.72rem]">I help brands</span> craft meaningful</span>
                    <span className="block pb-2">stories and compelling visuals that deeply</span>
                    <span className="block pb-2">resonate with their audience, foster strong</span>
                    <span className="block pb-2">connections, build lasting loyalty, and drive</span>
                    <span className="block">sustainable long-term growth.</span>
                </h1>
            </div>
            <div className="w-full flex justify-end">
                <div className="max-w-[50%]">
                    <hr className="w-full text-gray-300 mb-6" />
                    <div className="w-full flex">
                        <div className="max-w-[50%] flex flex-col gap-3 px-[.94rem]">
                            <p className="font-bold text-black text-sm">From A to Z</p>
                            <p className="font-medium text-sm text-gray-400">
                                I manage your entire branding process, from
                                concept to execution. Whether it's logo design,
                                messaging, or strategy, I ensure everything
                                aligns for a cohesive and impactful brand.
                            </p>
                            <a href="/about" className="about-button" title="About | Suwayba">More about me</a>
                        </div>
                        <div className="max-w-[50%] flex flex-col gap-3 px-[.94rem] ">
                            <p className="font-bold text-black text-sm">Solo or Team</p>
                            <p className="font-medium text-sm text-gray-400">
                                I work both independently and with a trusted
                                team, adapting to your project’s needs to
                                deliver the best results, whether it's a solo
                                vision or a collaborative effort.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}