import { useEffect, useState } from "react"
import { apiFetch } from '@/app/lib/api';

/**
 * 
 * @param {string} entrypoint 
 * @param {Object} options 
 * @returns 
 */
export const useFetch = (entrypoint, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        (async () => {
            setLoading(true);
            setErrors(null);
            try {
                const result = await apiFetch(entrypoint, options);
                const list = result['hydra:member'];
                setData(list);
            } catch(e) {
                if(e instanceof ApiError) {
                    setErrors(e.errors);
                } else {
                    console.error(e);
                }
            }
            setLoading(false);
        })();
    }, [entrypoint]);

    const reset = () => {
        setData(null);
    }

    return [data, loading, errors, reset];
}