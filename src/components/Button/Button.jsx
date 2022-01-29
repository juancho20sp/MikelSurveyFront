import React from 'react';

const Button = () => {
    const divStyle = {
        margin: '15px 5px'
    }
  return <div style={divStyle}>
      <button type="button" class="text-white w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Purple to Pink</button>
  </div>;
};

export default Button;
