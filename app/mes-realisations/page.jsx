import { ProjectsListSkeleton } from "./ui/skeletons/ProjectsListSkeleton";
import { ProjectsList } from "./ui/ProjectsList";
import { Suspense } from "react";
import Link from "next/link";

export default function Page() {

    return (
        <>
            <div className="hero-bis">
                <div className="hero-bis-bg"></div>
            </div>
            <div className="page">
                <div className="breadcrumb">
                    <Link href="/" className="breadcrumb-link breadcrumb-link-home">Accueil</Link>
                    <span className="breadcrumb-separator">{'>'}</span>
                    <span className="breadcrumb-item">Mes réalisations</span>
                </div>
                <Suspense fallback={<ProjectsListSkeleton />}>
                    <ProjectsList />
                </Suspense>
            </div>
        </>
    );
}