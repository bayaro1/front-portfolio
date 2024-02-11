import { apiPreparedFetch } from "@/app/lib/api";
import { useEffect, useReducer, useState } from "react"

const reducer = (items, action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...items, action.payload];
        case 'UPDATE':
            return items.map(s => s.id === action.target ? action.payload: s);
        case 'DELETE':
            return items.filter(s => s.id !== action.target);
    }
}

/**
 * 
 * @param {string} baseEntrypoint 
 * @param {boolean} initialFetch 
 * @returns 
 */
export const useCRUD = (baseEntrypoint, initialFetch = false) => {
    const [items, dispatch] = useReducer(reducer, []);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(null);

    /**
     * @param {string} params (paramètres GET) 
     */
    const fetchAll = async (params = {}) => {
        setLoading(true);
        try {
            const items = await apiPreparedFetch(baseEntrypoint, params, 'GET');
            dispatch({type: 'FETCH_ALL', payload: items});
        } catch(e) {
            setError(e);
        }
        setLoading(false);
    };

    const create = async () => {
        try {
            const createdItem = await apiPreparedFetch(baseEntrypoint, {}, 'POST');
            dispatch({type: 'CREATE', payload: createdItem});
        } catch(e) {
            setError(e);
        }
    };

    /**
     * @param {number} id (id de l'item à modifier)
     */
    const update = async (id, item) => {
        try {
            const updatedItem = await apiPreparedFetch(baseEntrypoint + '/' + id, item, 'PATCH');
            dispatch({type: 'UPDATE', target: id, payload: updatedItem});
        } catch(e) {
            setError(e);
        }
    };

    /**
     * @param {number} id (id de l'item à supprimer) 
     */
    const deleteItem = async (id) => {
        try {
            await apiPreparedFetch(baseEntrypoint + '/' + id, {}, 'DELETE');
            dispatch({type: 'DELETE', target: id});
        } catch(e) {
            setError(e);
        }
    };
    
    useEffect(() => {
        if(initialFetch) {
            fetchAll();
        }
    }, []);


    return {items, fetchAll, isLoading, error, deleteItem, create, update};
}