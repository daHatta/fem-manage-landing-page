import Image from "next/image";
import avatarAnisha from "../../images/avatar-anisha.png";
import avatarAli from "../../images/avatar-ali.png";
import avatarRichard from "../../images/avatar-richard.png";
import avatarShanai from "../../images/avatar-shanai.png";
import LinkBtn from "../Buttons/Link";

import classes from "./index.module.css";

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="max-w-6xl mx-auto px-5 mt-[3rem] text-center flow-root lg:my-20">
                <h2 className={`${classes.testimonial_title} text-3xl font-bold text-center`}>What they’ve said</h2>
                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    <div className={`${classes.testimonial_bg} flex flex-col items-center p-6 space-y-6 rounded-lg md:w-1/3`}>
                        <Image
                            src={avatarAnisha}
                            alt="Anisha Li"
                            className="w-16 -mt-14"
                            blurDataURL="data:..."
                            placeholder="blur"
                        />
                        <h3 className="text-lg font-bold">Anisha Li</h3>
                        <blockquote className={`${classes.testimonial_text} text-sm`}>
                            “Manage has supercharged our team’s workflow. The ability to maintain 
                            visibility on larger milestones at all times keeps everyone motivated.”
                        </blockquote>
                    </div>
                    <div className={`hidden ${classes.testimonial_bg} flex-col items-center p-6 space-y-6 rounded-lg md:flex md:w-1/3`}>
                        <Image
                            src={avatarAli}
                            alt="Ali Bravo"
                            className="w-16 -mt-14"
                            blurDataURL="data:..."
                            placeholder="blur"
                        />
                        <h3 className="text-lg font-bold">Ali Bravo</h3>
                        <blockquote className={`${classes.testimonial_text} text-sm`}>
                            “We have been able to cancel so many other subscriptions since using 
                            Manage. There is no more cross-channel confusion and everyone is much 
                            more focused.”
                        </blockquote>
                    </div>
                    <div className={`hidden ${classes.testimonial_bg} flex-col items-center p-6 space-y-6 rounded-lg md:flex md:w-1/3`}>
                        <Image
                            src={avatarRichard}
                            alt="Richard Watts"
                            className="w-16 -mt-14"
                            blurDataURL="data:..."
                            placeholder="blur"
                        />
                        <h3 className="text-lg font-bold">Richard Watts</h3>
                        <blockquote className={`${classes.testimonial_text} text-sm`}>
                            “Manage allows us to provide structure and process. It keeps us organized 
                            and focused. I can’t stop recommending them to everyone I talk to!”
                        </blockquote>
                    </div>
                </div>
                <div className="flow-root my-16">
                    <LinkBtn className="text-white bg-brightRed" />
                </div>
            </div>
        </section>
    )
};

export default Testimonials;