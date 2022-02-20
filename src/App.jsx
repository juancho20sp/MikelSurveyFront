import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import BounceLoader from "react-spinners/BounceLoader";

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
  useHomePrefetch
} from './hooks';

import './App.css';


function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const MainSurveyStyles = {
    width: '100vw'
  }

  const loaderStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  const {
    isLoading,
    answerOptions,
    topics,
    questions,
    ranks
  } = useHomePrefetch();

  const [survey, setSurvey] = useState([]);

  return (
    <div className="bg-gray-200" id="main" style={MainSurveyStyles}>
      {isLoading && <BounceLoader color="#9333ea" loading={isLoading} css={loaderStyles} size={150} />}

      {
        !isLoading && 
        <MainSurvey styles={MainSurveyStyles}>
          <Header />
          <form className='flex-1 p-4' onSubmit={handleSubmit(onSubmit)}>
            {questions.map((question, idx) => <Question key={question.id} {...question} register={register} errors={errors} idQuestion={idx} answerOptions={answerOptions} topics={topics}ranks={ranks}/>)
            }
            <Button />

            {/* <pre>
              <code>
                {errors && [errors].length > 0 &&console.log(errors)}
              </code>
            </pre> */}
          </form>
          <Footer />
        </MainSurvey>
      }
    </div>
  );
}

export default App;
