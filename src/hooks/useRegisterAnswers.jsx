import React, { useEffect, useState } from 'react';

// Axios
import axios from '../axios';

const useRegisterAnswers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [successful, setSuccesful] = useState(true);

  const postSurvey = async (survey) => {
    setIsLoading(true);

    try {
      const response = await axios.post('/surveys', survey);
    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    postSurvey,
    isLoading,
  };
};

export default useRegisterAnswers;
