import { useDelayAction } from "@/app/lib/customHooks/state/useDelayAction";
import { useOpenState } from "@/app/lib/customHooks/state/useOpenState"
import { ExpandMoreIcon } from "@/app/ui/icons/ExpandMoreIcon"
import { forwardRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const DeskNavItemExpandable = forwardRef(({children, expandMenu}, headerRef) => {

    const [isOpen, open, close] = useOpenState(false);
    const delayAction = useDelayAction(500);    


    const handleMouseOver = () => {
        delayAction(open);
    }
    const handleMouseLeave = () => {
        delayAction(close);
    }

    useEffect(() => {
        if(headerRef.current) {
            if(isOpen) {
                headerRef.current.classList.add('force-open');
            } else {
                headerRef.current.classList.remove('force-open');
            }
        }
    }, [isOpen]);

    return (
        <button className="desktop-menu-nav-item expandable" type="button" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <span>{children}</span>
            <ExpandMoreIcon additionalClass={isOpen ? ' expanded': ''} />
            {
                isOpen && createPortal(
                    (
                        <div className="desktop-expand-menu-wrapper">
                            {expandMenu}
                        </div>
                    ),
                    document.body
                )
            }
        </button>
    )
});