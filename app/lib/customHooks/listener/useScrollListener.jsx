'use client';
import { useEffect, useState } from "react";

export const useScrollListener = () => {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll)
    }, []);

    const onScroll = () => {
        setScroll(window.scrollY);
    }
    return scroll;
}