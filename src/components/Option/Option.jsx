import React from 'react';
import {
    useAnswerOptions
} from '../../hooks';

const Option = ({ title, divStyles, register, id, idQuestion }) => {
    const selectStyles = {
        border: '2px solid gray',
        width: '100%',
    }

    const paragraphStyles = {

    }

    const values = [
        {
            id: 0,
            value: 'Value 1'
        },
        {
            id: 1,
            value: 'Value 2'
        },
        {
            id: 2,
            value: 'Value 3'
        }
    ]

    

    return <div style={divStyles} className="flex flex-col items-center justify-center">
        <p className='text-md font-semibold text-center'>TOPIC 1</p>
        <select name="select" style={selectStyles} className='rounded-lg' {...register(`question-${idQuestion}-select-${id}`, { required: true })}>
            <option value="">Seleccione una opción</option>
            {/* // $ */}
            {values.map(value => <option key={value.id} value={value.value}>{value.value}</option>)}
            {/* {answerOptions.map(value => <option key={value.id} value={value.answer_value}>{value.answer_value}</option>)} */}
        </select>
</div>;
};

export default Option;
