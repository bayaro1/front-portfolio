import { ProjectsListSkeleton } from "./ui/skeletons/ProjectsListSkeleton";
import { ProjectsList } from "./ui/ProjectsList";
import { Suspense } from "react";

export default function Page() {

    return (
        <>
            <div className="hero-bis">
                <div className="hero-bis-bg"></div>
            </div>
            <div className="page">
                <Suspense fallback={<ProjectsListSkeleton />}>
                    <ProjectsList />
                </Suspense>
            </div>
        </>
    );
}