
import Loading from './loading';
import './ui/index.css';
import { ProjectShow } from './ui/ProjectShow';
import { apiFetch } from '@/app/lib/api';
import { SiteConfig } from '@/app/lib/SiteConfig';

export default async function Page({params: {projectId}}) {

    const project = await apiFetch(SiteConfig.API_URL + '/api/projects/'+projectId, {
        next: {revalidate: 60}
    });

    return (
        <>
            <div className="hero-bis">
                <div className="hero-bis-bg"></div>
            </div>
            <div className="page">
                {
                    <ProjectShow project={project} />
                }
            </div>
        </>
    )
}