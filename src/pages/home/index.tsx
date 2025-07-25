import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import HeroSection, { HeroImage, HeroText } from './sections/hero';
import AboutSection from './sections/about';
import { DungeonsAndDragons, R2D2, SpaceInvaders, Synesthesia } from './sections/work';
import ContactSection from './sections/contact';
import { useGSAP } from '@gsap/react';
import Layout from '@/components/Layout';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);


const desktopComponents = [
  <HeroSection key="hero" />,
  <AboutSection key="about" />,
  <Synesthesia key="project-one" />,
  <R2D2 key="project-two" />,
  <SpaceInvaders key="project-three" />,
  <DungeonsAndDragons key="project-four" />,
  <ContactSection key="contact" />
];

const mobileComponents = [
  <HeroText key="hero-text"/>,
  <HeroImage key="hero-image"/>,
  <AboutSection key="about" />,
  <Synesthesia key="project-one" />,
  <R2D2 key="project-two" />,
  <SpaceInvaders key="project-three" />,
  <DungeonsAndDragons key="project-four" />,
  <ContactSection key="contact" />
]


export default function HomePage() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const isMobile = useMediaQuery({query: '(max-width: 767px)'});


  const sectionComponents = isMobile ? mobileComponents : desktopComponents;


  // Lenis smooth scroll
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

  // Gsap scroll
  useGSAP(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const sections = sectionsRef.current.filter(Boolean) as HTMLElement[];
    
    if (sections.length === 0) return;
    

    sections.forEach((section, i) => {

      ScrollTrigger.create({
        trigger: section,
        start: () => {
          const prev = sections[i - 1];
          return prev ? `bottom bottom` : "top top";
        },
        pin: true,
        markers: false,
        pinSpacing: false,
        anticipatePin: 1,
      });
    });


  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Layout ref={containerRef}>
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
    </Layout>  
  );
}