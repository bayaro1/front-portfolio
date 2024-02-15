'use client';
 
import { Button } from '../buttons/Button';
 
export default function Error({error, reset}) {

    console.log(error);

    return (
        <div className="error-wrapper">
            <h2 className="error-title">Oups... Une erreur inattendue a eu lieu.</h2>
            {
                reset && (
                    <div className="error-page-link-wrapper">
                        <Button onClick={reset}>
                            Réessayer
                        </Button>
                    </div>
                )
            }
            <div className="error-page-link-wrapper">
                <Button onClick={reset} additionalClass={reset ? 'secondary': ''}>
                    Retour à l&apos;accueil
                </Button>
            </div>
        </div>
    )
}
