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
        const nextSection = sections[index + 1];
        if (!nextSection || index === 0) return;
        
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;
        const extraScroll = Math.max(0, sectionHeight - viewportHeight);
        
        if (extraScroll > 0) {
          ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: () => `+=${extraScroll}`,
            pin: true,
            pinSpacing: false,
            id: `pin-${index}`,
          });
        }
        
        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: extraScroll > 0 ? () => `+=${extraScroll}` : 'top top',
              end: () => `+=${viewportHeight}`,
              scrub: 1.5,
              id: `overlay-${index}`,
            }
          })
          .fromTo(nextSection, {
            y: '100%',
          }, {
            y: '0%',
            ease: 'none',
            duration: 3,
          });
      });
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
          className={`sticky top-0 bg-[#FCFCFC] cursor-default min-h-screen`}
          style={{ zIndex: index + 1 }}
        >
          {SectionComponent}
        </div>
      ))}
    </div>
  );
}