import React, { useEffect, useState } from 'react';

// Axios
import axios from '../axios';

const useAnswerOptions = async () => {    
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const data = await axios.get('/answers');
            
            setOptions(data.data);
        }

        fetchData();
    }, [])
    
    return options;
}

export default useAnswerOptions;