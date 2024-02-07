import { Button } from "../ui/buttons/Button"

export const Hero = () => {
    return (
        <main className="hero">
            <div className="hero-text">
                <h1 className="hero-title">Besoin d'un développeur web ?</h1>
                <p className="hero-subtitle">Je suis Ibai Arotçarena, passionné du web, développeur autodidacte depuis 2021.</p>
                <div className="hero-cta-wrapper">
                    <Button additionalClass="hero-button">Mes réalisations</Button>
                    <Button additionalClass="hero-button light">Me contacter</Button>
                </div>
            </div>
        </main>
    )
}