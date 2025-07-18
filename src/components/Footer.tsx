export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <footer className="h-screen relative bg-[#FCFCFC] flex flex-col justify-between">
            <div className="flex justify-between">
                <div className="w-full">
                    <ul className="flex flex-col gap-0 text-start px-6 py-4 ">
                        <a href="/" className="nav-link !text-[5.3rem]">Home</a>
                        <a href="/about" className="nav-link !text-[5.3rem]">About</a>
                        <a href="/work" className="nav-link !text-[5.3rem]">
                            Work
                            <span className="superscript"></span>
                        </a>
                        <a href="/contact" className="nav-link !text-[5.3rem]">Contact</a>
                    </ul>
                </div>
                <div className="flex flex-col justify-end w-full max-w-[20%] items-end px-[.94rem]">
                    <div className="flex flex-col w-full">
                        <div className="flex items-center gap-[.94rem] flex-wrap">
                            <a href="https://instagram.com/" target="_blank" title="Visit on Instagram">
                                <span className="icon-instagram"></span>
                            </a>
                            <a href="https://facebook.com/" target="_blank" title="Visit on Facebook">
                                <span className="icon-facebook"></span>
                            </a>
                            <a href="https://x.com/" target="_blank" title="Visit on Twitter">
                                <span className="icon-x"></span>
                            </a>
                            <a href="https://linkedin.com/" target="_blank" title="Visit on LinkedIn">
                                <span className="icon-linkedin"></span>
                            </a>
                            <a href="https://youtube.com/" target="_blank" title="Visit on Youtube">
                                <span className="icon-youtube"></span>
                            </a>
                        </div>
                        <div className="flex flex-col gap-[.94rem]">
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
                <p className="text-white text-xs py-4">Design Credits - <a href="/">Michael Aust</a></p>
            </div>
        </footer>
    )
}