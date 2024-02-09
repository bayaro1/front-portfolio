import { SiteConfig } from "@/app/lib/SiteConfig"
import { getMonthAndYear } from "@/app/lib/helpers/dateToString"
import { Comments } from "./Comments"

export const ProjectShow = ({project}) => {
    return (
        <div style={{marginTop: '20px'}} className="project-item project-show-item">
            <div className="project-item-header">
                <div className="chip project-item-date-chip">
                    {getMonthAndYear(project.startedAt)} - {getMonthAndYear(project.endAt)}
                </div>
                <p className="project-item-text">
                    {project.shortDescription}
                </p>
            </div>
            <a href={project.url} target="_blank">
                <img
                    className="project-item-img"
                    src={SiteConfig.API_URL + project.screenDesktopPath}
                    alt={'Capture d\'écran de ' + project.title}
                />
            </a>
            <div className="project-item-body">
                <div className="project-item-text">
                    <a href={project.url} target="_blank" className="base-link">
                        {project.url}
                    </a>
                </div>
                <p className="project-item-text">
                    {project.longDescription}
                </p>
            </div>
            {
                <Comments projectIri={project['@id']} />
            }
        </div>
    )
}