import React, { useState, useEffect } from 'react';

// Components
import {
    Option
} from '../';

import './Question.css';

const Question = ({text, register, errors, idQuestion}) => {
    const divStyle = {
        border: '1px solid gray',
        margin: '15px 5px',
        padding: '10px',
        display: 'grid',    
        gridTemplateAreas: `"question question question"
                            "a1 a2 a3"
                            "a4 a5 a6"
                            `,
        height: '200px'
    }

    const questionStyle = {
        gridArea: 'question'
    }

    const divStyles = {
        // border: '2px solid blue',
        padding: '5px',
    }

    const options = [
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

    const [error, setError] = useState(false);

    useEffect(() => {
        if (errors.length > 0) {
            const keys = Object.keys(errors);

            alert('oh')

            console.log(JSON.stringify(keys))
        }
    }, [errors])


  return <>
    <div style={divStyle} className='bg-white rounded-lg shadow-lg flex items-center'>
        <p className="question" style={questionStyle}>{text}</p>
        {
            options.map(option => <Option key={option.id} title={option.title} divStyles={divStyles} register={register} id={option.id} idQuestion={idQuestion}/>)
        }
    </div>
    {Object.keys(errors).filter(key => key.includes(`question-${idQuestion}`)).length > 0 && <p>ERROR!</p>}
    </>;
};

export default Question;
