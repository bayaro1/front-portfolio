import './admin.css';

export default function Layout({children}) {
    return (
        <>
            <div className="hero-bis">
                <div className="hero-bis-bg"></div>
            </div>
            <div className="admin-page page">
                <h1 className="admin-main-title">Administration</h1>
                {children}
            </div>
        </>
    )
}