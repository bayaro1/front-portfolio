import './admin.css';

export default function Layout({children}) {
    return (
        <>
            <main className="hero-bis">
                <div className="hero-bis-img">
                    <div className="hero-text-bis">
                        <h1 className="hero-title-bis admin-hero-title-bis">Administration</h1>
                    </div>
                </div>
            </main>
            <div className="admin-page page">
                {children}
            </div>
        </>
    )
}