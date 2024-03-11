import LinkBtn from "../Buttons/Link";
import classes from "./index.module.css";

const CTA = () => {
    return (
        <section id="cta" className={classes.cta_bg}>
            <div className="container mx-auto flex flex-col items-center justify-between px-6 py-24 space-y-12 md:flex-row md:space-y-0">
                <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
                    Simplify how your team works today.
                </h2>
                <div>
                    <LinkBtn className="text-brightRed bg-white" />
                </div>
            </div>
        </section>
    )
};

export default CTA;