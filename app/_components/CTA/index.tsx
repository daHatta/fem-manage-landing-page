import LinkBtn from "../Buttons/Link";
import classes from "./index.module.css";

const CTA = () => {
    return (
        <section id="cta" className={classes.cta_bg}>
            <div className="container mx-auto flex flex-col items-center justify-between px-6 py-20 md:flex-row md:space-y-0 lg:py-10 xl:px-48">
                <h2 className="text-4xl max-w-xs font-bold leading-tight text-center text-white md:max-w-lg md:text-left">
                    Simplify how your team works today.
                </h2>
                <div className="mt-8">
                    <LinkBtn className="text-brightRed bg-white" />
                </div>
            </div>
        </section>
    )
};

export default CTA;