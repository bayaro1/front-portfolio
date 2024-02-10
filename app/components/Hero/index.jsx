'use client';
import { useEffect, useRef } from "react"
import { Button } from "@/app/ui/buttons/Button"
import { reverseAnimation } from "@/app/lib/animations/heroAnimation";
import '@/app/components/Hero/index.css';
import { Contact } from "@/app/components/Hero/Contact";
import Link from "next/link";

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
                <div className="hero-title-wrapper">
                    <h1 className="hero-title">Besoin d'un développeur web ?</h1>
                    <p className="hero-subtitle">Je suis Ibai Arotçarena, développeur Symfony / React. Je me suis formé en autodidacte depuis 2021.</p>
                </div>
                <div className="hero-cta-wrapper">
                    <Link className="button" href="/mes-realisations">
                        Mes réalisations
                    </Link>
                    <Contact />
                </div>
            </div>
        </main>
    )
}