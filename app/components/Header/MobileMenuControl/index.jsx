'use client';
import { useOpenState } from "@/app/lib/customHooks/state/useOpenState.jsx"
import { MenuButton } from "@/app/ui/buttons/MenuButton"
import { Modal } from "@/app/ui/container/Modal";
import '@/app/components/Header/MobileMenuControl/index.css';
import { MobileMenu } from "@/app/components/Header/MobileMenuControl/MobileMenu";

export const MobileMenuControl = ({}) => {

    const [isOpen, open, close] = useOpenState(false);

    return (
        <>
            <MenuButton additionalClass="menu-button" onClick={open} />
            <Modal
                additionalClass="mobile-menu"
                isOpen={isOpen}
                close={close}
            >
                <MobileMenu />
            </Modal>
        </>
    )
}