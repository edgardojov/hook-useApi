import React, {useState, useEffect} from 'react';

export const useApi = (url, options) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState (null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false); 
            }
        };
        fetchData();
    }, [url, options]);

    return { data, loading, error };
};

