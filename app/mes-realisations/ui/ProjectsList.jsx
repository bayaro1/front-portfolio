import { apiFetch } from "@/app/lib/api"
import { ProjectItem } from "./ProjectItem"
import { SiteConfig } from "@/app/lib/SiteConfig"

export const  ProjectsList = async () => {
    
    const projectsHydra = await apiFetch(SiteConfig.API_URL + '/api/projects', {
        next: {revalidate: 3600}
    });
    const count = projectsHydra['hydra:totalItems'];

    return (
        <>
            <div className="main-subtitle project-index-main-subtitle">
                {count} résultat{count > 1 ? 's': ''}
            </div>
            <div className="project-index">
                {
                    projectsHydra['hydra:member'].map(project => (
                        <ProjectItem key={project.id} project={project} />
                    ))
                }
            </div>
        </>
    )
}