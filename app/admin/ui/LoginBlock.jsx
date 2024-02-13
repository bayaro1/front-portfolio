import { SiteConfig } from "@/app/lib/SiteConfig";
import { apiPreparedFetch } from "@/app/lib/api";
import { Button } from "@/app/ui/buttons/Button";
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
        setError(null);
        e.preventDefault();
        try {
            const user = await apiPreparedFetch(SiteConfig.API_URL + '/api/login', formData, 'POST');
            setUser(user);
        } catch(e) {
            setError(e);
        }
    }

    const handleLogout = async () => {
        setError(null);
        try {
            await apiPreparedFetch(SiteConfig.API_URL + '/api/logout');
            setUser(false);
        } catch(e) {
            if(e instanceof SyntaxError) {
                //c le cas d'une réponse vide (204)
                setUser(false);
            } else {
                setError(e);
            }
        }
    }



    return (
        <div className="login-block">
            {
                user && (
                    <div className="admin-user-card">
                        {
                            error && <div className="admin-main-error">{error.message}</div>
                        }
                        <div>
                            Connecté en tant que <strong>{user.username}</strong>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <Button additionalClass="secondary" onClick={handleLogout}>Déconnexion</Button>
                        </div>
                    </div>
                )
            }
            {
                user === null && (
                    <div className="admin-user-card">
                        Chargement de l&apos;utilisateur...
                    </div>
                )
            }
            {
                user === false && (
                    <form onSubmit={handleLogin} className="admin-login-form">
                        <div className="admin-login-title">Connexion</div>
                        {
                            error && <div className="admin-main-error">{error.message}</div>
                        }
                        <div className="form-group">
                            <div className="form-label" htmlFor="username">Nom d&apos;utilisateur</div>
                            <input className="form-control" type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <div className="form-label" htmlFor="password">Mot de passe</div>
                            <input className="form-control" type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                        </div>
                        <button className="button">Valider</button>
                    </form>
                )
            }
        </div>
    )


}