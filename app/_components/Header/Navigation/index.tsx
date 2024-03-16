import Link from "next/link";
import classes from "./index.module.css";

interface naviProps {
    className: string
}

const Navigation = ({ className }: naviProps) => {
    return (
        <nav className={className}>
            <ul className="nav_list flex text-sm space-x-6">
                <li className="nav_item"><Link className="nav_link" href={"/"}>Pricing</Link></li>
                <li className="nav_item"><Link className="nav_link" href={"/"}>Product</Link></li>
                <li className="nav_item"><Link className="nav_link" href={"/"}>About Us</Link></li>
                <li className="nav_item"><Link className="nav_link" href={"/"}>Careers</Link></li>
                <li className="nav_item"><Link className="nav_link" href={"/"}>Community</Link></li>
            </ul>
        </nav>
    )
};

export default Navigation;