import React, { useEffect, useState } from 'react';
import axios from '../axios';

import {
    useAnswerOptions,
    useTopics
} from './';

const useHomePrefetch = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [answerOptions, setAnswerOptions] = useState([]);
    const [topics, setTopics] = useState([]);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchData = async() => {    
            try {
                const [
                    myAnswerOptions, 
                    myTopics,
                    myQuestions
                ] = await Promise.all([
                    axios.get('/answers'),
                    axios.get('/topics'),
                    axios.get('/questions')
                ])
    
                setAnswerOptions(myAnswerOptions.data);
                setTopics(myTopics.data);
                setQuestions(myQuestions.data);
    
            } catch(ex){
                console.error(ex);
            } finally {
                setIsLoading(false);
            }
        }
        
        fetchData();
    }, [])
    

    return {
        isLoading,
        answerOptions,
        topics,
        questions
    }
}

export default useHomePrefetch;