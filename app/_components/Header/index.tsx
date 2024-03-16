"use client";

import { useState } from "react";
import LinkBtn from "../Buttons/Link";
import Logo from "../Logo";
import Navigation from "./Navigation";
import Overlay from "../Overlay";
import Image from "next/image";
import iconHamburger from "../../images/icon-hamburger.svg";
import iconClose from "../../images/icon-close.svg";

import classes from "./index.module.css";


const Header = () => {

    const [ overlay, setOverlay ] = useState(false);

    return (
        <header className="container mx-auto px-6 pt-8 pb-4 lg:py-10">
            <div className="flex items-center justify-between">
                <Logo fill="var(--darkBlue)"/>
                <Navigation className="hidden lg:flex" />
                <div className="hidden lg:block">
                    <LinkBtn className="text-white bg-brightRed" />
                </div>
                <button id="menu-btn" onClick={() => setOverlay(!overlay)} className={`${classes.mobile_btn} block cursor-pointer lg:hidden focus:outline-none`}>
                    <span className="visually-hidden">Menu</span>
                    {
                        !overlay ? (
                            <Image
                                src={iconHamburger}
                                alt="Mobile Menu Button"
                            />
                        ) : (
                            <Image
                                src={iconClose}
                                alt="Mobile Close Button"
                            />
                        )
                    }
                </button>
                <Overlay isOpen={overlay} onClose={() => setOverlay(!overlay)}>
                    <Navigation className="mobile_menu" />
                </Overlay>
            </div>
        </header>
    )
};

export default Header;