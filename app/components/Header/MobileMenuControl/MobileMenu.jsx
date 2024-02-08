import { Logo } from "@/app/ui/logo/Logo"
import { SkillSearch } from "@/app/ui/form/search/SkillSearch"

export const MobileMenu = () => {
    return (
        <>
            <header className="mobile-menu-header">
                <Logo />
            </header>
            <nav className="mobile-menu-nav">
                <div className="mobile-menu-nav-item">
                    <div style={{marginBottom: '5px'}}>Mes compétences</div>
                    <SkillSearch />
                </div>
                <button className="mobile-menu-nav-item" type="button">
                    Mes réalisations
                </button>
                <button className="mobile-menu-nav-item" type="button">
                    Mon CV
                </button>
                <div>
                    ajouter footer : arotcarena.ib@gmail.com, +33626717650, linkedin, 13330 pélissanne 
                </div>
            </nav>
        </>
    )
}