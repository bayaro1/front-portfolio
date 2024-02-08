'use client';
import { useEffect, useState } from 'react';
import { apiFetch } from '@/app/lib/api';


/**
 * 
 * @param {string} entrypoint 
 * @param {string} q
 * @param {number} timeout
 * @returns {array}
 */
export const useFetchQSearch = (entrypoint, field = 'q', q, timeout = 300) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        if(timer) {
            clearTimeout(timer);
        }
        if(q === '') {
            setData(null);
            setLoading(false);
            return;
        }
        setLoading(true);
        const newTimer = setTimeout(async () => {
            try {
                const result = await apiFetch(entrypoint+'?'+field+'='+q);
                const data = result['hydra:member'];
                if(data.length === 0) {
                    setData(null);
                } else {
                    setData(data);
                }
            } catch(e) {
                setError(e);
            }
            setLoading(false);
            setTimer(null);
        }, timeout);
        setTimer(newTimer);
    }, [q]);


    useEffect(() => {
        if(q === '') {
            setData(null);
            setLoading(false);
        }
    }, [data]);


    const resetData = () => {
        setData(null);
        setLoading(false);
    };

    return [data, resetData, loading, error];
}