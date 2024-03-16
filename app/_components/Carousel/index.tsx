"use client";

import Image from "next/image";
import avatarAnisha from "../../images/avatar-anisha.png";
import avatarAli from "../../images/avatar-ali.png";
import avatarRichard from "../../images/avatar-richard.png";
import avatarShanai from "../../images/avatar-shanai.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import classes from "./index.module.css";

const Carousel = () => {

    return (
        <Swiper
            breakpoints={{
                480: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                960: {
                    slidesPerView: 3,
                },
            }}
            spaceBetween={30}
            pagination={ {clickable: true} }
            modules={[Pagination]}
            className="w-full"
        >
            <SwiperSlide className="mt-10 cursor-pointer">
                <div className={`${classes.swiper_bg} flex flex-col items-center p-6 space-y-6 rounded-lg md:flex md:w-full`}>
                    <Image
                        src={avatarAnisha}
                        alt="Anisha Li"
                        className="w-16 -mt-14 mx-auto"
                        blurDataURL="data:..."
                        placeholder="blur"
                    />
                    <h3 className="text-lg font-bold">Anisha Li</h3>
                    <blockquote className={`${classes.swiper_text} text-sm`}>
                        “Manage has supercharged our team’s workflow. The ability to maintain 
                        visibility on larger milestones at all times keeps everyone motivated.”
                    </blockquote>
                </div>
            </SwiperSlide>
            <SwiperSlide className="mt-10 cursor-pointer">
                <div className={`${classes.swiper_bg} flex-col items-center p-6 space-y-6 rounded-lg md:flex md:w-full`}>
                    <Image
                        src={avatarAli}
                        alt="Ali Bravo"
                        className="w-16 -mt-14 mx-auto"
                        blurDataURL="data:..."
                        placeholder="blur"
                    />
                    <h3 className="text-lg font-bold">Ali Bravo</h3>
                    <blockquote className={`${classes.swiper_text} text-sm`}>
                        “We have been able to cancel so many other subscriptions since using 
                        Manage. There is no more cross-channel confusion and everyone is much 
                        more focused.”
                    </blockquote>
                </div>
            </SwiperSlide>
            <SwiperSlide className="mt-10 cursor-pointer">
                    <div className={`${classes.swiper_bg} flex-col items-center p-6 space-y-6 rounded-lg md:flex md:w-full`}>
                        <Image
                            src={avatarRichard}
                            alt="Richard Watts"
                            className="w-16 -mt-14 mx-auto"
                            blurDataURL="data:..."
                            placeholder="blur"
                        />
                        <h3 className="text-lg font-bold">Richard Watts</h3>
                        <blockquote className={`${classes.swiper_text} text-sm`}>
                            “Manage allows us to provide structure and process. It keeps us organized 
                            and focused. I can’t stop recommending them to everyone I talk to!”
                        </blockquote>
                    </div>
            </SwiperSlide>
            <SwiperSlide className="mt-10 cursor-pointer">
                    <div className={`${classes.swiper_bg} flex-col items-center p-6 space-y-6 rounded-lg md:flex md:w-full`}>
                        <Image
                            src={avatarShanai}
                            alt="Shanai Gough"
                            className="w-16 -mt-14 mx-auto"
                            blurDataURL="data:..."
                            placeholder="blur"
                        />
                        <h3 className="text-lg font-bold">Shanai Gough</h3>
                        <blockquote className={`${classes.swiper_text} text-sm`}>
                            “Their software allows us to track, manage and collaborate on our projects from
                            anyware. It keeps the whole team insync without being intrusive.”
                        </blockquote>
                    </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Carousel;

