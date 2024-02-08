'use client';
import { useEffect, useRef } from "react"
import { Button } from "@/app/ui/buttons/Button"
import { reverseAnimation } from "@/app/lib/animations/heroAnimation";
import '@/app/components/Hero/index.css';

export const Hero = () => {

    const refBgA = useRef(null);
    const refBgB = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if(refBgA.current) {
                reverseAnimation(refBgA.current, refBgB.current);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="hero">
            <div ref={refBgA} className="hero-bg a">
            </div>
            <div ref={refBgB} className="hero-bg b">
            </div>
            <div className="hero-text">
                <h1 className="hero-title">Besoin d'un développeur web ?</h1>
                <p className="hero-subtitle">Je suis Ibai Arotçarena, développeur Symfony / React. Je me suis formé en autodidacte depuis 2021.</p>
                <div className="hero-cta-wrapper">
                    <Button>Mes réalisations</Button>
                    <Button additionalClass="secondary">Me contacter</Button>
                </div>
            </div>
        </main>
    )
}