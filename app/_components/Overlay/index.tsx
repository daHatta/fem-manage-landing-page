"use client";

import { ReactElement } from "react";
import classes from "./index.module.css";

interface OverlayProps {
    isOpen?: boolean,
    onClose?: () => void,
    children?: ReactElement, 
};

const Overlay = ({ isOpen, onClose, children }: OverlayProps) => {
    return (
        <>
            {
                isOpen && (
                    <div className={`${classes.overlay}`} onClick={onClose}>
                        <div className="overlay_container">
                            { children }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Overlay