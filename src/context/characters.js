import { createContext,useState, useEffect } from "react";
import useApi from "../hooks/useApi";
const charactersContext = createContext([]);

const CharactersProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [data, loading, error, fetchData] = useApi();
    
    useEffect (() => {
       fetchData('https://rickandmortyapi.com/api/character/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
       });
    }, []);
    
    useEffect(() => {
        if(!loading && !error) {
            setCharacters(data.results);
        }
    }, [data, loading, error]);
    return (
        <charactersContext.Provider value={[characters]}>
            {children}
        </charactersContext.Provider>
    );
};

export { CharactersProvider };
export default charactersContext;