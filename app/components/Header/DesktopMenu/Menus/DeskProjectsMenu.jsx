import { SiteConfig } from "@/app/lib/SiteConfig";
import { getMonthAndYear } from "@/app/lib/helpers/dateToString";
import Link from "next/link";
import { useEffect } from "react";

export const DeskProjectsMenu = ({fetchProjects, projects, closeExpandMenu}) => {
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
        <div className="desk-expand-menu-project-list">
            {
                projects.map(project => (
                    <div key={project.id} className="expandable-menu-item mobile-menu-project-item">
                        <Link onClick={closeExpandMenu} href={'/mes-realisations/'+project.id}>
                            <img 
                                className="mobile-menu-project-img"
                                src={SiteConfig.API_URL + project.screenDesktopPath}
                                alt={'Capture d\'écran du site ' + project.title}
                            />
                        </Link>
                        <div className="mobile-menu-project-item-body">
                            <div className="mobile-menu-project-title">
                                <Link onClick={closeExpandMenu} href={'/mes-realisations/'+project.id}>
                                    {project.title}
                                </Link>
                            </div>
                            <div className="chip">
                                {getMonthAndYear(project.startedAt)} - {getMonthAndYear(project.endAt)}
                            </div>
                            <div>{project.shortDescription}</div>
                            <div className="mobile-menu-project-url">
                                <Link onClick={closeExpandMenu} className="base-link" href={'/mes-realisations/'+project.id}>
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