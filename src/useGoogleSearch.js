import { useState, useEffect } from 'react';

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `http://localhost:8000/search/?term=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData();
    }, [term]);

    return { data }
};

export default useGoogleSearch