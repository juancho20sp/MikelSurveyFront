import React, { useState } from 'react';
import { useForm } from "react-hook-form";

// Views
import { MainSurvey } from './views/';

// Components
import { 
  Header,
  Footer,
  Question,
  Button
 } from './components';

// Hooks
import {
  useAnswerOptions
} from './hooks';

import './App.css';


function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const questions = [
    {
      id: 0,
      text: 'Question #1',
    },
    {
      id: 1,
      text: 'Question #2',
    },
    // {
    //   id: 2,
    //   text: 'Question #3',
    // }
  ]

  const MainSurveyStyles = {
  }

  const {
    options: answerOptions,
    loading: loadingAnswerOptions
  } = useAnswerOptions();


  const isLoading = () => loadingAnswerOptions;

  const [survey, setSurvey] = useState([]);

  return (
    <div className="w-screen h-full bg-gray-200 max-w-full">
      {isLoading() && <h2>Cargando...</h2>}

      {
        !isLoading() && 
        <MainSurvey styles={MainSurveyStyles}>
          <Header />
          <form className='flex-1 p-4' onSubmit={handleSubmit(onSubmit)}>
            {questions.map((question, idx) => <Question key={question.id} {...question} register={register} errors={errors} idQuestion={idx} answerOptions={answerOptions}/>)
            }
            <Button />

            <pre>
              <code>
                {errors && console.log(errors)}
              </code>
            </pre>
          </form>
          <Footer />
        </MainSurvey>
      }
    </div>
  );
}

export default App;
