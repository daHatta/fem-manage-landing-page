import LinkBtn from "../Buttons/Link";
import Logo from "../Logo";
import Navigation from "./Navigation";
import Image from "next/image";
import iconHamburger from "../../images/icon-hamburger.svg"; 

const Header = () => {
    return (
        <header className="container mx-auto px-6 pt-8 pb-4 lg:py-10">
            <div className="flex items-center justify-between">
                <Logo fill="var(--darkBlue)"/>
                <Navigation />
                <div className="hidden lg:block">
                    <LinkBtn className="text-white bg-brightRed" />
                </div>
                <button id="menu-btn" className="block hamburger lg:hidden focus:outline-none">
                    <span className="visually-hidden">Menu</span>
                    <Image
                        src={iconHamburger}
                        alt="Mobile Menu"
                    />
                </button>
            </div>
        </header>
    )
};

export default Header;