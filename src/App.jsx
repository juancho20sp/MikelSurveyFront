import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import BounceLoader from 'react-spinners/BounceLoader';

// Views
import { MainSurvey } from './views/';

// Components
import { Header, Footer, Question, Button } from './components';
import swal from 'sweetalert';

// Hooks
import { useHomePrefetch } from './hooks';

// Axios
import axios from './axios';

import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const MainSurveyStyles = {
    width: '100vw',
  };

  const loaderStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const { isLoading, answerOptions, topics, questions, ranks, setIsLoading } =
    useHomePrefetch();

  const onSubmit = async (data) => {
    const date = new Date().toLocaleDateString("en-US");
    // const date = new Date();
    const rank = data['question-0-select-0'];

    let answers = [];

    // There are 8 index for shared question, we just need to evaluate the first one
    const evaluatedIndexes = [];

    setIsLoading(true);

    Object.keys(data).forEach((key) => {
      const [questionIdLabel, questionId, select, selectId] = key.split('-');

      // Avoid evaluating the rank question
      if (questionId === '0') {
        return;
      }

      // Avoid evaluating the same question 8 times when the question is a shared question
      if (evaluatedIndexes.includes(questionId)) {
        return;
      }

      const answersFromQuestion = Object.keys(data).filter((keyName) =>
        keyName.includes(`question-${questionId}-`)
      );

      const topicsFromAnswer = answersFromQuestion.map((keyName) => {
        const topicId = Number(
          keyName.replace(`question-${questionId}-select-`, '')
        );
        const answerOptionId = data[`question-${questionId}-select-${topicId}`];

        return {
          topicId: Number(topicId),
          answerOptionId: Number(answerOptionId),
        };
      });

      answers = [
        ...answers,
        {
          questionId: Number(questionId),
          topics: topicsFromAnswer,
        },
      ];

      evaluatedIndexes.push(questionId);
    });

    const dataToSend = {
      date,
      rank,
      answers,
    };

    try {
      const response = await axios.post('/surveys', dataToSend);

      swal({
        title: '¡Respuestas registradas!',
        text: 'Gracias por tu tiempo :)',
        icon: 'success',
      }).then(() => window.location.reload());
    } catch (err) {
      console.error(err);

      swal({
        title: 'Algo salió mal',
        text: 'Por favor inténtalo nuevamente',
        icon: 'error',
      });
    } finally {
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  const [survey, setSurvey] = useState([]);

  return (
    <div className='bg-gray-200' id='main' style={MainSurveyStyles}>
      {isLoading && (
        <BounceLoader
          color='#9333ea'
          loading={isLoading}
          css={loaderStyles}
          size={150}
        />
      )}

      {!isLoading && (
        <MainSurvey styles={MainSurveyStyles}>
          <Header />
          <form className='flex-1 p-4' onSubmit={handleSubmit(onSubmit)}>
            {questions.map((question, idx) => (
              <Question
                key={question.id}
                {...question}
                register={register}
                errors={errors}
                idQuestion={idx}
                answerOptions={answerOptions}
                topics={topics}
                ranks={ranks}
              />
            ))}
            <Button />
          </form>
          <Footer />
        </MainSurvey>
      )}
    </div>
  );
}

export default App;
