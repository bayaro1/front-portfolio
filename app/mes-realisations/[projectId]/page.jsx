
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
            <main className="hero-bis">
                <div className="hero-bis-img">
                    <div className="hero-text-bis">
                        <h1 className="hero-title-bis hero-bis-title">{project.title}</h1>
                    </div>
                </div>
            </main>
            <div className="page">
                {
                    <ProjectShow project={project} />
                }
            </div>
        </>
    )
}