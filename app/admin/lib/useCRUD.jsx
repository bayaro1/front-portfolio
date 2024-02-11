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
export const useCRUD = (baseEntrypoint, createEntrypoint = null, updateEntrypoint = null, deleteEntrypoint = null, initialFetch = false) => {
    const [items, dispatch] = useReducer(reducer, []);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(null);

    /**
     * @param {string} params (paramètres GET) 
     */
    const fetchAll = async (params = {}) => {
        setError(null);
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
        setError(null);
        try {
            const createdItem = await apiPreparedFetch(createEntrypoint ?? baseEntrypoint, {}, 'POST');
            dispatch({type: 'CREATE', payload: createdItem});
        } catch(e) {
            setError(e);
        }
    };

    /**
     * @param {number} id (id de l'item à modifier)
     */
    const update = async (id, item) => {
        setError(null);
        try {
            const updatedItem = await apiPreparedFetch((updateEntrypoint ?? baseEntrypoint) + '/' + id, item, 'PATCH');
            dispatch({type: 'UPDATE', target: id, payload: updatedItem});
        } catch(e) {
            setError(e);
        }
    };

    /**
     * @param {number} id (id de l'item à supprimer) 
     */
    const deleteItem = async (id) => {
        setError(null);
        try {
            await apiPreparedFetch((deleteEntrypoint ?? baseEntrypoint) + '/' + id, {}, 'DELETE');
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