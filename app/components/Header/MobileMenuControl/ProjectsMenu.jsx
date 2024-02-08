'use client';

import { SiteConfig } from "@/app/lib/SiteConfig";
import { getMonthAndYear } from "@/app/lib/helpers/dateToString";
import { Loader } from "@/app/ui/icons/Loader";
import { useEffect } from "react";

export const ProjectsMenu = ({projects, fetchProjects}) => {

    useEffect(() => {
        if(!projects) {
            fetchProjects();
        }
    }, []);

    /*skeleton*/
    if(!projects) {
        return (
            <div className="skeletons-wrapper">
            {
                ['1', '2', '3'].map(key => (
                    <div key={key} className="expandable-menu-item mobile-menu-project-item">
                        <div 
                            className="skeleton-block"
                            style={{height: '120px', width: '80px', borderRadius: '10px', flex: 'none'}}
                        />
                        <div className="skeleton-block" style={{height:'120px', flex: '1 0', marginLeft: '5px'}}>
                            <div className="skeleton-line"></div>
                            <div className="skeleton-line"></div>
                            <div className="skeleton-line"></div>
                            <div className="skeleton-line"></div>
                        </div>
                    </div>
                ))
            }
        </div>
        )
    }

    return (
        <div>
            {
                projects.map(project => (
                    <div key={project.id} className="expandable-menu-item mobile-menu-project-item">
                        <img 
                            className="mobile-menu-project-img"
                            src={SiteConfig.API_URL + project.screenMobilePath}
                            alt={'Capture d\'écran du site ' + project.title}
                        />
                        <div className="mobile-menu-project-item-body">
                            <div className="mobile-menu-project-title">{project.title}</div>
                            <div className="chip">
                                {getMonthAndYear(project.startedAt)} - {getMonthAndYear(project.endAt)}
                            </div>
                            <div>{project.shortDescription}</div>
                            <div className="mobile-menu-project-url">
                                <a target="_blank" href={project.url}>{project.url}</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}