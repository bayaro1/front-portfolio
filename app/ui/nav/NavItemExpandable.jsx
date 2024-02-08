'use client';

import { useToggleBoolState } from "@/app/lib/customHooks/state/useToggleState";
import { ExpandMoreIcon } from "@/app/ui/icons/ExpandMoreIcon";

export const NavitemExpandable = ({children, expandMenu, className}) => {
    
    const [isOpen, toggle] = useToggleBoolState(false);
    
    return (
        <>
            <button className={className} type="button" onClick={toggle}>
                <span>{children}</span>
                <ExpandMoreIcon additionalClass={isOpen ? 'expanded': ''} />
            </button>
            {
                isOpen && expandMenu
            }
        </>
    )
}