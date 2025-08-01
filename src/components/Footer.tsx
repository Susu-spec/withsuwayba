// import { SocialIcon } from "react-social-icons";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <footer className="h-screen relative bg-[#FCFCFC] flex flex-col justify-between">
            <div className="md:h-[80dvh] relative">
                <div className="flex flex-col-reverse md:flex-row justify-between py-3 px-6 md:px-0">
                    <div className="w-full">
                        <ul className="flex flex-col gap-0 text-start md:px-6 py-4">
                            <a href="#hero" className="nav-link nav-bottom-link">Home</a>
                            <a href="#about" className="nav-link nav-bottom-link">About</a>
                            <a href="#work" className="nav-link nav-bottom-link">
                                Work
                                <span className="superscript-bottom"></span>
                            </a>
                            <a href="#contact" className="nav-bottom-link">Contact</a>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-end w-full md:max-w-[20%] items-end md:px-[.94rem]">
                        <div className="flex md:flex-col w-full pt-8 md:pt-0">
                            {/* <div className="flex items-center gap-[.94rem] flex-wrap">
                                <div title="Visit on Instagram" className="social">
                                    <SocialIcon url="www.instagram.com" style={{ width: '1.75rem', height: '1.75rem'}}/>
                                </div>
                                <div title="Visit on Facebook" className="social">
                                      <SocialIcon url="www.facebook.com" bgColor="#000" style={{ width: '1.75rem', height: '1.75rem'}}/>
                                </div>
                                <div title="Visit on X" className="social">
                                      <SocialIcon url="www.x.com" bgColor="#000" style={{ width: '1.75rem', height: '1.75rem'}}/>
                                </div>
                                <div title="Visit on LinkedIn" className="social">
                                      <SocialIcon url="www.linkedin.com" bgColor="#000" style={{ width: '1.75rem', height: '1.75rem'}}/>
                                </div>
                                <div title="Visit on Youtube"  className="social">
                                      <SocialIcon url="www.youtube.com" bgColor="#000" style={{ width: '1.75rem', height: '1.75rem'}}/>
                                </div>
                            </div> */}
                            <div className="md:absolute md:bottom-4 flex flex-col gap-[.94rem]">
                                <p className="flex flex-col text-sm">
                                        <span className="text-gray-400">(Inquiries)</span>
                                        <a className="underline" href="mailto:suleimansuwaibat@gmail.com">suwayba@studio.com</a>
                                </p>
                                <p className="flex flex-col text-sm">
                                        <span className="text-gray-400">(Phone)</span>
                                        <span className="underline">+491234 56789</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>               
            </div>
            <div className="w-full px-4 absolute bottom-18">
                <hr className="w-full text-gray-400 mb-6" />
                <div className="mt-[1.5rem] flex justify-between">
                    <ul className="navi-bottom text-sm">
                        <a className="text-gray-400 font-medium" href="/" title="Imprint">Imprint</a>
                        <a className="text-gray-400 font-medium" href="/" title="Imprint">Privacy Policy</a>
                    </ul>
                    <button 
                        onClick={scrollToTop} 
                        className="text-sm text-gray-400 cursor-pointer"
                    >
                        &uarr;
                        Back to Top
                    </button>
                </div>
            </div>
            <div className="bg-black w-full text-center absolute bottom-0">
                <p className="text-white text-xs py-4">Inspiration - <a href="https://balance.michael-aust.com/">Michael Aust</a></p>
            </div>
        </footer>
    )
}