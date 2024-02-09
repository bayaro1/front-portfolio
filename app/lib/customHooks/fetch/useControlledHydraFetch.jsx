import { useState } from "react";
import { ApiError, apiFetch, prepareFetch } from "@/app/lib/api";

export const useControlledHydraFetch = (entrypoint, params = {}, method = 'GET', errorTimeout = null) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const doFetch = async (overwriteParams = null) => {
        setError(null);
        setLoading(true);

        const [url, options] = prepareFetch(
            entrypoint,
            overwriteParams ?? params,
            method
        );

        try {
            const result = await apiFetch(url, options);
            setData(result);
        } catch(e) {
            if(e instanceof ApiError) {
                setError(e.errors);
            } else {
                setError(e);
            } 
            if(errorTimeout) {
                setTimeout(() => {
                    setError(null);
                }, errorTimeout);
            }
            setLoading(false);
        }
        setLoading(false);
    };

    return [doFetch, data, isLoading, error];
}