'use client';
import { SiteConfig } from '@/app/lib/SiteConfig';
import { useFetchHydra } from '@/app/lib/customHooks/fetch/useFetchHydra';
import { usePathname } from 'next/navigation'
import { ProjectShowSkeleton } from './ui/skeletons/ProjectShowSkeleton';
import './ui/index.css';
import { ProjectShow } from './ui/ProjectShow';

export default function Page() {

    const pathname = usePathname();
    const projectId = pathname.split('mes-realisations/')[1];

    const [project, isLoading, errors, reset] = useFetchHydra(SiteConfig.API_URL + '/api/projects/'+projectId);

    return (
        <>
            <main className="hero-bis">
                <div className="hero-bis-img">
                    <div className="hero-text-bis">
                        <h1 className="hero-title-bis hero-bis-title">{project?.title ?? 'Mes réalisations'}</h1>
                    </div>
                </div>
            </main>
            <div className="page">
                {
                    project ? (
                        <ProjectShow project={project} />
                    ): (
                        <ProjectShowSkeleton />
                    )
                }
            </div>
        </>
    )
}