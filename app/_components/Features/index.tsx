import classes from "./index.module.css";

const Features = () => {
    return (
        <section id="features" className="bg-transparent">
            <div className="container mx-auto flex flex-col gap-4 px-4 mt-10 space-y-12 md:space-y-0 md:flex-row">
                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-left">What’s different about Manage?</h2>
                    <p className={`${classes.feature_text} max-w-sm text-center md:text-left`}>Manage provides all the functionality your team needs, without the complexity. 
                        Our software is tailor-made for modern digital product teams.</p>
                </div>
                <div className="flex flex-col space-y-8 md:w-1/2">
                    <ul className={classes.numbered_items}>
                        <li>
                            <div>
                                <h3 className="text-base font-bold">Track company-wide progress</h3>
                                <p className="text-darkGrayishBlue">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone
                                level all the way
                                done to the smallest of details. Never lose sight of the bigger picture again.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>Advanced built-in reports</h3>
                                <p>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard
                                helps you build out
                                the reports you need to keep key stakeholders informed.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>Everything you need in one place</h3>
                                <p>Stop jumping from one service to another to communicate, store files, track tasks and share
                                documents. Manage offers an
                                all-in-one team productivity solution.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Features;