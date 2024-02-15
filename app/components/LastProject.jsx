import { SiteConfig } from "../lib/SiteConfig";
import { apiFetch } from "../lib/api";
import { ProjectShow } from "../mes-realisations/[projectId]/ui/ProjectShow";

export const LastProject = async () => {

    const lastProject = await apiFetch(SiteConfig.API_URL + '/api/project/last', {
        next: {revalidate: 3600}
      });

    return (
        <ProjectShow project={lastProject} />
    )
}


