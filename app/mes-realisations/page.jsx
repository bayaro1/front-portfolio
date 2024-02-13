import { ProjectsListSkeleton } from "./ui/skeletons/ProjectsListSkeleton";
import { ProjectsList } from "./ui/ProjectsList";
import { Suspense } from "react";


export default function Page() {

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
                <Suspense fallback={<ProjectsListSkeleton />}>
                    <ProjectsList />
                </Suspense>
            </div>
        </>
    );
}