import { ProjectShowSkeleton } from "./ui/skeletons/ProjectShowSkeleton";

export default function Loading() {
    return (
        <>
            <main className="hero-bis">
                <div className="hero-bis-img">
                    <div className="hero-text-bis">
                        <h1 className="hero-title-bis hero-bis-title">Mes réalisations</h1>
                    </div>
                </div>
            </main>
            <div className="page">
                <ProjectShowSkeleton />
            </div>
        </>
    )
}