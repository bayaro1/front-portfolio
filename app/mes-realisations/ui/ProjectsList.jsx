import { ProjectItem } from "./ProjectItem"

export const ProjectsList = ({projects, count}) => {
    return (
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
    )
}