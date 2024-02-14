'use client';

import { Logo } from "@/app/ui/logo/Logo"
import { SkillSearch } from "@/app/ui/form/search/SkillSearch"
import { NavitemExpandable } from "@/app/ui/nav/NavItemExpandable"
import { ProjectsMenu } from "@/app/components/Header/MobileMenuControl/ProjectsMenu"
import { CvMenu } from "@/app/components/Header/MobileMenuControl/CvMenu"
import { ProfileFooter } from "@/app/components/Footer/ProfileFooter";
import { useRef } from "react";

export const MobileMenu = ({fetchProjects, projects, close}) => {
    
    //inutile : seulement pour passer une ref à skillSearch (skillSearch utilise la ref pour le desktop menu et pas pour le mobile menu) 
    const ref = useRef(null);

    return (
        <>
            <header className="mobile-menu-header">
                <Logo onClick={close} />
            </header>
            <nav className="mobile-menu-nav">
                <div className="mobile-menu-nav-item">
                    <div style={{marginBottom: '5px'}}>Mes compétences</div>
                    <SkillSearch ref={ref} />
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
            <ProfileFooter />
        </>
    )
}