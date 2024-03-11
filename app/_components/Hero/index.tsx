import LinkBtn from "../Buttons/Link";
import Image from "next/image";
import illustrationIntro from "../../images/illustration-intro.svg";

import classes from "./index.module.css";

const Hero = () => {
    return (
        <section id="hero">
            <div className="container mx-auto flex flex-col-reverse gap-4 lg:flex-row items-center px-6 mt-10 space-y-0">
                <div className="flex flex-col mb-32 space-y-12 lg:w-1/2">
                    <h1 className="max-width text-4xl font-bold text-center lg:text-5xl lg:text-left">
                        Bring everyone together to build better products.
                    </h1>
                    <p className={`${classes.hero_text} text-center lg:text-left`}>
                    Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <LinkBtn className="text-white bg-brightRed" />
                    </div>
                </div>
                <div className="flex justify-center lg:w-1/2 lg:justify-end">
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