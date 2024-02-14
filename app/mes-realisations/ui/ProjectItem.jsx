'use client';

import { useTouchingListener } from "@/app/lib/customHooks/listener/useTouchingListener";
import { getMonthAndYear } from "@/app/lib/helpers/dateToString";
import Link from "next/link";


export const ProjectItem = ({project}) => {

    const isTouching = useTouchingListener();

    return (
        <div className="project-item card-absolute-button-target">
            <Link href={'/mes-realisations/'+project.id} className="card-absolute-button-wrapper">
                <img
                    className="project-item-img"
                    src={project.screenDesktopPath}
                    alt={'Capture d\'écran de ' + project.title}
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
            <div className="project-item-body">
                <div className="project-item-header">
                    <h2 className="project-item-title">
                        <Link href={'/mes-realisations/'+project.id}>
                            {project.title}
                        </Link>
                    </h2>
                    <div className="chip project-item-date-chip">
                        {getMonthAndYear(project.startedAt)} - {getMonthAndYear(project.endAt)}
                    </div>
                </div>
                <p className="project-item-text">
                    {project.shortDescription}
                </p>
                {
                    isTouching && (
                        <div className="link-wrapper">
                            <a className="see-more-button" href={'/mes-realisations/'+project.id}>Voir plus</a>
                        </div>
                    )
                }
            </div>
        </div>
    );
}