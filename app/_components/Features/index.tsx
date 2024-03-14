import { be_vietnam_pro } from "../../fonts";
import classes from "./index.module.css";

const Features = () => {
    return (
        <section id="features" className="bg-transparent">
            <div className="container mx-auto flex flex-col gap-4 px-4 mt-16 md:space-y-0 md:flex-row">
                <div className="flex flex-col md:w-1/2">
                    <h2 className={`${classes.feature_title} max-w-xs mx-auto text-3xl font-bold text-center md:text-left md:max-w-sm md:ml-0`}>What’s different about Manage?</h2>
                    <p className={`${classes.feature_text} max-w-sm text-center mt-4 md:text-left md:max-w-xs lg:text-sm`}>Manage provides all the functionality your team needs, without the complexity. 
                        Our software is tailor-made for modern digital product teams.</p>
                </div>
                <div className="flex flex-col mt-6 md:w-1/2">
                    <ul className={`${be_vietnam_pro.className} ${classes.numbered_items} space-y-8`}>
                        <li>
                            <div>
                                <h3>Track company-wide progress</h3>
                                <p className="mt-3">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone
                                level all the way
                                done to the smallest of details. Never lose sight of the bigger picture again.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>Advanced built-in reports</h3>
                                <p className="mt-3">Set internal delivery estimates and track progress toward company goals. Our customisable dashboard
                                helps you build out
                                the reports you need to keep key stakeholders informed.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>Everything you need in one place</h3>
                                <p className="mt-3">Stop jumping from one service to another to communicate, store files, track tasks and share
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