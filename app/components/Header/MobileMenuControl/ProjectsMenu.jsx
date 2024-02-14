'use client';

import { getMonthAndYear } from "@/app/lib/helpers/dateToString";
import Link from "next/link";
import { useEffect } from "react";

export const ProjectsMenu = ({projects, fetchProjects, closeMobileMenu}) => {

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
                        <Link onClick={closeMobileMenu} href={'/mes-realisations/'+project.id}>
                            <div 
                                className="mobile-menu-project-img"
                                style={{background: 'url('+project.screenMobilePath+') center center / cover no-repeat'}}
                            >
                            </div>
                        </Link>
                        <div className="mobile-menu-project-item-body">
                            <div className="mobile-menu-project-title">
                                <Link onClick={closeMobileMenu} href={'/mes-realisations/'+project.id}>
                                    {project.title}
                                </Link>
                            </div>
                            <div className="chip">
                                {getMonthAndYear(project.startedAt)} - {getMonthAndYear(project.endAt)}
                            </div>
                            <div>{project.shortDescription}</div>
                            <div className="mobile-menu-project-url">
                                <Link onClick={closeMobileMenu} className="see-more-button" href={'/mes-realisations/'+project.id}>
                                    Voir plus
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}