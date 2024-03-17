import Link from "next/link";
import { naviLinks } from "@/app/constants";
import classes from "./index.module.css";

interface naviProps {
    className: string
}

const Navigation = ({ className }: naviProps) => {
    return (
        <nav className={className}>
            <ul className="nav_list flex text-sm space-x-6">
                {
                    naviLinks.map((link) => (
                        <li key={link.id} className="nav_item"><Link className="nav_link" href={link.url}>{link.title}</Link></li>
                    ))
                }
            </ul>
        </nav>
    )
};

export default Navigation;