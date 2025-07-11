export default function ContactSection() {
    return (
        <section className="py-10 h-screen text-white contact relative flex flex-col justify-between">
            <picture className="absolute w-full h-full top-0 -z-20">
                <source media="(max-width: 480px)" srcSet="https://balance.michael-aust.com/media/site/6919a6ec65-1743182712/footer-placeholder-480x840-crop.webp" type="image/webp" />
                <source media="(max-width: 760px)" srcSet="https://balance.michael-aust.com/media/site/6919a6ec65-1743182712/footer-placeholder-760x.webp" type="image/webp" />
                <source media="(max-width: 1200px)" srcSet="https://balance.michael-aust.com/media/site/6919a6ec65-1743182712/footer-placeholder-1200x.webp" type="image/webp" />
                <source media="(max-width: 1920px)" srcSet="https://balance.michael-aust.com/media/site/6919a6ec65-1743182712/footer-placeholder-1920x.webp" type="image/webp" />
                <source media="(min-width: 1921px)" srcSet="https://balance.michael-aust.com/media/site/6919a6ec65-1743182712/footer-placeholder-2560x.webp" type="image/webp" />

                <img alt="Back to man's head who has dreadlocks in front of plain light wall." src="https://balance.michael-aust.com/media/site/6919a6ec65-1743182712/footer-placeholder-2560x.webp" />
            </picture>
            <div className="flex justify-between items-center w-full px-8">
                 <p>(Contact)</p>
                <h1 className="contact-head max-w-[50%]">
                    Global presence, global recognition — Contact me to take your next step.
                </h1>
            </div>
            <a href="mailto:suleimansuwaibat@gmail.com" className="contact-head main ml-8">Contact me</a>

        </section>
    );
}