import { SiteConfig } from "../lib/SiteConfig";
import { apiFetch } from "../lib/api";
import { ProjectShow } from "../mes-realisations/[projectId]/ui/ProjectShow";
import { ProjectShowSkeleton } from "../mes-realisations/[projectId]/ui/skeletons/ProjectShowSkeleton";

export const LastProject = async () => {

    const lastProject = await apiFetch(SiteConfig.API_URL + '/api/project/last', {
        next: {revalidate: 60}
      });

    return (
        <section className="homepage-highlight">
            <ProjectShow project={lastProject} />
        </section>
    )
}


export const LastProjectSkeleton = () => {
    return (
        <section className="homepage-highlight">
            <ProjectShowSkeleton />
        </section>
    )
}