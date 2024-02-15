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
export const useCRUD = (
        baseEntrypoint, 
        createEntrypoint = null, 
        updateEntrypoint = null, 
        deleteEntrypoint = null, 
        initialFetch = false, 
        fetchAllParams = {}, 
        onUpdateFetchAll = false, 
        onCreateFetchAll = false
    ) => {

    const [items, dispatch] = useReducer(reducer, []);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(null);

    /**
     * @param {string} params (paramètres GET) 
     */
    const fetchAll = async (params = null) => {
        setError(null);
        setLoading(true);
        try {
            const hydraList = await apiPreparedFetch(baseEntrypoint, params ?? fetchAllParams, 'GET');
            dispatch({type: 'FETCH_ALL', payload: hydraList['hydra:member']});
        } catch(e) {
            setError(e);
        }
        setLoading(false);
    };

    const create = async (item) => {
        setError(null);
        try {
            const createdItem = await apiPreparedFetch(createEntrypoint ?? baseEntrypoint, item, 'POST');
            dispatch({type: 'CREATE', payload: createdItem});
            if(onCreateFetchAll) {
                fetchAll();
            }
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
            if(onUpdateFetchAll) {
                fetchAll();
            }
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
            if(e instanceof SyntaxError) {
                //c le cas d'une réponse vide (204)
                dispatch({type: 'DELETE', target: id});
            } else {
                setError(e);
            }
        }
    };
    
    useEffect(() => {
        if(initialFetch) {
            fetchAll();
        }
    }, []);


    return {items, fetchAll, isLoading, error, deleteItem, create, update};
}