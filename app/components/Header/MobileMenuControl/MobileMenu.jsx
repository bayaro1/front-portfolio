'use client';

import { Logo } from "@/app/ui/logo/Logo"
import { SkillSearch } from "@/app/ui/form/search/SkillSearch"
import { NavitemExpandable } from "@/app/ui/nav/NavItemExpandable"
import { ProjectsMenu } from "@/app/components/Header/MobileMenuControl/ProjectsMenu"
import { CvMenu } from "@/app/components/Header/MobileMenuControl/CvMenu"
import { useControlledFetch } from "@/app/lib/customHooks/fetch/useControlledFetch";
import { SiteConfig } from "@/app/lib/SiteConfig";
import { Footer } from "@/app/components/Footer";

export const MobileMenu = ({close}) => {
    
    const [fetchProjects, projects, isLoading, error] = useControlledFetch(SiteConfig.API_URL + '/api/projects');

    return (
        <>
            <header className="mobile-menu-header">
                <Logo onClick={close} />
            </header>
            <nav className="mobile-menu-nav">
                <div className="mobile-menu-nav-item">
                    <div style={{marginBottom: '5px'}}>Mes compétences</div>
                    <SkillSearch />
                </div>
                <NavitemExpandable
                    className="mobile-menu-nav-item expandable"
                    expandMenu={<ProjectsMenu closeMobileMenu={close} projects={projects} fetchProjects={fetchProjects} />}
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
            <Footer additionalClass="mobile-menu-footer" />
        </>
    )
}