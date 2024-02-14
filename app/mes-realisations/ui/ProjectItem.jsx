'use client';

import { getMonthAndYear } from "@/app/lib/helpers/dateToString";
import Link from "next/link";


export const ProjectItem = ({project}) => {
    return (
        <div className="project-item">
            <Link href={'/mes-realisations/'+project.id}>
                <img
                    className="project-item-img"
                    src={project.screenDesktopPath}
                    alt={'Capture d\'écran de ' + project.title}
                />
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
                <div>
                    <a className="base-link" href={'/mes-realisations/'+project.id}>Voir plus</a>
                </div>
            </div>
        </div>
    );
}