import {useState} from 'react';

const useApi = (url, options) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState (null);

    const fetchData = async (url, options) => {
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
    
    return [data, loading, error, fetchData];
};

export default useApi;
