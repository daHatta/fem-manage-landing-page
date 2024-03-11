import Link from "next/link";
import classes from "./index.module.css";

const Navigation = () => {
    return (
        <nav className="hidden lg:flex">
            <ul className="flex space-x-6">
                <li><Link className={classes.nav_link} href={"/"}>Pricing</Link></li>
                <li><Link className={classes.nav_link} href={"/"}>Product</Link></li>
                <li><Link className={classes.nav_link} href={"/"}>About Us</Link></li>
                <li><Link className={classes.nav_link} href={"/"}>Careers</Link></li>
                <li><Link className={classes.nav_link} href={"/"}>Community</Link></li>
            </ul>
        </nav>
    )
};

export default Navigation;