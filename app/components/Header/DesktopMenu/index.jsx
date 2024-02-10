import { SkillSearch } from "@/app/ui/form/search/SkillSearch"
import { ProjectsMenu } from "../MobileMenuControl/ProjectsMenu"
import { CvMenu } from "../MobileMenuControl/CvMenu"
import { DeskNavItemExpandable } from "./DeskNavItemExpandable"
import './index.css';
import { forwardRef } from "react";

export const DesktopMenu = forwardRef(({fetchProjects, projects}, headerRef) => {

    return (
        <nav className="desktop-menu">
            <div className="desktop-menu-nav-item">
                <SkillSearch />
            </div>
            <DeskNavItemExpandable
                ref={headerRef}
                expandMenu={<ProjectsMenu fetchProjects={fetchProjects} projects={projects} />}
                >
                Mes réalisations
            </DeskNavItemExpandable>
            
            <DeskNavItemExpandable
                ref={headerRef}
                expandMenu={<CvMenu />}
            >
                Mon CV
            </DeskNavItemExpandable>
        </nav>
    )
});