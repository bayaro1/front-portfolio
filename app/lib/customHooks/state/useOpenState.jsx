'use client';
import { useEffect, useState } from "react";

/**
 * 
 * @param {boolean} startingState 
 * @returns {array}
 */
export const useOpenState = (startingState = false) => {
    const [isOpen, setOpen] = useState(startingState);
    const open = () => {
        setOpen(true);
    };
    const close = () => {
        setOpen(false);
    };
    useEffect(() => {
        return () => setOpen(startingState);
    }, []);
    return [isOpen, open, close];
}

