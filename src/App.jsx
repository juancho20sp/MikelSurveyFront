// Views
import { MainSurvey } from './views/';

// Components
import { 
  Header,
  Footer,
  Question
 } from './components';

import './App.css';


function App() {
  const questions = [
    {
      id: 0,
      text: 'Question #1',
    },
    {
      id: 1,
      text: 'Question #2',
    },
    {
      id: 2,
      text: 'Question #3',
    }
  ]

  const MainSurveyStyles = {
    // backgroundColor: 'black'
  }

  return (
    <div className="w-screen h-screen bg-gray-200">
      <MainSurvey styles={MainSurveyStyles}>
        <Header />
          <div className='flex-1'>
            {questions.map(question => <Question key={question.id} {...question}/>)
            }
          </div>
        <Footer />
      </MainSurvey>
    </div>
  );
}

export default App;
