import Carousel from "../Carousel";
import LinkBtn from "../Buttons/Link";

import classes from "./index.module.css";

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="max-w-6xl mx-auto px-5 mt-[3rem] text-center flow-root lg:my-20 lg:max-w-full lg:mx-0 lg:px-0">
                <h2 className={`${classes.testimonial_title} text-3xl font-bold text-center`}>What they’ve said</h2>
                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    <Carousel />
                </div>
                <div className="flow-root my-16">
                    <LinkBtn className="text-white bg-brightRed" />
                </div>
            </div>
        </section>
    )
};

export default Testimonials;