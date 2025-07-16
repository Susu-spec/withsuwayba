import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import HeroSection from './sections/hero';
import AboutSection from './sections/about';
import { DungeonsAndDragons, R2D2, SpaceInvaders, Synesthesia } from './sections/work';
import ContactSection from './sections/contact';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


const sectionComponents = [
  <HeroSection key="hero" />,
  <AboutSection key="about" />,
  <SpaceInvaders key="project-one" />,
  <Synesthesia key="project-two" />,
  <R2D2 key="project-three" />,
  <DungeonsAndDragons key="project-four" />,
  <ContactSection key="contact" />
];

export default function HomePage() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      lenis.destroy();
      lenis.off('scroll', ScrollTrigger.update);
    };
  }, []);

  useGSAP(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const sections = sectionsRef.current.filter(Boolean) as HTMLElement[];
    
    if (sections.length === 0) return;

    sections.forEach((section, i) => {
      const isLast = i === sections.length - 1;
      

      ScrollTrigger.create({
        trigger: section,
        start: () => {
          const prev = sections[i - 1];
          return prev ? `bottom bottom` : "top top";
        },
        pin: !isLast,
        pinSpacing: false,
        anticipatePin: 1,
      });
    });


  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {sectionComponents.map((SectionComponent, i) => (
        <section
          key={i}
          ref={el => {
            sectionsRef.current[i] = el;
          }}
          className="min-h-screen cursor-default bg-[#FCFCFC] relative"
        >
          {SectionComponent}
        </section>
      ))} 
    </div>
  );
}