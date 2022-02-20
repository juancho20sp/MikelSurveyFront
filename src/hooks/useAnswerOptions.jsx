import React, { useEffect, useState } from 'react';

// Axios
import axios from '../axios';

const useAnswerOptions = async () => {
    const [loading, setLoading] = useState(true);
    const [options, setOptions] = useState([]);

    try {
        const data = await axios.get('/answers');
        setOptions(data.data);
        setLoading(false);
    } catch (ex) {
        console.error(ex);
    }
    

    // useEffect(() => {
    //     const fetchData = async() => {
    //         const data = await axios.get('/answers');
            
    //         setOptions(data.data);
    //         setLoading(false);
    //     }

    //     fetchData();
    // }, [])
    
    return {
        options,
        loading
    };
}

export default useAnswerOptions;