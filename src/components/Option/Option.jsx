import React from 'react';

const Option = ({ title, divStyles }) => {
    const selectStyles = {
        border: '2px solid gray',
        width: '100%',
        // outline: 'black'
        // margin: '0 1.5%'
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
        <select name="select" style={selectStyles} className='rounded-lg'>
            {values.map(value => <option key={value.id} value={value.value}>{value.value}</option>)}
        </select>
</div>;
};

export default Option;
