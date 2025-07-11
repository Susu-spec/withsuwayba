import HeroSection from "./sections/hero";
import AboutSection from "./sections/about";
import WorkSection from "./sections/work";
import ContactSection from "./sections/contact";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);


  useGSAP(() => {
    const sections = sectionsRef.current;

    
    const setupVerticalScroll = () => {
      sections.forEach((section, index) => {
        const isLast = index === sections.length - 1;
      

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: 'bottom-=10% top',
              scrub: 3.5,
            }
          })
          .to(section, {
            ease: 'none',
            duration: 4,
            y: '-100%',
            startAt: { filter: 'brightness(100%)'},
            filter: isLast ? 'none' : 'brightness(50%)',
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
    <HeroSection key="hero" />,
    <AboutSection key="about" />,
    <WorkSection key="work" />,
    <ContactSection key="contact" />
  ];

  return (
    <div className="relative">
      {sectionComponents.map((SectionComponent, index) => (
        <div
          key={index}
          ref={addToRefs}
          className={`sticky top-0 bg-[#FCFCFC] `}
        >
          {SectionComponent}
        </div>
        ))}
    </div>
  );
}