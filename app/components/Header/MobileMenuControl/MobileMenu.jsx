'use client';

import { Logo } from "@/app/ui/logo/Logo"
import { SkillSearch } from "@/app/ui/form/search/SkillSearch"
import { MailIcon } from "@/app/ui/icons/MailIcon"
import { PhoneIcon } from "@/app/ui/icons/PhoneIcon"
import { LocationIcon } from "@/app/ui/icons/LocationIcon"
import Image from "next/image"
import { NavitemExpandable } from "@/app/ui/nav/NavItemExpandable"
import { ProjectsMenu } from "@/app/components/Header/MobileMenuControl/ProjectsMenu"
import { CvMenu } from "@/app/components/Header/MobileMenuControl/CvMenu"
import { useControlledFetch } from "@/app/lib/customHooks/fetch/useControlledFetch";
import { SiteConfig } from "@/app/lib/SiteConfig";

export const MobileMenu = () => {
    
    const [fetchProjects, projects, isLoading, error] = useControlledFetch(SiteConfig.API_URL + '/api/projects');

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
                <NavitemExpandable
                    className="mobile-menu-nav-item expandable"
                    expandMenu={<ProjectsMenu projects={projects} fetchProjects={fetchProjects} />}
                >
                    Mes réalisations
                </NavitemExpandable>
                <NavitemExpandable
                    className="mobile-menu-nav-item expandable"
                    expandMenu={<CvMenu />}
                >
                    Mon CV
                </NavitemExpandable>
            </nav>
            <footer className="mobile-menu-footer">
                <div className="mobile-menu-footer-item i-text">
                    <Image 
                        className="profile-img" 
                        src="/profile/me.jpg" 
                        alt="Photo Ibai Arotçarena" 
                        width={60}
                        height={60}
                    />
                    <div className="mobile-menu-footer-item-body">
                        <div>Ibai Arotçarena</div>
                        <div>35 ans</div>
                    </div>
                </div>
                <div className="mobile-menu-footer-item i-text">
                    <MailIcon />
                    <a href="mailto:arotcarena.ib@gmail.com">arotcarena.ib@gmail.com</a>
                </div>
                <div className="mobile-menu-footer-item i-text">
                    <PhoneIcon />
                    <a href="tel:+33626717650">+33626717650</a>
                </div>
                <div className="mobile-menu-footer-item i-text">
                    <LocationIcon />
                    <a href="tel:+33626717650">13330 Pélissanne</a>
                </div>
                <div className="mobile-menu-footer-item i-text">
                    <Image
                        src="/icons/linkedin.png"
                        alt="Logo linkedin"
                        width={50}
                        height={50}
                    />
                    <a href="https://www.linkedin.com/in/ibai-arotçarena-247b35266" style={{fontSize: '.9em'}}>www.linkedin.com/in/ibai-arotçarena-247b35266</a>
                </div>
            </footer>
        </>
    )
}