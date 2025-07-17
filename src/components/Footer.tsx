export default function Footer() {
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
                <div className="flex flex-col justify-end w-full">
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
                        <p className="flex flex-col">
                                <span className="text-gray-400">(Inquiries)</span>
                                <span>suwayba@studio.com</span>
                        </p>
                        <p className="flex flex-col">
                                <span className="text-gray-400">(Phone)</span>
                                <span>+491234 56789</span>
                        </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full">
                <hr className="w-full text-gray-300 mb-6" />
                <div className="my-[1.98rem] flex justify-between">
                    <ul className="navi-bottom text-sm">
                        <a className="text-gray-300" href="/" title="Imprint">Imprint</a>
                        <a className="text-gray-300" href="/" title="Imprint">Privacy Policy</a>
                    </ul>
                </div>
            </div>
        </footer>
    )
}