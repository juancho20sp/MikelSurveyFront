import React, { useState, useEffect } from 'react';

// Components
import {
    Option
} from '../';

import './Question.css';

const Question = ({text_question, is_shared, register, errors, idQuestion, answerOptions, topics}) => {
    const divStyle = {
        border: '1px solid gray',
        margin: '15px 5px',
        padding: '10px',
        display: 'grid',    
        gridTemplateAreas: `"question question question"
                            "a1 a2 a3"
                            "a4 a5 a6"
                            `,
        height: '100%'
    }

    const questionStyle = {
        gridArea: 'question'
    }

    const divStyles = {
        padding: '5px',
    }

    const mytopics = [
        {
            id: 0,
            text: 'TOPIC 1'
        },
        {
            id: 1,
            text: 'TOPIC 2'
        },
        {
            id: 2,
            text: 'TOPIC 3'
        },
        {
            id: 3,
            text: 'TOPIC 4'
        },
        {
            id: 4,
            text: 'TOPIC 5'
        },
        {
            id: 5,
            text: 'TOPIC 6'
        }
    ]

    const selectStyles = {
        border: '2px solid gray',
        width: '30rem',
        gridArea: 'a2',
        margin: '5px'
    }

    const selectStylesDanger = {
        border: '2px solid red',
        width: '30rem',
        gridArea: 'a2',
        margin: '5px'
    }

    const [error, setError] = useState(false);

    useEffect(() => {
        if (errors.length > 0) {
            const keys = Object.keys(errors);

            console.log(JSON.stringify(keys))
        }
    }, [errors])


    const [selectId, setselectId] = useState(`question-${idQuestion}-select-0}`);

    const isSelectMissing = Object.keys(errors).filter(key => key === selectId).length > 0;

  return <>
    <div style={divStyle} className='bg-white rounded-lg shadow-lg flex items-center'>
        <p className="question" style={questionStyle}>{text_question}</p>
        {/* SINGLE QUESTION */}
        {/* {!is_shared && console.log(topics)} */}
        {!is_shared && <select name="select" style={isSelectMissing ? selectStylesDanger : selectStyles} className='rounded-lg' {...register(selectId, { required: true })}>
            <option value="">Seleccione una opción</option>
            {answerOptions.map(value => <option key={value.id} value={value.answer_value}>{value.text_answer}</option>)}
        </select>}

        {/* SHARED QUESTION */}
        {
            is_shared && 
            topics.filter(topic => topic.title !== 'SHARED').map(option => <Option key={option.id} title={option.title} divStyles={divStyles} register={register} id={option.id} idQuestion={idQuestion} answerOptions={answerOptions} errors={errors}/>)
        }
    </div>
    {Object.keys(errors).filter(key => key.includes(`question-${idQuestion}`)).length > 0 && <p>ERROR!</p>}
    </>;
};

export default Question;
