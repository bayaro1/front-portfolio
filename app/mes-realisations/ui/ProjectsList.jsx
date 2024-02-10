import { ProjectItem } from "./ProjectItem"

export const ProjectsList = ({projects, count}) => {
    return (
        <>
            <div className="main-subtitle project-index-main-subtitle">
                {count} résultat{count > 1 ? 's': ''}
            </div>
            <div className="project-index">
                {
                    projects.map(project => (
                        <ProjectItem key={project.id} project={project} />
                    ))
                }
            </div>
        </>
    )
}