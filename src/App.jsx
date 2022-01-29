import React, { useState } from 'react';

// Views
import { MainSurvey } from './views/';

// Components
import { 
  Header,
  Footer,
  Question,
  Button
 } from './components';

import './App.css';


function App() {
  const questions = [
    {
      id: 0,
      text: 'Question #1',
    },
    // {
    //   id: 1,
    //   text: 'Question #2',
    // },
    // {
    //   id: 2,
    //   text: 'Question #3',
    // }
  ]

  const MainSurveyStyles = {
  }

  const [survey, setSurvey] = useState([]);

  return (
    <div className="w-screen h-full bg-gray-200 max-w-full">
      <MainSurvey styles={MainSurveyStyles}>
        <Header />
          <form className='flex-1 p-4'>
            {questions.map(question => <Question key={question.id} {...question}/>)
            }
            <Button />
          </form>
        <Footer />
      </MainSurvey>
    </div>
  );
}

export default App;
