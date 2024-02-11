import { SiteConfig } from "@/app/lib/SiteConfig";
import { apiPreparedFetch } from "@/app/lib/api";
import { useEffect, useState } from "react"

export const LoginBlock = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const fetchUser = async () => {
        try {
            const user = await apiPreparedFetch(SiteConfig.API_URL + '/api/me');
            setUser(user);
        } catch(e) {
            setUser(false);
        }
    }
    useEffect(() => {
        fetchUser();
    }, []);


    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const handleChange = e => {
        setFormData(formData => ({
            ...formData,
            [e.target.name]: e.target.value
        }));
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = await apiPreparedFetch(SiteConfig.API_URL + '/api/login', formData, 'POST');
            setUser(user);
        } catch(e) {
            setError(e);
        }
    }

    const handleLogout = async () => {
        try {
            await apiPreparedFetch(SiteConfig.API_URL + '/api/logout');
            setUser(false);
        } catch(e) {
            setError(e);
        }
    }



    return (
        <div className="login-block">
            {
                error && <div className="admin-main-error">{error.message}</div>
            }
            {
                user && (
                    <div className="admin-user-card">
                        <div>
                            Connecté en tant que <strong>{user.username}</strong>.
                        </div>
                        <div>
                            <button className="admin-table-control" type="button" onClick={handleLogout}>Déconnexion</button>
                        </div>
                    </div>
                )
            }
            {
                user === null && (
                    <div className="admin-user-card">
                        Chargement de l'utilisateur...
                    </div>
                )
            }
            {
                user === false && (
                    <form onSubmit={handleLogin} className="admin-login-form">
                        <div className="admin-login-title">Connexion</div>
                        <div className="form-group">
                            <div className="form-label" htmlFor="username">Nom d'utilisateur</div>
                            <input className="form-control" type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <div className="form-label" htmlFor="password">Mot de passe</div>
                            <input className="form-control" type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                        </div>
                        <button className="button">Connexion</button>
                    </form>
                )
            }
        </div>
    )


}