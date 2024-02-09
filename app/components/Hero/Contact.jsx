'use client';

import { useOpenState } from "@/app/lib/customHooks/state/useOpenState";
import { Button } from "@/app/ui/buttons/Button";

export const Contact = () => {

    const [isOpen, open, close] = useOpenState(false);

    if(isOpen) {
        return (
            <div className="contact-button-open">
                <div className="contact-button-open-line">
                    <a href="mailto:arotcarena.ib@gmail.com">arotcarena.ib@gmail.com</a>
                </div>
                <div className="contact-button-open-line">
                    <a href="tel:+33626717650">+33626717650</a>
                </div>
            </div>
        )
    }

    return (
        <Button additionalClass={'secondary' + (isOpen ? ' column': '')} onClick={open}>
            Me contacter
        </Button>
    )
}