import { useDelayAction } from "@/app/lib/customHooks/state/useDelayAction";
import { useOpenState } from "@/app/lib/customHooks/state/useOpenState"
import { ExpandMoreIcon } from "@/app/ui/icons/ExpandMoreIcon"
import { forwardRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const DeskNavItemExpandable = forwardRef(({children, renderExpandMenu}, headerRef) => {

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
                headerRef.current.classList.add('force-open', 'force-light-bg');
            } else {
                headerRef.current.classList.remove('force-open', 'force-light-bg');
            }
        }
    }, [isOpen]);

    return (
        <button className={'desktop-menu-nav-item expandable' + (isOpen ? ' active': '')} type="button" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <span>{children}</span>
            <ExpandMoreIcon additionalClass={isOpen ? ' expanded': ''} />
            {
                isOpen && createPortal(
                    (
                        <div className="desktop-expand-menu-wrapper">
                            {renderExpandMenu(close)}
                        </div>
                    ),
                    document.body
                )
            }
        </button>
    )
});