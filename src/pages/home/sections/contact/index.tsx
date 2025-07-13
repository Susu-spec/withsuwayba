import contactBg from "@/assets/contact-bg04.png";

export default function ContactSection() {
    return (
        <section className=" py-10 h-screen text-white contact relative flex flex-col justify-between overflow-hidden cursor-default">
            <picture className="absolute w-full h-full top-0 -z-20">
                <img 
                    alt="Top half of woman's head who has dark hair in front of plain background." 
                    src={contactBg} className="w-full"/>
            </picture>
            <div className="flex justify-between items-center w-full px-8">
                 <p>(Contact)</p>
                <h1 className="contact-head max-w-[50%]">
                    <span className="block">
                    <span className="pl-[10rem]">Global presence,</span> global</span> 
                    <span className="block">recognition — Contact me to take </span>
                    <span className="block">your next step.</span>
                </h1>
            </div>
            <a href="mailto:suleimansuwaibat@gmail.com" className="contact-head main ml-8">Contact me</a>

        </section>
    );
}