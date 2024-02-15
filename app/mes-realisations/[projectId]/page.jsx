
import Link from 'next/link';
import './ui/index.css';
import { ProjectShow } from './ui/ProjectShow';
import { apiFetch } from '@/app/lib/api';
import { SiteConfig } from '@/app/lib/SiteConfig';

export default async function Page({params: {projectId}}) {

    const project = await apiFetch(SiteConfig.API_URL + '/api/projects/'+projectId, {
        next: {revalidate: 3600}
    });

    return (
        <>
            <div className="hero-bis">
                <div className="hero-bis-bg"></div>
            </div>
            <div className="page">
                <div className="breadcrumb">
                    <Link href="/" className="breadcrumb-link breadcrumb-link-home">Accueil</Link>
                    <span className="breadcrumb-separator">{'>'}</span>
                    <Link href="/mes-realisations" className="breadcrumb-link">Mes réalisations</Link>
                    <span className="breadcrumb-separator">{'>'}</span>
                    <span className="breadcrumb-item">{project.title}</span>
                </div>
                {
                    <ProjectShow project={project} />
                }
            </div>
        </>
    )
}