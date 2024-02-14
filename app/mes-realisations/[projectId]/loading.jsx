import { ProjectShowSkeleton } from "./ui/skeletons/ProjectShowSkeleton";

export default function Loading() {
    return (
        <>
            <div className="hero-bis">
                <div className="hero-bis-bg"></div>
            </div>
            <div className="page">
                <div style={{margin: '40px 0 40px', width: '400px', maxWidth: '80vw'}}>
                    <div className="skeleton-line"></div>
                </div>
                <ProjectShowSkeleton />
            </div>
        </>
    )
}