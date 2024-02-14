import { useTouchingListener } from "@/app/lib/customHooks/listener/useTouchingListener";
import { getMonthAndYear } from "@/app/lib/helpers/dateToString";
import Link from "next/link";
import { useEffect } from "react";

export const DeskProjectsMenu = ({fetchProjects, projects, closeExpandMenu}) => {

    const isTouching = useTouchingListener();

    useEffect(() => {
        if(!projects) {
            fetchProjects();
        }
    }, []);

    /*skeleton*/
    if(!projects) {
        return (
            <div style={{height: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                {
                    ['1', '2', '3'].map(key => (
                        <div key={key}>
                            <div className="skeleton-block" style={{height: '200px', width: '200px'}}></div>
                            <div style={{marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
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
        <div className="desk-expand-menu-project-list-wrapper">
            <div className="desk-expand-menu-project-list">
                {
                    projects.map(project => (
                        <div key={project.id} className="expandable-menu-item mobile-menu-project-item card-absolute-button-target">
                            <Link onClick={closeExpandMenu} href={'/mes-realisations/'+project.id} className="card-absolute-button-wrapper">
                                <img 
                                    className="mobile-menu-project-img"
                                    src={project.screenDesktopPath}
                                    alt={'Capture d\'écran du site ' + project.title}
                                />
                                {
                                    !isTouching && (
                                        <div className="card-absolute-button-bg">
                                            <button className="card-absolute-button button-large">
                                                Voir plus
                                            </button>
                                        </div>
                                    )
                                }
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
                                {
                                    isTouching && (
                                        <div className="mobile-menu-project-url">
                                            <Link onClick={closeExpandMenu} className="see-more-button" href={'/mes-realisations/'+project.id}>
                                                Voir plus
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
} 