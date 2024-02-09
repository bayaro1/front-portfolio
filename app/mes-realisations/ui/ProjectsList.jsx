'use client';

import { SiteConfig } from "@/app/lib/SiteConfig";
import { useFetch } from "@/app/lib/customHooks/fetch/useFetch";
import { ProjectsListSkeleton } from "./skeletons/ProjecsListSkeleton";
import './projectsList.css';
import { getMonthAndYear } from "@/app/lib/helpers/dateToString";
import { Comments } from "./Comments";

export const ProjectsList = () => {

    const [projects, count, isLoading, errors, reset] = useFetch(SiteConfig.API_URL + '/api/projects');

    return (
        <div className="projects-list">
            {
                projects ? (
                    <>
                        <div className="main-subtitle">
                            {count} résultat{count > 1 ? 's': ''}
                        </div>
                        <div>
                            {
                                projects.map(project => (
                                    <ProjectItem key={project.id} project={project} />
                                ))
                            }
                        </div>
                    </>
                ): (
                    <ProjectsListSkeleton />
                )
            }
        </div>
    );
}

const ProjectItem = ({project}) => {
    return (
        <div className="project-item">
            <a href={project.url}>
                <img
                    className="project-item-img"
                    src={SiteConfig.API_URL + project.screenDesktopPath}
                    alt={'Capture d\'écran de ' + project.title}
                />
            </a>
            <div className="project-item-body">
                <div className="project-item-header">
                    <h2 className="project-item-title">
                        <a href={project.url}>{project.title}</a>
                    </h2>
                    <div className="chip project-item-date-chip">
                        {getMonthAndYear(project.startedAt)} - {getMonthAndYear(project.endAt)}
                    </div>
                </div>
                <p className="project-item-text">
                    {project.shortDescription}
                </p>
                <p className="project-item-text">
                    {project.longDescription}
                </p>
                <p className="project-item-text project-item-url">
                    <a className="base-link" href={project.url}>{project.url}</a>
                </p>
            </div>
            <Comments projectIri={project['@id']} />
        </div>
    );
}