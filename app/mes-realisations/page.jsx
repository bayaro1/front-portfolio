'use client';

import { SiteConfig } from "@/app/lib/SiteConfig";
import { useFetch } from "@/app/lib/customHooks/fetch/useFetch";
import { ProjectsListSkeleton } from "./ui/skeletons/ProjectsListSkeleton";
import { ProjectsList } from "./ui/ProjectsList";


export default function Page() {

    const [projects, count, isLoading, errors, reset] = useFetch(SiteConfig.API_URL + '/api/projects');

    return (
        <>
            <main className="hero-bis">
                <div className="hero-bis-img">
                    <div className="hero-text-bis">
                        <h1 className="hero-title-bis">Mes réalisations</h1>
                    </div>
                </div>
            </main>
            <div className="page">
                {
                    projects ? (
                        <ProjectsList projects={projects} count={count} />
                    ): (
                        <ProjectsListSkeleton />
                    )
                }
            </div>
        </>
    );
}