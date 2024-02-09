import '@/app/mes-realisations/page.css';
import { ProjectsList } from '@/app/mes-realisations/ui/ProjectsList';

export default function Page() {
    return (
        <>
            <main className="hero-bis">
                <div className="hero-bis-img">
                    <div className="hero-text">
                        <h1 className="hero-title hero-bis-title">Mes réalisations</h1>
                    </div>
                </div>
            </main>
            <ProjectsList />
        </>
    )
}