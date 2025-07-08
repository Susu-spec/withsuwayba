import { motion, useScroll, useTransform } from "framer-motion";
import About from "./sections/about";
import Contact from "./sections/contact";
import Work from "./sections/work";
import SuwaybaBg from "@/assets/suwayba-bg.png"

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
        <section className="section">
            <p className="!text-[11.25rem] !font-inter-tight font-bold absolute bottom-0 z-5 leading-[8.125rem]">Suwayba</p>
            
            <div className="h-full grid grid-cols-2">
                <div className="w-full relative flex flex-col justify-end !pb-[14.25rem]">
                <div className="max-w-[50%] leading-[1.125rem]">
                    <p className="font-medium text-xs">
                        Frontend Engineer
                    </p>
                    <p className="text-gray-400 text-xs">
                        I build interactive user interfaces that 
                        connect users to the backend logic of applications. 
                        My work ensures that digital products are usable, 
                        responsive, and visually appealing across devices.
                    </p>
                </div>
                </div>
                
                <div className="w-full">
                    <img src={SuwaybaBg} alt=""/>
                </div>
            </div>
        </section>,
        <About />,
        <Work />,
        <Contact />
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
      

      {/* <div style={{ height: '400vh' }} /> */}
    </div>
        
    );
}