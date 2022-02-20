import React, { useState } from 'react';
import './Option.css';  

const Option = ({ title, divStyles, register, id, idQuestion, answerOptions, errors }) => {
    const selectStyles = {
        border: '2px solid gray',
        width: '100%',
    }

    const selectStylesDanger = {
        border: '2px solid red',
        width: '100%',
    }

    const paragraphStyles = {

    }

    const [selectId, setselectId] = useState(`question-${idQuestion}-select-${id}`);

    const isSelectMissing = Object.keys(errors).filter(key => key === selectId).length > 0;

    return <div style={divStyles} className="flex flex-col items-center justify-center">
        <p className='text-md font-semibold text-center'>{title}</p>

        <select name="select" style={isSelectMissing ? selectStylesDanger : selectStyles} className='rounded-lg select' {...register(selectId, { required: true })}>
            <option value="">Seleccione una opción</option>
            {answerOptions.map(value => <option key={value.id} value={value.answer_value}>{value.text_answer}</option>)}
        </select>
    </div>;
};

export default Option;
