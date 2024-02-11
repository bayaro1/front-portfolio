export const apiFetch = async (entrypoint, options = {}) => {
    const response = await fetch(entrypoint, {
        method: 'GET',
        headers: {
            "Accept": "application/ld+json",
            "Content-Type": "application/ld+json"
        },
        credentials: 'include',
        ...options
    });
    const data = await response.json();
    if(response.ok) {
        return data;
    }
    if(data.status && data.detail) {
        throw new Error('Error '+data.status+' : '+data.detail);
    } else if(data.error) {
        throw new Error(data.error);
    }
}

export class ApiError {
    data;

    constructor(data) {
        this.data = data;
    }
}


/**
 * 
 * @param {string} entrypoint 
 * @param {object} data 
 * @param {string} method 
 * @returns 
 */
export const prepareFetch = (entrypoint, data, method, options = {}) => {
    let url = entrypoint;

    if(method === 'GET') {
        let params = [];
        for(const [key, value] of Object.entries(data)) {
            params.push(key+'='+value);
        }
        if(params.length > 0) {
            url += '?' + params.join('&');
        }
    } else if(method === 'POST' || method === 'PUT' || method === 'PATCH') {
        options = {
            ...options,
            method: method,
            headers: {
                "Accept": "application/ld+json",
                "Content-Type": method === 'PATCH' ? "application/merge-patch+json": "application/ld+json"
            },
            body: JSON.stringify(data)
        };
    } else if(method === 'DELETE') {
        options = {
            ...options,
            method: method,
        }
    }

    return [url, options];
}



/**
 * 
 * @param {string} entrypoint 
 * @param {Object} data 
 * @param {string} method 
 * @returns {Promise}
 */
export const apiPreparedFetch = (entrypoint, data = {}, method = 'GET', options = {}) => {
    const [url, opts] = prepareFetch(entrypoint, data, method, options);
    return apiFetch(url, opts);
}



/**
 * 
 * @param {string} entrypoint 
 * @param {Object} data {key: value, key: value...} 
 * @returns {string} readyUrl
 */
export const addUrlParams = (entrypoint, data) => {
    const params = [];
    for(const [key, value] of Object.entries(data)) {
        params.push(`${key}=${value}`);
    }
    if(params.length > 0) {
        return entrypoint += '?' + params.join('&');
    }
    return entrypoint;
}

