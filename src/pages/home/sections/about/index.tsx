export default function AboutSection() {
    return (
        <section className="flex flex-col py-20 min-h-screen">
            <div className="max-w-[20%] basis-[25%] ml-5">
                
                 <picture>
                    <source media="(max-width: 480px)" srcSet="https://balance.michael-aust.com/media/pages/home/d09fd96a96-1743182714/index-about-placeholder-480x.webp" type="image/webp" />
                    <source media="(max-width: 760px)" srcSet="https://balance.michael-aust.com/media/pages/home/d09fd96a96-1743182714/index-about-placeholder-760x.webp" type="image/webp" />
                    <source media="(max-width: 1200px)" srcSet="https://balance.michael-aust.com/media/pages/home/d09fd96a96-1743182714/index-about-placeholder-1200x.webp" type="image/webp" />
                    <source media="(max-width: 1920px)" srcSet="https://balance.michael-aust.com/media/pages/home/d09fd96a96-1743182714/index-about-placeholder-1920x.webp" type="image/webp" />
                    <source media="(min-width: 1921px)" srcSet="https://balance.michael-aust.com/media/pages/home/d09fd96a96-1743182714/index-about-placeholder-2560x.webp" type="image/webp" />
                    <img src="https://balance.michael-aust.com/media/pages/home/d09fd96a96-1743182714/index-about-placeholder-2560x.webp" />
                </picture>
            </div>
            <h1 className="font-inter-tight font-bold text-black text-[3.5rem]">
                I help brands craft meaningful
                stories and compelling visuals that deeply
                resonate with their audience, foster strong
                connections, build lasting loyalty, and drive
                sustainable long-term growth.
            </h1>
        </section>
    );
}