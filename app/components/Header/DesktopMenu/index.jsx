import { SkillSearch } from "@/app/ui/form/search/SkillSearch"
import { CvMenu } from "../MobileMenuControl/CvMenu"
import { DeskNavItemExpandable } from "./DeskNavItemExpandable"
import './index.css';
import { forwardRef } from "react";
import { DeskProjectsMenu } from "./Menus/DeskProjectsMenu";

export const DesktopMenu = forwardRef(({fetchProjects, projects}, headerRef) => {

    return (
        <nav className="desktop-menu">
            <div className="desktop-menu-nav-item">
                <SkillSearch ref={headerRef} />
            </div>
            <DeskNavItemExpandable
                ref={headerRef}
                renderExpandMenu={
                    (close) => <DeskProjectsMenu fetchProjects={fetchProjects} projects={projects} closeExpandMenu={close} />
                }
                >
                Mes réalisations
            </DeskNavItemExpandable>
            <DeskNavItemExpandable
                ref={headerRef}
                renderExpandMenu={() => <CvMenu />}
            >
                Mon CV
            </DeskNavItemExpandable>
        </nav>
    )
});



DesktopMenu.displayName = 'CustomDesktopMenu';