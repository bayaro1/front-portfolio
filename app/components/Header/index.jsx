'use client';

import '@/app/components/Header/index.css';
import { Logo } from "@/app/ui/logo/Logo";
import { MobileMenuControl } from '@/app/components/Header/MobileMenuControl';
import { useEffect, useRef, useState } from 'react';
import { useScrollListener } from '@/app/lib/customHooks/listener/useScrollListener';
import { DesktopMenu } from './DesktopMenu';
import { useControlledFetch } from '@/app/lib/customHooks/fetch/useControlledFetch';
import { SiteConfig } from '@/app/lib/SiteConfig';



const HEADER_FIXED_SCROLL_MIN = 70;

const HEADER_SCROLL_DIRECTION_GAP = 20;

const HEADER_SCROLL_LISTENER_INTERVAL = 500;


export const Header = () => {

    const ref = useRef(null);

    const scroll = useScrollListener();

    //si on passe sous 70 de scroll, le header devient fixed
    useEffect(() => {
        if(scroll > HEADER_FIXED_SCROLL_MIN) {
            ref.current.classList.remove('header-static');
            ref.current.classList.remove('from-fixed');
            ref.current.classList.add('header-fixed');
        } else {
            ref.current.classList.remove('header-fixed');
            ref.current.classList.add('header-static');
            ref.current.classList.add('from-fixed');
            ref.current.classList.remove('scroll-up');
            ref.current.classList.remove('scroll-down');
        }
    }, [scroll]);

    //si on remonte -> .scroll-up, si on descend -> .scroll-down
    const [lastScroll, setLastScroll] = useState(0);
    const [lastChange, setLastChange] = useState(Date.now());
    
    useEffect(() => {
        if(Date.now() > (lastChange + HEADER_SCROLL_LISTENER_INTERVAL)) {
            if(scroll > (lastScroll + HEADER_SCROLL_DIRECTION_GAP)) {
                ref.current.classList.remove('scroll-up');
                ref.current.classList.add('scroll-down');
                document.body.classList.remove('scroll-up');
                document.body.classList.add('scroll-down');
            } else if(scroll < (lastScroll - HEADER_SCROLL_DIRECTION_GAP)) {
                ref.current.classList.remove('scroll-down');
                ref.current.classList.add('scroll-up');
                document.body.classList.remove('scroll-down');
                document.body.classList.add('scroll-up');
            }
            setLastScroll(scroll);
            setLastChange(Date.now());
        }
    }, [scroll]);

    
    const [fetchProjects, projects, isLoading, error] = useControlledFetch(SiteConfig.API_URL + '/api/projects');

    return (
        <>
            <header ref={ref} className="header header-static">
                <MobileMenuControl fetchProjects={fetchProjects} projects={projects} />
                <DesktopMenu fetchProjects={fetchProjects} projects={projects} ref={ref} />
                <Logo />
            </header>
        </>
    )
}