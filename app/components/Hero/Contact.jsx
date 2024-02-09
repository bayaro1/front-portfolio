'use client';

import { useOpenState } from "@/app/lib/customHooks/state/useOpenState";
import { Button } from "@/app/ui/buttons/Button";

export const Contact = () => {

    const [isOpen, open, close] = useOpenState(false);

    return (
        <Button additionalClass="secondary" onClick={open}>
            {
                isOpen ? (
                    <>
                        <div className="contact-button-line">
                            <a href="mailto:arotcarena.ib@gmail.com">arotcarena.ib@gmail.com</a>
                        </div>
                        <div className="contact-button-line">
                            <a href="tel:+33626717650">+33626717650</a>
                        </div>
                    </>
                ): (
                    'Me contacter'
                )
            }
        </Button>
    )
}