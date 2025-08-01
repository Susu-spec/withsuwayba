import contactBg from "@/assets/contact-bg04.png";

export default function ContactSection() {
    return (
        <div
            className="z-4 py-10 h-screen text-white contact relative flex flex-col justify-between overflow-hidden cursor-default"
        >
            <figure className="absolute w-full h-full top-0 -z-20">
                <img 
                    alt="Top half of woman's head with dark hair in front of plain background." 
                    src={contactBg} className="w-full h-full"/>
                <div className="z-20 absolute bottom-2 right-2 text-[10px] tracking-wider text-zinc-900">
                    kamilla / valerie · via  
                    <a href="https://www.instagram.com/p/Cyl19ibLwMC/?img_index=5" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline"
                    >
                         valerie
                    </a>
                </div>
            </figure>
            <div className="flex justify-between items-start w-full px-2 md:px-8 relative">
                 <p className="hidden md:block">(Contact)</p>
                <h1 className="contact-head w-full absolute right-4 md:static text-2xl md:text-inherit">
                    <span className="block">
                    <span className="pl-28 md:pl-[10rem]">Global presence,</span> global </span> 
                    <span className="block">recognition — Contact me to take </span>
                    <span className="block">your next step.</span>
                </h1>
            </div>
            <a 
                href="mailto:suleimansuwaibat@gmail.com" 
                className="contact-main ml-4 md:ml-8"
            >Contact me</a>
        </div>
    );
}