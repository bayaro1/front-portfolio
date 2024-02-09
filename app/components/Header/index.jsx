import '@/app/components/Header/index.css';
import { Logo } from "@/app/ui/logo/Logo";
import { MobileMenuControl } from '@/app/components/Header/MobileMenuControl';

export const Header = () => {

    return (
        <>
            <header className="header header-static">
                <MobileMenuControl />
                <Logo />
            </header>
        </>
    )
}