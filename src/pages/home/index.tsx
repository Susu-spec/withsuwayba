import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "./sections/hero";
import AboutSection from "./sections/about";
import WorkSection from "./sections/work";
import ContactSection from "./sections/contact";

const CompressSection = ({ children, index, totalSections }: any) => {
  const { scrollYProgress } = useScroll();
  
  const start = index / totalSections;
  const end = (index + 1) / totalSections;
  
  const height = useTransform(
    scrollYProgress,
    [start, end],
    ['100vh', '0']
  );
  
  const y = useTransform(
    scrollYProgress,
    [start, end],
    [0, -50]
  );
  
  return (
    <motion.div
      style={{ 
        height,
        y,
        position: 'sticky',
        top: 0,
        zIndex: totalSections - index,
        overflow: 'hidden'
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};




export default function HomePage() {
    const sections = [
        <HeroSection />,
        <AboutSection />,
        <WorkSection />,
        <ContactSection />
    ]
    return (
         <div className="relative">
            {sections.map((section, index) => (
                <CompressSection 
                    key={index} 
                    index={index} 
                    totalSections={sections.length}
                    >
                    {section}
                </CompressSection>
            ))}
      

      <div style={{ height: '400vh' }} />
    </div>
        
    );
}