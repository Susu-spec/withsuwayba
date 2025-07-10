import SuwaybaBg from "@/assets/suwayba-bg.png"

export default function HeroSection() {
    return (
         <section className="section">
            <p className="!text-[11.25rem] !font-inter-tight font-bold absolute bottom-0 z-5 leading-[8.125rem]">
              Suwayba
            </p>
            
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
        </section>
    )
}