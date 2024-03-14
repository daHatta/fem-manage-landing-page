import LinkBtn from "../Buttons/Link";
import Image from "next/image";
import illustrationIntro from "../../images/illustration-intro.svg";

import classes from "./index.module.css";

const Hero = () => {
    return (
        <section id="hero">
            <div className="container mx-auto flex flex-col-reverse gap-3 items-center px-6 mt-4 space-y-0 lg:flex-row lg:mt-10">
                <div className="flex flex-col mb-[5.75rem] lg:w-1/2">
                    <h1 className={`${classes.hero_title} max-width text-4xl font-bold text-center lg:max-w-[350px] lg:text-4xl lg:leading-none lg:text-left`}>
                        Bring everyone together to build better products.
                    </h1>
                    <p className={`${classes.hero_text} text-center mt-2 lg:mt-4 lg:text-left lg:max-w-[310px] lg:text-sm`}>
                    Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                    </p>
                    <div className="flex justify-center mt-8 lg:justify-start">
                        <LinkBtn className="text-white bg-brightRed" />
                    </div>
                </div>
                <div className="flex justify-center -mx-2 lg:w-1/2 lg:justify-end">
                    <Image 
                        src={illustrationIntro} 
                        alt="Illustration Intro"
                        blurDataURL="data:..."
                        placeholder="blur"
                    />
                </div>
            </div>
        </section>
    )
};

export default Hero;