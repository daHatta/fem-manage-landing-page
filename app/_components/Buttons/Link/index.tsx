import Link from "next/link";
import classes from "./index.module.css";

interface Props {
    className?: string
}

const LinkBtn = ({className}: Props) => {
    return (
        <Link
            href={"/"}
            className={`p-3 px-6 rounded-full baseline ${className} ${classes.primary_btn}`}
        >
            Get Started
        </Link>
    )
};

export default LinkBtn;